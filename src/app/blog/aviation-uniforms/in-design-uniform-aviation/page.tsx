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
  title: 'تصميم الزي الموحد في الطيران',
  description: 'استكشاف أحدث التوجهات والابتكارات في عالم تصميم أزياء الطيران والمضيفين على مستوى العالم والمنطقة',
};

export default function ArticlePage() {
  const imageSrc = '/images/aviation-uniforms/flight_crew_uniform_design.jpeg';
  const title = 'تصميم الزي الموحد في الطيران';
  const readingTime = '١١ دقائق';
  const datePublished = '١٢ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة حول الابتكار في أزياء الطيران' },
    { id: 'historical-evolution', title: 'التطور التاريخي للابتكار في أزياء الطيران' },
    { id: 'fabric-innovations', title: 'أحدث الابتكارات في الأقمشة والخامات' },
    { id: 'design-innovations', title: 'الابتكار في التصميم والهوية البصرية' },
  ];

  const relatedArticles = [
    {
      title: "تصميم أزياء الطيران في المملكة العربية السعودية",
      description: "نظرة شاملة على عالم تصميم أزياء الطيران في المملكة وكيف تجمع بين الهوية الوطنية والمعايير العالمية",
      image: "/images/flight_crew/flight_crew_uniforms_riyadh.jpg",
      url: "/blog/aviation-uniforms/in-design-uniform-aviation-Saudi",
      date: "٥ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "أساسيات تصميم أزياء الطيران",
      description: "دليل شامل للمبادئ والأسس المهمة في تصميم أزياء الطيران",
      image: "/images/flight_crew/aviation_design_basics.jpg",
      url: "/blog/aviation-uniforms/aviation",
      date: "٧ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة",
      description: "دليل شامل لاختيار أفضل أنواع الأقمشة المستخدمة في صناعة أزياء طاقم الطائرة",
      image: "/images/flight_crew/cabin_crew_fabrics.jpg",
      url: "/blog/aviation-uniforms/cabin-crew-uniform-fabric-selection",
      date: "١٥ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    }
  ];

  const tags = ["ابتكار في أزياء الطيران", "تصاميم مبتكرة", "تكنولوجيا الأزياء", "اتجاهات حديثة", "مستقبل أزياء الطيران"];

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
                  <Link href="/blog/aviation-uniforms/in-design-uniform-aviation-Saudi" className="text-sm hover:text-blue-600 block">
                    تصميم أزياء الطيران في المملكة العربية السعودية
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/aviation" className="text-sm hover:text-blue-600 block">
                    أساسيات تصميم أزياء الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/cabin-crew-uniform-fabric-selection" className="text-sm hover:text-blue-600 block">
                    اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة حول الابتكار في أزياء الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700 font-medium">
          يشهد عالم تصميم أزياء الطيران تطوراً مستمراً، مدفوعاً بالتقنيات الجديدة والتوجهات العالمية في عالم الموضة والمتطلبات العملية المتغيرة. أصبح الابتكار ضرورة وليس مجرد خيار لشركات الطيران التي تسعى للتميز والبقاء في سوق تنافسية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
          في هذا المقال، نستكشف أحدث الابتكارات والتوجهات في مجال تصميم أزياء الطيران، ونلقي الضوء على كيفية مساهمة هذه الابتكارات في تحسين تجربة الطاقم والمسافرين على حد سواء.
              </p>
            </section>

            <section id="historical-evolution">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التطور التاريخي للابتكار في أزياء الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
          لفهم الابتكارات الحالية، من المهم إلقاء نظرة على التطور التاريخي لأزياء الطيران، والذي يعكس التغيرات في صناعة الطيران نفسها.
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مراحل تطور أزياء الطيران</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-bold">ثلاثينيات وأربعينيات القرن العشرين: البدايات العسكرية</span> - استلهمت التصاميم الأولى عناصر من الزي العسكري، مع التركيز على السلطة والرسمية.</li>
                  <li><span className="font-bold">خمسينيات وستينيات القرن العشرين: العصر الذهبي</span> - تأثرت الأزياء بتوجهات الموضة العالمية، مع تصاميم أنثوية للمضيفات وبدلات رسمية للطيارين.</li>
                  <li><span className="font-bold">سبعينيات وثمانينيات القرن العشرين: الثورة العملية</span> - شهدت هذه الفترة تحولاً نحو الراحة والعملية، مع تصاميم أكثر تحرراً وألوان زاهية.</li>
                  <li><span className="font-bold">تسعينيات القرن العشرين وبداية الألفية الثالثة: التفرد والهوية</span> - بدأت شركات الطيران في استخدام الأزياء كأداة للتسويق والتمييز، مع تصاميم تعكس ثقافات وهويات مختلفة.</li>
                  <li><span className="font-bold">العصر الحالي: الابتكار والاستدامة</span> - أصبح التركيز منصباً على الابتكار التقني والاستدامة والشمولية في التصميم.</li>
                </ul>
              </div>
        
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation-uniforms/uniform_evolution.jpg"
          alt="تطور أزياء الطيران عبر العصور"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  مراحل تطور أزياء الطيران من الثلاثينيات إلى يومنا هذا | المصدر: أرشيف تاريخ الطيران العالمي
                </div>
              </div>
            </section>

            <section id="fabric-innovations">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أحدث الابتكارات في الأقمشة والخامات</h2>
              <p className="mb-4 leading-7 text-gray-700">
          شهدت تكنولوجيا الأقمشة والخامات تطوراً هائلاً في السنوات الأخيرة، مما أتاح ابتكارات غير مسبوقة في تصميم أزياء الطيران.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تقنيات متطورة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">الأقمشة الذكية</span> - تنظيم درجة حرارة الجسم والتكيف مع البيئة المحيطة</li>
                    <li><span className="font-medium">تقنيات النانو</span> - مقاومة البقع والروائح والبكتيريا</li>
                    <li><span className="font-medium">المواد المركبة خفيفة الوزن</span> - متانة فائقة مع وزن مخفض</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المرونة والاستدامة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">الأقمشة القابلة للتمدد ثلاثي الأبعاد</span> - حرية حركة غير مسبوقة</li>
                    <li><span className="font-medium">خامات معاد تدويرها</span> - من الزجاجات البلاستيكية وشباك الصيد</li>
                    <li><span className="font-medium">أقمشة منخفضة الاستهلاك</span> - تقليل استهلاك المياه والطاقة</li>
                  </ul>
                </div>
              </div>
        
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg mb-6 border-r-4 border-blue-500">
                <p className="italic text-gray-700">
          "نشهد ثورة حقيقية في عالم الأقمشة التقنية، حيث أصبح بإمكاننا الآن تصميم قماش يستجيب للظروف المحيطة ويوفر خصائص وظيفية متعددة، مما يمثل نقلة نوعية في عالم أزياء الطيران التي تتطلب أداءً عالياً في ظروف متنوعة."
                </p>
                <p className="text-sm text-gray-600 mt-2 font-medium">- د. سارة الخالدي، خبيرة في تكنولوجيا الأقمشة التقنية</p>
              </div>
            </section>

            <section id="design-innovations">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الابتكار في التصميم والهوية البصرية</h2>
              <p className="mb-4 leading-7 text-gray-700">
          لا يقتصر الابتكار على الخامات فقط، بل يمتد ليشمل جوانب التصميم والهوية البصرية التي تميز شركات الطيران.
              </p>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الاتجاهات الحديثة في التصميم</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">التصاميم المعيارية القابلة للتخصيص</span> - خيارات شخصية ضمن نطاق معياري</li>
                    <li><span className="font-medium">التعاون مع مصممي الأزياء العالميين</span> - مزج الأناقة مع الوظيفية</li>
                    <li><span className="font-medium">دمج عناصر التراث الثقافي</span> - تعزيز الهوية الفريدة لشركة الطيران</li>
                    <li><span className="font-medium">التصميم الشامل</span> - مراعاة تنوع الأجسام والاحتياجات الخاصة</li>
                    <li><span className="font-medium">التكامل مع الهوية البصرية الشاملة</span> - تناغم مع جميع عناصر هوية الشركة</li>
                  </ul>
                </div>
              </div>
        
              <div className="bg-blue-50 p-6 rounded-lg mb-6 border border-blue-200">
                <h3 className="text-xl font-medium mb-3 text-blue-800">دراسة حالة</h3>
                <p className="mb-4 leading-7 text-gray-700">
            قامت إحدى شركات الطيران الخليجية الرائدة بالتعاون مع مصمم أزياء عالمي ومصمم محلي لابتكار زي يجمع بين العناصر التقليدية والحداثة، مستخدمة تقنيات نسيج متطورة وألوان مستوحاة من التراث المحلي. حققت هذه المبادرة نجاحاً كبيراً وأصبحت الأزياء عنصراً رئيسياً في هوية الشركة وحملاتها التسويقية.
                </p>
              </div>
            </section>
            
            <section id="conclusion">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل الابتكار في تصميم أزياء الطيران تلاقياً فريداً بين عالم الموضة والتكنولوجيا والوظيفية. ومع استمرار تطور صناعة الطيران، ستظل الحاجة إلى التجديد والابتكار في الأزياء قائمة، مع التركيز المتزايد على الاستدامة والشمولية والتكيف مع المتغيرات المستقبلية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                تُظهر التوجهات الحالية أن مستقبل أزياء الطيران سيكون أكثر تخصيصاً، وأكثر ذكاءً، وأكثر استدامة، مما يعكس تطور صناعة الطيران نفسها والقيم المجتمعية المتغيرة.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
} 