import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'صناعة أزياء الطيران في المملكة: الواقع والآفاق المستقبلية',
  description: 'استكشاف تأثير عالم الطيران على صناعة الأزياء العالمية، والإلهام المتبادل بين تصميم زي الطيران والموضة المعاصرة',
};

export default function AviationInKingdom() {
  const imageSrc = '/images/aviation_uniforms/aviation_in.jpeg';
  const title = 'صناعة أزياء الطيران في المملكة: الواقع والآفاق المستقبلية';
  const readingTime = '10 دقائق للقراءة';
  const datePublished = '١٨ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'historical-influence', title: 'التأثير التاريخي للطيران على الأزياء' },
    { id: 'iconic-elements', title: 'العناصر الأيقونية من الطيران في الموضة' },
    { id: 'designer-collaborations', title: 'تعاون المصممين مع شركات الطيران' },
    { id: 'contemporary-trends', title: 'الاتجاهات المعاصرة: الطيران كمصدر إلهام' },
    { id: 'future-fusion', title: 'مستقبل التكامل بين الطيران والأزياء' },
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
                  <Link href="/blog/aviation-uniforms/design-uniform-crew-aviation" className="text-sm hover:text-blue-600 block">
                    تصميم زي طاقم الطائرة: دليل شامل للمعايير والعناصر الأساسية
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/airline-uniform-design-evolution" className="text-sm hover:text-blue-600 block">
                    تطور تصميم زي الطيران عبر العصور
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/airline-corporate-identity-uniforms" className="text-sm hover:text-blue-600 block">
                    أزياء شركات الطيران كعنصر في الهوية المؤسسية
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
                لطالما شكّل عالم الطيران مصدر إلهام لا ينضب لمصممي الأزياء حول العالم، فمنذ بدايات الطيران التجاري في منتصف القرن العشرين، أصبحت صورة المضيفة الأنيقة والطيار ذو الهيبة من الرموز الثقافية التي تجسد الأناقة والسلطة والمغامرة في آن واحد.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستكشف العلاقة المتبادلة بين عالم الطيران وصناعة الأزياء، ونتتبع كيف ألهمت أزياء الطيران اتجاهات الموضة العالمية عبر السنين، وكيف استفادت شركات الطيران من خبرات مصممي الأزياء العالميين في تطوير زي طاقم الطائرة. كما نلقي الضوء على العناصر الأيقونية من عالم الطيران التي وجدت طريقها إلى منصات عروض الأزياء وخزانات الملابس اليومية.
              </p>
            </section>

            <section id="historical-influence" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التأثير التاريخي للطيران على الأزياء</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">العصر الذهبي للطيران وأثره على الموضة</h3>
                <p className="mb-2 font-medium text-blue-700">الطيران كرمز للرفاهية والحداثة (1950-1970):</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تبني القبعات والتنانير الضيقة المستوحاة من زي المضيفات في الموضة النسائية الراقية</li>
                  <li>انتشار "أناقة الجت ست" (Jet Set Style) كرمز لأسلوب حياة العالم الجديد المتصل بالطيران</li>
                  <li>ظهور تصاميم لشركات مثل Dior و Chanel تأثرت بشكل مباشر بأزياء الطيران</li>
                  <li>بروز البدلة الرسمية المتأثرة بزي الطيارين كعنصر أساسي في خزانة الرجل العصري</li>
                </ul>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="أزياء العصر الذهبي للطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  أزياء المضيفات في العصر الذهبي للطيران وتأثيرها على الموضة النسائية | المصدر: أرشيف الموضة التاريخية
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الطيران العسكري والموضة</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">عناصر من الطيران العسكري في الموضة العالمية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">سترة الطيار (Bomber Jacket):</span> تحولت من زي عسكري وظيفي إلى قطعة أساسية في الموضة الشبابية، وشهدت عدة موجات شعبية منذ الأربعينيات وحتى اليوم.</li>
                    <li><span className="font-medium">نظارات الطيار (Aviator Sunglasses):</span> ابتكرت أصلاً لحماية عيون الطيارين، أصبحت من أكثر أشكال النظارات الشمسية انتشاراً وثباتاً في عالم الموضة.</li>
                    <li><span className="font-medium">سترة الطيران (Flight Jacket):</span> بتفاصيلها العسكرية المميزة، ألهمت العديد من تصاميم الجاكيتات الجلدية والقماشية في الموضة الرجالية والنسائية.</li>
                    <li><span className="font-medium">بدلة الطيران (Flight Suit):</span> أثرت في تصاميم البدلات الرياضية والملابس الوظيفية في سبعينيات وثمانينيات القرن العشرين.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="iconic-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر الأيقونية من الطيران في الموضة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الشارات والرموز</h3>
                  <p className="mb-2 text-gray-700">إلهام للأزياء العصرية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>شارات الرتب والأجنحة في تصاميم الإكسسوارات</li>
                    <li>الشعارات العسكرية في طباعة الأزياء الشبابية</li>
                    <li>استخدام شارات شركات الطيران في المجموعات الحصرية</li>
                    <li>إعادة تفسير الرموز الملاحية في الإكسسوارات المعاصرة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">القصات والتفاصيل</h3>
                  <p className="mb-2 text-gray-700">عناصر تصميمية مستمرة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>ياقة الطيار في الجاكيتات والمعاطف العصرية</li>
                    <li>أزرار وجيوب وظيفية مستوحاة من ملابس الطيارين</li>
                    <li>تنانير بخط A مستوحاة من زي المضيفات الكلاسيكي</li>
                    <li>ربطات العنق والأوشحة بتصاميم تحاكي أزياء طاقم الطائرة</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="عناصر من الطيران في الأزياء المعاصرة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  مجموعة أزياء مستوحاة من عناصر الطيران في أسبوع الموضة بميلانو | المصدر: مجلة فوغ العالمية
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <p className="italic text-gray-700 border-r-4 border-blue-300 pr-4 py-2 mb-4">
                  "الطيران هو أحد أكثر المجالات إلهاماً للموضة المعاصرة. فهو يجمع بين الوظيفية المطلقة والأناقة المتطورة، والحرفية الدقيقة والهيبة الثقافية. صناعة الطيران وصناعة الأزياء تشتركان في الاهتمام بالتفاصيل والمواد والقصات التي تجمع بين الجمال والأداء."
                </p>
                <p className="text-sm text-gray-600 text-left">- كارل لاغرفيلد، مصمم أزياء عالمي</p>
              </div>
            </section>

            <section id="designer-collaborations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تعاون المصممين مع شركات الطيران</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                منذ ستينيات القرن الماضي، بدأت شركات الطيران في إدراك قيمة التعاون مع مصممي الأزياء العالميين لتطوير زي طاقم الطائرة، مما يعزز صورتها ويرفع من مستوى الخدمة المقدمة. في المقابل، وجد المصممون في عالم الطيران فرصة لتوسيع آفاقهم الإبداعية وتطبيق رؤيتهم على نطاق عالمي.
              </p>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">أبرز التعاونات بين المصممين وشركات الطيران</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">كريستيان ديور و Air France (1962):</span> من أوائل التعاونات الهامة، حيث صمم ديور زياً أنيقاً أصبح جزءاً من الهوية الثقافية الفرنسية.</li>
                    <li><span className="font-medium">إيميليو بوتشي و Braniff International (1965):</span> الزي الملون والجريء الذي غير مفهوم أزياء الطيران وأدخل الألوان الزاهية إلى عالم كان يهيمن عليه الكحلي والرمادي.</li>
                    <li><span className="font-medium">فيفيان ويستوود و Virgin Atlantic (2014):</span> تصميم يجمع بين البصمة البريطانية المميزة لويستوود والهوية العصرية لفيرجن، مع التركيز على الاستدامة.</li>
                    <li><span className="font-medium">ألبرتا فيريتي و Alitalia (2018):</span> إعادة تفسير للأناقة الإيطالية الكلاسيكية مع لمسات عصرية لزي الخطوط الإيطالية.</li>
                    <li><span className="font-medium">هالبيرين و لوفتهانزا (2020):</span> تعاون يركز على الاستدامة والراحة والأناقة الألمانية المعاصرة.</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">القيمة المضافة للتعاون</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">فوائد الشراكة بين عالمي الموضة والطيران:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-blue-800 mb-2">لشركات الطيران:</p>
                    <ul className="list-disc list-inside space-y-1 mr-3 text-gray-700">
                      <li>تعزيز القيمة الثقافية والجمالية للعلامة التجارية</li>
                      <li>الاستفادة من الخبرة التقنية في مجال الأقمشة والراحة</li>
                      <li>جذب الاهتمام الإعلامي والتسويقي</li>
                      <li>رفع معنويات الطاقم من خلال ارتداء تصاميم عالمية</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800 mb-2">للمصممين:</p>
                    <ul className="list-disc list-inside space-y-1 mr-3 text-gray-700">
                      <li>التعامل مع تحديات جديدة في الوظائف والراحة</li>
                      <li>توسيع نطاق التأثير إلى جمهور عالمي</li>
                      <li>الاستفادة من الارتباط بقيم الطيران مثل الفخامة والعالمية</li>
                      <li>اكتساب خبرات في مجال تصميم الأزياء الوظيفية</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="contemporary-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاتجاهات المعاصرة: الطيران كمصدر إلهام</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="الاتجاهات المعاصرة في الموضة المستوحاة من الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  مجموعة أزياء 2023 لمصمم عالمي مستوحاة من عناصر الطيران المعاصر | المصدر: مجلة هاربرز بازار
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">إعادة اكتشاف الكلاسيكيات</h3>
              <p className="mb-4 leading-7 text-gray-700">
                في السنوات الأخيرة، شهدنا موجة جديدة من الاهتمام بالعناصر الكلاسيكية من عالم الطيران، لكن بتفسيرات وتطبيقات معاصرة. فسترة الطيار (Bomber Jacket) عادت بقوة إلى منصات العروض العالمية، ولكن بتصاميم وخامات مبتكرة تتجاوز النسخة العسكرية التقليدية. كما أن الإكسسوارات المستوحاة من عالم الطيران، مثل الساعات والنظارات والحقائب، أصبحت من العناصر الثابتة في مجموعات المصممين المعاصرين.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الاستدامة والتكنولوجيا</h3>
                  <p className="mb-2 text-gray-700">توجهات حديثة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة تقنية مستوحاة من تطورات الطيران</li>
                    <li>مواد معاد تدويرها من صناعة الطيران</li>
                    <li>تصاميم وظيفية تجمع بين الراحة والأناقة</li>
                    <li>استخدام تقنيات النانو في معالجة الأقمشة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الحنين والنوستالجيا</h3>
                  <p className="mb-2 text-gray-700">العودة إلى العصر الذهبي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>إعادة إحياء أزياء الطيران من الخمسينيات والستينيات</li>
                    <li>الاهتمام بألوان وأنماط حقبة "الجت ست"</li>
                    <li>استلهام أزياء المضيفات من العصر الذهبي</li>
                    <li>دمج عناصر تراثية من الطيران في أزياء معاصرة</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future-fusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مستقبل التكامل بين الطيران والأزياء</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">توجهات مستقبلية للتكامل بين العالمين</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <h4 className="font-medium text-blue-700">ملابس ذكية للمسافرين</h4>
                    <p className="text-gray-700">تطوير ملابس وإكسسوارات تحسن من تجربة السفر، مثل السترات المزودة بتقنية التدفئة والتبريد للتكيف مع مختلف درجات الحرارة، أو الأحذية المريحة المصممة خصيصاً لتجربة السفر الطويل.</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <h4 className="font-medium text-blue-700">أزياء متعددة الوظائف للطاقم</h4>
                    <p className="text-gray-700">تصاميم مبتكرة تجمع بين الشكل الجمالي والوظائف المتعددة، مثل القصات القابلة للتعديل والطبقات المتنوعة وتقنيات تنظيم الحرارة المدمجة في النسيج.</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <h4 className="font-medium text-blue-700">التوسع في المجموعات الإضافية</h4>
                    <p className="text-gray-700">قيام شركات الطيران بإطلاق مجموعات أزياء للمستهلكين مستوحاة من تصاميمها، مما يوسع نطاق علامتها التجارية ويقدم مصدر دخل إضافي.</p>
                  </div>
                </div>
              </div>
              
              <p className="mb-4 leading-7 text-gray-700">
                يشير خبراء الصناعة إلى أن مستقبل العلاقة بين الطيران والأزياء سيشهد تكاملاً أكبر، مع التركيز على الاستدامة والتكنولوجيا والتخصيص. فمع تزايد الوعي البيئي، تتجه شركات الطيران نحو اعتماد مواد صديقة للبيئة ومستدامة في أزيائها، بينما تستفيد من التطورات التكنولوجية لتحسين وظائف وراحة هذه الأزياء.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                كما نتوقع أن نشهد مزيداً من التعاون بين شركات الطيران والعلامات التجارية للأزياء، ليس فقط في تصميم زي الطاقم، بل في إنشاء تجارب سفر متكاملة تشمل مجموعات خاصة للمسافرين ومنتجات للعناية الشخصية وإكسسوارات مختلفة تعزز تجربة السفر الجوي.
              </p>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                لا يزال التأثير المتبادل بين عالم الطيران وصناعة الأزياء مستمراً ومتطوراً، فالرموز والعناصر المستوحاة من الطيران تواصل إلهام المصممين، بينما تستفيد شركات الطيران من خبرات وإبداعات عالم الأزياء لتطوير هويتها البصرية وتعزيز تجربة عملائها.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                هذه العلاقة التكاملية تعكس القيم المشتركة بين العالمين: الاهتمام بالتفاصيل، والتوازن بين الوظيفة والجمال، والسعي المستمر للابتكار والتطوير. وفي عصر تتسارع فيه وتيرة التغيير والتطور التكنولوجي، نتوقع أن تشهد هذه العلاقة آفاقاً جديدة، مع التركيز على الاستدامة والتكنولوجيا والتجارب المخصصة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                سواء كنت من عشاق الطيران أو الموضة أو كليهما، فإن استكشاف نقاط التقاطع والإلهام بين هذين العالمين يفتح نافذة فريدة على تاريخ وثقافة القرن العشرين والواحد والعشرين، ويكشف عن الطرق المتنوعة التي تتشابك بها مختلف مجالات الإبداع البشري.
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