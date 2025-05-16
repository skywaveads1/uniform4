/**
 * Custom loader for Next.js Image component
 * This adds support for various image paths and error handling
 */

export default function myImageLoader({ src, width, quality }) {
  try {
    // Handle undefined or null src
    if (!src) {
      console.warn("Image source is missing");
      return '/placeholder/default-image.jpg';
    }
    
    // Return absolute URL for local images
    if (src.startsWith('/')) {
      // Add width and quality parameters if provided
      const params = [];
      if (width) params.push(`w=${width}`);
      if (quality) params.push(`q=${quality || 75}`);
      
      // If there are parameters, add them as query string
      const queryString = params.length > 0 ? `?${params.join('&')}` : '';
      
      return `${src}${queryString}`;
    }
    
    // Return the complete URL for external images
    return src;
  } catch (error) {
    // In case of any errors, return a fallback image
    console.warn("Error in image loader:", error);
    return '/placeholder/error-image.jpg';
  }
}

/**
 * Helper function to get the correct image path 
 * for both standard images and Next.js Image component
 */
export function getImagePath(src) {
  try {
    // Handle undefined or null src
    if (!src) return '/placeholder/default-image.jpg';
    
    // Return the original path for non-production environments or external URLs
    if (src.startsWith('http') || process.env.NODE_ENV !== 'production') {
      return src;
    }
    
    // Handle paths for production - if needed for specific hosting platforms
    if (process.env.NODE_ENV === 'production' && src.startsWith('/')) {
      // For Netlify, just return the path as is
      return src;
    }
    
    return src;
  } catch (error) {
    // In case of any errors, return a fallback image
    console.warn("Error in getImagePath:", error);
    return '/placeholder/error-image.jpg';
  }
} 