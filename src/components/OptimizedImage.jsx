'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * OptimizedImage component that serves WebP images with fallback
 * @param {Object} props
 * @param {string} props.src - Original image source (e.g., /images/flight_crew/example.jpg)
 * @param {string} props.alt - Alt text for the image
 * @param {number} props.width - Width of the image
 * @param {number} props.height - Height of the image
 * @param {string} props.className - Optional CSS class
 */
const OptimizedImage = ({ src, alt, width, height, className, ...props }) => {
  const [supportsWebP, setSupportsWebP] = useState(false);
  const [imagePath, setImagePath] = useState(src);
  
  // Check if browser supports WebP
  useEffect(() => {
    // Create a test WebP image
    const testWebP = (callback) => {
      const webP = new Image();
      webP.onload = webP.onerror = function () {
        callback(webP.height === 1);
      };
      webP.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
    };
    
    testWebP((support) => {
      setSupportsWebP(support);
    });
  }, []);
  
  // Update image path based on WebP support
  useEffect(() => {
    if (src) {
      // Get file extension and path
      const extension = src.split('.').pop().toLowerCase();
      const basePath = src.substring(0, src.lastIndexOf('.'));
      
      if (supportsWebP) {
        // Use optimized WebP image
        const optimizedPath = src.replace('/images/', '/optimized_images/');
        const webPPath = optimizedPath.substring(0, optimizedPath.lastIndexOf('.')) + '.webp';
        setImagePath(webPPath);
      } else {
        // Use optimized original format
        const optimizedPath = src.replace('/images/', '/optimized_images/');
        setImagePath(optimizedPath);
      }
    }
  }, [src, supportsWebP]);
  
  return (
    <div className={`optimized-image-container ${className || ''}`}>
      <img 
        src={imagePath} 
        alt={alt || 'Image'} 
        width={width} 
        height={height} 
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default OptimizedImage; 