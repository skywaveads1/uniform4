import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
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
  title: 'أساسيات تصميم أزياء الطيران: دليل شامل للمبادئ والأسس',
  description: 'تعرف على المبادئ الأساسية والاعتبارات المهمة في تصميم أزياء الطيران وكيفية تطبيقها بطريقة احترافية',
};

export default function Page() {
  const imageSrc = '/images/flight_crew/flight_crew_uniform_design.jpeg';
  const title = 'أساسيات تصميم أزياء الطيران: دليل شامل للمبادئ والأسس';
  const readingTime = '١٤ دقيقة للقراءة';
  const datePublished = '٧ مايو ٢٠٢٤';

  const relatedArticles = [
    {
      title: "تصميم أزياء الطيران في المملكة العربية السعودية",
      description: "نظرة شاملة على عالم تصميم أزياء الطيران في المملكة وكيف تجمع بين الهوية الوطنية والمعايير العالمية",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/aviation-uniforms/in-design-uniform-aviation-Saudi",
      date: "٥ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "اعتبارات تصميم زي شركات الطيران",
      description: "استعراض لأهم الاعتبارات التي يجب مراعاتها عند تصميم زي موظفي شركات الطيران",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/aviation-uniforms/airline-uniform-design-considerations",
      date: "١٠ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة",
      description: "دليل شامل لاختيار أفضل أنواع الأقمشة المستخدمة في صناعة أزياء طاقم الطائرة",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/aviation-uniforms/cabin-crew-uniform-fabric-selection",
      date: "١٥ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    }
  ];

  const tags = ["تصميم أزياء الطيران", "مبادئ تصميم الأزياء", "معايير زي الطيران", "أساسيات الزي الموحد", "تصميم زي الطاقم"];
  
  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة في أساسيات تصميم أزياء الطيران' },
    { id: 'importance', title: 'أهمية تصميم أزياء الطيران' },
    { id: 'basic-principles', title: 'المبادئ الأساسية في تصميم أزياء الطيران' },
    { id: 'functional-considerations', title: 'الاعتبارات الوظيفية في تصميم أزياء الطيران' },
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
                {relatedArticles.map((article, index) => (
                  <li key={index}>
                    <Link href={article.url} className="text-sm hover:text-blue-600 block">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة في أساسيات تصميم أزياء الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعد تصميم أزياء الطيران أحد المجالات المتخصصة في عالم الأزياء، حيث يجمع بين الوظيفة العملية والجمالية في آن واحد. تمثل هذه الأزياء واجهة شركات الطيران وهويتها المرئية، فضلاً عن كونها أداة عمل أساسية للطاقم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنستعرض المبادئ والأسس الأساسية في تصميم أزياء الطيران، ونقدم دليلاً شاملاً للمصممين والمهتمين بهذا المجال المتخصص.
              </p>
            </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية تصميم أزياء الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تتجاوز أهمية تصميم أزياء الطيران مجرد المظهر الجمالي، لتشمل جوانب متعددة ذات تأثير مباشر على عمليات شركات الطيران وصورتها العامة.
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">أهمية التصميم الاحترافي</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">تعزيز الهوية المؤسسية:</span> تمثل أزياء الطيران امتداداً بصرياً لهوية شركة الطيران، وتساهم في ترسيخ صورتها المميزة والتعريف بها.</li>
                  <li><span className="font-medium">الوظيفية والراحة:</span> ينبغي أن تلبي الأزياء احتياجات الطاقم العملية وتوفر لهم الراحة خلال ساعات العمل الطويلة.</li>
                  <li><span className="font-medium">الانطباع الأول:</span> تشكل أزياء الطاقم أول ما يراه المسافر ويتفاعل معه، مما يؤثر على انطباعه العام عن جودة الخدمة.</li>
                  <li><span className="font-medium">التمييز التنافسي:</span> تساعد التصاميم المميزة في تمييز شركة الطيران عن منافسيها في سوق تنافسية.</li>
                </ul>
              </div>
              
              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="دور أزياء الطيران في تعزيز الهوية المؤسسية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  دور أزياء الطيران في تعزيز الهوية المؤسسية والتمييز التنافسي
                </div>
              </div>
            </section>

            <section id="basic-principles" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المبادئ الأساسية في تصميم أزياء الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يستند تصميم أزياء الطيران إلى مجموعة من المبادئ التي تضمن تحقيق التوازن بين المتطلبات المختلفة.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مبادئ التصميم الأساسية</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">الوظيفية:</span> ملائمة الزي لطبيعة عمل كل فئة من طاقم الطائرة</li>
                  <li><span className="font-medium">الراحة:</span> تصميم يسمح بالحركة السلسة والارتداء لساعات طويلة</li>
                  <li><span className="font-medium">الجمالية:</span> مظهر أنيق وجذاب يعكس هوية الشركة</li>
                  <li><span className="font-medium">الاستدامة:</span> تصميم يتحمل الاستخدام المتكرر مع الحفاظ على جودته</li>
                  <li><span className="font-medium">الاتساق:</span> تناغم بين مختلف عناصر الزي ومكوناته</li>
                  <li><span className="font-medium">الشمولية:</span> تصاميم تناسب مختلف أشكال الجسم والأعمار</li>
                </ul>
              </div>
              
              <p className="mb-4 leading-7 text-gray-700">
                تتطلب هذه المبادئ فهماً عميقاً لطبيعة العمل في مجال الطيران، والتحديات اليومية التي يواجهها الطاقم، فضلاً عن متطلبات الراحة في بيئات العمل المختلفة.
              </p>
            </section>

            <section id="functional-considerations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات الوظيفية في تصميم أزياء الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعد الجانب الوظيفي أحد أهم الاعتبارات في تصميم أزياء الطيران، حيث يتعين على هذه الأزياء تلبية احتياجات محددة تفرضها طبيعة العمل.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">متطلبات وظيفية أساسية</h3>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">حرية الحركة:</span> تتطلب مهام طاقم الطائرة حركة مستمرة ومرونة في الأداء</li>
                    <li><span className="font-medium">التكيف مع تقلبات الحرارة:</span> التنقل بين بيئات متفاوتة في درجات الحرارة</li>
                    <li><span className="font-medium">سهولة الارتداء والخلع:</span> خاصة في حالات الطوارئ</li>
                    <li><span className="font-medium">تصميم الجيوب والإكسسوارات:</span> لحمل الأدوات الضرورية</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التمييز الوظيفي</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">تمييز الرتب:</span> عناصر تميز بين مختلف رتب وأدوار الطاقم</li>
                    <li><span className="font-medium">شارات وعلامات:</span> لتحديد المسؤوليات والتخصصات</li>
                    <li><span className="font-medium">ألوان وظيفية:</span> استخدام ألوان محددة لوظائف معينة</li>
                    <li><span className="font-medium">عناصر تمييزية:</span> أشرطة، شعارات، وعناصر أخرى مميزة</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">نصيحة للمصممين</h3>
                <p className="mb-2 text-gray-700">
                  أجري مقابلات مع أفراد طاقم الطائرة من مختلف الرتب والأدوار لفهم احتياجاتهم اليومية والتحديات التي يواجهونها، واستخدم هذه المعلومات لتطوير تصاميم تلبي احتياجاتهم الفعلية.
                </p>
              </div>
              
              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="الجوانب الوظيفية في تصميم أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تصميم أزياء الطيران يراعي الجوانب الوظيفية والعملية في بيئة العمل
                </div>
              </div>
            </section>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
              <h2 className="text-xl font-semibold mb-3">الكلمات المفتاحية</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-10 pt-6">
              <h2 className="text-xl font-semibold mb-4">مقالات ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((article, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 text-blue-900 hover:text-blue-700">
                        <Link href={article.url}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                      <p className="text-sm text-gray-700 line-clamp-2">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 