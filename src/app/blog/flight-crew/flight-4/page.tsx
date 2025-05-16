import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الزي الرسمي لطياري وقائدي الطائرات: المواصفات والرموز',
  description: 'استكشف المواصفات والرموز المميزة للزي الرسمي لطياري وقائدي الطائرات، وتاريخه وتطوره، وأهميته في هرمية الطيران والسلامة والهوية المؤسسية.',
};

// صورة الهيدر للمقال
const heroImage = '/images/flight_crew/header_flight_crew_uniform.jpeg';

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/pilot_attendant_uniforms.jpeg';
  const title = 'الزي الرسمي لطياري وقائدي الطائرات: المواصفات والرموز';
  const readingTime = '8 دقائق';
  const datePublished = '٢٨ مايو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'basic-elements', title: 'العناصر الأساسية للزي الرسمي للطيارين' },
    { id: 'rank-badges', title: 'شارات الرتب والرموز' },
    { id: 'historical-evolution', title: 'التطور التاريخي لزي الطيارين' },
    { id: 'practical-symbolic', title: 'الوظائف العملية والرمزية للزي' },
    { id: 'differences', title: 'الاختلافات بين زي الطيارين في مختلف الشركات' },
    { id: 'future', title: 'مستقبل زي الطيارين' },
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
                  <Link href="/blog/flight-crew/flight-1" className="text-sm hover:text-blue-600 block">
                    اعتبارات تصميم زي شركات الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-2" className="text-sm hover:text-blue-600 block">
                    اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-3" className="text-sm hover:text-blue-600 block">
                    أزياء الطيران النسائية: تطورها وخصائصها الحديثة
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
                يمثل الزي الرسمي للطيارين وقائدي الطائرات أحد أكثر الأزياء المهنية هيبة واحتراماً في العالم. فهو ليس مجرد ملابس عمل، بل رمز للمكانة والمسؤولية والثقة التي يضعها المسافرون في الأشخاص المسؤولين عن سلامة رحلاتهم الجوية. ويجمع هذا الزي بين الجوانب الوظيفية العملية والرمزية المهمة التي تطورت عبر تاريخ الطيران المدني والعسكري.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                تتميز أزياء الطيارين بمواصفات قياسية صارمة وعناصر محددة للغاية، سواء من حيث التصميم أو الألوان أو الشارات. وتعكس هذه المواصفات ليس فقط الجانب الجمالي، بل أيضاً الجوانب الوظيفية المرتبطة بطبيعة العمل الدقيقة والمسؤولية الثقيلة التي يحملها الطيارون على عاتقهم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض المواصفات التفصيلية للزي الرسمي للطيارين، وأهمية الرموز والشارات المختلفة التي يحملها، والتطور التاريخي لهذا الزي، والاختلافات بين الزي العسكري والمدني، ودوره في تعزيز الهوية المؤسسية لشركات الطيران وبناء الثقة مع المسافرين. كما نلقي الضوء على التحديات المعاصرة والتوجهات المستقبلية في تصميم زي الطيارين في عصر يجمع بين التقاليد العريقة والتطورات التكنولوجية المتسارعة.
              </p>
            </section>

            <section id="basic-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر الأساسية للزي الرسمي للطيارين</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">البدلة الرسمية: تصميم كلاسيكي بمعايير عالية</h3>
                <p className="mb-2 font-medium text-blue-700">الخصائص المميزة للزي الأساسي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>سترة (جاكيت) رسمية بلون كحلي داكن أو أسود مع أزرار معدنية</li>
                  <li>قميص أبيض رسمي غالباً ما يكون بياقة صلبة لإبراز ربطة العنق</li>
                  <li>بنطلون داكن بنفس لون السترة مع خط كوي واضح</li>
                  <li>ربطة عنق داكنة (سوداء أو كحلية) تعكس ألوان شركة الطيران أحياناً</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">القبعة الرسمية: رمز الهيبة والسلطة</h3>
                  <p className="mb-2 text-gray-700">خصائص ومواصفات قبعة الطيار:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>تصميم شبه عسكري مستوحى من القوات البحرية</li>
                    <li>حافة أمامية صلبة (visor) مصنوعة من البلاستيك اللامع أو الجلد</li>
                    <li>شارة خاصة بشركة الطيران مثبتة في المنتصف</li>
                    <li>زخارف ذهبية على الحافة "scrambled eggs" للرتب العليا من القادة</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الإكسسوارات والتجهيزات المكملة</h3>
                  <p className="mb-2 text-gray-700">عناصر تكمل المظهر الرسمي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>حقيبة الطيار التقليدية (flight bag) لحمل المستندات والأدوات</li>
                    <li>ساعة يد تقنية تتضمن وظائف خاصة مثل مقياس الحساب الدائري</li>
                    <li>نظارات شمسية بعدسات داكنة (غالباً من نوع الطيار "aviator")</li>
                    <li>حزام جلدي أسود بإبزيم معدني يحمل شعار شركة الطيران أحياناً</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="rank-badges" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">شارات الرتب والرموز: لغة الهرمية في الطيران</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">نظام الشرائط: رموز المسؤولية والخبرة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تدرج الرتب على أكمام الزي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قائد الطائرة (Captain): أربعة شرائط ذهبية متوازية</li>
                    <li>الطيار المساعد الأول (First Officer): ثلاثة شرائط ذهبية</li>
                    <li>الطيار المساعد الثاني (Second Officer): شريطان ذهبيان</li>
                    <li>طيار متدرب (Flight Cadet): شريط ذهبي واحد</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">شارات الجناح: رمز التأهيل والانتماء</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">شارات الصدر المميزة:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>شارة الجناح المعدنية (Wings Badge) المثبتة على الجانب الأيسر من الصدر</li>
                      <li>تصاميم متنوعة تعكس هوية شركة الطيران (تتضمن غالباً تاجاً، نسراً، أو شعاراً وطنياً)</li>
                      <li>اختلافات في التصميم تشير إلى نوع التأهيل (طيران مدني، عسكري، تجاري)</li>
                      <li>شارات إضافية للمهارات الخاصة (قائد مدرب، طيار اختبار، خبرة دولية)</li>
                    </ol>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">بطاقات التعريف وشارات الاسم</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">عناصر التعريف الشخصي:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>بطاقة تعريف رسمية تحمل اسم الطيار ورتبته وصورته</li>
                      <li>شارة اسم معدنية مثبتة على الجانب الأيمن من الصدر</li>
                      <li>رموز إضافية للتخصصات والتأهيلات الخاصة</li>
                      <li>شارات خاصة للطيارين ذوي الخبرات الاستثنائية (مثل تجاوز 10,000 ساعة طيران)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="historical-evolution" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التطور التاريخي لزي الطيارين</h2>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الجذور العسكرية: من الحروب العالمية إلى الطيران المدني</h3>
                <p className="mb-2 text-gray-700">تأثير التاريخ العسكري:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>بدايات زي الطيار في الحرب العالمية الأولى: جاكيتات جلدية وأوشحة وخوذات</li>
                  <li>انتقال العناصر العسكرية (الرتب، الشارات، الهيكل الهرمي) إلى الطيران المدني</li>
                  <li>تأثير الزي البحري على تصميم قبعات وبدلات الطيارين المدنيين</li>
                  <li>استمرار التقاليد العسكرية في الاحترام واللياقة المرتبطة بارتداء الزي</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العصر الذهبي للطيران: الخمسينات والستينات</h3>
                  <p className="mb-2 text-gray-700">تطور الزي في فترة ازدهار الطيران:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>ترسيخ الصورة الكلاسيكية للطيار في الثقافة الشعبية</li>
                    <li>ظهور تصاميم مخصصة لشركات الطيران الكبرى تعكس هويتها الخاصة</li>
                    <li>تحسينات في القصات والمواد لتلائم الرحلات الطويلة</li>
                    <li>اهتمام متزايد بالتفاصيل كعنصر تنافسي بين شركات الطيران</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العصر الحديث: بين التقاليد والابتكار</h3>
                  <p className="mb-2 text-gray-700">التطورات المعاصرة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الحفاظ على العناصر التقليدية مع تحديثات في المواد والراحة</li>
                    <li>إدخال تقنيات متطورة في الأقمشة (مقاومة للتجعد، سهلة العناية، خفيفة الوزن)</li>
                    <li>تعديلات طفيفة تراعي التغيرات الثقافية مع الحفاظ على الشكل الرسمي</li>
                    <li>تنوع أكبر في التصاميم لتناسب مختلف المناخات والثقافات</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="practical-symbolic" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الوظائف العملية والرمزية للزي</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الجوانب الوظيفية والعملية</h3>
                    <p className="mb-2 text-gray-700">مزايا تدعم أداء المهام:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>جيوب متعددة مصممة لحمل الأدوات الضرورية (أقلام، مذكرات، حاسبات)</li>
                      <li>أقمشة متينة تتحمل الاستخدام المتكرر والجلوس الطويل في قمرة القيادة</li>
                      <li>خامات مريحة تسمح بالحركة ولا تسبب الإرهاق خلال الرحلات الطويلة</li>
                      <li>عناصر قابلة للتعديل للتكيف مع تغيرات درجات الحرارة</li>
                    </ul>
                  </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">الأبعاد الرمزية والنفسية</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">تأثير الزي على المسافرين والطاقم:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>بناء الثقة مع المسافرين من خلال مظهر يوحي بالاحتراف والكفاءة</li>
                    <li>تعزيز سلطة الطيار ودوره القيادي في ظروف الطوارئ</li>
                    <li>تمييز واضح بين أفراد الطاقم ومستويات المسؤولية</li>
                    <li>تعزيز الانتماء المؤسسي والفخر المهني لدى الطيارين</li>
                    </ol>
                </div>
              </div>
            </section>

            <section id="differences" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاختلافات بين زي الطيارين في مختلف الشركات</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تباينات عالمية: خصوصيات ثقافية</h3>
                  <p className="mb-2 text-gray-700">تأثير الثقافة والجغرافيا:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تأثير الهوية الوطنية على تصميم الزي (ألوان، رموز، قصات)</li>
                    <li>تكيفات للمناخات المختلفة (نسخ استوائية خفيفة، نسخ شتوية دافئة)</li>
                    <li>اعتبارات ثقافية واجتماعية خاصة بالمنطقة</li>
                    <li>خيارات مختلفة للطيارات النساء تراعي الخصوصيات الثقافية</li>
                </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التمييز التجاري: التفرد المؤسسي</h3>
                  <p className="mb-2 text-gray-700">عناصر تعزيز الهوية المؤسسية:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>دمج ألوان الشركة وشعارها في عناصر الزي (ربطات العنق، شارات، أزرار)</li>
                    <li>تصميمات متخصصة بواسطة مصممين مشهورين للشركات الفاخرة</li>
                    <li>لمسات تمييز فريدة (حقائب، إكسسوارات، تفاصيل دقيقة)</li>
                    <li>اختلافات في جودة المواد والتقنيات تعكس موقع الشركة في السوق</li>
                  </ol>
                </div>
              </div>
            </section>

            <section id="future" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مستقبل زي الطيارين</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الابتكارات التكنولوجية المرتقبة</h3>
                <p className="mb-2 font-medium text-blue-700">التحسينات التقنية المتوقعة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>أقمشة ذكية تتكيف مع درجات الحرارة وتنظم رطوبة الجسم</li>
                  <li>تكامل مع الأجهزة الذكية القابلة للارتداء (ساعات، نظارات متصلة)</li>
                  <li>مواد مستدامة صديقة للبيئة تحافظ على التقاليد مع تقليل الأثر البيئي</li>
                  <li>دمج عناصر سلامة متقدمة تستجيب للحرارة والتلوث والإشعاع</li>
                </ul>
              </div>

              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التوازن بين التراث والتحديث</h3>
                <p className="mb-2 text-gray-700">التحديات المستقبلية:</p>
                <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                  <li>الحفاظ على القيمة الرمزية للزي التقليدي مع تلبية احتياجات الجيل الجديد</li>
                  <li>مواءمة التراث مع متطلبات الراحة والعملية المتزايدة</li>
                  <li>تطوير زي يعكس التغيرات في صناعة الطيران (طائرات أكثر أتمتة، رحلات فضائية تجارية)</li>
                  <li>التكيف مع التوقعات المتطورة للمسافرين مع الحفاظ على الهيبة المهنية</li>
                </ol>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-lg border border-gray-200">
                <p className="mb-4 leading-7 text-gray-700">
                  يمثل الزي الرسمي لطياري وقائدي الطائرات أكثر من مجرد ملابس مهنية، فهو يجسد تراثاً غنياً من التقاليد والرموز التي تطورت على مدى أكثر من قرن من تاريخ الطيران. ومع تطور صناعة الطيران نفسها، سيستمر هذا الزي في التطور، موازناً بين الحفاظ على العناصر التقليدية التي تمثل روح المهنة وكرامتها، وبين الابتكارات التي تلبي متطلبات العصر الحديث.
                </p>
                <p className="mb-4 leading-7 text-gray-700">
                  سيظل الدور الرمزي للزي الرسمي للطيارين عنصراً أساسياً في بناء الثقة والاطمئنان لدى المسافرين، حيث يشكل المظهر المهني والموحد للطاقم جزءاً لا يتجزأ من تجربة السفر الجوي الآمنة والمهنية. وفي الوقت نفسه، ستستمر التحسينات في المواد والتصاميم لتعزيز راحة الطيارين وأدائهم خلال ساعات العمل الطويلة.
                </p>
                <p className="mb-0 leading-7 text-gray-700">
                  وبينما نتطلع إلى المستقبل، سنشهد حتماً مزيداً من الابتكار في تصميم زي الطيارين، لكنه سيظل دائماً يحمل تلك اللمسة من الأناقة والهيبة التي جعلته أحد أكثر الأزياء المهنية تميزاً وإثارة للإعجاب حول العالم، مجسداً في تفاصيله قيم الاحترافية والدقة والمسؤولية التي تميز مهنة الطيران.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
} 