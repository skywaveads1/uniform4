const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Read the list of images from used_images.txt
const imagesList = fs.readFileSync('used_images.txt', 'utf8')
  .split('\n')
  .filter(line => line.startsWith('/images/'))
  .map(line => line.trim());

console.log(`Found ${imagesList.length} images to optimize`);

// Create optimized images directory if it doesn't exist
const optimizedDir = path.join(__dirname, 'public', 'optimized_images');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Function to optimize an image
async function optimizeImage(imagePath) {
  try {
    const fullPath = path.join(__dirname, 'public', imagePath);
    const dirName = path.dirname(imagePath.replace(/^\/images\//, '/optimized_images/'));
    const fileName = path.basename(imagePath);
    const outputDir = path.join(__dirname, 'public', dirName);
    const outputPath = path.join(outputDir, fileName);

    // Create directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Optimize JPEG/JPG images
    if (fileName.toLowerCase().endsWith('.jpg') || fileName.toLowerCase().endsWith('.jpeg')) {
      await sharp(fullPath)
        .jpeg({ quality: 75, progressive: true, mozjpeg: true })
        .toFile(outputPath);
      console.log(`✓ Optimized JPEG: ${imagePath}`);
    } 
    // Optimize PNG images
    else if (fileName.toLowerCase().endsWith('.png')) {
      await sharp(fullPath)
        .png({ quality: 75, progressive: true, compressionLevel: 9 })
        .toFile(outputPath);
      console.log(`✓ Optimized PNG: ${imagePath}`);
    }
    // Optimize WebP images or convert to WebP
    else if (fileName.toLowerCase().endsWith('.webp')) {
      await sharp(fullPath)
        .webp({ quality: 75 })
        .toFile(outputPath);
      console.log(`✓ Optimized WebP: ${imagePath}`);
    }
    // Also create WebP versions for all images
    const webpOutputPath = outputPath.substring(0, outputPath.lastIndexOf('.')) + '.webp';
    await sharp(fullPath)
      .webp({ quality: 75 })
      .toFile(webpOutputPath);
    console.log(`✓ Created WebP version: ${webpOutputPath}`);

    return {
      original: imagePath,
      optimized: outputPath,
      webp: webpOutputPath,
      success: true
    };
  } catch (error) {
    console.error(`✗ Error optimizing ${imagePath}:`, error.message);
    return {
      original: imagePath,
      success: false,
      error: error.message
    };
  }
}

// Process all images
async function processAllImages() {
  const results = { success: 0, failed: 0, details: [] };
  
  for (const imagePath of imagesList) {
    try {
      const result = await optimizeImage(imagePath);
      if (result.success) {
        results.success++;
      } else {
        results.failed++;
      }
      results.details.push(result);
    } catch (error) {
      console.error(`Error processing ${imagePath}:`, error);
      results.failed++;
      results.details.push({
        original: imagePath,
        success: false,
        error: error.message
      });
    }
  }
  
  // Save optimization report
  fs.writeFileSync(
    'optimization-report.json', 
    JSON.stringify(results, null, 2)
  );
  
  console.log('\nOptimization completed!');
  console.log(`✓ Successfully optimized: ${results.success} images`);
  console.log(`✗ Failed: ${results.failed} images`);
  console.log('Full report saved to: optimization-report.json');
}

// Run the optimization
processAllImages().catch(err => {
  console.error('Fatal error during optimization:', err);
}); 