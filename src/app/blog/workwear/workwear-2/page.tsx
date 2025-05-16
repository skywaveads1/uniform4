import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'أسس اختيار ملابس العمل الوظيفية',
  description: 'دليل شامل حول أسس اختيار ملابس العمل الوظيفية المناسبة، يتناول المواد، التصميم، المتانة، الراحة، والمعايير العملية للاختيار الأمثل في مختلف بيئات العمل',
};

export default function WorkwearBasics() {
  const imageSrc = '/images/workwear/workwear_2.jpeg';
  const title = 'أسس اختيار ملابس العمل الوظيفية';
  const readingTime = '7 دقائق للقراءة';
  const datePublished = '١٥ مايو ٢٠٢٤';

  // Secciones para la tabla de contenidos
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'requirements', title: 'المتطلبات الأساسية لملابس العمل الوظيفية' },
    { id: 'materials', title: 'المواد والأقمشة المناسبة لملابس العمل' },
    { id: 'design', title: 'تصميم ملابس العمل حسب طبيعة المهام' },
    { id: 'comfort', title: 'اعتبارات الراحة والأداء' },
    { id: 'quality', title: 'معايير ومواصفات الجودة في ملابس العمل' },
    { id: 'financial', title: 'اعتبارات مالية واقتصادية' },
  ];

  const tags = ['ملابس العمل', 'زي موحد', 'معايير الجودة', 'المهنية', 'اختيار الملابس'];

  const relatedArticles = [
    {
      title: "ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات",
      description: "دليل شامل حول متطلبات ومواصفات ملابس العمل المناسبة لفنيي الخدمة الميدانية في مختلف القطاعات",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/field-service-technician-workwear",
      date: "٣ مايو ٢٠٢٤"
    },
    {
      title: "العناية بملابس العمل: دليل شامل للحفاظ على جودتها",
      description: "إرشادات مفصلة حول طرق العناية بملابس العمل والزي الموحد للحفاظ على مظهرها وأدائها",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/in-clothing-maintenance",
      date: "١٨ يونيو ٢٠٢٤"
    },
    {
      title: "الزي الموحد: استثمار استراتيجي للمؤسسات الناجحة",
      description: "نظرة شاملة على أهمية الزي الموحد للمؤسسات والشركات، وكيف يساهم في تعزيز الهوية المؤسسية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/uniform",
      date: "٢٢ يونيو ٢٠٢٤"
    }
  ];

  return (
    <main className="bg-white rtl" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="z-0"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <div className="flex items-center text-white/80 gap-4 mb-4">
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{readingTime}</span>
              </div>
              <div>
                <span>{datePublished}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-6xl py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 order-2 lg:order-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">محتويات المقال</h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-primary hover:text-primary-dark transition block py-1"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">مشاركة</h3>
                <ShareButtons title={title} />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">الوسوم</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 order-1 lg:order-2">
            <article className="prose prose-lg max-w-none">
              <section id="intro">
                <h2 className="text-2xl font-semibold mt-8 mb-4">مقدمة</h2>
                <p className="mb-4">
                  تمثل ملابس العمل الوظيفية عنصراً أساسياً في البيئة المهنية، حيث تتجاوز كونها مجرد زي موحد إلى كونها أداة مهمة تؤثر بشكل مباشر في سلامة العاملين، راحتهم، وإنتاجيتهم. في عالم اليوم، تعددت خيارات ملابس العمل وتنوعت المعايير المرتبطة بها، مما يجعل عملية اختيار الملابس المناسبة تحدياً يواجه المؤسسات والشركات على مختلف أنواعها وأحجامها.
                </p>
                <p className="mb-4">
                  يتطلب اختيار ملابس العمل الوظيفية فهماً عميقاً للتوازن بين عدة عوامل أساسية: المتانة التي تضمن الاستمرارية، الراحة التي تدعم الأداء، الحماية التي توفر السلامة، والمظهر المهني الذي يعكس هوية المؤسسة. هذا التوازن يختلف باختلاف طبيعة العمل، البيئة المحيطة، والمخاطر المرتبطة بالمهام اليومية.
                </p>
                <p className="mb-4">
                  في المملكة العربية السعودية، تزداد أهمية ملابس العمل الوظيفية مع تنوع القطاعات الاقتصادية وتوسعها في إطار رؤية 2030، والتي تتطلب مواءمة ملابس العمل مع الظروف المناخية المحلية، المعايير الثقافية، ومتطلبات السلامة المهنية المعتمدة. من القطاع الصناعي والبترولي إلى قطاع الخدمات والبناء، تتنوع احتياجات ملابس العمل وتتباين معاييرها.
                </p>
                <p className="mb-4">
                  في هذا المقال، نستعرض الأسس الرئيسية لاختيار ملابس العمل الوظيفية، مع التركيز على المعايير العملية والاعتبارات الفنية التي تضمن الحصول على ملابس تجمع بين المتانة، الراحة، السلامة، والمظهر المهني. سنتناول أيضاً أحدث الاتجاهات في صناعة ملابس العمل، والتطورات التقنية التي أضافت أبعاداً جديدة لهذا المجال المهم.
                </p>
              </section>

              <section id="requirements">
                <h2 className="text-2xl font-semibold mt-8 mb-4">المتطلبات الأساسية لملابس العمل الوظيفية</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">السلامة والحماية</h3>
                <p className="mb-4">
                  الحماية من المخاطر المهنية:
                </p>
                <ul className="list-disc list-inside mb-4 mr-5">
                  <li className="mb-2">مقاومة النار والحرارة في البيئات الصناعية والمطابخ والمختبرات</li>
                  <li className="mb-2">حماية كيميائية للعاملين في المصانع والمختبرات ومحطات معالجة المياه</li>
                  <li className="mb-2">خصائص عازلة للكهرباء للفنيين والمهندسين الكهربائيين</li>
                  <li className="mb-2">مقاومة للقطع والثقب في بيئات البناء والتصنيع</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">الراحة وحرية الحركة</h3>
                <p className="mb-4">
                  عوامل تؤثر في أداء العمل اليومي:
                </p>
                <ul className="list-disc list-inside mb-4 mr-5">
                  <li className="mb-2">خفة الوزن مع الحفاظ على المتانة لتقليل الإجهاد خلال اليوم</li>
                  <li className="mb-2">قابلية التهوية ونفاذية الهواء خاصة في المناخات الحارة في المملكة</li>
                  <li className="mb-2">مرونة الأقمشة لتسهيل الحركة في المهام التي تتطلب جهداً بدنياً</li>
                  <li className="mb-2">ملاءمة القياس والتصميم للجسم دون تقييد أو إعاقة</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">المتانة وطول العمر الافتراضي</h3>
                <p className="mb-4">
                  ضمان استمرارية الاستخدام بكفاءة:
                </p>
                <ol className="list-decimal list-inside mb-4 mr-5">
                  <li className="mb-2">مقاومة التآكل والاهتراء مع الاستخدام المتكرر</li>
                  <li className="mb-2">ثبات الألوان بعد غسلات متعددة وتعرض للظروف القاسية</li>
                  <li className="mb-2">متانة الخياطة في نقاط الإجهاد المختلفة (الأكتاف، الإبط، الركب)</li>
                  <li className="mb-2">مقاومة للتمزق عند نقاط الضغط أثناء الحركة</li>
                </ol>
              </section>

              <section id="materials">
                <h2 className="text-2xl font-semibold mt-8 mb-4">المواد والأقمشة المناسبة لملابس العمل</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">الأقمشة الطبيعية وخصائصها</h3>
                <p className="mb-4">
                  مزايا وتحديات المواد الطبيعية:
                </p>
                <ul className="list-disc list-inside mb-4 mr-5">
                  <li className="mb-2">القطن: راحة فائقة وقدرة على التنفس، مناسب للبيئات الحارة، لكنه أقل متانة ويمتص الرطوبة</li>
                  <li className="mb-2">الصوف: عزل حراري ممتاز للبيئات الباردة، مقاومة طبيعية للروائح، لكنه أثقل وأغلى</li>
                  <li className="mb-2">الكتان: خفيف وقابل للتنفس بشكل استثنائي، مناسب للمناخ الحار، لكنه سريع التجعد</li>
                  <li className="mb-2">الحرير: نعومة فائقة وتهوية جيدة، لكنه غير عملي لمعظم بيئات العمل الوظيفية</li>
                </ul>

                <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/images/workwear/workwear_maintenance.jpeg"
                    alt="أنواع الأقمشة المستخدمة في ملابس العمل"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <h3 className="text-xl font-medium mt-6 mb-3">الأقمشة الصناعية والمركبة</h3>
                <p className="mb-4">
                  تطور تكنولوجيا النسيج للاحتياجات المتخصصة:
                </p>
                <ul className="list-disc list-inside mb-4 mr-5">
                  <li className="mb-2">البوليستر: متانة عالية، سرعة جفاف، مقاومة للتجعد، لكنه أقل قدرة على التنفس</li>
                  <li className="mb-2">النايلون: قوة استثنائية، مقاومة للتآكل، مناسب للبيئات الصناعية القاسية</li>
                  <li className="mb-2">الأقمشة المخلوطة (مثل القطن/البوليستر): تجمع بين راحة الأقمشة الطبيعية ومتانة الصناعية</li>
                  <li className="mb-2">الميكروفايبر: خفيف، مقاوم للبقع، سريع الجفاف، مناسب للبيئات النظيفة</li>
                </ul>
              </section>

              <section id="design">
                <h2 className="text-2xl font-semibold mt-8 mb-4">تصميم ملابس العمل حسب طبيعة المهام</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">البيئات الصناعية والإنتاجية</h3>
                <p className="mb-4">
                  خصائص تصميمية للعمل الصناعي:
                </p>
                <ul className="list-disc list-inside mb-4 mr-5">
                  <li className="mb-2">أفرولات كاملة توفر تغطية شاملة للجسم مع جيوب متعددة للأدوات</li>
                  <li className="mb-2">قفازات مدمجة أو أكمام قابلة للتعديل للحماية المستمرة</li>
                  <li className="mb-2">تعزيزات في مناطق الاحتكاك المتكرر (الركب، المرفقين، الكتفين)</li>
                  <li className="mb-2">تصميم يمنع تعلق الملابس بالآلات المتحركة لتقليل مخاطر الحوادث</li>
                </ul>
              </section>

              <section id="comfort">
                <h2 className="text-2xl font-semibold mt-8 mb-4">اعتبارات الراحة والأداء</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">مواءمة الملابس للمناخ السعودي</h3>
                <p className="mb-4">
                  تكييف الزي مع الظروف البيئية:
                </p>
                <ul className="list-disc list-inside mb-4 mr-5">
                  <li className="mb-2">أقمشة خفيفة وقابلة للتنفس للمناطق ذات درجات الحرارة المرتفعة مثل الرياض والدمام</li>
                  <li className="mb-2">معالجات لتقليل امتصاص أشعة الشمس وتخفيف تأثير الحرارة</li>
                  <li className="mb-2">تقنيات التهوية مثل الفتحات الاستراتيجية والأقمشة الشبكية في مناطق محددة</li>
                  <li className="mb-2">خيارات للتكيف مع التغيرات الموسمية والتفاوت في درجات الحرارة بين المناطق</li>
                </ul>
                
                <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/images/workwear/workwear_maintenance.jpeg"
                    alt="ملابس عمل مصممة للراحة في المناخ السعودي"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </section>

              <section id="quality">
                <h2 className="text-2xl font-semibold mt-8 mb-4">معايير ومواصفات الجودة في ملابس العمل</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">المعايير المحلية والدولية</h3>
                <p className="mb-4">
                  الالتزام بالمعايير المعتمدة:
                </p>
                <ul className="list-disc list-inside mb-4 mr-5">
                  <li className="mb-2">معايير الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) لملابس العمل</li>
                  <li className="mb-2">معايير المنظمة الدولية للتوحيد القياسي (ISO) الخاصة بملابس السلامة المهنية</li>
                  <li className="mb-2">متطلبات المؤسسة العامة للتأمينات الاجتماعية للحماية الشخصية في مواقع العمل</li>
                  <li className="mb-2">معايير ANSI/ISEA الأمريكية ومعايير EN الأوروبية المعتمدة عالمياً</li>
                </ul>
              </section>

              <section id="financial">
                <h2 className="text-2xl font-semibold mt-8 mb-4">اعتبارات مالية واقتصادية</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">تحليل التكلفة مقابل العمر الافتراضي</h3>
                <p className="mb-4">
                  الاستثمار الذكي في ملابس العمل:
                </p>
                <ul className="list-disc list-inside mb-4 mr-5">
                  <li className="mb-2">حساب التكلفة الإجمالية للملكية (TCO) مع مراعاة عمر المنتج وتكاليف الصيانة</li>
                  <li className="mb-2">المقارنة بين الجودة المرتفعة مع تكلفة أعلى مقابل الخيارات الأقل جودة وأسعاراً</li>
                  <li className="mb-2">تقييم تكاليف الاستبدال المتكرر مقابل الاستثمار في منتجات أكثر متانة</li>
                  <li className="mb-2">دراسة أثر جودة الملابس على إنتاجية العاملين والوفورات المحتملة</li>
                </ul>
              </section>
            </article>

            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-6">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article, index) => (
                  <Link key={index} href={article.url} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                      <div className="relative h-48 w-full">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-gray-500">{article.date}</span>
                        <h4 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 