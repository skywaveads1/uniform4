import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'متطلبات الزي الموحد لعمال الصيانة والتشغيل',
  description: 'دليل متكامل حول المتطلبات الأساسية للزي الموحد لعمال الصيانة والتشغيل بما يتوافق مع معايير السلامة والجودة العالمية والمحلية',
};

export default function MaintenanceUniformRequirements() {
  const imageSrc = '/images/workwear/maintenance_uniform_requirements.jpeg';
  const title = 'متطلبات الزي الموحد لعمال الصيانة والتشغيل';
  const readingTime = '7 دقائق للقراءة';
  const datePublished = '٥ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'safety-requirements', title: 'متطلبات السلامة الأساسية' },
    { id: 'uniform-components', title: 'مكونات الزي الموحد لعمال الصيانة' },
    { id: 'fabric-specifications', title: 'مواصفات الأقمشة والخامات' },
    { id: 'identification-systems', title: 'أنظمة التعريف وترميز المستويات' },
    { id: 'global-standards', title: 'المعايير العالمية والمحلية' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const relatedArticles = [
    {
      title: "اختيار أفضل ملابس عمل لقطاع الصيانة والمرافق",
      description: "دليل شامل لاختيار أفضل أنواع ملابس العمل وأفرولات الصيانة المناسبة لقطاع المرافق",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/utility-services/utility-1",
      date: "١٠ مايو ٢٠٢٤",
      category: "خدمات المرافق"
    },
    {
      title: "معايير الزي الموحد لشركات الخدمات والمرافق",
      description: "استعراض شامل للمعايير الأساسية التي يجب اتباعها عند اختيار وتصميم الزي الموحد",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/utility-services-uniform-standards",
      date: "٢ مايو ٢٠٢٤",
      category: "خدمات المرافق"
    },
    {
      title: "العناية بملابس العمل وأثرها على الصحة المهنية",
      description: "دليل شامل حول كيفية العناية بملابس العمل للحفاظ على جودتها وتأثير ذلك على صحة الموظفين",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/clothing-maintenance-work-health",
      date: "١ مايو ٢٠٢٤",
      category: "ملابس العمل"
    }
  ];

  const tags = ["زي عمال الصيانة", "السلامة المهنية", "ملابس العمل", "متطلبات الزي الموحد", "معايير الجودة", "أفرولات الصيانة"];

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
                يلعب عمال الصيانة والتشغيل دوراً حيوياً في ضمان استمرارية عمل البنية التحتية والمرافق الصناعية والتجارية. ونظراً لطبيعة عملهم المتنوعة والمعقدة، فإنهم يواجهون مجموعة من التحديات والمخاطر المهنية التي تتطلب زياً موحداً يلبي متطلبات محددة من حيث السلامة والوظيفية والراحة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                يعتبر الزي الموحد لعمال الصيانة والتشغيل أكثر من مجرد ملابس عمل، فهو خط الدفاع الأول ضد المخاطر المهنية، وأداة أساسية تساعدهم على أداء مهامهم بكفاءة وأمان. كما أنه يعكس هوية المؤسسة ويسهم في تعزيز الانتماء المهني للعاملين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنستعرض المتطلبات الأساسية للزي الموحد لعمال الصيانة والتشغيل، بدءاً من معايير السلامة والمكونات الأساسية، مروراً بمواصفات الأقمشة والخامات، وانتهاءً بأنظمة التعريف والمعايير العالمية والمحلية التي تحكم هذا المجال.
          </p>
        </section>

            <section id="safety-requirements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">متطلبات السلامة الأساسية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الحماية من المخاطر الشائعة</h3>
                <p className="mb-2 text-gray-700">يجب أن يوفر الزي الموحد لعمال الصيانة حماية من:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>المخاطر الميكانيكية (الاحتكاك، القطع، الثقب)</li>
                  <li>مخاطر الحرارة واللهب في بيئات العمل الساخنة</li>
                  <li>المخاطر الكهربائية لفنيي الصيانة الكهربائية</li>
                  <li>التعرض للمواد الكيميائية والزيوت والشحوم</li>
                  <li>ظروف الطقس المتقلبة للعاملين في المواقع الخارجية</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">عناصر الرؤية والتمييز</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>عاكسات ضوئية عالية الوضوح وفق معيار EN 20471</li>
                    <li>ألوان تحذيرية زاهية للعمل في مناطق الحركة والآلات</li>
                    <li>شعارات وعلامات مقاومة للاهتراء والغسيل المتكرر</li>
                    <li>شرائط تعريفية للتخصص والإدارة التابع لها العامل</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">متطلبات المتانة والاستدامة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تعزيز مناطق الإجهاد (الركبتين، المرفقين، الأكمام)</li>
                    <li>خياطات مزدوجة أو ثلاثية في المناطق الحرجة</li>
                    <li>أزرار وسحابات صناعية مقاومة للصدأ والتآكل</li>
                    <li>قدرة على تحمل الغسيل المتكرر دون فقدان الخصائص الوقائية</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="متطلبات السلامة في زي عمال الصيانة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  عناصر السلامة الأساسية في الزي الموحد لعمال الصيانة توفر الحماية القصوى أثناء أداء المهام
                </div>
              </div>
            </section>

            <section id="uniform-components" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مكونات الزي الموحد لعمال الصيانة</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الملابس الأساسية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">القطع الرئيسية للزي الموحد:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">الأفرول (Coverall):</span> قطعة واحدة توفر تغطية كاملة للجسم، مثالية للحماية الشاملة</li>
                    <li><span className="font-medium">طقم العمل (بنطلون وقميص/جاكيت):</span> يوفر مرونة أكبر في التكيف مع ظروف العمل المختلفة</li>
                    <li><span className="font-medium">السترة المضادة للعوامل الجوية:</span> للحماية في الظروف المناخية المتقلبة والعمل الخارجي</li>
                    <li><span className="font-medium">السترة العاكسة:</span> لضمان الرؤية العالية في مناطق العمل الخطرة وظروف الإضاءة المنخفضة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">ملحقات ومعدات السلامة الشخصية</h3>
                <p className="mb-2 text-gray-700">مكملات أساسية للزي الموحد:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">القبعات الصلبة (Hard Hats):</span> للحماية من الصدمات والأجسام المتساقطة</li>
                  <li><span className="font-medium">أحذية السلامة:</span> مع مقدمة معدنية ونعل مقاوم للانزلاق والثقب</li>
                  <li><span className="font-medium">النظارات الواقية:</span> لحماية العينين من الشظايا والمواد الكيميائية</li>
                  <li><span className="font-medium">القفازات:</span> بأنواع مختلفة حسب طبيعة العمل (ميكانيكية، كيميائية، كهربائية)</li>
                  <li><span className="font-medium">حوامل المعدات:</span> أحزمة وجيوب خاصة لحمل الأدوات بطريقة آمنة ومريحة</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="مكونات الزي الموحد لعمال الصيانة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  مكونات متكاملة للزي الموحد لعمال الصيانة تضمن الحماية والراحة والفعالية
                </div>
              </div>
        </section>

            <section id="fabric-specifications" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مواصفات الأقمشة والخامات</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر نوعية الأقمشة والخامات المستخدمة في الزي الموحد لعمال الصيانة عاملاً حاسماً في توفير الحماية المناسبة والراحة والمتانة. يجب اختيار الأقمشة بعناية لتلبية متطلبات العمل المختلفة والظروف البيئية المتنوعة.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة الموصى بها</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مزيج القطن/البوليستر (65/35%) للتوازن بين المتانة والراحة</li>
                    <li>أقمشة Ripstop المقاومة للتمزق للبيئات القاسية</li>
                    <li>أقمشة Nomex® المقاومة للهب للمناطق ذات مخاطر الحريق</li>
                    <li>أقمشة مغطاة بالتفلون لمقاومة البقع والسوائل</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">خصائص الأقمشة المطلوبة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قدرة عالية على امتصاص الرطوبة ونقل العرق</li>
                    <li>مقاومة للاشتعال والتوهج وفق معايير محددة</li>
                    <li>خفة الوزن مع المحافظة على المتانة</li>
                    <li>مقاومة للتجعد والانكماش بعد الغسيل المتكرر</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">معالجات خاصة للأقمشة</h3>
                <p className="mb-2 text-gray-700">تقنيات متقدمة لتحسين أداء الأقمشة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>معالجات مضادة للبكتيريا للتحكم في الروائح والتلوث الميكروبي</li>
                  <li>معالجات مضادة للكهرباء الساكنة للبيئات الخطرة</li>
                  <li>معالجات النانو لتعزيز مقاومة البقع والسوائل دون التأثير على نفاذية الهواء</li>
                  <li>معالجات واقية من الأشعة فوق البنفسجية للعمل في الأماكن المكشوفة</li>
                </ul>
              </div>
        </section>

            <section id="identification-systems" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أنظمة التعريف وترميز المستويات</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">العناصر التعريفية الأساسية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>بطاقات هوية واضحة ومقاومة للماء والتلف</li>
                  <li>شعارات الشركة والإدارة مطرزة أو مطبوعة بتقنية عالية الجودة</li>
                  <li>شارات الاسم والمسمى الوظيفي بخط واضح وقابل للقراءة من مسافة</li>
                  <li>رموز QR أو باركود للوصول السريع لمعلومات الموظف في حالات الطوارئ</li>
                </ul>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">ترميز المستويات والتخصصات</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">نظام الألوان والرموز للتمييز السريع:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>ألوان محددة لكل تخصص (ميكانيكا، كهرباء، سباكة، تكييف، إلخ)</li>
                    <li>شارات وشرائط ملونة للتمييز بين المستويات الإشرافية والفنية</li>
                    <li>رموز خاصة للمهارات والتدريبات المتخصصة (مثل الإسعافات الأولية، التعامل مع المواد الخطرة)</li>
                    <li>علامات مميزة للتصاريح الخاصة (العمل على ارتفاعات، الأماكن المحصورة، إلخ)</li>
                  </ul>
                </div>
              </div>
        </section>

            <section id="global-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المعايير العالمية والمحلية</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المعايير الدولية الرئيسية</h3>
                <p className="mb-2 text-gray-700">مواصفات وشهادات عالمية معترف بها:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">ISO 11611:</span> معيار ملابس الحماية للاستخدام في عمليات اللحام والعمليات المماثلة</li>
                  <li><span className="font-medium">ISO 11612:</span> معيار ملابس الحماية من الحرارة واللهب</li>
                  <li><span className="font-medium">EN 1149:</span> معيار الخصائص الكهروستاتيكية لملابس الحماية</li>
                  <li><span className="font-medium">EN 20471:</span> معيار الملابس ذات الرؤية العالية للاستخدام المهني</li>
                  <li><span className="font-medium">NFPA 70E:</span> معيار السلامة الكهربائية في أماكن العمل</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المعايير المحلية والإقليمية</h3>
                <p className="mb-2 text-gray-700">المواصفات الخاصة بالمنطقة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>معايير الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)</li>
                  <li>اشتراطات هيئة المدن الصناعية ومناطق التقنية (مدن)</li>
                  <li>متطلبات شركة أرامكو السعودية للسلامة المهنية</li>
                  <li>معايير هيئة تنظيم الكهرباء والإنتاج المزدوج للعاملين في قطاع الكهرباء</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">تشير الدراسات إلى أن الالتزام بمعايير السلامة في تصميم واختيار ملابس عمال الصيانة يمكن أن يقلل من معدل الإصابات المهنية بنسبة تصل إلى 45%، خاصة في البيئات الصناعية عالية المخاطر.</p>
                  <footer className="text-sm text-gray-600">— تقرير المعهد الدولي للسلامة المهنية، 2023</footer>
                </blockquote>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعتبر الزي الموحد لعمال الصيانة والتشغيل استثماراً استراتيجياً في سلامة العاملين وكفاءة العمليات. فمن خلال الالتزام بالمتطلبات والمعايير المذكورة، يمكن للمؤسسات توفير زي موحد يجمع بين الحماية والراحة والمتانة والمظهر المهني.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                من المهم مراعاة أن متطلبات الزي قد تختلف باختلاف طبيعة العمل والبيئة التشغيلية والمخاطر المحددة. لذلك، يُنصح بإجراء تقييم شامل للمخاطر وتحديد الاحتياجات الخاصة بكل فئة من العاملين قبل اختيار الزي المناسب.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في ظل التطور المستمر في تقنيات الأقمشة ومعايير السلامة، يجب على المؤسسات مواكبة أحدث التطورات وتحديث زي العاملين بما يتناسب مع المستجدات، مع الحرص على توفير التدريب المناسب للعاملين حول الاستخدام الصحيح للزي وطرق العناية به للحفاظ على فعاليته وإطالة عمره الافتراضي.
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