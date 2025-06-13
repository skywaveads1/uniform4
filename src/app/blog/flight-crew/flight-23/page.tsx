import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaCheckCircle, FaStar, FaShieldAlt } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'أنظمة مراقبة الجودة والتفتيش في أزياء الطيران: ضمان التميز والالتزام | يونيفورم',
  description: 'تعرف على أنظمة مراقبة الجودة والتفتيش الحديثة في أزياء الطيران، وكيف تضمن هذه الأنظمة التميز والالتزام بأعلى معايير الجودة والسلامة.',
  keywords: 'مراقبة جودة أزياء الطيران، أنظمة التفتيش، ضمان الجودة، معايير السلامة، السعودية',
  openGraph: {
    title: 'أنظمة مراقبة الجودة والتفتيش في أزياء الطيران: ضمان التميز والالتزام',
    description: 'أنظمة متطورة لضمان أعلى معايير الجودة والسلامة في أزياء الطيران',
    images: ['/images/flight_crew/crew_uniform_solutions.webp'],
  },
};

export default function Article23Page() {
  const heroImage = '/images/flight_crew/crew_uniform_solutions.webp';
  const title = 'أنظمة مراقبة الجودة والتفتيش في أزياء الطيران: ضمان التميز والالتزام';
  const readingTime = '12 دقيقة';
  const publishDate = '٥ يناير ٢٠٢٥';
  const author = 'خبراء مراقبة الجودة والتفتيش - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'quality-systems', title: 'أنظمة مراقبة الجودة' },
    { id: 'inspection-procedures', title: 'إجراءات التفتيش' },
    { id: 'testing-standards', title: 'معايير الاختبار' },
    { id: 'compliance-monitoring', title: 'مراقبة الامتثال' },
    { id: 'corrective-actions', title: 'الإجراءات التصحيحية' },
    { id: 'digital-systems', title: 'الأنظمة الرقمية' },
    { id: 'continuous-improvement', title: 'التحسين المستمر' },
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
                  <FaCheckCircle />
                  مراقبة الجودة
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                أنظمة متطورة وإجراءات دقيقة لضمان أعلى معايير الجودة والسلامة في كل تفصيلة من أزياء الطيران
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
                نظام جودة مخصص؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على نظام مراقبة جودة متخصص لأزياء الطيران في شركتك
              </p>
              <Link 
                href="/quote" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors block text-center text-sm font-medium"
              >
                طلب نظام جودة
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
                  في صناعة الطيران حيث لا مجال للخطأ، تعتبر أنظمة مراقبة الجودة والتفتيش في أزياء الطيران عنصراً حيوياً لضمان السلامة والمظهر المهني. هذه الأنظمة تشمل إجراءات دقيقة ومعايير صارمة تطبق في كل مرحلة من مراحل الإنتاج والاستخدام والصيانة، مما يضمن الحفاظ على أعلى معايير الجودة والالتزام بالمتطلبات الدولية.
                </p>
                
                <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-green-600" />
                    أهداف أنظمة مراقبة الجودة
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>🎯 ضمان المطابقة للمواصفات</li>
                      <li>🛡️ الحفاظ على معايير السلامة</li>
                      <li>✨ تحسين الجودة المستمر</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>📊 تقليل المعيب والإهدار</li>
                      <li>🔍 الكشف المبكر عن المشاكل</li>
                      <li>⚡ تعزيز الكفاءة التشغيلية</li>
                    </ul>
                  </div>
                </div>

                <p>
                  تتنوع هذه الأنظمة من المراقبة اليدوية التقليدية إلى التقنيات المتطورة مثل الفحص بالذكاء الاصطناعي والاختبارات الآلية. كما تشمل عمليات التوثيق والتتبع الرقمي التي تضمن الشفافية والمساءلة في كل خطوة من خطوات ضمان الجودة.
                </p>
              </div>
            </section>

            <section id="quality-systems" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                أنظمة مراقبة الجودة
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                    alt="أنظمة إدارة الجودة في الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-emerald-800">
                    المنهجيات الحديثة لضمان الجودة
                  </h3>
                  <p className="text-gray-700">
                    تعتمد أنظمة مراقبة الجودة الحديثة على منهجيات علمية مثبتة وتقنيات متطورة تضمن فعالية الرقابة ودقة النتائج. هذه الأنظمة تتكامل مع العمليات الإنتاجية لتوفير رقابة مستمرة وشاملة.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-emerald-800">منهجيات الجودة:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>📋 ISO 9001 لإدارة الجودة</li>
                      <li>🎯 Six Sigma للتحسين المستمر</li>
                      <li>🔄 Lean Manufacturing للكفاءة</li>
                      <li>✅ Total Quality Management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-emerald-800">
                  مكونات نظام مراقبة الجودة الشامل
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">التفتيش الوقائي</h4>
                    <p className="text-gray-600 text-sm">فحص مسبق لكل المواد والمكونات</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">المراقبة الإنتاجية</h4>
                    <p className="text-gray-600 text-sm">رقابة مستمرة أثناء العمليات</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">الفحص النهائي</h4>
                    <p className="text-gray-600 text-sm">تقييم شامل للمنتج المكتمل</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="inspection-procedures" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                إجراءات التفتيش
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4 flex items-center gap-2">
                    <FaShieldAlt className="text-teal-600" />
                    خطوات التفتيش المنهجي
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-teal-700">المرحلة الأولية:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• فحص المواد الخام والأقمشة</li>
                        <li>• التحقق من المواصفات الفنية</li>
                        <li>• اختبار الألوان والثبات</li>
                        <li>• فحص الإكسسوارات والمكونات</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-teal-700">المرحلة التنفيذية:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• مراقبة عمليات القطع والخياطة</li>
                        <li>• فحص جودة التشطيب</li>
                        <li>• التحقق من المقاسات والأبعاد</li>
                        <li>• اختبار الوظائف والمتانة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-green-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">نوع التفتيش</th>
                        <th className="border border-gray-300 p-4 text-right">التوقيت</th>
                        <th className="border border-gray-300 p-4 text-right">النطاق</th>
                        <th className="border border-gray-300 p-4 text-right">المعايير</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">فحص المواد</td>
                        <td className="border border-gray-300 p-4">قبل الإنتاج</td>
                        <td className="border border-gray-300 p-4">100% من الدفعة</td>
                        <td className="border border-gray-300 p-4">ASTM, ISO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">رقابة العمليات</td>
                        <td className="border border-gray-300 p-4">أثناء الإنتاج</td>
                        <td className="border border-gray-300 p-4">عينات ممثلة</td>
                        <td className="border border-gray-300 p-4">مواصفات داخلية</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الفحص النهائي</td>
                        <td className="border border-gray-300 p-4">بعد الإنتاج</td>
                        <td className="border border-gray-300 p-4">كل قطعة</td>
                        <td className="border border-gray-300 p-4">معايير شاملة</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">المراجعة الدورية</td>
                        <td className="border border-gray-300 p-4">أثناء الاستخدام</td>
                        <td className="border border-gray-300 p-4">عينات عشوائية</td>
                        <td className="border border-gray-300 p-4">تقييم الأداء</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="testing-standards" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                معايير الاختبار
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/comfort_safety_airline_uniforms.webp"
                    alt="معايير اختبار أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    اختبارات الجودة المتخصصة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تخضع أزياء الطيران لبطارة شاملة من الاختبارات التي تغطي كل جانب من جوانب الأداء والجودة. هذه الاختبارات تضمن مطابقة المنتج النهائي للمعايير الدولية ومتطلبات السلامة الصارمة.
                  </p>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-2">أنواع الاختبارات:</h4>
                    <ul className="text-sm space-y-1 text-indigo-700">
                      <li>🔥 اختبارات مقاومة الحريق</li>
                      <li>💧 اختبارات مقاومة السوائل</li>
                      <li>🧪 اختبارات ثبات الألوان</li>
                      <li>💪 اختبارات المتانة والتحمل</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                  المعايير الدولية والمحلية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-indigo-700 mb-3">المعايير الدولية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• FAA Federal Aviation Regulations</li>
                      <li>• EASA European Aviation Standards</li>
                      <li>• ICAO International Civil Aviation</li>
                      <li>• ISO Quality Management Systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-700 mb-3">المعايير المحلية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• GACA السعودية للطيران المدني</li>
                      <li>• SASO المواصفات السعودية</li>
                      <li>• معايير وزارة النقل السعودية</li>
                      <li>• لوائح السلامة المهنية المحلية</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="compliance-monitoring" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                مراقبة الامتثال
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-amber-800">
                    آليات ضمان الامتثال
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-amber-500 pl-4">
                        <h4 className="font-medium text-amber-800 mb-2">المراقبة المستمرة</h4>
                        <p className="text-sm text-gray-700">
                          نظام رقابة مستمر يراقب الالتزام بالمعايير في كل مرحلة
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-medium text-orange-800 mb-2">التدقيق الدوري</h4>
                        <p className="text-sm text-gray-700">
                          مراجعات منتظمة للعمليات والنتائج للتأكد من الالتزام
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-medium text-red-800 mb-2">التقارير التفصيلية</h4>
                        <p className="text-sm text-gray-700">
                          توثيق شامل لجميع عمليات المراقبة والنتائج
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/arab_airlines_uniforms.webp"
                        alt="الأنظمة الرقمية لإدارة الجودة"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">دقة 99.8%</h4>
                    <p className="text-gray-600 text-sm">معدل الامتثال للمعايير</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">24 ساعة</h4>
                    <p className="text-gray-600 text-sm">زمن الاستجابة للمشاكل</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">100%</h4>
                    <p className="text-gray-600 text-sm">تغطية عمليات التدقيق</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="corrective-actions" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                الإجراءات التصحيحية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/air_crew_attire.webp"
                    alt="الإجراءات التصحيحية الفعالة"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-800">
                    منهجية الاستجابة السريعة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    عند اكتشاف أي مشكلة في الجودة، يتم تفعيل بروتوكول الاستجابة السريعة الذي يضمن معالجة فورية وفعالة للمشكلة ومنع تكرارها. هذا البروتوكول يتضمن تحليل الأسباب الجذرية وتطبيق حلول مستدامة.
                  </p>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">خطوات الاستجابة:</h4>
                    <ul className="text-sm space-y-1 text-red-700">
                      <li>🚨 إيقاف العملية فوراً</li>
                      <li>🔍 تحديد نطاق المشكلة</li>
                      <li>⚡ تطبيق الحل المؤقت</li>
                      <li>🔧 وضع الحل الدائم</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-800">
                  تصنيف وأولوية الإجراءات التصحيحية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-3">الأولوية العليا:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• مشاكل السلامة الحرجة</li>
                      <li>• عدم مطابقة المعايير الأساسية</li>
                      <li>• عيوب تؤثر على الوظيفة</li>
                      <li>• مشاكل تؤثر على سمعة العلامة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-3">الأولوية المتوسطة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• مشاكل جمالية طفيفة</li>
                      <li>• تحسينات في العمليات</li>
                      <li>• تحديثات في الإجراءات</li>
                      <li>• تدريب إضافي للفرق</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="digital-systems" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                الأنظمة الرقمية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/digital_quality_systems.jpeg"
                    alt="الأنظمة الرقمية لمراقبة الجودة"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-800">
                    التحول الرقمي في مراقبة الجودة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    الأنظمة الرقمية الحديثة تسمح بمراقبة أكثر دقة وفعالية، مع إمكانيات التتبع في الوقت الفعلي والتحليل التنبؤي للمشاكل المحتملة. هذه التقنيات تعزز من قدرة الشركات على الحفاظ على أعلى معايير الجودة.
                  </p>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">التقنيات المتطورة:</h4>
                    <ul className="text-sm space-y-1 text-blue-700">
                      <li>🤖 الذكاء الاصطناعي للفحص</li>
                      <li>📊 تحليل البيانات الضخمة</li>
                      <li>🔗 إنترنت الأشياء للمراقبة</li>
                      <li>☁️ الحوسبة السحابية للتخزين</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                  مزايا الأنظمة الرقمية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-3">الكفاءة والدقة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• فحص أسرع وأكثر دقة</li>
                      <li>• تقليل الأخطاء البشرية</li>
                      <li>• توحيد معايير الفحص</li>
                      <li>• رصد مستمر 24/7</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-3">التحليل والتقارير:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• تقارير تفصيلية فورية</li>
                      <li>• تحليل الاتجاهات والأنماط</li>
                      <li>• توقع المشاكل المحتملة</li>
                      <li>• تحسين مستمر للعمليات</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/flight-crew/flight-17" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/cultural_aviation_uniforms.webp"
                        alt="لوائح ومعايير أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        لوائح ومعايير أزياء الطيران: دليل شامل للامتثال والسلامة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-15" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/buy_air_crew_uniforms.webp"
                        alt="المواد المستدامة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        المواد المستدامة في أزياء الطيران: ثورة خضراء في السماء
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-22" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/air_hospitality_uniforms.webp"
                        alt="برامج التدريب"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        برامج التدريب على معايير أزياء الطيران: إعداد الطاقم للتميز المهني
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