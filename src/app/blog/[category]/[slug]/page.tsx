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

// Define interface for static params
interface BlogStaticParams {
  category: string;
  slug: string;
}

// Generate static params for all blog posts
export async function generateStaticParams(): Promise<BlogStaticParams[]> {
  // Extract all unique categories and slugs from articles
  const uniqueParams = new Set<string>();
  const params: BlogStaticParams[] = [];
  
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
  // Incluimos todas las páginas mencionadas en los URLs con errores 404
  const additionalPosts = [
    { category: 'flight-crew', slugs: Array.from({ length: 18 }, (_, i) => `flight-${i + 1}`) },
  ];
  
  additionalPosts.forEach(({ category, slugs }) => {
    slugs.forEach(slug => {
      const paramKey = `${category}:${slug}`;
      if (!uniqueParams.has(paramKey)) {
        uniqueParams.add(paramKey);
        params.push({
          category,
          slug,
        });
      }
    });
  });
  
  // Removimos las páginas principales de la generación de parámetros estáticos de blog
  // ya que esas páginas existen en sus propias carpetas en la raíz
  
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
      // Generate fallback content for different content types
      
      // Flight crew articles (flight-1 through flight-18)
      if (category === 'flight-crew' && slug.match(/^flight-\d+$/)) {
        const flightNumber = slug.replace('flight-', '');
        const flightNum = parseInt(flightNumber, 10);
        
        // Use different image based on the article number
        let image = '/images/flight_crew/header_flight_crew_uniform.jpeg';
        if (flightNum % 3 === 0) {
          image = '/images/flight_crew/modern_airline_uniform_design.webp';
        } else if (flightNum % 3 === 1) {
          image = '/images/flight_crew/pilot_attendant_uniforms.webp';
        } else {
          image = '/images/flight_crew/modern_flight_attendant_fashion.webp';
        }
        
        return {
          content: `<p>هذا محتوى توضيحي للمقالة رقم ${flightNumber} في فئة أزياء طاقم الطيران.</p>
                   <p>تتناول هذه المقالة جوانب مختلفة من تصميم وإنتاج أزياء طاقم الطيران.</p>
                   <p>يمكنك الاطلاع على المزيد من المقالات المتعلقة بأزياء الطيران من خلال تصفح قسم أزياء الطيران في موقعنا.</p>`,
          metadata: {
            title: `مقالة أزياء الطيران رقم ${flightNumber}`,
            description: `هذا وصف توضيحي للمقالة رقم ${flightNumber} في فئة أزياء طاقم الطيران.`,
            date: new Date().toISOString(),
            author: 'فريق يونيفورم',
            category: category,
            tags: ['طيران', 'أزياء موحدة', 'تصميم'],
            image: image,
            slug: slug,
            readTime: '٥ دقائق للقراءة',
            authorImage: '/images/author/team.jpg',
            authorTitle: 'خبراء تصميم الأزياء الموحدة'
          }
        };
      }
      
      // Handle other category pages
      const categoryMap: Record<string, { title: string, image: string }> = {
        'clinic_wear': { 
          title: 'أزياء طبية', 
          image: '/images/clinic_wear/clinic_doctor_uniforms.webp'
        },
        'culinary_apparel': { 
          title: 'أزياء الطهاة', 
          image: '/images/culinary_apparel/chef_aprons.webp'
        },
        'flight_crew': { 
          title: 'أزياء الطيران', 
          image: '/images/flight_crew/modern_airline_uniform_design.webp'
        }
      };
      
      // Handle category pages (when requested as /blog?category=xxx)
      if (Object.keys(categoryMap).includes(category) && !slug) {
        const categoryInfo = categoryMap[category];
        return {
          content: `<p>هذه صفحة قسم ${categoryInfo.title}. يمكنك العثور على جميع المقالات المتعلقة بـ ${categoryInfo.title} هنا.</p>`,
          metadata: {
            title: `قسم ${categoryInfo.title} | يونيفورم`,
            description: `تصفح جميع مقالات قسم ${categoryInfo.title} في موقع يونيفورم`,
            date: new Date().toISOString(),
            author: 'فريق يونيفورم',
            category: category,
            tags: ['أزياء موحدة', category],
            image: categoryInfo.image,
            slug: '',
            readTime: '١ دقيقة للقراءة',
            authorImage: '/images/author/team.jpg',
            authorTitle: 'خبراء تصميم الأزياء الموحدة'
          }
        };
      }
      
      // Handle main pages like about, contact, etc.
      const mainPageMap: Record<string, { title: string, content: string }> = {
        'about': {
          title: 'عن يونيفورم',
          content: '<p>مرحبًا بك في صفحة عن يونيفورم. نحن متخصصون في تصميم وإنتاج الأزياء الموحدة للشركات والمؤسسات.</p>'
        },
        'contact': {
          title: 'اتصل بنا',
          content: '<p>يمكنك التواصل معنا عبر النموذج أدناه أو من خلال معلومات الاتصال المتوفرة.</p>'
        },
        'faq': {
          title: 'الأسئلة المتكررة',
          content: '<p>إليك بعض الأسئلة الشائعة حول خدماتنا ومنتجاتنا.</p>'
        },
        'terms': {
          title: 'الشروط والأحكام',
          content: '<p>يرجى قراءة الشروط والأحكام الخاصة بموقعنا بعناية.</p>'
        },
        'privacy': {
          title: 'سياسة الخصوصية',
          content: '<p>نلتزم بحماية خصوصية معلوماتك الشخصية.</p>'
        },
        'quote': {
          title: 'طلب عرض سعر',
          content: '<p>يمكنك طلب عرض سعر مخصص لاحتياجات مؤسستك من الأزياء الموحدة.</p>'
        }
      };
      
      if (Object.keys(mainPageMap).includes(category) && slug === '') {
        const pageInfo = mainPageMap[category];
        return {
          content: pageInfo.content,
          metadata: {
            title: `${pageInfo.title} | يونيفورم`,
            description: `${pageInfo.title} - يونيفورم للأزياء الموحدة المتخصصة`,
            date: new Date().toISOString(),
            author: 'فريق يونيفورم',
            category: category,
            tags: ['يونيفورم', 'أزياء موحدة'],
            image: '/images/flight_crew/crew_uniform_visual_identity.jpeg',
            slug: '',
            readTime: '١ دقيقة للقراءة',
            authorImage: '/images/author/team.jpg',
            authorTitle: 'خبراء تصميم الأزياء الموحدة'
          }
        };
      }
      
      return null;
    }
    
    // For existing articles in data, return their information
    const post = {
      content: `
        <p>هذا المحتوى التوضيحي للمقال "${article.title}".</p>
        <p>يهدف هذا المقال إلى تقديم معلومات قيمة حول ${article.category}.</p>
        <p>يمكنك الاطلاع على المزيد من المقالات المشابهة في قسم ${article.category}.</p>
      `,
      metadata: {
        title: article.title,
        description: `مقال عن ${article.title} - يونيفورم للأزياء الموحدة المتخصصة`,
        date: new Date().toISOString(),
        author: 'فريق يونيفورم',
        category: article.category,
        tags: ['أزياء موحدة', article.category, 'تصميم'],
        image: article.imageUrl,
        slug: slug,
        readTime: '5 دقائق للقراءة',
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