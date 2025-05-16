import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تطورات تقنية في ملابس الخدمات الوقائية',
  description: 'استعراض لأحدث التقنيات المستخدمة في تصميم وتصنيع ملابس الخدمات الوقائية والابتكارات التي تعزز السلامة والأداء.',
};

export default function ProtectiveServices2() {
  const imageSrc = '/images/protective_services/tactical_protective_gear.jpeg';
  const title = 'تطورات تقنية في ملابس الخدمات الوقائية';
  const readingTime = '٧ دقائق للقراءة';
  const datePublished = '١٠ يونيو ٢٠٢٤';

  const tags = ["الخدمات الوقائية", "التقنيات الحديثة", "الأقمشة الذكية", "السلامة المهنية", "الملابس الواقية", "الابتكارات"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'smart-fabrics', title: 'الأقمشة الذكية وتطبيقاتها' },
    { id: 'monitoring-tech', title: 'تقنيات المراقبة المدمجة' },
    { id: 'thermal-regulation', title: 'تنظيم الحرارة المتقدم' },
    { id: 'case-studies', title: 'دراسات حالة' },
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
                  <Link href="/blog/protective-services/protective-1" className="text-sm hover:text-blue-600 block">
                    الزي الموحد لفرق الخدمات الوقائية: معايير الجودة والسلامة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/security-uniforms/importance-uniform-on-security" className="text-sm hover:text-blue-600 block">
                    أهمية الزي الموحد في قطاع الأمن والحراسة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/security-uniforms/uniform-security-materials" className="text-sm hover:text-blue-600 block">
                    مواد تصنيع زي رجال الأمن: المتانة والأداء
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
                شهد مجال ملابس الخدمات الوقائية تطورات تقنية مذهلة في السنوات الأخيرة، حيث أدت الابتكارات في علوم المواد والإلكترونيات الدقيقة إلى تحول جذري في طريقة تصميم وتصنيع الملابس الواقية. لم تعد هذه الملابس مجرد حاجز سلبي ضد المخاطر، بل أصبحت أنظمة ذكية متكاملة تتفاعل مع البيئة المحيطة وتوفر حماية متقدمة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض أبرز التطورات التقنية في مجال ملابس الخدمات الوقائية، وكيف تساهم هذه التقنيات في تعزيز مستويات السلامة والراحة والأداء لفرق الاستجابة والحماية.
              </p>
            </section>

            <section id="smart-fabrics" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأقمشة الذكية وتطبيقاتها</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تقنيات الأقمشة المتفاعلة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">أقمشة تتغير لونها عند التعرض للمخاطر:</span> أقمشة مزودة بصبغات تتفاعل كيميائياً مع الغازات السامة أو درجات الحرارة العالية، مما يوفر تحذيراً مرئياً فورياً.</li>
                  <li><span className="font-medium">أقمشة القفل الذاتي للثقوب:</span> أقمشة مبتكرة تحتوي على بوليمرات ذاتية الإصلاح تستجيب للتمزقات الصغيرة بإغلاقها ذاتياً، مما يمنع تسرب المواد الخطرة.</li>
                  <li><span className="font-medium">ألياف النانو المدعمة:</span> دمج جزيئات النانو في الأقمشة لتعزيز خصائصها مثل مقاومة التآكل والقطع مع الحفاظ على خفة الوزن.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/protective_services_uniforms.jpeg"
                  alt="الأقمشة الذكية في الملابس الوقائية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تقنيات الأقمشة الذكية المستخدمة في تصنيع الملابس الوقائية المتقدمة
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">الأقمشة الذكية تمثل تحولاً جذرياً في مفهوم الحماية الشخصية. بدلاً من الاعتماد على معدات منفصلة للكشف عن المخاطر، أصبح بإمكان الملابس نفسها أن تؤدي دور المستشعر والمحلل والمنبه. هذا يقلل من وقت الاستجابة ويزيد من فرص النجاة في المواقف الحرجة.</p>
                  <footer className="text-sm text-gray-600">— د. فيصل الشمري، باحث في تقنيات المواد المتقدمة</footer>
                </blockquote>
              </div>
            </section>

            <section id="monitoring-tech" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تقنيات المراقبة المدمجة</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تمثل أنظمة المراقبة المدمجة في الملابس الوقائية ثورة في كيفية متابعة حالة العاملين والمخاطر المحيطة:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مراقبة المؤشرات الحيوية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مستشعرات لقياس معدل ضربات القلب والتنفس</li>
                    <li>أنظمة تتبع درجة حرارة الجسم ومستويات الإجهاد</li>
                    <li>تحليل مؤشرات الإرهاق والتعب للتنبيه المبكر</li>
                    <li>نقل البيانات الحيوية في الوقت الفعلي لمركز القيادة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أجهزة استشعار البيئة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>كشف الغازات السامة والمواد الكيميائية الخطرة</li>
                    <li>قياس درجة الحرارة والإشعاع في البيئة المحيطة</li>
                    <li>أنظمة إنذار مبكر لتركيزات الأوكسجين المنخفضة</li>
                    <li>رسم خرائط للمخاطر بناءً على بيانات متعددة المصادر</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/protective_services_uniforms.jpeg"
                  alt="أنظمة المراقبة المدمجة في الملابس الوقائية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تقنيات المراقبة الذكية المدمجة في الملابس الوقائية لمراقبة المؤشرات الحيوية والمخاطر البيئية
                </div>
              </div>
            </section>

            <section id="thermal-regulation" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تنظيم الحرارة المتقدم</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تقنيات التبريد النشط والسلبي</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">أنظمة التبريد السائل:</span> شبكة من الأنابيب الدقيقة تدور فيها سوائل تبريد متخصصة للحفاظ على درجة حرارة الجسم، خاصة في الملابس الوقائية الثقيلة ومعدات الإطفاء.</li>
                    <li><span className="font-medium">تقنية PCM (Phase Change Materials):</span> مواد تمتص الحرارة الزائدة عند ذوبانها وتطلقها عند تصلبها، مما يساعد على تنظيم درجة حرارة الجسم في البيئات المتقلبة.</li>
                    <li><span className="font-medium">مبادلات الحرارة المصغرة:</span> أنظمة مدمجة تعمل على تبريد الهواء بين طبقات الملابس الوقائية، مما يقلل الإجهاد الحراري خلال المهام الطويلة.</li>
                    <li><span className="font-medium">الأقمشة عالية النفاذية انتقائياً:</span> أقمشة متطورة تسمح بمرور بخار الماء (العرق) للخارج مع منع دخول الحرارة والسوائل الخارجية.</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/protective_services_uniforms.jpeg"
                  alt="تقنيات تنظيم الحرارة في الملابس الوقائية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  أنظمة التبريد المتقدمة المدمجة في الملابس الوقائية تساعد على منع الإجهاد الحراري
                </div>
              </div>
            </section>

            <section id="case-studies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دراسات حالة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تطبيقات عملية للتقنيات الحديثة</h3>
                <p className="mb-4 text-gray-700">دراسات حالة توضح تأثير التقنيات الحديثة على أداء وسلامة فرق الخدمات الوقائية:</p>
                
                <div className="mb-4 border-r-4 border-blue-300 pr-3 py-1">
                  <h4 className="font-medium text-blue-700 mb-1">فرق الإطفاء في مدينة الرياض (2023)</h4>
                  <p className="text-gray-700">بعد تجهيز 120 من رجال الإطفاء بزي واقٍ مزود بتقنيات مراقبة المؤشرات الحيوية وأنظمة تبريد نشطة:</p>
                  <ul className="list-disc list-inside space-y-1 mr-5 text-gray-700">
                    <li>انخفاض حالات الإجهاد الحراري بنسبة 64%</li>
                    <li>زيادة متوسط وقت العمل الآمن داخل المباني المحترقة بنسبة 40%</li>
                    <li>تحسن في دقة وسرعة اتخاذ القرارات الميدانية بفضل البيانات الفورية</li>
                  </ul>
                </div>
                
                <div className="border-r-4 border-blue-300 pr-3 py-1">
                  <h4 className="font-medium text-blue-700 mb-1">فرق الاستجابة للمواد الخطرة في المنطقة الشرقية (2022-2023)</h4>
                  <p className="text-gray-700">بعد تبني بدلات واقية مزودة بأجهزة استشعار كيميائي مدمجة وأقمشة ذاتية الإصلاح:</p>
                  <ul className="list-disc list-inside space-y-1 mr-5 text-gray-700">
                    <li>اكتشاف مبكر للمواد الخطرة قبل ظهور الأعراض على العاملين</li>
                    <li>انخفاض معدل ثقب/تلف الزي الواقي بنسبة 78%</li>
                    <li>توفير في تكاليف استبدال معدات الوقاية بنسبة 35%</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مستقبل التقنيات في الملابس الوقائية</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">الذكاء الاصطناعي المدمج:</span> أنظمة تعلم آلي مصغرة مدمجة في الملابس الوقائية لتحليل البيانات واتخاذ قرارات وقائية فورية.</li>
                  <li><span className="font-medium">مصادر طاقة ذاتية:</span> تقنيات حصاد الطاقة من حركة الجسم والحرارة لتشغيل الأجهزة الإلكترونية المدمجة دون الحاجة لشحن البطاريات.</li>
                  <li><span className="font-medium">تقنيات النانو للتطهير الذاتي:</span> طبقات نانوية تقتل البكتيريا والفيروسات تلقائياً، مثالية للعاملين في مجال الاستجابة الطبية والبيولوجية.</li>
                  <li><span className="font-medium">الواقع المعزز المدمج:</span> عرض معلومات حيوية عن المخاطر والإرشادات مباشرة على خوذات أو نظارات واقية متصلة بالزي الذكي.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/protective_services_uniforms.jpeg"
                  alt="مستقبل التقنيات في الملابس الوقائية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  رؤية مستقبلية للتقنيات المتقدمة في الملابس الوقائية الذكية
                </div>
              </div>
            </section>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
              <h2 className="text-xl font-semibold mb-3">الكلمات المفتاحية</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-10 pt-6">
              <h2 className="text-xl font-semibold mb-4">مقالات ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src="/images/protective_services/protective_services_uniforms.jpeg"
                      alt="الزي الموحد لفرق الخدمات الوقائية: معايير الجودة والسلامة"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-blue-900 hover:text-blue-700">
                      <Link href="/blog/protective-services/protective-1">
                        الزي الموحد لفرق الخدمات الوقائية: معايير الجودة والسلامة
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">١٥ يونيو ٢٠٢٤</p>
                    <p className="text-sm text-gray-700 line-clamp-2">استعراض شامل لمعايير الجودة والسلامة في الزي الموحد لفرق الخدمات الوقائية</p>
                  </div>
                </div>
                <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src="/images/protective_services/protective_services_uniforms.jpeg"
                      alt="أهمية الزي الموحد في قطاع الأمن والحراسة"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-blue-900 hover:text-blue-700">
                      <Link href="/blog/security-uniforms/importance-uniform-on-security">
                        أهمية الزي الموحد في قطاع الأمن والحراسة
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">٢٠ يونيو ٢٠٢٤</p>
                    <p className="text-sm text-gray-700 line-clamp-2">دراسة تفصيلية عن دور وتأثير الزي الموحد في قطاع الأمن والحراسة</p>
                  </div>
                </div>
                <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src="/images/protective_services/protective_services_uniforms.jpeg"
                      alt="مواد تصنيع زي رجال الأمن: المتانة والأداء"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-blue-900 hover:text-blue-700">
                      <Link href="/blog/security-uniforms/uniform-security-materials">
                        مواد تصنيع زي رجال الأمن: المتانة والأداء
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">٥ يونيو ٢٠٢٤</p>
                    <p className="text-sm text-gray-700 line-clamp-2">تحليل شامل لمواد تصنيع الزي الموحد لرجال الأمن ومميزاتها</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 