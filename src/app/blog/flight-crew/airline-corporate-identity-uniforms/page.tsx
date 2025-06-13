import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaBuilding, FaStar, FaEye } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'أزياء الطيران وهوية الشركات: بناء العلامة التجارية | يونيفورم',
  description: 'استكشف العلاقة بين أزياء طاقم الطيران والهوية المؤسسية لشركات الطيران، وكيف تسهم الأزياء في بناء صورة العلامة التجارية وتعزيز قيمها.',
  keywords: 'الهوية المؤسسية، أزياء شركات الطيران، العلامة التجارية، التصميم المؤسسي، السعودية',
  openGraph: {
    title: 'أزياء الطيران وهوية الشركات: بناء العلامة التجارية',
    description: 'كيف تساهم أزياء الطيران في بناء الهوية المؤسسية وتعزيز العلامة التجارية',
    images: ['/images/flight_crew/crew_uniform_visual_identity.webp'],
  },
};

export default function ArticlePage() {
  const heroImage = '/images/flight_crew/crew_uniform_visual_identity.webp';
  const title = 'أزياء الطيران وهوية الشركات';
  const readingTime = '13 دقيقة';
  const publishDate = '٢٦ ديسمبر ٢٠٢٤';
  const author = 'خبراء الهوية المؤسسية والتصميم - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'identity-relationship', title: 'العلاقة بين الأزياء والهوية' },
    { id: 'evolution', title: 'تطور علاقة الأزياء بالهوية' },
    { id: 'identity-elements', title: 'عناصر بناء الهوية' },
    { id: 'case-studies', title: 'دراسات حالة نجاح' },
    { id: 'strategies', title: 'استراتيجيات التوافق' },
    { id: 'challenges', title: 'التحديات والفرص' },
    { id: 'future', title: 'مستقبل الهوية المؤسسية' },
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
                  <FaBuilding />
                  الهوية المؤسسية
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                كيف تصبح أزياء الطيران أدوات قوية لبناء الهوية المؤسسية وتعزيز العلامة التجارية
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
                استشارة هوية مؤسسية
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة في تطوير الهوية المؤسسية من خلال أزياء الطيران
              </p>
              <Link 
                href="/quote" 
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة مجانية
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
                  تمثل أزياء طاقم الطيران واجهة بصرية أساسية لشركات الطيران، وعنصراً محورياً في تشكيل هويتها المؤسسية وصورة علامتها التجارية. فهي ليست مجرد ملابس عمل وظيفية، بل هي رسائل مرئية تنقل قيم الشركة وثقافتها وتطلعاتها للمسافرين وللعالم.
                </p>
                
                <div className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-orange-600" />
                    قوة الهوية البصرية
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• تعزيز التعرف على العلامة التجارية</li>
                      <li>• نقل قيم ومبادئ الشركة</li>
                      <li>• بناء الثقة مع المسافرين</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• تمييز الخدمة عن المنافسين</li>
                      <li>• تعزيز ولاء العملاء</li>
                      <li>• إظهار الاحترافية والجودة</li>
                    </ul>
                  </div>
                </div>

                <p>
                  في هذا المقال، نستكشف العلاقة المتكاملة بين أزياء الطيران والهوية المؤسسية، ونسلط الضوء على كيفية تحويل هذه الأزياء إلى أدوات استراتيجية فعالة في بناء العلامة التجارية وتعزيز الصورة الذهنية لشركات الطيران في سوق تنافسي عالمي.
                </p>
              </div>
            </section>

            <section id="identity-relationship" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-orange-600 pr-4">
                العلاقة بين أزياء الطيران والهوية المؤسسية
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/cultural_aviation_uniforms.webp"
                    alt="الهوية البصرية في أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    أزياء الطيران كتجسيد للهوية البصرية
                  </h3>
                  <p className="text-gray-700">
                    تشكل أزياء الطيران جزءاً أساسياً من الهوية البصرية للشركة من خلال تطبيق ألوان العلامة التجارية وتدرجاتها على عناصر الزي المختلفة، واستخدام الشعار وعناصر التصميم المميزة في التفاصيل والإكسسوارات.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-800">العناصر الأساسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🎨 تطبيق ألوان العلامة التجارية</li>
                      <li>🏷️ دمج الشعار والعناصر المميزة</li>
                      <li>📐 انعكاس خطوط التصميم</li>
                      <li>✨ توحيد الأسلوب البصري</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/flight_crew/arab_airlines_uniforms.webp"
                    alt="تعبير الأزياء عن قيم الشركة"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-red-600/60 flex items-center">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">قوة التعبير البصري</h3>
                      <p className="text-lg mb-4">كل تفصيل في الزي يحكي قصة العلامة التجارية ويعكس قيمها</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-white/20 px-3 py-1 rounded-full">🎯 هوية واضحة</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">💎 قيم أصيلة</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🌟 تميز فريد</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">أزياء الطيران كناقل للقيم المؤسسية</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                        alt="الفخامة والرقي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الفخامة والرقي</h4>
                    <p className="text-sm text-gray-600">للشركات التي تستهدف قطاع الأعمال والدرجة الأولى</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="البساطة والعملية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">البساطة والعملية</h4>
                    <p className="text-sm text-gray-600">لشركات الطيران الاقتصادية التي تركز على القيمة</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_hospitality_uniforms.webp"
                        alt="الاستدامة والمسؤولية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الاستدامة والمسؤولية</h4>
                    <p className="text-sm text-gray-600">للشركات التي تتبنى القيم البيئية في استراتيجيتها</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="case-studies" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-orange-600 pr-4">
                دراسات حالة: نجاحات في ربط الأزياء بالهوية المؤسسية
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-800">
                    سنغافورة إيرلاينز: الهوية الآسيوية العالمية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-emerald-500 pl-4">
                        <h4 className="font-medium text-emerald-800 mb-2">التصميم الأيقوني</h4>
                        <p className="text-sm text-gray-700">
                          تصميم "سارونغ كيباي" الذي يجمع بين إرث ثقافات الملايو والصين والهند
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-medium text-teal-800 mb-2">الألوان المميزة</h4>
                        <p className="text-sm text-gray-700">
                          الألوان الزرقاء والذهبية التي تبرز قيم الفخامة والتميز
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-medium text-cyan-800 mb-2">الاستمرارية</h4>
                        <p className="text-sm text-gray-700">
                          الحفاظ على التصميم الأساسي مع تحديثات طفيفة على مدى عقود
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/cabin_crew_uniforms.webp"
                        alt="نموذج سنغافورة إيرلاينز"
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
                        <th className="border border-gray-300 p-4 text-right">الشركة</th>
                        <th className="border border-gray-300 p-4 text-right">العنصر المميز</th>
                        <th className="border border-gray-300 p-4 text-right">القيمة المنقولة</th>
                        <th className="border border-gray-300 p-4 text-right">التأثير</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">طيران الإمارات</td>
                        <td className="border border-gray-300 p-4">القبعة الحمراء والوشاح الأبيض</td>
                        <td className="border border-gray-300 p-4">الضيافة العربية الفاخرة</td>
                        <td className="border border-gray-300 p-4">تعرف عالمي فوري</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">إير فرانس</td>
                        <td className="border border-gray-300 p-4">التعاون مع مصممي الكوتور</td>
                        <td className="border border-gray-300 p-4">الأناقة الفرنسية العريقة</td>
                        <td className="border border-gray-300 p-4">رمز للذوق الرفيع</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">بريتش إيرويز</td>
                        <td className="border border-gray-300 p-4">التصاميم الكلاسيكية المحافظة</td>
                        <td className="border border-gray-300 p-4">التقاليد والعراقة البريطانية</td>
                        <td className="border border-gray-300 p-4">الثقة والموثوقية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">فيرجن أتلانتك</td>
                        <td className="border border-gray-300 p-4">القصات العصرية المبتكرة</td>
                        <td className="border border-gray-300 p-4">روح الشباب والتجديد</td>
                        <td className="border border-gray-300 p-4">الجاذبية للجيل الجديد</td>
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
                <Link href="/blog/flight-crew/flight-8" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/best_flight_crew_attire.webp"
                        alt="التصميم الثقافي في أزياء الطيران العربية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-orange-600 transition-colors">
                        التصميم الثقافي في أزياء شركات الطيران العربية: هوية وتراث
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-14" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/air_crew_suits.webp"
                        alt="علم نفس الألوان في أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-orange-600 transition-colors">
                        علم نفس الألوان في أزياء الطيران: كيف تؤثر الألوان على تجربة المسافرين
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/aviation-uniform-standards-2025" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/buy_air_crew_uniforms.webp"
                        alt="معايير أزياء الطيران 2025"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-orange-600 transition-colors">
                        معايير أزياء الطيران 2025: أحدث التوجهات والمواصفات
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