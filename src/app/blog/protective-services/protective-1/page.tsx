import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الزي الموحد لفرق الخدمات الوقائية: معايير الجودة والسلامة',
  description: 'استعراض شامل لمعايير الجودة والسلامة في الزي الموحد لفرق الخدمات الوقائية، وأهميته في تعزيز الأداء المهني وضمان سلامة العاملين.',
};

export default function ProtectiveServices1() {
  const imageSrc = '/images/protective_services/protective_uniforms_quality.jpeg';
  const title = 'الزي الموحد لفرق الخدمات الوقائية: معايير الجودة والسلامة';
  const readingTime = '٨ دقائق للقراءة';
  const datePublished = '١٥ يونيو ٢٠٢٤';

  const relatedArticles = [
    {
      title: "تطورات تقنية في ملابس الخدمات الوقائية",
      description: "استعراض لأحدث التقنيات المستخدمة في تصميم وتصنيع ملابس الخدمات الوقائية",
      image: "/images/protective_services/protective_services_uniforms.jpeg",
      url: "/blog/protective-services/protective-2",
      date: "١٠ يونيو ٢٠٢٤",
      category: "الخدمات الوقائية"
    },
    {
      title: "أهمية الزي الموحد في قطاع الأمن والحراسة",
      description: "دراسة تفصيلية عن دور وتأثير الزي الموحد في قطاع الأمن والحراسة",
      image: "/images/protective_services/protective_services_uniforms.jpeg",
      url: "/blog/security-uniforms/importance-uniform-on-security",
      date: "٢٠ يونيو ٢٠٢٤",
      category: "زي الأمن"
    },
    {
      title: "مواد تصنيع زي رجال الأمن: المتانة والأداء",
      description: "تحليل شامل لمواد تصنيع الزي الموحد لرجال الأمن ومميزاتها",
      image: "/images/protective_services/protective_services_uniforms.jpeg",
      url: "/blog/security-uniforms/uniform-security-materials",
      date: "٥ يونيو ٢٠٢٤",
      category: "زي الأمن"
    }
  ];

  const tags = ["الخدمات الوقائية", "معايير الجودة", "السلامة المهنية", "الزي الموحد", "الملابس الواقية", "مواصفات الأمان"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية معايير الجودة في الزي الوقائي' },
    { id: 'safety-standards', title: 'معايير السلامة الدولية' },
    { id: 'materials', title: 'المواد والأقمشة المتخصصة' },
    { id: 'design-elements', title: 'عناصر التصميم الوظيفي' },
    { id: 'testing', title: 'اختبارات الجودة والأداء' },
    { id: 'future-trends', title: 'اتجاهات مستقبلية' },
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
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعد الزي الموحد لفرق الخدمات الوقائية أكثر من مجرد ملابس موحدة؛ إنه خط الدفاع الأول ضد المخاطر المهنية المتنوعة التي تواجه العاملين في هذا القطاع الحيوي. يجمع هذا الزي بين المتطلبات الوظيفية الصارمة ومعايير السلامة العالية، مما يجعله عنصراً أساسياً في ضمان سلامة وكفاءة الأداء المهني.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض معايير الجودة والسلامة الأساسية في تصميم وتصنيع الزي الموحد لفرق الخدمات الوقائية. نناقش أهمية هذه المعايير، ونستعرض المواصفات الدولية المعتمدة، والمواد المتخصصة المستخدمة، وعناصر التصميم الوظيفي، مع نظرة على الاتجاهات المستقبلية في هذا المجال.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                سواء كنت من العاملين في قطاع الخدمات الوقائية، أو مديراً مسؤولاً عن توفير الزي الموحد لفريقك، أو مهتماً بمجال السلامة المهنية، سيقدم لك هذا المقال معلومات قيمة حول كيفية تقييم واختيار الزي الموحد الذي يلبي أعلى معايير الجودة والسلامة.
          </p>
        </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية معايير الجودة في الزي الوقائي</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">دور معايير الجودة في ضمان السلامة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">حماية العاملين:</span> تضمن معايير الجودة العالية توفير مستوى مناسب من الحماية ضد المخاطر المهنية المختلفة (الحرارة، المواد الكيميائية، المخاطر الميكانيكية).</li>
                  <li><span className="font-medium">الموثوقية والأداء المستمر:</span> ضمان أداء ثابت للزي الوقائي حتى في ظروف العمل القاسية وعلى مدار فترات زمنية طويلة.</li>
                  <li><span className="font-medium">تقليل مخاطر الفشل:</span> تحديد وتجنب نقاط الضعف المحتملة في تصميم أو تصنيع الزي التي قد تؤدي إلى قصور في وظائفه الحمائية.</li>
                  <li><span className="font-medium">التوافق مع المتطلبات القانونية:</span> ضمان امتثال الزي الموحد للتشريعات والمعايير المحلية والدولية الخاصة بالسلامة المهنية.</li>
          </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/protective_services_uniforms.jpeg"
                  alt="معايير الجودة في الزي الوقائي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تطبيق معايير الجودة في فحص واختبار الزي الموحد للخدمات الوقائية
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">لا يمكن المساومة على معايير الجودة عندما يتعلق الأمر بالزي الوقائي. فكل خلل في الجودة قد يعني فرقاً بين السلامة والإصابة، وفي بعض الحالات بين الحياة والموت. لذا فإن الاستثمار في الجودة العالية ليس ترفاً، بل ضرورة قصوى.</p>
                  <footer className="text-sm text-gray-600">— م. خالد العنزي، خبير السلامة المهنية</footer>
                </blockquote>
              </div>
        </section>

            <section id="safety-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير السلامة الدولية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تخضع ملابس الخدمات الوقائية لمجموعة من المعايير والمواصفات الدولية التي تضمن مستوى عالٍ من الحماية والأداء:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير ISO للملابس الوقائية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>ISO 11612: الحماية من الحرارة واللهب</li>
                    <li>ISO 13982: الحماية من الجسيمات الصلبة</li>
                    <li>ISO 13688: المتطلبات العامة للملابس الوقائية</li>
                    <li>ISO 20471: الزي عالي الرؤية للاستخدام المهني</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير NFPA (الرابطة الوطنية للحماية من الحرائق)</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>NFPA 1971: معيار ملابس مكافحة الحرائق</li>
                    <li>NFPA 1951: معيار عمليات البحث والإنقاذ</li>
                    <li>NFPA 1992: الحماية من المواد الكيميائية</li>
                    <li>NFPA 2112: الحماية من الوميض الحراري</li>
          </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/protective_services_uniforms.jpeg"
                  alt="معايير السلامة الدولية للملابس الوقائية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  اختبارات معايير السلامة الدولية للملابس الوقائية في مختبر متخصص
                </div>
              </div>
        </section>

            <section id="materials" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المواد والأقمشة المتخصصة</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الأقمشة المقاومة للحريق</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">Nomex®:</span> ألياف اصطناعية متطورة تتميز بمقاومة استثنائية للحرارة واللهب، مع قوة عالية ووزن خفيف.</li>
                    <li><span className="font-medium">Kevlar®:</span> يستخدم في تعزيز الأقمشة للحماية من الحرارة والقطع، مع قوة تفوق الفولاذ بخمس مرات عند قياسها بالوزن.</li>
                    <li><span className="font-medium">PBI (Polybenzimidazole):</span> أقمشة متطورة توفر مقاومة عالية للحرارة والوميض الحراري مع استقرار أبعاد ممتاز.</li>
                    <li><span className="font-medium">القطن المعالج بمواد مقاومة للهب:</span> قماش طبيعي معالج كيميائياً ليكتسب خصائص مقاومة الحريق مع الحفاظ على الراحة.</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">المواد المقاومة للمواد الكيميائية</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>البوليمرات الفلورية مثل Teflon® و Viton® للحماية من المواد الكيميائية القاسية</li>
                  <li>الأقمشة المغلفة بمطاط البوتيل للحماية من الغازات والمواد الكيميائية المتطايرة</li>
                  <li>أقمشة متعددة الطبقات توفر حماية من نطاق واسع من المخاطر الكيميائية</li>
                  <li>معالجات طاردة للسوائل تمنع امتصاص السوائل الخطرة وتسهل تنظيفها</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المواد الصديقة للبيئة والمستدامة</h3>
                <p className="mb-2 text-gray-700">الاتجاه المتزايد نحو الاستدامة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أقمشة مصنوعة من مواد معاد تدويرها مع الحفاظ على خصائص الحماية</li>
                  <li>بدائل للمعالجات الكيميائية التقليدية صديقة للبيئة</li>
                  <li>مواد قابلة للتحلل البيولوجي في نهاية دورة الحياة</li>
                  <li>عمليات تصنيع منخفضة استهلاك الطاقة والمياه</li>
          </ul>
              </div>
        </section>

            <section id="design-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">عناصر التصميم الوظيفي</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">عناصر السلامة في التصميم</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>أشرطة عاكسة عالية الرؤية لتحسين الرؤية في ظروف الإضاءة المنخفضة</li>
                      <li>نظام طبقات متعددة للحماية من المخاطر المتنوعة</li>
                      <li>أنظمة تثبيت وإغلاق مصممة لمنع دخول المواد الخطرة</li>
                      <li>عناصر تعزيز في المناطق المعرضة للتآكل والتمزق</li>
          </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">ميزات الراحة والأداء</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>تصميمات هندسية للتهوية في مناطق استراتيجية</li>
                      <li>قصات تناسب حركة الجسم أثناء العمل</li>
                      <li>جيوب وحوامل وظيفية للمعدات والأدوات</li>
                      <li>تقنيات تنظيم الحرارة لمنع الإجهاد الحراري</li>
          </ul>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/protective_services_uniforms.jpeg"
                  alt="عناصر التصميم الوظيفي في الزي الوقائي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  ميزات تصميم متقدمة في الزي الوقائي تجمع بين السلامة والراحة والوظائف العملية
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تخصيص التصميم حسب نوع المخاطر</h3>
                <p className="mb-2 text-gray-700">تصميمات مخصصة للمهام المختلفة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">مكافحة الحرائق:</span> طبقات متعددة مع عزل حراري وحماية من اللهب المباشر</li>
                  <li><span className="font-medium">الاستجابة للمواد الخطرة:</span> حواجز كاملة ضد السوائل والغازات مع أنظمة تهوية</li>
                  <li><span className="font-medium">الإنقاذ الفني:</span> مرونة عالية مع تعزيزات في مناطق التعرض للاحتكاك</li>
                  <li><span className="font-medium">العمل في المناطق الخطرة:</span> عناصر عالية الرؤية مع حماية من المخاطر الميكانيكية</li>
          </ul>
              </div>
        </section>

            <section id="testing" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اختبارات الجودة والأداء</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">اختبارات المتانة والتحمل</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">اختبار قوة الشد والتمزق:</span> قياس قدرة الأقمشة على تحمل القوى التي تسبب التمزق أو التمدد</li>
                    <li><span className="font-medium">اختبار التآكل:</span> محاكاة الاحتكاك المتكرر لتقييم متانة السطح على المدى الطويل</li>
                    <li><span className="font-medium">اختبار ثبات الألوان:</span> تقييم مقاومة الأصباغ للتلاشي بعد التعرض للضوء والغسيل المتكرر</li>
                    <li><span className="font-medium">اختبار التآكل عند الثنيات:</span> تقييم قدرة المادة على تحمل الثني المتكرر دون فشل</li>
          </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">اختبارات الحماية المتخصصة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">اختبار مقاومة اللهب:</span> قياس سلوك المادة عند تعرضها للهب مباشر، بما في ذلك وقت الاحتراق ومدى انتشار اللهب</li>
                  <li><span className="font-medium">اختبار الحرارة الإشعاعية:</span> قياس قدرة المادة على عزل الحرارة الإشعاعية والتوصيل الحراري</li>
                  <li><span className="font-medium">اختبار نفاذية المواد الكيميائية:</span> تقييم قدرة المادة على منع تسرب المواد الكيميائية السائلة والغازية</li>
                  <li><span className="font-medium">اختبار مقاومة القطع والثقب:</span> قياس الحماية ضد الأجسام الحادة والثاقبة</li>
          </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/protective_services_uniforms.jpeg"
                  alt="اختبارات الزي الوقائي في المختبر"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  إجراء اختبارات متقدمة على الزي الوقائي في مختبر متخصص لضمان الامتثال للمعايير
                </div>
              </div>
        </section>

            <section id="future-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اتجاهات مستقبلية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                يشهد مجال الزي الموحد للخدمات الوقائية تطورات مستمرة تدفعها الابتكارات التقنية والبحث العلمي:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الاتجاهات المستقبلية في الزي الوقائي</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">الأقمشة الذكية:</span> مواد تتفاعل مع التغيرات البيئية، مثل تغيير خصائصها استجابة لارتفاع الحرارة أو التعرض للمواد الكيميائية</li>
                  <li><span className="font-medium">التكنولوجيا القابلة للارتداء:</span> دمج أجهزة استشعار لمراقبة المخاطر المحيطة وحالة مرتدي الزي</li>
                  <li><span className="font-medium">الأغشية الحيوية:</span> تطوير أغشية مستوحاة من الطبيعة توفر تنفس فائق مع حاجز محكم ضد المواد الخطرة</li>
                  <li><span className="font-medium">الأقمشة المتجددة ذاتياً:</span> مواد بقدرة على إصلاح التلف الطفيف ذاتياً، مما يطيل عمر الزي</li>
                  <li><span className="font-medium">حلول الطاقة المدمجة:</span> تكامل خلايا شمسية مرنة وتقنيات حصاد الطاقة الحركية لتشغيل الأجهزة المدمجة</li>
          </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/protective_services_uniforms.jpeg"
                  alt="مستقبل الزي الوقائي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  مفاهيم مستقبلية للزي الوقائي الذكي المزود بتقنيات متقدمة للمراقبة والحماية
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">مستقبل الزي الوقائي سيتجاوز مجرد توفير حاجز سلبي ضد المخاطر. نتوقع أن تصبح الملابس الوقائية أنظمة ذكية متكاملة، قادرة على التفاعل مع البيئة، وتحليل المخاطر، وحتى التواصل مع أنظمة إدارة الطوارئ. هذا التحول سيرفع مستوى السلامة المهنية إلى آفاق جديدة.</p>
                  <footer className="text-sm text-gray-600">— د. سارة المحمود، باحثة في تقنيات المواد المتقدمة</footer>
                </blockquote>
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