import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import BlogArticle from '@/components/BlogArticle';
import { 
  Section, 
  Paragraph, 
  BulletList, 
  ListItem, 
  Quote, 
  HighlightBox, 
  KeyPointsBox,
  ArticleImage
} from '@/components/ArabicContentElements';

export const metadata = {
  title: 'الاتجاهات في تصميم ملابس طاقم الطائرة',
  description: 'استعراض لأحدث الاتجاهات والابتكارات في تصميم أزياء طاقم الطائرة وتأثيرها على راحة الطاقم وصورة شركات الطيران',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/air_crew_attire.jpeg';
  const title = 'الاتجاهات في تصميم ملابس طاقم الطائرة';
  const readingTime = '9 دقائق';
  const datePublished = '١٢ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'current-trends', title: 'الاتجاهات الحالية في تصميم أزياء الطيران' },
    { id: 'tech-innovations', title: 'الابتكارات التقنية في أقمشة وتصاميم الطيران' },
    { id: 'cultural-influences', title: 'التأثيرات الثقافية على أزياء الطيران' },
    { id: 'sustainability', title: 'الاستدامة في تصميم أزياء الطيران' },
    { id: 'future-directions', title: 'الاتجاهات المستقبلية' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const relatedArticles = [
    {
      title: "أزياء الطيران في المملكة العربية السعودية",
      description: "نظرة شاملة على تاريخ وتطور أزياء الطيران في المملكة العربية السعودية",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/aviation-uniforms/uniform-aviation-in-kingdom",
      date: "٥ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "تصميم زي طاقم الطائرة",
      description: "دليل شامل حول تصميم زي طاقم الطائرة وأهم العناصر التي يجب مراعاتها",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/aviation-uniforms/design-uniform-crew-aviation",
      date: "١٠ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "أفضل تصاميم أزياء الطيران",
      description: "نظرة على أفضل تصاميم أزياء الطيران عالمياً وأسباب تميزها",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/aviation-uniforms/best-on-uniform-aviation",
      date: "٢٠ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    }
  ];

  const tags = ["تصميم ملابس طاقم الطائرة", "الابتكار في أزياء الطيران", "اتجاهات تصميم الأزياء", "تصاميم عصرية"];

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
                  <Link href="/blog/aviation-uniforms/aviation-in" className="text-sm hover:text-blue-600 block">
                    الطيران في تصميم الأزياء
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/design-uniform-crew-aviation" className="text-sm hover:text-blue-600 block">
                    تصميم زي طاقم الطائرة
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
                شهد مجال تصميم ملابس طاقم الطائرة تطوراً كبيراً على مر السنين، متأثراً بالتغيرات في عالم الموضة، والتقدم التكنولوجي في صناعة النسيج، واحتياجات الراحة والعملية لطاقم الطائرة. تعكس هذه الملابس ليس فقط الاتجاهات الجمالية السائدة، بل أيضاً هوية شركات الطيران وقيمها وتاريخها.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنستعرض أبرز الاتجاهات الحالية في تصميم ملابس طاقم الطائرة، والابتكارات التقنية التي غيرت من مفاهيم الراحة والعملية، والتأثيرات الثقافية المتنوعة، ودور الاستدامة في التصاميم الحديثة، ونلقي نظرة على مستقبل هذا المجال المتطور باستمرار.
              </p>
            </section>

            <section id="current-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاتجاهات الحالية في تصميم أزياء الطيران</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">اتجاهات التصميم الرئيسية</h3>
                <p className="mb-2 font-medium text-blue-700">تطورات حديثة في مجال تصميم أزياء الطيران:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>العودة إلى البساطة الأنيقة بعيداً عن التصاميم المعقدة</li>
                  <li>استخدام الألوان الجريئة والمميزة لتعزيز هوية العلامة التجارية</li>
                  <li>تصاميم تراعي التنوع الثقافي والجسدي لأفراد الطاقم</li>
                  <li>الجمع بين العناصر التقليدية والحديثة في نفس التصميم</li>
                  <li>زيادة الاهتمام بالراحة والعملية دون التضحية بالأناقة</li>
                </ul>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="اتجاهات حديثة في تصميم أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  أحدث اتجاهات تصميم أزياء الطيران تجمع بين الأناقة والراحة والهوية | المصدر: معرض الموضة العالمي للطيران
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                تميل التصاميم الحالية إلى اعتماد مبدأ "أقل هو أكثر"، مع التركيز على قصات نظيفة وأنيقة بدلاً من التفاصيل المبالغ فيها. كما نشهد اهتماماً متزايداً باختيار ألوان مميزة وجريئة تعكس هوية الشركة وتسهل تمييز طاقمها بين الجموع.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                أصبحت مراعاة التنوع الثقافي والجسدي أحد الاعتبارات المهمة في التصاميم الحديثة، مع توفير خيارات متعددة تناسب مختلف أفراد الطاقم، سواء من حيث الطول أو الحجم أو المتطلبات الدينية والثقافية.
              </p>
            </section>

            <section id="tech-innovations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الابتكارات التقنية في أقمشة وتصاميم الطيران</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أقمشة ذكية</h3>
                  <p className="mb-2 text-gray-700">تقنيات متطورة للراحة والأداء:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة تنظيم درجة الحرارة (Thermoregulating fabrics)</li>
                    <li>خامات مقاومة للماء والبقع مع الحفاظ على نفاذية الهواء</li>
                    <li>أقمشة مضادة للبكتيريا والروائح لرحلات الطيران الطويلة</li>
                    <li>مواد خفيفة الوزن فائقة المتانة لتحمل الاستخدام المكثف</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">ابتكارات في القصات والتصميم</h3>
                  <p className="mb-2 text-gray-700">حلول إبداعية للمشكلات العملية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قصات ديناميكية تسمح بحرية الحركة في المساحات الضيقة</li>
                    <li>تصاميم قابلة للتعديل تناسب مختلف درجات الحرارة</li>
                    <li>جيوب متعددة الوظائف مخفية بأناقة في التصميم</li>
                    <li>طبقات يمكن إضافتها أو إزالتها حسب احتياجات المهمة</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="ابتكارات تقنية في أقمشة الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  اختبارات الأقمشة التقنية المتطورة المستخدمة في صناعة أزياء الطيران | المصدر: معهد تكنولوجيا النسيج
                </div>
              </div>
            </section>

            <section id="cultural-influences" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التأثيرات الثقافية على أزياء الطيران</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تنوع ثقافي في سماء واحدة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">كيف تعكس أزياء الطيران الهوية الثقافية للمناطق المختلفة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">الشرق الأوسط:</span> تصاميم تجمع بين الأناقة والاحترام للتقاليد، مع استخدام عناصر من التراث المحلي في الأوشحة والإكسسوارات</li>
                    <li><span className="font-medium">جنوب شرق آسيا:</span> استلهام الألوان النابضة بالحياة والزخارف التقليدية، مع تركيز على الأقمشة المناسبة للمناخ الحار والرطب</li>
                    <li><span className="font-medium">أوروبا:</span> تفضيل القصات الكلاسيكية مع لمسات عصرية، والتركيز على الأناقة المحافظة والبساطة</li>
                    <li><span className="font-medium">أمريكا الشمالية:</span> تصاميم عملية مع التركيز على الراحة والتنوع، واستخدام ألوان قوية تعكس العلامة التجارية</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="التنوع الثقافي في أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  أزياء تعكس الهوية الثقافية في شركات الطيران حول العالم | المصدر: معرض التراث العالمي لأزياء الطيران
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                أصبحت شركات الطيران أكثر وعياً بأهمية عكس ثقافتها المحلية في تصاميم أزياء طاقمها، مما يخلق تجربة فريدة للمسافرين تبدأ من لحظة صعودهم إلى الطائرة. هذا التنوع الثقافي يضيف ثراءً إلى عالم الطيران، ويؤكد على الهوية المميزة لكل شركة.
              </p>
            </section>

            <section id="sustainability" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاستدامة في تصميم أزياء الطيران</h2>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">الاتجاه نحو مستقبل أكثر استدامة</h3>
                <p className="leading-7 text-gray-700">
                  مع تزايد الوعي البيئي العالمي، تتجه شركات الطيران نحو تبني ممارسات أكثر استدامة في تصميم وإنتاج أزياء طاقمها، من خلال استخدام مواد معاد تدويرها، وتقنيات إنتاج صديقة للبيئة، وتصاميم طويلة الأمد تقلل من الحاجة للتغيير المتكرر.
                </p>
                <div className="mt-4 bg-white p-4 rounded">
                  <h4 className="font-medium text-green-700 mb-2">مبادرات الاستدامة الرائدة:</h4>
                  <ul className="list-disc list-inside space-y-1 mr-3 text-gray-700">
                    <li>استخدام أقمشة مصنوعة من زجاجات البلاستيك المعاد تدويرها</li>
                    <li>اعتماد صباغة منخفضة استهلاك الماء والطاقة</li>
                    <li>تصميم ملابس قابلة للتحلل البيولوجي بعد انتهاء عمرها الافتراضي</li>
                    <li>إنشاء أنظمة لإعادة تدوير الأزياء القديمة ضمن دورة الإنتاج</li>
                  </ul>
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                تواجه شركات الطيران تحدياً في الموازنة بين متطلبات الاستدامة والحاجة إلى الأداء العالي والمتانة في أزياء الطاقم. ومع ذلك، أدت التطورات التكنولوجية الحديثة إلى ظهور حلول مبتكرة تحقق هذا التوازن، مما يسمح بتصميم أزياء تجمع بين المسؤولية البيئية والأداء المتميز.
              </p>
            </section>

            <section id="future-directions" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاتجاهات المستقبلية</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">ماذا يخبئ المستقبل لأزياء الطيران؟</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">توقعات الخبراء للسنوات القادمة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>دمج التكنولوجيا القابلة للارتداء في أزياء الطاقم لتحسين الأداء والسلامة</li>
                    <li>تصاميم قائمة على البيانات من خلال دراسة حركة الجسم وأنماط العمل</li>
                    <li>أقمشة ذكية تتفاعل مع الظروف البيئية وتغيرات درجة الحرارة</li>
                    <li>خدمات تخصيص الزي لكل فرد من أفراد الطاقم وفقاً لاحتياجاته الفردية</li>
                    <li>ابتكارات في مجال التعقيم الذاتي للملابس لمواجهة التحديات الصحية</li>
                  </ul>
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                يتجه المستقبل نحو إدماج التكنولوجيا بشكل أكبر في أزياء الطيران، مع التركيز على الحلول المخصصة والتفاعلية. ومع تطور تقنيات الذكاء الاصطناعي والتصنيع المتقدم، ستصبح أزياء الطاقم أكثر ذكاءً وكفاءة، مما يساهم في تحسين تجربة كل من الطاقم والمسافرين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                كما نتوقع أن نشهد تعاوناً أكبر بين شركات الطيران ومصممي الأزياء العالميين، والمهندسين، وخبراء المواد، لابتكار الجيل القادم من أزياء الطيران التي تجمع بين الأناقة والعملية والاستدامة والتكنولوجيا المتقدمة.
              </p>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يشهد مجال تصميم ملابس طاقم الطائرة تحولاً مستمراً، يتأثر بعوامل متعددة تجمع بين الجمال والعملية والهوية والتكنولوجيا والاستدامة. وفي حين تتغير التفاصيل والاتجاهات، يظل الهدف الأساسي ثابتاً: توفير زي يجمع بين الأناقة والراحة، ويعكس هوية شركة الطيران، ويسهم في تجربة سفر متميزة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                مع التقدم التكنولوجي المستمر وتطور احتياجات الطاقم والمسافرين، سيظل هذا المجال ساحة خصبة للابتكار والإبداع، تجمع بين تقاليد عريقة ورؤى مستقبلية طموحة، لتكتب فصلاً جديداً في قصة العلاقة بين الموضة والطيران.
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