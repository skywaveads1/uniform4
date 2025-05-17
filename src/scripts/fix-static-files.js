/**
 * Fix static files and redirects
 * 
 * This script copies and renames static files to match the requested URLs in the browser.
 * It also creates appropriate redirects for missing JS chunks and images.
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Define the files that need to be copied/created
const filesToFix = [
  // Main app JS file
  {
    source: 'out/_next/static/chunks/main-app-1e563a7a6ab2acb8.js',
    destination: 'out/_next/static/chunks/main-app-dfa93bc5675b0d37.js'
  },
  // Layout JS file
  {
    source: 'out/_next/static/chunks/app/layout-bd446bacac5be2c1.js',
    destination: 'out/_next/static/chunks/app/layout-a1fb5b1f01d65fbe.js'
  },
];

// Ensure all blog pages exist in the out directory
const blogPaths = [
  'out/blog/flight-crew/flight-10',
  'out/blog/flight-crew/flight-5',
];

// Make sure the required chunks exist
const requiredChunks = [
  '2474-89f820909e5088fe.js',
  '2527-64802b446c245079.js'
];

// Make sure the flight crew images exist
const imageFiles = [
  'modern_flight_attendant_fashion.jpeg',
  'cabin_crew_uniforms.jpeg',
  'pilot_attendant_uniforms.jpeg'
];

// Function to create directory if it doesn't exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    console.log(`Creating directory: ${directory}`);
    fs.mkdirSync(directory, { recursive: true });
  }
}

// Function to copy a file
function copyFile(source, destination) {
  try {
    if (fs.existsSync(source)) {
      console.log(`Copying ${source} to ${destination}`);
      fs.copyFileSync(source, destination);
      return true;
    } else {
      console.error(`Source file not found: ${source}`);
      return false;
    }
  } catch (error) {
    console.error(`Error copying ${source} to ${destination}:`, error);
    return false;
  }
}

// Function to create redirects in Netlify config
function updateNetlifyToml() {
  const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
  if (fs.existsSync(netlifyTomlPath)) {
    let content = fs.readFileSync(netlifyTomlPath, 'utf8');
    
    const redirectsToAdd = [];
    
    // Add redirects for JS chunks
    redirectsToAdd.push(`
# Static files redirects
[[redirects]]
  from = "/_next/static/chunks/main-app-dfa93bc5675b0d37.js"
  to = "/_next/static/chunks/main-app-1e563a7a6ab2acb8.js"
  status = 200

[[redirects]]
  from = "/_next/static/chunks/app/layout-a1fb5b1f01d65fbe.js"
  to = "/_next/static/chunks/app/layout-bd446bacac5be2c1.js"
  status = 200

[[redirects]]
  from = "/_next/static/chunks/2474-89f820909e5088fe.js"
  to = "/_next/static/chunks/2474-89f820909e5088fe.js"
  status = 200

[[redirects]]
  from = "/_next/static/chunks/2527-64802b446c245079.js"
  to = "/_next/static/chunks/2527-64802b446c245079.js"
  status = 200
`);
    
    if (!content.includes('Static files redirects')) {
      const insertPosition = content.indexOf('# https://') > -1 
        ? content.indexOf('# https://') 
        : content.length;
      
      content = content.slice(0, insertPosition) + redirectsToAdd.join('') + content.slice(insertPosition);
      fs.writeFileSync(netlifyTomlPath, content, 'utf8');
      console.log('Updated netlify.toml with static file redirects');
    } else {
      console.log('Redirects already exist in netlify.toml');
    }
  } else {
    console.error('netlify.toml file not found');
  }
}

// Function to update the _redirects file
function updateRedirectsFile() {
  const redirectsPath = path.join(process.cwd(), 'public', '_redirects');
  let content = '';
  
  if (fs.existsSync(redirectsPath)) {
    content = fs.readFileSync(redirectsPath, 'utf8');
  }
  
  // Add redirects for static files if they don't exist already
  const redirectsToAdd = [
    '/_next/static/chunks/main-app-dfa93bc5675b0d37.js /_next/static/chunks/main-app-1e563a7a6ab2acb8.js 200',
    '/_next/static/chunks/app/layout-a1fb5b1f01d65fbe.js /_next/static/chunks/app/layout-bd446bacac5be2c1.js 200',
    '/_next/static/chunks/2474-89f820909e5088fe.js /_next/static/chunks/2474-89f820909e5088fe.js 200',
    '/_next/static/chunks/2527-64802b446c245079.js /_next/static/chunks/2527-64802b446c245079.js 200',
  ];
  
  for (const redirect of redirectsToAdd) {
    if (!content.includes(redirect)) {
      content += redirect + '\n';
    }
  }
  
  fs.writeFileSync(redirectsPath, content, 'utf8');
  console.log('Updated _redirects file');
}

// Function to ensure all required files exist
function ensureRequiredFilesExist() {
  // Process JS files
  for (const file of filesToFix) {
    const sourcePath = path.join(process.cwd(), file.source);
    const destPath = path.join(process.cwd(), file.destination);
    
    ensureDirectoryExists(path.dirname(destPath));
    copyFile(sourcePath, destPath);
  }
  
  // Make sure blog directories exist
  for (const blogPath of blogPaths) {
    ensureDirectoryExists(path.join(process.cwd(), blogPath));
    
    // Create an index.html file if it doesn't exist
    const indexPath = path.join(process.cwd(), blogPath, 'index.html');
    if (!fs.existsSync(indexPath)) {
      const categoryPath = blogPath.split('/')[1];
      const slugPath = blogPath.split('/')[2];
      
      // Create a simple HTML file that redirects to the dynamic route
      const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Blog - ${slugPath}</title>
  <meta http-equiv="refresh" content="0;url=/blog/${categoryPath}/${slugPath}/">
  <link rel="canonical" href="/blog/${categoryPath}/${slugPath}/" />
</head>
<body>
  <p>This page has moved to <a href="/blog/${categoryPath}/${slugPath}/">/blog/${categoryPath}/${slugPath}/</a></p>
</body>
</html>`;
      
      fs.writeFileSync(indexPath, html, 'utf8');
      console.log(`Created index.html for ${blogPath}`);
    }
  }
  
  // Make sure required chunk files exist
  for (const chunk of requiredChunks) {
    const chunkPath = path.join(process.cwd(), 'out', '_next', 'static', 'chunks', chunk);
    if (!fs.existsSync(chunkPath)) {
      // Create an empty JS file if it doesn't exist
      fs.writeFileSync(chunkPath, '// Placeholder chunk file', 'utf8');
      console.log(`Created placeholder for ${chunk}`);
    }
  }
  
  // Make sure image files exist
  for (const imageFile of imageFiles) {
    const sourcePath = path.join(process.cwd(), 'public', 'images', 'flight_crew', imageFile);
    const destinationPath = path.join(process.cwd(), 'out', 'images', 'flight_crew', imageFile);
    
    ensureDirectoryExists(path.dirname(destinationPath));
    
    if (fs.existsSync(sourcePath)) {
      copyFile(sourcePath, destinationPath);
    } else {
      console.error(`Image file not found: ${imageFile}`);
    }
  }
}

// Main function
function main() {
  console.log('Starting fix-static-files script...');
  
  // Ensure all required files exist
  ensureRequiredFilesExist();
  
  // Update Netlify config with redirects
  updateNetlifyToml();
  
  // Update _redirects file
  updateRedirectsFile();
  
  console.log('fix-static-files script completed!');
}

// Run the script
main(); 