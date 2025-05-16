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
    <article className="min-h-screen bg-gray-50" itemScope itemType="http://schema.org/BlogPosting">
      {/* Schema.org metadata */}
      <meta itemProp="headline" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="datePublished" content={publishDate} />
      <meta itemProp="author" content={authorName} />
      <meta itemProp="image" content={heroImage} />
      
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
          aria-label="العودة إلى صفحة المدونة الرئيسية"
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
          aria-label="مشاركة على فيسبوك"
        >
          <Facebook className="h-5 w-5 text-blue-600" />
        </button>
        <button 
          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`, '_blank')}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
          aria-label="مشاركة على تويتر"
        >
          <Twitter className="h-5 w-5 text-blue-400" />
        </button>
        <button 
          onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
          aria-label="مشاركة على لينكد إن"
        >
          <Linkedin className="h-5 w-5 text-blue-700" />
        </button>
        <button 
          onClick={copyToClipboard}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all relative"
          aria-label="نسخ الرابط"
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
      <header className="relative h-[70vh] max-h-[600px]" itemProp="image" itemScope itemType="http://schema.org/ImageObject">
        {!imageError ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            itemProp="url"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" itemProp="headline">{title}</h1>
            <p className="text-xl md:text-2xl opacity-90 font-light" itemProp="description">{description}</p>
          </div>
        </div>
      </header>

      {/* Article Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents - Sidebar */}
        <aside className="lg:col-span-1 h-full">
          <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24 border-r-4 border-blue-600">
            <h2 className="text-xl font-bold mb-4 text-gray-800">محتويات المقال</h2>
            
            <nav aria-label="جدول المحتويات">
              <ul className="space-y-3">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1 pr-3 border-r-2 border-transparent hover:border-blue-600"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="lg:col-span-3" itemProp="articleBody">
          {/* Article Metadata */}
          <div className="flex flex-wrap justify-between items-center mb-8 text-sm text-gray-500">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <time itemProp="datePublished" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {publishDate}
              </time>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                <Share2 className="h-4 w-4" />
                مشاركة
              </button>
              <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                <Bookmark className="h-4 w-4" />
                حفظ
              </button>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
          
          {/* Tags */}
          <section className="mt-10 mb-12" aria-labelledby="article-tags">
            <h2 id="article-tags" className="sr-only">وسوم المقال</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Link 
                  key={index} 
                  href={`/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </section>
          
          {/* Author Bio */}
          <section className="mb-12 border-t pt-10" itemProp="author" itemScope itemType="http://schema.org/Person">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 relative rounded-full overflow-hidden">
                {!authorImageError ? (
                  <Image
                    src={authorImage}
                    alt={authorName}
                    fill
                    className="object-cover"
                    onError={handleAuthorImageError}
                    itemProp="image"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">صورة غير متوفرة</span>
                  </div>
                )}
              </div>
              <div className="text-center sm:text-right">
                <h3 className="text-xl font-bold text-gray-900" itemProp="name">{authorName}</h3>
                <p className="text-gray-600 mb-3" itemProp="jobTitle">{authorTitle}</p>
                <p className="text-gray-700" itemProp="description">خبير متخصص في مجال تصميم وتطوير الأزياء الموحدة للشركات والمؤسسات، مع خبرة واسعة في قطاع الطيران والضيافة والخدمات.</p>
              </div>
            </div>
          </section>
          
          {/* Related Articles */}
          <section className="mb-10" aria-labelledby="related-articles">
            <h2 id="related-articles" className="text-2xl font-bold mb-8 text-gray-900">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Link href={article.url} className="block">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{article.description}</p>
                      <div className="mt-4 text-xs text-gray-500">{article.date}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </article>
  );
} 