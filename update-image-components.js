const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SRC_DIR = 'src';
const REPORT_FILE = 'image-component-update-report.json';

// Find all JS and TSX files in the source directory
async function findSourceFiles() {
  console.log('🔍 Finding source files with Image components...');
  
  const files = glob.sync(`${SRC_DIR}/**/*.{js,jsx,ts,tsx}`, {
    ignore: [
      `${SRC_DIR}/**/node_modules/**`,
      `${SRC_DIR}/**/_*.{js,jsx,ts,tsx}`,
      `${SRC_DIR}/**/*.d.ts`,
    ]
  });
  
  return files;
}

// Check if a file contains a Next.js Image component
function fileContainsImageComponent(content) {
  // Look for import statement
  const hasImport = /<Image\s|import\s+(\{\s*)?Image(\s*\})?\s+from\s+['"](next\/image|next)['"]/.test(content);
  // Look for Image component usage
  const hasComponent = /<Image\s/.test(content);
  
  return hasImport || hasComponent;
}

// Update Image components to include sizes attribute and priority loading when appropriate
function updateImageComponents(content) {
  let updatedContent = content;
  
  // Count original image components
  const originalComponents = (content.match(/<Image\s+[^>]+>/g) || []).length;
  
  // Update Image components without sizes attribute
  updatedContent = updatedContent.replace(
    /<Image\s+([^>]+)>/g,
    (match, attributes) => {
      // Skip if already has sizes attribute
      if (attributes.includes('sizes=')) {
        return match;
      }
      
      // Add sizes attribute based on width if present
      let width = attributes.match(/width=["']?(\d+)["']?/);
      if (width) {
        width = parseInt(width[1], 10);
        const sizes = width <= 640 ? '(max-width: 640px) 100vw, 640px' :
                     width <= 768 ? '(max-width: 768px) 100vw, 768px' :
                     width <= 1024 ? '(max-width: 1024px) 100vw, 1024px' : '100vw';
        return `<Image sizes="${sizes}" ${attributes}>`;
      }
      
      // Add default sizes if no width specified
      return `<Image sizes="100vw" ${attributes}>`;
    }
  );
  
  // Add priority attribute for images at the top of the viewport (hero images)
  updatedContent = updatedContent.replace(
    /<Image\s+([^>]*)className=["']([^"']*)(hero|banner|header)([^"']*)["']([^>]*)>/gi,
    (match, before, classStart, heroClass, classEnd, after) => {
      // Skip if already has priority attribute
      if (match.includes('priority') || match.includes('loading=')) {
        return match;
      }
      return `<Image ${before}className="${classStart}${heroClass}${classEnd}" priority ${after}>`;
    }
  );
  
  // Count updated components
  const updatedComponents = (updatedContent.match(/<Image\s+[^>]+>/g) || []).length;
  
  return {
    updatedContent,
    originalComponents,
    updatedComponents
  };
}

// Process a single file
async function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip files that don't contain Image components
    if (!fileContainsImageComponent(content)) {
      return {
        file: path.relative(process.cwd(), filePath),
        status: 'skipped',
        reason: 'No Image components found'
      };
    }
    
    // Update Image components
    const { updatedContent, originalComponents, updatedComponents } = updateImageComponents(content);
    
    // Skip if no changes made
    if (content === updatedContent) {
      return {
        file: path.relative(process.cwd(), filePath),
        status: 'skipped',
        reason: 'No updates needed',
        components: originalComponents
      };
    }
    
    // Write updated content back to file
    fs.writeFileSync(filePath, updatedContent);
    
    console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)} (${originalComponents} Image components)`);
    return {
      file: path.relative(process.cwd(), filePath),
      status: 'updated',
      componentsOriginal: originalComponents,
      componentsUpdated: updatedComponents
    };
  } catch (error) {
    console.error(`❌ Error processing ${filePath}: ${error.message}`);
    return {
      file: path.relative(process.cwd(), filePath),
      status: 'error',
      error: error.message
    };
  }
}

// Main function
async function updateImageComponentsInProject() {
  console.log('🔍 Finding files to update...');
  const sourceFiles = await findSourceFiles();
  
  console.log(`\nFound ${sourceFiles.length} source files to check.`);
  
  const results = [];
  for (const filePath of sourceFiles) {
    const result = await processFile(filePath);
    results.push(result);
  }
  
  // Generate report
  const updatedCount = results.filter(r => r.status === 'updated').length;
  const skippedCount = results.filter(r => r.status === 'skipped').length;
  const errorCount = results.filter(r => r.status === 'error').length;
  
  const report = {
    date: new Date().toISOString(),
    summary: {
      totalFiles: sourceFiles.length,
      filesWithUpdates: updatedCount,
      filesSkipped: skippedCount,
      filesWithErrors: errorCount,
    },
    files: results
  };
  
  // Save report
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n=== IMAGE COMPONENT UPDATE COMPLETE ===');
  console.log(`Total files checked: ${sourceFiles.length}`);
  console.log(`Files updated: ${updatedCount}`);
  console.log(`Files skipped: ${skippedCount}`);
  console.log(`Files with errors: ${errorCount}`);
  console.log(`Detailed report saved to: ${REPORT_FILE}`);
  
  // Instructions
  console.log('\n=== NEXT STEPS ===');
  console.log('The Image components have been updated with:');
  console.log('1. "sizes" attribute for responsive sizing');
  console.log('2. "priority" attribute for images likely to be in the viewport on page load');
  console.log('3. WebP format will be used automatically when available');
  console.log('\nTest your website to ensure all images load correctly.');
}

// Run the update
updateImageComponentsInProject().catch(err => {
  console.error('Error during image component update process:', err);
  process.exit(1);
}); 