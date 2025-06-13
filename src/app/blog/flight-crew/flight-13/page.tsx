import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaTshirt, FaStar, FaSprayCan } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'دليل الصيانة والعناية بأزياء طاقم الطيران: إطالة العمر والحفاظ على الأناقة | يونيفورم',
  description: 'تعرف على أفضل الطرق والتقنيات للعناية بأزياء طاقم الطيران وصيانتها، لضمان المحافظة على مظهرها الأنيق وإطالة عمرها الافتراضي مع توفير التكاليف.',
  keywords: 'صيانة أزياء الطيران، العناية بملابس الطاقم، تنظيف أزياء الطيران، إطالة عمر الملابس، السعودية، يونيفورم',
  openGraph: {
    title: 'دليل العناية والصيانة لأزياء الطيران: حافظ على الأناقة والجودة',
    description: 'دليل شامل للحفاظ على أزياء الطيران في أفضل حالة',
    images: ['/images/flight_crew/cabin_crew_uniforms.webp'],
  },
};

export default function Article13Page() {
  const heroImage = '/images/flight_crew/cabin_crew_uniforms.webp';
  const title = 'دليل الصيانة والعناية بأزياء طاقم الطيران: إطالة العمر والحفاظ على الأناقة';
  const readingTime = '10 دقائق';
  const publishDate = '١٣ ديسمبر ٢٠٢٤';
  const author = 'خبراء الصيانة والعناية - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'daily-care', title: 'العناية اليومية' },
    { id: 'cleaning-techniques', title: 'تقنيات التنظيف المتخصصة' },
    { id: 'fabric-specific', title: 'العناية حسب نوع القماش' },
    { id: 'storage-methods', title: 'طرق التخزين المثلى' },
    { id: 'repair-maintenance', title: 'الإصلاح والصيانة الوقائية' },
    { id: 'cost-saving', title: 'نصائح توفير التكاليف' },
    { id: 'professional-tips', title: 'نصائح احترافية' },
  ];

  return (
    <main className="bg-gray-50 rtl">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] mb-8">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-end pb-16">
            <div className="text-white max-w-4xl">
              <div className="mb-4">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaTshirt />
                  صيانة وعناية
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                دليلك الشامل للحفاظ على أناقة ومتانة أزياء الطيران بطرق علمية ومتخصصة
              </p>
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <FaUser className="w-4 h-4" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>{readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="w-4 h-4" />
                  <span>{publishDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 lg:sticky lg:top-24 h-fit">
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-green-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-green-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-green-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-green-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-green-900">
                تحتاج خدمات صيانة؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على خدمات صيانة وعناية احترافية لأزياء طاقم الطيران
              </p>
              <Link 
                href="/quote" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors block text-center text-sm font-medium"
              >
                طلب خدمة صيانة
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  تعتبر أزياء طاقم الطيران استثماراً مهماً لأي شركة طيران، ليس فقط من الناحية المالية، بل أيضاً من حيث الصورة المهنية والانطباع الذي تتركه في أذهان المسافرين. لذلك، تصبح الصيانة والعناية الصحيحة بهذه الأزياء أمراً بالغ الأهمية لضمان استمرار مظهرها الأنيق وإطالة عمرها الافتراضي.
                </p>
                
                <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-green-600" />
                    فوائد الصيانة الصحيحة
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• إطالة العمر الافتراضي بنسبة 200%</li>
                      <li>• الحفاظ على المظهر المهني</li>
                      <li>• توفير تكاليف الاستبدال المبكر</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• منع التلف والأضرار المبكرة</li>
                      <li>• ضمان الراحة والوظيفية</li>
                      <li>• تعزيز صورة الشركة</li>
                    </ul>
                  </div>
                </div>

                <p>
                  العناية بأزياء الطيران تتطلب معرفة متخصصة بطبيعة الأقمشة والمواد المستخدمة، وفهماً عميقاً للتحديات التي تواجهها في بيئة العمل المتنوعة. من الرحلات الطويلة إلى التغيرات المناخية، ومن الاستخدام المكثف إلى متطلبات النظافة الصارمة.
                </p>
              </div>
            </section>

            <section id="daily-care" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                العناية اليومية
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/best_flight_crew_attire.webp"
                    alt="العناية اليومية بأزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-800">
                    روتين العناية اليومي
                  </h3>
                  <p className="text-gray-700">
                    تبدأ العناية الفعالة بأزياء الطيران من اللحظة الأولى لارتدائها وتستمر حتى نهاية اليوم. هذا الروتين اليومي البسيط يمكن أن يضاعف من عمر الزي ويحافظ على مظهره المهني.
                  </p>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-teal-800">الخطوات الأساسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🌅 فحص الزي قبل الارتداء</li>
                      <li>🧼 تنظيف البقع فور حدوثها</li>
                      <li>🌬️ التهوية بعد كل استخدام</li>
                      <li>👔 الشنق الصحيح في نهاية اليوم</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">
                  قائمة تحقق العناية اليومية
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">👀</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الفحص المبكر</h4>
                    <p className="text-gray-600 text-sm">فحص شامل للزي قبل الارتداء للتأكد من سلامته</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">التدخل السريع</h4>
                    <p className="text-gray-600 text-sm">معالجة فورية لأي بقع أو أضرار طفيفة</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">الحماية النهائية</h4>
                    <p className="text-gray-600 text-sm">تخزين صحيح وتهوية مناسبة بعد الاستخدام</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="cleaning-techniques" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                تقنيات التنظيف المتخصصة
              </h2>

              <div className="my-10">
                <h3 className="text-2xl font-bold text-green-900 mb-6">تقنيات التنظيف المتخصصة</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/cabin_crew_uniforms.webp"
                        alt="التنظيف الجاف المتخصص"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">التنظيف الجاف المتخصص</h4>
                    <p className="text-sm text-gray-600">تقنيات متطورة للحفاظ على شكل وملمس الأقمشة الراقية</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_hospitality_uniforms.webp"
                        alt="العناية حسب نوع القماش"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">العناية حسب نوع القماش</h4>
                    <p className="text-sm text-gray-600">معالجة مخصصة لكل نوع من الأقمشة والمواد</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/accessories_overview.webp"
                        alt="صيانة الإكسسوارات"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">صيانة الإكسسوارات</h4>
                    <p className="text-sm text-gray-600">العناية المناسبة بالأحزمة والشارات والإكسسوارات</p>
                  </div>
                </div>
              </div>

              <div className="my-10">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/flight_crew/crew_uniform_solutions.webp"
                    alt="طرق الإصلاح والترميم"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-teal-600/60 flex items-center">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">الصيانة الاحترافية</h3>
                      <p className="text-lg mb-4">تقنيات متقدمة للحفاظ على أزياء الطيران في أفضل حالاتها</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-white/20 px-3 py-1 rounded-full">🧼 تنظيف</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🔧 صيانة</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">💼 احترافية</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6">نصائح احترافية لإطالة عمر الأزياء</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="العناية حسب نوع القماش"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-green-800">العناية حسب نوع القماش</h4>
                    <p className="text-sm text-gray-600">معالجة مخصصة لكل نوع من الأقمشة والمواد</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/crew_pins_badges.webp"
                        alt="الصيانة الوقائية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-green-800">الصيانة الوقائية</h4>
                    <p className="text-sm text-gray-600">
                      إجراءات وقائية لمنع التلف والحفاظ على جودة الأزياء
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">نصائح توفير التكاليف</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <div className="relative h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden">
                      <Image
                        src="/images/flight_crew/cockpit_crew_clothing.webp"
                        alt="زيادة العمر الافتراضي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-medium text-blue-800 text-sm">زيادة العمر الافتراضي</h4>
                    <p className="text-xs text-gray-600 mt-1">بنسبة تصل إلى 200%</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="relative h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden">
                      <Image
                        src="/images/flight_crew/corporate_flight_crew_uniforms.webp"
                        alt="تقليل تكاليف الاستبدال"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-medium text-blue-800 text-sm">تقليل الاستبدال</h4>
                    <p className="text-xs text-gray-600 mt-1">توفير 60% من التكاليف</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="relative h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden">
                      <Image
                        src="/images/flight_crew/custom_crew_uniforms.webp"
                        alt="تحسين المظهر"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-medium text-blue-800 text-sm">تحسين المظهر</h4>
                    <p className="text-xs text-gray-600 mt-1">احترافية دائمة</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="relative h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden">
                      <Image
                        src="/images/flight_crew/crew_footwear_bags.webp"
                        alt="راحة الطاقم"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-medium text-blue-800 text-sm">راحة الطاقم</h4>
                    <p className="text-xs text-gray-600 mt-1">أداء أفضل ومستدام</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="fabric-specific" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                العناية حسب نوع القماش
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/fabric_care_types.jpeg"
                    alt="العناية حسب نوع القماش"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    خصوصية كل نوع قماش
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تختلف أقمشة أزياء الطيران في تركيبها وخصائصها، مما يتطلب أساليب عناية متخصصة لكل نوع. فهم هذه الخصائص مفتاح الحفاظ على جودة الزي لأطول فترة ممكنة.
                  </p>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">الأقمشة الشائعة:</h4>
                    <ul className="text-sm space-y-1 text-purple-700">
                      <li>🧶 الصوف الطبيعي والمخاليط</li>
                      <li>🌿 القطن والقطن المخلوط</li>
                      <li>✨ الألياف الصناعية والتقنية</li>
                      <li>🔗 المخاليط المركبة المتطورة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  🧵 دليل العناية حسب نوع القماش
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">الأقمشة الطبيعية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• الصوف: تنظيف جاف أو غسيل بارد</li>
                      <li>• القطن: غسيل عادي بماء دافئ</li>
                      <li>• الحرير: تنظيف جاف حصرياً</li>
                      <li>• الكتان: غسيل بارد مع عناية خاصة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">الألياف الصناعية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• البوليستر: غسيل عادي ومقاوم للانكماش</li>
                      <li>• النايلون: عناية خاصة ضد التكهرب</li>
                      <li>• الإلاستان: تجنب الحرارة العالية</li>
                      <li>• الأقمشة التقنية: تعليمات الشركة المصنعة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="storage-methods" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                طرق التخزين المثلى
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                    أسس التخزين الصحيح
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">التخزين قصير المدى</h4>
                        <p className="text-sm text-gray-700">
                          للاستخدام اليومي والتناوب بين الأزياء خلال الأسبوع
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-800 mb-2">التخزين طويل المدى</h4>
                        <p className="text-sm text-gray-700">
                          للأزياء الموسمية أو الاحتياطية التي تخزن لشهور
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">التخزين أثناء السفر</h4>
                        <p className="text-sm text-gray-700">
                          طرق خاصة للحفاظ على الأزياء في الحقائب والرحلات
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/uniform_storage.jpeg"
                        alt="طرق التخزين الصحيحة"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌡️</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">التحكم في المناخ</h4>
                    <p className="text-gray-600 text-sm">درجة حرارة ورطوبة مناسبة لحفظ الأقمشة</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">الحماية من الآفات</h4>
                    <p className="text-gray-600 text-sm">استخدام مواد طاردة آمنة وطبيعية</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📦</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">التغليف الصحيح</h4>
                    <p className="text-gray-600 text-sm">استخدام مواد تسمح بالتهوية وتمنع الغبار</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="repair-maintenance" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                الإصلاح والصيانة الوقائية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/uniform_repair.jpeg"
                    alt="إصلاح وصيانة أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-800">
                    الصيانة الوقائية والإصلاح
                  </h3>
                  <p className="text-gray-700 text-sm">
                    الصيانة الوقائية أهم من الإصلاح، فهي تمنع حدوث المشاكل قبل أن تبدأ. من خلال فحوصات دورية بسيطة وصيانة منتظمة، يمكن تجنب معظم الأضرار التي تتطلب إصلاحات مكلفة.
                  </p>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-800 mb-2">أنواع الصيانة:</h4>
                    <ul className="text-sm space-y-1 text-orange-700">
                      <li>🔍 الفحص الدوري والتقييم</li>
                      <li>🧵 تقوية نقاط الضعف</li>
                      <li>⚡ الإصلاح السريع للأضرار البسيطة</li>
                      <li>🔧 الصيانة الشاملة الدورية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">
                  برنامج الصيانة الوقائية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-700 mb-3">الفحص الأسبوعي:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• فحص الأزرار والسحابات</li>
                      <li>• تفقد حالة الأكمام والياقات</li>
                      <li>• فحص بطانة الجيوب</li>
                      <li>• تقييم حالة الخياطة العامة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-3">الصيانة الشهرية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• تنظيف عميق وشامل</li>
                      <li>• كي وضبط القماش</li>
                      <li>• تزييت السحابات</li>
                      <li>• معالجة التكرمش والتجاعيد</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/flight-crew/flight-2" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/flight_crew_uniform_fabrics.jpeg"
                        alt="اختيار أقمشة زي طاقم الطائرة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        اختيار أقمشة زي طاقم الطائرة: دليل الجودة والمتانة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-6" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/comfort_safety_airline_uniforms.jpeg"
                        alt="تقنيات الراحة والأمان"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        تقنيات الراحة والأمان في أزياء الطيران الحديثة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-1" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/airline_uniform_design.jpeg"
                        alt="اعتبارات تصميم زي شركات الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
} 