import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات',
  description: 'دليل شامل حول متطلبات ومواصفات ملابس العمل المناسبة لفنيي الخدمة الميدانية في مختلف القطاعات، مع التركيز على المتانة والراحة والسلامة',
};

export default function FieldServiceTechnicianWorkwear() {
  const imageSrc = '/images/workwear/field_technician_workwear.jpeg';
  const title = 'ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات';
  const readingTime = '8 دقائق للقراءة';
  const datePublished = '٣ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية الملابس المناسبة' },
    { id: 'basic-requirements', title: 'المتطلبات الأساسية' },
    { id: 'fabric-specs', title: 'مواصفات الأقمشة' },
    { id: 'design-features', title: 'التصميم والميزات العملية' },
    { id: 'safety-standards', title: 'معايير السلامة والامتثال' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const relatedArticles = [
    {
      title: "متطلبات الزي الموحد لعمال الصيانة والتشغيل",
      description: "دليل متكامل حول المتطلبات الأساسية للزي الموحد لعمال الصيانة والتشغيل",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/maintenance-worker-uniform-requirements",
      date: "٥ مايو ٢٠٢٤",
      category: "ملابس العمل"
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
      title: "الزي الموحد: أهميته وتأثيره على بيئة العمل",
      description: "تحليل شامل لأهمية الزي الموحد وتأثيره الإيجابي على بيئة العمل وهوية الشركة والإنتاجية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/uniform",
      date: "٤ مايو ٢٠٢٤",
      category: "ملابس العمل"
    }
  ];

  const tags = ["فنيي الخدمة الميدانية", "ملابس العمل", "السلامة المهنية", "مواصفات الأقمشة", "أعمال الصيانة", "الخدمات التقنية"];

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
            يواجه فنيو الخدمة الميدانية تحديات فريدة في بيئات عملهم المتنوعة، سواء كانوا يعملون في مجال الاتصالات، أو صيانة المعدات، أو خدمات الطاقة، أو غيرها من القطاعات. وتلعب ملابس العمل المناسبة دوراً حاسماً في ضمان سلامتهم وراحتهم وكفاءتهم أثناء أداء مهامهم اليومية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض المتطلبات والمواصفات الرئيسية لملابس فنيي الخدمة الميدانية، مع مراعاة الاختلافات بين القطاعات المختلفة والظروف البيئية المتنوعة التي يعملون فيها، بهدف مساعدة المؤسسات على اختيار الزي الأمثل لفنييها، وتوفير المعلومات اللازمة للعاملين في هذا المجال.
          </p>
        </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية الملابس المناسبة لفنيي الخدمة الميدانية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الفوائد المتعددة للملابس المهنية المناسبة</h3>
                <p className="mb-2 text-gray-700">تتجاوز أهمية ملابس العمل المناسبة مجرد توفير مظهر موحد:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>توفير الحماية الضرورية من المخاطر المهنية والبيئية المختلفة</li>
                  <li>تعزيز الكفاءة من خلال تصميمات عملية تسهل الحركة وحمل الأدوات</li>
                  <li>تمييز الفنيين وتسهيل التعرف عليهم من قبل العملاء والزملاء</li>
                  <li>تعزيز هوية الشركة وتقديم صورة احترافية موحدة</li>
                  <li>حماية الملابس الشخصية من التلف والتلوث بمواد العمل</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تأثير الملابس على الأداء</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحسين الراحة أثناء ساعات العمل الطويلة</li>
                    <li>زيادة التركيز بتقليل الانشغال بعدم ملاءمة الملابس</li>
                    <li>تقليل الإجهاد البدني من خلال دعم وضعيات العمل المختلفة</li>
                    <li>تعزيز الثقة بالنفس والشعور بالانتماء المهني</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تأثير الملابس على تجربة العملاء</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>بناء الثقة من خلال المظهر الاحترافي للفنيين</li>
                    <li>تسهيل التعرف على ممثلي الشركة الرسميين</li>
                    <li>تعزيز الانطباع بالكفاءة والاحترافية</li>
                    <li>خلق تجربة خدمة متناسقة عبر مختلف نقاط التواصل</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="أهمية الملابس المناسبة لفنيي الخدمة الميدانية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الملابس المهنية المناسبة تعزز كفاءة وسلامة فنيي الخدمة الميدانية وتقدم صورة احترافية للعملاء
                </div>
              </div>
            </section>

            <section id="basic-requirements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المتطلبات الأساسية لملابس فنيي الخدمة الميدانية</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">المتطلبات الوظيفية الأساسية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">الخصائص الرئيسية التي يجب توفرها في ملابس الفنيين:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">المتانة:</span> قدرة على تحمل الاستخدام المكثف والظروف القاسية دون تلف سريع</li>
                    <li><span className="font-medium">الراحة:</span> خفة الوزن والمرونة التي تسمح بالحركة الحرة لفترات طويلة</li>
                    <li><span className="font-medium">الحماية:</span> توفير الحماية المناسبة من المخاطر المحتملة (ميكانيكية، كيميائية، كهربائية)</li>
                    <li><span className="font-medium">التكيف المناخي:</span> ملاءمة للعمل في مختلف الظروف المناخية (حرارة، برودة، رطوبة)</li>
                    <li><span className="font-medium">سهولة الصيانة:</span> قابلية للتنظيف والغسيل المتكرر مع الحفاظ على المظهر والخصائص</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">متطلبات خاصة بمجالات العمل المختلفة</h3>
                <p className="mb-2 text-gray-700">اعتبارات إضافية حسب القطاع:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">فنيو الاتصالات:</span> قابلية للتسلق والعمل على ارتفاعات، حماية من الطقس المتقلب</li>
                  <li><span className="font-medium">فنيو الكهرباء:</span> عزل كهربائي، مقاومة للحرارة واللهب، عناصر عاكسة للضوء</li>
                  <li><span className="font-medium">فنيو التكييف والتبريد:</span> مقاومة للتغيرات الحرارية، حماية من المواد المبردة</li>
                  <li><span className="font-medium">فنيو صيانة المعدات الثقيلة:</span> حماية معززة من الصدمات والاحتكاك، مقاومة للزيوت</li>
                  <li><span className="font-medium">فنيو الخدمات المنزلية:</span> مظهر أنيق ونظيف، سهولة التعرف والتمييز، راحة للعمل في البيئات السكنية</li>
                </ul>
              </div>
        </section>

            <section id="fabric-specs" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مواصفات الأقمشة المناسبة</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر اختيار الأقمشة المناسبة أحد أهم العوامل في تحديد أداء وعمر ملابس فنيي الخدمة الميدانية. إذ يجب الموازنة بين المتانة والراحة والوظائف المتخصصة التي تتطلبها طبيعة العمل.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أنواع الأقمشة الموصى بها</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مزيج القطن والبوليستر (65/35%) للتوازن بين الراحة والمتانة</li>
                    <li>أقمشة Ripstop المقاومة للتمزق للبيئات القاسية</li>
                    <li>أقمشة مقاومة للماء ومتنفسة للعمل في الظروف الجوية المتقلبة</li>
                    <li>أقمشة مقاومة للاشتعال للعمل بالقرب من مصادر الحرارة</li>
                    <li>الأقمشة المرنة (Stretch fabrics) للحركة الأفضل في المناطق الضيقة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المعالجات الخاصة للأقمشة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>معالجات مضادة للبكتيريا للتحكم في الروائح</li>
                    <li>معالجات مقاومة للبقع والزيوت للبيئات الصناعية</li>
                    <li>معالجات الحماية من الأشعة فوق البنفسجية للعمل الخارجي</li>
                    <li>معالجات مضادة للكهرباء الساكنة للمناطق الحساسة</li>
                    <li>طلاءات مقاومة للحرارة والبرودة للظروف المناخية القصوى</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">اعتبارات بيئية ومناخية</h3>
                <p className="mb-2 text-gray-700">اختيار الأقمشة حسب البيئة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أقمشة خفيفة مع نفاذية عالية للهواء للمناطق الحارة</li>
                  <li>طبقات قابلة للتعديل والإزالة للمناطق ذات التقلبات المناخية اليومية</li>
                  <li>أقمشة داخلية ماصة للعرق للعمل في الظروف عالية الرطوبة</li>
                  <li>أقمشة مقاومة للغبار والرمال للبيئات الصحراوية</li>
                  <li>أقمشة معزولة ومقاومة للماء للبيئات الباردة والممطرة</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="أنواع الأقمشة المناسبة لملابس فنيي الخدمة الميدانية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  اختيار النوع المناسب من الأقمشة يوفر التوازن المثالي بين المتانة والراحة وخصائص الحماية المطلوبة
                </div>
              </div>
        </section>

            <section id="design-features" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التصميم والميزات العملية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الميزات التصميمية الأساسية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تصميم أرجونومي يتناسب مع حركة الجسم أثناء المهام المختلفة</li>
                  <li>جيوب متعددة ومتخصصة لحمل الأدوات والمعدات المختلفة</li>
                  <li>تعزيزات في مناطق التآكل المعرضة للضغط (الركبتين، المرفقين، الأكتاف)</li>
                  <li>قصات وتوسيعات استراتيجية لتوفير نطاق حركة أوسع</li>
                  <li>أنظمة إغلاق آمنة (سحابات، أزرار، فيلكرو) مناسبة لنوع العمل</li>
                </ul>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">ميزات السلامة والرؤية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">عناصر تعزز السلامة والرؤية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>شرائط عاكسة للضوء للعمل في ظروف الإضاءة المنخفضة</li>
                    <li>ألوان عالية الوضوح في المناطق الاستراتيجية</li>
                    <li>رموز وشارات توضح المؤهلات والتخصصات</li>
                    <li>عناصر لتمييز المستويات الوظيفية والمهنية</li>
                    <li>مؤشرات بصرية للمعدات الوقائية المطلوبة للمهام المختلفة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التصميمات حسب الوظيفة</h3>
                <p className="mb-2 text-gray-700">تصميمات مخصصة لمهام محددة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">الأفرولات (Coveralls):</span> للحماية الشاملة في البيئات الصناعية والملوثة</li>
                  <li><span className="font-medium">قميص وبنطلون العمل:</span> للمرونة وتعدد الاستخدامات في مختلف البيئات</li>
                  <li><span className="font-medium">سترات متعددة الجيوب:</span> لفنيي الخدمات الخفيفة والتركيبات</li>
                  <li><span className="font-medium">بدلات متخصصة:</span> للظروف الخاصة مثل حالات الطوارئ أو الأماكن المحصورة</li>
                </ul>
              </div>
        </section>

            <section id="safety-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير السلامة والامتثال</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المعايير الدولية الرئيسية</h3>
                <p className="mb-2 text-gray-700">الشهادات والمعايير المعترف بها عالمياً:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">ISO 11612:</span> معيار ملابس الحماية من الحرارة واللهب</li>
                  <li><span className="font-medium">EN 1149:</span> معيار الخصائص الكهروستاتيكية لملابس الحماية</li>
                  <li><span className="font-medium">EN 20471:</span> معيار الملابس ذات الرؤية العالية للاستخدام المهني</li>
                  <li><span className="font-medium">NFPA 70E:</span> معيار السلامة الكهربائية في أماكن العمل</li>
                  <li><span className="font-medium">OEKO-TEX® Standard 100:</span> معيار سلامة المنسوجات وخلوها من المواد الضارة</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المعايير المحلية والإقليمية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>معايير الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)</li>
                    <li>متطلبات شركات الكهرباء والاتصالات والنفط المحلية</li>
                    <li>معايير هيئة تنظيم الكهرباء والإنتاج المزدوج</li>
                    <li>اشتراطات وزارة الموارد البشرية والتنمية الاجتماعية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الامتثال والتوثيق</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>توثيق الامتثال للمعايير على ملصقات المنتج</li>
                    <li>شهادات الاختبار والفحص من مختبرات معتمدة</li>
                    <li>إجراءات التحقق من المطابقة للمواصفات المطلوبة</li>
                    <li>تحديثات دورية وفق المعايير المتجددة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">أظهرت الدراسات أن توفير ملابس العمل المتوافقة مع معايير السلامة المناسبة يمكن أن يقلل من معدل إصابات العمل بنسبة تصل إلى 40% بين فنيي الخدمة الميدانية، وخاصة في القطاعات عالية المخاطر.</p>
                  <footer className="text-sm text-gray-600">— التقرير السنوي للسلامة المهنية، 2023</footer>
                </blockquote>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل ملابس العمل المناسبة استثماراً استراتيجياً في سلامة وكفاءة وإنتاجية فنيي الخدمة الميدانية. ومن خلال مراعاة المتطلبات والمواصفات المذكورة في هذا المقال، يمكن للمؤسسات توفير زي عمل يحمي موظفيها، ويسهل أداءهم، ويعزز صورتها المهنية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                من المهم أن يتم اختيار ملابس العمل بناءً على تحليل شامل للمخاطر والاحتياجات الخاصة بكل مؤسسة وطبيعة الأعمال التي يقوم بها فنيوها. كما يجب التأكد من التوازن بين الراحة والحماية والوظائف العملية، مع مراعاة الظروف البيئية والمناخية التي يعمل فيها الفنيون.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                وأخيراً، يجب ألا يغيب عن البال أن توفير ملابس العمل المناسبة هو جزء من منظومة متكاملة للصحة والسلامة المهنية، تشمل أيضاً التدريب والتوعية وتوفير معدات الحماية الشخصية الأخرى، والالتزام بإجراءات العمل الآمنة، بما يضمن بيئة عمل صحية وآمنة لهؤلاء العاملين الذين يقدمون خدمات حيوية للمجتمع.
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