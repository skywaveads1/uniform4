import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'أزياء الطيران في المملكة العربية السعودية',
  description: 'نظرة شاملة على تطور أزياء الطيران في المملكة العربية السعودية، والتراث والابتكار في تصميم زي طاقم الطائرة السعودي.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/uniforms_saudi_arabia.jpeg';
  const title = 'أزياء الطيران في المملكة العربية السعودية';
  const readingTime = '12 دقائق';
  const datePublished = '١٢ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'history', title: 'تاريخ أزياء الطيران السعودية' },
    { id: 'cultural-elements', title: 'العناصر الثقافية في التصميم' },
    { id: 'modern-designs', title: 'التصاميم الحديثة للخطوط السعودية' },
    { id: 'challenges', title: 'التحديات والاعتبارات الخاصة' },
    { id: 'future', title: 'مستقبل أزياء الطيران في المملكة' },
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
                  <Link href="/blog/aviation-uniforms/design-uniform" className="text-sm hover:text-blue-600 block">
                    مبادئ تصميم زي الطيران: دليل شامل
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-crew-uniform-design" className="text-sm hover:text-blue-600 block">
                    معايير الجودة العالمية في تصميم زي الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/in-design-uniform-aviation-Saudi" className="text-sm hover:text-blue-600 block">
                    تصميم أزياء الطيران في المملكة العربية السعودية
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
                تعتبر أزياء الطيران في المملكة العربية السعودية جزءاً مهماً من هوية قطاع الطيران السعودي، حيث تعكس التراث الثقافي العريق والتقدم الحضاري للمملكة. تمثل هذه الأزياء واجهة حضارية للمملكة أمام العالم، وتجسد التوازن بين الأصالة والمعاصرة الذي يميز الرؤية السعودية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض رحلة تطور أزياء الطيران السعودية منذ تأسيس الخطوط الجوية السعودية وحتى يومنا هذا، مع تسليط الضوء على العناصر الثقافية والتصميمية المميزة، والتحديات الخاصة بتصميم أزياء تناسب البيئة السعودية، والتوجهات المستقبلية في ظل التحولات الكبرى التي تشهدها المملكة ضمن رؤية 2030.
          </p>
        </section>

            <section id="history" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تاريخ أزياء الطيران السعودية</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="أزياء الخطوط السعودية التاريخية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  أزياء طاقم الخطوط السعودية في سبعينيات القرن الماضي | المصدر: أرشيف الخطوط السعودية
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">بدايات متواضعة (1945-1970)</h3>
              <p className="mb-4 leading-7 text-gray-700">
                بدأت أزياء الطيران السعودية مع تأسيس الخطوط الجوية السعودية عام 1945، حيث كانت التصاميم الأولى متأثرة بالطابع العسكري الذي ساد أزياء الطيران العالمية في تلك الفترة. تميزت الأزياء الرجالية بالبساطة والطابع الرسمي، بينما كانت أزياء المضيفات تعكس توجهات الموضة العالمية مع مراعاة خصوصية المجتمع السعودي.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">فترة التأسيس والتطور (1970-2000)</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">المراحل الرئيسية في تطور الزي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>السبعينيات: تبني هوية بصرية مميزة مع دمج ألوان العلم السعودي (الأخضر والأبيض)</li>
                  <li>الثمانينيات: تطوير تصاميم جديدة تجمع بين العناصر التقليدية والأناقة العالمية</li>
                  <li>التسعينيات: إضافة لمسات من الزخارف العربية والإسلامية على أزياء الطاقم</li>
                  <li>مطلع الألفية: تحديث شامل للأزياء مع التركيز على الراحة والعملية</li>
          </ul>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التحديث والتطوير (2000-الآن)</h3>
              <p className="mb-4 leading-7 text-gray-700">
                شهدت الفترة من 2000 وحتى الآن تطوراً كبيراً في أزياء الطيران السعودية، مع التركيز على إبراز الهوية الوطنية بشكل معاصر. أطلقت الخطوط السعودية عدة تحديثات للزي، كان أبرزها عام 2016 مع تغيير الشعار، وعام 2021 مع إطلاق تصميم جديد يعكس رؤية المملكة 2030 وتوجهاتها المستقبلية.
              </p>
        </section>

            <section id="cultural-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر الثقافية في التصميم</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الألوان ودلالاتها</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>اللون الأخضر: يرمز للعلم السعودي والإسلام والنماء</li>
                    <li>اللون الأبيض: يرمز للنقاء والصفاء والسلام</li>
                    <li>الذهبي: يستخدم للتفاصيل لإضفاء لمسة من الفخامة</li>
                    <li>البيج والرملي: يستوحى من لون الصحراء السعودية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الزخارف والأنماط</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>النقوش الهندسية المستوحاة من الفن الإسلامي</li>
                    <li>زخارف النخيل والصحراء في تصاميم الإكسسوارات</li>
                    <li>خط الثلث العربي في شعارات وشارات الطاقم</li>
                    <li>العقال والغترة كرمز للهوية السعودية في شعار الشركة</li>
          </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">توازن الأصالة والمعاصرة</h3>
              <p className="mb-4 leading-7 text-gray-700">
                تسعى تصاميم أزياء الطيران السعودية إلى تحقيق توازن دقيق بين العناصر التراثية والتصميم العصري. يتجلى ذلك في الحفاظ على بعض العناصر التقليدية مثل شكل الياقة المستوحى من الثوب السعودي، مع تقديمها بأسلوب عصري وأنيق يتوافق مع معايير الطيران العالمية.
              </p>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">أمثلة على العناصر الثقافية في الزي الحالي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>وشاح المضيفات المزين بنقوش مستوحاة من الفن الإسلامي</li>
                  <li>دبوس شعار الشركة المستوحى من النخلة السعودية</li>
                  <li>ألوان الزي المستوحاة من ألوان العلم السعودي والبيئة الصحراوية</li>
                  <li>تصميم الأزرار والتفاصيل بشكل يحاكي الحرف التقليدية السعودية</li>
          </ul>
              </div>
        </section>

            <section id="modern-designs" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التصاميم الحديثة للخطوط السعودية</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="التصميم الحديث لزي الخطوط السعودية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  التصميم الحديث لزي طاقم الخطوط السعودية | المصدر: الخطوط الجوية العربية السعودية
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">زي مضيفي ومضيفات الخطوط السعودية</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">السمات الرئيسية للتصميم الحالي</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">زي المضيفين:</span> بدلة رسمية باللون الأخضر الداكن مع قميص أبيض وربطة عنق بنقوش سعودية تقليدية. تتميز البدلة بقصة عصرية مع لمسات من التراث السعودي في التفاصيل والشارات.</li>
                    <li><span className="font-medium">زي المضيفات:</span> فستان/تايور بألوان تدرج من الأخضر الفاتح إلى الداكن، مع وشاح مزين بنقوش إسلامية. يراعي التصميم الحشمة مع الحفاظ على الأناقة والعملية.</li>
                    <li><span className="font-medium">الإكسسوارات:</span> شارات وأزرار تحمل شعار الشركة، دبابيس مستوحاة من العناصر السعودية التقليدية، وحقائب عملية بتصميم أنيق.</li>
                    <li><span className="font-medium">الأحذية:</span> مصممة خصيصاً لتوفير الراحة خلال ساعات العمل الطويلة مع الحفاظ على المظهر الرسمي.</li>
          </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الابتكارات التقنية في التصميم الحديث</h3>
              <p className="mb-4 leading-7 text-gray-700">
                تتميز التصاميم الحديثة بالاعتماد على أحدث التقنيات في صناعة الأقمشة والملابس:
              </p>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">التقنيات المستخدمة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>أقمشة ذكية تتكيف مع درجات الحرارة المختلفة، مناسبة للبيئة الحارة في المملكة والمقصورة المكيفة</li>
                  <li>معالجات مضادة للميكروبات والبقع لضمان نظافة الزي طوال فترة الخدمة</li>
                  <li>تقنيات خياطة متطورة توفر المرونة والراحة مع الحفاظ على الشكل الرسمي</li>
                  <li>تصاميم معيارية تسمح بالتعديل حسب احتياجات الموسم والمناسبات الخاصة</li>
          </ul>
              </div>
        </section>

            <section id="challenges" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التحديات والاعتبارات الخاصة</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التكيف مع المناخ السعودي</h3>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل المناخ الحار في المملكة تحدياً خاصاً لمصممي أزياء الطيران، حيث يتطلب توازناً بين المظهر الرسمي الأنيق والراحة في درجات الحرارة المرتفعة. تستخدم الخطوط السعودية أقمشة خاصة ذات قدرة عالية على التنفس وتنظيم الحرارة، مع تصاميم تسمح بتدفق الهواء مع الحفاظ على المظهر المهني.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">مراعاة الخصوصية الثقافية</h3>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <p className="mb-2 text-gray-700">
                  يراعي تصميم أزياء الطيران السعودية الخصوصية الثقافية والدينية للمملكة، مع تحقيق التوازن بين هذه الاعتبارات والمعايير العالمية لأزياء الطيران. تتميز أزياء المضيفات بالحشمة والأناقة، مع توفير خيارات متنوعة تتناسب مع تفضيلات مختلف الموظفات، بما في ذلك خيارات للحجاب وأطوال مختلفة للأكمام والتنانير.
                </p>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التنوع الثقافي في الطاقم</h3>
              <p className="mb-4 leading-7 text-gray-700">
                تضم الخطوط السعودية طاقماً متنوعاً من جنسيات مختلفة، مما يتطلب تصاميم تناسب مختلف الثقافات والأجسام، مع الحفاظ على هوية موحدة. يتم تصميم الزي بمقاسات وقصات متنوعة، مع مراعاة الملاءمة لمختلف أنواع الجسم والاحتياجات الفردية.
              </p>
        </section>

            <section id="future" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مستقبل أزياء الطيران في المملكة</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تأثير رؤية 2030</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">انعكاس الرؤية على تصميم الأزياء:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>دمج عناصر من المشاريع السياحية الكبرى مثل نيوم والقدية في تصاميم الأزياء المستقبلية</li>
                  <li>تعزيز دور المصممين السعوديين الشباب في تطوير أزياء الطيران الوطنية</li>
                  <li>الاستثمار في تقنيات مستدامة وصديقة للبيئة تماشياً مع أهداف الاستدامة في الرؤية</li>
                  <li>تطوير أزياء تعكس التنوع الثقافي والجغرافي للمملكة</li>
          </ul>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الاتجاهات المستقبلية</h3>
              <p className="mb-4 leading-7 text-gray-700">
                من المتوقع أن تشهد أزياء الطيران السعودية تطورات كبيرة في السنوات القادمة، مع التركيز على:
              </p>
              <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700 mb-4">
                <li>التكامل مع التقنيات الذكية مثل أجهزة الاستشعار لمراقبة صحة الطاقم وتحسين راحتهم</li>
                <li>تطوير أقمشة فائقة الأداء تتناسب مع البيئة السعودية وتحديات العمل في مجال الطيران</li>
                <li>تصاميم قابلة للتخصيص تسمح بتعديلات بسيطة حسب الموسم والوجهة</li>
                <li>دمج تقنيات الواقع المعزز في تدريب الطاقم على ارتداء الزي والعناية به</li>
          </ol>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل أزياء الطيران في المملكة العربية السعودية حكاية نجاح في دمج التراث الثقافي مع متطلبات العصر الحديث. فمن البدايات المتواضعة إلى التصاميم المعاصرة الفاخرة، عكست هذه الأزياء مسيرة تطور المملكة ورؤيتها للعالم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                مع استمرار التحولات الكبرى في المملكة ضمن رؤية 2030، ستظل أزياء الطيران السعودية سفيراً ثقافياً يعبر عن الهوية الوطنية بلغة عالمية. التحدي المستمر سيكون في الحفاظ على هذا التوازن الدقيق بين الأصالة والحداثة، والتراث والابتكار، بما يعكس الصورة المشرقة للمملكة العربية السعودية في المشهد العالمي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في النهاية، تبقى أزياء الطيران السعودية أكثر من مجرد ملابس عمل، فهي تمثل رسالة حضارية وثقافية، وجزءاً لا يتجزأ من الهوية البصرية للمملكة التي تجمع بين عراقة الماضي وطموحات المستقبل.
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