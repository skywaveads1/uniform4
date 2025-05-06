/**
 * This script finds broken images and fixes their paths for GitHub Pages deployment
 * It runs in the browser and doesn't modify your source code
 */

if (typeof window !== 'undefined') {
  // Function to add repository name to image paths
  const fixImagePaths = () => {
    const isProduction = window.location.hostname !== 'localhost';
    if (!isProduction) return;
    
    const repoName = '/Uniform-Blogs';
    
    // Select all images on the page
    const images = document.querySelectorAll('img');
    
    // For each image, check if it's broken and fix the path
    images.forEach(img => {
      // Skip images that already have the correct path
      if (img.src.includes(repoName)) return;
      
      // Skip external images
      if (!img.src.includes(window.location.hostname)) return;
      
      // Function to fix broken images
      const fixBrokenImage = () => {
        const path = new URL(img.src).pathname;
        if (path.startsWith('/')) {
          img.src = `${repoName}${path}`;
        }
      };
      
      // Fix immediately for images that are already broken
      if (img.complete && img.naturalHeight === 0) {
        fixBrokenImage();
      }
      
      // Setup error handler for images that might fail to load
      img.addEventListener('error', () => {
        fixBrokenImage();
      });
    });
  };
  
  // Run when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixImagePaths);
  } else {
    fixImagePaths();
  }
  
  // Also run when the page is fully loaded (including images)
  window.addEventListener('load', fixImagePaths);
} 