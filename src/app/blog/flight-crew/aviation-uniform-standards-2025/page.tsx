import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaRocket, FaStar, FaCogs } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'معايير أزياء الطيران 2025: أحدث التوجهات والمواصفات | يونيفورم',
  description: 'نظرة استشرافية على مستقبل معايير أزياء الطيران في 2025، من التقنيات المتطورة والمواد المستدامة إلى المتطلبات التنظيمية الجديدة والتوجهات التصميمية.',
  keywords: 'معايير أزياء الطيران 2025، مستقبل الطيران، التقنيات المتطورة، المواد المستدامة، السعودية',
  openGraph: {
    title: 'معايير أزياء الطيران 2025: أحدث التوجهات والمواصفات',
    description: 'استشراف مستقبل معايير أزياء الطيران والتقنيات المتطورة',
    images: ['/images/flight_crew/air_crew_innovative_uniforms.webp'],
  },
};

export default function ArticlePage() {
  const heroImage = '/images/flight_crew/air_crew_innovative_uniforms.webp';
  const title = 'معايير أزياء الطيران 2025: أحدث التوجهات والمواصفات';
  const readingTime = '15 دقيقة';
  const publishDate = '٢٨ ديسمبر ٢٠٢٤';
  const author = 'خبراء التطوير والابتكار - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'regulatory-requirements', title: 'المتطلبات التنظيمية الجديدة' },
    { id: 'advanced-technologies', title: 'التقنيات المتطورة' },
    { id: 'design-trends', title: 'الاتجاهات التصميمية' },
    { id: 'integrated-technology', title: 'التكنولوجيا المدمجة' },
    { id: 'health-challenges', title: 'التحديات الصحية العالمية' },
    { id: 'sustainability', title: 'الاستدامة والمستقبل' },
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
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaRocket />
                  مستقبل الطيران
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                نظرة استشرافية على مستقبل معايير أزياء الطيران مع أحدث التقنيات والابتكارات
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

            <div className="bg-gradient-to-br from-purple-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-purple-900">
                استشارة مستقبلية
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة حول تطبيق معايير المستقبل في أزياء الطيران
              </p>
              <Link 
                href="/quote" 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة مجانية
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
                  مع اقترابنا من منتصف العقد الثالث من القرن الحادي والعشرين، تشهد صناعة الطيران تحولات جذرية تمتد تأثيراتها إلى جميع جوانب العمليات، بما في ذلك أزياء طاقم الطائرة. تجمع معايير أزياء الطيران لعام 2025 بين الاستجابة للتحديات العالمية المتنامية، والتطورات التكنولوجية المتسارعة، والتغيرات في توقعات المسافرين والموظفين.
                </p>
                
                <div className="bg-purple-50 border-r-4 border-purple-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-purple-600" />
                    مستقبل أزياء الطيران
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• تقنيات ذكية مدمجة</li>
                      <li>• مواد مستدامة وصديقة للبيئة</li>
                      <li>• تصاميم متكيفة مع المناخ</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• معايير سلامة محدثة</li>
                      <li>• حماية صحية متقدمة</li>
                      <li>• راحة وأداء محسن</li>
                    </ul>
                  </div>
                </div>

                <p>
                  في هذا المقال، نستشرف المستقبل القريب لنسلط الضوء على أحدث المعايير والتوجهات التي ستشكل أزياء الطيران في عام 2025، بدءاً من المواصفات التقنية والمتطلبات التنظيمية، مروراً بالمواد المبتكرة والتصاميم المستدامة، وصولاً إلى التكامل مع التكنولوجيا الذكية والاستجابة للتحديات الصحية العالمية.
                </p>
              </div>
            </section>

            <section id="regulatory-requirements" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                المتطلبات التنظيمية الجديدة
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/best_flight_crew_attire.webp"
                    alt="معايير السلامة المحدثة 2025"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    معايير السلامة المحدثة
                  </h3>
                  <p className="text-gray-700">
                    تطورات مهمة في اشتراطات السلامة تشمل معيار FAR-2025 المحدث لمقاومة الحريق بمعدلات أعلى من سابقه، ومتطلبات جديدة للحماية من الإشعاع خاصة للرحلات على ارتفاعات عالية والرحلات القطبية.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-800">التطورات الجديدة:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🔥 معيار FAR-2025 المحدث</li>
                      <li>🛡️ حماية من الإشعاع</li>
                      <li>🌡️ اختبارات حرارية متقدمة</li>
                      <li>💨 معايير انبعاث محسنة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/flight_crew/crew_uniform_visual_identity.webp"
                    alt="التطورات التنظيمية في صناعة الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/60 flex items-center">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">المستقبل هنا الآن</h3>
                      <p className="text-lg mb-4">معايير جديدة تعيد تعريف صناعة أزياء الطيران</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-white/20 px-3 py-1 rounded-full">🚀 ابتكار</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🛡️ سلامة</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🌱 استدامة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">التشريعات البيئية الجديدة</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/cabin_crew_uniforms.webp"
                        alt="قوانين بيئية جديدة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">حظر المواد الضارة</h4>
                    <p className="text-sm text-gray-600">قوانين عالمية تحظر استخدام مواد معينة ذات تأثير بيئي سلبي</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="مواد معاد تدويرها"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">المواد المعاد تدويرها</h4>
                    <p className="text-sm text-gray-600">اشتراط الحد الأدنى 30% من المحتوى المعاد تدويره</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/captain_copilot_wear.webp"
                        alt="تتبع سلسلة التوريد"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">تتبع سلسلة التوريد</h4>
                    <p className="text-sm text-gray-600">متطلبات التتبع الكامل لضمان الشفافية البيئية</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="advanced-technologies" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                التقنيات المتطورة في أقمشة الطيران
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-800">
                    الأقمشة الذكية المتكيفة
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-medium text-cyan-800 mb-2">تقنية Adaptive Comfort™</h4>
                        <p className="text-sm text-gray-700">
                          أقمشة تعدل خصائصها تلقائياً استجابة لدرجات الحرارة المختلفة
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">مواد PCM الجيل الثالث</h4>
                        <p className="text-sm text-gray-700">
                          قدرة أكبر على تخزين وإطلاق الحرارة لتنظيم درجة حرارة الجسم
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-medium text-teal-800 mb-2">النسيج متغير المسامية</h4>
                        <p className="text-sm text-gray-700">
                          يزيد من تدفق الهواء عند ارتفاع درجة حرارة الجسم
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/comfort_safety_airline_uniforms.webp"
                        alt="الأقمشة الذكية المتكيفة"
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
                      <tr className="bg-purple-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">التقنية</th>
                        <th className="border border-gray-300 p-4 text-right">الوصف</th>
                        <th className="border border-gray-300 p-4 text-right">الفائدة الرئيسية</th>
                        <th className="border border-gray-300 p-4 text-right">متوقع التطبيق</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">Mylo™ الفطري</td>
                        <td className="border border-gray-300 p-4">ألياف مشتقة من خيوط الفطر</td>
                        <td className="border border-gray-300 p-4">بديل نباتي للجلود</td>
                        <td className="border border-gray-300 p-4">2025</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">Piñatex المطور</td>
                        <td className="border border-gray-300 p-4">من ألياف أوراق الأناناس</td>
                        <td className="border border-gray-300 p-4">استدامة عالية ومتانة</td>
                        <td className="border border-gray-300 p-4">2025</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">SeaCell™</td>
                        <td className="border border-gray-300 p-4">خيوط محتوية على طحالب بحرية</td>
                        <td className="border border-gray-300 p-4">خصائص مضادة للأكسدة</td>
                        <td className="border border-gray-300 p-4">2025</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">Nullarbor™</td>
                        <td className="border border-gray-300 p-4">سليلوز مخمر بدون زراعة</td>
                        <td className="border border-gray-300 p-4">توفير الموارد الزراعية</td>
                        <td className="border border-gray-300 p-4">2026</td>
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
                      <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                        المواد المستدامة في أزياء الطيران: ثورة خضراء في السماء
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-16" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/air_hospitality_uniforms.webp"
                        alt="التصميم الإرجونومي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                        التصميم الإرجونومي في أزياء الطيران: الصحة والراحة أولاً
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/cabin-crew-uniform-fabric-selection" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/buy_air_crew_uniforms.webp"
                        alt="اختيار أقمشة زي طاقم الطائرة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                        اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
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