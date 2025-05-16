import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تأثير ألوان زي الطيران على انطباعات المسافرين',
  description: 'دراسة تحليلية عن تأثير ألوان زي طاقم الطيران على انطباعات المسافرين وتجربة السفر، وكيفية توظيف الألوان في تعزيز الهوية البصرية لشركات الطيران',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/air_crew_attire.jpeg';
  const title = 'تأثير ألوان زي الطيران على انطباعات المسافرين';
  const readingTime = '8 دقائق';
  const datePublished = '١٥ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'environmental-impact', title: 'فهم تأثير يونيفورم الطيران على البيئة' },
    { id: 'sustainable-materials', title: 'المواد المستدامة في تصميم أزياء الطيران' },
    { id: 'global-initiatives', title: 'مبادرات رائدة من شركات الطيران العالمية' },
    { id: 'circular-design', title: 'تصميم دائري للأزياء: ما بعد الاستدامة' },
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
                    تطور أزياء طاقم الطيران عبر التاريخ
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-15" className="text-sm hover:text-blue-600 block">
                    الاتجاهات الحديثة في تصميم أزياء طاقم الطيران
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
            في عصر يتزايد فيه الوعي البيئي والمسؤولية المجتمعية، تواجه صناعة الطيران تحدياً كبيراً للموازنة بين متطلبات النمو الاقتصادي والالتزام بممارسات أكثر استدامة. وبينما تركز معظم الجهود على تقليل انبعاثات الكربون وتحسين كفاءة استهلاك الوقود، هناك جانب آخر من جوانب الاستدامة يكتسب اهتماماً متزايداً: يونيفورم طاقم الطيران.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            لطالما كانت أزياء الطيران رمزاً للأناقة والاحترافية، وعنصراً أساسياً في هوية شركات الطيران. ومع ذلك، فإن التحديات البيئية الناجمة عن دورة حياة هذه الأزياء - من استخراج المواد الخام وتصنيعها، إلى استخدامها والتخلص منها - تدفع نحو إعادة التفكير في الممارسات التقليدية وتبني نهج أكثر استدامة.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            في هذا المقال، نستكشف الاتجاهات المتنامية نحو يونيفورم طيران أكثر استدامة، ونسلط الضوء على المبادرات الرائدة التي تقودها شركات الطيران العالمية والمحلية. كما نتناول التحديات التي تواجه هذا التحول، والفرص التي يقدمها للصناعة وللبيئة على حد سواء. سنستعرض أيضاً كيف يمكن للمواد والتقنيات المبتكرة أن تسهم في تقليل البصمة البيئية للأزياء مع الحفاظ على معايير الجودة والأناقة المتوقعة في هذا القطاع.
          </p>
        </section>

            <section id="environmental-impact" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">فهم تأثير يونيفورم الطيران على البيئة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">دورة حياة يونيفورم الطيران والبصمة البيئية</h3>
                <p className="mb-2 font-medium text-blue-700">تقييم التأثير البيئي للزي عبر مراحله المختلفة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>استخراج المواد الخام: استهلاك الموارد الطبيعية والطاقة لإنتاج الألياف</li>
                  <li>التصنيع: استخدام المواد الكيميائية والمياه في عمليات الصباغة والمعالجة</li>
                  <li>النقل والتوزيع: انبعاثات الكربون المرتبطة بنقل المنتجات عبر سلاسل التوريد العالمية</li>
                  <li>الاستخدام: استهلاك الطاقة والمياه والمنظفات في عمليات الغسيل والكي المتكررة</li>
                  <li>نهاية الاستخدام: النفايات الناتجة عن التخلص من الأزياء المستهلكة</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">إحصائيات وأرقام حول الأثر البيئي</h3>
                  <p className="mb-2 text-gray-700">حقائق مقلقة عن الصناعة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>صناعة الأزياء ثاني أكبر ملوث للمياه على مستوى العالم</li>
                    <li>استهلاك القطن التقليدي كميات هائلة من المياه والمبيدات</li>
                    <li>مساهمة الألياف الاصطناعية في مشكلة الميكروبلاستيك</li>
                    <li>إنتاج مئات الآلاف من قطع اليونيفورم سنوياً</li>
                    <li>متوسط استخدام زي الطيران بين 18-24 شهراً قبل استبداله</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الضغوط نحو الممارسات المستدامة</h3>
                  <p className="mb-2 text-gray-700">العوامل الدافعة للتغيير:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تزايد الوعي البيئي بين المسافرين</li>
                    <li>اللوائح والتشريعات البيئية المتطورة</li>
                    <li>توجه المستثمرين نحو معايير ESG</li>
                    <li>المبادرات الطوعية داخل صناعة الطيران</li>
                    <li>ضغوط المنافسة مع إعلان مبادرات الاستدامة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="sustainable-materials" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المواد المستدامة في تصميم أزياء الطيران</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الألياف الطبيعية المستدامة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">بدائل صديقة للبيئة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>القطن العضوي: مزروع بدون مبيدات حشرية أو أسمدة كيميائية</li>
                    <li>الكتان: يتطلب مياهاً وموارد أقل بكثير من القطن</li>
                    <li>الحرير العضوي: إنتاج أكثر إنسانية مع تأثير بيئي أقل</li>
                    <li>الصوف المسؤول: من مزارع تطبق معايير الرفق بالحيوان</li>
                    <li>الخيزران: ينمو بسرعة ويتطلب القليل من المدخلات الزراعية</li>
          </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الألياف المعاد تدويرها والمبتكرة</h3>
              <div className="border-r-2 border-blue-500 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">الابتكارات في إعادة استخدام الموارد:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>البوليستر المعاد تدويره (rPET): مصنوع من زجاجات البلاستيك</li>
                  <li>النايلون المستصلح: مستخرج من شباك الصيد المهجورة</li>
                  <li>مواد من ألياف القهوة: تستخدم بقايا القهوة لإنتاج أقمشة</li>
                  <li>أقمشة من نفايات الأناناس (Piñatex): بديل نباتي للجلد</li>
                  <li>السليلوز المعاد تجديده: مستخرج من لب الأشجار المستدامة</li>
          </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المواد التقنية المتطورة</h3>
                <p className="mb-2 text-gray-700">ابتكارات تجمع بين الأداء والاستدامة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أقمشة قابلة للتحلل البيولوجي بعد انتهاء عمرها</li>
                  <li>مواد ذكية تقلل الحاجة للغسيل المتكرر</li>
                  <li>ألياف مركبة تجمع بين المتانة والتجددية</li>
                  <li>أقمشة معالجة لتقليل استهلاك الطاقة</li>
                  <li>مواد مصممة للفصل السهل لتسهيل إعادة التدوير</li>
          </ul>
              </div>
        </section>

            <section id="global-initiatives" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مبادرات رائدة من شركات الطيران العالمية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تجارب شركات طيران عالمية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">نماذج ملهمة للاستدامة:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>الخطوط الجوية الاسكندنافية: زي من مواد معاد تدويرها 100%</li>
                      <li>يونايتد إيرلاينز: شراكة مع TracyReese لتصميم يونيفورم مستدام</li>
                      <li>طيران نيوزيلندا: استخدام خيوط من زجاجات بلاستيكية معاد تدويرها</li>
                      <li>كانتاس الأسترالية: برنامج شامل لإعادة تدوير اليونيفورم القديم</li>
                      <li>الخطوط الجوية الفنلندية: استخدام مواد من المحيط في الزي</li>
          </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">خطوات نحو الاستدامة في شركات الطيران العربية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">مبادرات محلية وإقليمية:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>طيران الإمارات: تجربة استخدام أقمشة من مصادر مستدامة</li>
                      <li>الخطوط السعودية: خطط لتطوير زي يتضمن مواد معاد تدويرها</li>
                      <li>الاتحاد للطيران: برنامج لإعادة استخدام عناصر من الزي القديم</li>
                      <li>الخطوط الملكية الأردنية: التحول نحو مواد أكثر استدامة</li>
                      <li>طيران الخليج: شراكات مع موردين ملتزمين بالإنتاج المستدام</li>
          </ol>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">دراسات حالة: نتائج وتأثير المبادرات</h3>
                <p className="mb-2 font-medium text-blue-700">قياس نجاح مشاريع الاستدامة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الخطوط الاسكندنافية: تقليل البصمة الكربونية للزي بنسبة 45%</li>
                  <li>كانتاس: تحويل أكثر من 10,000 قطعة زي من مكب النفايات</li>
                  <li>يونايتد: توفير 231,000 لتر من المياه سنوياً من خلال تقنيات صباغة متطورة</li>
                  <li>الخطوط الفنلندية: تحويل 13 طن من البلاستيك إلى إكسسوارات للزي</li>
                  <li>طيران نيوزيلندا: تحسن في رضا الموظفين بنسبة 32% بعد اعتماد زي أكثر استدامة</li>
          </ul>
              </div>
        </section>

            <section id="circular-design" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تصميم دائري للأزياء: ما بعد الاستدامة</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="تصميم دائري لأزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  نموذج للتصميم الدائري في صناعة أزياء الطيران | المصدر: مؤتمر الاستدامة في صناعة الطيران 2023
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">مفهوم الاقتصاد الدائري في الأزياء</h3>
              <p className="mb-4 leading-7 text-gray-700">
                يتجاوز التصميم الدائري مفهوم الاستدامة التقليدي ليعيد تعريف دورة حياة المنتج بالكامل. في هذا النموذج، تُصمم الأزياء منذ البداية بحيث يمكن إعادة استخدامها وتدويرها وتجديدها بسهولة، مما يلغي مفهوم "النفايات" تماماً. يعتمد هذا النهج على الحفاظ على المواد في الاستخدام لأطول فترة ممكنة، وتجديد النظم الطبيعية، والانتقال من نموذج "الاستخدام والتخلص" إلى "الاستخدام وإعادة الاستخدام".
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في سياق أزياء الطيران، يمكن تطبيق هذا المفهوم من خلال تصميم قطع قابلة للتفكيك بسهولة، واستخدام مواد أحادية يمكن إعادة تدويرها دون فقدان جودتها، وإنشاء أنظمة لاستعادة الأزياء المستعملة وإعادة تدويرها أو تحويلها إلى منتجات جديدة. هذا النهج لا يقلل فقط من الأثر البيئي، بل يمكن أن يخلق أيضاً فرصاً اقتصادية جديدة وقيمة مضافة للشركات.
              </p>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل التحول نحو أزياء طيران أكثر استدامة فرصة مهمة لشركات الطيران لتقليل بصمتها البيئية وتعزيز صورتها كمؤسسات مسؤولة بيئياً واجتماعياً. من خلال اعتماد المواد المستدامة، وتبني تقنيات التصنيع الصديقة للبيئة، وتطبيق مبادئ التصميم الدائري، يمكن لشركات الطيران أن تحقق توازناً بين الأناقة والوظيفية والاستدامة في أزياء طاقم الطيران.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                مع استمرار تطور التقنيات والمواد المستدامة، وتزايد الوعي البيئي بين المستهلكين والمستثمرين، سيصبح هذا التحول ليس فقط خياراً أخلاقياً، بل ضرورة تنافسية أيضاً. الشركات التي تبادر بتبني هذه الممارسات ستكون في موقع أفضل للاستفادة من الفرص الناشئة في اقتصاد أكثر استدامة، وستساهم في تشكيل مستقبل أكثر خضرة لصناعة الطيران.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في النهاية، يتطلب تحقيق الاستدامة الحقيقية في أزياء الطيران تعاوناً وثيقاً بين شركات الطيران، ومصممي الأزياء، ومصنعي المنسوجات، والباحثين، والهيئات التنظيمية. من خلال هذا الجهد المشترك، يمكن تحويل تحدي الاستدامة إلى فرصة للابتكار والتميز في صناعة تسعى باستمرار للتطور والتحسين.
          </p>
        </section>
      </article>
        </div>
      </div>
    </main>
  );
} 