import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaChartLine, FaStar, FaCertificate } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'معايير أزياء الطيران 2025: التطورات والمتطلبات المستقبلية | يونيفورم',
  description: 'دليل شامل لمعايير أزياء الطيران لعام 2025، يشمل معايير السلامة المحدثة، التقنيات الذكية، الراحة المتقدمة، والامتثال الثقافي للمعايير العالمية.',
  keywords: 'معايير أزياء الطيران 2025، معايير السلامة، تقنيات ذكية، راحة متقدمة، امتثال ثقافي، معايير عالمية، السعودية',
  openGraph: {
    title: 'معايير أزياء الطيران 2025: التطورات والمتطلبات المستقبلية',
    description: 'دليل شامل لمعايير أزياء الطيران لعام 2025',
    images: ['/images/aviation_uniforms/airline_uniform_design.webp'],
  },
};

export default function AviationUniformStandards2025Page() {
  const heroImage = '/images/aviation_uniforms/airline_uniform_design.webp';
  const title = 'معايير أزياء الطيران 2025: أحدث التوجهات والمواصفات العالمية للجيل القادم';
  const readingTime = '18 دقيقة';
  const publishDate = '١٨ يناير ٢٠٢٥';
  const author = 'خبراء المعايير والمواصفات الدولية - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'safety-standards', title: 'معايير الأمان المتطورة' },
    { id: 'sustainability-specs', title: 'مواصفات الاستدامة' },
    { id: 'smart-technology', title: 'التقنيات الذكية' },
    { id: 'comfort-ergonomics', title: 'معايير الراحة والإرجونوميكا' },
    { id: 'cultural-compliance', title: 'التوافق الثقافي' },
    { id: 'quality-standards', title: 'معايير الجودة' },
    { id: 'implementation', title: 'التطبيق العملي' },
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
                  <FaChartLine />
                  معايير 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                دليل شامل لأحدث المعايير والمواصفات التي تشكل مستقبل أزياء الطيران مع التقنيات المتطورة والاستدامة البيئية
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
                معايير متقدمة؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                اكتشف كيف تطبق معايير 2025 في تصميم أزياء شركتك
              </p>
              <Link 
                href="/quote" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة متخصصة
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
                  مع دخولنا عام 2025، تشهد صناعة أزياء الطيران ثورة حقيقية في المعايير والمواصفات. هذه المعايير الجديدة لا تركز فقط على الأمان والوظيفة التقليدية، بل تدمج التقنيات الذكية والاستدامة البيئية والراحة المتقدمة والتوافق الثقافي في منظومة شاملة متكاملة.
                </p>
                
                <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-green-600" />
                    المحاور الرئيسية لمعايير 2025
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>🛡️ الأمان المتطور والحماية المعززة</li>
                      <li>🌱 الاستدامة البيئية والمواد الصديقة للبيئة</li>
                      <li>🔬 التقنيات الذكية والأقمشة التفاعلية</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>💪 الراحة الإرجونومية المتقدمة</li>
                      <li>🌍 التوافق الثقافي والشمولية</li>
                      <li>⚡ الأداء المحسن والمتانة الفائقة</li>
                    </ul>
                  </div>
                </div>

                <p>
                  هذه المعايير الجديدة تمثل نقلة نوعية في فهمنا لما يجب أن تكون عليه أزياء الطيران المثالية. فهي تجمع بين أحدث الإنجازات العلمية والتكنولوجية مع الاحتياجات المتطورة للطواقم والمتطلبات البيئية والاجتماعية المعاصرة.
                </p>
              </div>
            </section>

            <section id="safety-standards" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                معايير الأمان المتطورة
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/aviation_uniforms/safety_standards_2025.webp"
                    alt="معايير الأمان المتطورة في أزياء الطيران 2025"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-800">
                    تقنيات الحماية المتقدمة
                  </h3>
                  <p className="text-gray-700">
                    معايير الأمان في 2025 تتجاوز المتطلبات التقليدية لتشمل تقنيات حماية متطورة مثل المواد النانوية المقاومة للحريق والبكتيريا، وأنظمة الإنذار المدمجة، والحماية من الإشعاع الكوني.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-red-800">معايير الحماية الجديدة:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🔥 مقاومة حريق معززة (20 ثانية)</li>
                      <li>🦠 حماية مضادة للبكتيريا والفيروسات</li>
                      <li>☢️ حماية من الإشعاع الكوني</li>
                      <li>⚡ مقاومة التفريغ الكهروستاتيكي</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <FaCertificate className="text-red-600" />
                  المعايير الدولية الجديدة
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-red-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">المعيار</th>
                        <th className="border border-gray-300 p-4 text-right">التحديث 2025</th>
                        <th className="border border-gray-300 p-4 text-right">المتطلب</th>
                        <th className="border border-gray-300 p-4 text-right">طريقة الاختبار</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">مقاومة الحريق</td>
                        <td className="border border-gray-300 p-4">FAR 25.853-E</td>
                        <td className="border border-gray-300 p-4">20 ثانية بدون اشتعال</td>
                        <td className="border border-gray-300 p-4">اختبار الشعلة العمودية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">مقاومة البكتيريا</td>
                        <td className="border border-gray-300 p-4">ISO 20743:2025</td>
                        <td className="border border-gray-300 p-4">99.9% فعالية</td>
                        <td className="border border-gray-300 p-4">اختبار JIS L 1902</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الحماية من الإشعاع</td>
                        <td className="border border-gray-300 p-4">ICAO-RAD-2025</td>
                        <td className="border border-gray-300 p-4">تقليل 95% للإشعاع</td>
                        <td className="border border-gray-300 p-4">قياس الجرعة المكافئة</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">قوة الشد</td>
                        <td className="border border-gray-300 p-4">ASTM D5034-E</td>
                        <td className="border border-gray-300 p-4">حد أدنى 300 نيوتن</td>
                        <td className="border border-gray-300 p-4">اختبار الشد أحادي الاتجاه</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="sustainability-specs" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                مواصفات الاستدامة
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🌱</span>
                    المعايير البيئية الشاملة
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">المواد المستدامة:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• ألياف معاد تدويرها (50% حد أدنى)</li>
                        <li>• مواد حيوية قابلة للتحلل</li>
                        <li>• أصباغ طبيعية خالية من المواد الكيميائية</li>
                        <li>• تقنيات التصنيع منخفضة الكربون</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">دورة الحياة:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• عمر افتراضي 5 سنوات كحد أدنى</li>
                        <li>• قابلية إعادة التدوير 90%</li>
                        <li>• تقليل استهلاك المياه 70%</li>
                        <li>• انبعاثات كربونية صفرية في التصنيع</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border border-green-200 p-6 rounded-lg text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">♻️</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">إعادة التدوير</h4>
                    <p className="text-gray-600 text-sm">90% من المواد قابلة لإعادة التدوير</p>
                    <div className="mt-2 text-lg font-bold text-green-600">90%</div>
                  </div>
                  
                  <div className="bg-white border border-green-200 p-6 rounded-lg text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💧</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">توفير المياه</h4>
                    <p className="text-gray-600 text-sm">تقليل استهلاك المياه في التصنيع</p>
                    <div className="mt-2 text-lg font-bold text-blue-600">70%</div>
                  </div>
                  
                  <div className="bg-white border border-green-200 p-6 rounded-lg text-center">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">كربون محايد</h4>
                    <p className="text-gray-600 text-sm">انبعاثات كربونية صفرية</p>
                    <div className="mt-2 text-lg font-bold text-gray-600">0%</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="smart-technology" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                التقنيات الذكية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/aviation_uniforms/smart_technology_uniforms.webp"
                    alt="التقنيات الذكية في أزياء الطيران 2025"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    الأقمشة الذكية والتكنولوجيا المدمجة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    أزياء الطيران في 2025 تدمج تقنيات متطورة مثل أجهزة الاستشعار الحيوية، والأقمشة التي تتكيف مع درجة الحرارة، وأنظمة الاتصال اللاسلكي المدمجة، وتقنيات التنظيف الذاتي.
                  </p>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">التقنيات المدمجة:</h4>
                    <ul className="text-sm space-y-1 text-purple-700">
                      <li>📊 مراقبة العلامات الحيوية</li>
                      <li>🌡️ تنظيم حراري تلقائي</li>
                      <li>📱 اتصال لاسلكي مدمج</li>
                      <li>🧽 تنظيف ذاتي مضاد للبكتيريا</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">
                  مواصفات التقنيات الذكية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-purple-700 mb-3">أجهزة الاستشعار:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• مراقبة درجة حرارة الجسم (±0.1°C)</li>
                      <li>• قياس معدل ضربات القلب</li>
                      <li>• مستويات الإجهاد والتعب</li>
                      <li>• جودة الهواء المحيط</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700 mb-3">التكيف الذكي:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• تنظيم حراري تلقائي (15-30°C)</li>
                      <li>• تعديل التهوية حسب النشاط</li>
                      <li>• إنذارات السلامة المدمجة</li>
                      <li>• شحن لاسلكي للأجهزة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="comfort-ergonomics" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                معايير الراحة والإرجونوميكا
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">
                    مقاييس الراحة المتقدمة
                  </h3>
                  <p className="text-gray-700 mb-4">
                    معايير 2025 تتضمن مقاييس دقيقة للراحة مبنية على البحوث العلمية الحديثة في مجال الإرجونوميكا وعلوم الحركة.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">المرونة</h4>
                        <p className="text-sm text-gray-700">
                          معامل مرونة لا يقل عن 40% في جميع الاتجاهات
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-medium text-cyan-800 mb-2">التهوية</h4>
                        <p className="text-sm text-gray-700">
                          نفاذية للهواء 200 l/m²/s كحد أدنى
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-medium text-indigo-800 mb-2">إدارة الرطوبة</h4>
                        <p className="text-sm text-gray-700">
                          امتصاص وتبخر سريع للرطوبة (&lt;1 ثانية)
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/aviation_uniforms/comfort_standards.webp"
                        alt="معايير الراحة في أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">المعيار</th>
                        <th className="border border-gray-300 p-4 text-right">القياس</th>
                        <th className="border border-gray-300 p-4 text-right">الحد الأدنى 2025</th>
                        <th className="border border-gray-300 p-4 text-right">طريقة الاختبار</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">المرونة متعددة الاتجاهات</td>
                        <td className="border border-gray-300 p-4">%</td>
                        <td className="border border-gray-300 p-4">40%</td>
                        <td className="border border-gray-300 p-4">ASTM D4964</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">نفاذية الهواء</td>
                        <td className="border border-gray-300 p-4">l/m²/s</td>
                        <td className="border border-gray-300 p-4">200</td>
                        <td className="border border-gray-300 p-4">ISO 9237</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">إدارة الرطوبة</td>
                        <td className="border border-gray-300 p-4">ثانية</td>
                        <td className="border border-gray-300 p-4">&lt;1</td>
                        <td className="border border-gray-300 p-4">AATCC 79</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">مقاومة التجعد</td>
                        <td className="border border-gray-300 p-4">درجة</td>
                        <td className="border border-gray-300 p-4">4.5</td>
                        <td className="border border-gray-300 p-4">ASTM D1295</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="cultural-compliance" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                التوافق الثقافي
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/aviation_uniforms/cultural_compliance.webp"
                    alt="التوافق الثقافي في أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-800">
                    الشمولية والتنوع الثقافي
                  </h3>
                  <p className="text-gray-700 text-sm">
                    معايير 2025 تؤكد على أهمية التصاميم الشاملة التي تحترم التنوع الثقافي والديني والجندري، مع توفير خيارات متنوعة تناسب جميع أفراد الطاقم بغض النظر عن خلفياتهم.
                  </p>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-800 mb-2">معايير الشمولية:</h4>
                    <ul className="text-sm space-y-1 text-orange-700">
                      <li>👥 تصاميم شاملة لجميع أنماط الجسم</li>
                      <li>🧕 خيارات للحجاب والملابس المحتشمة</li>
                      <li>🤰 تصاميم مناسبة للحوامل</li>
                      <li>♿ تصاميم مناسبة لذوي الاحتياجات الخاصة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">
                  متطلبات التوافق الثقافي
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-700 mb-3">التنوع الديني:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• خيارات أكمام طويلة إلزامية</li>
                      <li>• تصاميم محتشمة للنساء</li>
                      <li>• مواد خالية من مكونات غير حلال</li>
                      <li>• أغطية رأس متوافقة مع الأنظمة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-3">المقاسات الشاملة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• نطاق مقاسات من XS إلى 5XL</li>
                      <li>• تصاميم قابلة للتعديل</li>
                      <li>• خيارات للأطوال المختلفة</li>
                      <li>• تصاميم مرنة للحوامل</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="quality-standards" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                معايير الجودة
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                    مقاييس الجودة المحسنة
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">💎</span>
                      </div>
                      <h4 className="font-semibold text-indigo-800 mb-2">المتانة</h4>
                      <p className="text-gray-600 text-sm">مقاومة للتآكل والتمزق</p>
                      <div className="mt-2 text-lg font-bold text-indigo-600">50,000+ دورة</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h4 className="font-semibold text-purple-800 mb-2">ثبات اللون</h4>
                      <p className="text-gray-600 text-sm">مقاومة البهتان والتغيير</p>
                      <div className="mt-2 text-lg font-bold text-purple-600">درجة 5</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">الأداء</h4>
                      <p className="text-gray-600 text-sm">كفاءة وظيفية عالية</p>
                      <div className="mt-2 text-lg font-bold text-blue-600">98%</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-4">معايير الخياطة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• قوة درز لا تقل عن 300N</li>
                      <li>• مقاومة تفكك الخيوط</li>
                      <li>• تشطيب عالي الجودة</li>
                      <li>• تناسق في الأبعاد</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-4">ضمان الجودة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• فحص جودة 100% للمنتجات</li>
                      <li>• اختبارات مختبرية معتمدة</li>
                      <li>• شهادات مطابقة دولية</li>
                      <li>• نظام تتبع شامل</li>
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
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        اعتبارات تصميم أزياء الطيران: توازن مثالي بين الوظيفة والأناقة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/aviation-uniforms/airline-uniform-design-evolution" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/aviation_uniforms/airline_uniform_design.webp"
                        alt="تطور تصميم أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        تطور تصميم أزياء شركات الطيران: رحلة عبر الزمن
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
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
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