import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تصميم زي طاقم الطائرة: دليل شامل للمعايير والعناصر الأساسية',
  description: 'دليل متكامل عن معايير وأسس تصميم زي طاقم الطائرة بما يجمع بين الأناقة والعملية وتعزيز هوية شركة الطيران',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_uniform_design.jpeg';
  const title = 'تصميم زي طاقم الطائرة: دليل شامل للمعايير والعناصر الأساسية';
  const readingTime = '14 دقائق';
  const datePublished = '١٠ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة في أهمية تصميم زي طاقم الطائرة' },
    { id: 'key-elements', title: 'العناصر الأساسية في تصميم زي طاقم الطائرة' },
    { id: 'design-stages', title: 'مراحل تصميم زي طاقم الطائرة' },
    { id: 'cabin-crew-design', title: 'تصميم زي المضيفات والمضيفين' },
    { id: 'pilot-design', title: 'تصميم زي طاقم القيادة' },
    { id: 'practical-considerations', title: 'الاعتبارات العملية والتقنية' },
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
                  <Link href="/blog/aviation-uniforms/aviation-in" className="text-sm hover:text-blue-600 block">
                    الطيران في تصميم الأزياء
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/best-on-uniform-aviation" className="text-sm hover:text-blue-600 block">
                    أفضل الممارسات في زي الطيران
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
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة في أهمية تصميم زي طاقم الطائرة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يمثل تصميم زي طاقم الطائرة عملية إبداعية واستراتيجية معقدة تجمع بين الفن والعلم، وتتطلب الموازنة بين العديد من العناصر المتباينة؛ من الناحية الجمالية والوظيفية والهوية المؤسسية وراحة العاملين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
          لا يقتصر دور زي طاقم الطائرة على كونه ملابس عمل فحسب، بل يتعدى ذلك ليكون أحد أهم عناصر الهوية البصرية لشركة الطيران، ووسيلة اتصال بصرية قوية مع العملاء، تنقل قيم الشركة وفلسفتها وتميزها في سوق تنافسي. كما يؤثر بشكل مباشر على راحة الطاقم وكفاءة أدائهم خلال ساعات العمل الطويلة.
              </p>
            </section>

            <section id="key-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر الأساسية في تصميم زي طاقم الطائرة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يتطلب تصميم زي ناجح لطاقم الطائرة مراعاة مجموعة من العناصر الأساسية المتكاملة، التي تضمن تحقيق الأهداف المرجوة من الزي.
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">العناصر الأساسية في تصميم زي طاقم الطائرة</h3>
                <p className="mb-2 font-medium text-blue-700">النقاط الرئيسية للتصميم الناجح:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الهوية المؤسسية: تجسيد قيم وشخصية شركة الطيران وتعزيز صورتها</li>
                  <li>الراحة والعملية: ملاءمة الزي لطبيعة العمل وتوفير أقصى درجات الراحة</li>
                  <li>الأناقة والمظهر المهني: تقديم صورة احترافية وأنيقة تليق بسمعة الشركة</li>
                  <li>الجودة والمتانة: استخدام خامات عالية الجودة تتحمل الاستخدام المكثف</li>
                  <li>الالتزام بمعايير السلامة: مراعاة اعتبارات السلامة والمتطلبات التنظيمية</li>
                  <li>التميز والتفرد: إضافة لمسات خاصة تميز الشركة عن منافسيها</li>
                </ul>
              </div>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
          alt="العناصر الأساسية في تصميم زي طاقم الطائرة"
                  fill
                  style={{ objectFit: 'cover' }}
        />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تكامل العناصر الأساسية في تصميم زي طاقم الطائرة لتحقيق التوازن المثالي | المصدر: مجلة تصميم الأزياء العالمية
                </div>
              </div>
        
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <p className="italic text-gray-700 border-r-4 border-blue-300 pr-4 py-2 mb-4">
          "تصميم زي لطاقم الطائرة ليس مجرد تصميم ملابس جميلة، بل هو تحدٍ إبداعي لخلق توازن دقيق بين الوظيفة والجمال، بين الراحة والأناقة، وبين التقاليد والابتكار. الزي الناجح هو الذي يمنح مرتديه شعوراً بالفخر والتميز، ويعزز من صورة الشركة في أذهان المسافرين."
                </p>
                <p className="text-sm text-gray-600 text-left">- كريستيان لاكروا، مصمم أزياء عالمي</p>
              </div>
            </section>

            <section id="design-stages" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مراحل تصميم زي طاقم الطائرة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تمر عملية تصميم زي طاقم الطائرة بعدة مراحل متتالية ومتكاملة، تضمن الوصول إلى تصميم يلبي جميع المتطلبات والتوقعات.
              </p>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">مراحل عملية التصميم</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">الدراسة والبحث:</span> تبدأ العملية بدراسة مستفيضة لهوية الشركة وقيمها، وتحليل لجمهورها المستهدف وثقافة البلد التي تنتمي إليها. كما تشمل دراسة تاريخ الشركة وأزيائها السابقة، والاطلاع على اتجاهات التصميم العالمية، والتعرف على أزياء المنافسين.</li>
                    <li><span className="font-medium">تحديد المتطلبات والقيود:</span> يتم في هذه المرحلة تحديد المتطلبات الوظيفية والجمالية والتقنية للزي، بالإضافة إلى القيود المالية والتنظيمية والثقافية التي يجب مراعاتها في التصميم.</li>
                    <li><span className="font-medium">وضع المفاهيم الأولية:</span> يقوم المصممون بوضع مفاهيم وأفكار أولية للتصميم، من خلال الرسومات والاسكتشات، مع التركيز على العناصر الرئيسية مثل الألوان والقصات والخامات.</li>
                    <li><span className="font-medium">إعداد النماذج الأولية:</span> يتم تحويل المفاهيم المختارة إلى نماذج أولية للاختبار، حيث يتم تجربتها للتأكد من ملاءمتها لمتطلبات العمل ومستوى الراحة والمظهر العام.</li>
                    <li><span className="font-medium">التقييم والتعديل:</span> تخضع النماذج للتقييم من قبل الإدارة وعينة من الطاقم، وقد تشمل هذه المرحلة اختبارات ميدانية في ظروف عمل حقيقية، ثم يتم إجراء التعديلات اللازمة بناءً على الملاحظات.</li>
                    <li><span className="font-medium">الإنتاج والتوزيع:</span> بعد الموافقة على التصميم النهائي، يتم البدء في الإنتاج الشامل للزي وتوزيعه على أفراد الطاقم، مع توفير التدريب اللازم على ارتدائه والعناية به.</li>
                    <li><span className="font-medium">المتابعة والتقييم المستمر:</span> تستمر عملية تقييم الزي بعد تطبيقه، لرصد أي مشكلات أو تحديات قد تظهر أثناء الاستخدام الفعلي، وإجراء التحسينات المستمرة عند الحاجة.</li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">حقيقة مثيرة للاهتمام</h3>
                <p className="leading-7 text-gray-700">
            تستغرق عملية تصميم زي جديد لشركة طيران كبرى ما بين 18-24 شهراً من البداية وحتى التطبيق الكامل، وقد تتجاوز تكلفتها 5 ملايين دولار أمريكي، خاصة إذا كانت الشركة تضم آلاف الموظفين. وتُجرى عادة تحديثات جزئية كل 3-5 سنوات، مع إعادة تصميم شاملة كل 8-10 سنوات.
                </p>
              </div>
            </section>

            <section id="cabin-crew-design" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تصميم زي المضيفات والمضيفين</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يمثل زي طاقم الضيافة (المضيفات والمضيفين) الواجهة الأكثر وضوحاً لشركة الطيران، نظراً للتواصل المباشر والمستمر مع المسافرين، ولذلك يحظى بأهمية خاصة في عملية التصميم.
              </p>
        
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
          alt="تصاميم متنوعة لزي المضيفات والمضيفين"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تنوع تصاميم أزياء المضيفات والمضيفين بين شركات الطيران المختلفة | المصدر: معرض أزياء الطيران الدولي
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المكونات الأساسية</h3>
                  <p className="mb-2 text-gray-700">تشمل عناصر الزي الأساسية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>للمضيفات: الجاكيت، البلوزة، التنورة أو البنطلون، الفستان، الوشاح، الجوارب، الأحذية، الإكسسوارات</li>
                    <li>للمضيفين: البدلة الرسمية، القميص، ربطة العنق، الحزام، الجوارب، الأحذية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الاعتبارات الثقافية والدينية</h3>
                  <p className="mb-2 text-gray-700">خصوصيات مهمة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>توفير خيارات محافظة أكثر في بعض البلدان</li>
                    <li>إضافة غطاء للرأس احتراماً للثقافة المحلية</li>
                    <li>الحفاظ على التناسق مع هوية الشركة</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">نصيحة تصميمية</h3>
                <p className="leading-7 text-gray-700">
            عند تصميم زي المضيفات، من المهم إجراء اختبارات حركة شاملة للتأكد من أن الزي يسمح بحرية الحركة في مختلف المواقف، مثل: الوصول إلى الرفوف العلوية، الانحناء لمساعدة المسافرين، الجلوس لفترات طويلة، والتحرك بسهولة في الممرات الضيقة. كما يجب مراعاة أن الزي سيتم ارتداؤه لساعات طويلة قد تصل إلى 16 ساعة متواصلة في الرحلات الطويلة.
                </p>
              </div>
            </section>

            <section id="pilot-design" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تصميم زي طاقم القيادة</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يتميز زي طاقم القيادة (الطيارين) بطابع رسمي وعسكري في معظم شركات الطيران حول العالم، مع الحفاظ على التفاصيل التقليدية التي ترمز إلى المكانة والمسؤولية.
              </p>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
          alt="تصاميم زي طاقم القيادة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  زي طاقم القيادة في مختلف شركات الطيران العالمية مع اختلافات طفيفة في التصميم | المصدر: مجلة عالم الطيران
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">عناصر زي طاقم القيادة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">المكونات الكلاسيكية:</span> البدلة الرسمية ذات اللون الداكن، القميص الأبيض، ربطة العنق، القبعة، الشارات، الأحذية السوداء اللامعة</li>
                    <li><span className="font-medium">شارات الرتبة والإنجازات:</span> تدل على المستوى الوظيفي (قائد طائرة، مساعد طيار) وسنوات الخبرة</li>
                    <li><span className="font-medium">التوازن بين التقليد والعصرية:</span> الحفاظ على الهيبة مع إضافة لمسات عصرية تميز الشركة</li>
                    <li><span className="font-medium">الراحة والعملية:</span> تصميم يناسب الجلوس لفترات طويلة في قمرة القيادة</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <p className="italic text-gray-700 border-r-4 border-blue-300 pr-4 py-2 mb-4">
          "بعكس الاعتقاد الشائع، يلعب زي الطيار دوراً مهماً ليس فقط في تعزيز السلطة والثقة، بل أيضاً في الراحة النفسية والجسدية خلال ساعات العمل الطويلة. الزي الجيد هو الذي لا تشعر بوجوده، لكنه يمنحك الثقة والاحترام الذي تحتاجه في موقع المسؤولية."
                </p>
                <p className="text-sm text-gray-600 text-left">- كابتن محمد الشمري، طيار ومستشار في تصميم أزياء الطيران</p>
              </div>
            </section>

            <section id="practical-considerations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات العملية والتقنية في تصميم زي الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
          بالإضافة إلى الجوانب الجمالية والهوية المؤسسية، يجب مراعاة مجموعة من الاعتبارات العملية والتقنية الهامة في تصميم زي طاقم الطائرة.
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الاعتبارات العملية الرئيسية</h3>
                <p className="mb-2 font-medium text-blue-700">مواصفات ضرورية للأداء الأمثل:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الراحة الحرارية: قدرة الزي على تنظيم درجة حرارة الجسم في بيئة العمل المتغيرة</li>
                  <li>سهولة العناية: قابلية الغسل المتكرر والكي السهل والتنظيف السريع للبقع</li>
                  <li>متانة الأقمشة: تحمل الاستخدام المكثف والحركة المستمرة دون تآكل أو تمزق</li>
                  <li>مرونة الحركة: السماح بحرية الحركة في مختلف المهام اليومية دون إعاقة</li>
                  <li>مقاومة التجعد: الحفاظ على المظهر الأنيق طوال الرحلة الطويلة</li>
                  <li>تعدد المقاسات: توفير خيارات تناسب مختلف أشكال الجسم للطاقم</li>
                </ul>
              </div>
              
              <p className="mb-4 leading-7 text-gray-700">
          تلعب اختيارات الأقمشة دوراً حاسماً في تحقيق التوازن بين المتطلبات المختلفة للزي، وقد شهدت السنوات الأخيرة تطورات كبيرة في تقنيات الأقمشة المستخدمة.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة التقنية المتطورة</h3>
                  <p className="mb-2 text-gray-700">مميزات حديثة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مقاومة البكتيريا والروائح</li>
                    <li>تنظيم الحرارة والتهوية الذاتية</li>
                    <li>مقاومة البقع والسوائل</li>
                    <li>قابلية التنفس والمرونة العالية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير السلامة</h3>
                  <p className="mb-2 text-gray-700">شروط أساسية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>المعالجة المقاومة للاشتعال</li>
                    <li>عدم إعاقة الحركة في حالات الطوارئ</li>
                    <li>توافق المواد مع معايير هيئات الطيران المدني</li>
                    <li>الخلو من المواد المسببة للحساسية</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل تصميم زي طاقم الطائرة تحدياً إبداعياً وتقنياً يجمع بين الفن والعلم والاستراتيجية. فهو ليس مجرد ملابس جميلة، بل هو تعبير بصري عن هوية شركة الطيران، وأداة وظيفية تؤثر على راحة وأداء الطاقم، وعنصر جمالي يترك انطباعاً دائماً في أذهان المسافرين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                نجاح تصميم زي طاقم الطائرة يعتمد على التوازن الدقيق بين متطلبات متعددة ومتباينة، والموازنة بين التقاليد والابتكار، والجمع بين الأناقة والعملية. لذلك، يتطلب هذا المجال فريقاً متعدد التخصصات يجمع بين خبرات التصميم والأزياء والتسويق وعلوم المواد وسلامة الطيران.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                مع تطور صناعة الطيران واتجاهات الموضة العالمية، ستظل أزياء الطاقم في تجدد مستمر، لكنها ستحتفظ دائماً بدورها المحوري كواجهة بصرية لشركات الطيران، وكعامل مهم في تجربة السفر الجوي الشاملة.
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