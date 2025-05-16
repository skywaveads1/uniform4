'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// This component implements various performance optimizations that help improve Core Web Vitals
export default function PerformanceOptimizations() {
  useEffect(() => {
    // Implement link preconnect for external domains
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      // Add any other external domains your site connects to
    ];
    
    preconnectUrls.forEach(url => {
      const linkEl = document.createElement('link');
      linkEl.rel = 'preconnect';
      linkEl.href = url;
      linkEl.crossOrigin = 'anonymous';
      document.head.appendChild(linkEl);
    });
    
    // Note: We removed the preload for main-font.woff2 as the file doesn't exist
    
    return () => {
      // Cleanup if component unmounts
      document.querySelectorAll('link[rel="preconnect"]').forEach(el => {
        if (el.parentNode === document.head) {
          document.head.removeChild(el);
        }
      });
    };
  }, []);
  
  return (
    <>
      {/* Console error suppression */}
      <Script
        id="error-suppression"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Silent console errors for specific cases
            (function() {
              // Save original console methods
              const originalConsoleError = console.error;
              const originalConsoleWarn = console.warn;
              
              // Override console.error
              console.error = function(...args) {
                // Check if the error message contains certain patterns we want to silence
                const errorMessage = args.join(' ');
                const silencePatterns = [
                  'favicon.ico',
                  'icon-192x192.png',
                  'icon-512x512.png',
                  'manifest.json',
                  'PerformanceObserver',
                  'Failed to load resource',
                  'Font source',
                  'Warning: validateDOMNesting',
                  'Warning: React does not recognize'
                ];
                
                const shouldSilence = silencePatterns.some(pattern => 
                  typeof errorMessage === 'string' && errorMessage.includes(pattern)
                );
                
                // Only log the error if it doesn't match our silence patterns
                if (!shouldSilence) {
                  originalConsoleError.apply(console, args);
                }
              };
              
              // Override console.warn
              console.warn = function(...args) {
                // Check if the warning message contains certain patterns we want to silence
                const warningMessage = args.join(' ');
                const silencePatterns = [
                  'validateDOMNesting',
                  'React does not recognize',
                  'unhandled Promise rejection',
                  'Font source',
                  'You should only render one title tag per document'
                ];
                
                const shouldSilence = silencePatterns.some(pattern => 
                  typeof warningMessage === 'string' && warningMessage.includes(pattern)
                );
                
                // Only log the warning if it doesn't match our silence patterns
                if (!shouldSilence) {
                  originalConsoleWarn.apply(console, args);
                }
              };
            })();
          `
        }}
      />
      
      {/* Preload critical JavaScript */}
      <Script 
        id="performance-optimization-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Add any critical inline JavaScript here
            // Only initialize PerformanceObserver if it exists and only log in development
            if (typeof PerformanceObserver !== 'undefined') {
              // Measure LCP performance
              const isProd = window.location.hostname !== 'localhost';
              
              new PerformanceObserver((entryList) => {
                // Only log in development environment
                if (!isProd) {
                  for (const entry of entryList.getEntries()) {
                    console.log('LCP candidate:', entry.startTime, entry);
                  }
                }
              }).observe({type: 'largest-contentful-paint', buffered: true});
              
              // Measure CLS
              new PerformanceObserver((entryList) => {
                // Only log in development environment
                if (!isProd) {
                  for (const entry of entryList.getEntries()) {
                    console.log('Layout shift:', entry);
                  }
                }
              }).observe({type: 'layout-shift', buffered: true});
            }
          `
        }}
      />
    </>
  );
} 