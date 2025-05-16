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
  title: 'تأثير طاقم الطيران على الزي الموحد',
  description: 'دراسة تحليلية حول تأثير احتياجات وملاحظات طاقم الطيران على تطوير وتصميم الزي الموحد، وأهمية مشاركتهم في عملية التصميم',
};

// صورة الهيدر للمقال
const heroImage = '/images/aviation_uniforms/header_airline_uniform.jpeg';

export default function ArticlePage() {
  const imageSrc = '/images/aviation_uniforms/crew_aviation_on_uniform.jpeg';
  const title = 'تأثير زي الطاقم الجوي على تجربة الركاب وصورة الناقل الجوي';
  const readingTime = '9 دقائق للقراءة';
  const datePublished = '١٧ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة حول اعتبارات تصميم زي شركات الطيران' },
    { id: 'functional-considerations', title: 'الاعتبارات الوظيفية والعملية' },
    { id: 'identity-considerations', title: 'اعتبارات الهوية المؤسسية والتمييز البصري' },
    { id: 'cultural-considerations', title: 'الاعتبارات الثقافية والاجتماعية' },
    { id: 'quality-considerations', title: 'اعتبارات الجودة والمتانة' },
  ];

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
      title: "الابتكار في تصميم أزياء الطيران",
      description: "استكشاف أحدث التوجهات والابتكارات في عالم تصميم أزياء الطيران",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/aviation-uniforms/in-design-uniform-aviation",
      date: "١٢ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "زي الطيران وهوية الشركة المؤسسية",
      description: "تأثير تصميم زي طاقم الطيران على هوية الشركة المؤسسية وانطباع العملاء",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/aviation-uniforms/airline-corporate-identity-uniforms",
      date: "٢٠ مايو ٢٠٢٤",
      category: "أزياء الطيران"
    }
  ];

  const tags = ["تصميم زي شركات الطيران", "اعتبارات التصميم", "زي الطيران", "يونيفورم طاقم الطائرة", "معايير زي المضيفين"];

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
                  <Link href="/blog/aviation-uniforms/in-design-uniform-aviation" className="text-sm hover:text-blue-600 block">
                    الابتكار في تصميم أزياء الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/airline-corporate-identity-uniforms" className="text-sm hover:text-blue-600 block">
                    زي الطيران وهوية الشركة المؤسسية
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة حول اعتبارات تصميم زي شركات الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700 font-medium">
                يُعد تصميم زي طاقم شركات الطيران أحد أكثر مشاريع الأزياء الموحدة تعقيداً، إذ يتطلب التوفيق بين متطلبات متعددة ومعايير مختلفة. يمثل هذا الزي واجهة الشركة وأول انطباع للمسافرين، كما أنه أداة عمل يومية للطاقم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض أهم الاعتبارات التي يجب مراعاتها عند تصميم زي طاقم شركات الطيران، من المتطلبات الوظيفية إلى الجوانب الجمالية والهوية المؤسسية.
              </p>
            </section>

            <section id="functional-considerations">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات الوظيفية والعملية</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تُعد الجوانب الوظيفية والعملية من أهم الاعتبارات في تصميم زي شركات الطيران، نظراً لطبيعة العمل الخاصة في هذا المجال.
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الاعتبارات العملية الأساسية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-bold">الراحة خلال ساعات العمل الطويلة</span> - يعمل طاقم الطائرة لساعات طويلة ومتواصلة، مما يتطلب زياً مريحاً لا يسبب ضغطاً أو إجهاداً إضافياً.</li>
                  <li><span className="font-bold">حرية الحركة</span> - يتطلب العمل على متن الطائرة حركة مستمرة وأوضاعاً مختلفة، مما يستدعي تصميماً يسمح بحرية الحركة دون قيود.</li>
                  <li><span className="font-bold">ملاءمة البيئة المتغيرة</span> - التكيف مع بيئات مختلفة في درجات الحرارة، من المطارات الحارة إلى المقصورات المكيفة.</li>
                  <li><span className="font-bold">سهولة العناية والتنظيف</span> - مع جداول السفر المزدحمة، الزي يحتاج إلى سهولة العناية والتنظيف مع الحفاظ على المظهر الأنيق.</li>
                  <li><span className="font-bold">متطلبات السلامة</span> - يجب أن يلبي الزي متطلبات السلامة في حالات الطوارئ، مثل مقاومة الاشتعال وعدم إعاقة الحركة.</li>
                </ul>
              </div>
              
              <div className="border-r-4 border-green-500 bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">نصيحة تصميمية</h3>
                <p className="text-gray-700">
                  عند تصميم زي طاقم الطائرة، من المفيد إجراء "اختبار يوم عمل كامل" حيث يرتدي أفراد من الطاقم النماذج الأولية للزي خلال يوم عمل كامل ويقدمون ملاحظات تفصيلية عن الراحة والوظيفية، مما يساعد في تحسين التصميم قبل الإنتاج النهائي.
                </p>
              </div>
            </section>

            <section id="identity-considerations">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اعتبارات الهوية المؤسسية والتمييز البصري</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل زي طاقم الطائرة امتداداً بصرياً لهوية شركة الطيران، ويلعب دوراً محورياً في ترسيخ صورتها وتمييزها عن المنافسين.
              </p>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">عناصر الهوية المؤسسية في الزي</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">الالتزام بألوان العلامة التجارية</span> - استخدام ألوان تتوافق مع هوية الشركة البصرية</li>
                    <li><span className="font-medium">دمج عناصر الهوية المميزة</span> - تضمين شعار الشركة وعناصر هويتها البصرية بطريقة أنيقة</li>
                    <li><span className="font-medium">التمييز البصري</span> - ابتكار عناصر تصميمية مميزة للتعرف الفوري على طاقم الشركة</li>
                    <li><span className="font-medium">التوازن بين التقليد والحداثة</span> - موازنة بين احترام تراث الشركة وتقديم تصميم عصري</li>
                    <li><span className="font-medium">تمييز الرتب والأدوار</span> - عناصر تميز بين مختلف مستويات ووظائف الطاقم</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="عناصر الهوية في زي الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  أمثلة على كيفية دمج عناصر الهوية المؤسسية في تصميم زي طاقم الطائرة | المصدر: مجلة تصميم الزي الموحد العالمية
                </div>
              </div>
            </section>

            <section id="cultural-considerations">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات الثقافية والاجتماعية</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تعمل شركات الطيران في بيئة عالمية متنوعة ثقافياً، مما يستدعي مراعاة اعتبارات ثقافية واجتماعية متعددة في تصميم الزي.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">القيم المحلية والعالمية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">احترام القيم المحلية</span> - مراعاة قيم وتقاليد البلد الأم للشركة</li>
                    <li><span className="font-medium">التعبير عن التراث الثقافي</span> - تضمين عناصر من التراث الثقافي</li>
                    <li><span className="font-medium">مراعاة تأثيرات العولمة</span> - التوازن بين المحلية والعالمية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التنوع والشمولية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">شمولية التصميم</span> - مراعاة تنوع الطاقم من حيث الخلفيات</li>
                    <li><span className="font-medium">تقديم خيارات متنوعة</span> - خيارات للحجاب، للتنانير أو البناطيل</li>
                    <li><span className="font-medium">مراعاة الاحتياجات الخاصة</span> - تصاميم مناسبة لمختلف الأجسام</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg mb-6 border-r-4 border-blue-500">
                <p className="italic text-gray-700">
                  "تصميم زي شركات الطيران في المنطقة العربية يمثل تحدياً إبداعياً فريداً، إذ يتطلب الموازنة بين القيم المحلية والمعايير العالمية، وبين الأصالة والمعاصرة. نجاح التصميم يكمن في قدرته على التعبير عن الهوية المحلية مع تلبية المتطلبات العملية للعمل على متن الطائرات."
                </p>
                <p className="text-sm text-gray-600 mt-2 font-medium">- سمية العنزي، مصممة أزياء متخصصة في الزي الموحد</p>
              </div>
            </section>

            <section id="quality-considerations">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اعتبارات الجودة والمتانة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل جودة ومتانة الزي عاملاً حاسماً في نجاح التصميم، نظراً للاستخدام المكثف والمتكرر.
              </p>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-4 text-blue-800 border-b pb-2">مؤشرات جودة زي الطيران</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">1</span>
                    <div>
                      <span className="font-bold text-gray-800">متانة الخياطة والتفاصيل:</span>
                      <span className="text-gray-700"> قدرة الزي على تحمل الاستخدام المتكرر والغسيل المستمر</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">2</span>
                    <div>
                      <span className="font-bold text-gray-800">ثبات الألوان:</span>
                      <span className="text-gray-700"> مقاومة الألوان للتلاشي مع مرور الوقت والتعرض للضوء والغسيل</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">3</span>
                    <div>
                      <span className="font-bold text-gray-800">جودة الإكسسوارات:</span>
                      <span className="text-gray-700"> متانة الأزرار والسحابات والإكسسوارات الأخرى</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">4</span>
                    <div>
                      <span className="font-bold text-gray-800">دقة المقاسات:</span>
                      <span className="text-gray-700"> توافر مقاسات دقيقة ومناسبة لمختلف أشكال الجسم</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">5</span>
                    <div>
                      <span className="font-bold text-gray-800">اتساق الإنتاج:</span>
                      <span className="text-gray-700"> ضمان التماثل في الجودة بين جميع قطع الزي المنتجة</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">6</span>
                    <div>
                      <span className="font-bold text-gray-800">سهولة الإصلاح والاستبدال:</span>
                      <span className="text-gray-700"> إمكانية إصلاح أو استبدال أجزاء من الزي بسهولة عند الحاجة</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <p className="mb-4 leading-7 text-gray-700">
                تستثمر شركات الطيران الرائدة في اختبارات مكثفة للجودة قبل اعتماد التصميم النهائي، لضمان قدرة الزي على تحمل ظروف العمل القاسية والحفاظ على مظهره الأنيق.
              </p>
            </section>
            
            <section id="conclusion">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يتطلب تصميم زي طاقم الطيران نهجاً متوازناً يجمع بين الاعتبارات الوظيفية والجمالية والثقافية والمؤسسية. كما يستدعي تعاوناً وثيقاً بين المصممين وإدارة الشركة وأفراد الطاقم أنفسهم، لضمان تصميم يلبي احتياجات جميع الأطراف ويحقق الأهداف المرجوة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                النجاح في هذا المجال لا يقاس فقط بالمظهر الجمالي، بل بقدرة الزي على دعم أداء الطاقم وتعزيز هوية الشركة وتحقيق رضا جميع المعنيين، مع صمود التصميم أمام اختبار الزمن والاستخدام اليومي.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
} 