const fs = require('fs');
const path = require('path');

// Find all .bak files in the public directory recursively
function findBackupFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(findBackupFiles(filePath));
    } else if (file.endsWith('.bak')) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Restore all backup files
function restoreBackups() {
  console.log('Looking for backup files...');
  const backupFiles = findBackupFiles(path.join(__dirname, 'public'));
  
  if (backupFiles.length === 0) {
    console.log('No backup files found.');
    return;
  }
  
  console.log(`Found ${backupFiles.length} backup files to restore.`);
  
  let restored = 0;
  let errors = 0;
  
  for (const backupFile of backupFiles) {
    try {
      const originalFile = backupFile.replace('.bak', '');
      
      // Check if the original file exists
      if (fs.existsSync(originalFile)) {
        // Remove the current file
        fs.unlinkSync(originalFile);
      }
      
      // Rename the backup to the original filename
      fs.renameSync(backupFile, originalFile);
      console.log(`✅ Restored: ${originalFile.replace(path.join(__dirname, 'public'), '')}`);
      restored++;
    } catch (error) {
      console.error(`❌ Error restoring ${backupFile}: ${error.message}`);
      errors++;
    }
  }
  
  console.log('\n--- RESTORE COMPLETE ---');
  console.log(`Total backup files: ${backupFiles.length}`);
  console.log(`Successfully restored: ${restored}`);
  console.log(`Errors: ${errors}`);
}

// Execute the restore function
restoreBackups(); 