const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const IMAGE_QUALITY = {
  jpeg: 80,
  jpg: 80,
  png: 80,
  webp: 75
};

const PUBLIC_DIR = 'public';
const OPTIMIZATION_REPORT = 'optimization-report.json';

// Get all image files in public directory
async function getAllImages() {
  console.log('🔍 Finding all images in public directory...');
  
  return glob.sync(`${PUBLIC_DIR}/**/*.+(jpg|jpeg|png|gif)`, {
    ignore: [`${PUBLIC_DIR}/**/*.webp`, `${PUBLIC_DIR}/**/*.bak`, `${PUBLIC_DIR}/**/*.optimized`]
  });
}

// Function to optimize a single image
async function optimizeImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase().replace('.', '');
    const baseDir = path.dirname(imagePath);
    const baseName = path.basename(imagePath, path.extname(imagePath));
    const originalStats = fs.statSync(imagePath);
    const originalSize = originalStats.size;
    
    // Create backup of original if it doesn't exist
    const backupPath = path.join(baseDir, `${baseName}.original.${ext}`);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(imagePath, backupPath);
    }
    
    // Optimize original format (jpg/png)
    const optimizedImagePath = path.join(baseDir, `${baseName}.optimized.${ext}`);
    let pipeline = sharp(imagePath);
    
    // Resize images that are unreasonably large (>2000px on any dimension)
    const metadata = await pipeline.metadata();
    const MAX_DIMENSION = 2000;
    
    if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) {
      const resizeOptions = {};
      if (metadata.width > metadata.height && metadata.width > MAX_DIMENSION) {
        resizeOptions.width = MAX_DIMENSION;
      } else if (metadata.height > MAX_DIMENSION) {
        resizeOptions.height = MAX_DIMENSION;
      }
      pipeline = pipeline.resize(resizeOptions);
    }
    
    // Apply format-specific optimizations
    if (ext === 'jpg' || ext === 'jpeg') {
      await pipeline
        .jpeg({ 
          quality: IMAGE_QUALITY.jpeg, 
          mozjpeg: true, 
          trellisQuantisation: true,
          overshootDeringing: true,
          optimizeScans: true
        })
        .toFile(optimizedImagePath);
    } else if (ext === 'png') {
      await pipeline
        .png({ 
          compressionLevel: 9, 
          adaptiveFiltering: true, 
          palette: true,
          quality: IMAGE_QUALITY.png
        })
        .toFile(optimizedImagePath);
    } else {
      // For GIF and other formats, just use basic optimization
      await pipeline.toFile(optimizedImagePath);
    }
    
    // Also create WebP version
    const webpPath = path.join(baseDir, `${baseName}.webp`);
    await sharp(imagePath)
      .webp({ 
        quality: IMAGE_QUALITY.webp,
        effort: 6,
        smartSubsample: true,
        reductionEffort: 6
      })
      .toFile(webpPath);
    
    // Get optimized file sizes
    const optimizedStats = fs.statSync(optimizedImagePath);
    const optimizedSize = optimizedStats.size;
    const webpStats = fs.statSync(webpPath);
    const webpSize = webpStats.size;
    
    // Only replace original if optimization reduced file size
    if (optimizedSize < originalSize) {
      fs.renameSync(optimizedImagePath, imagePath);
      const savings = originalSize - optimizedSize;
      const savingsPercent = ((savings / originalSize) * 100).toFixed(2);
      console.log(`✅ Optimized: ${path.relative(PUBLIC_DIR, imagePath)} (${(originalSize/1024).toFixed(2)}KB → ${(optimizedSize/1024).toFixed(2)}KB, saved ${(savings/1024).toFixed(2)}KB, ${savingsPercent}%)`);
    } else {
      fs.unlinkSync(optimizedImagePath);
      console.log(`⚠️ Skipped: ${path.relative(PUBLIC_DIR, imagePath)} (optimization did not reduce file size)`);
    }
    
    // Log WebP savings
    const webpSavings = originalSize - webpSize;
    const webpSavingsPercent = ((webpSavings / originalSize) * 100).toFixed(2);
    console.log(`🌐 WebP: ${path.relative(PUBLIC_DIR, webpPath)} (${(webpSize/1024).toFixed(2)}KB, saved ${(webpSavings/1024).toFixed(2)}KB, ${webpSavingsPercent}%)`);
    
    return {
      originalPath: path.relative(PUBLIC_DIR, imagePath),
      originalSize,
      optimizedSize: optimizedSize < originalSize ? optimizedSize : originalSize,
      webpPath: path.relative(PUBLIC_DIR, webpPath),
      webpSize,
      originalSaved: originalSize - (optimizedSize < originalSize ? optimizedSize : originalSize),
      webpSaved: originalSize - webpSize
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${imagePath}: ${error.message}`);
    return {
      originalPath: path.relative(PUBLIC_DIR, imagePath),
      error: error.message
    };
  }
}

// Process all images with better batching
async function optimizeAllImages() {
  const imageFiles = await getAllImages();
  console.log(`Found ${imageFiles.length} images to optimize`);
  
  let successCount = 0;
  let errorCount = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let totalWebpSize = 0;
  const results = [];
  
  // Process images in batches
  const BATCH_SIZE = 5;
  const totalBatches = Math.ceil(imageFiles.length / BATCH_SIZE);
  
  for (let i = 0; i < imageFiles.length; i += BATCH_SIZE) {
    const batch = imageFiles.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    
    console.log(`\nProcessing batch ${batchNum}/${totalBatches} (${batch.length} images)...`);
    
    // Process batch in parallel
    const batchResults = await Promise.all(
      batch.map(async (imagePath) => {
        try {
          return await optimizeImage(imagePath);
        } catch (err) {
          console.error(`Unexpected error processing ${imagePath}: ${err.message}`);
          errorCount++;
          return { originalPath: path.relative(PUBLIC_DIR, imagePath), error: err.message };
        }
      })
    );
    
    // Add batch results to overall results
    for (const result of batchResults) {
      if (!result.error) {
        successCount++;
        totalOriginalSize += result.originalSize;
        totalOptimizedSize += result.optimizedSize;
        totalWebpSize += result.webpSize;
      } else {
        errorCount++;
      }
      results.push(result);
    }
  }
  
  // Generate report
  const report = {
    date: new Date().toISOString(),
    summary: {
      totalImages: imageFiles.length,
      successfullyOptimized: successCount,
      errors: errorCount,
      totalOriginalSize: totalOriginalSize,
      totalOptimizedSize: totalOptimizedSize,
      totalWebpSize: totalWebpSize,
      totalOriginalSaved: totalOriginalSize - totalOptimizedSize,
      totalWebpSaved: totalOriginalSize - totalWebpSize,
      percentOriginalSaved: ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(2),
      percentWebpSaved: ((totalOriginalSize - totalWebpSize) / totalOriginalSize * 100).toFixed(2)
    },
    images: results
  };
  
  // Save report
  fs.writeFileSync(OPTIMIZATION_REPORT, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n=== OPTIMIZATION COMPLETE ===');
  console.log(`Total images: ${imageFiles.length}`);
  console.log(`Successfully optimized: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Total original size: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total optimized size: ${(totalOptimizedSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total WebP size: ${(totalWebpSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Space saved (original formats): ${((totalOriginalSize - totalOptimizedSize) / (1024 * 1024)).toFixed(2)} MB (${report.summary.percentOriginalSaved}%)`);
  console.log(`Space saved (WebP): ${((totalOriginalSize - totalWebpSize) / (1024 * 1024)).toFixed(2)} MB (${report.summary.percentWebpSaved}%)`);
  console.log(`Detailed report saved to: ${OPTIMIZATION_REPORT}`);
  
  // Instructions for WebP usage
  console.log('\n=== NEXT STEPS ===');
  console.log('WebP images have been created alongside the original formats.');
  console.log('To use them in your HTML, you can use the <picture> element:');
  console.log('\n<picture>');
  console.log('  <source srcset="image.webp" type="image/webp">');
  console.log('  <img src="image.jpg" alt="Description">');
  console.log('</picture>');
  
  console.log('\nOr update your Next.js Image component to automatically use WebP:');
  console.log("Update the next.config.js file to enable image optimization:");
  console.log('  images: {');
  console.log('    formats: ["image/webp"]');
  console.log('  }');
}

// Run the optimization
optimizeAllImages().catch(err => {
  console.error('Error during optimization process:', err);
  process.exit(1);
}); 