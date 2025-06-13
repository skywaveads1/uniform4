import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaVenus, FaStar, FaHistory } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تطوير أزياء طاقم الطائرة عبر العقود: رحلة من التقليدية إلى الحداثة | يونيفورم',
  description: 'استكشف تطور أزياء طاقم الطائرة عبر العقود، من التصاميم التقليدية الأولى إلى الابتكارات الحديثة، وتأثير الثقافة والتكنولوجيا على الموضة.',
  keywords: 'تطوير أزياء طاقم الطائرة، تاريخ ملابس الطيران، تطور الموضة، تصميم أزياء الطيران، السعودية',
  openGraph: {
    title: 'تطوير أزياء طاقم الطائرة عبر العقود: رحلة من التقليدية إلى الحداثة',
    description: 'استكشف تطور أزياء طاقم الطائرة عبر العقود',
    images: ['/images/flight_crew/female_male_air_crew_wear.webp'],
  },
};

export default function Article3Page() {
  const heroImage = '/images/flight_crew/female_male_air_crew_wear.webp';
  const title = 'أزياء الطيران النسائية: رحلة التطور والابتكار عبر العصور';
  const readingTime = '8 دقائق';
  const publishDate = '٢ ديسمبر ٢٠٢٤';
  const author = 'خبراء تصميم الأزياء النسائية - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'historical-evolution', title: 'التطور التاريخي' },
    { id: 'modern-characteristics', title: 'خصائص الأزياء الحديثة' },
    { id: 'design-challenges', title: 'تحديات التصميم المعاصرة' },
    { id: 'cultural-adaptation', title: 'التكيف الثقافي والديني' },
    { id: 'innovation-trends', title: 'الابتكارات والاتجاهات الحديثة' },
    { id: 'future-outlook', title: 'رؤية مستقبلية' },
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
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaVenus />
                  أزياء نسائية متطورة
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                من الرسمية التقليدية إلى التصاميم المعاصرة التي تجمع بين الأناقة والوظيفية
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-pink-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-pink-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-pink-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-pink-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-pink-900">
                تصميم أزياء نسائية مميزة؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة لتصميم أزياء طيران نسائية تجمع بين الأناقة والراحة
              </p>
              <Link 
                href="/quote" 
                className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة تصميم
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  تُعد أزياء الطيران النسائية واحدة من أكثر مجالات التصميم إثارة وتحدياً في عالم الأزياء المهنية. فهي تحمل على عاتقها مسؤولية تمثيل العلامة التجارية للشركة، وضمان الراحة والوظيفية للمضيفات، والتعبير عن الهوية الثقافية، كل ذلك مع الحفاظ على أعلى معايير الأناقة والجاذبية.
                </p>
                
                <div className="bg-pink-50 border-r-4 border-pink-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-pink-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-pink-600" />
                    التحديات الفريدة في تصميم أزياء الطيران النسائية
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• التوازن بين الأناقة والوظيفية</li>
                      <li>• مراعاة التنوع في أشكال الجسم</li>
                      <li>• الامتثال لمعايير السلامة الصارمة</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• التكيف مع الثقافات المختلفة</li>
                      <li>• توفير الراحة لساعات طويلة</li>
                      <li>• الحفاظ على الهوية المؤسسية</li>
                    </ul>
                  </div>
                </div>

                <p>
                  منذ بداية عصر الطيران التجاري في الثلاثينيات، شهدت أزياء الطيران النسائية تطوراً مذهلاً يعكس تغيرات المجتمع وتطور صناعة الطيران ذاتها. وتستمر هذه الأزياء اليوم في التطور لتلبي متطلبات العصر الحديث من الاستدامة والتنوع والابتكار التقني.
                </p>
              </div>
            </section>

            <section id="historical-evolution" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                التطور التاريخي
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/historical_flight_attendant.webp"
                    alt="التطور التاريخي"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-800">
                    من الممرضات إلى أيقونات الموضة
                  </h3>
                  <p className="text-gray-700">
                    بدأت رحلة أزياء الطيران النسائية في الثلاثينيات عندما كانت المضيفات يُشترط أن يكنّ ممرضات مسجلات، مما انعكس على التصميم المحافظ للأزياء.
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-pink-800">المحطات التاريخية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🌟 1930s: الزي المستوحى من الطب والتمريض</li>
                      <li>🌟 1950s: العصر الذهبي والتصاميم الأنيقة</li>
                      <li>🌟 1960s: ثورة الألوان والأنماط الجريئة</li>
                      <li>🌟 2000s: التكنولوجيا والوظيفية المتقدمة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaHistory className="text-blue-600" />
                    رحلة عبر العقود
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-2">الخمسينيات</h4>
                      <p className="text-sm text-gray-700 mb-2">العصر الذهبي للأناقة</p>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• بدلات أنيقة بخطوط كلاسيكية</li>
                        <li>• قبعات صغيرة وإكسسوارات راقية</li>
                        <li>• ألوان هادئة ومحافظة</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-pink-800 mb-2">الستينيات</h4>
                      <p className="text-sm text-gray-700 mb-2">ثورة الألوان والجرأة</p>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• تصاميم جريئة ومعاصرة</li>
                        <li>• فساتين قصيرة وألوان زاهية</li>
                        <li>• تأثر بموضة الشارع</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-purple-800 mb-2">الألفية الجديدة</h4>
                      <p className="text-sm text-gray-700 mb-2">التكنولوجيا والوظيفية</p>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• أقمشة تقنية متطورة</li>
                        <li>• تصاميم مريحة وعملية</li>
                        <li>• احترام التنوع الثقافي</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="modern-characteristics" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                خصائص الأزياء الحديثة
              </h2>

              <div className="space-y-8">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    👗 التصميم المتكيف والمرن
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-purple-700">مجموعات متعددة الاستخدامات:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• قطع يمكن تنسيقها بطرق مختلفة</li>
                        <li>• تصاميم تناسب الفصول المختلفة</li>
                        <li>• خيارات لمراحل مختلفة من الرحلة</li>
                        <li>• قطع إضافية للمناخات المتنوعة</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-purple-700">التكيف مع الجسم:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• مقاسات متنوعة ومفصلة</li>
                        <li>• قصات تناسب أشكال الجسم المختلفة</li>
                        <li>• خيارات للطول والقصر</li>
                        <li>• تعديلات خاصة حسب الحاجة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-pink-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">العنصر</th>
                        <th className="border border-gray-300 p-4 text-right">التصميم التقليدي</th>
                        <th className="border border-gray-300 p-4 text-right">التصميم الحديث</th>
                        <th className="border border-gray-300 p-4 text-right">المزايا</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">البلوزة</td>
                        <td className="border border-gray-300 p-4">قطن بسيط</td>
                        <td className="border border-gray-300 p-4">أقمشة تقنية مضادة للتجعد</td>
                        <td className="border border-gray-300 p-4">راحة وأناقة مستمرة</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">التنورة</td>
                        <td className="border border-gray-300 p-4">قصة A واحدة</td>
                        <td className="border border-gray-300 p-4">خيارات متعددة مع مرونة</td>
                        <td className="border border-gray-300 p-4">حرية حركة</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">السترة</td>
                        <td className="border border-gray-300 p-4">تصميم صلب</td>
                        <td className="border border-gray-300 p-4">قصات مرنة وعملية</td>
                        <td className="border border-gray-300 p-4">أناقة مع وظيفية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">البنطلون</td>
                        <td className="border border-gray-300 p-4">غير متوفر عادة</td>
                        <td className="border border-gray-300 p-4">خيار أساسي وأنيق</td>
                        <td className="border border-gray-300 p-4">راحة ومرونة</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="design-challenges" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                تحديات التصميم المعاصرة
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/diverse_flight_crew.webp"
                    alt="تحديات التنوع في أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-800">
                    التنوع والشمولية
                  </h3>
                  <p className="text-gray-700 text-sm">
                    يواجه مصممو أزياء الطيران النسائية تحدياً متزايداً في إنشاء تصاميم تحتضن التنوع الثقافي والديني والجسدي للطاقم العالمي.
                  </p>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-800 mb-2">التحديات الرئيسية:</h4>
                    <ul className="text-sm space-y-1 text-orange-700">
                      <li>✓ التوفيق بين المتطلبات الدينية والمظهر الموحد</li>
                      <li>✓ تصميم قطع تناسب جميع أشكال الجسم</li>
                      <li>✓ احترام التقاليد المحلية في الأسواق المختلفة</li>
                      <li>✓ الموازنة بين الحداثة والمحافظة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  💡 الحلول المبتكرة للتحديات المعاصرة
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">الحلول التقنية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• أقمشة ذكية تتكيف مع درجة الحرارة</li>
                      <li>• تقنيات مضادة للبكتيريا والروائح</li>
                      <li>• معالجات تسهل العناية والتنظيف</li>
                      <li>• مواد مقاومة للتآكل والاستعمال المكثف</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">الحلول التصميمية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• تصاميم معيارية قابلة للتخصيص</li>
                      <li>• نظام متدرج للاحتشام والحداثة</li>
                      <li>• خيارات متعددة لنفس القطعة</li>
                      <li>• إكسسوارات اختيارية حسب الثقافة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="cultural-adaptation" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                التكيف الثقافي والديني
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    نماذج عالمية للتكيف الثقافي
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🕌</span>
                      </div>
                      <h4 className="font-semibold text-green-800 mb-2">الشرق الأوسط</h4>
                      <p className="text-gray-600 text-sm">تصاميم محتشمة مع إكسسوارات للحجاب</p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🌸</span>
                      </div>
                      <h4 className="font-semibold text-red-800 mb-2">شرق آسيا</h4>
                      <p className="text-gray-600 text-sm">دمج العناصر التقليدية مع الحداثة</p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">❄️</span>
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">الشمال الأوروبي</h4>
                      <p className="text-gray-600 text-sm">البساطة الأنيقة والوظيفية العالية</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">
                    تحقيق التوازن: دراسة حالة الخطوط السعودية
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-purple-700">التحديات:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• احترام القيم الإسلامية والتقاليد السعودية</li>
                        <li>• تلبية معايير الطيران الدولية</li>
                        <li>• جذب الطاقم المحلي والدولي</li>
                        <li>• المنافسة مع شركات الطيران العالمية</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-purple-700">الحلول المطبقة:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• تصاميم أنيقة ومحتشمة في الوقت نفسه</li>
                        <li>• خيارات متعددة للحجاب والعباءة</li>
                        <li>• ألوان مستوحاة من التراث السعودي</li>
                        <li>• أقمشة عالية الجودة ومريحة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="innovation-trends" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                الابتكارات والاتجاهات الحديثة
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/innovative_uniform_design.webp"
                    alt="الابتكارات في تصميم أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    التقنيات الثورية في التصميم
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تشهد صناعة أزياء الطيران النسائية ثورة حقيقية بفضل التقنيات الحديثة والمواد المبتكرة التي تعيد تعريف مفهوم الراحة والأناقة.
                  </p>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-2">الابتكارات الرائدة:</h4>
                    <ul className="text-sm space-y-1 text-indigo-700">
                      <li>🚀 أقمشة ذاتية التنظيف والمعالجة</li>
                      <li>🚀 تقنيات تنظيم درجة الحرارة الذكية</li>
                      <li>🚀 مواد مضادة للجراثيم والفيروسات</li>
                      <li>🚀 تصاميم قابلة للتحويل والتعديل</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                    اتجاهات المستقبل القريب
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-indigo-700 mb-3">الاستدامة والبيئة:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• استخدام مواد معاد تدويرها 100%</li>
                        <li>• عمليات إنتاج خالية من الكربون</li>
                        <li>• تصاميم طويلة الأمد ومتينة</li>
                        <li>• برامج إعادة التدوير للأزياء القديمة</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-indigo-700 mb-3">التخصيص والذكاء الاصطناعي:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• تصاميم مخصصة لكل فرد من الطاقم</li>
                        <li>• استخدام AI في تحسين الملاءمة</li>
                        <li>• قطع قابلة للتعديل آلياً</li>
                        <li>• تقنيات المسح ثلاثي الأبعاد للقياس</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/flight-crew/flight-1" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/airline_uniform_design.webp"
                        alt="اعتبارات تصميم زي شركات الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-pink-600 transition-colors">
                        اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-2" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/flight_crew_uniform_fabrics.webp"
                        alt="اختيار أقمشة زي طاقم الطائرة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-pink-600 transition-colors">
                        اختيار أقمشة زي طاقم الطائرة: دليل الجودة والمتانة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-5" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/uniforms_saudi_arabia.webp"
                        alt="تأثير الثقافة المحلية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-pink-600 transition-colors">
                        تأثير الثقافة المحلية على تصميم أزياء شركات الطيران
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