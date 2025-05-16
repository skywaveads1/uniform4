import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تصميم الزي الموحد',
  description: 'دليل شامل لتصميم الزي الموحد لطاقم الطيران، يتناول المعايير والاعتبارات الأساسية والتوجهات الحديثة في هذا المجال',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_uniform_design.jpeg';
  const title = 'تصميم الزي الموحد';
  const readingTime = '8 دقائق';
  const datePublished = '٥ مايو ٢٠٢٤';
  const authorName = 'م. حنين البقمي';
  const authorImage = '/images/author/حنين_البقمي.png';
  const authorTitle = 'مصممة أزياء ومتخصصة في الزي الموحد';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة في تصميم الزي الموحد' },
    { id: 'importance', title: 'أهمية الزي الموحد في صناعة الطيران' },
    { id: 'design-phases', title: 'مراحل تصميم الزي الموحد' },
    { id: 'design-elements', title: 'عناصر التصميم الرئيسية' },
    { id: 'special-considerations', title: 'الاعتبارات المتخصصة في تصميم زي الطيران' },
    { id: 'modern-trends', title: 'الاتجاهات المعاصرة في تصميم الزي الموحد' },
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
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4 border-r-4 border-blue-600 pr-3">عن الكاتب</h3>
              <div className="flex">
                <div className="ml-4">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    width={120}
                    height={120}
                    className="rounded-lg"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 text-xl mb-1">{authorName}</h4>
                  <p className="text-gray-700 mb-3">{authorTitle}</p>
                  <p className="text-gray-600 text-sm mb-3">كاتب محترف في مجال الزي الموحد والمؤقتة. لديه خبرة واسعة في تصميم وتصنيع الزي الموحد للشركات والمؤسسات.</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-600 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-6">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مشاركة المقال</h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg font-bold mb-5 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/flight_crew/air_crew_attire.jpeg"
                      alt="التصميم المبتكر لملابس طاقم الطائرة"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">التصميم المبتكر لملابس طاقم الطائرة</h4>
                    <p className="text-gray-600 text-sm">وصف مختصر للابتكارات في تصميم ملابس طاقم الطائرة...</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/flight_crew/air_crew_attire.jpeg"
                      alt="أزياء المضيفات الحديثة"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">أزياء المضيفات الحديثة</h4>
                    <p className="text-gray-600 text-sm">نظرة على التطورات الحديثة في أزياء المضيفات...</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/flight_crew/air_crew_attire.jpeg"
                      alt="الراحة والسلامة في أزياء شركات الطيران"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">الراحة والسلامة في أزياء شركات الطيران</h4>
                    <p className="text-gray-600 text-sm">تحقيق التوازن بين الراحة والسلامة في التصميم...</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة في تصميم الزي الموحد</h2>
              <p className="mb-4 leading-7 text-gray-700">
            يعتبر تصميم الزي الموحد لطاقم الطيران عملية إبداعية وتقنية معقدة تجمع بين الفن والوظيفة والهوية المؤسسية. فهو ليس مجرد ملابس للعمل، بل هو واجهة مرئية لشركة الطيران والانطباع الأول الذي يتكون لدى المسافرين. يمثل الزي الموحد أيضًا عنصرًا أساسيًا في بيئة العمل وتجربة الموظفين اليومية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            في هذا المقال، نستعرض الأسس والمعايير الرئيسية لتصميم الزي الموحد لشركات الطيران، ونناقش التحديات التي تواجه المصممين، والاتجاهات المعاصرة في هذا المجال، مع التركيز على كيفية تحقيق التوازن المثالي بين الأناقة والراحة والوظيفية والتعبير عن هوية العلامة التجارية.
          </p>
        </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية الزي الموحد في صناعة الطيران</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="أهمية الزي الموحد في صناعة الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  الزي الموحد كعنصر أساسي في الهوية البصرية لشركات الطيران | المصدر: معرض تصميم الأزياء
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الهوية المؤسسية والتمييز البصري</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">يلعب الزي الموحد دوراً محورياً في ترسيخ هوية شركة الطيران:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تجسيد القيم والرؤية الخاصة بالشركة من خلال التصميم</li>
                  <li>التمييز البصري بين شركات الطيران المختلفة في بيئة تنافسية</li>
                  <li>تعزيز الارتباط العاطفي مع العلامة التجارية لدى المسافرين</li>
                  <li>استمرارية بصرية في جميع نقاط الاتصال مع العملاء</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الوظيفية والسلامة</h3>
                  <p className="mb-2 text-gray-700">الاعتبارات العملية التي تحكم تصميم الزي:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>توفير الراحة والحركة الحرة أثناء ساعات العمل الطويلة</li>
                    <li>تلبية متطلبات السلامة والطوارئ وفقاً للمعايير الدولية</li>
                    <li>ملاءمة بيئات العمل المتنوعة (درجات الحرارة المختلفة، الضغط الجوي)</li>
                    <li>تسهيل أداء المهام المختلفة من خدمة المسافرين إلى إجراءات السلامة</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التأثير النفسي والسلوكي</h3>
                  <p className="mb-2 text-gray-700">الأبعاد النفسية للزي الموحد:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تعزيز الثقة والاحترافية لدى الطاقم</li>
                    <li>المساهمة في بناء روح الفريق والانتماء المؤسسي</li>
                    <li>التأثير الإيجابي على سلوك وتوقعات المسافرين</li>
                    <li>تحديد الأدوار والمسؤوليات بوضوح داخل الفريق</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="design-phases" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مراحل تصميم الزي الموحد</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">البحث والتحليل</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">الخطوة الأولى نحو تصميم ناجح:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحليل شامل لهوية العلامة التجارية وقيمها</li>
                    <li>دراسة احتياجات الطاقم من خلال استطلاعات ومقابلات</li>
                    <li>تحليل الاتجاهات العالمية في تصميم أزياء الطيران</li>
                    <li>دراسة المنافسين والتمييز الاستراتيجي</li>
          </ul>
                </div>
              </div>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="مراحل تصميم الزي الموحد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  مراحل تصميم الزي الموحد لطاقم الطائرة | المصدر: استوديو تصميم أزياء الطيران
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التصميم المفاهيمي</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">ترجمة الرؤية إلى مفاهيم ملموسة:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>تطوير لوحة الإلهام والأسلوب البصري</li>
                  <li>اختيار نظام الألوان المتناسق مع هوية العلامة التجارية</li>
                  <li>إنشاء الرسومات الأولية والتصورات البصرية</li>
                  <li>التشاور مع قيادة الشركة وممثلي الطاقم في المراحل المبكرة</li>
          </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">اختيار المواد والأقمشة</h3>
                  <p className="mb-2 text-gray-700">الأساس المادي للزي الموحد:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تقييم أنواع الأقمشة من حيث المتانة والراحة والمظهر</li>
                    <li>اختبار خصائص المواد (سهولة العناية، مقاومة التجعد، المرونة)</li>
                    <li>البحث في الخيارات المستدامة والصديقة للبيئة</li>
                    <li>موازنة الجودة مع اعتبارات التكلفة والإنتاج</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تطوير النماذج والاختبار</h3>
                  <p className="mb-2 text-gray-700">تحويل المفاهيم إلى نماذج قابلة للتقييم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>إنشاء نماذج أولية للقطع الرئيسية</li>
                    <li>اختبار ميداني في ظروف عمل حقيقية</li>
                    <li>جمع التغذية الراجعة من مختلف أقسام الطاقم</li>
                    <li>إجراء تعديلات متكررة بناءً على نتائج الاختبار</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="design-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">عناصر التصميم الرئيسية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">القصات والأنماط</h3>
                <p className="mb-2 font-medium text-blue-700">الأشكال والخطوط التي تحدد مظهر الزي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>القصات المناسبة لمختلف أنماط الجسم</li>
                  <li>توازن بين الخطوط الكلاسيكية والعناصر المعاصرة</li>
                  <li>تناسق بين مختلف قطع الزي (السترات، القمصان، البناطيل، التنانير)</li>
                  <li>تصميم يراعي التنوع الثقافي والاحتياجات الخاصة</li>
          </ul>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="عناصر تصميم الزي الموحد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  عناصر التصميم والإكسسوارات في الزي الموحد | المصدر: مجلة تصميم الأزياء
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الألوان والنسيج</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">العناصر المرئية التي تميز الزي</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>اختيار ألوان تعكس هوية العلامة التجارية</li>
                    <li>نظام ألوان متكامل يسمح بالمزج والتنسيق</li>
                    <li>استخدام الملمس والنسيج لإضافة عمق وتفرد</li>
                    <li>توظيف الألوان الثانوية لتمييز الأدوار والرتب المختلفة</li>
          </ol>
                </div>
              </div>
        </section>

            <section id="special-considerations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتبارات المتخصصة في تصميم زي الطيران</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الراحة خلال الرحلات الطويلة</h3>
                  <p className="mb-2 text-gray-700">تحسين تجربة الارتداء لساعات طويلة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة تسمح بتهوية الجسم وتنظيم درجة الحرارة</li>
                    <li>قصات مريحة لا تعيق الحركة أو تضغط على الجسم</li>
                    <li>تقنيات حياكة تقلل من الاحتكاك والتهيج الجلدي</li>
                    <li>خيارات متعددة تناسب مختلف درجات الحرارة والظروف</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">متطلبات السلامة والطوارئ</h3>
                  <p className="mb-2 text-gray-700">تكامل عوامل السلامة في التصميم:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>مواد مقاومة للحريق وفقاً للمعايير العالمية</li>
                    <li>تصميم لا يعيق الحركة السريعة في حالات الطوارئ</li>
                    <li>رؤية واضحة وتمييز سريع لطاقم المقصورة</li>
                    <li>تكامل مع معدات السلامة الشخصية</li>
          </ol>
                </div>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="اعتبارات السلامة في تصميم زي الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  متطلبات السلامة في تصميم زي الطيران | المصدر: هيئة سلامة الطيران المدني
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">سهولة العناية والصيانة</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">اعتبارات عملية لاستخدام يومي مكثف:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>مواد تتحمل الغسيل المتكرر دون فقدان اللون أو الشكل</li>
                  <li>تصاميم مقاومة للتجعد تحافظ على المظهر الأنيق</li>
                  <li>تعليمات عناية واضحة ومبسطة للطاقم</li>
                  <li>نظام استبدال فعال للقطع التالفة أو البالية</li>
          </ul>
              </div>
        </section>

            <section id="modern-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاتجاهات المعاصرة في تصميم الزي الموحد</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الاستدامة والمسؤولية البيئية</h3>
                  <p className="mb-2 text-gray-700">التوجه نحو ممارسات أكثر وعياً بالبيئة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>استخدام مواد معاد تدويرها وقابلة للتحلل</li>
                    <li>أقمشة عضوية ومستدامة (القطن العضوي، التنسل، الخيزران)</li>
                    <li>عمليات تصنيع منخفضة استهلاك المياه والطاقة</li>
                    <li>برامج إعادة تدوير الأزياء القديمة ومنع النفايات</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الشمولية والتنوع</h3>
                  <p className="mb-2 text-gray-700">تصاميم تحترم التنوع البشري:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>خيارات تناسب مختلف أنماط الجسم والبنيات البدنية</li>
                    <li>مراعاة الاعتبارات الدينية والثقافية المتنوعة</li>
                    <li>تجاوز الأدوار النمطية المرتبطة بالنوع الاجتماعي</li>
                    <li>تصاميم سهلة الارتداء لذوي الاحتياجات الخاصة</li>
          </ol>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">دمج التكنولوجيا في الأزياء</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الابتكارات التقنية في مجال الملابس</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تقنيات حديثة تحسن من الأداء والراحة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة ذكية تتكيف مع درجات الحرارة والرطوبة</li>
                    <li>إكسسوارات متكاملة مع الأجهزة القابلة للارتداء</li>
                    <li>أنظمة تحديد وتتبع مدمجة بشكل غير ملحوظ</li>
                    <li>معالجات نانوية للمقاومة الفائقة للبقع وتنظيم الحرارة</li>
          </ul>
                </div>
              </div>
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