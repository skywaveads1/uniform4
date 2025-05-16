import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'ملابس طاقم الخدمات الأرضية',
  description: 'استعراض شامل لتصميم وخصائص ملابس طاقم الخدمات الأرضية في المطارات، وأهميتها في العمليات الأرضية وخدمة المسافرين',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/ground_crew_attire.jpeg';
  const title = 'ملابس طاقم الخدمات الأرضية';
  const readingTime = '8 دقائق';
  const datePublished = '١٠ يونيو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'ground-crew-categories', title: 'فئات طاقم الخدمات الأرضية' },
    { id: 'functional-requirements', title: 'المتطلبات الوظيفية والتشغيلية' },
    { id: 'uniform-design', title: 'تصميم الأزياء والهوية البصرية' },
    { id: 'materials-technologies', title: 'المواد والتقنيات المستخدمة' },
    { id: 'modern-trends', title: 'الاتجاهات الحديثة في التصميم' },
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
                  <Link href="/blog/flight-crew/flight-19" className="text-sm hover:text-blue-600 block">
                    الزي الموحد لموظفي الخدمات الأرضية في المطارات
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/airline-uniform-design-considerations" className="text-sm hover:text-blue-600 block">
                    اعتبارات تصميم زي شركات الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-8" className="text-sm hover:text-blue-600 block">
                    دور الأزياء في تعزيز الحضور المهني لطاقم الطائرة
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
                يلعب طاقم الخدمات الأرضية دوراً محورياً في سلسلة عمليات الطيران، إذ يقع على عاتقهم مسؤولية تنفيذ العمليات الحيوية التي تضمن سلامة وراحة المسافرين قبل وبعد الرحلة الجوية. ومن هنا تأتي أهمية تصميم زي متخصص يلبي احتياجاتهم المتنوعة، ويعكس صورة الشركة، ويسهم في تمييزهم بوضوح أمام المسافرين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض الخصائص والمتطلبات الأساسية لملابس طاقم الخدمات الأرضية، والاعتبارات التي تؤخذ في الاعتبار عند تصميمها، وكيفية موازنة الأناقة مع الوظيفية في هذا النوع من الأزياء المتخصصة. كما نلقي الضوء على الاتجاهات الحديثة في تصميم هذه الأزياء والابتكارات التكنولوجية التي تسهم في تعزيز أداء وسلامة طاقم العمليات الأرضية.
              </p>
            </section>

            <section id="ground-crew-categories" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">فئات طاقم الخدمات الأرضية ومتطلباتهم المختلفة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تنوع الأدوار والاحتياجات الخاصة</h3>
                <p className="mb-2 font-medium text-blue-700">يشمل طاقم الخدمات الأرضية مجموعة متنوعة من المهن والتخصصات، ولكل منها احتياجات خاصة من ناحية الزي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>موظفو تسجيل الوصول والمغادرة: يحتاجون لزي أنيق يمثل واجهة الشركة، مع الحفاظ على الراحة للوقوف لساعات طويلة</li>
                  <li>فريق مناولة الأمتعة والشحن: يتطلبون ملابس متينة ومرنة تتحمل العمل الشاق وتوفر الحماية من العوامل الجوية</li>
                  <li>مراقبو حركة الطائرات على المدرج: يحتاجون إلى ملابس عاكسة وواضحة الرؤية في جميع الظروف الجوية</li>
                  <li>فنيو الصيانة والخدمات الفنية: يلزمهم زي يوفر الحماية من المواد الكيميائية والأدوات مع جيوب وحمالات متعددة</li>
                  <li>مشرفو المطار وموظفو خدمة العملاء: يحتاجون لزي يميزهم ويسهل التعرف عليهم من قبل المسافرين</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التباين في بيئات العمل</h3>
                  <p className="mb-2 text-gray-700">تختلف ظروف العمل بشكل كبير بين أعضاء طاقم الخدمات الأرضية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>العمل الداخلي في بيئة مكيفة (صالات المطار ومكاتب التسجيل)</li>
                    <li>العمل الخارجي في مختلف الظروف الجوية (المدرج، مناطق الشحن)</li>
                    <li>التنقل المستمر بين البيئات الداخلية والخارجية</li>
                    <li>التعرض لمستويات مختلفة من الضوضاء والاهتزازات</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التسلسل الهرمي والتمييز البصري</h3>
                  <p className="mb-2 text-gray-700">يجب أن تعكس الأزياء الهيكل التنظيمي وتسهل التمييز السريع:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>رموز واضحة للرتب والمناصب الإدارية</li>
                    <li>ألوان مختلفة تشير إلى الأقسام والتخصصات المتنوعة</li>
                    <li>شارات وعلامات تحدد المهارات والتصاريح الأمنية</li>
                    <li>نظام موحد للتمييز السريع حتى من مسافة بعيدة</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="functional-requirements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المتطلبات الوظيفية والتشغيلية الأساسية</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="ملابس طاقم الخدمات الأرضية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  متطلبات ملابس طاقم الخدمات الأرضية تتنوع بتنوع المهام | المصدر: مجلة الطيران الدولية
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">معايير السلامة والحماية</h3>
              <div className="border-r-2 border-blue-500 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">تمثل سلامة الطاقم أولوية قصوى في تصميم الأزياء:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>مقاومة الحريق وفقاً للمعايير الدولية للسلامة في المطارات</li>
                  <li>مواد عاكسة عالية الوضوح تضمن الرؤية في جميع الظروف</li>
                  <li>حماية من المخاطر الكهربائية للعاملين بالقرب من معدات الطائرات</li>
                  <li>تصاميم تقلل مخاطر التعلق بالمعدات المتحركة</li>
                  <li>قفازات وأحذية واقية متكاملة مع التصميم العام</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المتانة والتحمل</h3>
                  <p className="mb-2 text-gray-700">الاستخدام المكثف يتطلب مستويات عالية من المتانة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة مقاومة للتمزق والاهتراء في مناطق الاحتكاك المرتفع</li>
                    <li>خياطات معززة تتحمل الشد والحركة المتكررة</li>
                    <li>تعزيزات إضافية في الركبتين والمرفقين وأماكن الجيوب</li>
                    <li>مقاومة للبقع والزيوت والشحوم المستخدمة في المطارات</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الراحة والمرونة</h3>
                  <p className="mb-2 text-gray-700">خصائص لتعزيز الراحة خلال ساعات العمل الطويلة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قصات تسمح بنطاق حركة واسع دون تقييد</li>
                    <li>أقمشة مرنة متعددة الاتجاهات خاصة في مناطق المفاصل</li>
                    <li>قدرة على تنظيم درجة حرارة الجسم في البيئات المختلفة</li>
                    <li>وزن خفيف لتقليل الإجهاد خلال النوبات الطويلة</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">العملية والوظيفية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تصميم يدعم أداء المهام بكفاءة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>جيوب متعددة بأحجام وتصاميم تناسب الأدوات المختلفة</li>
                    <li>حلقات وحمالات لتعليق الشارات والأدوات المهمة</li>
                    <li>تصاميم متعددة الطبقات للتكيف مع التغيرات في درجات الحرارة</li>
                    <li>سهولة الارتداء والخلع خاصة في حالات تبديل المناوبات السريعة</li>
                    <li>إمكانية التعديل حسب اختلاف الأجسام واحتياجات العمل</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="uniform-design" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تصميم الأزياء والهوية البصرية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التكامل مع هوية شركة الطيران</h3>
                <p className="mb-2 font-medium text-blue-700">تعزيز الصورة المؤسسية من خلال التصميم:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>استخدام ألوان الشركة الرئيسية في العناصر البارزة من الزي</li>
                  <li>دمج الشعار والرموز التجارية بطريقة أنيقة ومدروسة</li>
                  <li>تناسق الأسلوب العام مع الهوية البصرية للشركة</li>
                  <li>عناصر مميزة تسهل التعرف على موظفي الشركة وسط الحشود</li>
                </ul>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="الأناقة المهنية في زي طاقم الخدمات الأرضية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  الأناقة المهنية في تصميم زي فريق العمل الأرضي | المصدر: معهد تصميم أزياء الطيران
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الأناقة المهنية والمظهر الاحترافي</h3>
              <p className="mb-4 leading-7 text-gray-700">
                بالرغم من الطبيعة العملية لمهام طاقم الخدمات الأرضية، فإن الحفاظ على المظهر الأنيق والاحترافي يظل أولوية قصوى. يتحقق ذلك من خلال قصات حديثة تحافظ على الشكل الرسمي مع توفير الراحة، وتفاصيل أنيقة في الياقات والأكمام والجيوب، واختيار أقمشة تقاوم التجعد وتحتفظ بمظهر مرتب طوال اليوم. التصميم الناجح يحقق توازناً دقيقاً بين العناصر الوظيفية والجمالية، مما يعزز ثقة الموظفين وانطباعات المسافرين.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التمييز بين الوظائف والأقسام</h3>
                <p className="mb-2 text-gray-700">نظام بصري واضح للتفريق بين الفرق المختلفة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>ألوان كود محددة لكل قسم (مثل: أزرق لخدمة العملاء، أخضر للعمليات)</li>
                  <li>اختلافات في القصات والتصاميم حسب طبيعة العمل</li>
                  <li>شارات وإكسسوارات تحدد المسؤوليات والتخصصات</li>
                  <li>عناصر متدرجة تعكس المستويات الإدارية المختلفة</li>
                </ul>
              </div>
            </section>

            <section id="materials-technologies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المواد والتقنيات المستخدمة في أزياء الخدمات الأرضية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة المتخصصة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">مواد متطورة تلبي المتطلبات المتنوعة:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>أقمشة Cordura® عالية المتانة للعاملين في مناولة الأمتعة</li>
                      <li>نسيج Nomex® المقاوم للحريق للعاملين قرب الوقود والمواد الخطرة</li>
                      <li>مواد GORE-TEX® المقاومة للماء مع السماح بتهوية الجسم</li>
                      <li>أقمشة مرنة بتقنية Four-Way Stretch للحركة غير المقيدة</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معالجات تقنية متقدمة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">تقنيات تعزز الأداء والمتانة:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>معالجات مضادة للبقع والسوائل (Teflon™ Shield+)</li>
                      <li>طلاء عاكس عالي الرؤية 3M Scotchlite™ للعمل الليلي</li>
                      <li>تقنيات مضادة للبكتيريا والروائح للدوام الطويل</li>
                      <li>معالجات UV Guard لحماية العاملين في المناطق المكشوفة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تقنيات الإنتاج والخياطة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">أساليب متطورة في صناعة الملابس المتخصصة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>خياطة بتقنية Ultrasonic Bonding في المناطق الحساسة لمنع تسرب الماء</li>
                    <li>تقنية Stretch Seaming للخياطات المرنة التي تتحرك مع الجسم</li>
                    <li>استخدام Ripstop Construction لمنع انتشار التمزقات في الأقمشة</li>
                    <li>تعزيزات Triple-Needle في نقاط الضغط والاحتكاك العالي</li>
                    <li>تقنية Mesh Ventilation لتحسين تدفق الهواء في المناطق عالية التعرق</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="modern-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاتجاهات الحديثة في تصميم ملابس الخدمات الأرضية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التكنولوجيا القابلة للارتداء</h3>
                <p className="mb-2 font-medium text-blue-700">دمج العناصر الذكية مع الملابس:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>أنظمة GPS مدمجة لتتبع مواقع العاملين في المطارات الكبيرة</li>
                  <li>شارات ذكية للوصول والتحكم في الأنظمة الأمنية</li>
                  <li>أجهزة استشعار لمراقبة العوامل البيئية (ضوضاء، حرارة، إشعاع)</li>
                  <li>مستشعرات لقياس الإجهاد البدني وتحذير العمال من الإرهاق</li>
                  <li>تقنية NFC مدمجة للتواصل السريع مع الأنظمة المختلفة</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الاستدامة والمسؤولية البيئية</h3>
                  <p className="mb-2 text-gray-700">اتجاه متنامٍ نحو الممارسات المستدامة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>استخدام مواد معاد تدويرها من البلاستيك البحري والزجاجات</li>
                    <li>أقمشة مصنوعة من مصادر مستدامة مثل القطن العضوي</li>
                    <li>عمليات إنتاج منخفضة استهلاك المياه والطاقة</li>
                    <li>برامج إعادة تدوير الأزياء القديمة وتحويلها إلى منتجات جديدة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التصميم متعدد الاستخدامات</h3>
                  <p className="mb-2 text-gray-700">مرونة أكبر لتلبية الاحتياجات المتغيرة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قطع قابلة للتحويل والتعديل (أكمام قابلة للفصل، سترات متعددة الأوجه)</li>
                    <li>نظام طبقات متكامل للتكيف مع مختلف الظروف الجوية</li>
                    <li>تصميم موديولار يسمح بإضافة أو إزالة مكونات حسب المهمة</li>
                    <li>حلول تخزين مدمجة وقابلة للتخصيص حسب متطلبات العمل</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">نماذج ناجحة: تجارب شركات الطيران الرائدة</h3>
              <p className="mb-4 leading-7 text-gray-700">
                تقدم العديد من شركات الطيران العالمية نماذج ملهمة في تصميم أزياء طاقم الخدمات الأرضية. على سبيل المثال، نجحت الخطوط الجوية السنغافورية في تحقيق توازن مثالي بين الأناقة والوظيفية، من خلال تصاميم تجمع بين التأثيرات الثقافية الآسيوية والمعايير العالمية للأناقة، مع مراعاة الاحتياجات العملية المختلفة لطاقمها الأرضي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                كما تبرز تجربة شركة الخطوط البريطانية في إدماج التكنولوجيا الحديثة في أزياء طاقمها الأرضي، من خلال شراكة مع مصممين عالميين وشركات تكنولوجية لتطوير أزياء ذكية تعزز الكفاءة والسلامة. وعلى صعيد الاستدامة، قدمت شركة KLM الهولندية نموذجاً طموحاً في إعادة تدوير زجاجات البلاستيك لإنتاج أزياء لطاقمها الأرضي، محققة بذلك توفيراً بيئياً ملموساً ورسالة قوية عن التزام الشركة بالاستدامة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                هذه النماذج وغيرها تشير إلى أن مستقبل أزياء طاقم الخدمات الأرضية يتجه نحو مزيد من التكامل بين التصميم الأنيق، والوظيفية العالية، والاستدامة البيئية، والتكنولوجيا الذكية، مما يعزز تجربة العمل للطاقم ويرفع من كفاءة العمليات ويحسن انطباعات المسافرين.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
} 