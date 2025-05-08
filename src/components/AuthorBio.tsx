import React from 'react';
import Image from 'next/image';

interface AuthorBioProps {
  author: string;
  image?: string;
  title?: string;
}

export function AuthorBio({ author, image = '/images/author/default-avatar.jpg', title }: AuthorBioProps) {
  // In a real implementation, you would fetch author data from your CMS or database
  // For now, we'll use placeholder data
  const authorData = {
    name: author,
    bio: 'كاتب محترف في مجال الزي الموحد والموضة. لديه خبرة واسعة في تصميم وتصنيع الزي الموحد للشركات والمؤسسات.',
    avatar: image,
    social: {
      twitter: 'https://twitter.com/author',
      linkedin: 'https://linkedin.com/in/author',
    },
  };

  return (
    <div className="flex items-start space-x-4 space-x-reverse">
      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={authorData.avatar}
          alt={authorData.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">عن الكاتب</h3>
        <h4 className="text-lg font-medium mb-2">{authorData.name}</h4>
        {title && <p className="text-gray-600 mb-2">{title}</p>}
        <p className="text-gray-600 mb-3">{authorData.bio}</p>
        <div className="flex space-x-4 space-x-reverse">
          <a
            href={authorData.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors"
            aria-label="تويتر"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href={authorData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors"
            aria-label="لينكد إن"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 