/**
 * Custom loader for Next.js Image component
 * This adds the repository name prefix for GitHub Pages
 */

export default function customLoader({ src, width, quality }) {
  // Handle GitHub Pages path prefix
  if (process.env.NODE_ENV === 'production' && src.startsWith('/')) {
    src = `/Uniform-Blogs${src}`;
  }
  
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