const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Read the used_images.txt file
const imagesList = fs.readFileSync('used_images.txt', 'utf8');

// Extract valid image paths
const imagePaths = imagesList
  .split('\n')
  .filter(line => line.startsWith('/images/'))
  .map(line => line.trim());

console.log(`Found ${imagePaths.length} images to optimize...`);

// Function to optimize a single image
async function optimizeImage(imagePath) {
  const fullPath = path.join('public', imagePath);
  
  try {
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${fullPath}`);
      return false;
    }
    
    // Get original file size
    const originalStats = fs.statSync(fullPath);
    const originalSize = originalStats.size;
    
    // Check if the file is JPEG or PNG
    const ext = path.extname(imagePath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(fullPath)
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(fullPath + '.optimized');
    } else if (ext === '.png') {
      await sharp(fullPath)
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(fullPath + '.optimized');
    } else {
      console.log(`⚠️ Skipping file with unsupported extension: ${fullPath}`);
      return false;
    }
    
    // Get optimized file size
    const optimizedStats = fs.statSync(fullPath + '.optimized');
    const optimizedSize = optimizedStats.size;
    
    // Only replace if the optimization reduced the file size
    if (optimizedSize < originalSize) {
      // Backup the original file
      fs.renameSync(fullPath, fullPath + '.bak');
      // Replace with the optimized version
      fs.renameSync(fullPath + '.optimized', fullPath);
      
      const savingsPercent = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
      const savedKB = ((originalSize - optimizedSize) / 1024).toFixed(2);
      console.log(`✅ Optimized: ${imagePath} (${(originalSize/1024).toFixed(2)}KB → ${(optimizedSize/1024).toFixed(2)}KB, saved ${savedKB}KB, ${savingsPercent}%)`);
      return true;
    } else {
      // Remove the optimized file if it's larger than the original
      fs.unlinkSync(fullPath + '.optimized');
      console.log(`⚠️ Skipped: ${imagePath} (optimization did not reduce file size)`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${imagePath}: ${error.message}`);
    // Clean up any temporary files
    if (fs.existsSync(fullPath + '.optimized')) {
      try {
        fs.unlinkSync(fullPath + '.optimized');
      } catch (e) {
        // Ignore cleanup errors
      }
    }
    return false;
  }
}

// Process all images
async function optimizeAllImages() {
  let successCount = 0;
  let errorCount = 0;
  let skippedCount = 0;
  let totalSavedBytes = 0;
  
  // Process images in batches to avoid overwhelming the system
  const BATCH_SIZE = 3;
  
  for (let i = 0; i < imagePaths.length; i += BATCH_SIZE) {
    const batch = imagePaths.slice(i, i + BATCH_SIZE);
    const batchNumber = Math.floor(i/BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(imagePaths.length/BATCH_SIZE);
    console.log(`\nProcessing batch ${batchNumber} of ${totalBatches}...`);
    
    // Process each image in the batch sequentially to avoid memory issues
    for (const imagePath of batch) {
      try {
        const fullPath = path.join('public', imagePath);
        const originalSize = fs.existsSync(fullPath) ? fs.statSync(fullPath).size : 0;
        
        const result = await optimizeImage(imagePath);
        
        if (result === true) {
          successCount++;
          const newSize = fs.statSync(fullPath).size;
          const savedBytes = originalSize - newSize;
          totalSavedBytes += savedBytes;
        } else if (result === false) {
          skippedCount++;
        } else {
          errorCount++;
        }
      } catch (err) {
        console.error(`Unexpected error processing ${imagePath}: ${err.message}`);
        errorCount++;
      }
    }
  }
  
  const totalSavedMB = (totalSavedBytes / (1024 * 1024)).toFixed(2);
  
  console.log('\n--- OPTIMIZATION COMPLETE ---');
  console.log(`Total images processed: ${imagePaths.length}`);
  console.log(`Successfully optimized: ${successCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Total space saved: ${totalSavedMB} MB`);
  
  // Provide instructions for restoring backups if needed
  if (successCount > 0) {
    console.log('\nBackup files (.bak) have been created for all optimized images.');
    console.log('If you need to restore the original images, you can run:');
    console.log('  node restore-backups.js');
  }
}

// Run the optimization
optimizeAllImages().catch(err => {
  console.error('Error during optimization process:', err);
}); 