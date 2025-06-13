import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaHistory, FaStar, FaPlane } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تطور تصميم أزياء الطيران عبر العقود: من الكلاسيكية إلى المستقبل | يونيفورم',
  description: 'استكشف رحلة تطور تصميم أزياء الطيران عبر العقود، من التصاميم الكلاسيكية في الخمسينات إلى الابتكارات التقنية المستقبلية والتصاميم الذكية.',
  keywords: 'تطور أزياء الطيران، تاريخ تصميم ملابس الطيران، تطور موضة الطيران، تصميم كلاسيكي، ابتكارات مستقبلية، السعودية',
  openGraph: {
    title: 'تطور تصميم أزياء الطيران عبر العقود: من الكلاسيكية إلى المستقبل',
    description: 'رحلة شاملة عبر تاريخ وتطور تصميم أزياء الطيران',
    images: ['/images/aviation_uniforms/airline_uniform_design.webp'],
  },
};

export default function AirlineUniformEvolutionPage() {
  const heroImage = '/images/aviation_uniforms/airline_uniform_design.webp';
  const title = 'تطور تصميم أزياء شركات الطيران: رحلة عبر الزمن من الأناقة الكلاسيكية إلى الحداثة';
  const readingTime = '16 دقيقة';
  const publishDate = '١٥ يناير ٢٠٢٥';
  const author = 'خبراء تاريخ التصميم والأزياء - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'early-era', title: 'عصر البدايات (1930-1950)' },
    { id: 'golden-age', title: 'العصر الذهبي (1950-1970)' },
    { id: 'modern-era', title: 'العصر الحديث (1970-2000)' },
    { id: 'digital-age', title: 'عصر التكنولوجيا (2000-اليوم)' },
    { id: 'cultural-impact', title: 'التأثير الثقافي' },
    { id: 'design-milestones', title: 'معالم التصميم' },
    { id: 'future-trends', title: 'اتجاهات المستقبل' },
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
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaHistory />
                  تاريخ التصميم
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                رحلة شاملة عبر تاريخ تطور أزياء الطيران وكيف عكست روح كل عصر وتقدمت مع التكنولوجيا والموضة العالمية
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-amber-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-amber-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-amber-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-amber-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-amber-900">
                تصميم عبر التاريخ؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                استلهم من التاريخ وأنشئ تصميماً عصرياً لأزياء شركتك
              </p>
              <Link 
                href="/quote" 
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors block text-center text-sm font-medium"
              >
                ابدأ التصميم
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  تحكي أزياء الطيران قصة رائعة عن تطور صناعة الطيران وتغير النظرة المجتمعية للسفر الجوي. من الأزياء العسكرية البسيطة في الثلاثينيات إلى التصاميم التكنولوجية المتطورة اليوم، تعكس هذه الأزياء ليس فقط تطور الموضة، بل أيضاً التحولات الاجتماعية والثقافية والتكنولوجية عبر العقود.
                </p>
                
                <div className="bg-amber-50 border-r-4 border-amber-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-amber-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-amber-600" />
                    المحطات التاريخية الرئيسية
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>✈️ 1930s: الأصول العسكرية</li>
                      <li>👗 1950s: عصر الأناقة والرقي</li>
                      <li>🌈 1960s: ثورة الألوان والأشكال</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>⚡ 1980s: دخول التكنولوجيا</li>
                      <li>🌍 2000s: العولمة والتنوع</li>
                      <li>🔬 2020s: الاستدامة والذكاء</li>
                    </ul>
                  </div>
                </div>

                <p>
                  في هذه الرحلة التاريخية الشاملة، نستكشف كيف تطورت أزياء الطيران عبر العقود، وكيف أثرت العوامل الاجتماعية والتكنولوجية والثقافية على تصميمها، وكيف أصبحت جزءاً لا يتجزأ من الهوية البصرية لشركات الطيران والثقافة الشعبية العالمية.
                </p>
              </div>
            </section>

            <section id="early-era" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                عصر البدايات (1930-1950)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/aviation_uniforms/early_aviation_uniforms.webp"
                    alt="أزياء الطيران في الثلاثينيات والأربعينيات"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-emerald-800">
                    الجذور العسكرية والأناقة الأولى
                  </h3>
                  <p className="text-gray-700">
                    في بداية عصر الطيران التجاري، استوحت شركات الطيران أزياءها من التقاليد العسكرية. كانت هذه المرحلة تتميز بالطابع الرسمي والانضباط، مع التركيز على إظهار المصداقية والاحترافية في صناعة ناشئة.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-emerald-800">خصائص العصر:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🎖️ الطابع العسكري الواضح</li>
                      <li>⚫ الألوان الداكنة (كحلي، أسود، رمادي)</li>
                      <li>👔 التصاميم الرسمية المحافظة</li>
                      <li>🧥 القبعات والإكسسوارات العسكرية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-emerald-800">
                  التطورات الرئيسية في هذا العصر
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">👨‍✈️</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">1930-1935</h4>
                    <p className="text-gray-600 text-sm">أزياء مستوحاة من الطيران العسكري</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">👩‍✈️</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">1936-1945</h4>
                    <p className="text-gray-600 text-sm">ظهور المضيفات وتصاميم نسائية مخصصة</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">1946-1950</h4>
                    <p className="text-gray-600 text-sm">بداية التمايز بين شركات الطيران</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="golden-age" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                العصر الذهبي (1950-1970)
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-gold-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                    <FaPlane className="text-yellow-600" />
                    عصر الأناقة والرقي
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-yellow-700">الخمسينيات - الأناقة الكلاسيكية:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• تصاميم مستوحاة من أزياء هوليوود</li>
                        <li>• استخدام الألوان الناعمة والباستيل</li>
                        <li>• إدخال عناصر الموضة العصرية</li>
                        <li>• التركيز على الأنوثة والرقي</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-yellow-700">الستينيات - ثورة التصميم:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• ظهور الألوان الجريئة والزاهية</li>
                        <li>• تصاميم مستقبلية ومبتكرة</li>
                        <li>• تأثر بموضة الـ "Mod" البريطانية</li>
                        <li>• استخدام الأقمشة الصناعية الجديدة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-yellow-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">العقد</th>
                        <th className="border border-gray-300 p-4 text-right">الاتجاه السائد</th>
                        <th className="border border-gray-300 p-4 text-right">المؤثرات</th>
                        <th className="border border-gray-300 p-4 text-right">المصممون البارزون</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">1950s</td>
                        <td className="border border-gray-300 p-4">الأناقة الكلاسيكية</td>
                        <td className="border border-gray-300 p-4">هوليوود، ديور</td>
                        <td className="border border-gray-300 p-4">Don Richards, Oleg Cassini</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">1960s</td>
                        <td className="border border-gray-300 p-4">المستقبلية الجريئة</td>
                        <td className="border border-gray-300 p-4">عصر الفضاء، المود</td>
                        <td className="border border-gray-300 p-4">Emilio Pucci, Pierre Balmain</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">Early 1970s</td>
                        <td className="border border-gray-300 p-4">الحرية والتعبير</td>
                        <td className="border border-gray-300 p-4">ثقافة الهيبيز، التحرر</td>
                        <td className="border border-gray-300 p-4">Halston, Jean Louis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="modern-era" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                العصر الحديث (1970-2000)
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/aviation_uniforms/modern_era_uniforms.webp"
                    alt="أزياء الطيران في العصر الحديث"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    التطبيق العملي والتنوع الثقافي
                  </h3>
                  <p className="text-gray-700 text-sm">
                    مع نمو صناعة الطيران وتحولها إلى وسيلة نقل جماعية، تغيرت أولويات التصميم. أصبح التركيز أكثر على الراحة والعملية، مع الحفاظ على الهوية المميزة لكل شركة طيران.
                  </p>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-2">سمات المرحلة:</h4>
                    <ul className="text-sm space-y-1 text-indigo-700">
                      <li>🔧 التركيز على الوظيفة والراحة</li>
                      <li>🌍 التنوع الثقافي في التصاميم</li>
                      <li>💼 المهنية والاحترافية</li>
                      <li>🎨 ألوان الشركات المميزة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                  التحولات الرئيسية في العصر الحديث
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-indigo-700 mb-3">السبعينيات والثمانينيات:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• انتهاء عصر "الأناقة المفرطة"</li>
                      <li>• التركيز على الراحة والعملية</li>
                      <li>• ظهور تصاميم متعددة الثقافات</li>
                      <li>• استخدام الأقمشة الصناعية المتطورة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-700 mb-3">التسعينيات:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• التوحيد القياسي والاحترافية</li>
                      <li>• إدخال عناصر الأمان المتقدمة</li>
                      <li>• تصاميم أكثر تحفظاً وعملية</li>
                      <li>• بداية الاهتمام بالتكنولوجيا</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="digital-age" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                عصر التكنولوجيا (2000-اليوم)
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">
                    الثورة التكنولوجية والاستدامة
                  </h3>
                  <p className="text-gray-700 mb-4">
                    القرن الحادي والعشرون شهد ثورة حقيقية في تصميم أزياء الطيران. دخلت التكنولوجيا الذكية، والمواد المبتكرة، ومفاهيم الاستدامة البيئية كعوامل أساسية في عملية التصميم.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">2000-2010: العولمة</h4>
                        <p className="text-sm text-gray-700">
                          توحيد المعايير العالمية وظهور التصاميم متعددة الثقافات
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-800 mb-2">2010-2020: التكنولوجيا</h4>
                        <p className="text-sm text-gray-700">
                          دمج التقنيات الذكية والمواد المتقدمة في التصميم
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">2020-اليوم: الاستدامة</h4>
                        <p className="text-sm text-gray-700">
                          التركيز على المواد المستدامة والتصميم البيئي
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/aviation_uniforms/digital_age_uniforms.webp"
                        alt="أزياء الطيران في العصر الرقمي"
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
                      <span className="text-2xl">🔬</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">المواد الذكية</h4>
                    <p className="text-gray-600 text-sm">أقمشة تتفاعل مع البيئة وتنظم الحرارة</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">♻️</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">الاستدامة</h4>
                    <p className="text-gray-600 text-sm">مواد معاد تدويرها وعمليات صديقة للبيئة</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">التكنولوجيا المدمجة</h4>
                    <p className="text-gray-600 text-sm">أجهزة استشعار وتقنيات اتصال مدمجة</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="cultural-impact" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                التأثير الثقافي
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/aviation_uniforms/cultural_impact.webp"
                    alt="التأثير الثقافي لأزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-rose-800">
                    أزياء الطيران في الثقافة الشعبية
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تجاوزت أزياء الطيران حدود الوظيفة لتصبح رمزاً ثقافياً يمثل الأناقة والسفر والحداثة. ظهرت في الأفلام والإعلانات والموضة، وأثرت على التصميم في مجالات أخرى.
                  </p>
                  <div className="bg-rose-100 p-4 rounded-lg">
                    <h4 className="font-medium text-rose-800 mb-2">التأثيرات الثقافية:</h4>
                    <ul className="text-sm space-y-1 text-rose-700">
                      <li>🎬 ظهور في السينما والإعلام</li>
                      <li>👗 تأثير على موضة الشارع</li>
                      <li>🏛️ عرض في المتاحف العالمية</li>
                      <li>📚 موضوع للدراسات الأكاديمية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-pink-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-rose-800">
                  الإرث الثقافي والرموز الأيقونية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-rose-700 mb-3">رموز لا تُنسى:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• قبعة "الطيار" الكلاسيكية</li>
                      <li>• تصاميم Emilio Pucci الملونة</li>
                      <li>• أزياء Pan Am الأيقونية</li>
                      <li>• شارات وإكسسوارات الطيران التراثية</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-700 mb-3">التأثير على المجتمع:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• تمكين المرأة في مجال العمل</li>
                      <li>• تعزيز فكرة السفر العالمي</li>
                      <li>• إلهام التصاميم المستقبلية</li>
                      <li>• ربط الموضة بالتكنولوجيا</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/aviation-uniforms/airline-uniform-design-considerations" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/aviation_uniforms/airline_uniform_design.webp"
                        alt="اعتبارات تصميم أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-amber-600 transition-colors">
                        اعتبارات تصميم أزياء الطيران: توازن مثالي بين الوظيفة والأناقة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/aviation-uniforms/aviation-uniform-standards-2025" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/aviation_uniforms/airline_uniform_design.webp"
                        alt="معايير أزياء الطيران 2025"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-amber-600 transition-colors">
                        معايير أزياء الطيران 2025: أحدث التوجهات والمواصفات
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/aviation-uniforms/crew-aviation-on-uniform" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/aviation_uniforms/airline_uniform_design.webp"
                        alt="تأثير طاقم الطيران على الزي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-amber-600 transition-colors">
                        تأثير طاقم الطيران على الزي الموحد
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