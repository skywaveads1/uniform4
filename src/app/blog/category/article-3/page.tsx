import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaStar, FaExclamationTriangle } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'معايير السلامة في أزياء الطيران: دليل شامل للحماية والامتثال | يونيفورم',
  description: 'دليل متكامل حول معايير السلامة في أزياء الطيران، يغطي متطلبات مقاومة الحريق، المعايير الدولية، واختبارات الامتثال لضمان أقصى مستويات الحماية.',
  keywords: 'معايير السلامة، أزياء الطيران، مقاومة الحريق، معايير دولية، اختبارات الامتثال، حماية الطاقم، السعودية',
  openGraph: {
    title: 'معايير السلامة في أزياء الطيران: دليل شامل للحماية والامتثال',
    description: 'دليل متكامل حول معايير السلامة في أزياء الطيران',
    images: ['/images/flight_crew/safety_standards.webp'],
  },
};

export default function Article3Page() {
  const heroImage = '/images/flight_crew/air_crew_innovative_uniforms.webp';
  const title = 'معايير السلامة في أزياء الطيران: الحماية تلتقي بالأناقة';
  const readingTime = '10 دقائق';
  const publishDate = '٨ ديسمبر ٢٠٢٤';
  const author = 'خبراء السلامة والطيران - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'international-standards', title: 'المعايير الدولية' },
    { id: 'fire-resistance', title: 'مقاومة الحريق والحرارة' },
    { id: 'visibility-communication', title: 'الرؤية والتواصل' },
    { id: 'protective-features', title: 'الخصائص الوقائية' },
    { id: 'testing-certification', title: 'الاختبارات والمصادقة' },
    { id: 'future-innovations', title: 'ابتكارات المستقبل' },
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
                <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaStar />
                  سلامة متقدمة
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                كيف تحمي أزياء الطيران الحديثة الأرواح وتضمن السلامة القصوى
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-red-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-red-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-red-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-red-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-red-900">
                أزياء طيران آمنة ومطابقة للمعايير؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة لضمان مطابقة أزياء الطيران لأعلى معايير السلامة الدولية
              </p>
              <Link 
                href="/quote" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة سلامة
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-red-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  في عالم الطيران حيث تقاس الثواني بالأرواح، تمثل أزياء الطيران خط الدفاع الأول لحماية أطقم الطائرات. فهذه الأزياء ليست مجرد ملابس أنيقة، بل هي نظم حماية متطورة مصممة لتوفير أقصى درجات الأمان في ظروف الطوارئ والحالات الاستثنائية.
                </p>
                
                <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-red-900 mb-3 flex items-center gap-2">
                    <FaExclamationTriangle className="text-red-600" />
                    أهمية السلامة في أزياء الطيران
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• حماية من الحرائق والحرارة العالية</li>
                      <li>• ضمان الرؤية في الظروف الصعبة</li>
                      <li>• مقاومة المواد الكيميائية الخطيرة</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• الحماية من الصدمات الكهربائية</li>
                      <li>• توفير الراحة أثناء عمليات الإنقاذ</li>
                      <li>• الامتثال للمعايير الدولية الصارمة</li>
                    </ul>
                  </div>
                </div>

                <p>
                  تخضع أزياء الطيران لمعايير سلامة دولية صارمة وضعتها منظمات مثل منظمة الطيران المدني الدولي (ICAO) وإدارة الطيران الفيدرالية (FAA). هذه المعايير تضمن أن كل قطعة من الزي قادرة على حماية مرتديها في أحلك الظروف وأخطر الحالات.
                </p>
              </div>
            </section>

            <section id="international-standards" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-red-600 pr-4">
                المعايير الدولية
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/crew_uniform_visual_identity.webp"
                    alt="المعايير الدولية"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-800">
                    الجهات المنظمة العالمية
                  </h3>
                  <p className="text-gray-700">
                    تحكم عدة منظمات دولية معايير السلامة في أزياء الطيران، وتضع إرشادات صارمة لضمان الحماية القصوى للأطقم.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-orange-800">المنظمات الرئيسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🌍 ICAO - منظمة الطيران المدني الدولي</li>
                      <li>🇺🇸 FAA - إدارة الطيران الفيدرالية الأمريكية</li>
                      <li>🇪🇺 EASA - وكالة سلامة الطيران الأوروبية</li>
                      <li>🏴󠁧󠁢󠁥󠁮󠁧󠁿 CAA - سلطة الطيران المدني البريطانية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-gray-300 p-4 text-right">المعيار</th>
                      <th className="border border-gray-300 p-4 text-right">المتطلب</th>
                      <th className="border border-gray-300 p-4 text-right">الهدف</th>
                      <th className="border border-gray-300 p-4 text-right">طريقة الاختبار</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">مقاومة الحريق</td>
                      <td className="border border-gray-300 p-4">مقاومة لمدة 12 ثانية</td>
                      <td className="border border-gray-300 p-4">منع انتشار اللهب</td>
                      <td className="border border-gray-300 p-4">اختبار الشعلة العمودية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">الرؤية الليلية</td>
                      <td className="border border-gray-300 p-4">عاكسات على الصدر والأكمام</td>
                      <td className="border border-gray-300 p-4">تحسين الرؤية</td>
                      <td className="border border-gray-300 p-4">قياس شدة الانعكاس</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">مقاومة المواد الكيميائية</td>
                      <td className="border border-gray-300 p-4">عدم التأثر بوقود الطائرات</td>
                      <td className="border border-gray-300 p-4">حماية من التسريبات</td>
                      <td className="border border-gray-300 p-4">اختبار الغمر الكيميائي</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">المتانة</td>
                      <td className="border border-gray-300 p-4">مقاومة التمزق والتآكل</td>
                      <td className="border border-gray-300 p-4">ضمان الاستمرارية</td>
                      <td className="border border-gray-300 p-4">اختبار الشد والانحناء</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="fire-resistance" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-red-600 pr-4">
                مقاومة الحريق والحرارة
              </h2>

              <div className="my-8">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                    alt="مقاومة الحريق في أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-orange-600/60 flex items-center">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">الحماية من الحريق: أولوية قصوى</h3>
                      <p className="text-lg mb-4">أزياء مصممة لتحمل درجات حرارة عالية ومقاومة انتشار النيران</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-white/20 px-3 py-1 rounded-full">🔥 مقاومة الحريق</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🌡️ تحمل الحرارة</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🛡️ حماية شاملة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">خصائص مقاومة الحريق</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="الأقمشة المقاومة للحريق"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الأقمشة المقاومة</h4>
                    <p className="text-sm text-gray-600">أقمشة متطورة لا تشتعل بسهولة وتقاوم انتشار النيران</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/cabin_crew_uniforms.webp"
                        alt="الطلاءات الواقية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الطلاءات الواقية</h4>
                    <p className="text-sm text-gray-600">معالجات كيميائية خاصة لزيادة مقاومة الحريق</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_hospitality_uniforms.webp"
                        alt="الاختبارات الحرارية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الاختبارات الحرارية</h4>
                    <p className="text-sm text-gray-600">فحوصات صارمة لضمان الأداء في الظروف القاسية</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="visibility-communication" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-red-600 pr-4">
                الرؤية والتواصل
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                    alt="ميزات الرؤية والسلامة"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    تقنيات الرؤية المتقدمة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    في ظروف الطوارئ والإخلاء، تصبح الرؤية الواضحة لأفراد الطاقم أمراً حيوياً لنجاح عمليات الإنقاذ وضمان سلامة الركاب.
                  </p>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">التقنيات المستخدمة:</h4>
                    <ul className="text-sm space-y-1 text-purple-700">
                      <li>💡 شرائط عاكسة عالية الكثافة</li>
                      <li>💡 مواد فسفورية للإضاءة الذاتية</li>
                      <li>💡 ألوان فلورية للرؤية النهارية</li>
                      <li>💡 أنظمة LED مدمجة في الأزياء</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  أنظمة التواصل المدمجة
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-blue-700">التقنيات السلكية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• أسلاك مدمجة في النسيج للاتصالات</li>
                      <li>• نظام صوتي متصل بسماعات الأذن</li>
                      <li>• أجهزة إرسال مدمجة في الجيوب</li>
                      <li>• بطاريات قابلة للشحن مخفية في البطانة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-blue-700">التقنيات اللاسلكية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• أجهزة بلوتوث منخفضة الطاقة</li>
                      <li>• إشارات GPS للتتبع في الطوارئ</li>
                      <li>• أجهزة استشعار حيوية لمراقبة الحالة</li>
                      <li>• أنظمة تنبيه ذكية للخطر</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="protective-features" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-red-600 pr-4">
                الخصائص الوقائية
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    حماية شاملة متعددة الطبقات
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h4 className="font-semibold text-green-800 mb-2">الحماية الفيزيائية</h4>
                      <p className="text-gray-600 text-sm">مقاومة القطع والتمزق والصدمات الميكانيكية</p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">العزل الكهربائي</h4>
                      <p className="text-gray-600 text-sm">حماية من الصدمات الكهربائية والتفريغ الإلكتروستاتيكي</p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🧪</span>
                      </div>
                      <h4 className="font-semibold text-purple-800 mb-2">المقاومة الكيميائية</h4>
                      <p className="text-gray-600 text-sm">حماية من الوقود والزيوت والمواد الكيميائية</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    التقنيات الذكية للحماية
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">الاستشعار الذكي:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• أجهزة استشعار درجة الحرارة</li>
                        <li>• مراقبة معدل ضربات القلب</li>
                        <li>• قياس مستوى الأكسجين في الدم</li>
                        <li>• كشف الغازات السامة</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">الاستجابة التلقائية:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• تبريد تلقائي عند ارتفاع الحرارة</li>
                        <li>• إرسال إنذار في حالة الخطر</li>
                        <li>• تفعيل أنظمة الإضاءة الطارئة</li>
                        <li>• إطلاق أكسجين إضافي عند الحاجة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="testing-certification" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-red-600 pr-4">
                الاختبارات والمصادقة
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                    alt="اختبارات ومصادقة أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    عمليات الاختبار الصارمة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تخضع أزياء الطيران لبرنامج اختبارات شامل ومتعدد المراحل قبل الحصول على الموافقة للاستخدام التجاري.
                  </p>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-2">مراحل الاختبار:</h4>
                    <ul className="text-sm space-y-1 text-indigo-700">
                      <li>🔬 اختبارات المختبر المبدئية</li>
                      <li>🔬 اختبارات الأداء في الظروف القاسية</li>
                      <li>🔬 تجارب ميدانية على الطائرات</li>
                      <li>🔬 مراجعة وموافقة الجهات التنظيمية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  📋 معايير المصادقة الدولية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">شهادات السلامة المطلوبة:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• شهادة مقاومة الحريق FAA</li>
                      <li>• موافقة EASA للسوق الأوروبي</li>
                      <li>• شهادة ISO للجودة والسلامة</li>
                      <li>• موافقة السلطات المحلية للطيران المدني</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">عمليات المراجعة الدورية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• تجديد الشهادات كل 3-5 سنوات</li>
                      <li>• مراجعة المعايير مع التطورات التقنية</li>
                      <li>• إعادة اختبار بعد أي تعديلات</li>
                      <li>• تقييم الأداء الميداني المستمر</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="future-innovations" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-red-600 pr-4">
                ابتكارات المستقبل
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/comfort_safety_airline_uniforms.webp"
                    alt="ابتكارات المستقبل في سلامة الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    تقنيات الجيل القادم
                  </h3>
                  <p className="text-gray-700 text-sm">
                    يشهد مجال سلامة أزياء الطيران تطورات ثورية تعد بحماية أفضل وراحة أكبر للأطقم في المستقبل القريب.
                  </p>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">الابتكارات القادمة:</h4>
                    <ul className="text-sm space-y-1 text-purple-700">
                      <li>🚀 أنسجة ذاتية الإصلاح</li>
                      <li>🚀 حماية ديناميكية قابلة للتكيف</li>
                      <li>🚀 أنظمة ذكاء اصطناعي مدمجة</li>
                      <li>🚀 مواد نانوية فائقة القوة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">
                  رؤية 2030: أزياء الطيران الذكية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-purple-700 mb-3">التقنيات الناشئة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• ألياف الجرافين فائقة التوصيل</li>
                      <li>• أنسجة تتغير خصائصها حسب البيئة</li>
                      <li>• أنظمة تبريد وتدفئة مدمجة</li>
                      <li>• حماية من الإشعاع الكوني</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700 mb-3">التطبيقات المستقبلية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• أزياء لرحلات الفضاء التجارية</li>
                      <li>• حماية من التهديدات الإلكترونية</li>
                      <li>• أنظمة طبية تشخيصية مدمجة</li>
                      <li>• واقع معزز للتدريب والطوارئ</li>
                    </ul>
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
                      <h4 className="font-semibold group-hover:text-red-600 transition-colors">
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
                      <h4 className="font-semibold group-hover:text-red-600 transition-colors">
                        اختيار أقمشة زي طاقم الطائرة: دليل الجودة والمتانة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-3" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/female_male_air_crew_wear.original.webp"
                        alt="أزياء الطيران النسائية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-red-600 transition-colors">
                        أزياء الطيران النسائية: رحلة التطور والابتكار عبر العصور
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