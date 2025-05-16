import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import { ArticleImage } from '@/components/ArabicContentElements';

export const metadata = {
  title: 'زي موحد لطواقم التدريب والمحاكاة في أكاديميات الطيران السعودية',
  description: 'دراسة متعمقة حول الزي الموحد لطواقم التدريب والمحاكاة في أكاديميات الطيران بالمملكة العربية السعودية، وأهميته في تعزيز الواقعية والمهنية في بيئة التدريب',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight-22.jpeg';
  const title = 'زي موحد لطواقم التدريب والمحاكاة في أكاديميات الطيران السعودية';
  const readingTime = '8 دقائق';
  const datePublished = '٢٢ مايو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية الزي في بيئة التدريب والمحاكاة' },
    { id: 'characteristics', title: 'خصائص زي المتدربين في أكاديميات الطيران' },
    { id: 'uniform-types', title: 'أنواع الزي حسب مرافق التدريب المختلفة' },
    { id: 'design-standards', title: 'معايير التصميم والإنتاج' },
    { id: 'management', title: 'إدارة منظومة الزي التدريبي' },
    { id: 'challenges', title: 'تحديات وحلول' },
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
                  <Link href="/blog/flight-crew/flight-20" className="text-sm hover:text-blue-600 block">
                    تاريخ تطور زي الخطوط الجوية السعودية
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-21" className="text-sm hover:text-blue-600 block">
                    زي خاص بطواقم الطائرات الخاصة ورجال الأعمال
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
            
            {imageSrc && (
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            )}

            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="تدريب الطيارين في محاكي الطيران"
                caption="طواقم التدريب والمحاكاة في أكاديميات الطيران السعودية بالزي الموحد"
              />
              
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر أكاديميات الطيران في المملكة العربية السعودية مراكز حيوية لإعداد الكوادر الوطنية المؤهلة للعمل في قطاع الطيران المتنامي. وفي سياق التدريب على مهارات الطيران والخدمة الجوية، تلعب المحاكاة دوراً محورياً في إعداد المتدربين للواقع العملي قبل الانخراط الفعلي في العمل على متن الطائرات.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                الزي الموحد لطواقم التدريب والمحاكاة في هذه الأكاديميات ليس مجرد عنصر شكلي، بل هو جزء أساسي من العملية التعليمية. فهو يساهم في خلق بيئة تدريب واقعية، ويساعد المتدربين على استيعاب الهوية المهنية وثقافة الطيران، ويعزز الانضباط والالتزام بالمعايير المهنية العالية التي تميز قطاع الطيران.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نتناول بالتفصيل خصائص الزي الموحد لطواقم التدريب والمحاكاة في أكاديميات الطيران السعودية، ودوره في العملية التعليمية، والتحديات التي تواجه تصميمه وإدارته، والمعايير التي تحكم اختياره، وأثره على تجربة التدريب وإعداد الكوادر المستقبلية لصناعة الطيران السعودية.
              </p>
            </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية الزي الموحد في بيئة التدريب</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="أهمية الزي الموحد في التدريب"
                caption="الزي الموحد يعزز الواقعية ويرسخ المهنية في بيئة التدريب"
              />
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
              <h3 className="text-xl font-medium mt-6 mb-3">تعزيز الواقعية في التدريب</h3>
              <p className="mb-4">
                دور الزي في محاكاة البيئة الحقيقية:
              </p>
              <ul className="list-disc list-inside mb-4 mr-5">
                <li className="mb-2">خلق تجربة تدريب تحاكي ظروف العمل الفعلية على متن الطائرات</li>
                <li className="mb-2">تعزيز الانغماس النفسي للمتدربين في السيناريوهات التدريبية</li>
                <li className="mb-2">تمكين المدربين من تقييم سلوك المتدربين في بيئة شبيهة بالعمل الفعلي</li>
                <li className="mb-2">مساعدة المتدربين على التكيف مع قواعد المظهر المهني قبل الالتحاق بالعمل</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">التأثير النفسي والمهني</h3>
              <p className="mb-4">
                دور الزي في بناء الشخصية المهنية:
              </p>
              <ul className="list-disc list-inside mb-4 mr-5">
                <li className="mb-2">تعزيز الثقة بالنفس والشعور بالانتماء المهني لدى المتدربين</li>
                <li className="mb-2">غرس القيم المهنية كالانضباط والدقة والاحترافية</li>
                <li className="mb-2">المساعدة في تحويل السلوك من نمط الطالب إلى نمط المهني المحترف</li>
                <li className="mb-2">تقليل القلق والتوتر المرتبط بالمظهر لتركيز الانتباه على التدريب</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">الهوية المؤسسية والمعايير المهنية</h3>
              <p className="mb-4">
                تمثيل قيم الأكاديمية وصناعة الطيران:
              </p>
              <ol className="list-decimal list-inside mb-4 mr-5">
                <li className="mb-2">تعريف المتدربين بهوية المؤسسة التعليمية وقيمها</li>
                <li className="mb-2">تعزيز الانتماء للمهنة والفخر بها منذ مرحلة التدريب</li>
                <li className="mb-2">خلق صورة احترافية موحدة في جميع مرافق التدريب</li>
                <li className="mb-2">تأصيل ثقافة الالتزام بالمعايير المظهرية العالمية في قطاع الطيران</li>
              </ol>
              </div>
            </section>

            <section id="design-specs" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مواصفات تصميم الزي الموحد لطواقم التدريب</h2>
              
              <ArticleImage 
                src="/images/flight_crew/air_crew_attire.jpeg"
                alt="مواصفات زي طواقم التدريب"
                caption="المواصفات الدقيقة لزي طواقم التدريب تجمع بين الوظيفية والأناقة"
              />
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
              <h3 className="text-xl font-medium mt-6 mb-3">الموازنة بين التشابه مع الزي المهني والتمييز التعليمي</h3>
              <p className="mb-4">
                تحقيق التوازن بين المحاكاة والتمييز:
              </p>
              <ul className="list-disc list-inside mb-4 mr-5">
                <li className="mb-2">تصميم يشبه الزي المهني الفعلي مع عناصر تمييز واضحة للمتدربين</li>
                <li className="mb-2">استخدام الألوان والشعارات بشكل مختلف قليلاً عن الزي الرسمي للعاملين</li>
                <li className="mb-2">شارات وعلامات مميزة توضح الوضع التدريبي وليس المهني</li>
                <li className="mb-2">معايير جودة عالية مع مراعاة الاستخدام التدريبي والتكلفة المناسبة</li>
              </ul>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6">
              <h3 className="text-xl font-medium mt-6 mb-3">مواصفات الخامات والمتانة</h3>
              <p className="mb-4">
                اختيار المواد المناسبة لبيئة التدريب:
              </p>
              <ol className="list-decimal list-inside mb-4 mr-5">
                <li className="mb-2">أقمشة متينة تتحمل الاستخدام المتكرر والمكثف في بيئة التدريب</li>
                <li className="mb-2">توازن بين الجودة العالية والتكلفة المعقولة للمتدربين</li>
                <li className="mb-2">مواد سهلة العناية والتنظيف تحافظ على مظهرها لفترة طويلة</li>
                <li className="mb-2">مراعاة المناخ السعودي في اختيار الأقمشة المناسبة من حيث الحرارة والتهوية</li>
              </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
              <h3 className="text-xl font-medium mt-6 mb-3">الاعتبارات الثقافية والمحلية</h3>
              <p className="mb-4">
                تصميم يراعي السياق السعودي:
              </p>
              <ul className="list-disc list-inside mb-4 mr-5">
                <li className="mb-2">توفير خيارات تتناسب مع القيم المحلية والثقافة السعودية</li>
                <li className="mb-2">مراعاة متطلبات الحشمة والاحتشام في تصاميم زي المتدربات</li>
                <li className="mb-2">دمج عناصر من التراث السعودي في بعض تفاصيل الزي مثل النقوش والألوان</li>
                <li className="mb-2">التوفيق بين المعايير العالمية للطيران والخصوصية الثقافية المحلية</li>
              </ul>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
} 