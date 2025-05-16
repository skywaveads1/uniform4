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
    
    // Implement preload for critical resources
    const preloadResources = [
      // Add critical CSS or font resources that should be preloaded
      { href: '/fonts/main-font.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    ];
    
    preloadResources.forEach(resource => {
      const linkEl = document.createElement('link');
      linkEl.rel = 'preload';
      linkEl.href = resource.href;
      linkEl.as = resource.as;
      if (resource.type) linkEl.type = resource.type;
      if (resource.crossOrigin) linkEl.crossOrigin = resource.crossOrigin;
      document.head.appendChild(linkEl);
    });
    
    return () => {
      // Cleanup if component unmounts
      document.querySelectorAll('link[rel="preconnect"], link[rel="preload"]').forEach(el => {
        if (el.parentNode === document.head) {
          document.head.removeChild(el);
        }
      });
    };
  }, []);
  
  return (
    <>
      {/* Preload critical JavaScript */}
      <Script 
        id="performance-optimization-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Add any critical inline JavaScript here
            // Measure LCP performance
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                console.log('LCP candidate:', entry.startTime, entry);
              }
            }).observe({type: 'largest-contentful-paint', buffered: true});
            
            // Measure CLS
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                console.log('Layout shift:', entry);
              }
            }).observe({type: 'layout-shift', buffered: true});
          `
        }}
      />
    </>
  );
} 