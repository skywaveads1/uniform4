import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaPlane, FaStar, FaAward } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز والاحترافية | يونيفورم',
  description: 'استكشف العوامل الحاسمة في تصميم أزياء شركات الطيران، من الجوانب الوظيفية والجمالية إلى معايير السلامة والهوية المؤسسية في صناعة الطيران.',
  keywords: 'تصميم زي شركات الطيران، أزياء طاقم الطائرة، معايير السلامة، الهوية المؤسسية، تصميم ملابس طيران، السعودية',
  openGraph: {
    title: 'اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز والاحترافية',
    description: 'استكشف العوامل الحاسمة في تصميم أزياء شركات الطيران العالمية',
    images: ['/images/flight_crew/airline_uniform_design.webp'],
  },
};

export default function Article1Page() {
  const heroImage = '/images/flight_crew/airline_uniform_design.webp';
  const title = 'اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز والاحترافية';
  const readingTime = '10 دقائق';
  const publishDate = '٢٨ نوفمبر ٢٠٢٤';
  const author = 'خبراء التصميم - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'functional-considerations', title: 'الاعتبارات الوظيفية والتشغيلية' },
    { id: 'safety-standards', title: 'معايير السلامة والأمان' },
    { id: 'brand-identity', title: 'الهوية المؤسسية والعلامة التجارية' },
    { id: 'cultural-factors', title: 'العوامل الثقافية والدولية' },
    { id: 'comfort-ergonomics', title: 'الراحة والهندسة البشرية' },
    { id: 'materials-technology', title: 'المواد والتقنيات الحديثة' },
    { id: 'design-process', title: 'عملية التصميم والتطوير' },
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
                <span className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaPlane />
                  دليل شامل
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                كل ما تحتاج معرفته حول العوامل الحاسمة في تصميم أزياء شركات الطيران العالمية
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

            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-blue-900">
                هل تحتاج تصميم أزياء طيران؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة لتصميم أزياء طيران عالمية المستوى
              </p>
              <Link 
                href="/quote" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors block text-center text-sm font-medium"
              >
                اطلب استشارة مجانية
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
                  في عالم الطيران المتنافس، تُعد أزياء طاقم الطائرة أكثر من مجرد ملابس عمل. إنها بيان بصري قوي يحمل هوية الشركة، ويعكس قيمها، ويترك انطباعاً دائماً لدى المسافرين حول العالم.
                </p>
                
                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-blue-600" />
                    لماذا تصميم أزياء الطيران مهم؟
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• تعزيز الهوية المؤسسية</li>
                      <li>• ضمان الراحة والأمان</li>
                      <li>• تحسين تجربة المسافرين</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• التميز في السوق العالمي</li>
                      <li>• رفع معنويات الطاقم</li>
                      <li>• الامتثال لمعايير الطيران</li>
                    </ul>
                  </div>
                </div>

                <p>
                  تصميم زي شركة الطيران عملية معقدة تتطلب موازنة دقيقة بين عوامل متعددة: الوظيفية والجمالية، السلامة والراحة، الهوية المحلية والمعايير الدولية. في هذا الدليل الشامل، نستكشف كل هذه الجوانب وأكثر.
                </p>
              </div>
            </section>

            <section id="functional-considerations" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                الاعتبارات الوظيفية والتشغيلية
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/cabin_crew_uniforms.webp"
                    alt="الاعتبارات الوظيفية"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-800">
                    متطلبات البيئة التشغيلية
                  </h3>
                  <p className="text-gray-700">
                    بيئة الطائرة تفرض تحديات فريدة على تصميم الأزياء، من المساحات الضيقة إلى التغيرات في الضغط ودرجات الحرارة.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-800">التحديات الرئيسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🔄 حرية الحركة في المساحات الضيقة</li>
                      <li>⏱️ المتانة لساعات العمل الطويلة</li>
                      <li>🌡️ التكيف مع تغيرات الحرارة</li>
                      <li>🧳 سهولة الحمل والتخزين</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                  التمييز والتعرف
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">👥</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">تمييز الطاقم</h4>
                    <p className="text-gray-600 text-sm">تصاميم تسهل على المسافرين التعرف على أفراد الطاقم</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">تمييز الرتب</h4>
                    <p className="text-gray-600 text-sm">عناصر بصرية واضحة لتمييز المناصب والمسؤوليات</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">الهوية الأمنية</h4>
                    <p className="text-gray-600 text-sm">تصاميم تعزز الثقة والأمان لدى المسافرين</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="safety-standards" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                معايير السلامة والأمان
              </h2>

              <div className="space-y-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                    🚨 متطلبات السلامة الإلزامية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-red-700">مقاومة الحريق:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• أقمشة معتمدة من هيئات الطيران المدني</li>
                        <li>• مواد لا تذوب أو تنقط عند التعرض للحرارة</li>
                        <li>• عدم إنتاج غازات سامة عند الاحتراق</li>
                        <li>• اختبارات صارمة وفق معايير FAA وEASA</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-red-700">اعتبارات الطوارئ:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• تصاميم لا تعيق الحركة السريعة</li>
                        <li>• غياب العناصر الحادة أو البارزة</li>
                        <li>• إمكانية الوصول السريع لمعدات الأمان</li>
                        <li>• ألوان عاكسة لتحسين الرؤية في الظلام</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-48">
                    <Image
                      src="/images/flight_crew/safety_equipment.webp"
                      alt="معدات السلامة"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-800">
                      المعايير الدولية
                    </h3>
                    <p className="text-gray-700 text-sm">
                      تخضع أزياء الطيران لمعايير صارمة من منظمات الطيران المدني العالمية، مما يضمن أعلى مستويات الأمان للطاقم والمسافرين.
                    </p>
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">الجهات المنظمة:</h4>
                      <ul className="text-sm space-y-1 text-blue-700">
                        <li>✓ إدارة الطيران الفيدرالية (FAA)</li>
                        <li>✓ وكالة سلامة الطيران الأوروبية (EASA)</li>
                        <li>✓ منظمة الطيران المدني الدولي (ICAO)</li>
                        <li>✓ الهيئة العامة للطيران المدني السعودي</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="brand-identity" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                الهوية المؤسسية والعلامة التجارية
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    بناء الهوية البصرية القوية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">الألوان المؤسسية</h4>
                        <p className="text-sm text-gray-700">
                          استخدام لوحة ألوان متسقة تعكس شخصية العلامة التجارية وتعزز التعرف عليها
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-800 mb-2">الشعار والرموز</h4>
                        <p className="text-sm text-gray-700">
                          دمج الشعار والرموز المؤسسية بطريقة أنيقة ومناسبة لبيئة العمل
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">التصميم المتسق</h4>
                        <p className="text-sm text-gray-700">
                          ضمان التناغم بين جميع عناصر الزي وبقية الهوية البصرية للشركة
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/corporate_identity_uniforms.webp"
                        alt="الهوية المؤسسية"
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
                        <th className="border border-gray-300 p-4 text-right">العنصر</th>
                        <th className="border border-gray-300 p-4 text-right">الهدف</th>
                        <th className="border border-gray-300 p-4 text-right">التطبيق</th>
                        <th className="border border-gray-300 p-4 text-right">الأثر</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الألوان الأساسية</td>
                        <td className="border border-gray-300 p-4">التعرف الفوري</td>
                        <td className="border border-gray-300 p-4">الملابس والإكسسوارات</td>
                        <td className="border border-gray-300 p-4">تعزيز الهوية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">الشعار المطرز</td>
                        <td className="border border-gray-300 p-4">الاحترافية</td>
                        <td className="border border-gray-300 p-4">الصدر والأكمام</td>
                        <td className="border border-gray-300 p-4">الثقة والمصداقية</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">التصميم المتميز</td>
                        <td className="border border-gray-300 p-4">التفرد</td>
                        <td className="border border-gray-300 p-4">القصات والتفاصيل</td>
                        <td className="border border-gray-300 p-4">التميز التنافسي</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="cultural-factors" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                العوامل الثقافية والدولية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800">التنوع الثقافي</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">الاعتبارات الدينية</h4>
                      <p className="text-sm text-gray-700">
                        تصاميم تحترم المتطلبات الدينية المختلفة للطاقم العالمي
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">التقاليد المحلية</h4>
                      <p className="text-sm text-gray-700">
                        دمج عناصر من التراث المحلي بطريقة عصرية ومناسبة
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">المعايير الدولية</h4>
                      <p className="text-sm text-gray-700">
                        ضمان قبول التصاميم في جميع الدول والثقافات المختلفة
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-80">
                  <Image
                    src="/images/flight_crew/international_crew.webp"
                    alt="التنوع الثقافي"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  نماذج عالمية مميزة
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-2xl">🕌</span>
                    </div>
                    <h4 className="font-semibold mb-2">الخطوط السعودية</h4>
                    <p className="text-sm text-gray-700">دمج التراث العربي مع الحداثة</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-2xl">🌸</span>
                    </div>
                    <h4 className="font-semibold mb-2">الخطوط اليابانية</h4>
                    <p className="text-sm text-gray-700">الأناقة اليابانية والبساطة</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-2xl">⚜️</span>
                    </div>
                    <h4 className="font-semibold mb-2">الخطوط الفرنسية</h4>
                    <p className="text-sm text-gray-700">الأناقة الباريسية الكلاسيكية</p>
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
                        src="/images/flight_crew/flight_crew_uniform_fabrics.webp"
                        alt="أقمشة زي طاقم الطائرة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-3" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/female_male_air_crew_wear.webp"
                        alt="أزياء الطيران النسائية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        أزياء الطيران النسائية: تطورها وخصائصها الحديثة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-5" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/uniforms_saudi_arabia.webp"
                        alt="تأثير الثقافة المحلية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        تأثير الثقافة المحلية على تصميم أزياء شركات الطيران
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