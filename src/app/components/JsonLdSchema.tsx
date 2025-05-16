'use client';

import { useEffect } from 'react';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'Article' | 'Service' | 'FAQPage' | 'LocalBusiness' | 'Product';
  data: any;
}

const JsonLdSchema = ({ type, data }: JsonLdProps) => {
  useEffect(() => {
    // Create schema script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Construct the JSON-LD schema
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };
    
    // Set the innerHTML with the stringified JSON
    script.innerHTML = JSON.stringify(jsonLd);
    
    // Append to the document head
    document.head.appendChild(script);
    
    // Cleanup when component unmounts
    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, [type, data]);
  
  // Return null since this is a utility component
  return null;
};

export const OrganizationSchema = () => {
  const organizationData = {
    name: 'يونيفورم',
    url: 'https://www.yourdomain.com',
    logo: 'https://www.yourdomain.com/images/logo.png',
    sameAs: [
      'https://www.facebook.com/youruniformcompany',
      'https://www.twitter.com/youruniformcompany',
      'https://www.instagram.com/youruniformcompany',
      'https://www.linkedin.com/company/youruniformcompany'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966-XX-XXXXXXX',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['Arabic', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'شارع التخصصي',
      addressLocality: 'الرياض',
      addressRegion: 'الرياض',
      postalCode: '12345',
      addressCountry: 'SA'
    }
  };

  return <JsonLdSchema type="Organization" data={organizationData} />;
};

export const WebsiteSchema = () => {
  const websiteData = {
    name: 'يونيفورم - الأزياء الموحدة المتخصصة',
    url: 'https://www.yourdomain.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.yourdomain.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return <JsonLdSchema type="WebSite" data={websiteData} />;
};

export const BreadcrumbSchema = ({ items }: { items: { name: string; url: string }[] }) => {
  const breadcrumbData = {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return <JsonLdSchema type="BreadcrumbList" data={breadcrumbData} />;
};

export const ServiceSchema = ({ service }: { service: any }) => {
  return <JsonLdSchema type="Service" data={service} />;
};

export const ArticleSchema = ({ article }: { article: any }) => {
  return <JsonLdSchema type="Article" data={article} />;
};

export const FAQPageSchema = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const faqData = {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return <JsonLdSchema type="FAQPage" data={faqData} />;
};

export default JsonLdSchema; 