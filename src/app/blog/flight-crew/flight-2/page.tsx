import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة',
  description: 'دليل شامل حول اختيار الأقمشة المناسبة لزي طاقم الطائرة، مع التركيز على معايير الجودة والمتانة والراحة والسلامة المطلوبة في بيئة الطيران.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_uniform_fabrics.jpeg';
  const title = 'اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة';
  const readingTime = '7 دقائق';
  const datePublished = '٢٠ مايو ٢٠٢٣';
  const authorName = 'د. علي الهذيل';
  const authorImage = '/images/author/علي_الهذيل.jpg';
  const authorTitle = 'خبير في أقمشة وخامات الملابس المهنية';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'criteria', title: 'معايير اختيار أقمشة زي طاقم الطائرة' },
    { id: 'fabric-types', title: 'أنواع الأقمشة الأكثر استخداماً' },
    { id: 'innovations', title: 'الابتكارات التقنية في أقمشة أزياء الطيران' },
    { id: 'testing', title: 'اختبارات جودة الأقمشة ومعاييرها' },
    { id: 'care', title: 'العناية بأقمشة زي طاقم الطائرة' },
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
            
            {/* Author information */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">الكاتب</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    width={64}
                    height={64}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">{authorName}</h4>
                  <p className="text-sm text-gray-600">{authorTitle}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مشاركة المقال</h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="border-t pt-4 mt-6">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/flight-crew/flight-1" className="text-sm hover:text-blue-600 block">
                    اعتبارات تصميم زي شركات الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-3" className="text-sm hover:text-blue-600 block">
                    أزياء الطيران النسائية: تطورها وخصائصها الحديثة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-7" className="text-sm hover:text-blue-600 block">
                    متطلبات السلامة والأمان في تصميم ملابس طاقم الطائرة
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
                تشكل أقمشة زي طاقم الطائرة عنصراً أساسياً لا يقل أهمية عن التصميم والقصات، حيث تؤثر بشكل مباشر على جودة الأداء وراحة الطاقم والعمر الافتراضي للزي. فبينما تجذب الألوان والتصاميم الانتباه، تظل الأقمشة هي البطل الخفي الذي يحدد مدى نجاح الزي في تحقيق أهدافه العملية والجمالية على حد سواء.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في بيئة الطيران، تواجه الأقمشة تحديات فريدة تتجاوز متطلبات الملابس التقليدية. فهي يجب أن تتحمل التغيرات في الضغط الجوي والرطوبة، وساعات العمل الطويلة، والحركة المستمرة، مع الحفاظ على مظهر أنيق ومهني. كما يجب أن تلبي معايير صارمة للسلامة والأداء الوظيفي لا تقبل المساومة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض الاعتبارات الرئيسية لاختيار أقمشة زي طاقم الطائرة، ونناقش الخصائص المطلوبة، والمواد الشائعة والمبتكرة في هذا المجال، والتقنيات الحديثة التي تحسن من أداء الأقمشة. كما نقدم رؤى من خبراء الصناعة حول كيفية تحقيق التوازن المثالي بين المتانة والراحة والأناقة والاستدامة في اختيار أقمشة زي طاقم الطائرة.
              </p>
            </section>

            <section id="criteria" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير اختيار أقمشة زي طاقم الطائرة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المتانة والأداء طويل المدى</h3>
                <p className="mb-2 font-medium text-blue-700">الصفات التي تضمن العمر الافتراضي للزي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>مقاومة التآكل والاحتكاك خاصة في مناطق الاستخدام المكثف (الأكمام، الياقات، الجيوب)</li>
                  <li>قوة الشد والمتانة لتحمل الحركة المتكررة وحمل الأمتعة والتجهيزات</li>
                  <li>ثبات الألوان بعد غسيل متكرر وتعرض للضوء والعرق</li>
                  <li>قدرة على الاحتفاظ بالشكل والقصة دون تمدد أو انكماش بمرور الوقت</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الراحة وقابلية الارتداء</h3>
                  <p className="mb-2 text-gray-700">خصائص لضمان راحة الطاقم خلال ساعات العمل الطويلة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>سهولة التنفس ونفاذية الهواء للتعامل مع بيئة المقصورة المكيفة</li>
                    <li>الوزن الخفيف لتقليل الإرهاق خلال النوبات الطويلة</li>
                    <li>المرونة والمطاطية للسماح بحرية الحركة أثناء أداء المهام المختلفة</li>
                    <li>لطافة الملمس على الجلد لمنع التهيج مع الاستخدام المستمر</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">متطلبات السلامة</h3>
                  <p className="mb-2 text-gray-700">معايير لا يمكن التنازل عنها:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مقاومة الاشتعال والحريق وفقاً لمعايير هيئات الطيران المدني</li>
                    <li>خلو من المواد المسببة للحساسية للطاقم المعرض للتلامس المستمر</li>
                    <li>قابلية الانصهار المنخفضة لمنع إلحاق ضرر إضافي في حالات الطوارئ</li>
                    <li>عدم إنتاج أبخرة سامة عند التعرض للحرارة العالية</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="fabric-types" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أنواع الأقمشة الأكثر استخداماً في زي طاقم الطائرة</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الأقمشة التقليدية ومميزاتها</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">الخيارات المثبتة عبر الزمن:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الصوف: متانة ومظهر فاخر للسترات والبدلات الرسمية، مع خصائص طبيعية لمقاومة الحريق</li>
                    <li>خلطات الصوف والبوليستر: توازن بين الأناقة والمتانة وسهولة العناية</li>
                    <li>القطن المعالج: نعومة وراحة للبشرة مع معالجات خاصة لتحسين المتانة</li>
                    <li>الحرير: استخدام محدود في الإكسسوارات والأوشحة لإضفاء لمسة فاخرة</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">المواد الاصطناعية والمخلوطة</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">حلول للأداء العالي:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>البوليستر عالي الأداء: مقاومة التجعد والاحتفاظ بالشكل وسهولة العناية</li>
                  <li>النايلون المعزز: متانة استثنائية مع خفة الوزن للقطع المعرضة للاحتكاك</li>
                  <li>الإيلاستين (Spandex): يضاف بنسب صغيرة لتحسين المرونة والراحة</li>
                  <li>التريكوت المزدوج: مرونة واستقرار الأبعاد مع نعومة الملمس للقمصان والبلوزات</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الخلطات المصممة خصيصاً للطيران</h3>
                <p className="mb-2 text-gray-700">تركيبات متخصصة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>خلطات 60/40 بوليستر/صوف: توازن مثالي بين المتانة والمظهر الفاخر للبدلات</li>
                  <li>التويل المعالج (Treated Twill): قوة تحمل عالية للبناطيل والتنانير</li>
                  <li>ميكروفايبر عالي الكثافة: نعومة مع مقاومة للبقع والسوائل</li>
                  <li>خلطات تنظيم الحرارة: مزيج من ألياف تقليدية ومتقدمة للتكيف مع تغيرات درجات الحرارة</li>
                </ul>
              </div>
            </section>

            <section id="innovations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الابتكارات التقنية في أقمشة أزياء الطيران</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تقنيات النانو والمعالجات المتقدمة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">تحسينات على المستوى الجزيئي:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>معالجات النانو للمقاومة الفائقة للبقع والسوائل دون التأثير على الملمس</li>
                      <li>تقنية الجزيئات الفضية المضادة للبكتيريا لمنع الروائح وزيادة فترات الاستخدام</li>
                      <li>طلاءات التفلون الدقيقة لتسهيل إزالة البقع الصعبة</li>
                      <li>معالجات مضادة للكهرباء الساكنة خاصة للبيئة الجافة داخل الطائرة</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أقمشة تنظيم درجة الحرارة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">التكيف مع البيئة المتغيرة:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>ألياف PCM (Phase Change Materials) التي تمتص وتطلق الحرارة</li>
                      <li>أقمشة Outlast® المطورة أصلاً لوكالة ناسا للتكيف مع تقلبات الحرارة</li>
                      <li>تقنية Coolmax® لنقل الرطوبة وتعزيز التبخر للحفاظ على برودة الجسم</li>
                      <li>أقمشة ذات بنية مسامية متدرجة للتنظيم الفعال للتنفس والعزل</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة الوظيفية متعددة الاستخدامات</h3>
                <p className="mb-2 text-gray-700">الأداء المتخصص:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أقمشة مزدوجة الوجه بخصائص مختلفة للكل جانب (مثل جانب عاكس للحرارة وآخر ماص)</li>
                  <li>خامات مضادة للأشعة فوق البنفسجية لحماية الطاقم العامل على المدرج</li>
                  <li>أقمشة ذاتية التنظيف باستخدام تقنيات تحفيز ضوئي تتفاعل مع الضوء لإزالة البقع</li>
                  <li>مواد قابلة للتكيف تعدل بنيتها استجابة للعوامل البيئية مثل الرطوبة والحرارة</li>
                </ul>
              </div>
            </section>

            <section id="testing" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اختبارات جودة الأقمشة ومعاييرها</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">اختبارات المتانة والأداء</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">قياسات موضوعية للجودة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>اختبار مارتينديل (Martindale) لمقاومة التآكل والاحتكاك (المعيار المطلوب 30,000+ دورة)</li>
                    <li>اختبار قوة الشد والتمزق باتجاهي السداة واللحمة</li>
                    <li>اختبار ثبات الألوان ضد الضوء والغسيل والعرق وفق مقياس الثبات الرمادي</li>
                    <li>اختبار التكور (Pilling) لتقييم تكون الكريات الصغيرة على سطح القماش</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">اختبارات السلامة والامتثال</h3>
                  <p className="mb-2 text-gray-700">المعايير التنظيمية والإلزامية:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>اختبار مقاومة الاشتعال وفق معيار FAR 25.853</li>
                    <li>اختبار إنتاج الدخان والغازات السامة أثناء الاحتراق</li>
                    <li>فحص المواد المسببة للحساسية وفق معايير Oeko-Tex</li>
                    <li>اختبارات الامتثال للوائح المواد الخطرة REACH الأوروبية</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">اختبارات الراحة والأداء الوظيفي</h3>
                  <p className="mb-2 text-gray-700">تقييم تجربة المستخدم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قياس نفاذية الهواء والماء ومعدل نقل بخار الرطوبة</li>
                    <li>اختبار المقاومة الحرارية وقدرة العزل</li>
                    <li>تقييم المرونة ومدى استعادة الشكل بعد التمدد</li>
                    <li>اختبارات ميدانية للأداء في ظروف التشغيل الحقيقية</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="care" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناية بأقمشة زي طاقم الطائرة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">إرشادات الغسيل والصيانة</h3>
                <p className="mb-2 text-gray-700">الحفاظ على جودة الزي:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تعليمات محددة للغسيل حسب نوع القماش (درجة الحرارة، نوع المنظفات)</li>
                  <li>توصيات بشأن التنظيف الجاف مقابل الغسيل المنزلي</li>
                  <li>طرق تجنب التجعد والحفاظ على شكل القطع</li>
                  <li>تقنيات تخزين لإطالة عمر الزي في فترات عدم الاستخدام</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <p className="mb-4 leading-7 text-gray-700">
                  يتضح مما سبق أن اختيار أقمشة زي طاقم الطائرة ليس مجرد قرار جمالي بل هو عملية معقدة تجمع بين علم المواد والوظيفة والجمال. الأقمشة المثالية هي التي تحقق توازناً بين المتانة والراحة والسلامة والأناقة، مع مراعاة التكلفة والاستدامة.
                </p>
                <p className="mb-4 leading-7 text-gray-700">
                  مع التقدم المستمر في تكنولوجيا النسيج، تتزايد الخيارات المتاحة أمام شركات الطيران لتحسين أداء أزياء طاقمها. ويظل التحدي هو اختيار المزيج الأنسب من المواد والمعالجات التي تلبي الاحتياجات المحددة لكل شركة طيران، بناءً على نموذج تشغيلها ووجهاتها وصورتها المؤسسية وميزانيتها.
                </p>
                <p className="mb-4 leading-7 text-gray-700">
                  الاستثمار في أقمشة عالية الجودة، رغم تكلفته الأولية المرتفعة، يعود بفوائد طويلة المدى من حيث إطالة عمر الزي، وتحسين رضا الطاقم، وتعزيز صورة العلامة التجارية، وحتى توفير تكاليف الاستبدال المتكرر. وبالتالي، فإن النظرة الشاملة لدورة حياة الزي بأكملها هي المفتاح لاتخاذ قرار مستنير بشأن اختيار أقمشة زي طاقم الطائرة.
                </p>
              </div>
            </section>

            {/* قسم التعليقات */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-6">التعليقات</h3>
              <p className="text-gray-600 mb-4">شاركنا رأيك حول هذا المقال</p>
              
              <form className="mb-8">
                <div className="mb-4">
                  <textarea 
                    placeholder="أضف تعليقك هنا..." 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3"
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex gap-4 mb-4">
                  <input 
                    type="text" 
                    placeholder="الاسم" 
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                  />
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني" 
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  إرسال التعليق
                </button>
              </form>
            </div>

            {/* زر العودة للأعلى */}
            <div className="fixed bottom-8 left-8">
              <a 
                href="#top" 
                className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
                aria-label="العودة للأعلى"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 