/**
 * Custom loader for Next.js Image component
 * This adds the repository name prefix for GitHub Pages
 */

export default function myImageLoader({ src, width, quality }) {
  // Return absolute URL for local images
  if (src.startsWith('/')) {
    return src;
  }
  
  // Return the complete URL for external images
  return src;
}

/**
 * Helper function to get the correct image path 
 * for both standard images and Next.js Image component
 */
export function getImagePath(src) {
  if (!src) return '';
  
  // Handle GitHub Pages path prefix
  if (process.env.NODE_ENV === 'production' && src.startsWith('/')) {
    return `/Uniform-Blogs${src}`;
  }
  
  return src;
} 