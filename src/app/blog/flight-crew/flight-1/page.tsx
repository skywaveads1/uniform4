import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'اعتبارات تصميم زي شركات الطيران',
  description: 'استكشف العوامل المؤثرة في تصميم زي شركات الطيران، من العناصر الوظيفية والراحة إلى الهوية المؤسسية والمتطلبات التشغيلية التي يجب مراعاتها.',
};

// صورة الهيدر للمقال
const heroImage = '/images/flight_crew/header_flight_crew_uniform.jpeg';

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_uniform_design.jpeg';
  const title = 'اعتبارات تصميم زي شركات الطيران';
  const readingTime = '6 دقائق';
  const datePublished = '١٥ مايو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'functional', title: 'الاعتبارات الوظيفية والتشغيلية' },
    { id: 'comfort', title: 'عوامل الراحة والسلامة' },
    { id: 'cultural', title: 'الاعتبارات الثقافية والهوية المؤسسية' },
    { id: 'aesthetic', title: 'الاعتبارات الجمالية والتصميمية' },
    { id: 'economic', title: 'الاعتبارات الاقتصادية واللوجستية' },
    { id: 'conclusion', title: 'الخلاصة والتوصيات' },
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
                <li>
                  <Link href="/blog/flight-crew/flight-2" className="text-sm hover:text-blue-600 block">
                    اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-3" className="text-sm hover:text-blue-600 block">
                    أزياء الطيران النسائية: تطورها وخصائصها الحديثة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-4" className="text-sm hover:text-blue-600 block">
                    الزي الرسمي لطياري وقائدي الطائرات: المواصفات والرموز
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعتبر تصميم زي شركات الطيران أحد أهم العناصر في تشكيل هوية شركة الطيران وصورتها أمام العملاء. فهو ليس مجرد ملابس يرتديها الطاقم، بل هو تعبير مرئي عن قيم الشركة وجودة خدماتها وموقعها التنافسي. وبالرغم من الأهمية الجمالية والتسويقية لهذه الأزياء، إلا أن عملية تصميمها تخضع لاعتبارات متعددة ومعقدة تتجاوز مجرد الأناقة والمظهر.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض الاعتبارات الرئيسية التي تؤثر في تصميم أزياء شركات الطيران، بدءاً من المتطلبات الوظيفية والتشغيلية، مروراً بعوامل الراحة والسلامة، وصولاً إلى الاعتبارات الثقافية والجمالية والاقتصادية. كما نلقي الضوء على التوازن الدقيق الذي يسعى إليه المصممون بين هذه العوامل المختلفة، والتحديات التي يواجهونها في مجال يجمع بين الوظيفية العالية والأناقة المتميزة.
              </p>
            </section>

            <section id="functional" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات الوظيفية والتشغيلية</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">ملاءمة بيئة العمل</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-medium text-blue-800 mb-2">العوامل التي تؤثر على التصميم من الناحية العملية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>المساحات الضيقة داخل الطائرة تتطلب أزياء لا تعيق الحركة</li>
                  <li>التغيرات في الضغط ودرجات الحرارة تستلزم أقمشة مريحة ومتكيفة</li>
                  <li>ساعات العمل الطويلة تتطلب أزياء تحافظ على مظهرها الأنيق طوال الرحلات الطويلة</li>
                  <li>الأنشطة المتنوعة من تقديم الطعام إلى إجراءات السلامة تحتاج لتصاميم عملية</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">سهولة التعرف والتمييز</h3>
              <p className="mb-2 leading-7 text-gray-700">
                أهمية تمييز الطاقم ورتبهم:
              </p>
              <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                <li>تصميم يسمح للمسافرين بتمييز أفراد الطاقم بسهولة وسط الحشود</li>
                <li>عناصر مرئية تميز بين مختلف الرتب (قائد طائرة، مضيف أول، مضيف)</li>
                <li>دمج شارات ورموز تعكس مستوى الخبرة والتخصص</li>
                <li>ألوان محددة لتمييز أقسام الخدمة المختلفة (الضيافة، الأمن، الصيانة)</li>
              </ol>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تعدد المهام وتنوع الوجهات</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2">
                <p className="mb-2 leading-7 text-gray-700">
                  مرونة التصميم للتكيف مع المتغيرات:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>إمكانية تعديل الزي بحسب الوجهات ذات المناخات المختلفة</li>
                  <li>تصاميم متعددة الطبقات يمكن إضافتها أو إزالتها حسب الحاجة</li>
                  <li>خيارات متنوعة تناسب المهام المختلفة (رحلات قصيرة، رحلات دولية طويلة)</li>
                  <li>تصاميم خاصة لمواسم معينة (الحج، الأعياد، المناسبات الخاصة)</li>
                </ul>
              </div>
            </section>

            <section id="comfort" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">عوامل الراحة والسلامة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">راحة الطاقم أثناء العمل</h3>
                  <p className="mb-2 text-gray-700">تصاميم تدعم الأداء المستدام:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة خفيفة الوزن لا تسبب الإرهاق خلال الرحلات الطويلة</li>
                    <li>تصاميم مريحة حول الرقبة والكتفين لتقليل التوتر العضلي</li>
                    <li>قصات تسمح بحرية الحركة خاصة للذراعين والجذع</li>
                    <li>أحذية مدروسة تدعم القدمين خلال ساعات الوقوف الطويلة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير السلامة والطوارئ</h3>
                  <p className="mb-2 text-gray-700">أزياء تلبي متطلبات السلامة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة مقاومة للاشتعال تتوافق مع معايير سلامة الطيران</li>
                    <li>تصاميم لا تعيق الحركة أثناء إجراءات الطوارئ</li>
                    <li>إمكانية إضافة عناصر عاكسة أو مضيئة للرؤية في حالات الطوارئ</li>
                    <li>أدوات وملحقات يسهل الوصول إليها لمعدات السلامة الشخصية</li>
                  </ol>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الصحة المهنية طويلة المدى</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <p className="font-medium">الوقاية من المشاكل الصحية المهنية:</p>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>دراسة تأثير الأقمشة على البشرة الحساسة بسبب التعرض المطول</li>
                    <li>التوازن بين عناصر الأناقة (مثل الكعب العالي) ومخاطر الإصابات طويلة المدى</li>
                    <li>اعتبارات الدورة الشهرية للمضيفات في اختيار الألوان والقصات</li>
                    <li>توفير بدائل للأشخاص ذوي الحساسية من مواد معينة</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="cultural" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات الثقافية والهوية المؤسسية</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تجسيد هوية الشركة</h3>
              <p className="mb-2 leading-7 text-gray-700">
                الزي كوسيلة للتعبير عن هوية العلامة التجارية:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                <li>استخدام ألوان وشعار الشركة بطريقة جذابة ومتناغمة</li>
                <li>تعكس قيم الشركة (الفخامة، الاقتصاد، الابتكار، التقليدية)</li>
                <li>اتساق مع باقي عناصر الهوية البصرية من تصميم الطائرات إلى المطبوعات</li>
                <li>تصاميم تعزز شعور الانتماء للطاقم وتخلق صورة موحدة</li>
              </ul>

              <div className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">احترام التنوع الثقافي</h3>
                  <p className="mb-2 text-gray-700">مراعاة الخلفيات المتنوعة للطاقم والمسافرين:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>تصاميم تحترم المعتقدات الدينية المختلفة للطاقم</li>
                    <li>مستويات مقبولة من الحشمة تناسب الخطوط المتنوعة</li>
                    <li>مراعاة حساسيات ثقافية حول بعض الرموز أو الألوان</li>
                    <li>توازن بين الهوية المحلية والمقبولية العالمية</li>
                  </ol>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التعبير عن الثقافة الوطنية</h3>
                  <p className="mb-2 text-gray-700">الزي كسفير للتراث الثقافي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>استلهام عناصر من التراث الوطني (نقوش، ألوان، رموز)</li>
                    <li>دمج قطع أو إكسسوارات مستوحاة من الملابس التقليدية</li>
                    <li>استخدام تقنيات حرفية محلية مثل التطريز أو النسج</li>
                    <li>موازنة بين الرموز الثقافية والطابع العالمي</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="aesthetic" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات الجمالية والتصميمية</h2>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6 border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التوجهات المعاصرة في الموضة</h3>
                <p className="mb-2 text-gray-700">البقاء على صلة بالتطورات الحديثة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>موازنة بين اتباع أحدث صيحات الموضة والحفاظ على العملية</li>
                  <li>تجنب التصاميم الموسمية قصيرة الأمد لصالح الأناقة المستدامة</li>
                  <li>إدخال تحديثات دورية طفيفة للحفاظ على تجدد المظهر</li>
                  <li>التعاون مع مصممين محترفين لإضفاء لمسة احترافية</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مناسبة جميع أنماط الجسم</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">تصاميم شاملة للتنوع الجسدي:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>نطاق واسع من المقاسات لاستيعاب مختلف أنماط الجسم</li>
                      <li>قصات تناسب أشكال الجسم المختلفة وتبرز أفضل ما فيها</li>
                      <li>خيارات متعددة تتيح للطاقم اختيار الأكثر ملاءمة لهم</li>
                      <li>تصاميم تخفي العيوب الجسدية وتعزز الثقة بالنفس</li>
                    </ol>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التميز والتفرد</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">خلق صورة لا تُنسى:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>عناصر فريدة تميز الشركة عن منافسيها</li>
                      <li>توازن بين التقليدية والابتكار في التصميم</li>
                      <li>تفاصيل دقيقة تضيف طابعاً مميزاً دون المبالغة</li>
                      <li>استمرارية بعض العناصر التصميمية عبر الزمن</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="economic" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات الاقتصادية واللوجستية</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التكلفة والميزانية</h3>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <p className="mb-2 font-medium text-gray-800">التوازن بين الجودة والتكلفة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>حساب تكلفة دورة حياة الزي كاملة وليس فقط تكلفة الإنتاج الأولية</li>
                  <li>الموازنة بين جودة المواد وتكرار الاستبدال</li>
                  <li>استثمار في تصاميم عالية الجودة كجزء من استراتيجية العلامة التجارية</li>
                  <li>تحديد أولويات الإنفاق بين القطع المختلفة</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة والتوصيات</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="mb-4 leading-7 text-gray-700">
                  يتطلب تصميم أزياء شركات الطيران موازنة دقيقة بين عوامل متعددة ومتشابكة، من الوظيفية والراحة إلى الأناقة والهوية المؤسسية. ويظل التحدي الأكبر هو خلق تصميم يجمع بين الجوانب العملية والجمالية دون التضحية بأي منهما.
                </p>
                <p className="mb-4 leading-7 text-gray-700">
                  من خلال فهم عميق لهذه الاعتبارات المختلفة، يمكن لشركات الطيران تطوير أزياء تعكس هويتها بشكل فعال، وتعزز تجربة المسافرين، وتوفر للطاقم ملابس تدعمهم في أداء مهامهم بكفاءة وراحة. وبينما تستمر صناعة الطيران في التطور، ستظل أزياء الطاقم عنصراً أساسياً في تحديد الصورة العامة لشركات الطيران وتميزها في سوق تنافسي.
                </p>
              </div>
            </section>

            {/* قسم التعليقات */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-6">التعليقات</h3>
              <p className="text-gray-600 mb-4">شاركنا رأيك حول هذا المقال</p>
              
              <form className="mb-8">
                <div className="mb-4">
                  <textarea 
                    placeholder="أضف تعليقك هنا..." 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3"
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex gap-4 mb-4">
                  <input 
                    type="text" 
                    placeholder="الاسم" 
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                  />
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني" 
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  إرسال التعليق
                </button>
              </form>
            </div>

            {/* زر العودة للأعلى */}
            <div className="fixed bottom-8 left-8">
              <a 
                href="#top" 
                className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
                aria-label="العودة للأعلى"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 