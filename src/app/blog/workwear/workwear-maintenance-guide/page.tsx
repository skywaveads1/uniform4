import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'دليل العناية بملابس العمل: نصائح للحفاظ على مظهرها وإطالة عمرها',
  description: 'دليل شامل للعناية بملابس العمل وصيانتها بشكل صحيح، يتضمن نصائح للغسيل والتخزين والتنظيف الاحترافي لإطالة عمر الزي المهني والحفاظ على مظهره المثالي.',
};

export default function WorkwearMaintenanceGuide() {
  const imageSrc = '/images/workwear/workwear_maintenance_guide.jpeg';
  const title = 'دليل العناية بملابس العمل: نصائح للحفاظ على مظهرها وإطالة عمرها';
  const readingTime = '١٠ دقائق للقراءة';
  const datePublished = '١٧ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'fabric-types', title: 'أنواع الأقمشة وخصائصها' },
    { id: 'washing', title: 'نصائح الغسيل الصحيح' },
    { id: 'drying', title: 'طرق التجفيف والكي المناسبة' },
    { id: 'storage', title: 'الطرق المثلى للتخزين' },
    { id: 'repairs', title: 'الإصلاحات الشائعة والصيانة الدورية' },
    { id: 'professional', title: 'متى تلجأ للتنظيف المهني' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const tags = ["ملابس العمل", "العناية بالزي", "الغسيل الصحيح", "تخزين الملابس", "إصلاح الملابس", "الزي المهني"];

  const relatedArticles = [
    {
      title: "اختيار ملابس العمل المناسبة لقطاعك المهني",
      description: "دليل شامل لاختيار ملابس العمل المناسبة حسب المجال والوظيفة، مع التركيز على العوامل الرئيسية التي يجب مراعاتها",
      image: "/images/workwear/corporate_uniform.jpeg",
      url: "/blog/workwear/how-to-choosing",
      date: "٨ مايو ٢٠٢٤"
    },
    {
      title: "تأثير ملابس العمل على إنتاجية وسلامة الموظفين",
      description: "نظرة معمقة حول تأثير ملابس العمل المناسبة على تحسين الإنتاجية وتعزيز السلامة في مختلف بيئات العمل",
      image: "/images/workwear/maintenance.jpeg",
      url: "/blog/workwear/on-clothing",
      date: "١٠ مايو ٢٠٢٤"
    },
    {
      title: "أحدث اتجاهات ملابس العمل: بين الوظيفة والأناقة",
      description: "استعراض لأحدث اتجاهات تصميم ملابس العمل التي توازن بين المتطلبات الوظيفية والمظهر الأنيق المهني",
      image: "/images/workwear/uniform_sectors.jpeg",
      url: "/blog/workwear/clothing",
      date: "١٢ مايو ٢٠٢٤"
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
                تمثل ملابس العمل استثماراً مهماً للشركات والأفراد على حد سواء، فهي ليست مجرد زي يُرتدى أثناء ساعات العمل، بل هي واجهة للمؤسسة وجزء من هويتها المرئية. ونظراً للاستخدام اليومي المتكرر والظروف المختلفة التي قد تتعرض لها، تحتاج ملابس العمل إلى عناية خاصة للحفاظ على مظهرها المهني وإطالة عمرها الافتراضي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                يهدف هذا الدليل إلى تقديم إرشادات شاملة للعناية بملابس العمل بمختلف أنواعها، بدءاً من فهم خصائص الأقمشة المختلفة، مروراً بطرق الغسيل والتجفيف الصحيحة، وصولاً إلى أساليب التخزين المثالية والإصلاحات البسيطة التي يمكن إجراؤها للحفاظ على جودة الزي المهني.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                سواء كنت مسؤولاً عن إدارة الزي الموحد في مؤسسة كبيرة، أو صاحب عمل صغير، أو حتى موظفاً يهتم بالحفاظ على مظهره المهني، فإن هذه النصائح والإرشادات ستساعدك على تحقيق أقصى استفادة من ملابس العمل، وضمان مظهر احترافي دائم، مع توفير تكاليف الاستبدال المتكرر على المدى الطويل.
              </p>
            </section>

            <section id="fabric-types" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أنواع الأقمشة وخصائصها</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة الشائعة في ملابس العمل</h3>
                <p className="mb-2 font-medium text-blue-700">فهم خصائص المواد الأساسية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>القطن: قماش طبيعي متين، مريح ويمتص العرق، مناسب للبيئات الحارة، لكنه قابل للانكماش والتجعد</li>
                  <li>البوليستر: قماش صناعي قوي، مقاوم للتجعد والبقع، يحتفظ بلونه وشكله، لكنه أقل تهوية من القطن</li>
                  <li>النايلون: خفيف، متين، ومقاوم للماء، يستخدم غالباً في السترات والملابس الخارجية</li>
                  <li>الخلطات (قطن/بوليستر): تجمع بين مزايا المواد المختلفة، مثل متانة البوليستر وراحة القطن</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أقمشة متخصصة للقطاعات المختلفة</h3>
                  <p className="mb-2 text-gray-700">مواد ذات خصائص خاصة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة مقاومة للحريق: للصناعات البترولية والكهربائية وبيئات اللحام</li>
                    <li>أقمشة مقاومة للكيماويات: للمختبرات والصناعات الكيميائية</li>
                    <li>أقمشة مضادة للبكتيريا: للقطاع الصحي والغذائي</li>
                    <li>أقمشة عالية الرؤية (Hi-Vis): للعمل في الطرق والإنشاءات ومواقع الخطر</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">كيفية تحديد نوع القماش والعناية المناسبة</h3>
                  <p className="mb-2 text-gray-700">فهم متطلبات العناية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قراءة ملصق العناية (Care Label) المرفق بالملابس بعناية</li>
                    <li>معرفة رموز الغسيل العالمية وما تشير إليه من درجات حرارة ومواد تنظيف</li>
                    <li>استشارة الشركة المصنعة للملابس المتخصصة (كالملابس المقاومة للحريق)</li>
                    <li>الاحتفاظ بسجل لأنواع الأقمشة في مجموعة الزي الموحد للمؤسسة</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="washing" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">نصائح الغسيل الصحيح</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">التحضير للغسيل</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">خطوات ما قبل الغسيل:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>فرز الملابس حسب اللون (الفاتح، المتوسط، الداكن) ونوع القماش وشدة الاتساخ</li>
                    <li>تفريغ الجيوب تماماً وإغلاق السحابات والأزرار لتجنب تلف الملابس</li>
                    <li>قلب الملابس ذات الألوان الداكنة وتلك التي تحمل شعارات أو طباعة على الوجه الداخلي</li>
                    <li>معالجة البقع فوراً قبل الغسيل باستخدام منتج مناسب حسب نوع البقعة والقماش</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">اختيار مواد التنظيف المناسبة</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">المنظفات المناسبة للزي المهني:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>استخدام منظفات معتدلة للأقمشة الحساسة والمعالجة (كالملابس المقاومة للحريق)</li>
                  <li>تجنب المبيضات الكلورية مع الألوان والأقمشة المعالجة، واستخدام بدائل آمنة عند الحاجة</li>
                  <li>اختيار منظفات إنزيمية للبقع العنيدة كبقع الزيوت الشائعة في بيئات العمل الصناعية</li>
                  <li>استخدام منظفات مطهرة للزي الطبي والمستخدم في قطاع الأغذية لضمان النظافة الصحية</li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">إعدادات الغسالة المثالية</h3>
                <p className="mb-2 text-gray-700">الضبط الصحيح للغسيل الآلي:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>درجة الحرارة: استخدام الماء البارد إلى الدافئ (30-40 درجة مئوية) لمعظم ملابس العمل لتقليل الانكماش وبهتان الألوان</li>
                  <li>دورة الغسيل: اختيار دورة معتدلة للملابس العادية، ودورة قوية للملابس شديدة الاتساخ</li>
                  <li>الحمولة: تجنب الإفراط في تحميل الغسالة لضمان تنظيف فعال وتقليل التجعد</li>
                  <li>الشطف: ضبط دورة شطف إضافية للتخلص من بقايا المنظفات تماماً، خاصة للملابس المستخدمة في القطاع الصحي</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="غسيل ملابس العمل بشكل صحيح"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  فرز وغسيل ملابس العمل بشكل صحيح يساهم في إطالة عمرها والحفاظ على مظهرها
                </div>
              </div>
            </section>

            <section id="drying" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">طرق التجفيف والكي المناسبة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">أساليب التجفيف المثالية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>التجفيف بالهواء: الأسلوب الأمثل لمعظم ملابس العمل، خاصةً المصنوعة من القطن والمواد المعالجة</li>
                  <li>تجنب أشعة الشمس المباشرة لفترات طويلة حتى لا تبهت الألوان، خاصةً الداكنة منها</li>
                  <li>استخدام المجفف الآلي على درجة حرارة منخفضة ودورة معتدلة، مع تجنبه تماماً لبعض المواد المتخصصة</li>
                  <li>تعليق القمصان والسترات على علاقات فور إخراجها من الغسالة لتقليل التجعد</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">فن الكي الصحيح</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">تقنيات للحصول على مظهر احترافي:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>ضبط درجة حرارة المكواة حسب نوع القماش (منخفضة للمواد الصناعية، متوسطة للمزيج، عالية للقطن الخالص)</li>
                  <li>كي الملابس وهي لا تزال رطبة قليلاً للحصول على أفضل النتائج وتسهيل العملية</li>
                  <li>استخدام بخاخ نشا للقمصان الرسمية والأجزاء التي تحتاج إلى مظهر متماسك كالياقات والأكمام</li>
                  <li>كي الشعارات والطباعة من الداخل أو بوضع قطعة قماش فوقها لحمايتها من التلف</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">حلول لمشكلات التجفيف والكي الشائعة</h3>
                <p className="mb-2 text-gray-700">التغلب على التحديات اليومية:</p>
                <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                  <li>التجاعيد العنيدة: رش الملابس بالماء ثم كيها على درجة حرارة مناسبة، أو استخدام مكواة بخارية</li>
                  <li>البقع الصفراء بعد الغسيل: غسل المنطقة بمزيج من الخل الأبيض والماء قبل تجفيفها مجدداً</li>
                  <li>تشابك أزرار الملابس: استخدام حقيبة غسيل مخصصة للأزرار والإكسسوارات، أو غلق الأزرار قبل الغسيل</li>
                  <li>الكرمشة في المجفف: إخراج الملابس فوراً عند انتهاء دورة التجفيف وفردها أو تعليقها</li>
                </ol>
              </div>
            </section>

            <section id="storage" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الطرق المثلى للتخزين</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">تحضير الملابس للتخزين</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">خطوات أساسية قبل التخزين:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>التأكد من نظافة وجفاف الملابس تماماً قبل تخزينها لمنع نمو البكتيريا والعفن والروائح الكريهة</li>
                    <li>إصلاح أي عيوب بسيطة (أزرار مفقودة، غرز مفتوحة) قبل التخزين لتجنب تفاقمها</li>
                    <li>تفريغ الجيوب من أي أغراض وإغلاق السحابات والأزرار للحفاظ على شكل الملابس</li>
                    <li>تجنب تخزين الملابس وهي مكوية بطريقة تسبب ثنيات حادة يصعب إزالتها لاحقاً</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">طرق التعليق والطي الصحيحة</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 text-gray-700">الحفاظ على الشكل أثناء التخزين:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>استخدام علاقات ذات جودة عالية للسترات والقمصان الرسمية، ويفضل العلاقات الخشبية أو البلاستيكية المتينة</li>
                  <li>تعليق البنطلونات من الحزام أو باستخدام مشابك خاصة للحفاظ على خط الكي</li>
                  <li>طي التي-شيرتات والقمصان الثقيلة بطريقة منتظمة لتجنب الثنيات غير المرغوبة</li>
                  <li>ترك مسافة كافية بين قطع الملابس المعلقة للسماح بتدوير الهواء ومنع التجعد</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">أساليب التخزين طويل المدى</h3>
                <p className="mb-2 text-gray-700">للملابس الموسمية أو غير المستخدمة حالياً:</p>
                <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                  <li>استخدام أكياس تخزين قماشية بدلاً من البلاستيكية للسماح بتهوية الملابس ومنع تكون الرطوبة</li>
                  <li>إضافة أكياس السيليكا لامتصاص الرطوبة في مناطق التخزين، خاصة في المناخات الرطبة</li>
                  <li>استخدام مواد طاردة للحشرات طبيعية مثل خشب الأرز واللافندر لحماية الملابس من العث</li>
                  <li>تجنب التخزين في أماكن معرضة لأشعة الشمس المباشرة أو الرطوبة العالية أو الحرارة المرتفعة</li>
                </ol>
              </div>
            </section>

            <section id="repairs" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الإصلاحات الشائعة والصيانة الدورية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مهارات الإصلاح الأساسية</h3>
                <p className="mb-2 font-medium text-blue-700">إصلاحات بسيطة يمكن إجراؤها داخلياً:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>خياطة الأزرار المفكوكة: الاحتفاظ بمجموعة أزرار احتياطية لكل زي والتعلم على طريقة تثبيتها بشكل صحيح</li>
                  <li>إصلاح الثقوب الصغيرة: مهارة رتق الثقوب البسيطة قبل أن تتسع وتصبح أكثر صعوبة في الإصلاح</li>
                  <li>تقوية الحواف والأكتاف: استخدام رقع الكي الحراري لتقوية المناطق المعرضة للتلف بشكل متكرر</li>
                  <li>إصلاح السحابات المتعثرة: تنظيفها وتشحيمها باستخدام قلم رصاص أو شمع عادي لتسهيل حركتها</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معالجة المشكلات الشائعة</h3>
                  <p className="mb-2 text-gray-700">حلول للمشاكل المتكررة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>البقع الدهنية المستعصية: استخدام سائل غسيل الأطباق للمعالجة المسبقة قبل الغسيل العادي</li>
                    <li>بهتان الألوان: استخدام منتجات تجديد الألوان المتخصصة أو صبغات النسيج للأزياء الداكنة</li>
                    <li>تمدد الأقمشة: تقنيات تضييق الملابس المتمددة باستخدام الخياطة أو الماء الساخن حسب نوع القماش</li>
                    <li>إزالة الوبر: استخدام مزيلات الوبر بانتظام للحفاظ على مظهر نظيف للملابس الصوفية والقطنية</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الصيانة الوقائية</h3>
                  <p className="mb-2 text-gray-700">إجراءات منتظمة للحفاظ على الزي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الفحص الدوري: تفقد شامل للزي مرة شهرياً للكشف المبكر عن أي مشاكل محتملة</li>
                    <li>التهوية المنتظمة: تعليق الملابس في مكان جيد التهوية بعد الاستخدام وقبل التخزين</li>
                    <li>التنظيف الجاف الدوري: جدولة تنظيف جاف احترافي للقطع الثمينة مرة كل موسم</li>
                    <li>التناوب المدروس: تبديل استخدام قطع الزي بشكل منتظم لتوزيع التآكل بالتساوي</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="professional" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">متى تلجأ للتنظيف المهني</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">مؤشرات الحاجة إلى الخدمة الاحترافية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">علامات تستدعي التدخل المهني:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الأقمشة الحساسة والثمينة التي تتطلب عناية خاصة (كالبدلات الرسمية والأقمشة المختلطة المعقدة)</li>
                    <li>البقع العنيدة التي فشلت المعالجات المنزلية في إزالتها (كالحبر الدائم والطلاء والمواد الكيميائية)</li>
                    <li>الملابس المعالجة بمواد خاصة (كالمقاومة للحريق والماء) التي قد تفقد خصائصها مع الغسيل العادي</li>
                    <li>ملابس المناسبات الرسمية وقطع الزي التمثيلية للمؤسسة التي يجب أن تظهر بمظهر مثالي دائماً</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">أنواع الخدمات المهنية</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">خدمات التنظيف المتخصصة:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>التنظيف الجاف: يستخدم مذيبات خاصة بدلاً من الماء، مناسب للأقمشة الحساسة والبدلات الرسمية</li>
                  <li>التنظيف بالماء المتخصص (Wet Cleaning): بديل صديق للبيئة للتنظيف الجاف، يستخدم مواد خاصة ومعدات متطورة</li>
                  <li>معالجة البقع الاحترافية: تقنيات متقدمة لإزالة البقع المستعصية دون الإضرار بالقماش</li>
                  <li>خدمات الترميم: لإصلاح التلف الكبير والتعديلات الهيكلية التي تتجاوز الإصلاحات البسيطة</li>
                </ol>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">إنشاء برنامج صيانة محترف للمؤسسات</h3>
                <p className="mb-2 text-gray-700">خطة متكاملة للشركات:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>التعاقد مع مزودي خدمات متخصصين في العناية بالزي الموحد والملابس المهنية</li>
                  <li>وضع جدول زمني للتنظيف الدوري المهني حسب نوع العمل وشدة التعرض للاتساخ</li>
                  <li>تطوير نظام تتبع لمراقبة دورة حياة كل قطعة من الزي وتوقيت الاستبدال المثالي</li>
                  <li>توفير تدريب للموظفين حول العناية اليومية المناسبة للزي والممارسات الوقائية</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل العناية المناسبة بملابس العمل استثماراً ذكياً يعود بفوائد متعددة، فهي لا تطيل عمر الزي فحسب، بل تضمن الحفاظ على المظهر الاحترافي للموظفين وتحسن صورة المؤسسة أمام عملائها. كما أن الصيانة المنتظمة تساهم في توفير التكاليف على المدى الطويل من خلال تقليل معدل استبدال الملابس.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                من خلال فهم خصائص الأقمشة المختلفة، واتباع إرشادات الغسيل والتجفيف الصحيحة، وتطبيق أساليب التخزين المثلى، يمكن تحقيق أقصى استفادة من ملابس العمل مع الحفاظ على وظائفها الأساسية، سواء كانت الحماية أو الراحة أو الأناقة المهنية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                وفي الختام، ينبغي التأكيد على أهمية وضع برنامج متكامل للعناية بالزي المهني يجمع بين الصيانة اليومية البسيطة والإصلاحات الدورية والتنظيف المهني عند الحاجة. هذا النهج المتوازن سيضمن أن تبقى ملابس العمل في حالة ممتازة طوال دورة حياتها، مما يعزز الصورة الاحترافية للمؤسسة ويحقق قيمة مضافة للاستثمار في الزي الموحد.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
} 