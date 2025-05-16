const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { minify } = require('terser');
const CleanCSS = require('clean-css');

// Configuration
const OUTPUT_DIR = '.next';
const REPORT_FILE = 'minification-report.json';
const cleanCss = new CleanCSS({
  level: {
    1: {
      specialComments: 0
    },
    2: {
      all: true
    }
  }
});

// Check if required packages are installed
function checkDependencies() {
  try {
    require.resolve('terser');
    require.resolve('clean-css');
  } catch (error) {
    console.error('Missing required dependencies. Please install them:');
    console.error('npm install --save-dev terser clean-css');
    process.exit(1);
  }
}

// Find all JS and CSS files in the output directory
async function findAssets() {
  const jsFiles = glob.sync(`${OUTPUT_DIR}/**/*.js`, {
    ignore: [
      `${OUTPUT_DIR}/**/*.min.js`,
      `${OUTPUT_DIR}/**/node_modules/**`,
      `${OUTPUT_DIR}/**/static/chunks/**`, // Next.js already minifies these
    ]
  });
  
  const cssFiles = glob.sync(`${OUTPUT_DIR}/**/*.css`, {
    ignore: [
      `${OUTPUT_DIR}/**/*.min.css`,
      `${OUTPUT_DIR}/**/node_modules/**`,
      `${OUTPUT_DIR}/**/static/css/**`, // Next.js already minifies these
    ]
  });
  
  return { jsFiles, cssFiles };
}

// Minify JavaScript files
async function minifyJsFiles(files) {
  const results = [];
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const originalSize = Buffer.byteLength(content, 'utf8');
      
      // Skip already minified files
      if (content.split('\n').length <= 2) {
        console.log(`⏩ Skipping already minified: ${file}`);
        results.push({
          file: path.relative(process.cwd(), file),
          originalSize,
          minifiedSize: originalSize,
          savings: 0,
          percentage: 0,
          status: 'skipped'
        });
        continue;
      }
      
      const result = await minify(content, {
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        mangle: true
      });
      
      const minifiedSize = Buffer.byteLength(result.code, 'utf8');
      const savings = originalSize - minifiedSize;
      const percentage = ((savings / originalSize) * 100).toFixed(2);
      
      fs.writeFileSync(file, result.code);
      
      console.log(`✅ JS: ${path.relative(process.cwd(), file)} (${(originalSize/1024).toFixed(2)}KB → ${(minifiedSize/1024).toFixed(2)}KB, saved ${(savings/1024).toFixed(2)}KB, ${percentage}%)`);
      
      results.push({
        file: path.relative(process.cwd(), file),
        originalSize,
        minifiedSize,
        savings,
        percentage,
        status: 'success'
      });
    } catch (error) {
      console.error(`❌ Error minifying ${file}: ${error.message}`);
      results.push({
        file: path.relative(process.cwd(), file),
        error: error.message,
        status: 'error'
      });
    }
  }
  
  return results;
}

// Minify CSS files
async function minifyCssFiles(files) {
  const results = [];
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const originalSize = Buffer.byteLength(content, 'utf8');
      
      // Skip already minified files
      if (content.split('\n').length <= 2) {
        console.log(`⏩ Skipping already minified: ${file}`);
        results.push({
          file: path.relative(process.cwd(), file),
          originalSize,
          minifiedSize: originalSize,
          savings: 0,
          percentage: 0,
          status: 'skipped'
        });
        continue;
      }
      
      const output = cleanCss.minify(content);
      const minifiedSize = Buffer.byteLength(output.styles, 'utf8');
      const savings = originalSize - minifiedSize;
      const percentage = ((savings / originalSize) * 100).toFixed(2);
      
      fs.writeFileSync(file, output.styles);
      
      console.log(`✅ CSS: ${path.relative(process.cwd(), file)} (${(originalSize/1024).toFixed(2)}KB → ${(minifiedSize/1024).toFixed(2)}KB, saved ${(savings/1024).toFixed(2)}KB, ${percentage}%)`);
      
      results.push({
        file: path.relative(process.cwd(), file),
        originalSize,
        minifiedSize,
        savings,
        percentage,
        status: 'success'
      });
    } catch (error) {
      console.error(`❌ Error minifying ${file}: ${error.message}`);
      results.push({
        file: path.relative(process.cwd(), file),
        error: error.message,
        status: 'error'
      });
    }
  }
  
  return results;
}

// Main function
async function minifyAssets() {
  console.log('🔍 Checking dependencies...');
  checkDependencies();
  
  console.log('🔍 Finding assets to minify...');
  const { jsFiles, cssFiles } = await findAssets();
  
  console.log(`\nFound ${jsFiles.length} JavaScript files and ${cssFiles.length} CSS files to minify.`);
  
  console.log('\n--- MINIFYING JAVASCRIPT ---');
  const jsResults = await minifyJsFiles(jsFiles);
  
  console.log('\n--- MINIFYING CSS ---');
  const cssResults = await minifyCssFiles(cssFiles);
  
  // Combine results
  const allResults = [...jsResults, ...cssResults];
  const successfulResults = allResults.filter(r => r.status === 'success');
  const totalOriginalSize = successfulResults.reduce((sum, r) => sum + r.originalSize, 0);
  const totalMinifiedSize = successfulResults.reduce((sum, r) => sum + r.minifiedSize, 0);
  const totalSavings = totalOriginalSize - totalMinifiedSize;
  const totalPercentage = totalOriginalSize > 0 ? ((totalSavings / totalOriginalSize) * 100).toFixed(2) : 0;
  
  // Generate report
  const report = {
    date: new Date().toISOString(),
    summary: {
      totalFiles: allResults.length,
      jsFiles: jsResults.length,
      cssFiles: cssResults.length,
      successfullyMinified: successfulResults.length,
      errors: allResults.filter(r => r.status === 'error').length,
      skipped: allResults.filter(r => r.status === 'skipped').length,
      totalOriginalSize,
      totalMinifiedSize,
      totalSavings,
      totalPercentage
    },
    files: allResults
  };
  
  // Save report
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n=== MINIFICATION COMPLETE ===');
  console.log(`Total files: ${allResults.length} (${jsResults.length} JS, ${cssFiles.length} CSS)`);
  console.log(`Successfully minified: ${successfulResults.length}`);
  console.log(`Skipped: ${allResults.filter(r => r.status === 'skipped').length}`);
  console.log(`Errors: ${allResults.filter(r => r.status === 'error').length}`);
  console.log(`Original size: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Minified size: ${(totalMinifiedSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total saved: ${(totalSavings / (1024 * 1024)).toFixed(2)} MB (${totalPercentage}%)`);
  console.log(`Detailed report saved to: ${REPORT_FILE}`);
}

// Run the minification
minifyAssets().catch(err => {
  console.error('Error during minification process:', err);
  process.exit(1);
}); 