import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'العناية بالزي الموحد: أفضل الممارسات للمؤسسات',
  description: 'دليل شامل للعناية بالزي الموحد المؤسسي، يتضمن نصائح للحفاظ على مظهر احترافي وإطالة عمر الملابس، مع استراتيجيات لإدارة برنامج الزي الموحد بكفاءة.',
};

export default function UniformCarePage() {
  const imageSrc = '/images/uniform_care/uniform_maintenance.jpeg';
  const title = 'العناية بالزي الموحد: أفضل الممارسات للمؤسسات';
  const readingTime = '٩ دقائق للقراءة';
  const datePublished = '٢٠ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية العناية بالزي الموحد' },
    { id: 'daily-care', title: 'العناية اليومية' },
    { id: 'laundering', title: 'طرق الغسيل الصحيحة' },
    { id: 'storage', title: 'التخزين المناسب' },
    { id: 'repair', title: 'الإصلاح والصيانة' },
    { id: 'program', title: 'إدارة برنامج العناية بالزي الموحد' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const tags = ["الزي الموحد", "العناية بالملابس", "إدارة الزي", "المؤسسات", "الصيانة", "غسيل الزي"];

  const relatedArticles = [
    {
      title: "دليل العناية بملابس العمل: نصائح للحفاظ على مظهرها وإطالة عمرها",
      description: "إرشادات مفصلة للعناية بملابس العمل المختلفة، مع تقنيات متخصصة للغسيل والتخزين والإصلاح",
      image: "/images/uniform_care/uniform_maintenance.jpg",
      url: "/blog/workwear/workwear-maintenance-guide",
      date: "١٧ مايو ٢٠٢٤"
    },
    {
      title: "تحسين كفاءة التكلفة في برامج الزي الموحد للشركات",
      description: "استراتيجيات عملية لتحسين العائد على الاستثمار في برامج الزي الموحد مع الحفاظ على الجودة والمظهر المهني",
      image: "/images/uniform_care/uniform_maintenance.jpg",
      url: "/blog/uniform-care/cost-efficiency",
      date: "٢٥ مايو ٢٠٢٤"
    },
    {
      title: "الزي الموحد المستدام: التوازن بين البيئة والاحتياجات المؤسسية",
      description: "استكشاف خيارات الزي الموحد المستدام والصديق للبيئة، مع نصائح للتعامل معه بطريقة تراعي الاستدامة",
      image: "/images/uniform_care/uniform_maintenance.jpg",
      url: "/blog/uniform-care/sustainable-uniforms",
      date: "٣٠ مايو ٢٠٢٤"
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
                يُعد الزي الموحد أحد أهم عناصر الهوية المؤسسية، فهو يمثل واجهة المؤسسة أمام عملائها وشركائها، ويعكس مستوى الاحترافية والالتزام بالمعايير. ولكن مع الاستخدام اليومي المتكرر والظروف المختلفة التي قد يتعرض لها، يصبح الحفاظ على مظهر الزي الموحد في حالة مثالية تحدياً يواجه الكثير من المؤسسات.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                تقدم هذه المقالة دليلاً شاملاً للمؤسسات حول أفضل الممارسات للعناية بالزي الموحد، بدءاً من التعامل اليومي، مروراً بأساليب الغسيل والتخزين الصحيحة، وصولاً إلى استراتيجيات إدارة برنامج متكامل للعناية بالزي على مستوى المؤسسة بأكملها.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                سواء كنت مديراً للموارد البشرية، أو مسؤولاً عن الصورة المؤسسية، أو متخصصاً في إدارة المرافق، فإن تطبيق الإرشادات الواردة في هذا الدليل سيساعدك على تحقيق التوازن الأمثل بين الحفاظ على المظهر الاحترافي للزي الموحد، وتحسين عمره الافتراضي، وتحقيق كفاءة التكلفة على المدى الطويل.
          </p>
        </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية العناية بالزي الموحد</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الأبعاد المؤسسية والعملية</h3>
                <p className="mb-2 font-medium text-blue-700">لماذا تستحق العناية بالزي الموحد الاهتمام المؤسسي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الصورة المؤسسية: الزي النظيف والمرتب يعزز الانطباع الإيجابي عن المؤسسة ويعكس الاحترافية والاهتمام بالتفاصيل</li>
                  <li>تجربة العملاء: المظهر المهني للموظفين يؤثر بشكل مباشر على ثقة العملاء وتقييمهم لجودة الخدمة</li>
                  <li>رضا الموظفين: توفير زي مريح ونظيف ومحافظ على حالته يعزز رضا الموظفين وثقتهم بالمؤسسة</li>
                  <li>كفاءة التكلفة: العناية الصحيحة تطيل عمر الزي وتقلل تكاليف الاستبدال المتكرر على المدى الطويل</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العوامل المؤثرة على حالة الزي</h3>
                  <p className="mb-2 text-gray-700">التحديات التي تواجه الزي الموحد:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>الاستخدام اليومي المتكرر والاحتكاك المستمر</li>
                    <li>التعرض للظروف البيئية المختلفة (الحرارة، الرطوبة، الأتربة)</li>
                    <li>البقع والاتساخات المرتبطة بطبيعة العمل</li>
                    <li>أساليب العناية غير المناسبة التي قد يتبعها الموظفون</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المكاسب من برنامج العناية المتكامل</h3>
                  <p className="mb-2 text-gray-700">الفوائد العائدة على المؤسسة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>خفض التكاليف التشغيلية بنسبة تصل إلى 30% على مدار دورة حياة الزي</li>
                    <li>تقليل البصمة البيئية من خلال إطالة عمر الملابس وتقليل النفايات</li>
                    <li>تعزيز سلامة الموظفين من خلال الحفاظ على خصائص الحماية في الزي المتخصص</li>
                    <li>توحيد مظهر الفريق وضمان الامتثال لمعايير الزي على مستوى المؤسسة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="daily-care" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناية اليومية</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الممارسات اليومية للموظفين</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">إرشادات للتعامل اليومي مع الزي الموحد:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>فحص الزي قبل الارتداء للتأكد من خلوه من البقع أو التلف</li>
                    <li>ارتداء الزي بطريقة صحيحة مع الحرص على إغلاق جميع الأزرار والسحابات</li>
                    <li>تجنب تناول الطعام أو المشروبات التي قد تتسبب في بقع صعبة أثناء ارتداء الزي</li>
                    <li>استخدام المرايل أو الأغطية الواقية عند الضرورة، خاصة في قطاعات مثل المطاعم والمستشفيات</li>
                    <li>التعامل الفوري مع أي بقع أو انسكابات قبل أن تجف وتصبح صعبة الإزالة</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">معالجة البقع الشائعة فوراً</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">تقنيات التعامل السريع مع الانسكابات:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>القهوة والشاي: امتصاص السائل فوراً بمنديل، ثم استخدام قطعة قماش مبللة بماء بارد</li>
                  <li>الحبر: استخدام مزيل الحبر المخصص أو كحول الأيزوبروبيل على منديل واستخدامه بالضغط وليس الفرك</li>
                  <li>الزيوت والدهون: رش كمية قليلة من مسحوق التنظيف الجاف على البقعة لامتصاص الزيت قبل الغسيل</li>
                  <li>العرق: نقع المنطقة المتأثرة في محلول مخفف من الخل الأبيض والماء قبل الغسيل العادي</li>
          </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">توفير مستلزمات العناية في مكان العمل</h3>
                <p className="mb-2 text-gray-700">تجهيزات تساعد الموظفين على العناية بالزي:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>توفير "عدة إسعافات أولية للملابس" في مناطق الاستراحة تحتوي على:
                    <ul className="list-disc list-inside mr-6 mt-2 text-gray-700">
                      <li>مزيلات البقع السريعة بأنواعها</li>
                      <li>بخاخات تنعيش الملابس</li>
                      <li>أقلام إزالة البقع</li>
                      <li>فرش صغيرة لإزالة الوبر والأتربة</li>
          </ul>
                  </li>
                  <li>تركيب علاقات وخزانات مناسبة لتعليق الزي أثناء فترات الراحة</li>
                  <li>توفير أماكن مخصصة لتغيير الملابس مجهزة بالمرايا والإضاءة المناسبة</li>
          </ol>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/uniform_care/uniform_maintenance.jpg"
                  alt="العناية اليومية بالزي الموحد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  ممارسات العناية اليومية بالزي الموحد تعزز مظهره الاحترافي وتطيل عمره
                </div>
              </div>
        </section>

            <section id="laundering" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">طرق الغسيل الصحيحة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">فهم احتياجات الأقمشة المختلفة</h3>
                <p className="mb-2 font-medium text-blue-700">مراعاة خصائص المواد عند الغسيل:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>القطن: يتحمل درجات حرارة مرتفعة نسبياً، لكنه قابل للانكماش في الغسلات الأولى</li>
                  <li>البوليستر والخلطات الصناعية: تُغسل عند درجات حرارة منخفضة، وتجف بسرعة، وتقاوم التجعد</li>
                  <li>الأقمشة المعالجة: كالمقاومة للحريق أو للماء تتطلب منظفات خاصة وتعليمات محددة للحفاظ على خصائصها</li>
                  <li>الشعارات والطباعة: تحتاج لقلب الملابس من الداخل عند الغسيل لحماية الطباعة وتجنب تشققها</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الغسيل الداخلي مقابل الخدمات الخارجية</h3>
                  <p className="mb-2 text-gray-700">المقارنة بين الخيارات المتاحة:</p>
                  <div className="overflow-hidden rounded border border-gray-200">
                    <div className="grid grid-cols-3 bg-gray-100 font-bold py-2">
                      <div className="pr-2 text-center">المعيار</div>
                      <div className="px-2 text-center">الغسيل الداخلي</div>
                      <div className="px-2 text-center">خدمات خارجية</div>
                    </div>
                    <div className="grid grid-cols-3 border-t border-gray-200 py-2">
                      <div className="pr-2">التكلفة</div>
                      <div className="px-2 text-center">مرتفعة مبدئياً</div>
                      <div className="px-2 text-center">ثابتة ومتوقعة</div>
                    </div>
                    <div className="grid grid-cols-3 border-t border-gray-200 py-2">
                      <div className="pr-2">التحكم</div>
                      <div className="px-2 text-center">كامل</div>
                      <div className="px-2 text-center">محدود</div>
                    </div>
                    <div className="grid grid-cols-3 border-t border-gray-200 py-2">
                      <div className="pr-2">الجودة</div>
                      <div className="px-2 text-center">متغيرة</div>
                      <div className="px-2 text-center">معيارية</div>
                    </div>
                    <div className="grid grid-cols-3 border-t border-gray-200 py-2">
                      <div className="pr-2">المساحة</div>
                      <div className="px-2 text-center">تتطلب مساحة</div>
                      <div className="px-2 text-center">لا تتطلب مساحة</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">إرشادات للغسيل المؤسسي</h3>
                  <p className="mb-2 text-gray-700">للمؤسسات التي تدير عملية الغسيل داخلياً:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>استثمار في معدات غسيل ذات جودة عالية مصممة للاستخدام التجاري</li>
                    <li>تطوير بروتوكولات قياسية للغسيل حسب نوع الزي ودرجة الاتساخ</li>
                    <li>تدريب فريق مخصص على أساليب الغسيل المناسبة لكل نوع من أنواع الأقمشة</li>
                    <li>استخدام منظفات ومنعمات ذات جودة عالية ومناسبة للأقمشة المستخدمة في الزي</li>
                    <li>توثيق دورات الغسيل ومراقبة جودة النتائج باستمرار</li>
          </ol>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">اختيار مزود خدمة الغسيل الخارجي</h3>
                <p className="mb-2 text-gray-700">معايير اختيار شريك موثوق:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>الخبرة في التعامل مع الزي المؤسسي والأنواع المختلفة من الأقمشة</li>
                  <li>القدرة على تقديم حلول مخصصة تناسب احتياجات مؤسستك المحددة</li>
                  <li>وجود نظام تتبع فعال يضمن عدم فقدان قطع الزي أو اختلاطها</li>
                  <li>استخدام تقنيات صديقة للبيئة وآمنة للأقمشة المعالجة</li>
                  <li>سجل موثق من الالتزام بمواعيد التسليم والجودة المتسقة</li>
                  <li>عقود واضحة تحدد مستويات الخدمة المتوقعة والإجراءات التصحيحية</li>
          </ul>
              </div>
        </section>

            <section id="storage" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التخزين المناسب</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">تخزين الزي أثناء الخدمة</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">توفير ظروف مثالية في مكان العمل:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>توفير خزائن شخصية للموظفين ذات مساحة كافية وتهوية مناسبة</li>
                    <li>ضمان وجود علاقات ملابس ذات جودة عالية تحافظ على شكل القطع الرسمية</li>
                    <li>تخصيص مساحة للتجفيف في حالات الطقس الممطر أو البلل العرضي</li>
                    <li>ضمان نظافة وجفاف أماكن التخزين لمنع تكون العفن والروائح الكريهة</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تخزين المخزون الاحتياطي</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 text-gray-700">إدارة مخزون الزي الاحتياطي:</p>
                <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                  <li>تخزين قطع الزي الجديدة في مكان جاف وبعيد عن أشعة الشمس المباشرة</li>
                  <li>استخدام أغلفة قماشية بدلاً من البلاستيكية لتخزين قطع الزي لفترات طويلة</li>
                  <li>فصل الأحجام والأنواع بشكل واضح مع ملصقات تعريفية</li>
                  <li>تطبيق نظام "الوارد أولاً يصرف أولاً" في إدارة المخزون لتجنب تقادم القطع</li>
                  <li>فحص المخزون بشكل دوري للتأكد من عدم تعرضه للتلف أو الحشرات</li>
          </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الإرشادات للموظفين</h3>
                <p className="mb-2 text-gray-700">توعية الموظفين بأساليب التخزين الصحيحة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>توفير تعليمات مكتوبة حول طرق التخزين المناسبة مع تسليم الزي الجديد</li>
                  <li>تشجيع تعليق القطع الرسمية (البدلات، القمصان) بدلاً من طيها لتجنب التجعد</li>
                  <li>نصائح للتعامل مع الزي المبلل (تجفيفه قبل التخزين، عدم تركه في أكياس محكمة)</li>
                  <li>إرشادات للتخزين الموسمي للقطع التي لا تُستخدم باستمرار</li>
          </ul>
              </div>
        </section>

            <section id="repair" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الإصلاح والصيانة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تقييم حالة الزي بانتظام</h3>
                <p className="mb-2 font-medium text-blue-700">جدولة فحص دوري للزي الموحد:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تحديد معايير واضحة لتقييم حالة الزي (التآكل، البهتان، فقدان الشكل)</li>
                  <li>تنفيذ عمليات فحص ربع سنوية أو نصف سنوية حسب طبيعة العمل وشدة الاستخدام</li>
                  <li>توثيق نتائج الفحص لتحديد الاتجاهات ومعالجة المشكلات المتكررة</li>
                  <li>تصنيف القطع حسب حالتها: ممتازة، جيدة، تحتاج إصلاحاً، غير صالحة للاستخدام</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الإصلاحات الشائعة</h3>
                  <p className="mb-2 text-gray-700">معالجة المشكلات المتكررة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>خياطة الأزرار المفقودة وتثبيت الأزرار المتأرجحة</li>
                    <li>إصلاح الحواف المتآكلة والثقوب الصغيرة بتقنيات الخياطة المناسبة</li>
                    <li>استبدال السحابات المكسورة وإصلاح السحابات العالقة</li>
                    <li>تجديد الأطواق المتآكلة في القمصان واستبدال بطانات الجيوب</li>
                    <li>تقوية خطوط الخياطة الضعيفة في مناطق الإجهاد (الإبط، الأكمام)</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">خيارات الإصلاح</h3>
                  <p className="mb-2 text-gray-700">البدائل المتاحة للمؤسسات:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>ورشة خياطة داخلية: مناسبة للمؤسسات الكبيرة ذات عدد كبير من الموظفين</li>
                    <li>خدمات الخياطة الخارجية: التعاقد مع ورش متخصصة لإجراء الإصلاحات</li>
                    <li>خدمات الإصلاح من المورد: بعض موردي الزي يقدمون خدمات إصلاح ضمن عقود التوريد</li>
                    <li>الإصلاحات البسيطة الذاتية: تدريب الموظفين على إجراء إصلاحات بسيطة كخياطة الأزرار</li>
          </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/uniform_care/uniform_maintenance.jpg"
                  alt="إصلاح وصيانة الزي الموحد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  الإصلاحات الدورية والصيانة المنتظمة تطيل عمر الزي الموحد وتحافظ على مظهره الاحترافي
                </div>
              </div>
        </section>

            <section id="program" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">إدارة برنامج العناية بالزي الموحد</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تطوير سياسة متكاملة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">عناصر سياسة عناية فعالة بالزي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحديد المسؤوليات: توزيع واضح للمسؤوليات بين المؤسسة والموظفين</li>
                    <li>معايير الجودة: تحديد الحد الأدنى من معايير المظهر والنظافة المتوقعة</li>
                    <li>إجراءات التسليم والاستلام: بروتوكولات واضحة لتسليم واستلام الزي</li>
                    <li>سياسة الاستبدال: معايير واضحة لتحديد متى يجب استبدال قطع الزي</li>
                    <li>التوثيق: نظام توثيق لتتبع عمر كل قطعة وتاريخ الصيانة والإصلاحات</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تدريب وتوعية الموظفين</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 text-gray-700">بناء ثقافة العناية بالزي:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>برنامج تعريفي للموظفين الجدد حول العناية بالزي الموحد</li>
                  <li>ورش عمل دورية لتعزيز أفضل الممارسات وتقديم نصائح جديدة</li>
                  <li>توفير دليل مكتوب سهل الاستخدام مع تسليم الزي الجديد</li>
                  <li>استخدام وسائل تذكير مرئية في أماكن التغيير والاستراحة</li>
                  <li>تحفيز الالتزام من خلال برامج الاعتراف بالموظفين الملتزمين بمعايير الزي</li>
          </ol>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">تخصيص نظام تتبع رقمي</h3>
                <p className="mb-2 text-gray-700">الاستفادة من التكنولوجيا في إدارة الزي:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>استخدام الباركود أو تقنية RFID لتتبع قطع الزي خلال دورة حياتها</li>
                  <li>تطوير نظام لتسجيل ومتابعة عمليات الغسيل والإصلاح والاستبدال</li>
                  <li>جمع البيانات وتحليلها لتحديد:
                    <ul className="list-disc list-inside mr-6 mt-2 text-gray-700">
                      <li>متوسط عمر كل نوع من قطع الزي</li>
                      <li>نقاط الضعف الشائعة في التصميم أو المواد</li>
                      <li>أنماط التلف حسب الإدارات أو المواقع</li>
                    </ul>
                  </li>
                  <li>استخدام الإشعارات التلقائية للتذكير بمواعيد الفحص والاستبدال</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">قياس الأداء والتحسين المستمر</h3>
                <p className="mb-2 text-gray-700">مؤشرات لتقييم فعالية برنامج العناية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>متوسط عمر الزي: قياس متوسط عمر كل نوع من قطع الزي قبل الاستبدال</li>
                  <li>معدل الإصلاح: نسبة قطع الزي التي تتطلب إصلاحاً قبل نهاية عمرها المتوقع</li>
                  <li>تكلفة الصيانة: إجمالي تكاليف الغسيل والإصلاح والاستبدال لكل موظف سنوياً</li>
                  <li>مستوى الالتزام: نسبة الموظفين الذين يحافظون على المعايير المطلوبة للزي</li>
                  <li>رضا الموظفين: استطلاعات دورية لقياس رضا الموظفين عن برنامج العناية بالزي</li>
          </ul>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تُعد العناية بالزي الموحد استثماراً استراتيجياً للمؤسسات، فهي تعزز الصورة المهنية للمؤسسة، وتحسّن تجربة العملاء، وتزيد من رضا الموظفين، مع تحقيق الكفاءة في التكاليف على المدى الطويل. ومن خلال تطبيق الممارسات المذكورة في هذا الدليل، يمكن للمؤسسات تطوير برنامج متكامل للعناية بالزي الموحد يضمن تحقيق هذه الفوائد المتعددة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                إن نجاح برنامج العناية بالزي الموحد يعتمد على التوازن بين المسؤولية المؤسسية والمشاركة الفعالة من الموظفين. لذا، يُنصح بتطوير سياسات واضحة، وتوفير التدريب المناسب، وتسهيل الوصول إلى الموارد اللازمة، مع تعزيز ثقافة العناية بالزي كجزء من الثقافة المؤسسية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                وأخيراً، تذكر أن برنامج العناية بالزي ليس مجرد إجراء تشغيلي، بل هو جزء أساسي من استراتيجية إدارة العلامة التجارية والصورة المؤسسية. فالزي النظيف والمحافظ على حالته يعكس الاحترافية والاهتمام بالتفاصيل، وهي قيم تنعكس بدورها على الطريقة التي ينظر بها العملاء والشركاء إلى المؤسسة ككل.
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