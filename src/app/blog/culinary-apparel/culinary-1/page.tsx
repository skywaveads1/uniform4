import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'معايير تصميم زي الطهاة العالمية',
  description: 'دراسة شاملة لمعايير تصميم زي الطهاة العالمية، تاريخه، عناصره الأساسية، وظائفه، المواد المستخدمة، والاتجاهات الحديثة في تصميم أزياء المطبخ المهنية',
};

export default function ArticlePage() {
  const imageSrc = '/images/culinary_apparel/header_chef_uniform.jpeg';
  const title = 'معايير تصميم زي الطهاة العالمية';
  const readingTime = '١٥ دقيقة للقراءة';
  const datePublished = '١٥ مايو ٢٠٢٣';
  const authorName = "فريق يونيفورم";
  const authorImage = "/images/author/team.jpg";
  const authorTitle = "خبراء تصميم الأزياء الموحدة";

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'history', title: 'نظرة تاريخية على زي الطهاة' },
    { id: 'elements', title: 'العناصر الأساسية للزي المهني للطهاة' },
    { id: 'functions', title: 'الوظائف الأساسية لزي الطهاة' },
    { id: 'materials', title: 'معايير المواد والأقمشة' },
    { id: 'standards', title: 'المعايير العالمية ومتطلبات الامتثال' },
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
            
            {/* Author information */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">الكاتب</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    width={64}
                    height={64}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">{authorName}</h4>
                  <p className="text-sm text-gray-600">{authorTitle}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مشاركة المقال</h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="border-t pt-4 mt-6">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/culinary-apparel/culinary-2" className="text-sm hover:text-blue-600 block">
                    متطلبات زي طاقم المطبخ حسب الوظيفة والتخصص
                  </Link>
                </li>
                <li>
                  <Link href="/blog/chef-uniforms/design-in-Saudi" className="text-sm hover:text-blue-600 block">
                    تصميم أزياء الطهاة في المملكة العربية السعودية
                  </Link>
                </li>
                <li>
                  <Link href="/blog/chef-uniforms/in-design-clothing-chef-2025" className="text-sm hover:text-blue-600 block">
                    اتجاهات تصميم ملابس الطهاة لعام 2025
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعد زي الطهاة أحد أكثر الأزياء المهنية تميزاً وقابلية للتعرف عليها في العالم. فالسترة البيضاء ذات الصفين من الأزرار، والقبعة العالية المميزة، والمئزر الطويل، كلها عناصر أصبحت رمزاً عالمياً للاحترافية في عالم فنون الطهي. لكن وراء هذا المظهر الأنيق، تختبئ قرون من التطور والتصميم العملي الذي يخدم وظائف محددة تتجاوز مجرد المظهر الجمالي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                على مر العصور، تطور زي الطهاة ليلبي احتياجات بيئة المطبخ المتطلبة والمتغيرة، وليعكس تسلسلاً هرمياً مهنياً دقيقاً، وليوفر حماية وراحة في ظروف عمل قاسية. واليوم، أصبح هذا الزي يخضع لمعايير عالمية تحكم مختلف جوانبه، من المواد المستخدمة والتصميم إلى قواعد الارتداء والنظافة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستكشف المعايير العالمية لتصميم زي الطهاة، ونلقي نظرة على تاريخ هذا الزي المميز، ونحلل وظائفه المتعددة وعناصره الأساسية. كما نتناول الاتجاهات الحديثة والابتكارات في تصميم أزياء المطبخ المهنية، وكيف تتطور هذه المعايير لتلبية احتياجات صناعة الضيافة المعاصرة مع الحفاظ على التقاليد العريقة لهذه المهنة.
              </p>
            </section>

            <section id="history" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">نظرة تاريخية على زي الطهاة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">أصول الزي الكلاسيكي</h3>
                <p className="mb-2 font-medium text-blue-700">جذور وتطور الزي التقليدي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الأصول الفرنسية لزي الطهاة الحديث ودور ماري-أنطوان كاريم في القرن 19</li>
                  <li>تأثير الطاهي الشهير أوغست إسكوفييه في ترسيخ معايير الزي المهني للطهاة</li>
                  <li>التطور التاريخي للسترة ذات الصفين من الأزرار والتصميم العملي وراءها</li>
                  <li>نشأة وتطور قبعة الطاهي (توك) من مجرد غطاء رأس إلى رمز للمكانة المهنية</li>
                </ul>
              </div>
              
              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="التطور التاريخي لزي الطهاة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  التطور التاريخي لزي الطهاة عبر القرون
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التسلسل الهرمي والتمييز المهني</h3>
                  <p className="mb-2 text-gray-700">تقاليد تحديد المكانة في المطبخ:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>نظام المطبخ الكلاسيكي (Brigade de Cuisine) وكيفية انعكاسه على الأزياء</li>
                    <li>دلالات الألوان والتصاميم المختلفة وما ترمز إليه في التسلسل الهرمي</li>
                    <li>رموز المكانة كارتفاع القبعة وعدد طيات القماش وألوان الياقات</li>
                    <li>الفرق بين زي رئيس الطهاة (Chef de Cuisine) وزي باقي أعضاء الفريق</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التباين الثقافي والإقليمي</h3>
                  <p className="mb-2 text-gray-700">اختلافات الزي حول العالم:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>خصائص زي الطهاة في المدارس الكلاسيكية: الفرنسية والإيطالية والآسيوية</li>
                    <li>التأثيرات الثقافية على تصميم الزي في مختلف المناطق العالمية</li>
                    <li>اقتباسات وتكييفات الزي الكلاسيكي في الثقافات المختلفة</li>
                    <li>مزج التقاليد والعناصر المحلية مع المعايير العالمية</li>
                  </ol>
                </div>
              </div>
            </section>
            
            <section id="elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر الأساسية للزي المهني للطهاة</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">سترة الطاهي (Chef's Jacket)</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">مواصفات وخصائص الجزء الأكثر تميزاً:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>التصميم ذو الصفين من الأزرار والهدف العملي والتاريخي وراءه</li>
                    <li>الأكمام الطويلة ودورها في حماية الذراعين من الحروق والسوائل الساخنة</li>
                    <li>اختيار القماش: قطن عالي الجودة، بوليستر، أو مزيج بينهما</li>
                    <li>خيارات الياقة: الياقة المستديرة، الياقة المفتوحة، والياقة الصينية</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/kitchen_staff_clothing.jpeg"
                  alt="تفاصيل سترة الطاهي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تفاصيل ومميزات السترة التقليدية للطهاة
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">قبعة الطاهي (Toque)</h3>
                <p className="mb-2 text-gray-700">رمز المكانة والهوية المهنية:</p>
                <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                  <li>الارتفاع التقليدي للقبعة ودلالاته على المستوى المهني والخبرة</li>
                  <li>أنواع القبعات المختلفة: القبعة العالية الكلاسيكية، القبعة المنخفضة، قبعة الشبكة</li>
                  <li>الوظائف العملية للقبعة: منع سقوط الشعر، امتصاص العرق، تنظيم حرارة الرأس</li>
                  <li>البدائل المعاصرة للقبعة التقليدية وانتشارها في المطابخ الحديثة</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">بنطلون الطاهي</h3>
                  <p className="mb-2 text-gray-700">المواصفات الوظيفية والعملية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>النمط الكلاسيكي: البنطلون الأسود أو المقلم (هاوندستوث) والغرض منه</li>
                    <li>خصائص القماش المقاوم للحرارة والبقع والسوائل</li>
                    <li>التصميم الفضفاض والمريح للحركة السريعة في المطبخ</li>
                    <li>الجيوب العملية وتوزيعها لحمل الأدوات الضرورية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المئزر والمناديل</h3>
                  <p className="mb-2 text-gray-700">طبقات إضافية للحماية والعملية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أنواع المآزر: الخصر، الصدر الكامل، المآزر القصيرة، واستخداماتها المختلفة</li>
                    <li>مناديل الرقبة (Neckerchief) ودورها في امتصاص العرق وحماية الرقبة</li>
                    <li>الاستخدام العملي للمناديل والمآزر في أعمال المطبخ اليومية</li>
                    <li>ألوان المآزر ودلالاتها في بعض المطابخ والمؤسسات</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">الأحذية وملحقات أخرى</h3>
                <p className="mb-2 text-gray-700">عناصر تكمل الزي المهني:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>مواصفات الأحذية المهنية: مقاومة للانزلاق، مريحة، سهلة التنظيف، مغلقة من الأمام</li>
                  <li>قفازات المطبخ وأنواعها المختلفة حسب الاستخدام</li>
                  <li>واقيات اليد والمعصم للتعامل مع درجات الحرارة العالية</li>
                  <li>اكسسوارات تحديد الهوية: شارات الاسم، شعارات المؤسسة، علامات التخصص</li>
                </ul>
              </div>
            </section>
            
            {/* سيتم استكمال باقي المحتوى في الخطوات التالية */}
          </article>
        </div>
      </div>
    </main>
  );
} 