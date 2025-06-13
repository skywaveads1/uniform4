import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaPalette, FaStar, FaEye } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'علم نفس الألوان في أزياء الطيران: كيف تؤثر الألوان على تجربة المسافرين | يونيفورم',
  description: 'اكتشف كيف تؤثر الألوان في أزياء طاقم الطيران على نفسية المسافرين ومدى تأثيرها على الثقة والراحة والشعور بالأمان، وأسرار اختيار الألوان المناسبة لكل شركة طيران.',
  keywords: 'علم نفس الألوان، أزياء الطيران، تأثير الألوان، نفسية المسافرين، شركات الطيران، التصميم النفسي، السعودية',
  openGraph: {
    title: 'سيكولوجية الألوان في تصميم أزياء الطيران: التأثير النفسي على الركاب والطاقم',
    description: 'استكشف قوة الألوان في أزياء الطيران وتأثيرها على المشاعر والثقة',
    images: ['/images/flight_crew/cultural_aviation_uniforms.webp'],
  },
};

export default function Article14Page() {
  const heroImage = '/images/flight_crew/cultural_aviation_uniforms.webp';
  const title = 'علم نفس الألوان في أزياء الطيران: كيف تؤثر الألوان على تجربة المسافرين';
  const readingTime = '11 دقيقة';
  const publishDate = '١٥ ديسمبر ٢٠٢٤';
  const author = 'خبراء علم النفس والتصميم - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'color-psychology', title: 'أساسيات علم نفس الألوان' },
    { id: 'airline-colors', title: 'الألوان الشائعة في أزياء الطيران' },
    { id: 'passenger-impact', title: 'تأثير الألوان على المسافرين' },
    { id: 'cultural-differences', title: 'الاختلافات الثقافية في إدراك الألوان' },
    { id: 'brand-identity', title: 'الألوان والهوية التجارية' },
    { id: 'color-combinations', title: 'تنسيق الألوان والتوليفات' },
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
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaPalette />
                  علم نفس الألوان
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                رحلة علمية في عالم الألوان ودورها الخفي في تشكيل تجربة الطيران ومشاعر المسافرين
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-purple-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-purple-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-purple-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-purple-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-purple-900">
                تحتاج استشارة ألوان؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة في اختيار الألوان المناسبة لأزياء طاقم الطيران
              </p>
              <Link 
                href="/quote" 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة نفسية للألوان
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  تلعب الألوان دوراً خفياً ولكنه مؤثر جداً في تشكيل تجربة السفر وانطباعات المسافرين عن شركات الطيران. فعندما يصعد المسافر إلى الطائرة، فإن أول ما يلفت انتباهه هو أزياء طاقم الطائرة وألوانها، والتي تحمل في طياتها رسائل نفسية عميقة تؤثر على مزاجه ومشاعره ومستوى ثقته بالخدمة المقدمة.
                </p>
                
                <div className="bg-purple-50 border-r-4 border-purple-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-purple-600" />
                    تأثيرات الألوان النفسية
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• تعزيز الشعور بالثقة والأمان</li>
                      <li>• تحسين تجربة السفر والراحة</li>
                      <li>• تقوية الهوية التجارية للشركة</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• تحفيز المشاعر الإيجابية</li>
                      <li>• تقليل القلق والتوتر</li>
                      <li>• تعزيز الذاكرة والتذكر</li>
                    </ul>
                  </div>
                </div>

                <p>
                  لا تقتصر أهمية الألوان في أزياء الطيران على الجانب الجمالي فحسب، بل تمتد لتشمل جوانب نفسية معقدة تؤثر على سلوك المسافرين وردود أفعالهم. فالألوان لها قدرة عجيبة على إثارة مشاعر معينة، وتحفيز ذكريات، وحتى التأثير على القرارات الشرائية للمسافرين.
                </p>
              </div>
            </section>

            <section id="color-psychology" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                أساسيات علم نفس الألوان
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/comfort_safety_airline_uniforms.webp"
                    alt="تأثير الألوان على الركاب"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    كيف تؤثر الألوان على النفس البشرية
                  </h3>
                  <p className="text-gray-700">
                    يستند علم نفس الألوان إلى حقيقة علمية مؤكدة وهي أن الألوان تثير استجابات عاطفية وفيسيولوجية في الدماغ البشري. هذه الاستجابات ليست مجرد تفضيلات شخصية، بل هي ردود أفعال بيولوجية عميقة تؤثر على مزاجنا وسلوكنا.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-indigo-800">الآليات النفسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🧠 التأثير على الهرمونات والناقلات العصبية</li>
                      <li>❤️ تغيير معدل ضربات القلب وضغط الدم</li>
                      <li>👁️ التأثير على النظام البصري والإدراك</li>
                      <li>🧘 تحفيز مناطق معينة في الدماغ</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="my-10">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">الألوان الشائعة في أزياء الطيران ودلالاتها</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <div className="relative h-24 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/cabin_crew_uniforms.webp"
                        alt="الألوان الزرقاء في أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-bold text-blue-800 mb-2">الأزرق</h4>
                    <p className="text-sm text-gray-600">الثقة والأمان والاحترافية</p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                    <div className="relative h-24 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="الألوان الحمراء في أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-bold text-red-800 mb-2">الأحمر</h4>
                    <p className="text-sm text-gray-600">الطاقة والحيوية والجذب</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600">
                    <div className="relative h-24 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/captain_copilot_wear.webp"
                        alt="الألوان الرمادية والسوداء"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">الرمادي والأسود</h4>
                    <p className="text-sm text-gray-600">الأناقة والرسمية والقوة</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                    <div className="relative h-24 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_hospitality_uniforms.webp"
                        alt="الألوان الخضراء والطبيعية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-bold text-green-800 mb-2">الأخضر</h4>
                    <p className="text-sm text-gray-600">الاستقرار والطبيعة والنمو</p>
                  </div>
                </div>
              </div>

              <div className="my-10">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                    alt="تأثير الألوان النفسي في تصميم أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/60 flex items-center">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">علم نفس الألوان في العمل</h3>
                      <p className="text-lg mb-4">كيف تؤثر الألوان على مشاعر المسافرين وثقتهم في الخدمة</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-white/20 px-3 py-1 rounded-full">🧠 علم النفس</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🎨 التصميم</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">✈️ الطيران</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">تنسيقات الألوان الناجحة</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/best_flight_crew_attire.webp"
                        alt="تنسيقات ألوان احترافية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-purple-800">التنسيقات الكلاسيكية</h4>
                    <p className="text-sm text-gray-600">
                      الألوان الثابتة التي تعكس الثقة والاحترافية مثل الأزرق الكحلي مع الأبيض والذهبي
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="تصميم أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                    <h4 className="font-semibold text-purple-800">التنسيقات المبتكرة</h4>
                    <p className="text-sm text-gray-600">
                      الألوان العصرية التي تعكس الحداثة والابتكار مع الحفاظ على الهوية المؤسسية
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="airline-colors" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                الألوان الشائعة في أزياء الطيران
              </h2>

              <div className="space-y-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <FaEye className="text-blue-600" />
                    تحليل ألوان شركات الطيران الكبرى
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-blue-700">الألوان المهيمنة:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• الأزرق البحري: 60% من شركات الطيران</li>
                        <li>• الأحمر والبرتقالي: 25% من الشركات</li>
                        <li>• الأخضر والألوان الطبيعية: 10%</li>
                        <li>• الألوان الفاخرة (ذهبي، فضي): 5%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-blue-700">أسباب الشيوع:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• الأزرق: يرمز للسماء والثقة</li>
                        <li>• الأحمر: يحفز النشاط والحيوية</li>
                        <li>• الأخضر: يشعر بالطبيعة والاستدامة</li>
                        <li>• الذهبي: يعكس الفخامة والتميز</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-purple-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">اللون</th>
                        <th className="border border-gray-300 p-4 text-right">التأثير النفسي</th>
                        <th className="border border-gray-300 p-4 text-right">المشاعر المحفزة</th>
                        <th className="border border-gray-300 p-4 text-right">أمثلة شركات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الأزرق الداكن</td>
                        <td className="border border-gray-300 p-4">الثقة والاستقرار</td>
                        <td className="border border-gray-300 p-4">الأمان والمصداقية</td>
                        <td className="border border-gray-300 p-4">KLM، United، Delta</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">الأحمر الجريء</td>
                        <td className="border border-gray-300 p-4">الطاقة والقوة</td>
                        <td className="border border-gray-300 p-4">الحماس والإثارة</td>
                        <td className="border border-gray-300 p-4">Virgin، Air Asia</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الأخضر الزمردي</td>
                        <td className="border border-gray-300 p-4">النمو والتجديد</td>
                        <td className="border border-gray-300 p-4">الطبيعة والانتعاش</td>
                        <td className="border border-gray-300 p-4">Aer Lingus، Alitalia</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">الذهبي الفاخر</td>
                        <td className="border border-gray-300 p-4">الفخامة والتميز</td>
                        <td className="border border-gray-300 p-4">الرفاهية والجودة</td>
                        <td className="border border-gray-300 p-4">Emirates، Singapore</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="passenger-impact" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                تأثير الألوان على المسافرين
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/passenger_color_impact.jpeg"
                    alt="تأثير الألوان على المسافرين"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    الاستجابات النفسية للمسافرين
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تشير الدراسات النفسية إلى أن المسافرين يكونون أكثر حساسية للألوان أثناء السفر بسبب التوتر الطبيعي المصاحب للطيران. لذلك، فإن اختيار الألوان المناسبة لأزياء الطاقم يمكن أن يساعد في تهدئة هذا التوتر وتحسين التجربة الإجمالية.
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">تأثيرات إيجابية:</h4>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>😌 تقليل القلق والتوتر</li>
                      <li>💙 زيادة الشعور بالثقة</li>
                      <li>🛡️ تعزيز الإحساس بالأمان</li>
                      <li>🎯 تحسين التركيز والانتباه</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  📊 دراسات ميدانية حول تأثير الألوان
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">النتائج الإيجابية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• 78% من المسافرين يشعرون بالراحة مع الأزرق</li>
                      <li>• 65% يرتبط الأخضر بالهدوء لديهم</li>
                      <li>• 82% يثقون أكثر في الألوان الداكنة</li>
                      <li>• 71% يفضلون الألوان المتدرجة الهادئة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">التحديات:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• الألوان الصارخة تزيد التوتر بنسبة 45%</li>
                      <li>• الألوان المتضاربة تشتت الانتباه</li>
                      <li>• الإضاءة تؤثر على إدراك الألوان</li>
                      <li>• اختلاف التفسيرات حسب العمر والجنس</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="cultural-differences" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                الاختلافات الثقافية في إدراك الألوان
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">
                    تنوع المعاني الثقافية للألوان
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">في الثقافة العربية</h4>
                        <p className="text-sm text-gray-700">
                          الأبيض يرمز للنقاء والطهارة، والأخضر للإسلام والطبيعة، والذهبي للكرم والضيافة
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-800 mb-2">في الثقافة الآسيوية</h4>
                        <p className="text-sm text-gray-700">
                          الأحمر يجلب الحظ والازدهار، والأصفر يرمز للملوكية والقوة
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">في الثقافة الغربية</h4>
                        <p className="text-sm text-gray-700">
                          الأزرق يدل على الثقة والاحترافية، والأسود يعبر عن الأناقة والرسمية
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/cultural_aviation_uniforms.webp"
                        alt="أزياء الطيران العربية الثقافية"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <h4 className="font-semibold text-red-800 mb-2">التنوع الجغرافي</h4>
                    <p className="text-gray-600 text-sm">اختلاف دلالات الألوان بين القارات والمناطق</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🕌</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">التأثير الديني</h4>
                    <p className="text-gray-600 text-sm">دور المعتقدات الدينية في تفسير الألوان</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">التراث التاريخي</h4>
                    <p className="text-gray-600 text-sm">تأثير التاريخ والتراث على فهم الألوان</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="brand-identity" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                الألوان والهوية التجارية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/crew_uniform_visual_identity.webp"
                    alt="هوية العلامة التجارية بالألوان"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-800">
                    بناء الهوية من خلال الألوان
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تعتبر الألوان أحد أقوى عناصر الهوية التجارية لشركات الطيران، حيث تساعد في خلق صورة ذهنية قوية ومميزة في أذهان المسافرين. هذه الصورة تترجم إلى ولاء العملاء وتمييز الشركة عن منافسيها.
                  </p>
                  <div className="bg-teal-100 p-4 rounded-lg">
                    <h4 className="font-medium text-teal-800 mb-2">عناصر الهوية اللونية:</h4>
                    <ul className="text-sm space-y-1 text-teal-700">
                      <li>🎨 اللون الأساسي للعلامة التجارية</li>
                      <li>🌈 الألوان الثانوية المكملة</li>
                      <li>⚖️ التوازن والتناغم اللوني</li>
                      <li>🔄 الثبات عبر جميع نقاط التلامس</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">
                  استراتيجيات اختيار الألوان التجارية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">المبادئ الأساسية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• التميز عن المنافسين في السوق</li>
                      <li>• التوافق مع قيم ورسالة الشركة</li>
                      <li>• مراعاة الجمهور المستهدف</li>
                      <li>• القابلية للتطبيق عبر وسائل مختلفة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">معايير النجاح:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• سهولة التذكر والتمييز</li>
                      <li>• إثارة المشاعر المرغوبة</li>
                      <li>• المرونة في التطبيقات المختلفة</li>
                      <li>• الاستدامة الزمنية والعالمية</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="color-combinations" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                تنسيق الألوان والتوليفات
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-pink-800 mb-4">
                    فن التنسيق اللوني في أزياء الطيران
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-pink-200">
                      <h4 className="font-semibold text-blue-800 mb-2">التنسيق الأحادي</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        استخدام درجات مختلفة من نفس اللون
                      </p>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• يخلق مظهراً أنيقاً ومتناسقاً</li>
                        <li>• سهل التطبيق والتنسيق</li>
                        <li>• يعطي انطباعاً بالوحدة والتماسك</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-pink-200">
                      <h4 className="font-semibold text-green-800 mb-2">التنسيق المتكامل</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        ألوان متقاربة في عجلة الألوان
                      </p>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• يبدو طبيعياً ومتناغماً</li>
                        <li>• يخلق جواً مريحاً للعين</li>
                        <li>• مناسب للاستخدام اليومي</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-pink-200">
                      <h4 className="font-semibold text-purple-800 mb-2">التنسيق المتضاد</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        ألوان متقابلة في عجلة الألوان
                      </p>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• يخلق تبايناً قوياً وجذاباً</li>
                        <li>• مناسب للفت الانتباه</li>
                        <li>• يحتاج مهارة في التطبيق</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-amber-800">
                    أمثلة ناجحة لتنسيق الألوان
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-amber-700 mb-3">التوليفات الكلاسيكية:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• أزرق بحري + أبيض + ذهبي</li>
                        <li>• أحمر كرزي + رمادي + فضي</li>
                        <li>• أخضر زمردي + كريمي + بني</li>
                        <li>• بنفسجي + لؤلؤي + وردي فاتح</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-700 mb-3">التوليفات الحديثة:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• فيروزي + أبيض + برتقالي</li>
                        <li>• نيلي + فضي + أصفر</li>
                        <li>• بنفسجي + ذهبي + أبيض كريمي</li>
                        <li>• أخضر نعناعي + رمادي + زهري</li>
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
                        src="/images/flight_crew/airline_uniform_design.jpeg"
                        alt="اعتبارات تصميم زي شركات الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                        اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-8" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/arab_airline_cultural_uniforms.jpeg"
                        alt="أزياء الطيران العربية الثقافية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                        أزياء الطيران العربية الثقافية
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-7" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                        alt="أزياء الطيران المستقبلية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                        أزياء الطيران المستقبلية: الذكاء الاصطناعي والتصميم التفاعلي
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