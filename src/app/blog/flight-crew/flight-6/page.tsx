import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaShieldAlt, FaStar, FaHeart } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تقنيات الراحة والأمان في أزياء الطيران الحديثة: ثورة التكنولوجيا الذكية | يونيفورم',
  description: 'اكتشف أحدث التقنيات والابتكارات في تصميم أزياء الطيران التي تجمع بين الراحة القصوى ومعايير الأمان العالية، والمواد الذكية التي تعيد تعريف صناعة ملابس الطيران.',
  keywords: 'تقنيات أزياء الطيران، راحة الطاقم، أمان ملابس الطيران، المواد الذكية، تقنيات متقدمة، ابتكارات الطيران، السعودية',
  openGraph: {
    title: 'تقنيات الراحة والأمان في أزياء الطيران الحديثة: ثورة التكنولوجيا الذكية',
    description: 'أحدث التقنيات والابتكارات في أزياء الطيران للراحة والأمان',
    images: ['/images/flight_crew/comfort_safety_airline_uniforms.jpeg'],
  },
};

export default function Article6Page() {
  const heroImage = '/images/flight_crew/comfort_safety_airline_uniforms.jpeg';
  const title = 'تقنيات الراحة والأمان في أزياء الطيران الحديثة: ثورة التكنولوجيا الذكية';
  const readingTime = '11 دقيقة';
  const publishDate = '٧ ديسمبر ٢٠٢٤';
  const author = 'خبراء التقنيات المتقدمة - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'smart-materials', title: 'المواد الذكية والمتقدمة' },
    { id: 'comfort-technologies', title: 'تقنيات الراحة المبتكرة' },
    { id: 'safety-innovations', title: 'ابتكارات الأمان والحماية' },
    { id: 'ergonomic-design', title: 'التصميم الهندسي البشري' },
    { id: 'wearable-tech', title: 'التكنولوجيا القابلة للارتداء' },
    { id: 'future-developments', title: 'التطورات المستقبلية' },
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
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaShieldAlt />
                  تقنيات متطورة
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                عالم جديد من الابتكارات التقنية التي تعيد تعريف مفهوم الراحة والأمان في صناعة الطيران
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-cyan-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-cyan-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-cyan-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-cyan-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-cyan-900">
                تحتاج تقنيات متقدمة؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة في أحدث التقنيات لأزياء طيران مريحة وآمنة
              </p>
              <Link 
                href="/quote" 
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة تقنية
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-cyan-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  في عصر يشهد تطوراً مذهلاً في التكنولوجيا، تقف صناعة أزياء الطيران على أعتاب ثورة حقيقية تجمع بين أحدث الابتكارات التقنية ومعايير الراحة والأمان العالية. لم تعد أزياء الطيران مجرد ملابس عمل تقليدية، بل أصبحت منصات تقنية متطورة تدمج المواد الذكية والتصاميم الهندسية المتقدمة.
                </p>
                
                <div className="bg-cyan-50 border-r-4 border-cyan-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-cyan-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-cyan-600" />
                    الثورة التقنية في أزياء الطيران
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• مواد ذكية تتفاعل مع البيئة</li>
                      <li>• تقنيات التحكم في درجة الحرارة</li>
                      <li>• أنظمة مراقبة الصحة المدمجة</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• حماية متقدمة ضد المخاطر</li>
                      <li>• راحة فائقة في الاستخدام</li>
                      <li>• استدامة بيئية وطول العمر</li>
                    </ul>
                  </div>
                </div>

                <p>
                  تجمع التقنيات الحديثة في أزياء الطيران بين عدة محاور رئيسية: المواد الذكية التي تتكيف مع الظروف المحيطة، والتصاميم الهندسية التي تعزز الراحة والحركة، وأنظمة الأمان المتطورة التي توفر حماية شاملة للطاقم في جميع الظروف.
                </p>
              </div>
            </section>

            <section id="smart-materials" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-cyan-600 pr-4">
                المواد الذكية والمتقدمة
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/smart_materials.jpeg"
                    alt="المواد الذكية في أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-800">
                    الجيل الجديد من الأقمشة الذكية
                  </h3>
                  <p className="text-gray-700">
                    تشهد صناعة أزياء الطيران ثورة في المواد المستخدمة، حيث تدمج الأقمشة الذكية تقنيات متطورة تتفاعل مع البيئة المحيطة وتوفر خصائص لم تكن متاحة من قبل.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-800">المواد المبتكرة:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🧬 ألياف النانو المضادة للبكتيريا</li>
                      <li>🌡️ أقمشة التحكم الحراري</li>
                      <li>💧 مواد طاردة للسوائل ومقاومة للبقع</li>
                      <li>⚡ ألياف موصلة للكهرباء</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                  خصائص المواد الذكية
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">التكيف التلقائي</h4>
                    <p className="text-gray-600 text-sm">أقمشة تتكيف مع تغيرات درجة الحرارة والرطوبة تلقائياً</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">الحماية الذاتية</h4>
                    <p className="text-gray-600 text-sm">مواد تنظف نفسها وتقاوم البكتيريا والفيروسات</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h4 className="font-semibold text-orange-800 mb-2">المراقبة الحيوية</h4>
                    <p className="text-gray-600 text-sm">قياس العلامات الحيوية ومستوى التعب والتوتر</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="comfort-technologies" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-cyan-600 pr-4">
                تقنيات الراحة المبتكرة
              </h2>

              <div className="space-y-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <FaHeart className="text-green-600" />
                    تقنيات تنظيم الراحة الجسدية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">إدارة الرطوبة والتهوية:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• أقمشة تنقل الرطوبة بعيداً عن الجسم</li>
                        <li>• قنوات تهوية مدمجة في التصميم</li>
                        <li>• تقنيات التبريد والتدفئة التلقائية</li>
                        <li>• مناطق تهوية استراتيجية حسب النشاط</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">الدعم العضلي والمفصلي:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• أشرطة دعم مدمجة للظهر والكتفين</li>
                        <li>• تقنيات ضغط متدرج لتحسين الدورة الدموية</li>
                        <li>• مناطق مرونة محددة لسهولة الحركة</li>
                        <li>• وسائد دعم قابلة للنفخ في نقاط الضغط</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-cyan-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">التقنية</th>
                        <th className="border border-gray-300 p-4 text-right">الوظيفة</th>
                        <th className="border border-gray-300 p-4 text-right">المزايا</th>
                        <th className="border border-gray-300 p-4 text-right">التطبيق</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">التحكم الحراري النشط</td>
                        <td className="border border-gray-300 p-4">تنظيم درجة حرارة الجسم</td>
                        <td className="border border-gray-300 p-4">راحة في جميع الأجواء</td>
                        <td className="border border-gray-300 p-4">القمصان والسترات</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">الضغط التدريجي</td>
                        <td className="border border-gray-300 p-4">تحسين الدورة الدموية</td>
                        <td className="border border-gray-300 p-4">تقليل التعب والتورم</td>
                        <td className="border border-gray-300 p-4">الجوارب والبناطيل</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">نقل الرطوبة الذكي</td>
                        <td className="border border-gray-300 p-4">إبقاء البشرة جافة</td>
                        <td className="border border-gray-300 p-4">منع التهيج والعدوى</td>
                        <td className="border border-gray-300 p-4">الملابس الداخلية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">المساج الدقيق</td>
                        <td className="border border-gray-300 p-4">تحفيز العضلات</td>
                        <td className="border border-gray-300 p-4">تقليل التوتر العضلي</td>
                        <td className="border border-gray-300 p-4">أحزمة الدعم</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="safety-innovations" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-cyan-600 pr-4">
                ابتكارات الأمان والحماية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/flight_crew_safety_requirements.jpeg"
                    alt="ابتكارات الأمان في أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-800">
                    الحماية الذكية والمتقدمة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تدمج أزياء الطيران الحديثة تقنيات أمان متطورة تتجاوز المعايير التقليدية لتوفير حماية شاملة في جميع الظروف والمواقف الطارئة.
                  </p>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">تقنيات الحماية:</h4>
                    <ul className="text-sm space-y-1 text-red-700">
                      <li>🔥 مقاومة حريق متطورة ومطورة</li>
                      <li>💨 حماية من الغازات السامة</li>
                      <li>⚡ عزل كهربائي متقدم</li>
                      <li>🌟 رؤية ليلية محسنة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  🚨 أنظمة الإنذار والاستجابة السريعة
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">الكشف المبكر:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• أجهزة استشعار للغازات الضارة</li>
                      <li>• مراقبة مستمرة لدرجة الحرارة</li>
                      <li>• كشف التغيرات في ضغط المقصورة</li>
                      <li>• تنبيهات تلقائية للحالات الطارئة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">الاستجابة التلقائية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• تفعيل أنظمة الحماية تلقائياً</li>
                      <li>• إشارات ضوئية وصوتية للإخلاء</li>
                      <li>• تحديد الموقع عبر نظام GPS مدمج</li>
                      <li>• اتصال طوارئ بمركز التحكم</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="ergonomic-design" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-cyan-600 pr-4">
                التصميم الهندسي البشري
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    علم الهندسة البشرية في تصميم الأزياء
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">دراسة الحركة والوضعيات</h4>
                        <p className="text-sm text-gray-700">
                          تحليل مفصل لحركات الطاقم أثناء العمل لتطوير تصاميم تدعم الحركة الطبيعية
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-800 mb-2">توزيع الوزن الذكي</h4>
                        <p className="text-sm text-gray-700">
                          تصميم يوزع وزن الملابس والإكسسوارات بطريقة متوازنة على الجسم
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">نقاط الضغط المحسنة</h4>
                        <p className="text-sm text-gray-700">
                          تحديد وتخفيف نقاط الضغط على الجسم خلال ساعات العمل الطويلة
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/functional_airline_uniforms.jpeg"
                        alt="التصميم الهندسي البشري"
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
                      <span className="text-2xl">🧘</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الوضعية الصحيحة</h4>
                    <p className="text-gray-600 text-sm">دعم العمود الفقري والمفاصل للحفاظ على وضعية صحيحة</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏃</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">حرية الحركة</h4>
                    <p className="text-gray-600 text-sm">تصميم يسمح بأقصى مدى حركة دون قيود أو إعاقة</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">التوازن المثالي</h4>
                    <p className="text-gray-600 text-sm">توزيع الوزن بشكل متوازن لتقليل الإجهاد والتعب</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="wearable-tech" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-cyan-600 pr-4">
                التكنولوجيا القابلة للارتداء
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/wearable_tech.jpeg"
                    alt="التكنولوجيا القابلة للارتداء"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    الأجهزة المدمجة والذكية
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تشهد أزياء الطيران دمجاً متزايداً للتكنولوجيا القابلة للارتداء التي تعزز الأداء وتوفر معلومات قيمة في الوقت الفعلي.
                  </p>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-2">التقنيات المدمجة:</h4>
                    <ul className="text-sm space-y-1 text-indigo-700">
                      <li>📱 شاشات مرنة مدمجة في الأكمام</li>
                      <li>🎧 أنظمة اتصال لاسلكية</li>
                      <li>⌚ مراقبة العلامات الحيوية</li>
                      <li>🔋 شحن لاسلكي للأجهزة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                  تطبيقات التكنولوجيا القابلة للارتداء
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-indigo-700 mb-3">المراقبة الصحية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• قياس معدل ضربات القلب المستمر</li>
                      <li>• مراقبة مستوى الأكسجين في الدم</li>
                      <li>• تتبع أنماط النوم والراحة</li>
                      <li>• كشف علامات الإجهاد والتعب</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-700 mb-3">تحسين الأداء:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• تنبيهات ذكية للمهام المهمة</li>
                      <li>• معلومات الطقس والطيران الفورية</li>
                      <li>• تتبع النشاط والحركة</li>
                      <li>• نصائح للصحة والسلامة</li>
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
                      <h4 className="font-semibold group-hover:text-cyan-600 transition-colors">
                        اختيار أقمشة زي طاقم الطائرة: دليل الجودة والمتانة
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
                      <h4 className="font-semibold group-hover:text-cyan-600 transition-colors">
                        اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/category/article-3" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/uniform_safety_standards.jpeg"
                        alt="معايير السلامة في أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-cyan-600 transition-colors">
                        معايير السلامة في أزياء الطيران: الحماية تلتقي بالأناقة
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