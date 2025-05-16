import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'أهمية وخصائص الأقمشة المقاومة في زي عمال المرافق',
  description: 'دراسة تفصيلية حول أهمية وخصائص الأقمشة المقاومة المستخدمة في زي عمال المرافق، مع التركيز على المواصفات الفنية والوظيفية والمناخية المناسبة للبيئة السعودية',
};

export default function ArticlePage() {
  const imageSrc = '/images/utility_services/header_utility_uniform.jpeg';
  const title = 'أهمية وخصائص الأقمشة المقاومة في زي عمال المرافق';
  const readingTime = '6 دقائق للقراءة';
  const datePublished = '15 مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية الأقمشة المقاومة في زي عمال المرافق' },
    { id: 'characteristics', title: 'خصائص الأقمشة المقاومة المثالية' },
    { id: 'types', title: 'أنواع الأقمشة المقاومة وتطبيقاتها' },
    { id: 'climate', title: 'الاعتبارات المناخية والثقافية' },
    { id: 'standards', title: 'المعايير والشهادات العالمية' },
    { id: 'care', title: 'العناية والصيانة الصحيحة' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const relatedArticles = [
    {
      title: "اختيار أفضل ملابس عمل لقطاع الصيانة والمرافق",
      description: "دليل شامل لاختيار أفضل أنواع ملابس العمل وأفرولات الصيانة المناسبة لقطاع المرافق",
      image: "/images/utility_services/utility_uniforms.jpeg",
      url: "/blog/utility-services/utility-1",
      date: "١٠ مايو ٢٠٢٤",
      category: "خدمات المرافق"
    },
    {
      title: "متطلبات الزي الموحد لعمال الصيانة والتشغيل",
      description: "دليل متكامل حول المتطلبات الأساسية للزي الموحد لعمال الصيانة والتشغيل",
      image: "/images/utility_services/utility_uniforms.jpeg",
      url: "/blog/workwear/maintenance-worker-uniform-requirements",
      date: "٥ مايو ٢٠٢٤",
      category: "خدمات المرافق"
    },
    {
      title: "معايير الزي الموحد لشركات الخدمات والمرافق",
      description: "استعراض شامل للمعايير الأساسية التي يجب اتباعها عند اختيار وتصميم الزي الموحد",
      image: "/images/utility_services/utility_uniforms.jpeg",
      url: "/blog/workwear/utility-services-uniform-standards",
      date: "٢ مايو ٢٠٢٤",
      category: "خدمات المرافق"
    }
  ];

  const tags = ["أقمشة مقاومة", "زي عمال المرافق", "أقمشة تقنية", "مقاومة للمناخ", "معايير الجودة", "الصيانة", "السلامة المهنية"];

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
                يواجه عمال المرافق تحديات متنوعة في بيئات العمل المختلفة، من التعرض للظروف المناخية القاسية إلى المخاطر المهنية المتعددة. وتعتبر الأقمشة المقاومة المستخدمة في زيهم الموحد عنصراً حاسماً في توفير الحماية والراحة اللازمة لأداء مهامهم بكفاءة وأمان.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنتناول أهمية الأقمشة المقاومة في زي عمال المرافق، وخصائصها الرئيسية، وأنواعها المختلفة، والاعتبارات الواجب مراعاتها عند اختيارها، مع التركيز على ملاءمتها للبيئة السعودية.
              </p>
            </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية الأقمشة المقاومة في زي عمال المرافق</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الحماية وتعزيز السلامة</h3>
                <p className="mb-2 text-gray-700">تقدم الأقمشة المقاومة مستويات حماية متعددة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>حماية من المخاطر الميكانيكية مثل القطع والتمزق والثقب</li>
                  <li>مقاومة للحرارة والاشتعال في بيئات العمل الساخنة</li>
                  <li>حماية من المواد الكيميائية والسوائل الضارة</li>
                  <li>عزل كهربائي للوقاية من مخاطر الصعق والتماس الكهربائي</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تعزيز الراحة والإنتاجية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تنظيم درجة حرارة الجسم في الظروف المناخية المختلفة</li>
                    <li>امتصاص العرق ونقل الرطوبة بعيداً عن الجسم</li>
                    <li>خفة الوزن مع توفير الحماية المطلوبة</li>
                    <li>المرونة والمطاطية لتسهيل حركة العمال</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تقليل التكاليف وزيادة العمر الافتراضي</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>متانة تضمن صمود الزي لفترات أطول</li>
                    <li>مقاومة للاتساخ والبقع تقلل من تكرار الغسيل</li>
                    <li>حفاظ على الشكل والألوان حتى بعد الاستخدام المتكرر</li>
                    <li>انخفاض تكاليف الاستبدال والصيانة على المدى الطويل</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/utility_services/utility_uniforms.jpeg"
                  alt="أهمية الأقمشة المقاومة في زي عمال المرافق"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  عمال المرافق يرتدون ملابس مصنوعة من أقمشة مقاومة توفر الحماية المثلى
                </div>
              </div>
            </section>

            <section id="characteristics" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">خصائص الأقمشة المقاومة المثالية</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">المواصفات الفنية الأساسية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">خصائص تحدد جودة الأقمشة المقاومة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مقاومة التمزق: قدرة القماش على مقاومة القوى التي تؤدي إلى تمزقه</li>
                    <li>مقاومة الاحتكاك: تحمل الاستخدام المتكرر والاحتكاك بالأسطح المختلفة</li>
                    <li>قوة الشد: مقاومة القماش للقوى الميكانيكية المؤثرة عليه</li>
                    <li>المرونة والاستطالة: قدرة القماش على التمدد والعودة لشكله الأصلي</li>
                    <li>ثبات الأبعاد: عدم تعرض القماش للانكماش أو التمدد بعد الغسيل والاستخدام</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">خصائص الراحة والأداء الوظيفي</h3>
                <p className="mb-2 text-gray-700">مواصفات تضمن راحة العامل وكفاءة أدائه:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>نفاذية الهواء: قدرة القماش على السماح بمرور الهواء لتوفير التهوية</li>
                  <li>امتصاص الرطوبة: قدرة القماش على امتصاص العرق بسرعة</li>
                  <li>نقل الرطوبة: تحريك العرق من داخل القماش إلى الخارج للتبخر</li>
                  <li>خفة الوزن: تقليل العبء والإجهاد على العامل</li>
                  <li>ملمس لطيف: عدم التسبب في تهيج الجلد حتى مع الاستخدام المطول</li>
                </ul>
              </div>
            </section>

            <section id="types" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أنواع الأقمشة المقاومة وتطبيقاتها</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة القطنية المعالجة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قطن معالج بمواد مضادة للاشتعال</li>
                    <li>خامات قطنية مغطاة بمواد مضادة للماء والزيوت</li>
                    <li>مزيج القطن والبوليستر للجمع بين الراحة والمتانة</li>
                    <li>قطن مدمج عالي الكثافة لزيادة المتانة والمقاومة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة الاصطناعية المتطورة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة Kevlar® عالية المتانة للحماية من الاختراق والقطع</li>
                    <li>أقمشة Nomex® المقاومة للهب والحرارة</li>
                    <li>النايلون المعالج للاستخدامات الخارجية ومقاومة الماء</li>
                    <li>بوليستر ميكروفايبر للمتانة والراحة والتجفيف السريع</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة المركبة والمتخصصة</h3>
                <p className="mb-2 text-gray-700">حلول متطورة للظروف الخاصة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أقمشة Gore-Tex® المقاومة للماء والمسامية للهواء في نفس الوقت</li>
                  <li>أقمشة Ripstop المقاومة للتمزق والمعززة بشبكة تقوية</li>
                  <li>الأقمشة المضادة للميكروبات والبكتيريا للبيئات الصحية الحساسة</li>
                  <li>أقمشة تنظيم الحرارة مثل Outlast® التي تمتص وتطلق الحرارة حسب الحاجة</li>
                  <li>أقمشة الحماية من الإشعاع والمواد الكيميائية الخطرة للمرافق المتخصصة</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/utility_services/utility_uniforms.jpeg"
                  alt="أنواع الأقمشة المقاومة المستخدمة في زي عمال المرافق"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  أنواع مختلفة من الأقمشة المقاومة المستخدمة في صناعة ملابس عمال المرافق
                </div>
              </div>
            </section>

            <section id="climate" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات المناخية والثقافية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تتميز المملكة العربية السعودية بمناخ صحراوي حار في معظم المناطق، مع تباين في درجات الحرارة والرطوبة بين المناطق الداخلية والساحلية. ويجب مراعاة هذه الخصوصيات المناخية عند اختيار أقمشة زي عمال المرافق.
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التكيف مع المناخ السعودي</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>أقمشة خفيفة الوزن مع حماية من أشعة الشمس للمناطق الحارة</li>
                  <li>ألوان فاتحة تعكس الحرارة وتقلل امتصاص الطاقة الشمسية</li>
                  <li>أقمشة تتميز بسرعة الجفاف للمناطق ذات الرطوبة العالية مثل جدة والدمام</li>
                  <li>طبقات قابلة للتعديل للتكيف مع التغيرات الموسمية ودرجات الحرارة الليلية المنخفضة</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التوافق مع القيم الثقافية والاجتماعية</h3>
                <p className="mb-2 text-gray-700">مراعاة الجوانب الثقافية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>احترام متطلبات الحشمة في تصميم وخامات الزي الموحد</li>
                  <li>توفير خيارات تتناسب مع متطلبات اللباس الشرعي للعاملين والعاملات</li>
                  <li>مراعاة توافق الألوان والتصميمات مع الذوق المحلي والهوية الوطنية</li>
                  <li>توفير أغطية رأس مناسبة للحماية من الشمس وتتوافق مع العادات المحلية</li>
                </ul>
              </div>
            </section>

            <section id="standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المعايير والشهادات العالمية</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">المعايير الدولية لجودة الأقمشة المقاومة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">شهادات تضمن مستوى الحماية والجودة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>معايير ISO 11612 للحماية من الحرارة واللهب</li>
                    <li>معايير EN 343 للحماية من المطر والرطوبة</li>
                    <li>معايير ASTM F1506 لمقاومة القوس الكهربائي</li>
                    <li>شهادات OEKO-TEX® للخلو من المواد الضارة بالبشرة</li>
                    <li>معايير EN 20471 للرؤية العالية في بيئات العمل الخطرة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">تشير الدراسات إلى أن استخدام الأقمشة المقاومة المتوافقة مع المعايير العالمية يمكن أن يقلل من إصابات العمل المرتبطة بالملابس بنسبة تصل إلى 60%، ويزيد من إنتاجية العاملين بنسبة 15-25% خاصة في البيئات القاسية.</p>
                  <footer className="text-sm text-gray-600">— مجلة السلامة المهنية الدولية، 2023</footer>
                </blockquote>
              </div>
            </section>

            <section id="care" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناية والصيانة الصحيحة</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تتطلب الأقمشة المقاومة عناية خاصة للحفاظ على خصائصها الوقائية وإطالة عمرها الافتراضي، خاصة في ظل ظروف الاستخدام القاسية التي يتعرض لها عمال المرافق.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">إرشادات الغسيل</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الالتزام بتعليمات الغسيل المحددة من الشركة المصنعة</li>
                    <li>تجنب المبيضات والمنظفات القوية التي قد تضر بخصائص المقاومة</li>
                    <li>غسل الملابس المقاومة للهب بشكل منفصل عن الأنواع الأخرى</li>
                    <li>استخدام درجات حرارة معتدلة للماء والتجفيف</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الفحص الدوري والاستبدال</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>فحص الملابس بانتظام للكشف عن علامات التلف والتآكل</li>
                    <li>التحقق من سلامة الأقمشة المقاومة بعد التعرض للمواد الكيميائية</li>
                    <li>استبدال الملابس فوراً عند ملاحظة انخفاض في خصائص المقاومة</li>
                    <li>توثيق عمليات الفحص والصيانة ضمن برنامج السلامة المهنية</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/utility_services/utility_uniforms.jpeg"
                  alt="العناية بأقمشة زي عمال المرافق"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  العناية السليمة بالأقمشة المقاومة تضمن استمرار فعاليتها وتطيل عمرها الافتراضي
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل الأقمشة المقاومة في زي عمال المرافق عنصراً أساسياً في منظومة السلامة المهنية، وينبغي اختيارها بعناية لتوفير الحماية والراحة اللازمة للعاملين، مع مراعاة التكلفة والجودة والاستدامة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                إن الاستثمار في أقمشة عالية الجودة ومتوافقة مع المعايير العالمية والمناسبة للبيئة المحلية هو استثمار في سلامة العاملين وإنتاجيتهم على المدى الطويل. كما أن التدريب المستمر على الاستخدام الصحيح والعناية المناسبة بهذه الأقمشة يضمن تحقيق أقصى استفادة من خصائصها الوقائية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                ومع التطور المستمر في تقنيات الأقمشة، يجب على المسؤولين عن توفير ملابس العمل متابعة أحدث الابتكارات في هذا المجال واختيار ما يناسب طبيعة عمل المنشأة والمخاطر المحتملة، بما يضمن بيئة عمل آمنة وصحية للعاملين في قطاع المرافق في المملكة العربية السعودية.
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