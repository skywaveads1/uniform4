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
  title: 'أحذية السلامة للعاملين في المرافق: دليل شامل للاختيار والصيانة',
  description: 'دليل متكامل حول معايير اختيار أحذية السلامة المناسبة للعاملين في مجال المرافق والصيانة، مع نصائح للعناية بها وإطالة عمرها الافتراضي',
};

export default function SafetyShoesForWorkers() {
  const imageSrc = '/images/workwear/maintenance_uniform_requirements.jpeg';
  const title = 'أحذية السلامة للعاملين في المرافق: دليل شامل للاختيار والصيانة';
  const readingTime = '7 دقائق للقراءة';
  const datePublished = '٢٥ يونيو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية أحذية السلامة في بيئة العمل' },
    { id: 'standards', title: 'المعايير والتصنيفات العالمية' },
    { id: 'selection', title: 'معايير اختيار الحذاء المناسب' },
    { id: 'maintenance', title: 'العناية والصيانة' },
    { id: 'conclusion', title: 'الخلاصة والتوصيات' },
  ];

  const tags = ['أحذية السلامة', 'معدات الوقاية الشخصية', 'الصحة والسلامة المهنية', 'عمال المرافق', 'الزي الموحد'];

  const relatedArticles = [
    {
      title: "تصميم الزي الموحد لفنيي الصيانة",
      description: "دراسة تفصيلية حول أسس ومعايير تصميم الزي الموحد لفنيي الصيانة، مع التركيز على الراحة والسلامة",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/design-uniform-maintenance",
      date: "٢٠ يونيو ٢٠٢٤"
    },
    {
      title: "صيانة وإدارة ملابس العمل",
      description: "دليل شامل حول طرق صيانة ملابس العمل والزي الموحد للحفاظ على جودتها وإطالة عمرها الافتراضي",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/maintenance",
      date: "١٨ يونيو ٢٠٢٤"
    },
    {
      title: "متطلبات الزي الموحد لعمال الصيانة",
      description: "دراسة تفصيلية عن متطلبات والمواصفات الخاصة بملابس العمل لفرق الصيانة في مختلف القطاعات",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/maintenance-worker-uniform-requirements",
      date: "١٠ يونيو ٢٠٢٤"
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
                تعد أحذية السلامة جزءاً أساسياً من معدات الوقاية الشخصية للعاملين في قطاع المرافق والصيانة، حيث تلعب دوراً حيوياً في حماية أقدامهم من مجموعة متنوعة من المخاطر المحتملة في بيئة العمل. وعلى الرغم من أهميتها البالغة، إلا أن عملية اختيار الحذاء المناسب غالباً ما تكون مربكة بسبب تعدد الأنواع والمواصفات والمعايير المتاحة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نقدم دليلاً شاملاً يساعد المسؤولين عن السلامة والمشتريات في المؤسسات، وكذلك العاملين أنفسهم، على فهم معايير اختيار أحذية السلامة المناسبة للعمل في مجال المرافق والصيانة. كما نستعرض أفضل الممارسات للعناية بهذه الأحذية وإطالة عمرها الافتراضي، مما يحقق التوازن الأمثل بين السلامة والراحة والقيمة الاقتصادية.
              </p>
            </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية أحذية السلامة في بيئة العمل</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تكمن أهمية أحذية السلامة في قدرتها على توفير الحماية من مجموعة متنوعة من المخاطر المحتملة في بيئات العمل المختلفة:
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الحماية من المخاطر المهنية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>الصدمات والضغط:</strong> حماية الأصابع والقدم من سقوط الأجسام الثقيلة أو الضغط
                  </li>
                  <li>
                    <strong>الثقب والاختراق:</strong> مقاومة اختراق المسامير وغيرها من الأجسام الحادة للنعل
                  </li>
                  <li>
                    <strong>الانزلاق والتعثر:</strong> توفير تماسك جيد على الأسطح المختلفة، بما في ذلك الرطبة أو الزيتية
                  </li>
                  <li>
                    <strong>المخاطر الكهربائية:</strong> العزل ضد الصدمات الكهربائية في بيئات العمل ذات الصلة
                  </li>
                  <li>
                    <strong>المخاطر الكيميائية:</strong> مقاومة التآكل من المواد الكيميائية المختلفة
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
        src="/images/workwear/workwear_maintenance.jpeg"
        alt="أهمية أحذية السلامة في بيئة العمل"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  أحذية السلامة توفر حماية متكاملة للقدمين في بيئات العمل المختلفة
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                وفقاً للإحصاءات العالمية، تشكل إصابات القدم حوالي 10% من إجمالي إصابات العمل، ويمكن تجنب معظمها باستخدام أحذية السلامة المناسبة. وتشير الدراسات إلى أن الاستثمار في أحذية سلامة عالية الجودة يمكن أن يقلل من تكاليف الإصابات والتعويضات بنسبة تصل إلى 60%، بالإضافة إلى تقليل أيام العمل المفقودة بسبب الإصابات.
              </p>
            </section>

            <section id="standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المعايير والتصنيفات العالمية</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تخضع أحذية السلامة لمعايير وتصنيفات عالمية صارمة تحدد مستوى الحماية التي توفرها:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير ASTM الأمريكية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>
                      <strong>ASTM F2413:</strong> يحدد متطلبات أحذية السلامة للحماية من الصدمات والضغط
                    </li>
                    <li>
                      <strong>I/75:</strong> حماية من الصدمات بقوة 75 رطلاً
                    </li>
                    <li>
                      <strong>C/75:</strong> حماية من الضغط بقوة 2500 رطل
                    </li>
                    <li>
                      <strong>PR:</strong> مقاومة للثقب في النعل
                    </li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير EN ISO الأوروبية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>
                      <strong>EN ISO 20345:</strong> أحذية السلامة (مقدمة مقواة للحماية من الصدمات)
                    </li>
                    <li>
                      <strong>EN ISO 20346:</strong> أحذية الوقاية (مستوى حماية متوسط)
                    </li>
                    <li>
                      <strong>EN ISO 20347:</strong> أحذية العمل (بدون مقدمة مقواة)
                    </li>
                    <li>
                      <strong>S1-S5:</strong> تصنيفات فرعية تحدد خصائص إضافية
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تصنيفات EN ISO 20345 الشائعة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>
                      <strong>S1:</strong> خصائص أساسية + مقدمة مقواة + امتصاص الصدمات + مقاومة الوقود
                    </li>
                    <li>
                      <strong>S2:</strong> S1 + مقاومة نفاذ الماء
                    </li>
                    <li>
                      <strong>S3:</strong> S2 + مقاومة الثقب في النعل + نعل مضلع
                    </li>
                    <li>
                      <strong>S4:</strong> خصائص أساسية + مقدمة مقواة + حذاء مطاطي كامل مقاوم للماء
                    </li>
                    <li>
                      <strong>S5:</strong> S4 + مقاومة الثقب في النعل + نعل مضلع
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="selection" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير اختيار الحذاء المناسب</h2>
              <p className="mb-4 leading-7 text-gray-700">
                اختيار الحذاء المناسب يعتمد على تقييم دقيق لطبيعة العمل والمخاطر المحتملة وظروف بيئة العمل:
              </p>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">العوامل الرئيسية في الاختيار</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>تحليل المخاطر:</strong> تحديد المخاطر المحددة في بيئة العمل (ميكانيكية، كهربائية، كيميائية، إلخ)
                  </li>
                  <li>
                    <strong>ظروف العمل:</strong> داخلي/خارجي، رطب/جاف، حار/بارد، أسطح متنوعة
                  </li>
                  <li>
                    <strong>مدة الارتداء:</strong> فترات العمل وتأثيرها على اختيار الراحة والمتانة
                  </li>
                  <li>
                    <strong>ملاءمة الحجم والشكل:</strong> أهمية التجربة والقياس الدقيق لضمان الراحة والحماية
                  </li>
                  <li>
                    <strong>الوزن والمرونة:</strong> التوازن بين الحماية والراحة وسهولة الحركة
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="اختيار أحذية السلامة المناسبة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  عوامل متعددة تؤثر في اختيار الحذاء المناسب لكل بيئة عمل
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أنواع الأحذية الشائعة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>
                      <strong>أحذية السلامة العالية:</strong> توفر حماية للكاحل، مناسبة للبيئات الخشنة
                    </li>
                    <li>
                      <strong>أحذية السلامة المتوسطة:</strong> توازن بين الحماية والمرونة
                    </li>
                    <li>
                      <strong>أحذية السلامة المنخفضة:</strong> أخف وزناً، مناسبة للبيئات الأقل خطورة
                    </li>
                    <li>
                      <strong>أحذية مقاومة للماء:</strong> للعمل في الأجواء الرطبة أو المطيرة
                    </li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مواد التصنيع</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>
                      <strong>مقدمة الحذاء:</strong> فولاذ، ألومنيوم، مواد مركبة، بلاستيك مقوى
                    </li>
                    <li>
                      <strong>النعل المقاوم للثقب:</strong> فولاذ، مواد مركبة متعددة الطبقات
                    </li>
                    <li>
                      <strong>النعل الخارجي:</strong> مطاط، بولي يوريثان، مواد مركبة
                    </li>
                    <li>
                      <strong>الجزء العلوي:</strong> جلد طبيعي، جلد صناعي، أقمشة صناعية، مواد مقاومة للماء
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="maintenance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناية والصيانة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                العناية المناسبة بأحذية السلامة تطيل عمرها الافتراضي وتحافظ على خصائصها الوقائية:
              </p>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">إرشادات العناية اليومية</h3>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>التنظيف المنتظم:</strong> إزالة الأوساخ والغبار والمواد الملوثة بعد كل استخدام
                  </li>
                  <li>
                    <strong>التجفيف المناسب:</strong> تجفيف الأحذية المبللة بشكل طبيعي في درجة حرارة الغرفة، وتجنب مصادر الحرارة المباشرة
                  </li>
                  <li>
                    <strong>استخدام المنظفات المناسبة:</strong> اختيار منظفات محددة حسب نوع المادة (جلد، قماش، إلخ)
                  </li>
                  <li>
                    <strong>تطبيق مواد التشحيم والحماية:</strong> استخدام كريمات العناية بالجلد أو مواد طاردة للماء حسب الحاجة
                  </li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">علامات الاستبدال</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تآكل واضح في النعل أو فقدان النقشة</li>
                    <li>تشققات في الجزء العلوي أو انفصال عن النعل</li>
                    <li>ظهور مقدمة الحذاء المعدنية أو لوح مقاومة الثقب</li>
                    <li>تلف بطانة الحذاء الداخلية بشكل كبير</li>
                    <li>فقدان الراحة أو الدعم بشكل ملحوظ</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">إطالة العمر الافتراضي</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>استخدام زوجين بالتناوب لتقليل التآكل</li>
                    <li>استبدال النعل الداخلي بانتظام</li>
                    <li>تخزين الأحذية في مكان جاف وجيد التهوية</li>
                    <li>استخدام قوالب الحذاء للحفاظ على الشكل</li>
                    <li>الإصلاح المبكر للتلف البسيط</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mb-6 border-r-4 border-gray-400">
                <blockquote className="italic text-gray-700">
                  "من خلال تجربتنا، وجدنا أن تطبيق برنامج صيانة منتظم لأحذية السلامة وتدريب العاملين على العناية المناسبة بها أدى إلى تقليل تكاليف الاستبدال بنسبة 40% وزيادة مستوى رضا الموظفين عن معدات السلامة."
                  <footer className="text-sm mt-2 text-gray-600">- م. ماجد الزهراني، مدير السلامة والصحة المهنية بإحدى شركات المرافق</footer>
                </blockquote>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة والتوصيات</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر أحذية السلامة استثماراً في صحة وسلامة العاملين في قطاع المرافق والصيانة. واختيار الحذاء المناسب هو عملية موازنة بين الحماية والراحة والمتانة، مع مراعاة المخاطر المحددة في بيئة العمل والمعايير الدولية المعتمدة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                نوصي المؤسسات بتبني نهج شامل يتضمن:
              </p>
              <ul className="list-disc list-inside mr-5 space-y-2 text-gray-700 mb-6">
                <li>إجراء تقييم دقيق للمخاطر في كل موقع عمل وتحديد متطلبات الحماية المناسبة</li>
                <li>إشراك العاملين في عملية الاختيار لضمان ملاءمة الأحذية لاحتياجاتهم</li>
                <li>تطوير سياسة واضحة لاستبدال أحذية السلامة بناءً على معايير محددة</li>
                <li>توفير تدريب منتظم للعاملين حول أهمية أحذية السلامة وطرق العناية بها</li>
                <li>التحقق دورياً من مطابقة الأحذية المستخدمة للمعايير المحدثة</li>
              </ul>
              <p className="mb-4 leading-7 text-gray-700">
                في النهاية، فإن الاستثمار في أحذية سلامة عالية الجودة ونظام متكامل للعناية بها ليس مجرد التزام قانوني، بل هو جزء أساسي من ثقافة السلامة الشاملة التي تحمي العاملين وتعزز الإنتاجية وتقلل التكاليف على المدى البعيد.
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