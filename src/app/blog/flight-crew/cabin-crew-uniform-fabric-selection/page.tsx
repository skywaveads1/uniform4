import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaCog, FaStar, FaTshirt } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة | يونيفورم',
  description: 'دليل شامل حول معايير اختيار أفضل أقمشة لزي طاقم الطائرة، مع التركيز على الجودة والمتانة والراحة والمواصفات الفنية.',
  keywords: 'أقمشة زي طاقم الطائرة، جودة الأقمشة، متانة أزياء الطيران، مواصفات أقمشة الطيران، السعودية',
  openGraph: {
    title: 'اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة',
    description: 'معايير اختيار أفضل أقمشة لزي طاقم الطائرة والمواصفات الفنية المطلوبة',
    images: ['/images/flight_crew/flight_crew_uniform_fabrics.webp'],
  },
};

export default function ArticlePage() {
  const heroImage = '/images/flight_crew/flight_crew_uniform_fabrics.webp';
  const title = 'اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة';
  const readingTime = '12 دقيقة';
  const publishDate = '١٠ ديسمبر ٢٠٢٤';
  const author = 'خبراء الأقمشة والتصنيع - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'basic-requirements', title: 'المتطلبات الأساسية' },
    { id: 'fabric-types', title: 'أنواع الأقمشة المناسبة' },
    { id: 'advanced-treatments', title: 'المعالجات المتقدمة' },
    { id: 'testing-standards', title: 'معايير الاختبار' },
    { id: 'practical-considerations', title: 'الاعتبارات العملية' },
    { id: 'sustainability', title: 'الاستدامة والمستقبل' },
    { id: 'recommendations', title: 'التوصيات النهائية' },
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
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaTshirt />
                  أقمشة عالية الجودة
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                دليلك الشامل لاختيار أفضل الأقمشة لأزياء طاقم الطيران مع التركيز على الجودة والمتانة
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-blue-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-blue-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-blue-900">
                تحتاج استشارة أقمشة؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة في اختيار أفضل الأقمشة لأزياء طاقم الطيران
              </p>
              <Link 
                href="/quote" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة مجانية
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  يعد اختيار الأقمشة المناسبة لزي طاقم الطائرة أحد العوامل الرئيسية التي تؤثر على راحة الطاقم وأدائهم، وكذلك على الصورة العامة لشركة الطيران. في بيئة عمل فريدة تجمع بين ساعات طويلة، وظروف متغيرة، ومتطلبات صارمة للسلامة، تصبح جودة ومتانة الأقمشة المستخدمة أمراً بالغ الأهمية.
                </p>
                
                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-blue-600" />
                    أهمية اختيار الأقمشة المناسبة
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• ضمان راحة الطاقم لساعات طويلة</li>
                      <li>• مقاومة الظروف المتغيرة</li>
                      <li>• الحفاظ على المظهر المهني</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• تحقيق معايير السلامة الدولية</li>
                      <li>• إطالة العمر الافتراضي</li>
                      <li>• تقليل تكاليف الاستبدال</li>
                    </ul>
                  </div>
                </div>

                <p>
                  يهدف هذا الدليل إلى استعراض المعايير الأساسية لاختيار أفضل أقمشة لزي طاقم الطائرة، مع التركيز على الجوانب الفنية والوظيفية التي تضمن الجودة والمتانة، وتحقق التوازن المطلوب بين الأداء العملي والمظهر الأنيق.
                </p>
              </div>
            </section>

            <section id="basic-requirements" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                المتطلبات الأساسية لأقمشة زي طاقم الطائرة
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/cabin_crew_uniforms.webp"
                    alt="متطلبات أقمشة أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    معايير السلامة والجودة
                  </h3>
                  <p className="text-gray-700">
                    تأتي السلامة في مقدمة اعتبارات اختيار الأقمشة لزي طاقم الطائرة. يجب أن تكون الأقمشة مقاومة للاشتعال وتتوافق مع المعايير الدولية، بالإضافة إلى توفير الراحة والمتانة اللازمة للاستخدام المكثف.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-800">المعايير الأساسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🔥 مقاومة الاشتعال (FAR 25.853)</li>
                      <li>💪 متانة عالية (20,000+ دورة مارتينديل)</li>
                      <li>🌬️ قابلية التنفس والراحة</li>
                      <li>🧼 سهولة العناية والتنظيف</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/flight_crew/comfort_safety_airline_uniforms.webp"
                    alt="أقمشة عالية الجودة للطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-600/60 flex items-center">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">جودة تدوم لسنوات</h3>
                      <p className="text-lg mb-4">أقمشة متطورة مصممة خصيصاً لتحمل متطلبات العمل في الطيران</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-white/20 px-3 py-1 rounded-full">💯 جودة عالية</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🛡️ مقاومة</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">✨ راحة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">أنواع الأقمشة المناسبة</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/best_flight_crew_attire.webp"
                        alt="مزيج الصوف الفاخر"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">مزيج الصوف</h4>
                    <p className="text-sm text-gray-600">مقاومة طبيعية للهب وقدرة ممتازة على الاحتفاظ بالشكل</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/crew_uniform_visual_identity.webp"
                        alt="مزيج القطن المتطور"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">مزيج القطن</h4>
                    <p className="text-sm text-gray-600">راحة فائقة وامتصاص ممتاز للرطوبة مع متانة محسنة</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                        alt="أقمشة تقنية متطورة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الأقمشة التقنية</h4>
                    <p className="text-sm text-gray-600">مرونة فائقة وخصائص متقدمة لإدارة الرطوبة</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="fabric-types" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                أنواع الأقمشة المناسبة لزي طاقم الطائرة
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">
                    مزيج الصوف - الخيار الكلاسيكي الأفضل
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">المزايا الرئيسية</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• مقاومة طبيعية للهب والحرارة</li>
                          <li>• قدرة عالية على الاحتفاظ بالشكل</li>
                          <li>• مظهر أنيق ومهني دائم</li>
                          <li>• تنفس جيد ومقاومة للروائح</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-medium text-pink-800 mb-2">التركيبة المثالية</h4>
                        <p className="text-sm text-gray-700">
                          55-70% صوف مع 30-45% ألياف صناعية (بوليستر/فيسكوز) للمتانة المحسنة
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/air_crew_suits.webp"
                        alt="أزياء صوف فاخرة لطاقم الطيران"
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
                        <th className="border border-gray-300 p-4 text-right">نوع القماش</th>
                        <th className="border border-gray-300 p-4 text-right">المزايا الرئيسية</th>
                        <th className="border border-gray-300 p-4 text-right">الاستخدامات المثالية</th>
                        <th className="border border-gray-300 p-4 text-right">متوسط السعر</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">مزيج الصوف الفاخر</td>
                        <td className="border border-gray-300 p-4">مقاومة طبيعية للهب، أناقة عالية</td>
                        <td className="border border-gray-300 p-4">السترات، البدلات الرسمية</td>
                        <td className="border border-gray-300 p-4">عالي</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">مزيج القطن المتطور</td>
                        <td className="border border-gray-300 p-4">راحة فائقة، امتصاص ممتاز</td>
                        <td className="border border-gray-300 p-4">القمصان، البلوزات</td>
                        <td className="border border-gray-300 p-4">متوسط</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">التريكو المتطور</td>
                        <td className="border border-gray-300 p-4">مرونة عالية، تكيف مع الحركة</td>
                        <td className="border border-gray-300 p-4">فساتين المضيفات، بولو</td>
                        <td className="border border-gray-300 p-4">متوسط إلى عالي</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">الأقمشة التقنية</td>
                        <td className="border border-gray-300 p-4">خصائص متقدمة، أداء فائق</td>
                        <td className="border border-gray-300 p-4">أزياء متخصصة، رحلات طويلة</td>
                        <td className="border border-gray-300 p-4">عالي جداً</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/flight-crew/flight-15" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/cultural_aviation_uniforms.webp"
                        alt="المواد المستدامة في أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        المواد المستدامة في أزياء الطيران: ثورة خضراء في السماء
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-13" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/air_hospitality_uniforms.webp"
                        alt="دليل الصيانة والعناية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        دليل الصيانة والعناية بأزياء طاقم الطيران
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-16" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/buy_air_crew_uniforms.webp"
                        alt="التصميم الإرجونومي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        التصميم الإرجونومي في أزياء الطيران: الصحة والراحة أولاً
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