import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'معايير الزي الموحد لشركات الخدمات والمرافق',
  description: 'استعراض شامل للمعايير الأساسية التي يجب اتباعها عند اختيار وتصميم الزي الموحد لشركات الخدمات والمرافق للحصول على أقصى درجات الكفاءة والسلامة',
};

export default function UtilityServicesUniformStandards() {
  const imageSrc = '/images/workwear/utility_services_uniform_standards.jpeg';
  const title = 'معايير الزي الموحد لشركات الخدمات والمرافق';
  const readingTime = '٨ دقائق للقراءة';
  const datePublished = '٢ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'safety-standards', title: 'معايير السلامة الأساسية' },
    { id: 'comfort-standards', title: 'معايير الراحة والأداء' },
    { id: 'weather-adaptation', title: 'التكيف مع الظروف المناخية' },
    { id: 'industry-codes', title: 'رموز الصناعة وتمييز التخصصات' },
    { id: 'quality-certification', title: 'شهادات الجودة والاعتماد' },
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
      title: "متطلبات الزي الموحد لعمال الصيانة والتشغيل",
      description: "دليل متكامل حول المتطلبات الأساسية للزي الموحد لعمال الصيانة والتشغيل",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/maintenance-worker-uniform-requirements",
      date: "٥ مايو ٢٠٢٤",
      category: "ملابس العمل"
    },
    {
      title: "ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات",
      description: "دليل شامل حول متطلبات ومواصفات ملابس العمل المناسبة لفنيي الخدمة الميدانية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/field-service-technician-workwear",
      date: "٣ مايو ٢٠٢٤",
      category: "ملابس العمل"
    }
  ];

  const tags = ["معايير الزي الموحد", "خدمات المرافق", "السلامة المهنية", "جودة الملابس", "أزياء صناعية", "خدمات عامة"];

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
                تعتبر شركات الخدمات والمرافق العامة من القطاعات الحيوية التي تتطلب معايير خاصة للزي الموحد الخاص بالعاملين فيها. فهؤلاء العاملون يواجهون تحديات متنوعة تتراوح بين العمل في ظروف مناخية قاسية، والتعامل مع معدات ثقيلة، ومواجهة مخاطر كهربائية وكيميائية متنوعة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                يتجاوز دور الزي الموحد في هذه القطاعات مجرد تحقيق الهوية المؤسسية، ليصبح جزءاً أساسياً من منظومة السلامة المهنية وضمان كفاءة الأداء. لذلك، فإن اختيار وتصميم الزي الموحد المناسب لهذه الشركات يستند إلى مجموعة من المعايير والمواصفات الدقيقة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنستعرض أهم المعايير التي يجب مراعاتها عند اختيار وتصميم الزي الموحد لشركات الخدمات والمرافق، بهدف تحقيق أقصى درجات السلامة والكفاءة والراحة للعاملين في هذا القطاع الحيوي.
              </p>
            </section>

            <section id="safety-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير السلامة الأساسية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مقاومة المخاطر الفيزيائية</h3>
                <p className="mb-2 text-gray-700">خصائص الحماية الأساسية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>مقاومة اللهب والحرارة وفق معايير ISO 11612 لفرق الصيانة العاملة بالقرب من مصادر حرارية</li>
                  <li>مقاومة القطع والتمزق لحماية العاملين من الحواف الحادة والأدوات</li>
                  <li>تعزيز القوة في مناطق الإجهاد (الأكمام، الركبتين، المرفقين)</li>
                  <li>مقاومة التآكل والاحتكاك مع تحمل 20,000+ دورة في اختبار مارتينديل</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الحماية الكهربائية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>خاصية العزل الكهربائي حسب معيار IEC 61482</li>
                    <li>مقاومة القوس الكهربائي لفنيي الصيانة الكهربائية</li>
                    <li>أقمشة مضادة للكهرباء الساكنة للعمل في المناطق الخطرة</li>
                    <li>شعارات وملصقات تحذيرية لا تتأثر بالطقس والاستخدام</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الحماية الكيميائية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مقاومة للمواد الكيميائية وفق معيار EN 13034</li>
                    <li>طلاءات خاصة للحماية من الزيوت والمذيبات</li>
                    <li>حواجز لتسرب المواد في مناطق حساسة مثل الأكمام والياقات</li>
                    <li>معالجات مقاومة للماء مع الحفاظ على التهوية</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="معايير السلامة في زي شركات المرافق"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  ملابس العمل المصممة بمعايير سلامة عالية تشكل خط الدفاع الأول ضد مخاطر العمل المتنوعة
                </div>
              </div>
            </section>

            <section id="comfort-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير الراحة والأداء</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">معايير الراحة الأساسية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">عوامل تعزز راحة العاملين خلال نوبات العمل الطويلة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>خفة الوزن: أقمشة خفيفة مع الحفاظ على المتانة لتقليل الإجهاد</li>
                    <li>سهولة التنفس: نفاذية الهواء مع قوة التحمل للعمل في البيئات المختلفة</li>
                    <li>التحكم بالرطوبة: تقنيات امتصاص ونقل العرق بعيداً عن الجسم</li>
                    <li>المرونة: قطع وأقمشة تتيح حرية الحركة للعمال دون إعاقة</li>
                    <li>التوافق مع طبيعة الجسم: تصميم يراعي الأرجونوميكس البشرية</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">القصات والتصاميم الوظيفية</h3>
                <p className="mb-2 text-gray-700">ميزات تصميمية تعزز الأداء:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">تصميم الجيوب:</span> توزيع مدروس وحجم مناسب للأدوات المستخدمة في كل مهنة</li>
                  <li><span className="font-medium">أكمام قابلة للتعديل:</span> للتكيف مع مختلف المهام والظروف المناخية</li>
                  <li><span className="font-medium">تقويات الركبة:</span> جيوب للركبة تستوعب وسائد حماية للعمل في وضعية الجثو</li>
                  <li><span className="font-medium">خطوط قص استراتيجية:</span> توفر حرية حركة في مناطق الانحناء والامتداد</li>
                  <li><span className="font-medium">سحابات عالية الجودة:</span> مقاومة للصدأ وسهلة الاستخدام حتى مع القفازات</li>
                </ul>
              </div>
            </section>

            <section id="weather-adaptation" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التكيف مع الظروف المناخية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تعمل فرق الخدمات والمرافق في ظروف مناخية متنوعة، من الحرارة الشديدة إلى البرودة القارسة، ومن الأماكن الجافة إلى البيئات عالية الرطوبة. لذلك، يجب أن يتكيف الزي الموحد مع هذه الظروف المختلفة.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير الحماية من الحرارة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة خفيفة بخصائص حماية من الأشعة فوق البنفسجية</li>
                    <li>تقنيات التبريد السلبي ونقل الرطوبة</li>
                    <li>ألوان فاتحة تعكس أشعة الشمس للعمل الخارجي</li>
                    <li>تصاميم قابلة للتهوية مع فتحات تهوية استراتيجية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير الحماية من البرودة والرطوبة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تصاميم ذات طبقات متعددة للحماية من البرد</li>
                    <li>مواد عازلة للحرارة مع الحفاظ على خفة الوزن</li>
                    <li>معالجات مضادة للماء تسمح بتنفس الجلد</li>
                    <li>تقنيات التدفئة النشطة في المناطق شديدة البرودة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التكيف مع المناخ السعودي</h3>
                <p className="mb-2 text-gray-700">خصائص موجهة للبيئة المحلية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أقمشة مقاومة للغبار والرمال المنتشرة في البيئة الصحراوية</li>
                  <li>تقنيات مضادة للتعرق لمقاومة الحرارة العالية خلال فصل الصيف</li>
                  <li>اختيار أقمشة مناسبة للمناطق الساحلية ذات الرطوبة العالية</li>
                  <li>تصاميم تراعي التقلبات الحرارية بين الليل والنهار في المناطق الصحراوية</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="تكيف ملابس العمل مع الظروف المناخية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  العمل في الظروف المناخية القاسية يتطلب ملابس مصممة خصيصاً للحماية والراحة
                </div>
              </div>
            </section>

            <section id="industry-codes" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">رموز الصناعة وتمييز التخصصات</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">أنظمة الألوان والترميز</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">معايير التمييز البصري للتخصصات المختلفة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>نظام ألوان موحد لتمييز التخصصات: كهرباء، ماء، غاز، اتصالات، إلخ</li>
                    <li>رموز وشعارات واضحة تحدد نوع الخدمة والمستوى الوظيفي</li>
                    <li>عناصر عاكسة وملونة للرؤية في ظروف مختلفة وفي حالات الطوارئ</li>
                    <li>باجات وعلامات تعريفية تتوافق مع المعايير الأمنية</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الشارات والعلامات الوظيفية</h3>
                <p className="mb-2 text-gray-700">تحديد المسؤوليات والمهارات:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>شارات المهارات والتدريب المتخصص (الإسعافات الأولية، العمل على ارتفاعات، إلخ)</li>
                  <li>علامات المستوى الوظيفي (مشرف، فني، مهندس) واضحة وسهلة التمييز</li>
                  <li>أكواد QR أو رموز تقنية للوصول السريع للمعلومات في حالات الطوارئ</li>
                  <li>الهوية المؤسسية متكاملة مع معايير السلامة والوظيفة</li>
                </ul>
              </div>
            </section>

            <section id="quality-certification" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">شهادات الجودة والاعتماد</h2>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المعايير العالمية والمحلية</h3>
                <p className="mb-2 text-gray-700">الاعتمادات المطلوبة لضمان الجودة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>شهادات ISO المتعلقة بالسلامة المهنية ومعايير الملابس الصناعية</li>
                  <li>اعتمادات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)</li>
                  <li>شهادات OEKO-TEX® لضمان خلو الأقمشة من المواد الضارة</li>
                  <li>شهادات مطابقة للمعايير الخاصة بكل قطاع (مثل معايير شركة الكهرباء أو شركة أرامكو)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">اختبارات الجودة والأداء</h3>
                <p className="mb-2 text-gray-700">فحوصات تضمن المطابقة للمعايير:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>اختبارات المتانة وقوة الشد والتمزق للأقمشة والخياطات</li>
                  <li>اختبارات ثبات الألوان ضد العرق والغسيل والاحتكاك والضوء</li>
                  <li>اختبارات مقاومة الحريق والمواد الكيميائية في ظروف محاكاة واقعية</li>
                  <li>فحوصات الراحة والأداء الوظيفي في بيئات العمل المختلفة</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">تشير الدراسات إلى أن الاستثمار في ملابس عمل معتمدة ومطابقة للمعايير العالمية قد يؤدي إلى تخفيض تكاليف الحوادث والإصابات بنسبة تصل إلى 40%، بالإضافة إلى تحسين الإنتاجية بنسبة 20%.</p>
                  <footer className="text-sm text-gray-600">— دراسة لمعهد السلامة المهنية الدولي، 2023</footer>
                </blockquote>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر معايير الزي الموحد لشركات الخدمات والمرافق أساساً لتوفير بيئة عمل آمنة وفعالة، حيث تجمع بين متطلبات السلامة والراحة والكفاءة والهوية المؤسسية. فمن خلال الالتزام بهذه المعايير، يمكن للشركات تحقيق العديد من الفوائد على مستوى حماية العاملين وتحسين الأداء وتعزيز صورتها المؤسسية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                من المهم أن تدرك الشركات العاملة في قطاع الخدمات والمرافق أن الزي الموحد ليس مجرد عنصر تكميلي، بل هو استثمار استراتيجي في مواردها البشرية وعملياتها التشغيلية. ومع تطور التقنيات والمواد المستخدمة في صناعة ملابس العمل، أصبح بالإمكان تحقيق توازن مثالي بين مختلف المتطلبات، مهما كانت التحديات التي تفرضها طبيعة العمل أو الظروف المحيطة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في النهاية، يجب النظر إلى معايير الزي الموحد كجزء من منظومة متكاملة للسلامة والجودة في المؤسسة، حيث تتكامل مع التدريب والإجراءات وثقافة السلامة لتحقيق بيئة عمل متميزة تحمي العاملين وتعزز الإنتاجية وتحقق أهداف المؤسسة على المدى الطويل.
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