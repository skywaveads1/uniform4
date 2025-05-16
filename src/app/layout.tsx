import { metadata } from './metadata';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Noto_Kufi_Arabic } from 'next/font/google';
import Script from 'next/script';
import PerformanceOptimizations from './components/PerformanceOptimizations';

// Initialize the Noto Kufi Arabic font with display swap for better loading
const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-kufi-arabic',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={notoKufiArabic.className}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Manifest for PWA capabilities */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Meta theme color */}
        <meta name="theme-color" content="#1e40af" />
        
        {/* Performance optimization component */}
        <PerformanceOptimizations />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Analytics script with delayed load for better performance */}
        <Script
          id="analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              // Add your analytics code here
              console.log('Analytics loaded');
            `
          }}
        />
      </body>
    </html>
  );
} 