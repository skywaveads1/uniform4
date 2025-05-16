import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import { ArticleImage } from '@/components/ArabicContentElements';

export const metadata = {
  title: 'الإكسسوارات المكملة لزي طاقم الطيران',
  description: 'دليل شامل للإكسسوارات المكملة لزي طاقم الطائرة، من الشارات والأوشحة إلى الحقائب والأحذية، ودورها في تعزيز المظهر المهني وإكمال الهوية البصرية.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_scarves.jpeg';
  const title = 'الإكسسوارات المكملة لزي طاقم الطيران';
  const readingTime = '7 دقائق';
  const datePublished = '٣٠ يوليو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'badges-pins', title: 'الشارات والدبابيس الرسمية' },
    { id: 'scarves-ties', title: 'الأوشحة وربطات العنق' },
    { id: 'footwear', title: 'الأحذية المهنية' },
    { id: 'bags-luggage', title: 'الحقائب وأمتعة السفر' },
    { id: 'watches-jewelry', title: 'الساعات والمجوهرات المسموح بها' },
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
                  <Link href="/blog/flight-crew/flight-2" className="text-sm hover:text-blue-600 block">
                    اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-8" className="text-sm hover:text-blue-600 block">
                    دور الأزياء في تعزيز الحضور المهني لطاقم الطائرة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-17" className="text-sm hover:text-blue-600 block">
                    الصيانة والعناية الصحيحة بزي طاقم الطائرة
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="إكسسوارات مكملة لزي طاقم الطيران"
                caption="الإكسسوارات المختلفة التي تكمل زي طاقم الطيران وتعزز الهوية المؤسسية"
              />
              
              <p className="mb-4 leading-7 text-gray-700">
                عندما نفكر في زي طاقم الطائرة، غالباً ما يتبادر إلى أذهاننا البدلات الأنيقة والتنانير المصممة بعناية والقمصان ذات الألوان المميزة. لكن ما يغيب عن الأنظار أحياناً هو الدور الحاسم الذي تلعبه الإكسسوارات في إكمال هذا المظهر المهني وتعزيز الهوية البصرية لشركات الطيران.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                الإكسسوارات ليست مجرد إضافات ثانوية للزي، بل هي عناصر أساسية تحمل دلالات وظيفية ورمزية، وتسهم بشكل كبير في تحديد الرتب والمسؤوليات، وتضفي لمسة من التميز والأناقة، وتعكس هوية العلامة التجارية لشركة الطيران. من الشارات والدبابيس التي تشير إلى سنوات الخبرة والتخصص، إلى الأوشحة وربطات العنق التي تعزز الألوان الرسمية للشركة، وصولاً إلى الأحذية والحقائب والساعات التي تكمل المظهر المهني المتكامل.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستكشف عالم الإكسسوارات المكملة لزي طاقم الطائرة، ونتعرف على أنواعها المختلفة ووظائفها العملية ودلالاتها الرمزية. كما نلقي الضوء على معايير اختيارها، والتوازن بين الجانب الجمالي والجانب الوظيفي، والتحديات التي تواجه تصميمها وتطويرها في عالم الطيران المعاصر. ونستعرض أيضاً كيف تختلف هذه الإكسسوارات بين شركات الطيران المختلفة، وكيف تعكس هوية وثقافة كل شركة.
          </p>
        </section>

            <section id="badges-pins" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الشارات والدبابيس الرسمية</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="شارات ودبابيس طاقم الطيران"
                caption="الشارات والدبابيس تعكس الرتبة والخبرة والإنجازات المهنية"
              />
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">رموز الهوية والمكانة</h3>
                <p className="mb-2 font-medium text-blue-700">الوظائف الأساسية للشارات في الطيران:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تحديد الرتبة والمنصب ضمن التسلسل الهرمي للطاقم (كابتن، طيار مساعد، كبير المضيفين)</li>
                  <li>عرض الخبرة ومدة الخدمة من خلال علامات أو نجوم تشير إلى سنوات العمل</li>
                  <li>تعريف المسافرين بهوية أفراد الطاقم وأدوارهم الوظيفية</li>
                  <li>تمثيل هوية شركة الطيران من خلال الشعار الرسمي وألوان العلامة التجارية</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أنواع الشارات في الطيران</h3>
                  <p className="mb-2 text-gray-700">تصنيف بحسب الوظيفة والموقع:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>شارات الكتف (أشرطة الأكتاف): تشير إلى رتبة الطيارين وكبار الطاقم</li>
                    <li>شارات الصدر: تحمل الاسم والمنصب وشعار الشركة</li>
                    <li>دبابيس الخدمة: تمثل سنوات الخبرة أو الإنجازات الاستثنائية</li>
                    <li>شارات الجناح: ترمز للطيارين والمضيفين، غالباً ما تكون مصنوعة من المعدن</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المواد والتصاميم</h3>
                  <p className="mb-2 text-gray-700">جودة الصنع والمظهر:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>المعادن الفاخرة: الفضة، النحاس المطلي بالذهب، النيكل كروم للشارات الدائمة</li>
                    <li>المينا (Enamel): لإضافة ألوان زاهية وتفاصيل دقيقة إلى الشعارات</li>
                    <li>التطريز الدقيق: للشارات القماشية على الأكتاف والأكمام</li>
                    <li>تقنيات النقش والحفر: لإضافة الأسماء والتواريخ والتفاصيل الشخصية</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الاختلافات بين شركات الطيران</h3>
                <p className="mb-2 text-gray-700">تنوع ثقافي وتمييز تجاري:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تصاميم مستوحاة من التراث: استخدام رموز ثقافية محلية (مثل الصقر في الخليج العربي)</li>
                  <li>نظام الألوان: استخدام الألوان الوطنية أو ألوان العلامة التجارية في الشارات</li>
                  <li>التفاصيل التقليدية مقابل المعاصرة: تعكس موقع الشركة على طيف التقليد والحداثة</li>
                  <li>مستوى الفخامة: شارات أكثر تفصيلاً وثراءً في شركات الطيران الفاخرة</li>
          </ul>
              </div>
        </section>

            <section id="scarves-ties" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأوشحة وربطات العنق</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="أوشحة وربطات عنق لطاقم الطيران"
                caption="الأوشحة وربطات العنق تضيف لمسة من الأناقة واللون للزي الرسمي"
              />
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">رمز الأناقة والهوية البصرية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">الدور الاستراتيجي في الزي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تمثل نقطة تركيز بصرية تلفت الانتباه وتستخدم لإبراز ألوان الشركة</li>
                    <li>تضفي لمسة من الأناقة والاكتمال على المظهر العام للزي</li>
                    <li>تعزز تمييز الهوية البصرية للشركة من خلال النقوش والتصاميم الحصرية</li>
                    <li>تتيح تنويعاً موسمياً أو ربطاً بمناسبات خاصة دون تغيير الزي الأساسي بالكامل</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">النسيج والتصميم</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">خصائص وميزات الاختيار:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>الحرير الطبيعي: يستخدم للأوشحة الفاخرة وربطات العنق الرسمية لمظهره الراقي</li>
                  <li>الأقمشة الاصطناعية: تتميز بسهولة العناية والمتانة والمقاومة للتجعد في الرحلات الطويلة</li>
                  <li>تقنيات الطباعة المتقدمة: تسمح بتصاميم معقدة ونقوش دقيقة تعكس رموز الشركة</li>
                  <li>معالجات خاصة: مثل المقاومة للبقع والرطوبة لتناسب ظروف العمل على متن الطائرات</li>
          </ol>
              </div>

              <div className="bg-white p-5 border border-gray-300 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الاتجاهات الحديثة</h3>
                <p className="mb-2 text-gray-700">تطورات معاصرة في التصميم:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>التعاون مع مصممي الأزياء: إبداعات حصرية من مصممين عالميين لبعض شركات الطيران الكبرى</li>
                  <li>التركيز على القابلية للتبديل: مجموعات متنوعة من الأوشحة وربطات العنق يمكن تغييرها حسب المناسبة</li>
                  <li>استخدام التقنيات التقليدية المحلية: مثل التطريز اليدوي لإبراز الهوية الثقافية</li>
                  <li>أوشحة متعددة الاستخدامات: تصاميم مبتكرة يمكن ارتداؤها بطرق مختلفة للتنويع في المظهر</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أوشحة المضيفات</h3>
                  <p className="mb-2 text-gray-700">عنصر مميز في الزي النسائي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تنوع طرق الارتداء: حول الرقبة، على الكتف، كحزام، أو كإضافة للسترة</li>
                    <li>أحجام مختلفة: من الأوشحة الصغيرة إلى الشالات الكبيرة حسب التصميم والغرض</li>
                    <li>رموز خاصة: نقوش وزخارف تحمل معاني ثقافية أو تاريخية مرتبطة بالشركة</li>
                    <li>دور في تمييز الرتب: اختلافات في النقش أو اللون قد تشير إلى المستويات الوظيفية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">ربطات العنق للطاقم الذكور</h3>
                  <p className="mb-2 text-gray-700">تطور التصميم الكلاسيكي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أنماط الربط: تحديد ربطة العنق الرسمية أو الإتاحة للطاقم حرية اختيار طريقة الربط</li>
                    <li>ربطات العنق الجاهزة: توفير البدائل العملية سهلة الارتداء للاستخدام اليومي</li>
                    <li>العروات المغناطيسية أو القابلة للفصل: لأسباب تتعلق بالسلامة في بعض شركات الطيران</li>
                    <li>التحول نحو التصاميم النحيفة: اعتماد ربطات العنق الأضيق تماشياً مع الاتجاهات المعاصرة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="footwear" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأحذية المهنية</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="أحذية وحقائب طاقم الطيران"
                caption="الأحذية والحقائب المصممة خصيصاً لتناسب احتياجات طاقم الطيران"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التوازن بين الراحة والأناقة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">متطلبات أساسية:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>تصميم يتحمل الوقوف والمشي لساعات طويلة دون التسبب بالإرهاق أو الألم</li>
                      <li>دعم قوسي مناسب للقدم لمنع مشاكل الظهر والمفاصل على المدى الطويل</li>
                      <li>خفة الوزن مع الحفاظ على المتانة والمظهر الأنيق</li>
                      <li>سهولة التنظيف والعناية لضمان مظهر احترافي متواصل</li>
          </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير السلامة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">اشتراطات إلزامية:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>نعال غير قابلة للانزلاق للتعامل مع الحالات الطارئة وأسطح الطائرة المختلفة</li>
                      <li>ارتفاع كعب معتدل (عادة أقل من 5 سم) للمضيفات لضمان الثبات والقدرة على الحركة السريعة</li>
                      <li>تصميم يسمح بالخلع السريع في حالات الطوارئ المائية</li>
                      <li>مواد مقاومة للحرارة والاشتعال في بعض الحالات لمتطلبات السلامة</li>
          </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">أنواع الأحذية حسب الوظيفة</h3>
                <p className="mb-2 text-gray-700">تصميمات متخصصة للأدوار المختلفة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أحذية الطيارين: عادة تكون أحذية جلدية سوداء ذات رباط، تجمع بين الأناقة الرسمية والراحة</li>
                  <li>أحذية المضيفات: أنيقة ذات كعب معتدل، متناغمة مع ألوان الزي، وغالباً ما تكون من الجلد الناعم</li>
                  <li>أحذية المضيفين الذكور: أحذية رسمية كلاسيكية سهلة التلميع، مصممة للتنقل المستمر</li>
                  <li>أحذية طاقم العمليات الأرضية: أكثر متانة ومقاومة للعوامل الجوية، مع وجود خيارات للحماية من الصدمات</li>
          </ul>
              </div>

              <div className="bg-white p-5 border border-gray-300 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التكنولوجيا والابتكارات</h3>
                <p className="mb-2 text-gray-700">تطورات حديثة في تصميم الأحذية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تقنيات تخفيف الصدمات: نعال مزودة بوسائد هوائية أو جل للتقليل من ضغط الوقوف الطويل</li>
                  <li>مواد متطورة: استخدام البوليمرات الخفيفة وألياف الكربون لتقليل الوزن وزيادة المتانة</li>
                  <li>بطانات مضادة للبكتيريا: تقليل الروائح وتعزيز النظافة خلال ساعات العمل الطويلة</li>
                  <li>تصاميم قابلة للتهوية: للحفاظ على درجة حرارة القدم وتجنب التعرق المفرط</li>
                  <li>نعال قابلة للتبديل: لتخصيص مستوى الدعم حسب احتياجات كل فرد</li>
          </ul>
              </div>
        </section>

            <section id="bags-luggage" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الحقائب وأمتعة السفر</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">الوظيفة والتصميم</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">الحقائب المهنية للطاقم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>حقائب الطاقم الرسمية: مصممة بألوان وشعارات الشركة، تعزز الهوية المرئية الموحدة</li>
                    <li>حقائب الوثائق والمستندات: لحفظ الأوراق الضرورية وأدلة السلامة والقوائم التشغيلية</li>
                    <li>حقائب المعدات الشخصية: تحتوي على المستلزمات الضرورية للرحلات الطويلة والرحلات المتعددة</li>
                    <li>حقائب الزي الرسمي: مصممة خصيصاً لحمل بدلات وأزياء الطاقم مع تقليل التجعد والطي</li>
          </ul>
                </div>
              </div>

              <div className="bg-white p-5 border border-gray-300 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">خصائص ومتطلبات</h3>
                <p className="mb-2 text-gray-700">مواصفات الجودة والمتانة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>مواد عالية التحمل: تقاوم الاستخدام المكثف والشحن المتكرر والتعامل القاسي</li>
                  <li>عجلات فائقة الصلابة: تتحمل الحركة المستمرة على أسطح مختلفة</li>
                  <li>مقابض قوية ومريحة: تسهل الحمل والسحب خلال التنقلات المتعددة</li>
                  <li>تنظيم داخلي ذكي: حجرات وجيوب متخصصة للأغراض المختلفة</li>
                  <li>أوزان خفيفة: لتسهيل التنقل مع متطلبات أمتعة الطاقم الدقيقة</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مميزات الحقائب الرسمية</h3>
                  <p className="mb-2 text-gray-700">عناصر التصميم المميزة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>ألوان موحدة تعكس هوية الشركة وتناسق الزي الرسمي</li>
                    <li>شعارات بارزة للعلامة التجارية تعزز التعريف بالهوية المؤسسية</li>
                    <li>تفاصيل متناسقة مع الإكسسوارات الأخرى (مثل الأحزمة والأحذية)</li>
                    <li>تصميم مميز يسهل التعرف عليها في المطارات المزدحمة والفنادق</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أمثلة من شركات طيران عالمية</h3>
                  <p className="mb-2 text-gray-700">تصاميم فريدة وموجهة للعلامة التجارية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الخطوط الإماراتية: حقائب جلدية فاخرة باللون البيج مع تفاصيل حمراء تعكس فخامة العلامة</li>
                    <li>الخطوط البريطانية: حقائب كلاسيكية أنيقة بتصميم بريطاني محافظ وشعار الشركة البارز</li>
                    <li>الخطوط السنغافورية: حقائب أنيقة بتفاصيل مستوحاة من نقوش الساري التقليدي</li>
                    <li>الخطوط القطرية: حقائب عصرية ذات جودة عالية بلمسات من التصميم الشرقي المعاصر</li>
          </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الاتجاهات الحديثة والابتكارات</h3>
                <p className="mb-2 font-medium text-blue-700">تطورات في عالم حقائب الطاقم:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>حقائب ذكية مزودة بتقنية تعقب GPS لتجنب الضياع في المطارات المزدحمة</li>
                  <li>شواحن مدمجة وموصلات USB للأجهزة الإلكترونية أثناء التنقل</li>
                  <li>مواد مستدامة وصديقة للبيئة تعكس التزام شركات الطيران بالمسؤولية البيئية</li>
                  <li>تصاميم مدمجة توفر أقصى مساحة تخزين مع الالتزام بقيود الحجم والوزن الصارمة</li>
                  <li>تعاونات مع علامات تجارية فاخرة في مجال الحقائب لتعزيز الصورة الراقية للشركة</li>
          </ul>
              </div>
        </section>

            <section id="watches-jewelry" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الساعات والمجوهرات المسموح بها</h2>
              
              <div className="bg-white p-5 border border-gray-300 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">معايير وضوابط</h3>
                <p className="mb-2 text-gray-700">سياسات شركات الطيران للإكسسوارات الشخصية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>سياسات صارمة للحد من المجوهرات البارزة التي قد تعيق العمل أو تشكل خطراً للسلامة</li>
                  <li>توجيهات محددة للحجم والشكل والكمية المسموح بها من المجوهرات أثناء الخدمة</li>
                  <li>توازن بين السماح بالتعبير الشخصي والحفاظ على المظهر المهني الموحد</li>
                  <li>مراعاة الاختلافات الثقافية والجندرية في سياسات المجوهرات</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الساعات المهنية</h3>
                  <p className="mb-2 text-gray-700">أكثر من مجرد أداة لمعرفة الوقت:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>وظيفية ضرورية للطاقم لتتبع أوقات الرحلة وجداول الخدمة وفترات الراحة</li>
                    <li>تفضيل الساعات ذات القدرة على عرض مناطق زمنية متعددة للرحلات الدولية</li>
                    <li>متطلبات متانة عالية للتعامل مع الاستخدام المكثف والضغط الجوي المتغير</li>
                    <li>ميل لاختيار تصاميم كلاسيكية أنيقة تناسب مختلف المواقف الرسمية</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الإرشادات الخاصة بالمجوهرات</h3>
                  <p className="mb-2 text-gray-700">قواعد متبعة في معظم شركات الطيران:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الأقراط: عادة يسمح بقرط واحد أو زوج صغير غير متدلٍ في كل أذن</li>
                    <li>الخواتم: غالباً ما يسمح بواحد أو اثنين كحد أقصى، مع تفضيل التصاميم البسيطة</li>
                    <li>الأساور والقلادات: محدودة جداً أو غير مسموح بها لاعتبارات السلامة</li>
                    <li>دبابيس الزينة: تقتصر عادة على الدبابيس الرسمية المرتبطة بالشركة أو الخدمة</li>
          </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">المجوهرات كرموز مهنية</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">الدلالات غير المرئية للإكسسوارات:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>دبابيس سنوات الخدمة: تمنح للاحتفاء بسنوات العمل في الشركة (5، 10، 25 سنة)</li>
                    <li>دبابيس التميز: تكريم للأداء الاستثنائي أو الإنجازات الخاصة</li>
                    <li>رموز العضوية: تشير إلى الانتماء لمجموعات أو تخصصات معينة داخل الشركة</li>
                    <li>مجوهرات تحمل شعار الشركة: ممنوحة كهدايا للطاقم في المناسبات الخاصة</li>
          </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">اعتبارات خاصة</h3>
                <p className="mb-2 text-gray-700">توازنات في السياسات والممارسات:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>الاعتبارات الثقافية والدينية: مراعاة المجوهرات ذات الأهمية الدينية مثل الصلبان أو الخواتم الزواجية</li>
                  <li>المجوهرات الطبية: استثناءات للأساور أو القلادات الطبية التي تحمل معلومات صحية ضرورية</li>
                  <li>الأناقة المحافظة: تفضيل المجوهرات البسيطة من المعادن الثمينة (الذهب، الفضة، البلاتين) على التصاميم الملفتة</li>
                  <li>التنوع العالمي: سياسات متوازنة تراعي اختلاف المعايير الثقافية في المسارات الدولية المختلفة</li>
          </ul>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تلعب الإكسسوارات دوراً محورياً في تشكيل الهوية المرئية المتكاملة لطاقم الطائرة وتعزيز الاحترافية والتميز في المظهر العام. هذه العناصر ليست مجرد إضافات تجميلية، بل تحمل دلالات وظيفية وثقافية عميقة، وتسهم في ترسيخ الانتماء المؤسسي وتمييز الرتب والمسؤوليات وتسهيل التواصل البصري مع المسافرين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                ما يميز إكسسوارات الطيران عن غيرها هو ذلك التوازن الدقيق بين الوظيفية والأناقة، فهي مصممة لتلبية متطلبات بيئة عمل فريدة تجمع بين الضرورات العملية واعتبارات السلامة والحاجة إلى مظهر أنيق يعكس مستوى الخدمة الراقية. من الشارات والدبابيس التي تحمل رموز المكانة والخبرة، إلى الأوشحة وربطات العنق التي تعزز الهوية البصرية، وصولاً إلى الأحذية والحقائب والساعات المصممة خصيصاً لتحمل متطلبات الحياة المهنية للطاقم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                مع تطور صناعة الطيران، تستمر إكسسوارات طاقم الطائرة في التطور والابتكار، مستفيدة من التقنيات الجديدة والمواد المتطورة والمفاهيم التصميمية المعاصرة. وتتجه الاتجاهات المستقبلية نحو مزيد من التخصيص والاستدامة والوظائف الذكية، مع الحفاظ على العناصر الكلاسيكية التي تميز هذه المهنة العريقة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في النهاية، تبقى الإكسسوارات المكملة لزي طاقم الطائرة شاهداً على الاهتمام بالتفاصيل والالتزام بمعايير الاحترافية العالية التي تميز صناعة الطيران. فهي ليست مجرد تفاصيل صغيرة، بل هي جزء أساسي من اللغة البصرية التي تتواصل بها شركات الطيران مع عملائها، وتعبر من خلالها عن قيمها وهويتها في سماء عالمي متنوع ومتنافس.
          </p>
        </section>
      </article>
        </div>
      </div>
    </main>
  );
} 