import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'العناية بملابس العمل وأثرها على الصحة المهنية',
  description: 'دليل شامل حول كيفية العناية بملابس العمل للحفاظ على جودتها وتأثير ذلك على صحة وسلامة الموظفين',
};

export default function ClothingMaintenanceWorkHealth() {
  const imageSrc = '/images/workwear/work_clothes_care.jpeg';
  const title = 'العناية بملابس العمل وأثرها على الصحة المهنية';
  const readingTime = '١٠ دقائق للقراءة';
  const datePublished = '١ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية العناية بملابس العمل' },
    { id: 'methods', title: 'طرق العناية بملابس العمل' },
    { id: 'health-impact', title: 'تأثير العناية بالملابس على الصحة المهنية' },
    { id: 'best-practices', title: 'أفضل الممارسات للمؤسسات' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const relatedArticles = [
    {
      title: "متطلبات الزي الموحد لعمال الصيانة والتشغيل",
      description: "دليل متكامل حول المتطلبات الأساسية للزي الموحد لعمال الصيانة والتشغيل بما يتوافق مع معايير السلامة",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/maintenance-worker-uniform-requirements",
      date: "٥ مايو ٢٠٢٤",
      category: "ملابس العمل"
    },
    {
      title: "ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات",
      description: "دليل شامل حول متطلبات ومواصفات ملابس العمل المناسبة لفنيي الخدمة الميدانية في مختلف القطاعات",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/field-service-technician-workwear",
      date: "٣ مايو ٢٠٢٤",
      category: "ملابس العمل"
    },
    {
      title: "الزي الموحد: أهميته وتأثيره على بيئة العمل",
      description: "تحليل شامل لأهمية الزي الموحد وتأثيره الإيجابي على بيئة العمل وهوية الشركة والإنتاجية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/uniform",
      date: "٤ مايو ٢٠٢٤",
      category: "ملابس العمل"
    }
  ];

  const tags = ["ملابس العمل", "الصحة المهنية", "العناية بالملابس", "السلامة المهنية", "غسيل ملابس العمل", "تنظيف وقائي"];

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
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تُعتبر ملابس العمل من أهم العناصر في بيئة العمل المهنية، حيث تلعب دورًا حيويًا في توفير الحماية والراحة للموظفين أثناء أداء مهامهم. ومع ذلك، فإن العناية المناسبة بهذه الملابس تُشكل جانبًا مهمًا غالبًا ما يتم إغفاله، على الرغم من تأثيره الكبير على الصحة المهنية والسلامة في مكان العمل.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنتناول بالتفصيل أهمية العناية بملابس العمل وتأثيرها المباشر على صحة الموظفين وسلامتهم، والطرق المثلى للعناية بمختلف أنواع ملابس العمل، والممارسات التي يجب على المؤسسات تبنيها لضمان أعلى مستويات النظافة والصيانة.
              </p>
            </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية العناية بملابس العمل</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الحفاظ على خصائص الحماية</h3>
                <p className="mb-2 text-gray-700">تؤثر العناية السليمة على الوظائف الأساسية للملابس:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الحفاظ على خصائص مقاومة الحريق في الملابس المصممة لذلك</li>
                  <li>ضمان استمرار فعالية طبقات الحماية من المواد الكيميائية والسوائل</li>
                  <li>المحافظة على مستوى العزل الكهربائي في ملابس فنيي الكهرباء</li>
                  <li>منع تدهور خصائص مقاومة التمزق والاهتراء في البيئات الصناعية</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الوقاية من العدوى والأمراض</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>منع تراكم البكتيريا والفطريات على الملابس</li>
                    <li>تقليل احتمالية انتقال العدوى بين العاملين</li>
                    <li>تجنب تهيج الجلد والحساسية الناتجة عن الملوثات</li>
                    <li>السيطرة على الروائح غير المرغوبة في بيئة العمل</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">إطالة عمر الملابس</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تقليل معدل استبدال الملابس وخفض التكاليف</li>
                    <li>الحفاظ على المظهر المهني للموظفين لفترة أطول</li>
                    <li>تجنب التلف الناتج عن التراكم المستمر للأوساخ</li>
                    <li>ضمان استمرارية توفر الملابس المناسبة للعمل</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="أهمية العناية بملابس العمل"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  العناية المناسبة بملابس العمل تضمن الحفاظ على خصائصها الوقائية وتطيل من عمرها
                </div>
              </div>
            </section>

            <section id="methods" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">طرق العناية بملابس العمل</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الغسيل المناسب</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">خطوات أساسية لغسيل ملابس العمل بشكل صحيح:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>اتباع تعليمات الشركة المصنعة: قراءة ملصقات العناية واتباع التعليمات المحددة لكل نوع من الملابس</li>
                    <li>فصل الملابس: فصل ملابس العمل عن الملابس العادية، وفصل الملابس ذات الألوان المختلفة لتجنب انتقال الألوان</li>
                    <li>استخدام المنظفات المناسبة: اختيار منظفات خالية من المبيضات والعطور للملابس المقاومة للحريق</li>
                    <li>درجات الحرارة: استخدام درجات الحرارة المناسبة للغسيل وفقاً لنوع القماش والتلوث</li>
                    <li>تنظيف البقع الصعبة: معالجة البقع الصعبة قبل الغسيل باستخدام منظفات مخصصة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التجفيف والكي والتخزين</h3>
                <p className="mb-2 text-gray-700">عمليات ما بعد الغسيل:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">التجفيف المناسب:</span> اتباع تعليمات التجفيف المذكورة على الملصق، والانتباه إلى أن بعض المواد قد تتضرر من التجفيف الآلي بدرجات حرارة عالية</li>
                  <li><span className="font-medium">الكي بحذر:</span> استخدام درجات حرارة مناسبة عند كي ملابس العمل للحفاظ على خصائصها وتجنب الضرر</li>
                  <li><span className="font-medium">التخزين الصحيح:</span> تخزين ملابس العمل في مكان جاف وبعيد عن أشعة الشمس المباشرة، مع ضمان تهوية جيدة لمنع تكون العفن والروائح</li>
                  <li><span className="font-medium">الفحص الدوري:</span> فحص الملابس بانتظام للكشف عن أي علامات تلف أو تآكل تستدعي الإصلاح أو الاستبدال</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">نصائح خاصة للملابس المقاومة للحريق</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تجنب استخدام المبيضات ومنعمات الأقمشة التي قد تؤثر على خصائصها الوقائية</li>
                  <li>غسلها منفصلة عن باقي الملابس لتجنب تلوثها بالزيوت أو المواد القابلة للاشتعال</li>
                  <li>استخدام منظفات بدرجة حموضة متعادلة (pH neutral) للحفاظ على طبقة الحماية</li>
                  <li>غسلها بانتظام حتى إذا لم تبد متسخة، لإزالة الزيوت غير المرئية والملوثات</li>
                </ul>
              </div>
            </section>

            <section id="health-impact" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تأثير العناية بالملابس على الصحة المهنية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تؤثر العناية الصحيحة بملابس العمل تأثيراً مباشراً على صحة العاملين وسلامتهم في مكان العمل. فملابس العمل غير النظيفة أو التالفة قد تتسبب في مشاكل صحية متنوعة، بينما توفر الملابس التي تتم صيانتها بشكل جيد حماية فعالة للموظفين.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مشاكل صحية ناتجة عن سوء العناية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أمراض جلدية مثل الطفح الجلدي والحساسية</li>
                    <li>التهابات تنفسية بسبب الأتربة والجسيمات العالقة</li>
                    <li>التهابات مختلفة بسبب تراكم البكتيريا والفطريات</li>
                    <li>زيادة خطر التعرض للمواد الكيميائية الضارة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">فوائد صحية للعناية المناسبة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تقليل معدلات الغياب بسبب المرض</li>
                    <li>زيادة الراحة أثناء العمل وتقليل الإجهاد</li>
                    <li>تحسين الأداء والتركيز في بيئة عمل صحية</li>
                    <li>تعزيز الثقة والاحترام المهني بين العاملين</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">أظهرت الدراسات أن المؤسسات التي تطبق برامج صيانة منتظمة لملابس العمل تشهد انخفاضاً بنسبة تصل إلى 35% في الحوادث والإصابات المهنية، و20% في الأمراض المرتبطة بالعمل.</p>
                  <footer className="text-sm text-gray-600">— مجلة الصحة والسلامة المهنية، 2023</footer>
                </blockquote>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="تأثير العناية بالملابس على الصحة المهنية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  العلاقة المباشرة بين نظافة ملابس العمل وصحة العاملين في بيئات العمل المختلفة
                </div>
              </div>
            </section>

            <section id="best-practices" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أفضل الممارسات للمؤسسات</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">برامج العناية بملابس العمل المؤسسية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">ممارسات موصى بها للشركات:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تطبيق نظام تنظيف وصيانة دوري لملابس العمل بالتعاون مع الموظفين</li>
                    <li>توفير إرشادات واضحة للموظفين حول طرق العناية بملابس العمل</li>
                    <li>تقديم تدريب للموظفين حول أهمية نظافة ملابس العمل وتأثيرها على الصحة</li>
                    <li>التعاقد مع خدمات غسيل متخصصة لملابس العمل ذات المواصفات الخاصة</li>
                    <li>إجراء فحص دوري للملابس واستبدالها عند الضرورة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">نموذج خطة العناية بملابس العمل</h3>
                <p className="mb-2 text-gray-700">خطة تنفيذية للمؤسسات:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">تحديد المسؤوليات:</span> توضيح مسؤوليات المؤسسة والموظفين في عملية العناية بالملابس</li>
                  <li><span className="font-medium">جدولة عمليات التنظيف:</span> وضع جدول واضح لغسيل وصيانة الملابس حسب نوعها وطبيعة العمل</li>
                  <li><span className="font-medium">توفير البنية التحتية:</span> تخصيص مرافق لتخزين الملابس النظيفة ومرافق للملابس المتسخة</li>
                  <li><span className="font-medium">المتابعة والتوثيق:</span> تسجيل عمليات الصيانة والغسيل ضمن سجلات السلامة المهنية</li>
                  <li><span className="font-medium">المراجعة الدورية:</span> تقييم فعالية البرنامج وتحديثه حسب الحاجة</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          العناية المناسبة بملابس العمل ليست مجرد مسألة مظهر خارجي، بل هي جزء أساسي من منظومة الصحة والسلامة المهنية. من خلال اتباع الإرشادات الصحيحة للغسيل والتجفيف والتخزين والفحص الدوري، يمكن الحفاظ على فعالية ملابس العمل وإطالة عمرها، وبالتالي ضمان أعلى مستويات الحماية للموظفين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
          كما أن التعاون بين أصحاب العمل والموظفين في هذا الجانب يسهم في خلق بيئة عمل أكثر أمانًا وصحة، مما ينعكس إيجابًا على الإنتاجية والرضا الوظيفي. إن الاستثمار في ملابس عمل ذات جودة عالية يجب أن يترافق مع استثمار مماثل في العناية بها، لتحقيق أقصى استفادة منها وضمان الحماية المثلى للقوى العاملة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في النهاية، فإن العناية بملابس العمل ليست مسؤولية فردية فحسب، بل هي جزء من ثقافة مؤسسية تعكس الالتزام بمعايير السلامة والجودة. والمؤسسات التي تدرك هذه الحقيقة وتعمل على تطبيقها ستحقق نتائج إيجابية على المدى القصير والطويل، سواء من حيث صحة الموظفين أو الأداء الاقتصادي للمؤسسة.
              </p>
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