import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'اختيار أفضل ملابس عمل (أفرولات) لقطاع الصيانة والمرافق بالسعودية',
  description: 'دليل شامل لاختيار أفضل أنواع ملابس العمل وأفرولات الصيانة المناسبة لقطاع المرافق في المملكة العربية السعودية، مع التركيز على المتانة، السلامة، وملاءمة البيئة المحلية',
};

export default function UtilityServicesArticle() {
  const imageSrc = '/images/utility_services/header_utility_uniform.jpeg';
  const title = 'اختيار أفضل ملابس عمل (أفرولات) لقطاع الصيانة والمرافق بالسعودية';
  const readingTime = '7 دقائق للقراءة';
  const datePublished = '١٠ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'criteria', title: 'المعايير الأساسية لاختيار ملابس العمل المناسبة' },
    { id: 'fabrics', title: 'أنواع الأقمشة المناسبة لبيئة العمل السعودية' },
    { id: 'designs', title: 'تصاميم ملابس العمل حسب طبيعة المهام' },
    { id: 'standards', title: 'معايير السلامة والجودة العالمية والمحلية' },
    { id: 'best-practices', title: 'أفضل الممارسات في إدارة ملابس العمل' },
    { id: 'suppliers', title: 'أفضل الموردين والعلامات التجارية في السعودية' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const relatedArticles = [
    {
      title: "معايير الزي الموحد لشركات الخدمات والمرافق",
      description: "استعراض شامل للمعايير الأساسية التي يجب اتباعها عند اختيار وتصميم الزي الموحد لشركات الخدمات والمرافق",
      image: "/images/utility_services/utility_uniforms.jpeg",
      url: "/blog/workwear/utility-services-uniform-standards",
      date: "٢ مايو ٢٠٢٤",
      category: "خدمات المرافق"
    },
    {
      title: "ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات",
      description: "دليل شامل حول متطلبات ومواصفات ملابس العمل المناسبة لفنيي الخدمة الميدانية في مختلف القطاعات",
      image: "/images/utility_services/utility_uniforms.jpeg",
      url: "/blog/workwear/field-service-technician-workwear",
      date: "٣ مايو ٢٠٢٤",
      category: "خدمات المرافق"
    },
    {
      title: "متطلبات الزي الموحد لعمال الصيانة والتشغيل",
      description: "دليل متكامل حول المتطلبات الأساسية للزي الموحد لعمال الصيانة والتشغيل بما يتوافق مع معايير السلامة",
      image: "/images/utility_services/utility_uniforms.jpeg",
      url: "/blog/workwear/maintenance-worker-uniform-requirements",
      date: "٥ مايو ٢٠٢٤",
      category: "خدمات المرافق"
    }
  ];

  const tags = ["أفرولات العمل", "ملابس المرافق", "السلامة المهنية", "أقمشة الصيانة", "معايير الجودة", "الزي الموحد", "ملابس فنيين"];

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
                يعتبر قطاع الصيانة والمرافق من القطاعات الحيوية التي تسهم في الحفاظ على البنية التحتية واستمرارية الخدمات الأساسية في المملكة العربية السعودية. ومع التوسع الكبير في المشاريع العمرانية والصناعية ضمن رؤية 2030، تزداد أهمية توفير ملابس عمل مناسبة للعاملين في هذا القطاع تجمع بين الحماية والراحة والكفاءة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل ملابس العمل (الأفرولات) عنصراً أساسياً في منظومة السلامة المهنية، حيث توفر الحماية اللازمة للعاملين من المخاطر المختلفة التي قد يتعرضون لها أثناء أداء مهامهم اليومية. ومع تنوع بيئات العمل في قطاع الصيانة والمرافق، من المنشآت الصناعية إلى محطات الطاقة ومرافق المياه وشبكات الكهرباء، تتنوع أيضاً المتطلبات الخاصة بملابس العمل لتناسب طبيعة كل بيئة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض المعايير الأساسية لاختيار أفضل ملابس العمل (الأفرولات) لقطاع الصيانة والمرافق في المملكة العربية السعودية، مع مراعاة الظروف المناخية المحلية والمعايير العالمية للسلامة والجودة.
              </p>
            </section>

            <section id="criteria" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المعايير الأساسية لاختيار ملابس العمل المناسبة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">السلامة والحماية</h3>
                <p className="mb-2 text-gray-700">أولويات الوقاية من المخاطر المهنية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>مقاومة اللهب والحرارة للعاملين في بيئات تتضمن أعمال اللحام أو القرب من مصادر حرارية</li>
                  <li>مقاومة المواد الكيميائية للعمل في محطات معالجة المياه والمختبرات ومواقع المواد الخطرة</li>
                  <li>خصائص العزل الكهربائي للفنيين العاملين في صيانة شبكات ومحطات الكهرباء</li>
                  <li>مقاومة القطع والتمزق للعمل في بيئات البناء والمنشآت الصناعية</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المتانة وطول العمر الافتراضي</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قوة الأقمشة ومقاومتها للتآكل والاهتراء</li>
                    <li>جودة الخياطة ومتانتها في مناطق الإجهاد</li>
                    <li>مقاومة تلاشي الألوان وثباتها مع الغسيل المتكرر</li>
                    <li>الاحتفاظ بالشكل بعد فترات الاستخدام الطويلة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الراحة وسهولة الحركة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>خفة الوزن المناسبة لتقليل الإجهاد</li>
                    <li>المرونة الكافية لتسهيل الحركة والانحناء</li>
                    <li>قدرة الأقمشة على التنفس وتبادل الهواء</li>
                    <li>تصاميم مريحة تراعي الأرجونوميكس</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/utility_services/utility_uniforms.jpeg"
                  alt="معايير اختيار ملابس العمل"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  المعايير الأساسية التي يجب مراعاتها عند اختيار ملابس العمل للمرافق
                </div>
              </div>
            </section>

            <section id="fabrics" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أنواع الأقمشة المناسبة لبيئة العمل السعودية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تلعب الأقمشة دوراً محورياً في تحديد مدى ملاءمة ملابس العمل للبيئة المحلية في المملكة العربية السعودية، خاصة مع الظروف المناخية القاسية والمتطلبات الخاصة بكل قطاع من قطاعات المرافق.
              </p>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">أقمشة مناسبة للمناخ الحار</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">مواد تتحمل ظروف الصحراء والحرارة المرتفعة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مزيج القطن/البوليستر (65%/35%) - يوفر توازناً بين الراحة والمتانة مع قدرة على التنفس</li>
                    <li>أقمشة خفيفة بوزن 180-240 جرام/متر² للمناطق شديدة الحرارة مثل الرياض والمنطقة الشرقية</li>
                    <li>تقنيات النسيج المتطورة التي تسمح بتبادل الهواء مع الحفاظ على قوة الأقمشة</li>
                    <li>معالجات خاصة للأقمشة تساعد على امتصاص العرق وتبخره بسرعة لتبريد الجسم</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">أقمشة متخصصة للمهام عالية الخطورة</h3>
                <p className="mb-2 text-gray-700">مواد متطورة للظروف الاستثنائية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أقمشة الـ Nomex® المقاومة للهب والحرارة لمنشآت النفط والغاز ومحطات الطاقة</li>
                  <li>أقمشة مشبعة بمواد مانعة للكهرباء الساكنة للبيئات القابلة للانفجار</li>
                  <li>أقمشة تفلون المعالجة لمقاومة المواد الكيميائية العدوانية</li>
                  <li>أقمشة مركبة عالية المتانة مثل Ripstop و Cordura لبيئات العمل القاسية</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/utility_services/utility_uniforms.jpeg"
                  alt="أنواع أقمشة ملابس المرافق"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  أنواع الأقمشة المستخدمة في ملابس عمال الصيانة والمرافق في البيئة السعودية
                </div>
              </div>
            </section>

            <section id="designs" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تصاميم ملابس العمل حسب طبيعة المهام</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأفرولات الكاملة (Coveralls)</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>حماية كاملة للجسم مناسبة للبيئات الصناعية</li>
                    <li>تصاميم مع سحابات مزدوجة الاتجاه</li>
                    <li>خصر مطاطي أو قابل للتعديل</li>
                    <li>جيوب متعددة ذات مواقع مدروسة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أطقم السترة والبنطلون</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مرونة استخدام وتكيف مع البيئات المتنوعة</li>
                    <li>تصاميم سترات مع أكمام قابلة للتعديل</li>
                    <li>بنطلونات ذات تقوية مزدوجة في الركبة والمقعد</li>
                    <li>حامل بطاقة الهوية وشارات تعريفية</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">السترات العاكسة والمكملات</h3>
                <p className="mb-2 text-gray-700">عناصر تعزيز الرؤية والسلامة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>سترات عاكسة متوافقة مع معيار ANSI/ISEA 107 ومعايير الهيئة السعودية للمواصفات</li>
                  <li>أشرطة عاكسة مقاومة للغسيل المتكرر والظروف القاسية</li>
                  <li>خيارات ألوان متنوعة للتمييز بين الفرق والتخصصات (برتقالي، أصفر، أخضر عاكس)</li>
                  <li>إمكانية ارتدائها فوق الملابس الأخرى للمهام قصيرة المدة</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/utility_services/utility_uniforms.jpeg"
                  alt="تصاميم ملابس المرافق"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تصاميم مختلفة من ملابس العمل تناسب طبيعة المهام المختلفة في قطاع المرافق
                </div>
              </div>
            </section>

            <section id="standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير السلامة والجودة العالمية والمحلية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تخضع ملابس العمل في قطاع المرافق لمجموعة من المعايير والاشتراطات المحلية والعالمية التي تضمن جودتها وفعاليتها في توفير الحماية المطلوبة.
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المعايير السعودية والخليجية</h3>
                <p className="mb-2 text-gray-700">المتطلبات المحلية الإلزامية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>مواصفات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) لملابس السلامة المهنية</li>
                  <li>متطلبات هيئة تنظيم المياه والكهرباء لملابس العاملين في مرافق الخدمات</li>
                  <li>اشتراطات شركة أرامكو السعودية وسابك لملابس العمل في المنشآت البترولية والكيميائية</li>
                  <li>معايير الدفاع المدني السعودي لملابس فرق الصيانة والطوارئ</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المعايير والشهادات الدولية</h3>
                <p className="mb-2 text-gray-700">الاعتمادات العالمية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>معايير ISO 11611 و ISO 11612 لملابس الحماية من اللهب والحرارة</li>
                  <li>معيار NFPA 70E للحماية من مخاطر القوس الكهربائي</li>
                  <li>معايير EN 471 للملابس عالية الرؤية في بيئات العمل الخطرة</li>
                  <li>شهادات OEKO-TEX لضمان خلو الأقمشة من المواد الضارة</li>
                </ul>
              </div>
            </section>

            <section id="best-practices" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أفضل الممارسات في إدارة ملابس العمل</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">نظام توزيع واستبدال الملابس</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحديد دورة استبدال واضحة (3-6 أشهر للبيئات القاسية)</li>
                    <li>توفير مقاسات متنوعة تناسب مختلف أجسام العاملين</li>
                    <li>تتبع إلكتروني لعمليات الصرف والاستبدال</li>
                    <li>تحديد عدد مناسب من القطع لكل موظف (3-4 طقم)</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العناية والصيانة الصحيحة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تعليمات غسيل محددة حسب نوع القماش</li>
                    <li>تجنب المبيضات والمنعمات الضارة</li>
                    <li>فحص دوري للملابس للتأكد من سلامتها</li>
                    <li>التخزين السليم بعيداً عن الشمس المباشرة</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/utility_services/utility_uniforms.jpeg"
                  alt="العناية بملابس العمل"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  العناية الصحيحة بملابس العمل تطيل عمرها الافتراضي وتحافظ على خصائصها الوقائية
                </div>
              </div>
            </section>

            <section id="suppliers" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أفضل الموردين والعلامات التجارية في السعودية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">موردون محليون موثوقون</h3>
                <p className="mb-2 text-gray-700">خيارات سعودية عالية الجودة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>شركة التجهيزات المتطورة للسلامة - توفر حلول شاملة مع خدمات تخصيص حسب متطلبات القطاع</li>
                  <li>مصنع الشرق الأوسط للملابس الصناعية - متخصص في تصنيع أفرولات بخامات مناسبة للبيئة المحلية</li>
                  <li>شركة تجهيزات السلامة المهنية - خبرة واسعة في توريد ملابس معتمدة للشركات الكبرى</li>
                  <li>المصنع السعودي للملابس المهنية - منتجات محلية مطابقة للمعايير العالمية</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">العلامات التجارية العالمية المعتمدة</h3>
                <p className="mb-2 text-gray-700">خيارات ذات جودة مضمونة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>DuPont™ - معروفة بملابس Tyvek و Nomex المتخصصة للحماية القصوى</li>
                  <li>3M - حلول متكاملة للسلامة مع تقنيات متطورة في الأقمشة العاكسة والواقية</li>
                  <li>Ansell - متخصصة في الملابس المقاومة للمواد الكيميائية والمخاطر البيولوجية</li>
                  <li>Honeywell - مجموعة متنوعة من ملابس العمل للقطاعات الصناعية والخدمية</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل اختيار ملابس العمل المناسبة لقطاع الصيانة والمرافق في المملكة العربية السعودية استثماراً استراتيجياً في سلامة العاملين وكفاءة العمليات. فمن خلال التركيز على معايير السلامة والمتانة والراحة، واختيار الأقمشة والتصاميم الملائمة للبيئة المحلية، يمكن ضمان أقصى حماية ممكنة للعاملين مع تحسين أدائهم وإنتاجيتهم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                كما أن الالتزام بالمعايير المحلية والعالمية، وتطبيق أفضل الممارسات في إدارة وصيانة ملابس العمل، سيساهم في تحقيق أهداف السلامة المهنية ويعزز ثقافة الوقاية في مواقع العمل. ومع التطور المستمر في تقنيات الأقمشة والتصاميم، تتزايد الخيارات المتاحة لتلبية الاحتياجات المتنوعة لقطاع الصيانة والمرافق في المملكة.
              </p>
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