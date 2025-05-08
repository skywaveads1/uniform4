import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'كيفية اختيار الأحذية المناسبة لطاقم الطيران',
  description: 'دليل شامل حول كيفية اختيار الأحذية المثالية لطاقم الطيران، مع مراعاة عوامل الراحة والسلامة والمظهر المهني',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_uniform_accessories.jpeg';
  const title = 'كيفية اختيار الأحذية المناسبة لطاقم الطيران';
  const readingTime = '8 دقائق';
  const datePublished = '١٢ مايو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'history', title: 'تطور الأحذية في مجال الطيران' },
    { id: 'types', title: 'أنواع الأحذية حسب الوظائف' },
    { id: 'features', title: 'خصائص تصميم الأحذية المناسبة' },
    { id: 'comparison', title: 'مقارنة بين أحذية شركات الطيران' },
    { id: 'strategic', title: 'الأبعاد الاستراتيجية للاختيار' },
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
                  <Link href="/blog/flight-crew/flight-7" className="text-sm hover:text-blue-600 block">
                    متطلبات السلامة والأمان في تصميم ملابس طاقم الطائرة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-15" className="text-sm hover:text-blue-600 block">
                    الإكسسوارات المكملة لزي طاقم الطيران
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
            تعتبر المطارات في المملكة العربية السعودية واجهة حضارية ونقاط اتصال أولى للزوار والمسافرين من جميع أنحاء العالم. وضمن هذه المنظومة المتكاملة، يشكل طاقم الخدمات الأرضية حلقة أساسية لا غنى عنها في تقديم تجربة سفر سلسة وممتازة. ولأن الانطباع الأول يدوم، فإن الزي الرسمي لهؤلاء الموظفين يلعب دوراً محورياً في تشكيل هذا الانطباع وتعزيز الهوية المؤسسية للمطارات السعودية وشركات الطيران العاملة فيها.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            على عكس طاقم الطائرة الذي يتفاعل مع المسافرين خلال الرحلة فقط، يتعامل أفراد الخدمات الأرضية مع المسافرين في مراحل متعددة من رحلتهم، بدءاً من تسجيل الوصول وحتى استلام الأمتعة، مروراً بالعديد من نقاط الخدمة الأخرى. هذا التفاعل المتنوع يجعل زيهم الرسمي عنصراً حيوياً في تسهيل التعرف عليهم ونقل صورة احترافية عن المطارات السعودية وشركات الطيران الوطنية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            في هذا المقال، نستعرض بالتفصيل الزي الرسمي لطاقم الخدمات الأرضية في المطارات السعودية، بدءاً من تاريخه وتطوره، مروراً بخصائصه التصميمية والوظيفية، وصولاً إلى الفروقات بين أزياء الشركات المختلفة والتحديات المستقبلية. كما نسلط الضوء على الدور الاستراتيجي لهذا الزي في تعزيز الهوية الوطنية وتحسين تجربة المسافر في المطارات السعودية التي تشهد تطوراً متسارعاً ضمن رؤية المملكة 2030.
          </p>
        </section>

            <section id="history" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تطور الزي الرسمي للخدمات الأرضية في المطارات السعودية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">نظرة تاريخية على تطور الزي</h3>
                <p className="mb-2 font-medium text-blue-700">مراحل التطور عبر العقود:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>البدايات (1950-1970): زي بسيط يعكس بدايات الطيران المدني السعودي</li>
                  <li>مرحلة التأسيس (1970-1990): تبني تصاميم أكثر رسمية مع توسع المطارات</li>
                  <li>مرحلة الهوية (1990-2010): إدخال عناصر من التراث السعودي وألوان العلم</li>
                  <li>المرحلة الحديثة (2010-2020): تصاميم تجمع بين الأصالة والحداثة والوظيفية</li>
                  <li>رؤية 2030 وما بعدها: تطوير شامل يتماشى مع تحديث منظومة المطارات والسياحة</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تأثير المتغيرات الثقافية</h3>
                  <p className="mb-2 text-gray-700">كيف أثرت التغيرات المجتمعية على التصميم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>زيادة مشاركة المرأة السعودية في قطاع الطيران</li>
                    <li>التوازن بين الهوية الإسلامية والمعايير العالمية</li>
                    <li>تأثير الانفتاح الثقافي والسياحي على الزي</li>
                    <li>دمج عناصر التراث السعودي بطريقة معاصرة</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العلامات الفارقة في التطور</h3>
                  <p className="mb-2 text-gray-700">محطات بارزة في تغيير نمط الزي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تدشين مطار الملك عبد العزيز الدولي الجديد</li>
                    <li>إعادة هيكلة الخطوط السعودية وتحديث الزي</li>
                    <li>تأسيس شركة مطارات الرياض وتصميم زي موحد</li>
                    <li>إطلاق زي خاص بموسم الحج والعمرة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="types" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أنواع الزي الرسمي للخدمات الأرضية حسب الوظائف</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">زي موظفي الاستقبال وتسجيل الوصول</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">خصائص وعناصر الزي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>بدلات رسمية بألوان هادئة تعكس الاحترافية والترحيب</li>
                    <li>سترات مميزة بشعار الشركة أو المطار على الصدر والأكمام</li>
                    <li>للنساء: خيارات متنوعة تتضمن الفساتين المحتشمة أو البدلات مع وشاح مميز</li>
                    <li>للرجال: قميص بلون موحد مع ربطة عنق تعكس هوية الشركة</li>
                    <li>إكسسوارات محددة كالدبابيس والشارات التعريفية المميزة</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">زي طاقم المناولة الأرضية ومشرفي التحميل</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">المواصفات الوظيفية والعملية:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>بدلات عمل (أوفرول) معززة بعناصر عاكسة للضوء لضمان الرؤية</li>
                  <li>سترات أمان فسفورية مميزة بألوان مختلفة حسب المهام</li>
                  <li>قمصان وبناطيل مصنوعة من مواد متينة مقاومة للتمزق والاتساخ</li>
                  <li>أحذية سلامة خاصة بمواصفات تتناسب مع العمل في بيئة المطار</li>
                  <li>قبعات واقية وسماعات أذن للحماية من ضجيج الطائرات</li>
          </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">زي موظفي خدمة العملاء وصالات الانتظار</h3>
                <p className="mb-2 text-gray-700">عناصر الزي التي تسهل التعرف عليهم:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>بدلات أنيقة بألوان مميزة تجعلهم ظاهرين بسهولة للمسافرين</li>
                  <li>وشاحات وربطات عنق بألوان زاهية تعكس الترحيب والود</li>
                  <li>شارات تعريفية كبيرة توضح الدور الوظيفي واللغات التي يتحدثها الموظف</li>
                  <li>سترات خفيفة يمكن ارتداؤها في صالات الانتظار المكيفة</li>
                  <li>إكسسوارات موحدة مثل الحقائب المحمولة للأجهزة والمستندات</li>
          </ul>
              </div>
        </section>

            <section id="features" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">خصائص تصميم الزي للخدمات الأرضية</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الألوان ودلالاتها</h3>
                <p className="mb-2 text-gray-700">استخدام الألوان في تمييز الوظائف والشركات:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>الأخضر: لون أساسي يرتبط بالهوية الوطنية السعودية ويستخدم في العناصر الرئيسية</li>
                  <li>الأزرق الداكن: يستخدم غالباً لزي مديري المحطات والمشرفين الإداريين</li>
                  <li>البيج والذهبي: للخدمات المميزة وصالات كبار الشخصيات</li>
                  <li>الألوان الفسفورية: لفرق المناولة الأرضية لأسباب تتعلق بالسلامة والرؤية</li>
                  <li>تنوع الألوان بين المطارات المختلفة مع الحفاظ على عناصر موحدة</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المواد والأقمشة المستخدمة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">خصائص النسيج حسب طبيعة العمل:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>أقمشة مقاومة للتجعد للوظائف الإدارية وخدمة العملاء</li>
                      <li>مواد متينة ومقاومة للتمزق لطاقم المناولة الأرضية</li>
                      <li>أقمشة تقنية تتميز بخصائص التهوية للعمل في المناطق الخارجية الحارة</li>
                      <li>مواد مقاومة للماء واللطخات للعمل في ظروف الصيانة والتنظيف</li>
                      <li>أقمشة مريحة قابلة للتمدد للوظائف التي تتطلب حركة كثيرة</li>
          </ol>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العناصر الرمزية والشعارات</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">الرموز والهوية البصرية:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>شعار المملكة (النخلة والسيفان) كعنصر أساسي في المطارات الحكومية</li>
                      <li>شعارات شركات الطيران المختلفة على الصدر وأحياناً على الأكمام</li>
                      <li>شارات تحمل أسماء المطارات على زي الموظفين التابعين للمطار</li>
                      <li>رموز خاصة توضح الرتبة الوظيفية والأقدمية</li>
                      <li>عناصر تراثية سعودية كزخارف على الأوشحة والأطراف</li>
          </ul>
                  </div>
                </div>
              </div>
        </section>

            <section id="comparison" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دراسة مقارنة بين أزياء الخدمات الأرضية في المطارات السعودية</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">مطار الملك خالد الدولي (الرياض)</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">الخصائص المميزة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>يتميز بدرجات اللون الأزرق الملكي مع لمسات خضراء</li>
                    <li>تصميم أنيق يعكس مكانة العاصمة مع لمسات من الثقافة النجدية</li>
                    <li>شارات خاصة تشير إلى الرياض كبوابة دبلوماسية للمملكة</li>
                    <li>زي الاستقبال يتميز بتفاصيل ذهبية تعكس الفخامة والرسمية</li>
                    <li>تصميم عصري يتماشى مع التطورات المعمارية الحديثة في المطار</li>
          </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مطار الملك عبد العزيز الدولي (جدة)</h3>
                  <p className="mb-2 text-gray-700">السمات الخاصة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مزيج من الألوان البحرية والرملية</li>
                    <li>عناصر تعكس دور المطار كبوابة للحرمين</li>
                    <li>زي خاص بموسم الحج والعمرة</li>
                    <li>تفاصيل تعكس التنوع الثقافي للمدينة</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مطار الملك فهد الدولي (الدمام)</h3>
                  <p className="mb-2 text-gray-700">العناصر المميزة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تصميم يجمع بين البساطة والعملية</li>
                    <li>استخدام درجات الرمادي والأزرق الفاتح</li>
                    <li>زي مصمم لمقاومة الرطوبة العالية</li>
                    <li>عناصر تعكس الطابع الخليجي المشترك</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="strategic" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأبعاد الاستراتيجية والتسويقية للزي الرسمي</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">دور الزي في تعزيز هوية المطار والعلامة التجارية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">البعد التسويقي للزي الرسمي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الزي كأداة تسويقية تعزز الصورة الذهنية للمطارات السعودية</li>
                    <li>دور الزي في جعل المطارات السعودية قابلة للتمييز عالمياً</li>
                    <li>تناسق الزي مع عناصر الهوية البصرية الأخرى للمطار</li>
                    <li>انعكاس شخصية العلامة التجارية للمطار من خلال تفاصيل الزي</li>
                    <li>أهمية الزي في التصوير الإعلامي والترويجي للمطارات السعودية</li>
          </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تأثير الزي على تجربة المسافر</h3>
                <p className="mb-2 text-gray-700">كيف يؤثر الزي على رحلة العميل:</p>
                <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                  <li>تسهيل التعرف على موظفي الخدمة في المساحات المزدحمة</li>
                  <li>بناء الثقة والاطمئنان من خلال المظهر المهني والمنظم</li>
                  <li>تعزيز الانطباع الثقافي الأصيل عن المملكة العربية السعودية</li>
                  <li>توحيد تجربة المسافر من خلال توحيد هوية مقدمي الخدمة</li>
                  <li>تسهيل الاستدلال البصري على مستوى الخدمة المقدمة</li>
          </ol>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل الزي الرسمي لموظفي الخدمات الأرضية في المطارات السعودية واجهة حيوية تعكس هوية المملكة العربية السعودية وثقافتها ورؤيتها المستقبلية. مع تطور قطاع الطيران والسياحة في المملكة، بات التطوير المستمر لهذا الزي ضرورة استراتيجية وليس مجرد خيار جمالي، حيث يساهم في بناء صورة موحدة ومتكاملة للمطارات السعودية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                من خلال الجمع بين الأصالة التراثية والمعاصرة العالمية، ومراعاة الأبعاد الوظيفية والتسويقية، استطاعت المطارات السعودية تطوير زي موحد يحقق التوازن بين الهوية الإسلامية والعربية وبين متطلبات العمل في بيئة عالمية. ومع استمرار تنفيذ مشاريع تطوير وتوسعة المطارات ضمن رؤية 2030، من المتوقع أن يشهد الزي الرسمي للخدمات الأرضية مزيداً من التطوير والتحديث ليواكب المكانة المتنامية للمملكة كوجهة سياحية واقتصادية عالمية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                يبقى الزي الرسمي للخدمات الأرضية، بتنوعه وتفاصيله، لغة بصرية تنقل للعالم قصة المملكة العربية السعودية وتطورها، وتعكس العناية والاهتمام الذي توليه للمسافرين من جميع أنحاء العالم. فمن خلال الألوان والتصاميم والرموز، يتحول الزي الرسمي من مجرد ملابس عمل إلى رسالة ترحيب وانفتاح تتجاوز حدود اللغة والثقافة، لتعزز مكانة المطارات السعودية كبوابات عصرية رحبة للعالم.
          </p>
        </section>
      </article>
        </div>
      </div>
    </main>
  );
} 