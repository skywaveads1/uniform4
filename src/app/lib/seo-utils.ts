import { Metadata } from 'next';

export interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonical?: string;
  noIndex?: boolean;
}

/**
 * Creates standardized metadata for Next.js pages with SEO best practices
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonical,
  noIndex = false,
}: SeoProps): Metadata {
  // Ensure title is not too long (under 60 characters)
  const finalTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  
  // Ensure description is not too long (under 160 characters)
  const finalDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  // Base URL for production or development
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://www.yourdomain.com'
    : 'http://localhost:3000';
    
  // Canonical URL (important for SEO)
  const canonicalUrl = canonical 
    ? (canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`)
    : undefined;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: keywords.join(', '),
    
    // Establish canonical URL to prevent duplicate content issues
    alternates: canonicalUrl ? {
      canonical: canonicalUrl,
    } : undefined,
    
    // Open Graph protocol for social media sharing
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl || baseUrl,
      siteName: 'يونيفورم - الأزياء الموحدة المتخصصة',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: 'ar_SA',
      type: ogType,
    },
    
    // Twitter card
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
    },
    
    // Robots directives
    robots: {
      index: !noIndex,
      follow: true,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Creates article schema for blog posts (JSON-LD)
 */
export function generateArticleSchema(props: {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  authorName: string;
  authorUrl?: string;
  imageUrl: string;
  url: string;
  logoUrl?: string;
  organizationName?: string;
  articleSection?: string;
}) {
  const {
    title,
    description,
    publishDate,
    modifiedDate,
    authorName,
    authorUrl,
    imageUrl,
    url,
    logoUrl = '/images/logo.png',
    organizationName = 'يونيفورم',
    articleSection,
  } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: organizationName,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(articleSection && { articleSection }),
  };
}

/**
 * Creates breadcrumb schema (JSON-LD)
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Creates FAQ schema (JSON-LD)
 */
export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
} 