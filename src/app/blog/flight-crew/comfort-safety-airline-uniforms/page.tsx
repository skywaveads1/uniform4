import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الراحة والسلامة في أزياء طاقم الطيران',
  description: 'دليل شامل حول كيفية تحقيق التوازن بين الراحة والسلامة في تصميم أزياء طاقم الطيران، مع استعراض أفضل الممارسات والتقنيات الحديثة في هذا المجال.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_safety_requirements.jpeg';
  const title = 'الراحة والسلامة في أزياء شركات الطيران';
  const readingTime = '9 دقائق';
  const datePublished = '١٠ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'comfort-importance', title: 'أهمية الراحة في بيئة الطيران' },
    { id: 'safety-elements', title: 'عناصر السلامة الأساسية' },
    { id: 'advanced-materials', title: 'الأقمشة والمواد المتطورة' },
    { id: 'functional-design', title: 'تصميم القطع بناءً على الوظائف' },
    { id: 'psychological-satisfaction', title: 'الراحة النفسية والرضا الوظيفي' },
    { id: 'balancing-requirements', title: 'توازن الراحة والسلامة مع المتطلبات الأخرى' },
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
                  <Link href="/blog/flight-crew/air-crew-attire" className="text-sm hover:text-blue-600 block">
                    التصميم المبتكر لملابس طاقم الطائرة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/modern-flight-attendant-fashion" className="text-sm hover:text-blue-600 block">
                    أزياء المضيفات الحديثة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/design-uniform" className="text-sm hover:text-blue-600 block">
                    تصميم زي طاقم الطائرة
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
            يعمل طاقم الطيران في بيئة فريدة من نوعها تجمع بين تحديات متعددة، من الرحلات الطويلة في مقصورات مضغوطة، إلى التقلبات في درجات الحرارة والضغط، وصولاً إلى ضرورة التعامل مع حالات الطوارئ المحتملة. في هذا السياق، تتجاوز أزياء طاقم الطيران كونها مجرد واجهة جمالية للشركة لتصبح أداة عمل أساسية يجب أن توفر مستويات عالية من الراحة والسلامة دون المساومة على الأناقة والمظهر الاحترافي.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            في هذا المقال، نستكشف الأبعاد المختلفة للراحة والسلامة في تصميم أزياء طاقم الطيران، ونلقي الضوء على التحديات الرئيسية، والحلول المبتكرة، وأفضل الممارسات التي تمكن المصممين والشركات من تحقيق التوازن المثالي بين المتطلبات المتنوعة لهذه الأزياء. سواء كنت مصمماً، أو مسؤولاً في شركة طيران، أو مهتماً بهذا المجال، ستجد هنا دليلاً شاملاً يساعدك على فهم وتطبيق المبادئ الأساسية لتحقيق الراحة والسلامة في أزياء طاقم الطيران.
          </p>
        </section>

            <section id="comfort-importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية الراحة في بيئة الطيران</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="راحة طاقم الطائرة في بيئة العمل"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  طاقم طائرة يعمل في المقصورة | المصدر: مجلة خدمات الطيران الدولية
                </div>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تأثير الراحة على أداء الطاقم</h3>
                <p className="mb-2 font-medium text-blue-700">العلاقة المباشرة بين الراحة والكفاءة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>انخفاض التعب وزيادة التركيز خلال ساعات العمل الطويلة</li>
                  <li>تحسين الحالة المزاجية والقدرة على التعامل مع المسافرين بإيجابية</li>
                  <li>تقليل الإصابات والآلام المرتبطة بالعمل مثل آلام الظهر والقدمين</li>
                  <li>زيادة القدرة على التحرك بسرعة وكفاءة في الممرات الضيقة</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تحديات بيئة العمل الفريدة</h3>
                  <p className="mb-2 text-gray-700">ظروف استثنائية تتطلب اعتبارات خاصة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>التغيرات المستمرة في درجات الحرارة</li>
                    <li>الرطوبة المنخفضة داخل مقصورة الطائرة (غالباً أقل من 20%)</li>
                    <li>الوقوف لفترات طويلة والحركة المستمرة</li>
                    <li>العمل في مساحات ضيقة تتطلب مرونة الحركة</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المؤشرات الإرجونومية الرئيسية</h3>
                  <p className="mb-2 text-gray-700">معايير قياس وتحسين الراحة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>خفة الوزن: تقليل الإجهاد أثناء العمل</li>
                    <li>المرونة: حرية الحركة خاصة للذراعين والكتفين</li>
                    <li>التهوية: تنظيم حرارة الجسم ومنع التعرق المفرط</li>
                    <li>الملاءمة: تصميم يناسب مختلف أنماط الجسم</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="safety-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">عناصر السلامة الأساسية</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">متطلبات السلامة التنظيمية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">معايير إلزامية تحكم تصميم الأزياء:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">معايير مقاومة الحريق:</span> (FAR 25.853 وما يعادلها) تحدد اختبارات إلزامية لمواد الزي</li>
                    <li><span className="font-medium">قوانين السلامة المهنية:</span> من هيئات الطيران المدني العالمية تضع ضوابط للسلامة</li>
                    <li><span className="font-medium">شروط مواد غير سامة:</span> عند التعرض للحرارة العالية لحماية الطاقم في حالات الطوارئ</li>
                    <li><span className="font-medium">متطلبات الوضوح والتمييز:</span> في حالات الطوارئ لتسهيل التعرف على الطاقم</li>
          </ul>
                </div>
              </div>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="اختبارات السلامة لأزياء طاقم الطائرة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  اختبارات مقاومة الحريق لأقمشة أزياء الطيران | المصدر: مركز اختبارات سلامة الطيران
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">دور الأزياء في حالات الطوارئ</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">أهمية التصميم الوظيفي للتعامل مع المواقف الحرجة:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>سهولة التحرك خلال عمليات الإخلاء</li>
                  <li>عدم وجود عناصر متدلية قد تعلق بالمعدات أو تسبب التعثر</li>
                  <li>وضوح الشارات والرتب لتسهيل القيادة في حالات الطوارئ</li>
                  <li>مقاومة الزي للحرارة لتوفير وقت إضافي للإخلاء</li>
          </ol>
              </div>
        </section>

            <section id="advanced-materials" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأقمشة والمواد المتطورة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أقمشة تقنية متخصصة</h3>
                  <p className="mb-2 text-gray-700">تطورات حديثة في مجال النسيج:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة مركبة 4-way stretch للمرونة</li>
                    <li>مواد TempControl™ لتنظيم درجة حرارة الجسم</li>
                    <li>أقمشة CoolMax® لتسريع تبخر العرق</li>
                    <li>خامات خفيفة الوزن مثل مزيج Merino Wool</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المواد المقاومة للحريق</h3>
                  <p className="mb-2 text-gray-700">حلول متوازنة بين السلامة والراحة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>ألياف Nomex® المعدلة للطيران المدني</li>
                    <li>مزيج Modacrylic بملمس قطني</li>
                    <li>معالجات Pyrovatex® للأقمشة الطبيعية</li>
                    <li>أقمشة FR Cotton المريحة والآمنة</li>
          </ol>
                </div>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="أقمشة متطورة لأزياء طاقم الطائرة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  الأقمشة التقنية المتقدمة المستخدمة في أزياء الطيران الحديثة | المصدر: معرض تكنولوجيا النسيج 2023
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">المعالجات التقنية المتقدمة</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">تقنيات تعزز أداء الأقمشة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>معالجات مضادة للبكتيريا باستخدام جزيئات الفضة النانوية</li>
                  <li>تقنيات DWR (Durable Water Repellent) لمقاومة البقع والسوائل</li>
                  <li>معالجات Permanent Press لمقاومة التجعد مع الحفاظ على المظهر الأنيق</li>
                  <li>معالجات UV Protection لحماية الطاقم العامل في المناطق المشمسة</li>
          </ul>
              </div>
        </section>

            <section id="functional-design" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تصميم القطع بناءً على الوظائف</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تصميم الجاكيت والسترات</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">اعتبارات خاصة للقطع العلوية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">قصات Action-Back:</span> توفر حرية حركة للذراعين والكتفين أثناء تقديم الخدمة ومناولة الأمتعة</li>
                    <li><span className="font-medium">فتحات تهوية استراتيجية:</span> تحت الإبط وفي الظهر لتنظيم حرارة الجسم في بيئة العمل المتغيرة</li>
                    <li><span className="font-medium">أكمام بتصميم Ergonomic:</span> للحركة الطبيعية دون تقييد خلال أداء المهام المختلفة</li>
                    <li><span className="font-medium">بطانات خفيفة قابلة للإزالة:</span> للتكيف مع درجات الحرارة المختلفة على متن الطائرة والوجهات المتنوعة</li>
          </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تصميم التنانير والبناطيل</h3>
                  <p className="mb-2 text-gray-700">حلول للجزء السفلي من الزي:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>خصر مرن جزئياً أو كلياً لزيادة الراحة</li>
                    <li>قصات تسمح بحرية الحركة مثل تصميم Gusset</li>
                    <li>خيارات متعددة للأطوال تناسب تفضيلات مختلفة</li>
                    <li>جيوب عملية ذات تصميم مخفي للحفاظ على الأناقة</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأحذية ومكملات الزي</h3>
                  <p className="mb-2 text-gray-700">عناصر مهمة لتكامل الراحة والسلامة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أحذية بتصميم طبي مع دعم للقوس</li>
                    <li>ربطات عنق وأوشحة بتصاميم آمنة سهلة الفك</li>
                    <li>حقائب وظيفية مصممة لتوزيع الوزن بشكل متوازن</li>
                    <li>إكسسوارات خفيفة الوزن لا تعيق الحركة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="psychological-satisfaction" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الراحة النفسية والرضا الوظيفي</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="الرضا الوظيفي وأزياء طاقم الطائرة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  طاقم طائرة يشعر بالرضا عن الزي الذي يرتديه | المصدر: دراسة حول الرضا الوظيفي في قطاع الطيران 2023
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التأثير النفسي للأزياء</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">أبعاد الرضا غير الملموسة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تأثير الثقة بالنفس على الأداء وتعامل الطاقم مع المسافرين</li>
                  <li>العلاقة بين الراحة الجسدية والرضا النفسي</li>
                  <li>أهمية الشعور بالانتماء والفخر بالزي المؤسسي</li>
          </ul>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">التنوع والشمولية في التصميم</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">مراعاة احتياجات وتفضيلات متنوعة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">توفير خيارات متعددة:</span> تناسب مختلف أنماط الجسم لزيادة الثقة والراحة</li>
                    <li><span className="font-medium">مراعاة الاعتبارات الثقافية والدينية:</span> في التصميم لاحترام التنوع في القوى العاملة</li>
                    <li><span className="font-medium">تصاميم غير مقيدة بالنوع الاجتماعي:</span> للموظفين مما يزيد من الشمولية والقبول</li>
                    <li><span className="font-medium">خيارات مخصصة لذوي الاحتياجات الخاصة:</span> من الطاقم لضمان بيئة عمل شاملة</li>
          </ol>
                </div>
              </div>
        </section>

            <section id="balancing-requirements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">توازن الراحة والسلامة مع المتطلبات الأخرى</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التوازن مع متطلبات العلامة التجارية</h3>
                  <p className="mb-2 text-gray-700">إيجاد نقطة الالتقاء بين الراحة والهوية المؤسسية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>استخدام ألوان العلامة التجارية في عناصر مريحة</li>
                    <li>تطبيق هوية العلامة في التفاصيل والإكسسوارات</li>
                    <li>تطوير ألوان خاصة بالشركة في أقمشة تقنية مريحة</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الموازنة بين التكلفة والجودة</h3>
                  <p className="mb-2 text-gray-700">استراتيجيات لتحقيق أقصى قيمة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحليل التكلفة على مدى العمر التشغيلي الكامل</li>
                    <li>الاستثمار في مواد عالية الجودة للقطع الأكثر استخداماً</li>
                    <li>تطوير نظام متكامل من القطع يقلل العدد الإجمالي</li>
                    <li>استخدام تقنيات إنتاج متقدمة لتقليل الهدر</li>
          </ol>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الاستدامة والمسؤولية البيئية</h3>
              <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
                <p className="mb-2 font-medium text-green-800">دمج الاعتبارات البيئية مع الراحة والسلامة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>استخدام مواد معاد تدويرها مع الحفاظ على خصائص السلامة</li>
                  <li>تصميم أزياء أطول عمراً لتقليل الاستهلاك والنفايات</li>
                  <li>اختيار أقمشة عضوية ومستدامة تلبي معايير صناعة الطيران</li>
                  <li>تطوير نظام لإعادة تدوير الأزياء القديمة بطرق مسؤولة</li>
          </ul>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تحقيق التوازن المثالي بين الراحة والسلامة في أزياء طاقم الطيران يتطلب نهجاً شاملاً يأخذ في الاعتبار مجموعة واسعة من العوامل المترابطة. من الناحية العملية، يعني هذا الجمع بين المواد والتقنيات المتطورة، والتصاميم المدروسة بعناية، والاستماع إلى احتياجات الطاقم الفعلية، مع الالتزام بمعايير السلامة الصارمة في صناعة الطيران.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                الاتجاهات المستقبلية في هذا المجال تشير إلى تزايد التكامل بين التكنولوجيا والأزياء، وزيادة التركيز على الاستدامة والشمولية، والتوجه نحو حلول مخصصة تلبي احتياجات الأفراد دون المساس بالهوية المؤسسية. في النهاية، فإن الأزياء التي تحقق التوازن الأمثل بين الراحة والسلامة لا تعزز فقط رفاهية وأداء الطاقم، بل تسهم أيضاً في تعزيز سمعة شركة الطيران وجودة الخدمة المقدمة للمسافرين.
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