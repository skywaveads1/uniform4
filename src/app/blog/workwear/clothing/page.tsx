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
  title: 'ملابس العمل: أنواعها ومواصفاتها وأهميتها في بيئة العمل',
  description: 'دليل شامل حول أنواع ملابس العمل المختلفة ومواصفاتها وفوائدها في تحسين بيئة العمل وزيادة الإنتاجية',
};

export default function WorkwearClothing() {
  const imageSrc = '/images/workwear/workwear_2.jpeg';
  const title = 'ملابس العمل: أنواعها ومواصفاتها وأهميتها';
  const readingTime = '٨ دقائق للقراءة';
  const datePublished = '٨ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية ملابس العمل في بيئة العمل المهنية' },
    { id: 'types', title: 'أنواع ملابس العمل ومواصفاتها' },
    { id: 'standards', title: 'المعايير العالمية لملابس العمل' },
    { id: 'selection', title: 'إرشادات لاختيار ملابس العمل المناسبة' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const tags = ["ملابس العمل", "الزي الموحد", "المعايير المهنية", "السلامة المهنية", "أنواع ملابس العمل"];

  const relatedArticles = [
    {
      title: "كيفية اختيار ملابس العمل المناسبة",
      description: "دليل شامل لاختيار ملابس العمل المناسبة للمهن المختلفة مع مراعاة عوامل السلامة والراحة",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/how-to-choosing",
      date: "١٠ مايو ٢٠٢٤"
    },
    {
      title: "العناية بملابس العمل وأثرها على الصحة المهنية",
      description: "دليل شامل حول كيفية العناية بملابس العمل للحفاظ على جودتها وتأثير ذلك على صحة وسلامة الموظفين",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/clothing-maintenance-work-health",
      date: "١ مايو ٢٠٢٤"
    },
    {
      title: "تصميم وصيانة الزي الموحد للشركات",
      description: "دليل متكامل حول كيفية تصميم الزي الموحد للشركات وطرق صيانته للحفاظ على مظهره الاحترافي",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/design-uniform-maintenance",
      date: "١٥ مايو ٢٠٢٤"
    }
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
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">الوسوم</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تُعد ملابس العمل من أهم العناصر التي تُميز بيئة العمل المهنية والمنظمة، فهي ليست مجرد قطع ملبسية، بل هي جزء أساسي من منظومة السلامة المهنية والهوية المؤسسية. تختلف ملابس العمل باختلاف طبيعة المهنة والقطاع، ولكنها جميعًا تشترك في هدف أساسي: توفير الحماية والراحة والكفاءة للعاملين أثناء أداء مهامهم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
          في هذا المقال، سنستعرض أنواع ملابس العمل المختلفة ومواصفاتها وأهميتها في تحسين بيئة العمل وزيادة الإنتاجية، مع تقديم إرشادات حول اختيار الملابس المناسبة لكل قطاع مهني.
              </p>
            </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية ملابس العمل في بيئة العمل المهنية</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تتجاوز أهمية ملابس العمل المظهر الخارجي لتشمل جوانب متعددة تؤثر بشكل مباشر على بيئة العمل:
              </p>
              
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <ul className="list-disc list-inside space-y-4 mr-5 text-gray-700">
                  <li>
                    <strong>السلامة والحماية:</strong> توفر ملابس العمل المتخصصة الحماية اللازمة من المخاطر المهنية المختلفة مثل الحرارة، المواد الكيميائية، الإشعاعات، والأجسام الحادة. وفقًا للإحصائيات، تقلل ملابس العمل المناسبة إصابات العمل بنسبة تتراوح بين 20% إلى 40%.
                  </li>
                  <li>
                    <strong>الهوية المؤسسية:</strong> تعزز ملابس العمل الموحدة الشعور بالانتماء للمؤسسة وتعكس هويتها وقيمها، مما يساهم في بناء صورة احترافية متماسكة أمام العملاء والشركاء.
                  </li>
                  <li>
                    <strong>الكفاءة والإنتاجية:</strong> تصمم ملابس العمل المتخصصة لتوفير الراحة والمرونة اللازمة لأداء المهام بكفاءة، مما ينعكس إيجابًا على الإنتاجية. أشارت دراسات إلى أن الملابس المريحة والمناسبة للعمل تزيد الإنتاجية بنسبة تصل إلى 15%.
                  </li>
                  <li>
                    <strong>المساواة والانضباط:</strong> تساهم الملابس الموحدة في تقليل الفوارق الاجتماعية والمظهرية بين الموظفين، وتعزز الانضباط وروح الفريق في بيئة العمل.
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
        src="/images/workwear/workwear_maintenance.jpeg"
        alt="أهمية ملابس العمل في بيئة العمل"
                  fill
                  style={{ objectFit: 'cover' }}
      />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  ملابس العمل المناسبة تحسن السلامة والإنتاجية والهوية المؤسسية
                </div>
              </div>
            </section>

            <section id="types" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أنواع ملابس العمل ومواصفاتها</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تتنوع ملابس العمل بتنوع القطاعات المهنية والمتطلبات الوظيفية. فيما يلي أبرز الأنواع ومواصفاتها:
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">ملابس القطاعات الصناعية والإنشائية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>بدلات السلامة:</strong> تصنع من مواد متينة مقاومة للتمزق والاحتكاك، مع تعزيزات في مناطق الضغط مثل الركبتين والكوعين. تتضمن عادة شرائط عاكسة وجيوب متعددة لحمل الأدوات.
                  </li>
                  <li>
                    <strong>ملابس مقاومة للحريق:</strong> مصنوعة من ألياف خاصة مثل Nomex و Kevlar، مصممة لمقاومة اللهب وحماية العمال في البيئات التي تتضمن مخاطر الحريق مثل مصافي النفط ومحطات الطاقة.
                  </li>
                  <li>
                    <strong>ملابس العزل الكهربائي:</strong> مصممة لحماية الفنيين والكهربائيين من مخاطر الصعق الكهربائي، تصنع من مواد عازلة وتخضع لمعايير صارمة مثل ASTM F1506 و IEC 61482.
                  </li>
                  <li>
                    <strong>ملابس مقاومة للمواد الكيميائية:</strong> مصنوعة من مواد خاصة مثل Tychem وPVC، تقدم حماية ضد تسرب المواد الكيميائية السائلة والغازية، وتستخدم في المختبرات والمصانع الكيميائية.
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">ملابس القطاعات الطبية والصحية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>الزي الطبي (Scrubs):</strong> مصنوع من أقمشة قطنية أو مزيج من الألياف الصناعية والقطن، سهلة الغسيل والتعقيم، مريحة وفضفاضة لتسهيل الحركة.
                  </li>
                  <li>
                    <strong>المعاطف البيضاء:</strong> رمز للمهنية في القطاع الطبي، مصنوعة من القطن أو البوليستر، تتميز بمقاومتها للبقع وسهولة تنظيفها.
                  </li>
                  <li>
                    <strong>ملابس غرف العمليات:</strong> تخضع لأعلى معايير التعقيم، مصممة لمنع انتقال العدوى، وتشمل أغطية الرأس والأقنعة والقفازات.
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">ملابس قطاع الضيافة والخدمات</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>زي الفنادق والمطاعم:</strong> يركز على الأناقة والمظهر المهني، مع مراعاة الراحة للعمل لساعات طويلة. يتضمن عادة قمصانًا وسراويل أو تنانير بألوان تعكس هوية المؤسسة.
                  </li>
                  <li>
                    <strong>زي الطهاة:</strong> مصمم للحماية من الحرارة والسوائل، يتكون عادة من سترة بيضاء مزدوجة الصدر، سروال مخطط، وقبعة الطهاة التقليدية.
                  </li>
                  <li>
                    <strong>زي عمال النظافة:</strong> يركز على المتانة وسهولة الحركة، مع مقاومة البقع والأوساخ، غالبًا ما يتضمن مريلة أو سترة عملية بجيوب متعددة.
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mb-10 border-r-4 border-gray-400">
                <blockquote className="italic text-gray-700">
        ملابس العمل ليست مجرد زي، بل هي استثمار في سلامة العاملين وهوية المؤسسة وكفاءة الإنتاج.
                  <footer className="text-sm mt-2 text-gray-600">- فريق يونيفورم</footer>
                </blockquote>
              </div>
            </section>

            <section id="standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المعايير العالمية لملابس العمل</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تخضع ملابس العمل، خاصة في القطاعات عالية المخاطر، لمعايير عالمية صارمة تضمن جودتها وفعاليتها في توفير الحماية اللازمة:
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">معايير السلامة العالمية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>ISO 11612: معيار خاص بملابس الحماية من الحرارة واللهب</li>
                  <li>EN 471: معيار خاص بملابس العمل عالية الوضوح</li>
                  <li>NFPA 2112: معيار الجمعية الوطنية الأمريكية للحماية من الحرائق</li>
                  <li>ASTM F1506: معيار خاص بالملابس الواقية من القوس الكهربائي</li>
                </ul>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
          يجب على الشركات التأكد من أن ملابس العمل التي توفرها لموظفيها تلبي المعايير المناسبة للمخاطر المحددة في بيئة العمل. استشارة متخصصين في السلامة المهنية وملابس العمل يمكن أن يساعد في اختيار الملابس المناسبة التي تلبي هذه المعايير.
              </p>
            </section>

            <section id="selection" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">إرشادات لاختيار ملابس العمل المناسبة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          عند اختيار ملابس العمل للموظفين، ينبغي مراعاة الجوانب التالية:
              </p>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">عوامل يجب مراعاتها</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>تحليل المخاطر:</strong> دراسة المخاطر المحتملة في بيئة العمل وتحديد مستوى الحماية المطلوب
                  </li>
                  <li>
                    <strong>الراحة والملاءمة:</strong> اختيار ملابس مريحة تسمح بحرية الحركة وتناسب طبيعة العمل وساعاته
                  </li>
                  <li>
                    <strong>المتانة والجودة:</strong> التركيز على المواد عالية الجودة التي تتحمل الاستخدام المكثف والغسيل المتكرر
                  </li>
                  <li>
                    <strong>الملاءمة المناخية:</strong> مراعاة الظروف المناخية وتوفير خيارات مناسبة للمواسم المختلفة
                  </li>
                  <li>
                    <strong>التوافق مع ثقافة المؤسسة:</strong> اختيار تصاميم وألوان تعكس هوية وقيم المؤسسة
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
        src="/images/workwear/workwear_maintenance.jpeg"
        alt="معايير اختيار ملابس العمل"
                  fill
                  style={{ objectFit: 'cover' }}
      />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  اختيار ملابس العمل المناسبة يتطلب موازنة بين السلامة والراحة والمظهر المهني
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تمثل ملابس العمل استثمارًا استراتيجيًا للمؤسسات التي تسعى لتوفير بيئة عمل آمنة ومنتجة. من خلال اختيار ملابس عمل مناسبة تلبي معايير السلامة وتوفر الراحة اللازمة وتعكس هوية المؤسسة، يمكن للشركات تحقيق فوائد متعددة تشمل تقليل إصابات العمل، تعزيز الروح المعنوية والانتماء، وتحسين الصورة المهنية أمام العملاء.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
          مع التطور المستمر في تقنيات المنسوجات ومواد التصنيع، أصبحت ملابس العمل أكثر تطورًا وكفاءة في تلبية احتياجات مختلف القطاعات المهنية. لذا، ينبغي على المؤسسات مواكبة هذه التطورات والاستثمار في ملابس عمل عالية الجودة تضمن سلامة موظفيها وتعزز هويتها وتحسن كفاءة العمل.
              </p>
            </section>
          </article>
        </div>

        {/* مقالات ذات صلة */}
        <div className="mt-16 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={article.url} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-gray-100">
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 