'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
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

export default function Page() {
  const imageSrc = '/images/chef_uniforms/saudi_chef_uniforms.jpeg';
  const title = 'تصميم أزياء الطهاة في المملكة العربية السعودية';
  const readingTime = '١٦ دقيقة للقراءة';
  const datePublished = '١٠ مايو ٢٠٢٤';

  const relatedArticles = [
    {
      title: "معايير تصميم زي الطهاة العالمية",
      description: "دراسة شاملة لمعايير تصميم زي الطهاة العالمية وتطورها عبر التاريخ",
      image: "/images/culinary_apparel/header_chef_uniform.jpeg",
      url: "/blog/culinary-apparel/culinary-1",
      date: "١٥ مايو ٢٠٢٣",
      category: "أزياء الطهاة"
    },
    {
      title: "متطلبات زي طاقم المطبخ حسب الوظيفة والتخصص",
      description: "دليل شامل حول متطلبات ومواصفات زي طاقم المطبخ المتخصص لكل وظيفة ودور",
      image: "/images/culinary_apparel/kitchen_staff_clothing.jpeg",
      url: "/blog/culinary-apparel/culinary-2",
      date: "٢٠ مايو ٢٠٢٣",
      category: "أزياء الطهاة"
    },
    {
      title: "اتجاهات تصميم ملابس الطهاة لعام 2025",
      description: "أحدث التوجهات والابتكارات في عالم تصميم أزياء الطهاة للعام القادم",
      image: "/images/chef_uniforms/modern_chef_wear_2025.jpeg",
      url: "/blog/chef-uniforms/in-design-clothing-chef-2025",
      date: "٢٥ مايو ٢٠٢٤",
      category: "أزياء الطهاة"
    }
  ];

  const tags = ["تصميم أزياء الطهاة", "المملكة العربية السعودية", "المطبخ السعودي", "التقاليد المحلية", "المعايير العالمية"];
  
  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة في تصميم أزياء الطهاة في المملكة' },
    { id: 'cultural-heritage', title: 'الموروث الثقافي وتأثيره على التصميم' },
    { id: 'modern-adaptations', title: 'التكيفات المعاصرة للمعايير العالمية' },
    { id: 'regional-variations', title: 'الاختلافات الإقليمية داخل المملكة' },
  ];

  return (
    <main className="bg-gray-50 rtl">
      {/* صورة الغلاف الكاملة مع تأثير التدرج */}
      <div className="relative w-full h-[60vh] mb-8">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <div className="flex items-center text-gray-200 text-sm md:text-base mb-6">
              <span className="flex items-center mr-4"><FaClock className="ml-1" />{readingTime}</span>
              <span>{datePublished}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* القائمة الجانبية */}
          <aside className="md:w-1/4 md:sticky md:top-24 h-fit bg-white p-5 rounded-lg shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">محتويات المقال</h3>
              <nav>
                <ul className="space-y-2">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-blue-600 block transition-colors py-1 text-sm"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مشاركة المقال</h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="border-t pt-4 mt-6">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h3>
              <ul className="space-y-3">
                {relatedArticles.map((article, index) => (
                  <li key={index}>
                    <Link href={article.url} className="text-sm hover:text-blue-600 block">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة في تصميم أزياء الطهاة في المملكة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يشهد قطاع الضيافة والمطاعم في المملكة العربية السعودية تطوراً متسارعاً ومتنامياً، مما أدى إلى ظهور حاجة ملحة لتطوير وتحديث معايير تصميم أزياء الطهاة لتتناسب مع هذا التطور. ومع تنوع المطابخ والثقافات في المملكة، أصبح من الضروري إيجاد توازن دقيق بين التقاليد المحلية والمعايير العالمية في تصميم هذه الأزياء.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنستكشف كيف تطور تصميم أزياء الطهاة في المملكة، وكيف تم دمج العناصر الثقافية المحلية مع المعايير العالمية، مع التركيز على التحديات والفرص التي تواجه هذا القطاع المتنامي.
              </p>
            </section>

            <section id="cultural-heritage" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الموروث الثقافي وتأثيره على التصميم</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">العناصر الثقافية في التصميم</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">الألوان التقليدية:</span> استخدام الألوان المستوحاة من التراث السعودي مثل الأبيض والأسود والأخضر</li>
                  <li><span className="font-medium">الزخارف الإسلامية:</span> دمج العناصر الزخرفية الإسلامية في تصميم الشعارات والشارات</li>
                  <li><span className="font-medium">الأنماط التقليدية:</span> استلهام الأنماط الهندسية من العمارة السعودية التقليدية</li>
                  <li><span className="font-medium">المواد المحلية:</span> استخدام الأقمشة والمواد المتوافقة مع المناخ المحلي</li>
                </ul>
              </div>
              
              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/chef_uniforms/culinary_standards.jpeg"
                  alt="العناصر الثقافية في تصميم أزياء الطهاة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  دمج العناصر الثقافية السعودية في تصميم أزياء الطهاة
                </div>
              </div>
            </section>

            <section id="modern-adaptations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التكيفات المعاصرة للمعايير العالمية</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التحديثات المعاصرة</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">المواد الحديثة:</span> استخدام أقمشة متطورة مقاومة للحرارة والبقع</li>
                  <li><span className="font-medium">التصاميم العملية:</span> تحسين الراحة والحركة في بيئة المطبخ</li>
                  <li><span className="font-medium">التقنيات الجديدة:</span> دمج تقنيات حديثة في التصميم مثل الأقمشة الذكية</li>
                  <li><span className="font-medium">الاستدامة:</span> التركيز على المواد الصديقة للبيئة</li>
                </ul>
              </div>
            </section>

            <section id="regional-variations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاختلافات الإقليمية داخل المملكة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التنوع الإقليمي</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>اختلافات التصميم بين المناطق المختلفة</li>
                    <li>تأثير المناخ المحلي على اختيار المواد والتصميم</li>
                    <li>التقاليد المحلية وتأثيرها على التفاصيل</li>
                    <li>التكيف مع احتياجات كل منطقة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المتطلبات الخاصة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>متطلبات المطاعم الفاخرة</li>
                    <li>احتياجات المطابخ المؤسسية</li>
                    <li>متطلبات المطاعم الشعبية</li>
                    <li>معايير الفنادق العالمية</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
              <h2 className="text-xl font-semibold mb-3">الكلمات المفتاحية</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-10 pt-6">
              <h2 className="text-xl font-semibold mb-4">مقالات ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((article, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 text-blue-900 hover:text-blue-700">
                        <Link href={article.url}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                      <p className="text-sm text-gray-700 line-clamp-2">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 