import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'زي الطيارين: الرموز والتقاليد المتطورة',
  description: 'نظرة شاملة على تصميم زي الطيارين، تطوره التاريخي، رموزه المميزة، وأهميته في صناعة الطيران الحديثة مع التركيز على جوانب الوظيفية والأناقة.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/modern_airline_uniform_design.jpeg';
  const title = 'زي الطيارين: الرموز والتقاليد المتطورة';
  const readingTime = '8 دقائق';
  const datePublished = '١٠ يونيو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'historical-evolution', title: 'التطور التاريخي لزي الطيارين' },
    { id: 'symbolic-elements', title: 'العناصر الرمزية والشارات' },
    { id: 'functional-requirements', title: 'المتطلبات الوظيفية والعملية' },
    { id: 'materials-technology', title: 'المواد والتقنيات الحديثة' },
    { id: 'cultural-variations', title: 'الاختلافات الثقافية حول العالم' },
    { id: 'future-trends', title: 'اتجاهات مستقبلية في تصميم زي الطيارين' },
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
                  <Link href="/blog/flight-crew/stewardess-uniform" className="text-sm hover:text-blue-600 block">
                    تطور أزياء مضيفات الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/ground-crew-attire" className="text-sm hover:text-blue-600 block">
                    ملابس طاقم الخدمات الأرضية
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
                يعد زي الطيارين أحد أكثر الأزياء المهنية تميزاً وهيبة في العالم، حيث يجمع بين الأناقة الكلاسيكية والطابع الرسمي والوظيفية العالية. لقد تطور هذا الزي على مر العقود ليعكس التغيرات في صناعة الطيران نفسها، محتفظاً بعناصر تقليدية مع دمج ابتكارات عصرية تلبي احتياجات قيادة الطائرات الحديثة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستكشف تاريخ زي الطيارين وتطوره، ونتعمق في فهم رموزه ودلالاته المختلفة، ونناقش المتطلبات الوظيفية التي يلبيها، والمواد والتقنيات المستخدمة في تصنيعه. كما نلقي الضوء على الاختلافات الثقافية في تصميم هذا الزي حول العالم، ونستشرف اتجاهات المستقبل في هذا المجال.
              </p>
            </section>

            <section id="historical-evolution" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التطور التاريخي لزي الطيارين</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">بدايات الطيران والزي العسكري</h3>
                <p className="mb-2 font-medium text-blue-700">التأثير العسكري المبكر:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>استلهام الزي من البدلات العسكرية في الحرب العالمية الأولى</li>
                  <li>السترات الجلدية المبطنة والأوشحة للحماية من البرد في قمرات القيادة المفتوحة</li>
                  <li>خوذات الطيران والنظارات الواقية كعناصر أساسية للزي المبكر</li>
                  <li>تصميمات عملية تركز على الحماية والدفء أكثر من الأناقة</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العصر الذهبي للطيران</h3>
                  <p className="mb-2 text-gray-700">تطور الأناقة بين 1930-1960:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>ظهور البدلة الرسمية الداكنة مع قبعة الضابط</li>
                    <li>إضافة شارات الطيران والرتب على الأكتاف والأكمام</li>
                    <li>تعزيز الصورة الاحترافية للطيارين كنخبة مهنية</li>
                    <li>بروز دور شركات الطيران في تصميم أزياء مميزة</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العصر الحديث</h3>
                  <p className="mb-2 text-gray-700">التطورات من 1970 حتى اليوم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تبسيط التصميم مع الحفاظ على الطابع الرسمي</li>
                    <li>استخدام مواد أكثر راحة وأداء وظيفي أفضل</li>
                    <li>تصميمات تراعي الجوانب الإرجونومية للجلوس الطويل</li>
                    <li>توحيد معايير الزي عالمياً مع السماح بلمسات محلية</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="symbolic-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر الرمزية والشارات</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">رموز المكانة والخبرة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">دلالات العناصر المختلفة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">شرائط الأكمام:</span> تشير إلى رتبة الطيار وسنوات خبرته (4 شرائط للكابتن، 3 للمساعد الأول، 2 للمساعد الثاني)</li>
                    <li><span className="font-medium">أجنحة الطيران:</span> شارة مميزة على الصدر تختلف تصميماتها حسب شركة الطيران والدولة</li>
                    <li><span className="font-medium">القبعة وشعارها:</span> تعكس هوية شركة الطيران وتضيف عنصراً رسمياً للزي</li>
                    <li><span className="font-medium">حلقة الكتف:</span> تعرض أحياناً رموزاً إضافية تدل على التخصص أو الإنجازات</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الدلالات النفسية والاجتماعية</h3>
                <p className="mb-2 font-medium text-blue-700">تأثير الرموز على المسافرين والطاقم:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>بناء الثقة والطمأنينة لدى المسافرين</li>
                  <li>ترسيخ هيكل السلطة وتسلسل القيادة داخل الطائرة</li>
                  <li>تعزيز الهوية المهنية والانتماء لمجتمع الطيارين</li>
                  <li>إبراز هوية شركة الطيران وتمييزها عن المنافسين</li>
                </ol>
              </div>
            </section>

            <section id="functional-requirements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المتطلبات الوظيفية والعملية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">متطلبات الراحة والأداء</h3>
                  <p className="mb-2 text-gray-700">تصميم يدعم فترات العمل الطويلة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قابلية الحركة خاصة في منطقة الكتف والذراعين</li>
                    <li>الراحة أثناء الجلوس لفترات طويلة في قمرة القيادة</li>
                    <li>تنظيم درجة الحرارة مع تغيرات البيئة المحيطة</li>
                    <li>التهوية المناسبة والتحكم في الرطوبة</li>
                    <li>وزن خفيف لتقليل الإرهاق خلال الرحلات الطويلة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">متطلبات عملية وسلامة</h3>
                  <p className="mb-2 text-gray-700">عناصر تدعم الأداء المهني:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>جيوب متعددة لحمل الوثائق والأجهزة الضرورية</li>
                    <li>مقاومة التجعد للحفاظ على المظهر المهني</li>
                    <li>سهولة الارتداء والخلع في حالات الطوارئ</li>
                    <li>توافق مع معدات السلامة والطوارئ</li>
                    <li>مواد غير قابلة للاشتعال أو منخفضة القابلية للاشتعال</li>
                  </ol>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التوافق مع اللوائح والمعايير</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">الالتزام بالمعايير العالمية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>معايير هيئة الطيران المدني الدولية (ICAO) للزي الرسمي</li>
                  <li>لوائح سلطات الطيران المختلفة حول العالم</li>
                  <li>معايير السلامة فيما يخص المواد والإكسسوارات</li>
                  <li>توحيد عناصر التعريف للتعرف السريع على طاقم القيادة</li>
                </ul>
              </div>
            </section>

            <section id="materials-technology" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المواد والتقنيات الحديثة</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/flight_crew_uniform_design.jpeg"
                  alt="أقمشة متطورة لزي الطيارين"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تقنيات نسيج متقدمة تستخدم في صناعة زي الطيارين الحديث | المصدر: معرض تكنولوجيا النسيج للطيران 2023
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">المواد المتطورة</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">ابتكارات في الأقمشة والتصنيع</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">أقمشة مقاومة للتجعد:</span> خلطات خاصة من البوليستر والصوف تحافظ على المظهر الأنيق طوال الرحلة</li>
                    <li><span className="font-medium">أقمشة تنظيم الحرارة:</span> مواد متقدمة تساعد على الحفاظ على درجة حرارة مريحة للجسم</li>
                    <li><span className="font-medium">تقنية الأقمشة المضادة للبقع:</span> طبقات نانوية تمنع امتصاص السوائل وتسهل تنظيف البدلة</li>
                    <li><span className="font-medium">مواد مطاطية مدمجة:</span> تضيف مرونة للقماش دون التأثير على المظهر الرسمي</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تقنيات التصنيع والحياكة</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">ابتكارات في عمليات الإنتاج:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>تقنيات القص بالليزر لدقة عالية في التصميم</li>
                  <li>خياطات متقدمة تجمع بين المتانة والراحة</li>
                  <li>تصنيع مخصص باستخدام القياسات الرقمية ثلاثية الأبعاد</li>
                  <li>تقنيات التطريز المتقدمة للشارات والرموز</li>
                  <li>أساليب اللصق الحراري بدلاً من الخياطة التقليدية في بعض الأجزاء</li>
                </ol>
              </div>
            </section>

            <section id="cultural-variations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاختلافات الثقافية حول العالم</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التصاميم الغربية</h3>
                  <p className="mb-2 text-gray-700">النموذج الأكثر انتشاراً:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>بدلة داكنة اللون (غالباً كحلي أو أسود)</li>
                    <li>أربعة جيوب أمامية ذات غطاء</li>
                    <li>قبعة عسكرية الطراز مع حافة وشعار</li>
                    <li>التركيز على التقاليد العسكرية في الزي</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التصاميم الشرق آسيوية</h3>
                  <p className="mb-2 text-gray-700">لمسات ثقافية مميزة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>ألوان متنوعة تتجاوز الأسود التقليدي</li>
                    <li>استخدام عناصر من التراث المحلي في التصميم</li>
                    <li>شارات وأوسمة تعكس القيم الثقافية المحلية</li>
                    <li>تصميم يعكس الهوية الوطنية للناقل الجوي</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التصاميم في الشرق الأوسط</h3>
                  <p className="mb-2 text-gray-700">توازن بين التقليد والحداثة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>حفاظ على الطابع العالمي مع لمسات تراثية</li>
                    <li>ألوان تعكس هوية الدولة والناقل الوطني</li>
                    <li>اهتمام خاص بجودة الخامات والتفاصيل الدقيقة</li>
                    <li>رموز تعكس التراث الثقافي المحلي</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/captain_copilot_wear.jpeg"
                  alt="تنوع أزياء الطيارين حول العالم"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  مقارنة بين تصاميم زي الطيارين في مختلف شركات الطيران العالمية | المصدر: معرض الطيران الدولي 2023
                </div>
              </div>
            </section>

            <section id="future-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اتجاهات مستقبلية في تصميم زي الطيارين</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التكنولوجيا الذكية</h3>
                <p className="mb-2 font-medium text-blue-700">دمج التقنيات المتقدمة في الزي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>أقمشة ذكية تراقب المؤشرات الحيوية للطيار أثناء الرحلات الطويلة</li>
                  <li>تقنيات الواقع المعزز في واجهة القبعة أو النظارات</li>
                  <li>أنظمة توطين وتتبع مدمجة لحالات الطوارئ</li>
                  <li>عناصر تفاعلية تتكامل مع أنظمة الطائرة الحديثة</li>
                  <li>أزرار وعناصر تحكم مدمجة في الأكمام أو الياقة</li>
                </ul>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الاستدامة والمسؤولية البيئية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">توجه عالمي نحو الاستدامة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">مواد مستدامة:</span> أقمشة معاد تدويرها وصديقة للبيئة مع الحفاظ على الجودة</li>
                    <li><span className="font-medium">إنتاج أخلاقي:</span> التركيز على معايير العمل العادل وسلاسل التوريد المستدامة</li>
                    <li><span className="font-medium">تصاميم طويلة الأمد:</span> زي مصمم للاستخدام المطول وقابلية الإصلاح</li>
                    <li><span className="font-medium">برامج إعادة التدوير:</span> مبادرات لتحويل الأزياء القديمة إلى منتجات جديدة</li>
                  </ol>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التوجه نحو الشمولية والتنوع</h3>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <p className="mb-2 text-gray-700">تطوير تصاميم تناسب الجميع:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تصاميم تراعي الاختلافات الجسدية والجندرية</li>
                  <li>زي يحترم الخصوصيات الثقافية والدينية المختلفة</li>
                  <li>مرونة أكبر في خيارات القطع والتصاميم</li>
                  <li>تجاوز التقسيم التقليدي للأزياء حسب النوع الاجتماعي</li>
                  <li>تعزيز الراحة النفسية من خلال تصاميم تراعي التنوع</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل زي الطيارين أكثر من مجرد بدلة رسمية؛ إنه رمز للمهنية والكفاءة والتقاليد العريقة في عالم الطيران. مع تطور صناعة الطيران، استمر هذا الزي في التكيف مع المتطلبات المتغيرة، محافظاً على توازن دقيق بين احترام التقاليد والاستجابة للاحتياجات المعاصرة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                وفي المستقبل، من المرجح أن يشهد زي الطيارين المزيد من الابتكارات التي تدمج التكنولوجيا المتقدمة والاستدامة والشمولية، مع الحفاظ على العناصر الأساسية التي تميزه وتعكس المكانة الخاصة لمهنة قيادة الطائرات. وسيظل هذا الزي يلعب دوراً مهماً في بناء ثقة المسافرين وتعزيز صورة شركات الطيران وترسيخ الهوية المهنية للطيارين أنفسهم.
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