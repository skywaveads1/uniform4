/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // This is needed for static export
  },
  // Configure asset paths for different environments
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_SITE_URL || '' 
    : '',
  basePath: '',
  trailingSlash: true, // Add trailing slashes to make paths consistent
};

module.exports = nextConfig; 