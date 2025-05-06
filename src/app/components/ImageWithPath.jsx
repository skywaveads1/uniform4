import React from 'react';
import Image from 'next/image';
import { getImagePath } from '../ImageLoader';

/**
 * Image component wrapper that handles path correction for GitHub Pages
 * Use this component in place of regular img tags or Next.js Image components
 */
export default function ImageWithPath({ src, alt, ...props }) {
  const correctedSrc = getImagePath(src);
  
  return (
    <img 
      src={correctedSrc} 
      alt={alt || ''} 
      {...props} 
    />
  );
}

// NextImage component that uses Next.js Image with the correct path
export function NextImageWithPath({ src, alt, ...props }) {
  const correctedSrc = getImagePath(src);
  
  return (
    <Image 
      src={correctedSrc} 
      alt={alt || ''} 
      {...props} 
    />
  );
} 