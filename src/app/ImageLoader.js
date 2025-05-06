/**
 * Custom image loader that adds the correct basePath for GitHub Pages deployment
 * This ensures images load correctly on GitHub Pages without modifying existing code
 */

export const getImagePath = (src) => {
  const basePrefix = process.env.NODE_ENV === 'production' ? '/Uniform-Blogs' : '';
  
  // Only add the prefix for paths starting with /
  if (src && src.startsWith('/')) {
    return `${basePrefix}${src}`;
  }
  
  return src;
}; 