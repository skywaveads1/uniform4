import React from 'react';
import BlogArticle from '@/components/BlogArticle';
import { Metadata } from 'next';
import { formatDate } from '@/lib/utils';
import { getReadingTime } from '@/lib/utils';
import { TableOfContents } from '@/components/TableOfContents';
import { ShareButtons } from '@/components/ShareButtons';
import { RelatedPosts } from '@/components/RelatedPosts';
import { AuthorBio } from '@/components/AuthorBio';
import { 
  Section, 
  Paragraph, 
  BulletList, 
  ListItem, 
  Quote, 
  HighlightBox, 
  KeyPointsBox,
  ArticleImage
} from '@/components/ArabicContentElements';
import { notFound } from 'next/navigation';
import { articles } from '@/app/blog/data';

// Define the post metadata type
interface PostMetadata {
  title: string;
  description: string;
  date: string;
  author?: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
  readTime?: string;
  authorImage?: string;
  authorTitle?: string;
}

// Define the post content type
interface PostContent {
  content: string;
  metadata: PostMetadata;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Extract all unique categories and slugs from articles
  const uniqueParams = new Set();
  const params = [];
  
  // Add parameters for all articles in the data
  articles.forEach(article => {
    // URL format is "/blog/category/slug"
    const urlParts = article.url.split('/');
    if (urlParts.length >= 4) {
      const category = urlParts[2];
      const slug = urlParts[3];
      const paramKey = `${category}:${slug}`;
      
      if (!uniqueParams.has(paramKey)) {
        uniqueParams.add(paramKey);
        params.push({
          category,
          slug,
        });
      }
    }
  });
  
  // Add hardcoded parameters for known blog posts that might be missing
  const flightCrewPosts = Array.from({ length: 25 }, (_, i) => `flight-${i + 1}`);
  
  flightCrewPosts.forEach(post => {
    const paramKey = `flight-crew:${post}`;
    if (!uniqueParams.has(paramKey)) {
      uniqueParams.add(paramKey);
      params.push({
        category: 'flight-crew',
        slug: post,
      });
    }
  });
  
  console.log(`Generated ${params.length} static blog post paths`);
  return params;
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  try {
    // Fetch the post data here
    const post = await getPostData(params.category, params.slug);
    
    if (!post) {
      return {
        title: 'صفحة غير موجودة',
        description: 'الصفحة التي تبحث عنها غير موجودة'
      };
    }

    return {
      title: post.metadata.title,
      description: post.metadata.description,
      openGraph: {
        title: post.metadata.title,
        description: post.metadata.description,
        images: [post.metadata.image],
        type: 'article',
        locale: 'ar_SA',
        siteName: 'يونيفورم',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.metadata.title,
        description: post.metadata.description,
        images: [post.metadata.image],
      },
      alternates: {
        canonical: `https://esaudi.info/blog/${post.metadata.category}/${post.metadata.slug}/`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'خطأ',
      description: 'حدث خطأ أثناء تحميل الصفحة'
    };
  }
}

// Helper function to fetch post data
async function getPostData(category: string, slug: string): Promise<PostContent | null> {
  try {
    // Find the article in our data
    const article = articles.find(article => {
      const urlParts = article.url.split('/');
      return urlParts[2] === category && urlParts[3] === slug;
    });
    
    if (!article) {
      // For known blog categories and slugs, generate fallback data
      if (category === 'flight-crew' && slug.match(/^flight-\d+$/)) {
        const flightNumber = slug.replace('flight-', '');
        return {
          content: `<p>هذا محتوى توضيحي للمقالة رقم ${flightNumber} في فئة أزياء طاقم الطيران.</p>`,
          metadata: {
            title: `مقالة أزياء الطيران رقم ${flightNumber}`,
            description: `هذا وصف توضيحي للمقالة رقم ${flightNumber} في فئة أزياء طاقم الطيران.`,
            date: new Date().toISOString(),
            author: 'فريق يونيفورم',
            category: category,
            tags: ['طيران', 'أزياء موحدة', 'تصميم'],
            image: '/images/flight_crew/header_flight_crew_uniform.jpeg',
            slug: slug,
            readTime: '٥ دقائق للقراءة',
            authorImage: '/images/author/team.jpg',
            authorTitle: 'خبراء تصميم الأزياء الموحدة'
          }
        };
      }
      return null;
    }
    
    // This is a placeholder implementation - in a real app, you would fetch the actual content
    const post = {
      content: 'Post content goes here...',
      metadata: {
        title: article.title,
        description: 'Post description goes here',
        date: new Date().toISOString(),
        author: 'Author Name',
        category: article.category,
        tags: ['tag1', 'tag2'],
        image: article.imageUrl,
        slug: slug,
        readTime: '10 دقائق للقراءة',
        authorImage: '/images/author/team.jpg',
        authorTitle: 'خبراء تصميم الأزياء الموحدة'
      }
    };
    return post;
  } catch (error) {
    console.error('Error fetching post data:', error);
    return null;
  }
}

// Main post page component
export default async function PostPage({ params }: { params: { category: string; slug: string } }) {
  try {
    const post = await getPostData(params.category, params.slug);
    
    if (!post) {
      notFound();
    }

    // Calculate reading time
    const readingTime = getReadingTime(post.content);

    // Example related articles
    const relatedArticles = [
      {
        title: "مقال ذو صلة 1",
        description: "وصف المقال الأول ذو الصلة",
        image: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
        url: "/blog/category/article-1",
        date: "١٠ مايو ٢٠٢٤",
        category: "الفئة"
      },
      {
        title: "مقال ذو صلة 2",
        description: "وصف المقال الثاني ذو الصلة",
        image: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
        url: "/blog/category/article-2",
        date: "١٢ مايو ٢٠٢٤",
        category: "الفئة"
      },
      {
        title: "مقال ذو صلة 3",
        description: "وصف المقال الثالث ذو الصلة",
        image: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
        url: "/blog/category/article-3",
        date: "١٤ مايو ٢٠٢٤",
        category: "الفئة"
      }
    ];

    return (
      <BlogArticle
        title={post.metadata.title}
        description={post.metadata.description}
        category={post.metadata.category}
        categoryUrl={`/blog/${post.metadata.category}/`}
        heroImage={post.metadata.image}
        publishDate={post.metadata.date}
        readTime={post.metadata.readTime || '10 دقائق للقراءة'}
        authorName={post.metadata.author || 'يونيفورم'}
        authorImage={post.metadata.authorImage || '/images/author/team.jpg'}
        authorTitle={post.metadata.authorTitle || 'خبراء تصميم الأزياء الموحدة'}
        backUrl="/blog/"
        tags={post.metadata.tags}
        relatedArticles={relatedArticles}
      >
        <Section id="content" title="المحتوى">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Section>
      </BlogArticle>
    );
  } catch (error) {
    console.error('Error rendering post page:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">حدث خطأ</h1>
          <p className="text-gray-600">عذراً، حدث خطأ أثناء تحميل الصفحة. يرجى المحاولة مرة أخرى لاحقاً.</p>
        </div>
      </div>
    );
  }
} 