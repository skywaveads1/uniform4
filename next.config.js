/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/app/image-loader.js',
  },
  // Add basePath and assetPrefix for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Uniform-Blogs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Uniform-Blogs/' : '',
  // Disable including extra files like favicon and manifest files
  skipTrailingSlashRedirect: true,
  // Needed for static export
  output: 'export',
}

module.exports = nextConfig 