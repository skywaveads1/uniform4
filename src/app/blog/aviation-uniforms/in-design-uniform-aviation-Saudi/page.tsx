import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import { AuthorBio } from '@/components/AuthorBio';
import { RelatedPosts } from '@/components/RelatedPosts';

export const metadata = {
  title: 'تصميم أزياء الطيران في المملكة العربية السعودية',
  description: 'نظرة شاملة على عالم تصميم أزياء الطيران في المملكة وكيف تجمع بين الهوية الوطنية والمعايير العالمية',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_uniforms_riyadh.jpg';
  const title = 'تصميم أزياء الطيران في المملكة العربية السعودية';
  const readingTime = '11 دقائق';
  const datePublished = '٥ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'saudi-identity', title: 'الهوية السعودية في تصميم الأزياء' },
    { id: 'design-elements', title: 'عناصر التصميم المميزة' },
    { id: 'designers', title: 'مصممو أزياء الطيران السعوديون' },
    { id: 'case-study', title: 'دراسة حالة: تصميم زي الخطوط السعودية الجديد' },
    { id: 'future', title: 'مستقبل تصميم أزياء الطيران في المملكة' },
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
                  <Link href="/blog/flight-crew/flight-crew-uniform-design" className="text-sm hover:text-blue-600 block">
                    معايير الجودة العالمية في تصميم زي الطيران
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
                يشهد مجال تصميم أزياء الطيران في المملكة العربية السعودية تطوراً ملحوظاً في السنوات الأخيرة، يعكس التحولات الكبرى التي تشهدها المملكة على الصعيدين الثقافي والاقتصادي. أصبح التصميم السعودي لأزياء الطيران ليس مجرد وسيلة عملية لتمييز طاقم الطائرة، بل بات رمزاً ثقافياً وسفيراً للهوية السعودية في سماء العالم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستكشف عالم تصميم أزياء الطيران في المملكة العربية السعودية، والعناصر التي تميزه عن غيره، والتحديات التي يواجهها المصممون السعوديون في موازنة متطلبات الهوية الوطنية مع معايير الطيران العالمية. كما نلقي نظرة على بعض التجارب الناجحة والتوجهات المستقبلية في هذا المجال المتخصص.
              </p>
            </section>

            <section id="saudi-identity" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الهوية السعودية في تصميم الأزياء</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تلعب الهوية السعودية دوراً محورياً في تصميم أزياء الطيران، حيث يسعى المصممون إلى إبراز العناصر الثقافية المميزة للمملكة بأسلوب عصري وأنيق يتناسب مع بيئة الطيران العالمية.
              </p>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="عناصر التصميم السعودي في أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  عناصر من التراث السعودي مدمجة في تصاميم أزياء الطيران | المصدر: مجلة التصميم السعودي
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">العناصر التراثية في التصميم المعاصر</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">كيف يتم دمج التراث في الأزياء العصرية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>استلهام الألوان من البيئة السعودية الصحراوية والتراث الثقافي للمملكة</li>
                  <li>استخدام زخارف مستوحاة من الفن الإسلامي والنقوش السعودية التقليدية</li>
                  <li>تطويع عناصر من الزي التقليدي السعودي (كالبشت والغترة) في تصاميم عصرية</li>
                  <li>دمج رموز من التراث السعودي مثل النخلة والسيف في شعارات وإكسسوارات الزي</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تمثيل تنوع المناطق السعودية</h3>
              <p className="mb-4 leading-7 text-gray-700">
                تتميز المملكة العربية السعودية بتنوع ثقافي غني بين مناطقها المختلفة، من الحجاز إلى نجد ومن الشمال إلى الجنوب. يحرص المصممون السعوديون المعاصرون على تمثيل هذا التنوع في تصاميمهم لأزياء الطيران، من خلال استلهام عناصر من مختلف المناطق وإدماجها في تصميم موحد يعكس هوية المملكة المتكاملة.
              </p>
            </section>

            <section id="design-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">عناصر التصميم المميزة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الألوان والرموز</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>اللون الأخضر: مستوحى من العلم السعودي ويرمز للإسلام والنماء</li>
                    <li>الذهبي والفضي: يضيفان لمسة فخامة ويرمزان للثروة والمعادن</li>
                    <li>درجات البيج والرملي: تعكس ألوان الصحراء السعودية</li>
                    <li>الأزرق الداكن: يضفي طابعاً مهنياً ويرمز للسماء والطيران</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة والخامات</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>القطن السعودي عالي الجودة للراحة في المناخ الحار</li>
                    <li>الحرير الطبيعي للإكسسوارات والتفاصيل الفاخرة</li>
                    <li>أقمشة مخلوطة بتقنيات حديثة تجمع بين المتانة والراحة</li>
                    <li>خامات محلية مستدامة تدعم الصناعة السعودية</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">القصات والتصاميم</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">السمات المميزة للقصات السعودية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">الياقات:</span> مستوحاة من الثوب السعودي التقليدي، مع تطويرها لتناسب البيئة المهنية</li>
                    <li><span className="font-medium">الأكمام:</span> تصاميم فضفاضة نسبياً توفر حرية الحركة وتعكس روح الأزياء العربية</li>
                    <li><span className="font-medium">الخطوط:</span> انسيابية تعكس الانحناءات والتموجات المستوحاة من الكثبان الرملية والخط العربي</li>
                    <li><span className="font-medium">تفاصيل التطريز:</span> مستوحاة من الفن السعودي التقليدي، خاصة من منطقة الحجاز ونجد</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الإكسسوارات والمكملات</h3>
              <p className="mb-4 leading-7 text-gray-700">
                تلعب الإكسسوارات دوراً مهماً في استكمال الهوية البصرية لأزياء الطيران السعودية:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700 mb-4">
                <li>دبابيس وشارات تحمل شعارات مستوحاة من الرموز السعودية كالنخلة والصقر</li>
                <li>أوشحة بنقوش إسلامية هندسية تعكس فن "القط العسيري" والزخارف النجدية</li>
                <li>حقائب وأحزمة بتصاميم تجمع بين الوظيفية والأناقة السعودية</li>
                <li>ساعات وقبعات تحمل تفاصيل دقيقة مستوحاة من الحرف اليدوية السعودية</li>
              </ul>
            </section>

            <section id="designers" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مصممو أزياء الطيران السعوديون</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                برز في السنوات الأخيرة عدد من المصممين السعوديين الموهوبين الذين أثروا مجال تصميم أزياء الطيران، سواء من خلال العمل مع شركات الطيران الوطنية أو من خلال مشاريع استشارية عالمية.
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">رواد التصميم في المملكة</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-blue-700 mb-2">نورة الفيصل</p>
                    <p className="text-gray-700 mb-2">من أوائل المصممات السعوديات اللواتي عملن في مجال أزياء الطيران، قدمت مجموعة متميزة من التصاميم التي تجمع بين الثقافة السعودية والاتجاهات العالمية.</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-700 mb-2">خالد القرشي</p>
                    <p className="text-gray-700 mb-2">مصمم سعودي متخصص في الأزياء المهنية، ساهم في تطوير زي الخطوط السعودية الحديث وعمل كمستشار لشركات طيران إقليمية.</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الجيل الجديد من المصممين</h3>
              <p className="mb-4 leading-7 text-gray-700">
                بدعم من رؤية 2030 ومبادرات تطوير المواهب السعودية، ظهر جيل جديد من المصممين الشباب الذين يقدمون رؤى مبتكرة لأزياء الطيران:
              </p>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>خريجو برامج التصميم في الجامعات السعودية، خاصة من جامعة الأميرة نورة وجامعة الملك عبد العزيز</li>
                  <li>المبتعثون العائدون من دراسة التصميم في الخارج والذين يجمعون بين المعرفة العالمية والهوية المحلية</li>
                  <li>رواد الأعمال الذين أسسوا استوديوهات تصميم متخصصة في الأزياء المهنية والموحدة</li>
                </ul>
              </div>
            </section>

            <section id="case-study" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دراسة حالة: تصميم زي الخطوط السعودية الجديد</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="تصميم زي الخطوط السعودية الجديد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  لقطة من عملية إعادة تصميم زي الخطوط السعودية | المصدر: الخطوط الجوية العربية السعودية
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">مراحل عملية التصميم</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">خطوات تطوير الزي الجديد</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">مرحلة البحث والاستكشاف:</span> دراسة تاريخ الخطوط السعودية وأزيائها السابقة، وتحليل اتجاهات التصميم العالمية، واستطلاع آراء الطاقم حول احتياجاتهم.</li>
                    <li><span className="font-medium">وضع المفهوم التصميمي:</span> تطوير فلسفة تصميم تجمع بين الهوية السعودية المعاصرة ومتطلبات العمل العملية.</li>
                    <li><span className="font-medium">التصميم المبدئي:</span> إنشاء مجموعة من التصاميم الأولية واختبارها مع فريق من خبراء التصميم وممثلي الطاقم.</li>
                    <li><span className="font-medium">التطوير والتعديل:</span> تنقيح التصاميم المختارة وتعديلها بناءً على الملاحظات والاختبارات الميدانية.</li>
                    <li><span className="font-medium">الإنتاج التجريبي:</span> إنتاج نماذج أولية للتصاميم النهائية واختبارها في بيئة العمل الحقيقية.</li>
                    <li><span className="font-medium">الإطلاق والتنفيذ:</span> إنتاج الزي على نطاق واسع وتدريب الطاقم على ارتدائه والعناية به.</li>
                  </ol>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">النتائج والتأثير</h3>
              <p className="mb-4 leading-7 text-gray-700">
                حقق تصميم الزي الجديد للخطوط السعودية نجاحاً كبيراً على عدة مستويات:
              </p>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">أبرز إنجازات التصميم الجديد:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تعزيز الهوية البصرية للخطوط السعودية وترسيخ صورتها كناقل عالمي يعتز بهويته الوطنية</li>
                  <li>تحسين رضا الطاقم عن الزي من حيث الراحة والوظيفية بنسبة 40% مقارنة بالتصميم السابق</li>
                  <li>حصد جوائز عالمية في مجال تصميم الأزياء المهنية، مما عزز مكانة التصميم السعودي عالمياً</li>
                  <li>تقليل تكاليف الصيانة والاستبدال بنسبة 25% بفضل استخدام مواد عالية الجودة ومتينة</li>
                </ul>
              </div>
            </section>

            <section id="future" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مستقبل تصميم أزياء الطيران في المملكة</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الاتجاهات المستقبلية</h3>
              <p className="mb-4 leading-7 text-gray-700">
                يشهد مجال تصميم أزياء الطيران في المملكة تطوراً مستمراً، مع توقعات بظهور اتجاهات جديدة في المستقبل القريب:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التكنولوجيا والابتكار</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>دمج تقنيات الأقمشة الذكية التي تتكيف مع درجات الحرارة</li>
                    <li>استخدام مواد مستدامة ومعاد تدويرها في صناعة الأزياء</li>
                    <li>تطبيق تقنيات الطباعة ثلاثية الأبعاد في إنتاج الإكسسوارات</li>
                    <li>تطوير أزياء تفاعلية مزودة بتقنيات إنترنت الأشياء</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التخصص والتنوع</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تصاميم متخصصة لمختلف أنواع الرحلات والوجهات</li>
                    <li>خيارات متنوعة للطاقم تراعي الاختلافات الفردية</li>
                    <li>تصاميم مرنة تتكيف مع المناسبات والمواسم المختلفة</li>
                    <li>أزياء خاصة للرحلات المميزة كالحج والعمرة</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">دور التعليم والتدريب</h3>
              <p className="mb-4 leading-7 text-gray-700">
                لضمان مستقبل مزدهر لتصميم أزياء الطيران في المملكة، يتزايد الاهتمام بالتعليم والتدريب في هذا المجال:
              </p>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">المبادرات التعليمية والتدريبية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تأسيس برامج أكاديمية متخصصة في تصميم الأزياء المهنية في الجامعات السعودية</li>
                  <li>إطلاق مبادرات تدريبية بالتعاون بين شركات الطيران والمعاهد المتخصصة</li>
                  <li>برامج ابتعاث للمصممين الشباب لدراسة تصميم أزياء الطيران في مراكز عالمية</li>
                  <li>ورش عمل وندوات دورية يقدمها خبراء دوليون في المملكة</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل تصميم أزياء الطيران في المملكة العربية السعودية مجالاً حيوياً يجمع بين الإبداع الفني والهوية الثقافية والتطبيقات العملية. نجح المصممون السعوديون في تقديم تصاميم تجمع بين الأصالة والمعاصرة، تعكس هوية المملكة وتطلعاتها المستقبلية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                مع استمرار نمو قطاع الطيران في المملكة وتعزيز مكانتها كمركز عالمي للنقل الجوي، سيزداد الطلب على تصاميم متميزة تجمع بين المعايير العالمية والطابع السعودي الفريد. وستلعب المواهب المحلية الشابة دوراً محورياً في رسم ملامح مستقبل هذا المجال.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في نهاية المطاف، يعد تصميم أزياء الطيران السعودية ليس مجرد نشاط فني أو عملي، بل هو تعبير حضاري يعكس قصة المملكة المتجددة وهويتها المتطورة في عالم يجمع بين التنوع والانفتاح والاعتزاز بالجذور.
              </p>
            </section>

            {/* Author Bio Section */}
            <div className="mb-12">
              <AuthorBio 
                author="سارة العريني" 
                image="/images/author/sarah_al_oraini.jpg" 
                title="مصممة أزياء ومستشارة في مجال الزي الموحد للطيران"
              />
            </div>

            {/* Related Posts Section */}
            <div className="mb-10">
              <RelatedPosts 
                currentCategory="aviation-uniforms" 
                currentSlug="in-design-uniform-aviation-Saudi"
              />
            </div>

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