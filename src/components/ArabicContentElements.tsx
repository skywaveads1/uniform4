import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SectionTitleProps {
  id: string;
  children: React.ReactNode;
}

export function SectionTitle({ id, children }: SectionTitleProps) {
  return (
    <h2 
      id={id}
      className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 border-r-4 border-blue-600 pr-4 py-2"
    >
      {children}
    </h2>
  );
}

interface ParagraphProps {
  children: React.ReactNode;
  isLead?: boolean;
}

export function Paragraph({ children, isLead = false }: ParagraphProps) {
  return (
    <p className={`mb-6 leading-relaxed ${isLead ? 'text-xl text-gray-700 font-medium' : 'text-gray-800'}`}>
      {children}
    </p>
  );
}

interface HighlightBoxProps {
  title: string;
  children: React.ReactNode;
  color?: 'blue' | 'green' | 'amber' | 'red';
}

export function HighlightBox({ title, children, color = 'blue' }: HighlightBoxProps) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-500',
    green: 'bg-green-50 border-green-500',
    amber: 'bg-amber-50 border-amber-500',
    red: 'bg-red-50 border-red-500',
  };

  const titleColorClasses = {
    blue: 'text-blue-800',
    green: 'text-green-800',
    amber: 'text-amber-800',
    red: 'text-red-800',
  };

  return (
    <div className={`${colorClasses[color]} p-6 rounded-lg border-r-4 mb-8`}>
      <h3 className={`${titleColorClasses[color]} font-bold text-lg mb-3`}>{title}</h3>
      <div className="text-gray-800">
        {children}
      </div>
    </div>
  );
}

interface ListItemProps {
  title?: string;
  children: React.ReactNode;
}

export function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-4 mb-8 mr-4">
      {children}
    </ul>
  );
}

export function ListItem({ title, children }: ListItemProps) {
  return (
    <li className="bg-gray-50 p-5 rounded-lg border-r-4 border-gray-300">
      {title && <strong className="text-gray-900 block mb-2">{title}</strong>}
      <span className="text-gray-700">{children}</span>
    </li>
  );
}

interface QuoteProps {
  author?: string;
  source?: string;
  children: React.ReactNode;
}

export function Quote({ author, source, children }: QuoteProps) {
  return (
    <blockquote className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 my-8 rounded-xl border-r-4 border-blue-600 shadow-sm">
      <p className="text-lg font-medium text-gray-800">
        "{children}"
      </p>
      {(author || source) && (
        <footer className="text-gray-600 mt-2">
          {author && `- ${author}`}
          {author && source && ', '}
          {source && source}
        </footer>
      )}
    </blockquote>
  );
}

interface KeyPointsBoxProps {
  title: string;
  points: string[];
}

export function KeyPointsBox({ title, points }: KeyPointsBoxProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden mb-8">
      <div className="bg-blue-600 text-white py-3 px-6">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <div className="mt-1 bg-blue-600 rounded-full p-1 ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700">{point}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
}

export function ArticleImage({ src, alt, caption, source }: ArticleImageProps) {
  return (
    <figure className="my-8">
      <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={alt || "صورة توضيحية متعلقة بالمحتوى"}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
        {source && (
          <div className="absolute bottom-0 right-0 bg-black/60 text-white text-sm p-2 rounded-tl-md">
            المصدر: {source}
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-gray-600 text-sm mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <SectionTitle id={id}>{title}</SectionTitle>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
} 