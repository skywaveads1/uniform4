import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaGlobe, FaStar, FaPlane } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'أزياء الطيران حول العالم: رحلة عبر القارات | يونيفورم',
  description: 'استكشف أشهر أزياء وزي طاقم الطيران حول العالم واكتشف كيف تعكس هذه الأزياء ثقافات وهويات الدول المختلفة.',
  keywords: 'أزياء الطيران العالمية، أزياء طاقم الطيران، الهوية الثقافية، شركات الطيران الدولية، السعودية',
  openGraph: {
    title: 'أزياء الطيران حول العالم: رحلة عبر القارات',
    description: 'تجول عبر القارات واكتشف أشهر أزياء طاقم الطيران وكيف تعكس الثقافات المختلفة',
    images: ['/images/flight_crew/air_crew_innovative_uniforms.webp'],
  },
};

export default function ArticlePage() {
  const heroImage = '/images/flight_crew/air_crew_innovative_uniforms.webp';
  const title = 'أزياء الطيران حول العالم';
  const readingTime = '18 دقيقة';
  const publishDate = '٢٤ ديسمبر ٢٠٢٤';
  const author = 'خبراء الثقافات العالمية والتصميم - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'asia', title: 'آسيا: تناغم التقاليد والحداثة' },
    { id: 'middle-east', title: 'الشرق الأوسط: التراث العربي' },
    { id: 'europe', title: 'أوروبا: الأناقة الكلاسيكية' },
    { id: 'africa', title: 'أفريقيا: ألوان نابضة بالحياة' },
    { id: 'americas', title: 'الأمريكتان: التقليد والابتكار' },
    { id: 'cultural-impact', title: 'التأثير الثقافي' },
    { id: 'future', title: 'مستقبل الأزياء العالمية' },
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
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaGlobe />
                  أزياء عالمية
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                رحلة استكشافية عبر القارات لاكتشاف أجمل أزياء طاقم الطيران وكيف تعكس الثقافات المتنوعة
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-teal-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-teal-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-teal-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-teal-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-teal-900">
                تصميم عالمي
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة في تصميم أزياء طيران تعكس هويتك الثقافية
              </p>
              <Link 
                href="/quote" 
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة مجانية
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-teal-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  تمثل أزياء طاقم الطيران حول العالم مرآة تعكس الهويات الثقافية للأمم والشعوب، وتجسد رؤية شركات الطيران وقيمها المؤسسية. على مر العقود، تطورت هذه الأزياء لتصبح رموزاً للفخر الوطني والتميز في خدمة الضيافة الجوية، مع الحفاظ على التوازن بين الهوية المحلية والمعايير العالمية.
                </p>
                
                <div className="bg-teal-50 border-r-4 border-teal-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-teal-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-teal-600" />
                    أزياء تحكي قصص الشعوب
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• تعكس الهوية الثقافية والوطنية</li>
                      <li>• تجسد قيم الضيافة والتراث</li>
                      <li>• تواكب التطورات العصرية</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• تحافظ على الأصالة والعراقة</li>
                      <li>• تعبر عن التنوع العالمي</li>
                      <li>• تبني جسور التفاهم الثقافي</li>
                    </ul>
                  </div>
                </div>

                <p>
                  في هذا المقال، سنأخذكم في رحلة افتراضية حول العالم لاستكشاف أشهر أزياء الطيران وأكثرها تميزاً، ونسلط الضوء على كيفية تأثر هذه الأزياء بالثقافات المحلية، والتقاليد، والبيئة، وكيف تطورت لتلبي متطلبات العصر الحديث دون فقدان أصالتها وهويتها الفريدة.
                </p>
              </div>
            </section>

            <section id="asia" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-teal-600 pr-4">
                آسيا: تناغم التقاليد والحداثة
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/cultural_aviation_uniforms.webp"
                    alt="أزياء الطيران الآسيوية"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    اليابان: أناقة شرقية بلمسة عصرية
                  </h3>
                  <p className="text-gray-700">
                    تعتبر أزياء شركات الطيران اليابانية مثالاً رائعاً للجمع بين التقاليد الشرقية والتصميم المعاصر، حيث تستوحي من نمط الكيمونو التقليدي مع ألوان حمراء وبيضاء تعكس ألوان العلم الياباني.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-800">العناصر المميزة:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🎌 استلهام من الكيمونو التقليدي</li>
                      <li>🔴 ألوان العلم الياباني</li>
                      <li>🎨 نقوش "سيزا" التقليدية</li>
                      <li>🌸 لمسات من الثقافة اليابانية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/flight_crew/arab_airlines_uniforms.webp"
                    alt="تنوع أزياء الطيران الآسيوية"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-cyan-600/60 flex items-center">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">سنغافورة إيرلاينز: أيقونة عالمية</h3>
                      <p className="text-lg mb-4">الساري المعدل "سارونغ كيباي" الذي يمزج بين التأثيرات الثقافية المتنوعة</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-white/20 px-3 py-1 rounded-full">🌏 تنوع ثقافي</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">✨ أناقة عالمية</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🎭 تراث آسيوي</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">الصين: المزج بين التراث والمستقبل</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="الفستان الصيني التقليدي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الفستان الصيني "تشيباو"</h4>
                    <p className="text-sm text-gray-600">مصدر إلهام للخطوط الجوية الصينية مع تعديلات عصرية</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/cabin_crew_uniforms.webp"
                        alt="عناصر الأقليات العرقية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">تراث الأقليات العرقية</h4>
                    <p className="text-sm text-gray-600">دمج عناصر من الحرف التقليدية في التصاميم الحديثة</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_hospitality_uniforms.webp"
                        alt="الألوان التقليدية الصينية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الألوان الرمزية</h4>
                    <p className="text-sm text-gray-600">اللون الأحمر والذهبي كرموز للثقافة الصينية</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="middle-east" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-teal-600 pr-4">
                الشرق الأوسط: أناقة تعكس التراث العربي
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-amber-800">
                    الإمارات العربية المتحدة: رمز للفخامة
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-amber-500 pl-4">
                        <h4 className="font-medium text-amber-800 mb-2">القبعة الحمراء المميزة</h4>
                        <p className="text-sm text-gray-700">
                          مع الوشاح الأبيض الذي يستوحي تصميمه من الغترة التقليدية
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-medium text-orange-800 mb-2">اللون البيج الفاتح</h4>
                        <p className="text-sm text-gray-700">
                          يعكس جمال رمال الصحراء ويضفي طابعاً من الأناقة الهادئة
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-medium text-yellow-800 mb-2">التفاصيل الذهبية</h4>
                        <p className="text-sm text-gray-700">
                          تضفي طابع الفخامة والرقي المميز لطيران الإمارات
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/best_flight_crew_attire.webp"
                        alt="طيران الإمارات"
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
                      <tr className="bg-teal-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">الدولة</th>
                        <th className="border border-gray-300 p-4 text-right">شركة الطيران</th>
                        <th className="border border-gray-300 p-4 text-right">العنصر المميز</th>
                        <th className="border border-gray-300 p-4 text-right">الرمزية الثقافية</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">المملكة العربية السعودية</td>
                        <td className="border border-gray-300 p-4">الخطوط السعودية</td>
                        <td className="border border-gray-300 p-4">اللون الأخضر الوطني</td>
                        <td className="border border-gray-300 p-4">يعكس العلم السعودي والهوية الإسلامية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">قطر</td>
                        <td className="border border-gray-300 p-4">الخطوط القطرية</td>
                        <td className="border border-gray-300 p-4">اللون العنابي المميز</td>
                        <td className="border border-gray-300 p-4">مستوحى من العلم القطري والتراث العربي</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الكويت</td>
                        <td className="border border-gray-300 p-4">الخطوط الكويتية</td>
                        <td className="border border-gray-300 p-4">التصاميم المحتشمة الأنيقة</td>
                        <td className="border border-gray-300 p-4">تحترم الثقافة والتقاليد المحلية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">عُمان</td>
                        <td className="border border-gray-300 p-4">الطيران العُماني</td>
                        <td className="border border-gray-300 p-4">دمج الفن الإسلامي</td>
                        <td className="border border-gray-300 p-4">في النقوش والزخارف التراثية</td>
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
                        src="/images/flight_crew/crew_uniform_visual_identity.webp"
                        alt="التصميم الثقافي في أزياء الطيران العربية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-teal-600 transition-colors">
                        التصميم الثقافي في أزياء شركات الطيران العربية: هوية وتراث
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/airline-corporate-identity-uniforms" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/air_crew_suits.webp"
                        alt="أزياء الطيران وهوية الشركات"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-teal-600 transition-colors">
                        أزياء الطيران وهوية الشركات: بناء العلامة التجارية
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-14" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/buy_air_crew_uniforms.webp"
                        alt="علم نفس الألوان في أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-teal-600 transition-colors">
                        علم نفس الألوان في أزياء الطيران: كيف تؤثر الألوان على تجربة المسافرين
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