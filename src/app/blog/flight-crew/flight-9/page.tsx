import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import { ArticleImage } from '@/components/ArabicContentElements';

export const metadata = {
  title: 'تطور أزياء طاقم الطائرة عبر التاريخ',
  description: 'رحلة عبر تاريخ تطور أزياء طاقم الطائرة من بدايات الطيران التجاري وحتى عصرنا الحالي، مع استعراض التغيرات والمؤثرات التي شكلت هذا التطور.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/air_crew_attire.jpeg';
  const title = 'تطور أزياء طاقم الطائرة عبر التاريخ';
  const readingTime = '8 دقائق';
  const datePublished = '٢٥ يونيو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'early-days', title: 'بدايات أزياء الطيران (1930-1950)' },
    { id: 'golden-age', title: 'العصر الذهبي للطيران (1950-1970)' },
    { id: 'modern-era', title: 'العصر الحديث (1970-2000)' },
    { id: 'contemporary', title: 'الاتجاهات المعاصرة (2000-الآن)' },
    { id: 'cultural-influences', title: 'التأثيرات الثقافية والإقليمية' },
    { id: 'conclusion', title: 'الخلاصة' },
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
                  <Link href="/blog/flight-crew/flight-1" className="text-sm hover:text-blue-600 block">
                    اعتبارات تصميم زي شركات الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-3" className="text-sm hover:text-blue-600 block">
                    أزياء الطيران النسائية: تطورها وخصائصها الحديثة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-8" className="text-sm hover:text-blue-600 block">
                    دور الأزياء في تعزيز الحضور المهني لطاقم الطائرة
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
                منذ انطلاق أولى الرحلات التجارية في أوائل القرن العشرين، شهدت أزياء طاقم الطائرة تطوراً ملحوظاً يعكس التغيرات في صناعة الطيران، والأدوار المتنامية لأفراد الطاقم، والتحولات الثقافية والاجتماعية عبر العقود. ليست أزياء الطيران مجرد ملابس عمل وظيفية، بل هي سجل مرئي للتاريخ الاجتماعي والاقتصادي، ومرآة تعكس تطور دور المرأة في مجال العمل، وتحول صناعة الطيران من رفاهية للنخبة إلى وسيلة نقل جماهيرية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض رحلة تطور أزياء طاقم الطائرة منذ الثلاثينيات وحتى يومنا هذا، مسلطين الضوء على المراحل الأساسية والتحولات الكبرى التي شهدتها، والعوامل المؤثرة في تصميمها، من الاعتبارات العملية إلى الاتجاهات الفنية والثقافية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                كما نستكشف كيف تعكس هذه الأزياء هوية شركات الطيران والقيم الثقافية للبلدان التي تمثلها، وكيف استطاعت أن توازن بين متطلبات الوظيفة والأناقة والراحة، وصولاً إلى الاتجاهات المعاصرة التي تدمج بين التقاليد والابتكار، والأصالة والحداثة، في عصر يشهد تحولات عميقة في مفاهيم الهوية والتنوع والاستدامة.
          </p>
        </section>

            <section id="early-days" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">بدايات أزياء الطيران (1930-1950)</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="أزياء طاقم الطائرة في بدايات الطيران التجاري"
                caption="أزياء طاقم الطائرة المستوحاة من الزي العسكري في ثلاثينيات القرن العشرين"
              />
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">إلهام من الحقبة العسكرية</h3>
                <p className="mb-2 font-medium text-blue-700">التأثيرات العسكرية في أزياء الطيران المبكرة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>استلهام التصاميم الأولى من الزي العسكري نظراً لكون معظم الطيارين من خلفيات عسكرية</li>
                  <li>اعتماد البدلات الرسمية ذات الأزرار والرتب المميزة للطيارين</li>
                  <li>تصميم الأزياء الأولى للمضيفات بما يشبه زي الممرضات، مع التركيز على الرعاية والخدمة</li>
                  <li>هيمنة الألوان الداكنة (الأزرق البحري، الأسود) والتصاميم المحافظة</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الدور الوظيفي المبكر للمضيفات</h3>
                  <p className="mb-2 text-gray-700">متطلبات المضيفات في بدايات الطيران التجاري:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>كانت المضيفات ممرضات مسجلات في الأصل للعناية بالمسافرين</li>
                    <li>تصميم زي يعكس الاحترافية الطبية مع مسحة من الأناقة المحافظة</li>
                    <li>اعتماد التنانير الطويلة والسترات المصممة بأناقة وبساطة</li>
                    <li>إضافة القبعات كعنصر أساسي يعكس الطابع الرسمي والمهني</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">البدايات التجارية والرفاهية المحدودة</h3>
                  <p className="mb-2 text-gray-700">خصائص مرحلة الرفاهية المبكرة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>كان السفر جواً في الثلاثينيات والأربعينيات امتيازاً للنخبة والأثرياء</li>
                    <li>تصميم الزي ليعكس فخامة التجربة وحصريتها للطبقات المقتدرة</li>
                    <li>التركيز على الاحترافية والرسمية في التعامل وأسلوب الخدمة</li>
                    <li>ظهور العلامة التجارية المميزة لكل شركة طيران من خلال تفاصيل الزي</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="golden-age" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العصر الذهبي للطيران (1950-1970)</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="أزياء طاقم الطائرة في العصر الذهبي للطيران"
                caption="تصاميم مصممي الأزياء العالميين لزي المضيفات في ستينيات القرن العشرين"
              />
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">ثورة التصميم والأناقة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تحول جذري في فلسفة التصميم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>دخول مصممي الأزياء العالميين لعالم أزياء الطيران مثل كريستيان ديور وإيميليو بوتشي</li>
                    <li>تحول الزي من الطابع العملي البسيط إلى مظهر عصري يعكس اتجاهات الموضة</li>
                    <li>ظهور التنانير القصيرة والقصات المميزة والألوان الزاهية في الستينيات</li>
                    <li>استخدام الأقمشة الفاخرة والإكسسوارات المميزة كعلامة على الترف والرفاهية</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الهوية البصرية لشركات الطيران</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">تطور الهوية المرئية من خلال الأزياء:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>اعتماد ألوان وأنماط مميزة لكل شركة طيران كجزء من هويتها التجارية</li>
                  <li>استخدام الزي كأداة تسويقية رئيسية في إعلانات ومواد الدعاية</li>
                  <li>إطلاق مجموعات أزياء كاملة مع تغيير مواسم الطيران أو إطلاق خطوط جديدة</li>
                  <li>ظهور "شخصية" مميزة لكل شركة طيران من خلال طاقمها وزيهم المميز</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">إعادة تعريف دور المضيفة</h3>
                <p className="mb-2 text-gray-700">تطور الصورة والدور الوظيفي:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تحول دور المضيفة من نطاق الرعاية الصحية إلى رمز للضيافة والخدمة الراقية</li>
                  <li>التركيز على الجاذبية والأناقة في معايير اختيار وتوظيف المضيفات</li>
                  <li>ظهور المضيفة كرمز ثقافي للحرية والسفر والعصرية في وسائل الإعلام</li>
                  <li>تعزيز الصورة النمطية للمضيفة من خلال الإعلانات التي تركز على جمالها وأناقتها</li>
          </ul>
              </div>
        </section>

            <section id="modern-era" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العصر الحديث (1970-2000)</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="أزياء طاقم الطائرة في العصر الحديث"
                caption="التنوع والوظيفية في تصاميم أزياء الطيران في الثمانينيات والتسعينيات"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التحرر وتغير المفاهيم</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">تطورات في ظل الحركات النسوية:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>تراجع القيود المفروضة على مظهر المضيفات مع تنامي الحركات النسوية</li>
                      <li>إضافة خيار البنطلون للمضيفات كبديل للتنانير التقليدية</li>
                      <li>تخفيف قواعد المظهر الصارمة المتعلقة بالوزن والطول ومقاييس الجسم</li>
                      <li>دخول الرجال لمهنة مضيف الطيران بشكل متزايد وتصميم أزياء خاصة بهم</li>
          </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التحول نحو الوظيفية والراحة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">الاهتمام بالجوانب العملية:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>تصميم أزياء أكثر ملاءمة لساعات العمل الطويلة والمهام المتنوعة</li>
                      <li>استخدام أقمشة مرنة ومقاومة للتجعد تناسب الرحلات الطويلة</li>
                      <li>إضافة جيوب وتفاصيل عملية لتسهيل حمل المعدات والأدوات الضرورية</li>
                      <li>تبني تصاميم قابلة للتغيير والتنويع بين المواسم والرحلات المختلفة</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تطور اعتبارات السلامة</h3>
                <p className="mb-2 text-gray-700">دمج معايير السلامة في التصميم:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تطوير أقمشة مقاومة للحريق واللهب تلبي معايير السلامة المتزايدة</li>
                  <li>تصميم أحذية عملية تسمح بالحركة السريعة في حالات الطوارئ</li>
                  <li>إضافة عناصر عاكسة أو مضيئة للأزياء المستخدمة في عمليات الإخلاء</li>
                  <li>تخفيف الإكسسوارات التي قد تعيق الحركة أو تشكل خطراً في المواقف الطارئة</li>
          </ul>
              </div>
        </section>

            <section id="contemporary" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاتجاهات المعاصرة (2000-الآن)</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="الاتجاهات المعاصرة في أزياء طاقم الطائرة"
                caption="أزياء طاقم الطائرة المعاصرة: مزيج من الهوية والتكنولوجيا والاستدامة"
              />
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">العودة إلى الهوية والأصالة</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">إحياء التراث مع لمسة معاصرة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>عودة الاهتمام بتصاميم تعكس التراث الثقافي والهوية الوطنية لشركات الطيران</li>
                    <li>إعادة تفسير العناصر التقليدية بأسلوب معاصر يجمع بين الأصالة والحداثة</li>
                    <li>استخدام الحرف اليدوية والتطريزات التقليدية في تصاميم بعض شركات الطيران الإقليمية</li>
                    <li>توظيف المصممين المحليين البارزين لإضفاء لمسة ثقافية أصيلة</li>
          </ul>
                </div>
              </div>

              <div className="bg-white p-5 border border-gray-300 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التكنولوجيا والاستدامة</h3>
                <p className="mb-2 text-gray-700">الابتكارات التقنية والبيئية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>استخدام أقمشة ذكية مقاومة للماء والبقع ومضادة للبكتيريا</li>
                  <li>تبني مواد مستدامة ومعاد تدويرها في إنتاج الأزياء</li>
                  <li>تصميم قطع متعددة الاستخدامات لتقليل الحاجة لعدد كبير من القطع</li>
                  <li>دمج التقنيات الحديثة مثل الأقمشة المنظمة للحرارة والمزودة بخاصية تعقب صحة الطاقم</li>
          </ul>
              </div>

              <div className="bg-white p-5 border border-gray-300 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التنوع والشمولية</h3>
                <p className="mb-2 text-gray-700">مراعاة الاختلافات الفردية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تصميم أزياء تناسب مختلف أنماط الجسم والأحجام بدلاً من القياس الموحد</li>
                  <li>توفير خيارات متعددة تراعي المعتقدات الدينية والثقافية (مثل الحجاب والأزياء المحتشمة)</li>
                  <li>إزالة الفروق التقليدية بين أزياء الرجال والنساء في بعض شركات الطيران</li>
                  <li>تصميم أزياء مناسبة لمختلف الظروف الصحية والاحتياجات الخاصة للطاقم</li>
          </ul>
              </div>
        </section>

            <section id="cultural-influences" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التأثيرات الثقافية والإقليمية</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تعكس أزياء طاقم الطائرة في مختلف مناطق العالم تنوعاً ثقافياً غنياً، حيث تسعى شركات الطيران لتمييز نفسها من خلال تصاميم تعبر عن هويتها الثقافية والوطنية. فيما يلي نظرة على بعض الأمثلة البارزة:
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الشرق الأوسط</h3>
                <p className="mb-4 leading-7 text-gray-700">
                  تمزج شركات الطيران في المنطقة العربية بين الأناقة العالمية والعناصر التقليدية، مثل استخدام الخطوط الجوية السعودية للألوان الوطنية الخضراء، وتوظيف الخطوط القطرية لعناصر من التراث المحلي في التصاميم. كما قدمت شركات مثل طيران الإمارات والاتحاد نموذجاً فريداً يجمع بين الفخامة العالمية والهوية العربية من خلال تفاصيل مثل القبعة ذات الوشاح المستوحى من غطاء الرأس التقليدي.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">شرق آسيا</h3>
                <p className="mb-4 leading-7 text-gray-700">
                  تشتهر شركات الطيران الآسيوية بأزياء تعكس الدقة والانضباط المميزين للثقافة الآسيوية، مع لمسات من التراث التقليدي. مثال ذلك الخطوط الجوية السنغافورية واستخدامها للساري المعدل بألوان مميزة، والخطوط الجوية اليابانية وتوظيفها لعناصر من الكيمونو التقليدي في تصاميم معاصرة أنيقة.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">أفريقيا</h3>
                <p className="mb-4 leading-7 text-gray-700">
                  تتميز شركات الطيران الأفريقية باستخدام الأقمشة النابضة بالحياة والألوان الزاهية المستوحاة من الثقافات المحلية. تبرز الخطوط الإثيوبية كمثال بارز باستخدامها للتطريزات التقليدية والأنماط الأفريقية، بينما تدمج الخطوط الكينية عناصر من فن الماساي في تصاميم أزيائها.
                </p>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل رحلة تطور أزياء طاقم الطائرة عبر التاريخ مرآة تعكس التغيرات الكبرى في صناعة الطيران والمجتمع على حد سواء. من الأزياء العسكرية المحافظة في الثلاثينيات، إلى تصاميم العصر الذهبي المبهرة في الستينيات، وصولاً إلى الأزياء المعاصرة التي تجمع بين الوظيفية والهوية والاستدامة - يعكس هذا التطور قصة نجاح متواصلة في التكيف مع المتغيرات وتلبية احتياجات متعددة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                اليوم، تواجه أزياء طاقم الطائرة تحديات جديدة تفرضها التطورات التكنولوجية والبيئية والاجتماعية. ويظل السؤال المحوري هو كيفية تحقيق التوازن بين الهوية المميزة والراحة الوظيفية، بين التقاليد والابتكار، وبين الجماليات ومتطلبات العمل العملية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                ما يمكن استخلاصه من هذه الرحلة التاريخية هو أن أزياء طاقم الطائرة ستظل عنصراً أساسياً في تشكيل تجربة السفر الجوي وصورة شركات الطيران، وأنها ستواصل التطور استجابة للمتغيرات، مع الحفاظ على دورها كرمز للاحترافية والأناقة والهوية المميزة. وكما تطورت هذه الأزياء عبر القرن الماضي، فإنها ستواصل التحول والتطور لتعكس روح العصر والقيم المتجددة في عالم الطيران المستقبلي.
          </p>
        </section>
      </article>
        </div>
      </div>
    </main>
  );
} 