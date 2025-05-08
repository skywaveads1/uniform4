/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net'],
    unoptimized: process.env.NODE_ENV === 'production',
    loader: 'default',
    // Remove loaderFile to use default Next.js image loader
  },
  // Remove basePath and assetPrefix as they cause issues on Netlify
  // basePath: process.env.NODE_ENV === 'production' ? '/Uniform-Blogs' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Uniform-Blogs/' : '',
  skipTrailingSlashRedirect: true,
  // Remove static export as Netlify plugin handles SSR
  // output: 'export',
}

module.exports = nextConfig 