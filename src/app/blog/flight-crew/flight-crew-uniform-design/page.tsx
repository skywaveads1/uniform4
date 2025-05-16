import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'معايير الجودة العالمية في تصميم زي الطيران',
  description: 'استكشف المعايير الدولية لجودة تصميم أزياء طاقم الطيران، من السلامة والراحة إلى المتانة والأداء الوظيفي، وكيف تؤثر هذه المعايير على صناعة الطيران العالمية.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_uniform_design.jpeg';
  const title = 'معايير الجودة العالمية في تصميم زي الطيران';
  const readingTime = '15 دقائق';
  const datePublished = '١٠ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'regulatory-bodies', title: 'الهيئات التنظيمية والمعايير الدولية' },
    { id: 'safety-standards', title: 'معايير السلامة والحماية' },
    { id: 'performance-standards', title: 'معايير الأداء والمتانة' },
    { id: 'comfort-standards', title: 'معايير الراحة والإرجونوميكس' },
    { id: 'sustainability-standards', title: 'معايير الاستدامة والمسؤولية البيئية' },
    { id: 'case-studies', title: 'دراسات حالة: تطبيق المعايير العالمية' },
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
                  <Link href="/blog/aviation-uniforms/design-uniform" className="text-sm hover:text-blue-600 block">
                    مبادئ تصميم زي الطيران: دليل شامل
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/cabin-crew-uniform-fabric-selection" className="text-sm hover:text-blue-600 block">
                    اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/uniforms-saudi-arabia" className="text-sm hover:text-blue-600 block">
                    أزياء الطيران في المملكة العربية السعودية
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
            تعتبر أزياء طاقم الطيران واجهة شركات الطيران وجزءاً أساسياً من هويتها البصرية، لكنها في الوقت ذاته تمثل معدات عمل وظيفية تخضع لمعايير صارمة من الجودة والسلامة. في عالم صناعة الطيران المعاصر، لم تعد هذه الأزياء مجرد عناصر جمالية، بل أصبحت خاضعة لمجموعة معقدة من المعايير والمواصفات العالمية التي تضمن أداءها الأمثل في بيئة العمل الفريدة للطيران.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            في هذا المقال، نستكشف المعايير الدولية التي تحكم تصميم وإنتاج أزياء طاقم الطيران، بدءاً من اشتراطات السلامة الأساسية وصولاً إلى أحدث المتطلبات البيئية والاستدامة. سنلقي الضوء على الهيئات التنظيمية المسؤولة عن وضع هذه المعايير، وكيفية تطبيقها من قبل شركات الطيران الكبرى، والتحديات التي تواجه الالتزام بها، والتوجهات المستقبلية في هذا المجال المتخصص.
          </p>
        </section>

            <section id="regulatory-bodies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الهيئات التنظيمية والمعايير الدولية</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">المنظمات الدولية المؤثرة</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">الجهات المسؤولة عن تحديد معايير الجودة العالمية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>منظمة الطيران المدني الدولي (ICAO) - وضع المعايير الأساسية للسلامة في صناعة الطيران بما فيها معدات الطاقم</li>
                  <li>اتحاد النقل الجوي الدولي (IATA) - تطوير إرشادات وممارسات موصى بها لأزياء طاقم الطائرة</li>
                  <li>الإدارة الفيدرالية للطيران (FAA) - معايير صارمة للسلامة تؤثر على مواصفات الزي في الولايات المتحدة ودولياً</li>
                  <li>وكالة سلامة الطيران الأوروبية (EASA) - المعايير الأوروبية الشاملة لمعدات الطيران بما فيها أزياء الطاقم</li>
          </ul>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">المعايير القياسية الدولية</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">مواصفات منظمة المعايير الدولية (ISO) المطبقة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>ISO 9001 - نظام إدارة الجودة في تصنيع وإنتاج أزياء الطيران</li>
                    <li>ISO 14001 - معايير الإدارة البيئية في صناعة الملابس المهنية</li>
                    <li>ISO 15797 - اختبارات الغسيل الصناعي والتجفيف للملابس المهنية</li>
                    <li>ISO 11612 - معايير حماية الملابس من الحرارة واللهب</li>
                    <li>ISO 13688 - المتطلبات العامة لملابس الحماية والسلامة المهنية</li>
          </ol>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الشهادات والاعتمادات العالمية</h3>
              <p className="mb-2 text-gray-700">الاعتمادات التي تسعى إليها مصنعي أزياء الطيران:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                  <p className="font-medium text-blue-700 mb-2">شهادات الجودة</p>
                  <ul className="list-disc list-inside space-y-1 mr-3 text-gray-700">
                    <li>شهادة Oeko-Tex Standard 100 - تضمن خلو المنسوجات من المواد الضارة</li>
                    <li>اعتماد GOTS (المعيار العالمي للمنسوجات العضوية) - للمواد المستدامة</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                  <p className="font-medium text-blue-700 mb-2">شهادات الإنتاج المسؤول</p>
                  <ul className="list-disc list-inside space-y-1 mr-3 text-gray-700">
                    <li>شهادة Bluesign - تؤكد على الإنتاج المستدام والآمن للمنسوجات</li>
                    <li>اعتماد WRAP (الإنتاج العالمي المسؤول المعتمد) - يضمن ظروف العمل الأخلاقية</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="safety-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير السلامة والحماية</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="معايير السلامة في زي الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  اختبارات معايير السلامة لأزياء طاقم الطيران | المصدر: مركز أبحاث سلامة الطيران
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">مقاومة الاشتعال والحريق</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">متطلبات أساسية لسلامة الطاقم والركاب:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>معيار FAR 25.853 - اختبارات مقاومة الحريق للمواد المستخدمة في مقصورة الطائرة</li>
                  <li>متطلبات NFPA 702 - طرق اختبار قابلية اشتعال الملابس</li>
                  <li>تصنيفات مقاومة اللهب من الدرجة A إلى الدرجة C حسب سرعة الانتشار</li>
                  <li>مواصفات للأقمشة ذاتية الإطفاء عند التعرض لمصدر الاشتعال</li>
          </ul>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">معايير الرؤية وإمكانية التمييز</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تعزيز السلامة من خلال الوضوح</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>معيار EN 20471 - المتطلبات الأوروبية للملابس عالية الرؤية</li>
                    <li>مواصفات عاكسات الضوء في الزي لحالات الطوارئ والإضاءة المنخفضة</li>
                    <li>قواعد التباين اللوني لتسهيل تمييز أفراد الطاقم من قبل الركاب</li>
                    <li>توحيد ألوان وتصميمات عناصر معينة للتعرف السريع على أدوار الطاقم</li>
          </ol>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">السلامة الصحية ومكافحة العدوى</h3>
              <p className="mb-2 text-gray-700">معايير حديثة أصبحت أكثر أهمية:</p>
              <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                <li>معالجات مضادة للميكروبات معتمدة من وكالة حماية البيئة (EPA)</li>
                <li>معيار ISO 18184 لاختبار فعالية المواد المضادة للفيروسات في المنسوجات</li>
                <li>شهادة AATCC 100 لاختبار النشاط المضاد للبكتيريا في المنسوجات</li>
                <li>مواصفات للأقمشة سهلة التطهير وقابلية التحمل للمطهرات القوية</li>
          </ul>
        </section>

            <section id="performance-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير الأداء والمتانة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">اختبارات متانة الأقمشة</h3>
                  <p className="mb-2 text-gray-700">ضمان العمر التشغيلي الطويل:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>اختبار Martindale - قياس مقاومة التآكل والاحتكاك (يتطلب 40,000+ دورة)</li>
                    <li>معيار ASTM D5034 - اختبار قوة الشد والتمزق للأقمشة</li>
                    <li>معيار ISO 13934 - تقييم قوة الشد القصوى وإطالة القماش</li>
                    <li>اختبارات Taber لمقاومة الكشط وفقاً لمعيار ASTM D3884</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">خصائص الأداء الوظيفي</h3>
                  <p className="mb-2 text-gray-700">معايير قياس الراحة والوظيفية:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>معيار AATCC 79 - قياس قدرة القماش على امتصاص الرطوبة</li>
                    <li>اختبار نفاذية الهواء وفقاً لمعيار ISO 9237 (يفضل 100+ لتر/متر²/ثانية)</li>
                    <li>معيار ISO 11092 - قياس المقاومة الحرارية وبخار الماء</li>
                    <li>اختبارات المرونة والاستطالة وفقاً لنظام ASTM D1776</li>
          </ol>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">مقاومة الملوثات والبقع</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">الحفاظ على المظهر الاحترافي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>معيار AATCC 118 - تقييم مقاومة النسيج للتبقع بالزيت</li>
                  <li>معالجات DWR (مقاومة الماء الدائمة) بتقييم 80/20 كحد أدنى</li>
                  <li>اختبارات مقاومة الكرمشة وفقاً لمعيار AATCC 128 (درجة 3.5+ من 5)</li>
                  <li>معيار ASTM D1776 - تقييم ثبات اللون بعد الغسيل المتكرر</li>
          </ul>
              </div>
        </section>

            <section id="comfort-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير الراحة والإرجونوميكس</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">المعايير الإرجونومية</h3>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <p className="mb-2 font-medium text-blue-700">تصميم يراعي حركة الجسم:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>توافق مع معايير EN 13402 للقياسات البشرية في تصميم الملابس</li>
                  <li>تطبيق مبادئ ISO 7250 لقياسات الجسم البشري للتصميم التكنولوجي</li>
                  <li>معايير نطاقات الحركة (ROM) لمفاصل الجسم المختلفة خلال مهام الطيران</li>
                  <li>اختبارات ميدانية للراحة الحركية في بيئة محاكاة لمقصورة الطائرة</li>
          </ul>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="اختبارات إرجونومية لزي الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  اختبارات إرجونومية للراحة الحركية في زي الطيران | المصدر: معهد أبحاث الملابس المهنية
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تنظيم الحرارة والتهوية</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">التوازن بين الدفء والتهوية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>معيار ISO 11092 (Ret) - قياس مقاومة بخار الماء (يفضل أقل من 6 m²Pa/W)</li>
                    <li>قياس معامل العزل الحراري Clo وفقاً لمعيار ASTM F1868</li>
                    <li>معايير توازن الرطوبة ومعدلات التبخر لمختلف مكونات الزي</li>
                    <li>اختبارات توزيع الحرارة باستخدام الملابس الذكية وأدوات القياس الحراري</li>
          </ol>
                </div>
              </div>
        </section>

            <section id="sustainability-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير الاستدامة والمسؤولية البيئية</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تقييم دورة الحياة</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">قياس الأثر البيئي الشامل:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>معيار ISO 14040 - منهجية تقييم دورة حياة المنتج من المهد إلى اللحد</li>
                  <li>حساب البصمة الكربونية للزي الكامل وفقاً لبروتوكول غازات الاحتباس الحراري</li>
                  <li>معايير تقييم استهلاك المياه لكل قطعة ملابس (يستهدف أقل من 20 لتراً/قطعة)</li>
                  <li>تقييم Higg Index لتأثير المنتج واستدامته في صناعة المنسوجات</li>
          </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المواد المستدامة</h3>
                  <p className="mb-2 text-gray-700">معايير اختيار المواد المسؤولة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>معيار Global Recycled Standard (GRS) - للمواد المعاد تدويرها</li>
                    <li>شهادة FSC للألياف السليلوزية من مصادر مدارة مسؤولة</li>
                    <li>معايير BCI (مبادرة القطن الأفضل) لإنتاج القطن المستدام</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">سلاسل التوريد الأخلاقية</h3>
                  <p className="mb-2 text-gray-700">معايير المسؤولية الاجتماعية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>معيار SA8000 لظروف العمل الأخلاقية في سلاسل التوريد</li>
                    <li>شهادة Fair Trade للممارسات التجارية العادلة</li>
                    <li>مبادرة FLA (اتحاد العمل العادل) لمراقبة ظروف المصانع</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="case-studies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دراسات حالة: تطبيق المعايير العالمية</h2>
              
              <div className="space-y-6 mb-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">لوفتهانزا: التوازن بين الجودة والاستدامة</h3>
                  <p className="mb-2 font-medium text-gray-700">نموذج أوروبي للالتزام بالمعايير:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تنفيذ معايير ISO 14001 في جميع مراحل تصميم وإنتاج الزي</li>
                    <li>استخدام أقمشة معتمدة من Bluesign بنسبة 85% من مجموع الأزياء</li>
                    <li>برنامج إعادة تدوير الزي القديم بالتعاون مع شركات النسيج الألمانية</li>
                    <li>تطبيق نظام شامل لتتبع دورة حياة كل قطعة من الزي الرسمي</li>
          </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الخطوط الجوية القطرية: معايير السلامة المتقدمة</h3>
                  <p className="mb-2 font-medium text-gray-700">تميز في تطبيق معايير الحماية:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>تجاوز متطلبات FAA للمواد المقاومة للحريق في أزياء الطاقم</li>
                    <li>تطوير نظام اختبار خاص لمقاومة الأزياء للظروف الصحراوية القاسية</li>
                    <li>استثمار في تقنيات متقدمة للمعالجات المضادة للميكروبات</li>
                    <li>اختبارات أداء فصلية للأزياء في ظروف تشغيلية حقيقية</li>
          </ol>
                </div>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل معايير الجودة العالمية في تصميم أزياء طاقم الطيران عنصراً أساسياً في صناعة متطورة تجمع بين متطلبات السلامة والأداء الوظيفي والجوانب الجمالية. تتطور هذه المعايير باستمرار استجابة للتحديات الجديدة في صناعة الطيران، مثل التحول نحو الاستدامة والمسؤولية البيئية، وتعزيز الحماية من المخاطر الصحية المستجدة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                مع استمرار تطور المنسوجات التقنية والمواد المبتكرة، ستزداد المعايير تعقيداً لتشمل جوانب جديدة مثل الذكاء الاصطناعي في تصميم الأزياء، والمواد القابلة للتحلل الحيوي، وحلول متخصصة للمناخات المتطرفة. شركات الطيران الرائدة تدرك أن تبني هذه المعايير ليس مجرد التزام تنظيمي، بل هو استثمار في جودة الخدمة وسلامة الطاقم والركاب وصورة العلامة التجارية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في نهاية المطاف، يمكن القول إن أزياء طاقم الطيران التي تلتزم بمعايير الجودة العالمية ليست مجرد "ملابس عمل"، بل هي منظومة متكاملة تجمع بين العلم والفن والهندسة، وتمثل جسراً بين التراث الثقافي للشركات والابتكار التكنولوجي، مما يجعلها من أكثر أنواع الملابس المهنية تطوراً وتخصصاً في عالمنا المعاصر.
          </p>
        </section>

            {/* قسم التعليقات */}
            <div className="border-t pt-10 mt-10">
              <h3 className="text-xl font-bold mb-6">التعليقات</h3>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 mb-4">شاركنا رأيك حول هذا المقال</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  إضافة تعليق
                </button>
              </div>
            </div>
      </article>
        </div>
      </div>
    </main>
  );
} 