'use client';

import React, { useEffect, useState, Children, isValidElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Share2, Bookmark, ChevronLeft, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';

interface BlogArticleProps {
  title: string;
  description: string;
  category: string;
  categoryUrl: string;
  heroImage: string;
  publishDate: string;
  readTime: string;
  authorName: string;
  authorImage: string;
  authorTitle: string;
  backUrl: string;
  children: React.ReactNode;
  tags: string[];
  relatedArticles: {
    title: string;
    description: string;
    image: string;
    url: string;
    date: string;
    category: string;
  }[];
}

interface TOCItem {
  id: string;
  title: string;
}

export default function BlogArticle({
  title,
  description,
  category,
  categoryUrl,
  heroImage,
  publishDate,
  readTime,
  authorName,
  authorImage,
  authorTitle,
  backUrl,
  children,
  tags,
  relatedArticles
}: BlogArticleProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [tableOfContents, setTableOfContents] = useState<TOCItem[]>([]);
  const [imageError, setImageError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);

  useEffect(() => {
    // Extract sections for table of contents
    const childrenArray = Children.toArray(children);
    const tocItems: TOCItem[] = [];

    childrenArray.forEach((child) => {
      if (isValidElement(child) && child.props && child.props.id && child.props.title) {
        tocItems.push({
          id: child.props.id,
          title: child.props.title
        });
      }
    });

    setTableOfContents(tocItems);
  }, [children]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
      
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleAuthorImageError = () => {
    setAuthorImageError(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back to Blog Button - Fixed when scrolling */}
      <div 
        className={`fixed bottom-8 right-8 z-40 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link 
          href={backUrl} 
          className="flex items-center gap-2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="text-sm font-medium">العودة للمدونة</span>
        </Link>
      </div>

      {/* Social Sharing Sidebar - Fixed */}
      <div className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <button 
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5 text-blue-600" />
        </button>
        <button 
          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`, '_blank')}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5 text-blue-400" />
        </button>
        <button 
          onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-blue-700" />
        </button>
        <button 
          onClick={copyToClipboard}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all relative"
          aria-label="Copy link"
        >
          <Link2 className="h-5 w-5 text-gray-600" />
          {isCopied && (
            <span className="absolute -right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
              تم النسخ!
            </span>
          )}
        </button>
      </div>

      {/* Hero Section - Enhanced with gradient overlay */}
      <div className="relative h-[70vh] max-h-[600px]">
        {!imageError ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">صورة غير متوفرة</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Link href={categoryUrl} className="bg-blue-600 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
                {category}
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-xl md:text-2xl opacity-90 font-light">{description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10">
          {/* Article Meta Information */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                {!authorImageError ? (
                  <Image
                    src={authorImage}
                    alt={authorName}
                    fill
                    className="object-cover"
                    onError={handleAuthorImageError}
                    sizes="56px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">صورة غير متوفرة</span>
                  </div>
                )}
              </div>
              <div className="mr-4">
                <p className="font-bold text-lg">{authorName}</p>
                <p className="text-gray-600">{authorTitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 ml-2" />
                <span className="text-sm">{publishDate}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 ml-2" />
                <span className="text-sm">{readTime}</span>
              </div>
            </div>
          </div>

          {/* Share & Save Buttons */}
          <div className="flex justify-end gap-4 mb-8">
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="h-5 w-5" />
              <span className="text-sm">مشاركة</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bookmark className="h-5 w-5" />
              <span className="text-sm">حفظ</span>
            </button>
          </div>

          {/* Article Content - Enhanced for Arabic RTL content */}
          <article className="prose prose-lg lg:prose-xl max-w-none" dir="rtl">
            <div className="article-content text-right space-y-8 leading-relaxed text-gray-800">
              {children}
            </div>
          </article>

          {/* Article Tags */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <div className="flex flex-wrap gap-2 justify-end" dir="rtl">
              <span className="text-gray-600 ml-2">الكلمات المفتاحية:</span>
              {tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles - Enhanced Card Design */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">مقالات ذات صلة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedArticles.map((article, index) => (
            <Link 
              key={index} 
              href={article.url}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-blue-600">{article.category}</span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup - Enhanced Design */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">اشترك في نشرتنا البريدية</h2>
          <p className="text-blue-100 mb-8 text-lg">احصل على أحدث المقالات والأخبار حول ملابس العمل وأزياء الشركات</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="البريد الإلكتروني" 
              className="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full md:w-96 text-right"
            />
            <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-md">
              اشترك الآن
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">نحترم خصوصيتك - لن نشارك بريدك الإلكتروني مع أي طرف ثالث</p>
        </div>
      </div>

      {/* Table of Contents - Floating */}
      {tableOfContents.length > 0 && (
        <div className="fixed right-8 top-32 z-40 bg-white rounded-xl shadow-lg p-6 max-w-xs w-full hidden xl:block">
          <h3 className="font-bold text-lg mb-4 border-b pb-2 text-right">محتويات المقال</h3>
          <nav className="toc space-y-2 text-right" dir="rtl">
            {tableOfContents.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
} 