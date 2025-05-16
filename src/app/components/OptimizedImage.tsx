'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { useInView } from 'react-intersection-observer';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  fallbackSrc = '/images/placeholder.jpg',
  priority = false,
  className = '',
  ...props
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  // Only set the image source when it comes into view or if it has priority
  useEffect(() => {
    if (priority || inView) {
      // Handle both string and StaticImport objects
      if (typeof src === 'string') {
        setImgSrc(src);
      } else if (src && typeof src === 'object' && 'default' in src) {
        setImgSrc(src.default.src);
      } else if (src && typeof src === 'object') {
        // @ts-ignore - Handle Next.js StaticImport objects
        setImgSrc(src.src || src);
      }
    }
  }, [inView, priority, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${typeof src === 'string' ? src : 'image object'}`);
    if (fallbackSrc && fallbackSrc !== src) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
    >
      {(priority || inView) && imgSrc && (
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          sizes={props.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          {...props}
        />
      )}
      
      {/* Placeholder or blur-up while loading */}
      {(!isLoaded || !imgSrc) && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 