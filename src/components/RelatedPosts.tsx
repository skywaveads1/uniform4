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
      title: 'مقال ذو صلة 1',
      excerpt: 'وصف مختصر للمقال الأول...',
      image: `/images/${currentCategory}/related-1.jpg`,
      slug: 'related-post-1',
      category: currentCategory,
    },
    {
      title: 'مقال ذو صلة 2',
      excerpt: 'وصف مختصر للمقال الثاني...',
      image: `/images/${currentCategory}/related-2.jpg`,
      slug: 'related-post-2',
      category: currentCategory,
    },
    {
      title: 'مقال ذو صلة 3',
      excerpt: 'وصف مختصر للمقال الثالث...',
      image: `/images/${currentCategory}/related-3.jpg`,
      slug: 'related-post-3',
      category: currentCategory,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">مقالات ذات صلة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
            className="block group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 