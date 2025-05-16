/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'yourdomain.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 hours cache for images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Required when using output: 'export'
  },
  skipTrailingSlashRedirect: true,
  // i18n removed because it's not compatible with output: export
  poweredByHeader: false,
  compress: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  
  // Performance optimization
  experimental: {
    optimizeCss: true, // Optimize CSS
    optimizePackageImports: ['react-icons', 'lucide-react'],
    scrollRestoration: true, // Restore scroll position on navigation
  },
  
  // Asset optimization
  webpack: (config, { isServer }) => {
    // Enable gzip compression
    config.optimization.minimize = true;
    
    // Handle SVG files as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
}

module.exports = withBundleAnalyzer(nextConfig) 