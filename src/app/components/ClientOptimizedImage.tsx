'use client';

import React from 'react';
import OptimizedImage from './OptimizedImage';

export default function ClientOptimizedImage(props: React.ComponentProps<typeof OptimizedImage>) {
  return <OptimizedImage {...props} />;
} 