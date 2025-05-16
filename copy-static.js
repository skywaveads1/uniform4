const fs = require('fs');
const path = require('path');

// Create out directory if it doesn't exist
if (!fs.existsSync('out')) {
  fs.mkdirSync('out', { recursive: true });
  console.log('Created out directory');
}

// Copy robots.txt and sitemap.xml to out directory
try {
  if (fs.existsSync('public/robots.txt')) {
    fs.copyFileSync('public/robots.txt', 'out/robots.txt');
    console.log('✅ Copied robots.txt to out directory');
  }
  
  if (fs.existsSync('public/sitemap.xml')) {
    fs.copyFileSync('public/sitemap.xml', 'out/sitemap.xml');
    console.log('✅ Copied sitemap.xml to out directory');
  } else if (fs.existsSync('sitemap.xml')) {
    fs.copyFileSync('sitemap.xml', 'out/sitemap.xml');
    console.log('✅ Copied sitemap.xml to out directory');
  }
  
  // Ensure optimized_images directory exists in out
  if (!fs.existsSync('out/optimized_images')) {
    fs.mkdirSync('out/optimized_images', { recursive: true });
    console.log('Created out/optimized_images directory');
  }
  
  console.log('✅ All required static files copied to out directory');
} catch (error) {
  console.error('❌ Error copying static files:', error);
} 