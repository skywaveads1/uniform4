import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import BlogArticle from '@/components/BlogArticle';
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

export const metadata = {
  title: 'الزي الموحد في السعودية: الهوية والتصميم والتطبيق المؤسسي',
  description: 'دراسة متعمقة للزي الموحد في المؤسسات السعودية، كيفية تصميمه وتطويره ليعكس الهوية الوطنية والمؤسسية، مع استعراض لنماذج ناجحة ومعايير التميز',
};

export default function UniformInSaudi() {
  const imageSrc = '/images/workwear/utility_services_uniform_standards.jpeg';
  const title = 'الزي الموحد في السعودية: الهوية والتصميم والتطبيق المؤسسي';
  const readingTime = '٨ دقائق للقراءة';
  const datePublished = '٢٥ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'history', title: 'تطور الزي الموحد في المؤسسات السعودية' },
    { id: 'identity', title: 'الزي الموحد والهوية السعودية' },
    { id: 'sectors', title: 'الزي الموحد في القطاعات السعودية المختلفة' },
    { id: 'design', title: 'تصميم الزي الموحد في المؤسسات السعودية' },
    { id: 'case-studies', title: 'نماذج ناجحة للزي الموحد في المؤسسات السعودية' },
    { id: 'challenges', title: 'تحديات وفرص تطوير الزي الموحد في المؤسسات السعودية' },
  ];

  const tags = ["الزي الموحد", "المملكة العربية السعودية", "الشركات السعودية", "الهوية المؤسسية", "رؤية 2030", "تصميم الأزياء"];

  const relatedArticles = [
    {
      title: "ملابس العمل في المملكة: التطور والمعايير والتوجهات الحديثة",
      description: "نظرة شاملة على صناعة ملابس العمل في المملكة العربية السعودية، تطورها، المعايير المعتمدة، والتوجهات المستقبلية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/clothing-in-kingdom",
      date: "٢٣ مايو ٢٠٢٤"
    },
    {
      title: "الزي الموحد في القطاعات المختلفة: خصائصه ومميزاته ومتطلباته",
      description: "استعراض شامل للزي الموحد في مختلف القطاعات الصناعية والخدمية والتعليمية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/uniform-in",
      date: "٢١ مايو ٢٠٢٤"
    },
    {
      title: "أهمية الزي الموحد للشركات والمؤسسات",
      description: "تحليل شامل لدور الزي الموحد في تعزيز الهوية المؤسسية وتحسين بيئة العمل وزيادة الإنتاجية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/importance-from-uniform",
      date: "٢٧ مايو ٢٠٢٤"
    }
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
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">الوسوم</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يمثل الزي الموحد في المملكة العربية السعودية أكثر من مجرد ملابس عمل؛ فهو تعبير عن الهوية المؤسسية والثقافة التنظيمية، ووسيلة لتعزيز الانتماء وتمييز العلامة التجارية. مع تسارع وتيرة التحول الاقتصادي والتنظيمي في المملكة، أصبح الزي الموحد عنصراً استراتيجياً في منظومة التطوير المؤسسي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
          في هذا المقال، نستعرض واقع الزي الموحد في المؤسسات السعودية، مراحل تطوره، آليات تصميمه بما يتناسب مع الهوية الوطنية والمؤسسية، والمعايير المعتمدة في هذا المجال، بالإضافة إلى نماذج ناجحة من مختلف القطاعات.
              </p>
            </section>

            <section id="history" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تطور الزي الموحد في المؤسسات السعودية</h2>
              <p className="mb-4 leading-7 text-gray-700">
          شهد الزي الموحد في المملكة العربية السعودية تطوراً ملحوظاً على مدى العقود الماضية، يعكس التحولات الاقتصادية والاجتماعية والمؤسسية في البلاد:
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مراحل تطور الزي الموحد في المملكة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>الجذور التقليدية (قبل ١٩٧٥):</strong> كان الزي الموحد مقتصراً على بعض القطاعات المحدودة مثل الجيش والشرطة والمستشفيات، متأثراً بالأنماط الغربية مع محاولات بسيطة لدمج العناصر المحلية.
                  </li>
                  <li>
                    <strong>مرحلة البدايات المؤسسية (١٩٧٥-٢٠٠٠):</strong> مع نمو القطاع المصرفي والنفطي والخدمي، بدأت المؤسسات السعودية في تبني مفهوم الزي الموحد بشكل أكثر تنظيماً.
                  </li>
                  <li>
                    <strong>مرحلة التأصيل والتميز (٢٠٠٠-٢٠١٥):</strong> شهدت هذه الفترة تزايد الاهتمام بتصميم أزياء موحدة أكثر ارتباطاً بالهوية الوطنية والثقافية السعودية، مع مراعاة المعايير المهنية العالمية.
                  </li>
                  <li>
                    <strong>مرحلة التحول والابتكار (٢٠١٥-الحاضر):</strong> مع إطلاق رؤية 2030 وبرامج التحول الوطني، دخل الزي الموحد مرحلة جديدة من الابتكار والتطوير. أصبحت الأزياء الموحدة أكثر تعبيراً عن التحول الذي تشهده المملكة، مع دمج متقن بين العناصر التقليدية والتصاميم العصرية. كما شهدت هذه المرحلة توسعاً في فرص عمل المرأة، مما أدى إلى تطوير أزياء موحدة نسائية تراعي الموازنة بين الاحترافية والخصوصية الثقافية.
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
        src="/images/workwear/workwear_maintenance.jpeg"
        alt="تطور الزي الموحد في المؤسسات السعودية"
                  fill
                  style={{ objectFit: 'cover' }}
      />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  رحلة تطور الزي الموحد في المؤسسات السعودية: من التقليدية إلى الابتكار مع الحفاظ على الهوية
                </div>
              </div>
            </section>

            <section id="identity" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الزي الموحد والهوية السعودية</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يمثل دمج عناصر الهوية السعودية في تصميم الزي الموحد تحدياً إبداعياً وفرصة للتميز في آن واحد. تسعى المؤسسات السعودية اليوم إلى تحقيق توازن دقيق بين الحداثة والأصالة في أزيائها الموحدة:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الألوان الوطنية</h3>
                  <p className="text-gray-700">
              يُعد استخدام اللون الأخضر ودرجاته، إلى جانب اللون الأبيض، من أبرز الطرق لإدخال الهوية الوطنية في الزي الموحد. تستخدم العديد من المؤسسات السعودية هذه الألوان بشكل رئيسي أو كعناصر تكميلية في الأزياء الموحدة.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">النقوش والزخارف التراثية</h3>
                  <p className="text-gray-700">
              دمج العناصر الزخرفية المستوحاة من التراث السعودي مثل نقوش السدو، والخط العربي، وأنماط النخيل، في تفاصيل الزي الموحد مثل الأطراف، الياقات، أو الإكسسوارات.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mb-6 border-r-4 border-gray-400">
                <blockquote className="italic text-gray-700">
          الزي الموحد في المؤسسات السعودية يمر بمرحلة إعادة تعريف، حيث نشهد توجهاً متزايداً نحو تصاميم تجمع بين الأناقة العالمية والهوية الوطنية. النجاح في هذا المجال يتطلب فهماً عميقاً للتراث السعودي وقدرة على تقديمه بأسلوب عصري يتناسب مع متطلبات بيئة العمل المهنية.
                  <footer className="text-sm mt-2 text-gray-600">- د. نورة العتيبي، أستاذة تصميم الأزياء بجامعة الأميرة نورة</footer>
                </blockquote>
              </div>
            </section>

            <section id="sectors" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الزي الموحد في القطاعات السعودية المختلفة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تختلف خصائص ومتطلبات الزي الموحد باختلاف القطاعات، مع الحفاظ على بعض العناصر المشتركة التي تعكس الهوية السعودية:
              </p>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">القطاع المصرفي والمالي</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>
                      <strong>الخصائص المميزة:</strong> يتميز الزي الموحد في البنوك والمؤسسات المالية السعودية بالأناقة والرسمية، مع تركيز على إظهار الاحترافية والثقة.
                    </li>
                    <li>
                      <strong>التطورات الحديثة:</strong> شهدت السنوات الأخيرة توجهاً نحو تصاميم أكثر عصرية وراحة، مع الحفاظ على الطابع الرسمي.
                    </li>
                    <li>
                      <strong>أمثلة بارزة:</strong> تُعد مصارف مثل البنك الأهلي السعودي ومصرف الراجحي من الأمثلة البارزة على تطوير أزياء موحدة تعكس هوية المؤسسة.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
        src="/images/workwear/workwear_maintenance.jpeg"
        alt="الزي الموحد في قطاعات سعودية مختلفة"
                  fill
                  style={{ objectFit: 'cover' }}
      />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  نماذج مختلفة للزي الموحد في القطاعات السعودية: تنوع في التصميم مع وحدة في الهوية
                </div>
              </div>
            </section>

            <section id="design" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تصميم الزي الموحد في المؤسسات السعودية</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تتبع عملية تصميم الزي الموحد في المؤسسات السعودية منهجية متكاملة تراعي العديد من العوامل الثقافية والوظيفية والمؤسسية:
              </p>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">مراحل تصميم الزي الموحد</h3>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>تحليل احتياجات المؤسسة:</strong> دراسة طبيعة عمل المؤسسة، قيمها، هويتها البصرية، والصورة التي ترغب في إيصالها للجمهور.
                  </li>
                  <li>
                    <strong>مراعاة الخصوصية الثقافية:</strong> تصميم زي يتناسب مع القيم والتقاليد السعودية، مع مراعاة المتطلبات الخاصة بملابس المرأة العاملة.
                  </li>
                  <li>
                    <strong>اختيار المواد المناسبة:</strong> انتقاء أقمشة تناسب المناخ السعودي الحار، توفر الراحة خلال ساعات العمل الطويلة.
                  </li>
                  <li>
                    <strong>التصميم والاختبار:</strong> تطوير نماذج أولية واختبارها مع مجموعة من الموظفين للتأكد من ملاءمتها لطبيعة العمل.
                  </li>
                </ol>
              </div>
            </section>

            <section id="case-studies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">نماذج ناجحة للزي الموحد في المؤسسات السعودية</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تقدم بعض المؤسسات السعودية نماذج ملهمة في مجال تصميم وتطبيق الزي الموحد، تجمع بين الأصالة والعصرية وتحقق أهدافها المؤسسية:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-green-800">نموذج الخطوط السعودية</h3>
                  <p className="text-gray-700">
                    يُعد زي مضيفي ومضيفات الخطوط السعودية من أبرز الأمثلة على التصميم الذي يجمع بين الهوية الوطنية والمعايير العالمية. يتميز باستخدام ألوان العلم السعودي (الأخضر والأبيض) مع قصات عصرية أنيقة.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">نموذج شركة أرامكو السعودية</h3>
                  <p className="text-gray-700">
                    تعتمد أرامكو نظاماً متكاملاً للزي الموحد يختلف حسب طبيعة العمل والقطاع، مع الحفاظ على هوية موحدة. للعاملين في الحقول والمواقع الصناعية، زي عملي يركز على السلامة والراحة.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mb-6 border-r-4 border-gray-400">
                <blockquote className="italic text-gray-700">
        الزي الموحد في المؤسسات السعودية لم يعد مجرد عنصر شكلي، بل أصبح أداة استراتيجية لتعزيز الهوية والثقافة المؤسسية. النجاح في هذا المجال يتطلب نهجاً متكاملاً يوازن بين الاحتياجات العملية والقيم المؤسسية والخصوصية الثقافية.
                  <footer className="text-sm mt-2 text-gray-600">- م. خالد الحميدي، مستشار تطوير الهوية المؤسسية</footer>
                </blockquote>
              </div>
            </section>

            <section id="challenges" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تحديات وفرص تطوير الزي الموحد في المؤسسات السعودية</h2>
              <p className="mb-4 leading-7 text-gray-700">
                رغم التطور الملحوظ في مجال تصميم وتطبيق الزي الموحد في المملكة، ما زالت هناك تحديات تواجهها المؤسسات، تصاحبها فرص واعدة للتطوير والابتكار.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                تشكل التغيرات المناخية والبيئية تحدياً يتطلب ابتكار حلول جديدة في ملابس العمل، مع ضرورة الموازنة بين الاحتياجات العملية والجوانب الثقافية والاجتماعية المميزة للمجتمع السعودي.
              </p>
            </section>
          </article>
        </div>

        {/* مقالات ذات صلة */}
        <div className="mt-16 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={article.url} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-gray-100">
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
                    <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 