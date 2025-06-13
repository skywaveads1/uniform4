import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaThermometerHalf, FaStar, FaSnowflake } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'التكيف الموسمي في أزياء الطيران: تصاميم لكل الأجواء | يونيفورم',
  description: 'تعرف على كيفية تصميم أزياء طاقم الطيران للتكيف مع الفصول والأجواء المختلفة، من الحر الشديد إلى البرد القارس.',
  keywords: 'التكيف الموسمي، أزياء الطيران، الأجواء المختلفة، التصميم المناخي، طاقم الطيران، السعودية',
  openGraph: {
    title: 'أزياء الطيران للمواسم المختلفة: التكيف مع الظروف الجوية المتغيرة',
    description: 'كيف تتكيف أزياء الطيران مع الظروف الجوية المختلفة عبر الفصول',
    images: ['/images/flight_crew/comfort_safety_airline_uniforms.webp'],
  },
};

export default function Article17Page() {
  const heroImage = '/images/flight_crew/comfort_safety_airline_uniforms.webp';
  const title = 'التكيف الموسمي في أزياء الطيران: تصاميم لكل الأجواء';
  const readingTime = '9 دقائق';
  const publishDate = '٣٠ ديسمبر ٢٠٢٤';
  const author = 'خبراء التصميم المناخي - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'climate-challenges', title: 'تحديات الأجواء المختلفة' },
    { id: 'seasonal-materials', title: 'المواد الموسمية' },
    { id: 'layering-systems', title: 'أنظمة الطبقات' },
    { id: 'temperature-regulation', title: 'تنظيم الحرارة' },
    { id: 'regional-adaptations', title: 'التكيفات الإقليمية' },
    { id: 'smart-solutions', title: 'الحلول الذكية' },
    { id: 'practical-tips', title: 'نصائح عملية' },
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
                <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaThermometerHalf />
                  التكيف المناخي
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                أزياء ذكية تتكيف مع جميع الفصول والأجواء المناخية المختلفة حول العالم
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-orange-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-orange-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-orange-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-orange-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-orange-900">
                استشارة مناخية
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على تصميم مخصص لأزياء تتكيف مع مناخ منطقتك
              </p>
              <Link 
                href="/quote" 
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة تصميم مناخي
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-orange-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  يعمل طاقم الطيران في بيئات مناخية متنوعة، من حرارة الصحراء الشديدة إلى برد الشتاء القارس، ومن الرطوبة الاستوائية إلى الجفاف الصحراوي. هذا التنوع المناخي يفرض تحديات فريدة على تصميم أزياء الطيران التي يجب أن تكون متكيفة وذكية للتعامل مع جميع هذه الظروف.
                </p>
                
                <div className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-orange-600" />
                    أهمية التكيف الموسمي
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>🌡️ راحة الطاقم في جميع الأجواء</li>
                      <li>⚡ تحسين الأداء المهني</li>
                      <li>🛡️ الحماية من العوامل الجوية</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>💰 توفير تكاليف الأزياء المتعددة</li>
                      <li>🌍 التكيف مع الطرق الدولية</li>
                      <li>📈 تعزيز صورة الشركة المهنية</li>
                    </ul>
                  </div>
                </div>

                <p>
                  التصميم الموسمي الذكي لا يقتصر على توفير الراحة فقط، بل يمتد ليشمل الحماية من الأشعة الضارة، وتنظيم حرارة الجسم، ومقاومة العوامل الجوية المختلفة. هذا النهج المبتكر يضمن أن يكون الطاقم في أفضل حالاته بغض النظر عن الوجهة أو الفصل.
                </p>
              </div>
            </section>

            <section id="climate-challenges" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-orange-600 pr-4">
                تحديات الأجواء المختلفة
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                    <FaThermometerHalf className="text-red-600" />
                    التحديات المناخية المتنوعة
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-medium text-red-800 mb-2">الحرارة الشديدة</h4>
                        <p className="text-sm text-gray-700">
                          درجات حرارة تصل إلى 50°م في المناطق الصحراوية والاستوائية
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">البرد القارس</h4>
                        <p className="text-sm text-gray-700">
                          درجات حرارة تحت الصفر في المناطق القطبية والجبلية
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-800 mb-2">الرطوبة العالية</h4>
                        <p className="text-sm text-gray-700">
                          رطوبة تصل إلى 90% في المناطق الاستوائية والساحلية
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="تحديات الأجواء المختلفة"
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
                      <tr className="bg-orange-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">المناخ</th>
                        <th className="border border-gray-300 p-4 text-right">التحديات</th>
                        <th className="border border-gray-300 p-4 text-right">المتطلبات</th>
                        <th className="border border-gray-300 p-4 text-right">الحلول</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">صحراوي حار</td>
                        <td className="border border-gray-300 p-4">حرارة وأشعة شمس</td>
                        <td className="border border-gray-300 p-4">تبريد وحماية UV</td>
                        <td className="border border-gray-300 p-4">أقمشة تبريد ذكية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">قطبي بارد</td>
                        <td className="border border-gray-300 p-4">برد ورياح</td>
                        <td className="border border-gray-300 p-4">عزل حراري</td>
                        <td className="border border-gray-300 p-4">طبقات عازلة متعددة</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">استوائي رطب</td>
                        <td className="border border-gray-300 p-4">رطوبة وحرارة</td>
                        <td className="border border-gray-300 p-4">تهوية وتجفيف</td>
                        <td className="border border-gray-300 p-4">أقمشة تنفس سريعة</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">معتدل متغير</td>
                        <td className="border border-gray-300 p-4">تقلبات سريعة</td>
                        <td className="border border-gray-300 p-4">تكيف سريع</td>
                        <td className="border border-gray-300 p-4">تصميم متعدد الطبقات</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="seasonal-materials" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-orange-600 pr-4">
                المواد الموسمية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/crew_uniform_visual_identity.webp"
                    alt="المواد الموسمية"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    مواد ذكية لكل موسم
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تطوير مواد متطورة تتكيف مع الظروف المناخية المختلفة، من الأقمشة التي تبرد في الحر إلى تلك التي تدفئ في البرد، مع الحفاظ على الراحة والأناقة في جميع الأوقات.
                  </p>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-2">أنواع المواد الذكية:</h4>
                    <ul className="text-sm space-y-1 text-indigo-700">
                      <li>🧊 مواد التبريد النشط</li>
                      <li>🔥 ألياف الحرارة التكيفية</li>
                      <li>💨 أقمشة التهوية الذكية</li>
                      <li>💧 مواد طاردة للماء والرطوبة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                  تقنيات المواد المتقدمة
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-blue-800 mb-2">مواد الصيف</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• أقمشة التبريد الفورية</li>
                      <li>• مواد مقاومة للأشعة</li>
                      <li>• ألياف التهوية السريعة</li>
                      <li>• أقمشة طاردة للحرارة</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-red-800 mb-2">مواد الشتاء</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• ألياف العزل الحراري</li>
                      <li>• مواد مقاومة للرياح</li>
                      <li>• أقمشة الدفء الذكية</li>
                      <li>• طبقات العزل المرنة</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-green-800 mb-2">مواد متعددة المواسم</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• أقمشة تكيفية ذكية</li>
                      <li>• مواد قابلة للتعديل</li>
                      <li>• ألياف متغيرة الخصائص</li>
                      <li>• تقنيات الطبقات المدمجة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="layering-systems" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-orange-600 pr-4">
                أنظمة الطبقات
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">
                    نظام الطبقات الثلاث
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">1️⃣</span>
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">الطبقة الأساسية</h4>
                      <p className="text-gray-600 text-sm">إدارة الرطوبة وتنظيم الحرارة بجانب الجلد</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">2️⃣</span>
                      </div>
                      <h4 className="font-semibold text-green-800 mb-2">الطبقة العازلة</h4>
                      <p className="text-gray-600 text-sm">توفير الدفء والراحة الحرارية المطلوبة</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">3️⃣</span>
                      </div>
                      <h4 className="font-semibold text-orange-800 mb-2">الطبقة الخارجية</h4>
                      <p className="text-gray-600 text-sm">الحماية من العوامل الجوية الخارجية</p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 border-r-4 border-cyan-500 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyan-800 mb-3">
                    🔄 مزايا نظام الطبقات
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-cyan-700 mb-2">المرونة:</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• إضافة أو إزالة الطبقات حسب الحاجة</li>
                        <li>• تكيف سريع مع تغير الأجواء</li>
                        <li>• راحة مخصصة لكل فرد</li>
                        <li>• سهولة في الحركة والعمل</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-cyan-700 mb-2">الكفاءة:</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• تنظيم حراري أفضل</li>
                        <li>• توفير في التكاليف</li>
                        <li>• عمر أطول للقطع</li>
                        <li>• سهولة الصيانة والتنظيف</li>
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
                <Link href="/blog/flight-crew/flight-6" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/comfort_safety_airline_uniforms.webp"
                        alt="تقنيات الراحة الحديثة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-orange-600 transition-colors">
                        تقنيات الراحة والأمان في أزياء الطيران الحديثة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-16" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="التصميم الإرجونومي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-orange-600 transition-colors">
                        التصميم الإرجونومي في أزياء الطيران
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-15" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                        alt="المواد المستدامة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-orange-600 transition-colors">
                        المواد المستدامة في أزياء الطيران
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