'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedPostsProps {
  currentCategory: string;
  currentSlug: string;
}

export function RelatedPosts({ currentCategory, currentSlug }: RelatedPostsProps) {
  // In a real implementation, you would fetch related posts based on category and tags
  // For now, we'll use placeholder data
  const relatedPosts = [
    {
      title: 'أساسيات تصميم الزي الموحد للطيران',
      excerpt: 'دليل شامل لفهم المبادئ الأساسية في تصميم أزياء شركات الطيران العالمية',
      image: `/images/flight_crew/aviation_uniform_basics.jpg`,
      slug: 'aviation-uniform-basics',
      category: 'aviation-uniforms',
    },
    {
      title: 'تطور أزياء الطيران عبر التاريخ',
      excerpt: 'رحلة في تاريخ تصميم أزياء الطيران منذ بداياتها وحتى يومنا هذا',
      image: `/images/flight_crew/uniform_history.jpg`,
      slug: 'uniform-history',
      category: 'aviation-uniforms',
    },
    {
      title: 'أفضل أزياء الطيران العربية',
      excerpt: 'استعراض لأبرز تصاميم أزياء شركات الطيران في العالم العربي',
      image: `/images/flight_crew/arab_airlines_uniforms.jpg`,
      slug: 'arab-airlines-uniforms',
      category: 'aviation-uniforms',
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/placeholder/article-placeholder.jpg';
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 mt-12">
      <h2 className="text-2xl font-bold mb-6 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
            className="block group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full transform group-hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="mt-3 text-blue-600 text-sm font-medium flex items-center justify-end group-hover:font-bold transition-all">
                  <span>قراءة المزيد</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 