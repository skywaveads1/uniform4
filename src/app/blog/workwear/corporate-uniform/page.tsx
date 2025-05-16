import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الزي الموحد للشركات: استثمار استراتيجي للمؤسسات الناجحة',
  description: 'تحليل استراتيجي لأهمية الزي الموحد في تعزيز نجاح المؤسسات وتحقيق أهدافها التسويقية والتشغيلية',
};

export default function CorporateUniform() {
  const imageSrc = '/images/workwear/corporate_uniform.jpeg';
  const title = 'الزي الموحد: استثمار استراتيجي للمؤسسات الناجحة';
  const readingTime = '8 دقائق للقراءة';
  const datePublished = '٢٢ يونيو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'strategic', title: 'الأبعاد الاستراتيجية للزي الموحد' },
    { id: 'branding', title: 'الزي الموحد كأداة تسويقية وبناء العلامة التجارية' },
    { id: 'productivity', title: 'تأثير الزي الموحد على الإنتاجية والانتماء المؤسسي' },
    { id: 'roi', title: 'العائد على الاستثمار من الزي الموحد للشركات' },
    { id: 'implementation', title: 'استراتيجيات تنفيذ برنامج الزي الموحد' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const tags = ["الزي الموحد", "الهوية المؤسسية", "العلامة التجارية", "استراتيجية الشركات", "الإنتاجية"];

  const relatedArticles = [
    {
      title: "الزي الموحد في القطاعات المختلفة: خصائصه ومميزاته ومتطلباته",
      description: "دليل شامل حول خصائص ومميزات ومتطلبات الزي الموحد في مختلف القطاعات المهنية والصناعية والخدمية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/uniform-sectors",
      date: "١١ مايو ٢٠٢٤"
    },
    {
      title: "ملابس العمل: أنواعها ومواصفاتها وأهميتها",
      description: "دليل شامل حول أنواع ملابس العمل المختلفة ومواصفاتها وفوائدها في تحسين بيئة العمل",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/clothing",
      date: "٨ مايو ٢٠٢٤"
    },
    {
      title: "تأثير ملابس العمل على إنتاجية الموظفين وصورة الشركة",
      description: "تحليل علمي لتأثير ملابس العمل والزي الموحد على مستويات الإنتاجية والانتماء المؤسسي",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/on-clothing",
      date: "١٤ مايو ٢٠٢٤"
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
                يتجاوز الزي الموحد للشركات كونه مجرد ملابس يرتديها الموظفون، ليصبح استثمارًا استراتيجيًا يؤثر على جوانب متعددة من أداء المؤسسة. فالشركات الناجحة تدرك أن الزي الموحد يمثل واجهة مرئية لقيمها وهويتها، ويؤثر على انطباعات العملاء وسلوك الموظفين والكفاءة التشغيلية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنستكشف كيف يمكن للزي الموحد أن يكون استثمارًا استراتيجيًا يعود بمنافع ملموسة على المؤسسات. سنتناول الأبعاد الاستراتيجية للزي الموحد، ودوره في بناء العلامة التجارية، وتأثيره على الإنتاجية والانتماء المؤسسي، والعائد على الاستثمار الذي يمكن تحقيقه من خلال برنامج زي موحد مصمم بعناية.
              </p>
            </section>

            <section id="strategic" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأبعاد الاستراتيجية للزي الموحد</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يتسم الزي الموحد بأبعاد استراتيجية متعددة تتجاوز الجانب المظهري البسيط:
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">البعد الاستراتيجي للزي الموحد</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>تعزيز الهوية المؤسسية:</strong> يجسد الزي الموحد قيم المؤسسة وثقافتها في شكل مرئي، مما يساعد في تعزيز هوية مميزة وراسخة للمؤسسة
                  </li>
                  <li>
                    <strong>الاتساق في التجربة:</strong> يضمن الزي الموحد تجربة متسقة للعملاء عبر جميع نقاط التواصل مع المؤسسة، مما يعزز الثقة والاعتراف بالعلامة التجارية
                  </li>
                  <li>
                    <strong>التمايز التنافسي:</strong> يساعد الزي المميز في تمييز المؤسسة عن منافسيها في أذهان العملاء، خاصة في القطاعات ذات المنافسة العالية
                  </li>
                  <li>
                    <strong>الانضباط والمهنية:</strong> يعزز وجود زي موحد ثقافة الانضباط والمهنية داخل المؤسسة، مما ينعكس على جودة الخدمة والمنتجات
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="الأبعاد الاستراتيجية للزي الموحد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  الزي الموحد يمثل استثماراً استراتيجياً يساهم في تعزيز الهوية المؤسسية والتمايز التنافسي
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                أظهرت دراسة أجرتها جامعة هارفارد أن الشركات التي تطبق سياسة الزي الموحد المدروسة شهدت زيادة بنسبة 25% في تعرف العملاء على علامتها التجارية مقارنة بالشركات المماثلة التي لا تطبق هذه السياسة. هذا يوضح الدور الاستراتيجي للزي الموحد في تعزيز الوعي بالعلامة التجارية والتمايز عن المنافسين.
              </p>
            </section>

            <section id="branding" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الزي الموحد كأداة تسويقية وبناء العلامة التجارية</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يلعب الزي الموحد دوراً محورياً في استراتيجيات التسويق وبناء العلامة التجارية للمؤسسات:
              </p>

              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <ul className="list-disc list-inside space-y-4 mr-5 text-gray-700">
                  <li>
                    <strong>التسويق المتنقل:</strong> يعمل الموظفون بزيهم الموحد كسفراء متنقلين للعلامة التجارية، حيث ينقلون هوية المؤسسة في كل تفاعل مع العملاء وأثناء تنقلاتهم. وفقاً لاستطلاع أجرته مؤسسة Marketing Insights، يلاحظ 74% من العملاء الزي الموحد للموظفين ويربطونه بانطباعهم عن المؤسسة.
                  </li>
                  <li>
                    <strong>الاتساق البصري:</strong> يضمن الزي الموحد اتساقاً بصرياً مع العناصر الأخرى للهوية المؤسسية مثل اللوغو والألوان والديكور الداخلي، مما يعزز الصورة الكلية للعلامة التجارية. الاتساق البصري يمكن أن يزيد التعرف على العلامة التجارية بنسبة تصل إلى 30% حسب دراسات التسويق الحديثة.
                  </li>
                  <li>
                    <strong>بناء الثقة والمصداقية:</strong> يساهم المظهر المهني والموحد للموظفين في تعزيز ثقة العملاء ومصداقية المؤسسة، خاصة في قطاعات مثل الخدمات المالية والرعاية الصحية والضيافة. أظهرت الدراسات أن 65% من العملاء يشعرون بثقة أكبر في المؤسسات التي يرتدي موظفوها زياً موحداً احترافياً.
                  </li>
                  <li>
                    <strong>التمييز عن المنافسين:</strong> يمكن للزي الموحد المميز أن يساعد في تمييز المؤسسة عن منافسيها في سوق مزدحم، مما يخلق ميزة تنافسية مستدامة تعتمد على الهوية البصرية الفريدة.
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mb-6 border-r-4 border-gray-400">
                <blockquote className="italic text-gray-700">
                  الزي الموحد ليس مجرد ملابس، بل هو سفير صامت لعلامتك التجارية. إنه يتحدث عن هويتك المؤسسية حتى قبل أن ينطق موظفوك بكلمة واحدة.
                  <footer className="text-sm mt-2 text-gray-600">- صالح العتيبي، مستشار تسويق واستراتيجيات العلامات التجارية</footer>
                </blockquote>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                عند تصميم الزي الموحد كجزء من استراتيجية العلامة التجارية، ينبغي مراعاة عدة عوامل: اختيار ألوان تعكس قيم العلامة التجارية، تضمين الشعار والعناصر البصرية المميزة بطريقة مدروسة، مراعاة الجودة والتصميم ليعكسا مستوى المؤسسة، والحرص على تجديد التصميم بما يتماشى مع تطور العلامة التجارية دون فقدان هويتها الأساسية.
              </p>
            </section>

            <section id="productivity" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تأثير الزي الموحد على الإنتاجية والانتماء المؤسسي</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يتجاوز تأثير الزي الموحد العلاقة مع العملاء ليشمل تأثيرات إيجابية على الموظفين وبيئة العمل:
              </p>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">الفوائد الداخلية للزي الموحد</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>تعزيز الانتماء المؤسسي:</strong> يساهم الزي الموحد في تقوية الشعور بالانتماء للمؤسسة والفخر بها، مما يحسن معدلات الاحتفاظ بالموظفين
                  </li>
                  <li>
                    <strong>تحسين العمل الجماعي:</strong> يقلل الزي الموحد من الفوارق الظاهرية بين الموظفين، مما يعزز روح الفريق الواحد والتعاون
                  </li>
                  <li>
                    <strong>زيادة التركيز والإنتاجية:</strong> يقلل الوقت المستغرق في اختيار الملابس ويحد من المشتتات المتعلقة بالمظهر، مما يعزز التركيز على المهام
                  </li>
                  <li>
                    <strong>الفصل بين الحياة الشخصية والمهنية:</strong> يساعد الزي الموحد في تهيئة الحالة الذهنية المناسبة للعمل وإيجاد توازن نفسي بين الحياة المهنية والشخصية
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="تأثير الزي الموحد على الإنتاجية والانتماء المؤسسي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  الزي الموحد يعزز روح الفريق والانتماء المؤسسي مما ينعكس إيجاباً على الإنتاجية
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                أشارت دراسة أجراها معهد جالوب أن الموظفين الذين يرتدون زياً موحداً أظهروا مستويات انتماء مؤسسي أعلى بنسبة 22% مقارنة بنظرائهم في مؤسسات لا تطبق هذه السياسة. كما وجدت الدراسة ارتباطاً إيجابياً بين وجود زي موحد ومستويات الرضا الوظيفي والإنتاجية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                لتحقيق أقصى فائدة من الزي الموحد على مستوى الموظفين، ينبغي إشراكهم في عملية اختيار وتصميم الزي، والحرص على توفير خيارات مريحة وعملية، ومراعاة التنوع في أحجام وتفضيلات الموظفين، وتجديد الزي بشكل دوري لتجنب الشعور بالملل والرتابة.
              </p>
            </section>

            <section id="roi" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العائد على الاستثمار من الزي الموحد للشركات</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمكن قياس العائد على الاستثمار في برنامج الزي الموحد من خلال مؤشرات ملموسة وغير ملموسة:
              </p>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">المؤشرات الملموسة للعائد على الاستثمار</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>زيادة الإيرادات:</strong> أظهرت دراسات أن المؤسسات التي تطبق سياسة زي موحد مميز شهدت زيادة في المبيعات بنسبة تتراوح بين 15-20% مقارنة بالفترات السابقة لتطبيق هذه السياسة
                  </li>
                  <li>
                    <strong>تحسين معدلات الاحتفاظ بالعملاء:</strong> زيادة ولاء العملاء وتكرار التعامل مع المؤسسة نتيجة للتجربة المتسقة والمهنية التي يوفرها الموظفون بزيهم الموحد
                  </li>
                  <li>
                    <strong>انخفاض تكاليف التوظيف:</strong> تقليل معدلات دوران الموظفين بسبب تعزيز الانتماء المؤسسي، مما يقلل تكاليف التوظيف والتدريب
                  </li>
                  <li>
                    <strong>تخفيض تكاليف التسويق:</strong> الاستفادة من الموظفين كقنوات تسويقية متنقلة يمكن أن يقلل الحاجة لبعض أشكال الإعلان التقليدية
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المؤشرات غير الملموسة للعائد على الاستثمار</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>تعزيز صورة العلامة التجارية:</strong> تحسين الانطباع العام عن المؤسسة ومكانتها في السوق
                  </li>
                  <li>
                    <strong>تحسين ثقافة العمل:</strong> تطوير بيئة عمل أكثر تماسكاً ومهنية تدعم تحقيق أهداف المؤسسة
                  </li>
                  <li>
                    <strong>زيادة رأس المال الاجتماعي:</strong> تعزيز العلاقات بين الموظفين والتواصل بين الإدارات المختلفة
                  </li>
                  <li>
                    <strong>تحسين الانطباع الأول:</strong> انطباعات أولى إيجابية لدى العملاء الجدد والشركاء المحتملين
                  </li>
                </ul>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                لاحظت شركة استشارات عالمية أن متوسط العائد على الاستثمار لبرامج الزي الموحد المصممة جيداً يتراوح بين 4:1 و 7:1، مما يعني أن كل ريال يستثمر في برنامج الزي الموحد يعود بـ 4-7 ريالات في شكل فوائد مباشرة وغير مباشرة للمؤسسة.
              </p>
            </section>

            <section id="implementation" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">استراتيجيات تنفيذ برنامج الزي الموحد</h2>
              <p className="mb-4 leading-7 text-gray-700">
                لتحقيق أقصى استفادة من برنامج الزي الموحد، ينبغي اتباع استراتيجية منهجية في التنفيذ:
              </p>

              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <ul className="list-disc list-inside space-y-4 mr-5 text-gray-700">
                  <li>
                    <strong>المواءمة مع الاستراتيجية العامة:</strong> ضمان توافق تصميم الزي الموحد مع الرؤية والرسالة والقيم المؤسسية، وكذلك مع استراتيجية العلامة التجارية والتواصل المؤسسي.
                  </li>
                  <li>
                    <strong>إشراك أصحاب المصلحة:</strong> تضمين آراء الإدارة والموظفين والعملاء في عملية تصميم واختيار الزي الموحد لضمان قبوله وفعاليته. أظهرت التجارب أن برامج الزي الموحد التي شارك الموظفون في تصميمها حققت نجاحاً أكبر بنسبة 40% من تلك التي فُرضت عليهم دون مشاركة.
                  </li>
                  <li>
                    <strong>التوازن بين الوظيفة والجمالية:</strong> تصميم زي يجمع بين الأناقة والعملية، مع مراعاة طبيعة العمل والبيئة التشغيلية. الزي المريح والعملي يزيد من قبول الموظفين له واستدامة البرنامج.
                  </li>
                  <li>
                    <strong>خطة تنفيذ تدريجية:</strong> تطبيق برنامج الزي الموحد بشكل تدريجي، بدءاً من الإدارات ذات التواصل المباشر مع العملاء، مع توفير فترة انتقالية كافية للتكيف والتعديل.
                  </li>
                  <li>
                    <strong>سياسة واضحة ومرنة:</strong> وضع سياسة مكتوبة للزي الموحد توضح التوقعات والمعايير، مع إتاحة هامش من المرونة يراعي الاختلافات الشخصية والثقافية والدينية بين الموظفين.
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="استراتيجيات تنفيذ برنامج الزي الموحد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  التنفيذ الناجح لبرنامج الزي الموحد يتطلب تخطيطاً استراتيجياً وإشراك جميع أصحاب المصلحة
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                من المهم أيضاً وضع آلية لتقييم ومراجعة برنامج الزي الموحد بشكل دوري، من خلال استطلاعات رأي الموظفين والعملاء، ومؤشرات الأداء الرئيسية، وتحليل التكلفة والعائد. هذا يساعد في تحديد مجالات التحسين والتطوير المستمر للبرنامج.
              </p>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل الزي الموحد للشركات استثماراً استراتيجياً متعدد الأبعاد، يتجاوز تأثيره المباشر على المظهر ليشمل جوانب أساسية في نجاح المؤسسات. فهو أداة فعالة في بناء العلامة التجارية وتعزيز الهوية المؤسسية وتحسين تجربة العملاء وزيادة إنتاجية الموظفين وانتمائهم للمؤسسة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                لتحقيق أقصى عائد على الاستثمار من برنامج الزي الموحد، ينبغي على المؤسسات التعامل معه كجزء من استراتيجيتها الشاملة، وليس كمجرد قرار تشغيلي ثانوي. يتطلب ذلك تخطيطاً دقيقاً وتصميماً مدروساً واستراتيجية تنفيذ تشاركية ومرنة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في عالم الأعمال التنافسي اليوم، يمكن للزي الموحد المصمم والمنفذ بعناية أن يكون نقطة تمايز رئيسية تساهم في نجاح المؤسسات وتميزها عن منافسيها. إنه ليس مجرد تكلفة تشغيلية، بل استثمار استراتيجي بعائد ملموس على المديين القصير والطويل.
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