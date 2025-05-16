import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import { ArticleImage } from '@/components/ArabicContentElements';

export const metadata = {
  title: 'الاتجاهات الحديثة في تصميم زي طاقم الطائرة',
  description: 'استعراض لأحدث الاتجاهات والابتكارات في تصميم أزياء طاقم الطائرة، من الاستدامة والتقنيات الذكية إلى التصاميم الشاملة والهوية الثقافية.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/future_flight_crew_fashion.jpeg';
  const title = 'الاتجاهات الحديثة في تصميم زي طاقم الطائرة';
  const readingTime = '7 دقائق';
  const datePublished = '١٠ يوليو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'sustainability', title: 'الاستدامة والمواد الصديقة للبيئة' },
    { id: 'smart-fabrics', title: 'الأقمشة الذكية والتكنولوجيا' },
    { id: 'inclusive-design', title: 'التصميم الشامل والتنوع' },
    { id: 'cultural-identity', title: 'الهوية الثقافية في التصميم المعاصر' },
    { id: 'designer-collaborations', title: 'التعاون مع المصممين العالميين' },
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
                  <Link href="/blog/flight-crew/flight-2" className="text-sm hover:text-blue-600 block">
                    اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-9" className="text-sm hover:text-blue-600 block">
                    تطور أزياء طاقم الطائرة عبر التاريخ
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
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="اتجاهات حديثة في تصميم زي طاقم الطائرة"
                caption="التصاميم المعاصرة لأزياء طاقم الطائرة تجمع بين الأناقة والوظيفية والتقنيات المتطورة"
              />
              
              <p className="mb-4 leading-7 text-gray-700">
                يشهد عالم تصميم أزياء طاقم الطائرة تطوراً مستمراً يعكس التغيرات العالمية في صناعة الأزياء، والتكنولوجيا، والوعي البيئي، والقيم الاجتماعية المتجددة. لم تعد هذه الأزياء مجرد وسيلة للتمييز المرئي أو التعبير عن الهوية المؤسسية لشركات الطيران فحسب، بل أصبحت تمثل تقاطعاً معقداً بين الوظيفية والأناقة والراحة والاستدامة والتنوع الثقافي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في السنوات الأخيرة، بدأنا نشهد تحولات جذرية في طريقة تفكير مصممي أزياء الطيران ومقاربتهم للتحديات المعاصرة. أصبح هناك اهتمام متزايد بالمواد المستدامة، والأقمشة الذكية، والتصاميم الشاملة التي تراعي التنوع البشري، مع الحفاظ على الهوية الثقافية المميزة لكل شركة طيران.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض أبرز الاتجاهات الحديثة في تصميم زي طاقم الطائرة، ونستكشف كيف تتفاعل هذه الاتجاهات مع احتياجات صناعة الطيران المتغيرة، وتوقعات المسافرين المتطورة، والتحديات البيئية والاجتماعية التي تواجه عالمنا اليوم. كما نلقي نظرة على بعض التعاونات المبتكرة بين شركات الطيران والمصممين العالميين، وكيف تسهم هذه الشراكات في إعادة تعريف مفهوم أزياء الطيران في القرن الحادي والعشرين.
          </p>
        </section>

            <section id="sustainability" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاستدامة والمواد الصديقة للبيئة</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="زي طاقم طائرة مصمم من مواد مستدامة"
                caption="مبادرات الاستدامة في تصميم أزياء طاقم الطائرة تستخدم مواد معاد تدويرها وصديقة للبيئة"
              />
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تحول نحو الأقمشة المستدامة</h3>
                <p className="mb-2 font-medium text-blue-700">اتجاهات مبتكرة في اختيار المواد:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>استخدام البوليستر المعاد تدويره (rPET) المصنوع من زجاجات البلاستيك للتقليل من النفايات</li>
                  <li>توظيف ألياف TENCEL™ المستخرجة من لب الخشب المتجدد والقابلة للتحلل البيولوجي</li>
                  <li>اعتماد القطن العضوي المزروع بدون مبيدات حشرية أو أسمدة كيميائية</li>
                  <li>استكشاف مواد مبتكرة مثل الأقمشة المصنوعة من نفايات صناعة الفاكهة (مثل قشور الأناناس)</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">عمليات التصنيع المسؤولة</h3>
                  <p className="mb-2 text-gray-700">تقنيات صديقة للبيئة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>تبني تقنيات الصباغة منخفضة استهلاك المياه والطاقة</li>
                    <li>استخدام أصباغ طبيعية وصديقة للبيئة تقلل من التلوث الكيميائي</li>
                    <li>اعتماد نموذج الإنتاج حسب الطلب للحد من هدر المواد والمخزون الزائد</li>
                    <li>تصميم قطع متعددة الاستخدامات تقلل من عدد القطع اللازمة لكل فرد</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الاقتصاد الدائري في أزياء الطيران</h3>
                  <p className="mb-2 text-gray-700">استراتيجيات لتقليل الأثر البيئي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>برامج إعادة تدوير الأزياء القديمة لتحويلها إلى منتجات جديدة أو مواد خام</li>
                    <li>توسيع دورة حياة المنتج من خلال تصاميم قابلة للإصلاح والتعديل</li>
                    <li>ابتكار برامج لإعادة استخدام الأزياء القديمة في مجالات أخرى</li>
                    <li>اعتماد نهج "من المهد إلى المهد" بدلاً من "من المهد إلى اللحد"</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="smart-fabrics" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأقمشة الذكية والتكنولوجيا</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="أقمشة ذكية مستخدمة في زي طاقم الطائرة"
                caption="الأقمشة الذكية توفر ميزات متقدمة مثل تنظيم الحرارة ومقاومة البقع"
              />
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الأقمشة متعددة الوظائف</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">ابتكارات تعزز الأداء والراحة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة مضادة للميكروبات تمنع نمو البكتيريا والروائح خلال الرحلات الطويلة</li>
                    <li>مواد مقاومة للبقع والماء تحافظ على نظافة الزي حتى في بيئات العمل الصعبة</li>
                    <li>أقمشة التنظيم الحراري التي تتكيف مع درجات الحرارة المختلفة داخل وخارج الطائرة</li>
                    <li>تقنيات حماية من الأشعة فوق البنفسجية للطواقم العاملة على المدرج</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">دمج التكنولوجيا الارتدائية</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">تقنيات مدمجة في الأزياء:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>أجهزة استشعار مدمجة لمراقبة مستويات التعب وجودة الهواء في بيئة العمل</li>
                  <li>إضاءة LED مدمجة لتحسين الرؤية في حالات الطوارئ أو الإضاءة المنخفضة</li>
                  <li>شحن لاسلكي مدمج في الجيوب للأجهزة الإلكترونية أثناء العمل</li>
                  <li>أزرار وشارات ذكية تعمل كبطاقات تعريف وتسهل الوصول إلى المعلومات</li>
          </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تحسين الأداء والراحة</h3>
                <p className="mb-2 text-gray-700">ابتكارات لبيئة العمل الفريدة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أقمشة عالية المرونة تسمح بحرية الحركة الكاملة أثناء أداء المهام المختلفة</li>
                  <li>تقنيات تقليل الضغط على أجزاء الجسم المختلفة أثناء الجلوس والوقوف لفترات طويلة</li>
                  <li>تعزيز الدورة الدموية من خلال ضغط متدرج في أجزاء معينة من الملابس</li>
                  <li>أنظمة تهوية مدمجة للتعامل مع التغيرات في درجات الحرارة والرطوبة</li>
          </ul>
              </div>
        </section>

            <section id="inclusive-design" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التصميم الشامل والتنوع</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="تصاميم شاملة متنوعة لزي طاقم الطائرة"
                caption="التصاميم الشاملة تراعي التنوع في الثقافات والأجسام والاحتياجات"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تصاميم تناسب كافة الأجسام</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">نهج أكثر شمولية:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>توفير مجموعة واسعة من المقاسات بما يتجاوز المقاسات القياسية التقليدية</li>
                      <li>تصميم قصات تناسب مختلف أنماط الجسم وتظهر الطاقم بأفضل مظهر</li>
                      <li>مرونة في الاختيارات بين القطع المختلفة (التنانير، البناطيل، الفساتين)</li>
                      <li>استخدام أنظمة قياس متطورة لتوفير أزياء مخصصة تماماً لكل فرد</li>
          </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مراعاة التنوع الثقافي والديني</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">احترام المعتقدات المختلفة:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>توفير خيارات حجاب مصممة خصيصاً للمضيفات المسلمات تتناسق مع باقي الزي</li>
                      <li>تصاميم محتشمة تتناسب مع الخلفيات الثقافية المختلفة</li>
                      <li>مراعاة المتطلبات الخاصة بغطاء الرأس في الديانات المختلفة</li>
                      <li>تكييف الزي بما يراعي الحساسيات الثقافية في المناطق المختلفة</li>
          </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تجاوز الثنائيات الجندرية التقليدية</h3>
                <p className="mb-2 text-gray-700">تصاميم أكثر مرونة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>توفير خيارات محايدة جندرياً للطاقم الذي يفضل ذلك</li>
                  <li>تصميم أزياء موحدة تركز على الوظيفية والهوية المؤسسية بدلاً من التمييز الجندري</li>
                  <li>إلغاء القيود التقليدية التي تحصر قطعاً معينة بجنس دون الآخر</li>
                  <li>تمكين الطاقم من اختيار القطع التي تناسب هويتهم الشخصية بغض النظر عن الجنس</li>
          </ul>
              </div>
        </section>

            <section id="cultural-identity" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الهوية الثقافية في التصميم المعاصر</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">إحياء التراث بأسلوب معاصر</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">الجمع بين الأصالة والحداثة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>استلهام العناصر التقليدية المحلية وإعادة تفسيرها بأسلوب عصري</li>
                    <li>دمج الزخارف والتطريزات التراثية في تصاميم عملية متطورة</li>
                    <li>استخدام الألوان والرموز ذات الدلالات الثقافية للتعبير عن الهوية</li>
                    <li>تطوير قطع فريدة مستوحاة من الملابس التقليدية للبلد الأم لشركة الطيران</li>
          </ul>
                </div>
              </div>

              <div className="bg-white p-5 border border-gray-300 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الفن والحرف اليدوية المحلية</h3>
                <p className="mb-2 text-gray-700">تقدير المهارات التقليدية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>التعاون مع الحرفيين المحليين لإنتاج إكسسوارات فريدة مصنوعة يدوياً</li>
                  <li>استخدام تقنيات النسيج التقليدية في إنتاج أجزاء من الزي أو الإكسسوارات</li>
                  <li>توظيف الفنون المحلية كمصدر إلهام للطباعات والألوان والقصات</li>
                  <li>إبراز العناصر الثقافية الفريدة كنقطة تميز في عالم تصميم أزياء الطيران</li>
          </ul>
              </div>

              <div className="bg-white p-5 border border-gray-300 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التوازن بين العالمية والمحلية</h3>
                <p className="mb-2 text-gray-700">استراتيجيات للتميز العالمي مع الحفاظ على الهوية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تطوير تصاميم معاصرة ذات طابع عالمي مع لمسات محلية مميزة</li>
                  <li>مزج عناصر من مختلف الثقافات التي تخدمها شركة الطيران</li>
                  <li>تكييف التصاميم العالمية لتتناسب مع الذوق المحلي والقيم الثقافية</li>
                  <li>استخدام الهوية الثقافية كميزة تنافسية في سوق الطيران العالمي</li>
          </ul>
              </div>
        </section>

            <section id="designer-collaborations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التعاون مع المصممين العالميين</h2>
              <p className="mb-4 leading-7 text-gray-700">
                شهدت السنوات الأخيرة توجهاً متزايداً نحو التعاون بين شركات الطيران والمصممين العالميين لتطوير أزياء تجمع بين الأناقة العالية والوظيفية. هذه التعاونات أضافت بعداً جديداً لتجربة السفر وعززت من القيمة التسويقية لهوية شركات الطيران:
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">نماذج ناجحة من التعاونات العالمية</h3>
                <p className="mb-4 leading-7 text-gray-700">
                  تعاونت الخطوط الجوية الفرنسية مع المصمم كريستيان لاكروا لإنشاء زي يجمع بين الأناقة الفرنسية الكلاسيكية والعملية. كما تعاونت الخطوط البريطانية مع تيد بيكر، والخطوط القطرية مع إنتوناكي، والخطوط الإيطالية ألبرتا فيريتي. هذه التعاونات أسهمت في تطوير أزياء أصبحت جزءاً لا يتجزأ من هوية هذه الشركات وعنصراً مميزاً في حملاتها التسويقية.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تأثير الموضة الراقية على تصميم أزياء الطيران</h3>
                <p className="mb-4 leading-7 text-gray-700">
                  يسهم تعاون دور الأزياء العالمية في رفع مستوى التصميم وإضفاء لمسات من الأناقة العالية على أزياء ذات متطلبات وظيفية صارمة. يستفيد المصممون من خبرتهم في معالجة الألوان والأقمشة والقصات لخلق أزياء مميزة تلبي المتطلبات العملية مع الحفاظ على مستوى عالٍ من الأناقة، وهو ما ينعكس على الصورة العامة لشركة الطيران ويعزز من قيمتها كعلامة تجارية فاخرة.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الابتكار المشترك والتجارب المتفردة</h3>
                <p className="mb-4 leading-7 text-gray-700">
                  التعاون بين شركات الطيران والمصممين لا يقتصر على التصميم الجمالي فقط، بل يمتد ليشمل ابتكار حلول تقنية للتحديات التي يواجهها الطاقم. يساهم المصممون بخبراتهم في تطوير قصات مريحة ووظيفية، واختيار أقمشة متطورة، وإضافة لمسات مبتكرة تحسن من تجربة الارتداء، مما يعزز من رضا الطاقم وكفاءتهم.
                </p>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                إن الاتجاهات الحديثة في تصميم زي طاقم الطائرة تعكس عالماً متغيراً يواجه تحديات بيئية واجتماعية متزايدة، وتستجيب لتطلعات متجددة من قبل المسافرين وشركات الطيران على حد سواء. التحول نحو الاستدامة، والاستفادة من التكنولوجيا، وتبني التصميم الشامل، مع الحفاظ على الهوية الثقافية المميزة، كلها اتجاهات تشكل مستقبل هذه الصناعة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                ستظل أزياء طاقم الطائرة عنصراً حيوياً في تجربة السفر الجوي وفي هوية شركات الطيران، لكنها ستستمر في التطور لتعكس قيماً جديدة وتستجيب لاحتياجات متغيرة. التوازن بين الوظيفية والأناقة والاستدامة سيظل التحدي الأكبر أمام المصممين، وسيكون الابتكار المستمر هو المفتاح لمواجهة هذا التحدي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في النهاية، يمكن القول إن مستقبل تصميم أزياء طاقم الطائرة يتجه نحو مزيد من التخصيص والشمولية والاستدامة، مع الاستفادة المتزايدة من التكنولوجيا الذكية. وسيلعب التعاون بين شركات الطيران والمصممين والتقنيين دوراً محورياً في تطوير تصاميم مبتكرة تلبي احتياجات عصر جديد من السفر الجوي، تجمع بين التراث والابتكار، وبين الهوية المتفردة والقيم العالمية المشتركة.
          </p>
        </section>
      </article>
        </div>
      </div>
    </main>
  );
} 