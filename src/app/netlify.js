// Helper functions for Netlify-specific configurations
// This file helps with proper asset loading in different environments

export const getAssetPrefix = () => {
  // In production on Netlify, assets are served from the site root
  if (process.env.NEXT_PUBLIC_NETLIFY_ENV === 'production') {
    return '';
  }
  
  // In development, use default paths
  return '';
};

export const getImagePath = (path) => {
  if (!path) return '';
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // For production on Netlify
  if (process.env.NEXT_PUBLIC_NETLIFY_ENV === 'production') {
    return normalizedPath;
  }
  
  // For development
  return normalizedPath;
}; 