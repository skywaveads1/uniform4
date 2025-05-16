import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'أزياء المضيفات الحديثة',
  description: 'استكشف التوازن الفريد بين التقاليد والابتكار في موضة مضيفات الطيران الحديثة، والتأثيرات الثقافية والتكنولوجية والفنية التي تشكل أزياء الطيران اليوم.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_attendant_dress.jpeg';
  const title = 'أزياء المضيفات الحديثة';
  const readingTime = '8 دقائق';
  const datePublished = '١٢ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'historical-evolution', title: 'تطور أزياء مضيفات الطيران: نظرة تاريخية' },
    { id: 'cultural-influences', title: 'التأثيرات الثقافية على أزياء المضيفات المعاصرة' },
    { id: 'contemporary-trends', title: 'الاتجاهات المعاصرة في تصميم أزياء المضيفات' },
    { id: 'technology-innovation', title: 'التكنولوجيا والابتكار في أزياء المضيفات' },
    { id: 'case-studies', title: 'دراسات حالة: أبرز التصاميم المعاصرة' },
    { id: 'challenges-future', title: 'تحديات ومستقبل أزياء مضيفات الطيران' },
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
                  <Link href="/blog/flight-crew/comfort-safety-airline-uniforms" className="text-sm hover:text-blue-600 block">
                    الراحة والسلامة في أزياء شركات الطيران
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
            تمثل أزياء مضيفات الطيران نقطة التقاء فريدة بين عالمي الأزياء العملية والموضة الرفيعة، حيث تعكس التوازن الدقيق بين متطلبات الوظيفة الصارمة والتطور المستمر في عالم التصميم. لطالما كانت هذه الأزياء مرآة تعكس روح العصر والتحولات الاجتماعية والثقافية، ومع ذلك، تحافظ على جذورها واتصالها بتقاليد الضيافة الجوية العريقة.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            في هذا المقال، نستكشف موضة مضيفات الطيران المعاصرة من منظور شامل، متتبعين مسار تطورها من أيقونات أناقة كلاسيكية إلى ابتكارات عصرية تجمع بين الهوية الثقافية والأداء الوظيفي والاستدامة البيئية. سنلقي الضوء على التأثيرات المتنوعة التي تشكل هذه الأزياء اليوم، والتوازن الدقيق الذي يحققه المصممون المعاصرون بين احترام التقاليد ودفع حدود الابتكار في عالم يتغير بسرعة.
          </p>
        </section>

            <section id="historical-evolution" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تطور أزياء مضيفات الطيران: نظرة تاريخية</h2>
          
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="تطور أزياء المضيفات عبر العصور"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تطور أزياء مضيفات الطيران من ثلاثينيات القرن العشرين حتى يومنا هذا | المصدر: متحف الطيران الدولي
                </div>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">البدايات: من الممرضات إلى المضيفات</h3>
                <p className="mb-2 font-medium text-blue-700">مراحل تشكلت فيها هوية الزي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>ثلاثينيات القرن العشرين: استلهام أزياء الممرضات للمضيفات الأوائل</li>
                  <li>أربعينيات وخمسينيات: تأثير الزي العسكري بعد الحرب العالمية الثانية</li>
                  <li>بزوغ الأناقة الكلاسيكية مع تصاميم قريبة من الملابس الرسمية التقليدية</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العصر الذهبي والثورة الأنيقة</h3>
                  <p className="mb-2 text-gray-700">التحول نحو الأناقة والتميز:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>ستينيات القرن العشرين: ثورة المينيسكيرت وتأثير "عصر الفضاء"</li>
                    <li>سبعينيات: الألوان الزاهية والأنماط الجريئة تعكس تحرر المرأة</li>
                    <li>ثمانينيات: عودة الأناقة الرسمية مع لمسات من أزياء رجال الأعمال</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العصر الحديث: التوازن المعاصر</h3>
                  <p className="mb-2 text-gray-700">مراحل تشكلت فيها الهوية الحالية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تسعينيات وبداية الألفية: تبسيط التصاميم مع التركيز على الراحة</li>
                    <li>الفترة من 2010-2020: عودة الاهتمام بالهويات الثقافية المميزة</li>
                    <li>الوقت الحاضر: توازن جديد بين التقاليد والابتكار والاستدامة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="cultural-influences" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التأثيرات الثقافية على أزياء المضيفات المعاصرة</h2>
          
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الموروث الثقافي كمصدر إلهام</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تجليات التراث في التصاميم المعاصرة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">استلهام الأزياء التقليدية:</span> الكيمونو الياباني، الساري الهندي، العباءة الخليجية يتم استخدامها كإلهام في تصميم أزياء شركات الطيران الوطنية</li>
                    <li><span className="font-medium">دمج عناصر الحرف اليدوية:</span> النقوش التقليدية في التصاميم الحديثة تضيف لمسة من الأصالة والتميز</li>
                    <li><span className="font-medium">إعادة تفسير الرموز الثقافية:</span> تحديث الرموز التقليدية مثل الزهور والطيور والعناصر الطبيعية بأسلوب معاصر</li>
          </ul>
                </div>
              </div>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="أزياء المضيفات المستوحاة من الثقافات المحلية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  أزياء مضيفات مستوحاة من التراث الثقافي المحلي لشركات طيران آسيوية | المصدر: معرض الأزياء الثقافية للطيران 2023
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التنوع والشمولية في التصميم</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">تجاوز النماذج التقليدية:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>مراعاة الاعتبارات الدينية والثقافية المتنوعة (الحجاب، الأكمام الطويلة)</li>
                  <li>تصاميم تناسب مختلف أنماط الجسم وتعزز الثقة بالنفس</li>
                  <li>الابتعاد عن الصور النمطية والتوجه نحو تمثيل أكثر واقعية للمرأة العاملة</li>
          </ol>
              </div>
        </section>

            <section id="contemporary-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاتجاهات المعاصرة في تصميم أزياء المضيفات</h2>
          
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الحداثة الوظيفية</h3>
                  <p className="mb-2 text-gray-700">أولوية الأداء والراحة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تصاميم مريحة تسمح بحرية الحركة مع الحفاظ على المظهر الأنيق</li>
                    <li>أقمشة متعددة الاتجاهات المرنة لأداء المهام المختلفة</li>
                    <li>تصاميم متعددة الطبقات للتكيف مع الظروف المناخية</li>
                    <li>جيوب وعناصر وظيفية مدمجة بشكل جمالي في التصميم</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">البساطة الأنيقة</h3>
                  <p className="mb-2 text-gray-700">عودة إلى الجوهر:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>توجه نحو الخطوط النظيفة والتصاميم المبسطة ذات التأثير القوي</li>
                    <li>التركيز على جودة القماش والقص بدلاً من الزخارف المفرطة</li>
                    <li>ألوان أحادية أو ثنائية مع لمسات محددة من ألوان العلامة التجارية</li>
                    <li>إكسسوارات دقيقة تضيف اللمسة المميزة للزي البسيط</li>
          </ol>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التصميم المستدام</h3>
              <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
                <p className="mb-2 font-medium text-green-800">الاستجابة للوعي البيئي المتزايد:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>استخدام أقمشة مستدامة ومعاد تدويرها في تصنيع الأزياء</li>
                  <li>تصاميم متعددة الاستخدامات تقلل الحاجة لقطع متعددة</li>
                  <li>عمليات إنتاج أكثر وعياً بيئياً (صباغة طبيعية، توفير المياه)</li>
                  <li>دورة حياة مدروسة للزي من التصميم إلى إعادة التدوير</li>
          </ul>
              </div>
        </section>

            <section id="technology-innovation" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التكنولوجيا والابتكار في أزياء المضيفات</h2>
          
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="تكنولوجيا متقدمة في أزياء المضيفات"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  أقمشة وتقنيات ذكية مستخدمة في أزياء المضيفات الحديثة | المصدر: معرض تكنولوجيا النسيج 2023
                </div>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المواد المتقدمة والأقمشة الذكية</h3>
                <p className="mb-2 font-medium text-blue-700">ثورة في عالم النسيج:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>أقمشة معالجة بتقنية النانو للحماية من البقع والسوائل</li>
                  <li>مواد تنظم درجة حرارة الجسم في بيئات متغيرة</li>
                  <li>أقمشة مضادة للميكروبات والروائح لساعات العمل الطويلة</li>
                  <li>خامات خفيفة الوزن عالية المتانة تقاوم التجعد والاهتراء</li>
          </ul>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التكامل مع التكنولوجيا القابلة للارتداء</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الأزياء في العصر الرقمي</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">دمج تقنيات الاتصال اللاسلكي:</span> في الإكسسوارات لتسهيل التواصل بين أفراد الطاقم</li>
                    <li><span className="font-medium">شارات ذكية:</span> تسمح بالوصول إلى معلومات الرحلة والمسافرين بشكل فوري</li>
                    <li><span className="font-medium">عناصر مضيئة مدمجة:</span> للاستخدام في حالات الطوارئ وتحسين الرؤية في الإضاءة المنخفضة</li>
                    <li><span className="font-medium">أقمشة تفاعلية:</span> تستجيب للظروف المحيطة مثل الحرارة والضوء لتحسين راحة المضيفة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="case-studies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دراسات حالة: أبرز التصاميم المعاصرة</h2>
          
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الخطوط الجوية الفرنسية</h3>
                  <p className="mb-2 text-gray-700">الأناقة الباريسية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تعاون مع كريستيان لاكروا لتصميم أزياء أنيقة</li>
                    <li>ألوان الأزرق والأحمر تعكس العلم الفرنسي</li>
                    <li>تفاصيل كلاسيكية مع قصات عصرية</li>
                    <li>جودة عالية من الأقمشة والخياطة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">طيران الإمارات</h3>
                  <p className="mb-2 text-gray-700">فخامة الشرق:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>زي بألوان الصحراء الذهبية مع القبعة المميزة</li>
                    <li>استخدام عناصر من التراث الإماراتي</li>
                    <li>توازن بين الأناقة والاحتشام</li>
                    <li>تفاصيل ذهبية تعكس صورة الفخامة</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الخطوط الجوية السنغافورية</h3>
                  <p className="mb-2 text-gray-700">التراث الآسيوي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحديث مستمر لزي "الساروڠ كباي" التقليدي</li>
                    <li>نقوش الباتيك المعاصرة تعكس التنوع الثقافي</li>
                    <li>ألوان زاهية تعكس ثقافة جنوب شرق آسيا</li>
                    <li>استمرارية الزي كرمز للعلامة منذ 1968</li>
          </ul>
                </div>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="تصاميم معاصرة لأزياء المضيفات"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  مقارنة بين تصاميم أزياء المضيفات من ثلاث شركات طيران عالمية | المصدر: مجلة عالم الطيران
                </div>
              </div>
        </section>

            <section id="challenges-future" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تحديات ومستقبل أزياء مضيفات الطيران</h2>
          
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التحديات المعاصرة</h3>
                <p className="mb-2 font-medium text-blue-700">نقاط التوتر في التصميم الحالي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الموازنة بين الهوية المؤسسية والحرية الشخصية للموظفات</li>
                  <li>تلبية احتياجات قوى عاملة متنوعة الأعمار والثقافات والأجساد</li>
                  <li>مراعاة الاعتبارات الصحية والسلامة مع الحفاظ على الأناقة</li>
                  <li>تحقيق الاستدامة البيئية دون المساومة على الجودة والمتانة</li>
          </ul>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">اتجاهات مستقبلية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">ملامح موضة المضيفات في السنوات القادمة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">زيادة التخصيص:</span> خيارات متعددة ضمن الهوية الموحدة لتلبية التفضيلات الفردية</li>
                    <li><span className="font-medium">تلاشي الحدود التقليدية:</span> بين الأزياء النسائية والرجالية نحو تصاميم أكثر شمولية</li>
                    <li><span className="font-medium">تكامل أكبر مع التكنولوجيا:</span> القابلة للارتداء لتحسين تجربة العملاء والطاقم</li>
                    <li><span className="font-medium">تصاميم معيارية:</span> قابلة للتكيف مع المهام والوجهات المختلفة لتعزيز الاستدامة</li>
          </ol>
                </div>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل أزياء مضيفات الطيران المعاصرة مزيجاً فريداً من الاحترام للتقاليد والتطلع نحو المستقبل. فهي تجسد قدرة الموضة على التكيف مع التحولات الثقافية والتكنولوجية والبيئية، مع الحفاظ على الأناقة والوظيفية التي تميزها. ومع استمرار تطور صناعة الطيران وتقنيات النسيج والتوقعات المجتمعية، ستواصل هذه الأزياء تجسيد الابتكار المتوازن الذي يعكس روح العصر.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
                في المستقبل، من المرجح أن نشهد تحولاً نحو تصاميم أكثر شمولية وتخصيصاً وتكاملاً مع التكنولوجيا، مع التركيز المتزايد على الاستدامة والمسؤولية البيئية. ولكن مهما تغيرت الأشكال والمواد والتقنيات، ستظل أزياء المضيفات رمزاً للضيافة الراقية والمهنية والهوية المميزة لشركات الطيران حول العالم.
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