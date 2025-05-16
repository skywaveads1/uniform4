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
  title: 'العناية بملابس العمل: دليل شامل للحفاظ على جودتها وإطالة عمرها',
  description: 'إرشادات مفصلة حول طرق العناية بملابس العمل والزي الموحد للحفاظ على مظهرها وأدائها وإطالة عمرها الافتراضي',
};

export default function ClothingMaintenance() {
  const imageSrc = '/images/workwear/work_clothes_care.jpeg';
  const title = 'العناية بملابس العمل: دليل شامل للحفاظ على جودتها وإطالة عمرها';
  const readingTime = '٧ دقائق للقراءة';
  const datePublished = '١٨ يونيو ٢٠٢٤';
  const authorName = 'فريق يونيفورم';
  const authorImage = '/images/author/uniform_team.png';
  const authorTitle = 'خبراء ملابس العمل';

  // Secciones para la tabla de contenidos
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية العناية بملابس العمل' },
    { id: 'washing-methods', title: 'طرق الغسيل والعناية الأساسية' },
    { id: 'storage', title: 'التخزين السليم والصيانة الوقائية' },
    { id: 'repair', title: 'إصلاح وترميم ملابس العمل' },
    { id: 'conclusion', title: 'خاتمة' },
  ];

  const tags = ["صيانة ملابس العمل", "العناية بالزي الموحد", "غسيل ملابس العمل", "إطالة عمر الملابس", "النظافة المهنية"];

  const relatedArticles = [
    {
      title: "الزي الموحد: استثمار استراتيجي للمؤسسات الناجحة",
      description: "نظرة شاملة على أهمية الزي الموحد للمؤسسات والشركات، وكيف يساهم في تعزيز الهوية المؤسسية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/uniform",
      date: "٢٢ يونيو ٢٠٢٤",
      category: "ملابس العمل"
    },
    {
      title: "الزي الموحد في قطاع خدمات التموين والضيافة السعودي",
      description: "استعراض شامل لتطور الزي الموحد في قطاع خدمات التموين والضيافة في المملكة العربية السعودية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/chef-uniforms/uniform-in-services-catering-Saudi",
      date: "٢٠ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    },
    {
      title: "تصميم أزياء الطهاة في المملكة العربية السعودية: بين التراث والابتكار",
      description: "نظرة عميقة على اتجاهات وابتكارات تصميم أزياء الطهاة في المملكة العربية السعودية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/chef-uniforms/design-in-Saudi",
      date: "١٥ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    }
  ];

  return (
    <main className="bg-white rtl" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="z-0"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <div className="flex items-center text-white/80 gap-4 mb-4">
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{readingTime}</span>
              </div>
              <div>
                <span>{datePublished}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-6xl py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 order-2 lg:order-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">محتويات المقال</h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-primary hover:text-primary-dark transition block py-1"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">مشاركة</h3>
                <ShareButtons title={title} />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">الوسوم</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">الكاتب</h3>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={authorImage}
                      alt={authorName}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="mr-3">
                    <p className="font-semibold">{authorName}</p>
                    <p className="text-sm text-gray-600">{authorTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 order-1 lg:order-2">
            <article className="prose prose-lg max-w-none">
              <section id="intro">
                <h2 className="text-2xl font-semibold mt-8 mb-4">مقدمة</h2>
                <p className="mb-4 text-lg font-medium leading-relaxed">
          تعتبر ملابس العمل والزي الموحد استثماراً مهماً للشركات والمؤسسات، ليس فقط في تعزيز هويتها المرئية، بل أيضاً في توفير الحماية والراحة للموظفين. لذا فإن العناية المناسبة بهذه الملابس وصيانتها بانتظام تعد من العوامل الأساسية لإطالة عمرها الافتراضي والحفاظ على مظهرها المهني، مما يضمن تحقيق أقصى قيمة لهذا الاستثمار.
                </p>
                <p className="mb-4">
          في هذا الدليل الشامل، نستعرض أفضل الممارسات والنصائح المتخصصة للعناية بمختلف أنواع ملابس العمل، بدءاً من الغسيل والتنظيف السليم، مروراً بطرق التخزين المثالية، وصولاً إلى استراتيجيات إدارة نظام صيانة فعال للزي الموحد في المؤسسات الكبيرة. سواء كنت مديراً لقسم الموارد البشرية، مسؤولاً عن إدارة المرافق، أو موظفاً يرغب في الحفاظ على مظهره المهني، ستجد في هذا الدليل ما يساعدك على إطالة عمر ملابس العمل والحفاظ على أدائها الوظيفي ومظهرها الأنيق.
                </p>
              </section>

              <section id="importance">
                <h2 className="text-2xl font-semibold mt-8 mb-4">أهمية العناية بملابس العمل</h2>
                <p className="mb-4">
          تتجاوز أهمية العناية بملابس العمل مجرد الحفاظ على المظهر الخارجي، لتشمل جوانب أكثر أهمية تؤثر في المؤسسة والموظفين:
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg my-6 border-r-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">لماذا تعتبر العناية بملابس العمل أمراً ضرورياً؟</h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-semibold mb-1">الحفاظ على الصورة المهنية والانطباع الأول</h4>
                      <p className="text-gray-700">
              تمثل ملابس العمل النظيفة والأنيقة الواجهة المرئية للمؤسسة، وتؤثر بشكل مباشر في الانطباع الأول الذي يتكون لدى العملاء والشركاء. الملابس المتسخة أو البالية تعطي انطباعاً سلبياً عن المؤسسة ومستوى احترافيتها، بينما الملابس المعتنى بها جيداً تعزز الثقة والمصداقية. تشير الدراسات إلى أن 78% من العملاء يربطون بين مظهر موظفي الخدمة وجودة الخدمة المقدمة.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-1">إطالة العمر الافتراضي وتوفير التكاليف</h4>
                      <p className="text-gray-700">
              العناية الصحيحة بملابس العمل تطيل عمرها الافتراضي بشكل كبير، مما يقلل من تكاليف الاستبدال المتكرر. تشير التقديرات إلى أن العناية المناسبة يمكن أن تزيد من عمر الزي الموحد بنسبة تتراوح بين 30-50%، وهو ما يمثل توفيراً كبيراً خاصة للمؤسسات الكبيرة. على سبيل المثال، مؤسسة تضم 100 موظف تستبدل الزي كل سنتين بدلاً من كل سنة يمكنها توفير ما يقارب 50,000 ريال سعودي سنوياً.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                  <Image
        src="/images/workwear/workwear_maintenance.jpeg"
        alt="أهمية الحفاظ على المظهر المهني لملابس العمل"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                    المظهر المهني لملابس العمل يعزز الثقة ويعكس احترافية المؤسسة
                  </div>
                </div>

                <div className="bg-gray-100 p-5 rounded-lg my-6 border-r-4 border-gray-400">
                  <blockquote className="italic text-gray-700">
                    العناية بملابس العمل ليست مسألة مظهر فحسب، بل هي جزء أساسي من منظومة السلامة المهنية في بيئة العمل. الملابس النظيفة والمعتنى بها جيداً لا تعكس احترافية المؤسسة فقط، بل تحمي الموظفين والعملاء على حد سواء، وتمثل استثماراً ذكياً يعود بعائد ملموس على المدى الطويل.
                    <footer className="text-sm mt-2 text-gray-600">- د. أحمد السليم، خبير الصحة والسلامة المهنية</footer>
                  </blockquote>
                </div>
              </section>

              <section id="washing-methods">
                <h2 className="text-2xl font-semibold mt-8 mb-4">طرق الغسيل والعناية الأساسية</h2>
                <p className="mb-4">
          تعتبر عملية الغسيل والتنظيف من أهم جوانب العناية بملابس العمل، ويختلف الأسلوب المناسب باختلاف نوع القماش وطبيعة العمل والتلوثات المحتملة:
                </p>

                <div className="bg-green-50 p-6 rounded-lg my-6 border-r-4 border-green-500">
                  <h3 className="text-xl font-bold mb-4 text-green-800">إرشادات الغسيل حسب نوع الملابس</h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-semibold mb-1">ملابس العمل القطنية (البدلات والقمصان الرسمية)</h4>
                      <p className="text-gray-700">
              تتميز الأقمشة القطنية بكونها سهلة التنظيف نسبياً، لكنها عرضة للانكماش والتجعد. ينصح بغسلها بماء دافئ (لا يتجاوز 40 درجة مئوية) مع استخدام منظف لطيف. يفضل قلب الملابس على الوجه الداخلي قبل الغسيل لحماية الألوان والشعارات. تجنب استخدام المبيضات الكلورية التي تضعف الألياف وتؤثر على الألوان. يمكن استخدام دورة عصر خفيفة ثم التجفيف على حبل الغسيل أو باستخدام مجفف على درجة حرارة منخفضة، مع إخراج الملابس وهي لا تزال رطبة قليلاً لتقليل التجعد.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-1">ملابس العمل المخلوطة (البوليستر/القطن)</h4>
                      <p className="text-gray-700">
              تعتبر الأقمشة المخلوطة من البوليستر والقطن (مثل T/C 65/35) الأكثر شيوعاً في ملابس العمل لمتانتها وسهولة العناية بها. تغسل بماء متوسط الحرارة (30-40 درجة مئوية) مع منظف قياسي. تتميز بأنها أقل عرضة للتجعد والانكماش من القطن الخالص. يمكن تجفيفها في المجفف على درجة حرارة متوسطة، وتحتاج لكي بسيط أو قد لا تحتاج للكي على الإطلاق. ينصح بفصل الألوان الفاتحة عن الداكنة، واستخدام مثبتات الألوان في الغسلات الأولى للحفاظ على حيوية الألوان.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                  <Image
        src="/images/workwear/workwear_maintenance.jpeg"
        alt="تقنيات غسيل وتنظيف ملابس العمل المختلفة"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                    تقنيات متخصصة لغسيل وتنظيف مختلف أنواع ملابس العمل والمحافظة على خصائصها
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg my-6">
                  <h4 className="font-bold mb-3 text-blue-800">نصائح عامة للغسيل الفعال</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold ml-2">•</span>
                      <span>اقرأ دائماً تعليمات العناية الموجودة على ملصق الملابس واتبعها بدقة</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold ml-2">•</span>
                      <span>عالج البقع فور حدوثها قبل أن تثبت في القماش، مع استخدام مزيل مناسب لنوع البقعة</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold ml-2">•</span>
                      <span>افصل الملابس حسب اللون والنوع والدرجة الحرارية المناسبة للغسيل</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold ml-2">•</span>
                      <span>استخدم كمية مناسبة من المنظف - الكمية الزائدة قد تترك رواسب تجذب الأوساخ</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="storage">
                <h2 className="text-2xl font-semibold mt-8 mb-4">التخزين السليم والصيانة الوقائية</h2>
                <p className="mb-4">
          تعتبر طريقة تخزين ملابس العمل عاملاً مهماً في الحفاظ على جودتها ومظهرها بين فترات الاستخدام. كما أن الصيانة الوقائية تساعد في تجنب المشكلات قبل حدوثها:
                </p>

                <div className="bg-amber-50 p-6 rounded-lg my-6 border-r-4 border-amber-500">
                  <h3 className="text-xl font-bold mb-4 text-amber-800">مبادئ التخزين السليم</h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-semibold mb-1">التجفيف الكامل قبل التخزين</h4>
                      <p className="text-gray-700">
              من الضروري التأكد من جفاف الملابس تماماً قبل تخزينها، حيث أن الرطوبة المتبقية يمكن أن تؤدي إلى نمو العفن والفطريات وظهور الروائح الكريهة، خاصة في المناخات الحارة والرطبة مثل بعض مناطق المملكة. اترك الملابس تجف في مكان جيد التهوية لمدة كافية بعد الغسيل أو بعد يوم عمل حافل بالتعرق قبل تعليقها في الخزانة. استخدام أكياس أو عبوات تحتوي على مواد ماصة للرطوبة في خزانات التخزين يمكن أن يساعد في المناطق ذات الرطوبة العالية.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-1">استخدام الشماعات المناسبة</h4>
                      <p className="text-gray-700">
              تختلف الشماعات المثالية باختلاف نوع الملابس. للسترات والجاكيتات، استخدم شماعات خشبية أو بلاستيكية سميكة تحافظ على شكل الكتفين. للقمصان، استخدم شماعات ذات سطح غير انزلاقي. تجنب الشماعات السلكية الرفيعة التي يمكن أن تترك علامات أو تشوه الأكتاف. قم بتعليق البنطلونات من الحافة مقلوبة أو استخدم شماعات مخصصة للبنطلونات. عدم تكديس الملابس بشكل مضغوط يسمح بتهوية أفضل ويقلل من التجعدات.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                  <Image
        src="/images/workwear/workwear_maintenance.jpeg"
        alt="أنظمة تخزين ملابس العمل"
                    fill
                    style={{ objectFit: 'cover' }}
      />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                    أنظمة تخزين متطورة تساعد في الحفاظ على جودة ملابس العمل وتنظيمها بشكل فعال
                  </div>
                </div>
              </section>

              <section id="repair">
                <h2 className="text-2xl font-semibold mt-8 mb-4">إصلاح وترميم ملابس العمل</h2>
                <p className="mb-4">
          الإصلاح السريع والفعال للملابس يمكن أن يطيل عمرها بشكل كبير ويحافظ على مظهرها المهني. تختلف استراتيجيات الإصلاح باختلاف نوع التلف ونوع الملابس:
                </p>

                <div className="bg-red-50 p-6 rounded-lg my-6 border-r-4 border-red-500">
                  <h3 className="text-xl font-bold mb-4 text-red-800">استراتيجيات إصلاح الملابس حسب نوع التلف</h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-semibold mb-1">إصلاح التمزقات والثقوب</h4>
                      <p className="text-gray-700">
                        التدخل السريع عند ظهور التمزقات الصغيرة يمنع امتدادها وتفاقمها. للتمزقات الصغيرة في الأقمشة العادية، يمكن استخدام تقنية الرتق البسيط باستخدام خيط مطابق للون القماش.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-1">استبدال الأزرار والسحابات</h4>
                      <p className="text-gray-700">
                        فقدان الأزرار وتعطل السحابات من المشكلات الشائعة في ملابس العمل. من المفيد الاحتفاظ بمخزون من الأزرار الاحتياطية المطابقة للتعويض الفوري عند الحاجة.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-5 rounded-lg my-6 border-r-4 border-gray-400">
                  <blockquote className="italic text-gray-700">
                    وجدنا أن تأسيس ورشة صيانة صغيرة داخل الشركة لإصلاح ملابس العمل أدى إلى تقليل تكاليف شراء ملابس جديدة بنسبة تفوق 40%. المفتاح هو التدخل المبكر - فالدرزة البسيطة اليوم يمكن أن توفر استبدال قطعة كاملة غداً.
                    <footer className="text-sm mt-2 text-gray-600">- محمد الغامدي، مسؤول الصيانة في شركة صناعية كبرى</footer>
                  </blockquote>
                </div>
              </section>

              <section id="conclusion">
                <h2 className="text-2xl font-semibold mt-8 mb-4">خاتمة</h2>
                <p className="mb-4">
          تمثل العناية بملابس العمل والزي الموحد استثماراً ذكياً للمؤسسات والأفراد على حد سواء. من خلال تبني أفضل ممارسات الغسيل والتخزين والصيانة الوقائية والإصلاح المبكر، يمكن إطالة عمر هذه الملابس بشكل كبير، والحفاظ على مظهرها المهني، وضمان استمرار أدائها لوظائفها الحمائية والتمثيلية.
                </p>
                <p className="mb-4">
                  تذكر أن العناية المناسبة بملابس العمل ليست مجرد مسألة جمالية، بل هي جزء أساسي من الصورة المهنية للمؤسسة، وعنصر مهم في منظومة السلامة والصحة المهنية، واستثمار اقتصادي له عائد ملموس على المدى الطويل.
                </p>
                <p className="mb-4">
          في النهاية، تذكر أن ملابس العمل التي تتم العناية بها جيداً لا تعكس فقط احترافية المؤسسة، بل تعزز أيضاً ثقة الموظفين وشعورهم بالانتماء والفخر بمؤسستهم، مما ينعكس إيجاباً على أدائهم وإنتاجيتهم.
                </p>
              </section>
            </article>

            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-6">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article, index) => (
                  <Link key={index} href={article.url} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
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
                        <h4 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 