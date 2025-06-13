import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaPalette, FaStar, FaUserTie } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تخصيص وتفريد أزياء الطيران: اتجاهات حديثة في التصميم الشخصي | يونيفورم',
  description: 'اكتشف أحدث اتجاهات تخصيص وتفريد أزياء طاقم الطيران، وكيف تساهم في تعزيز الهوية الشخصية والمهنية مع الحفاظ على الوحدة والتماسك.',
  keywords: 'تخصيص أزياء الطيران، التفريد الشخصي، التصميم المخصص، الهوية المهنية، أزياء مخصصة، السعودية',
  openGraph: {
    title: 'تخصيص وتفريد أزياء الطيران: اتجاهات حديثة في التصميم الشخصي',
    description: 'اتجاهات التخصيص والتفريد في أزياء طاقم الطيران وتأثيرها على الأداء',
    images: ['/images/flight_crew/custom_crew_uniforms.webp'],
  },
};

export default function Article21Page() {
  const heroImage = '/images/flight_crew/custom_crew_uniforms.webp';
  const title = 'تخصيص وتفريد أزياء الطيران: اتجاهات حديثة في التصميم الشخصي';
  const readingTime = '13 دقيقة';
  const publishDate = '٣٠ ديسمبر ٢٠٢٤';
  const author = 'خبراء التصميم المخصص - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'customization-levels', title: 'مستويات التخصيص' },
    { id: 'personal-identity', title: 'الهوية الشخصية والمهنية' },
    { id: 'technical-solutions', title: 'الحلول التقنية المبتكرة' },
    { id: 'measurement-fitting', title: 'القياس والمطابقة المثالية' },
    { id: 'cultural-adaptation', title: 'التكيف الثقافي والإقليمي' },
    { id: 'cost-benefit', title: 'التكلفة والفوائد' },
    { id: 'future-personalization', title: 'مستقبل التفريد' },
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
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaPalette />
                  التخصيص والتفريد
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                عصر جديد من الأزياء المخصصة التي تجمع بين الطابع الشخصي والهوية المؤسسية
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-pink-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-pink-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-pink-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-pink-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-pink-900">
                تصميم مخصص؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على خدمة تصميم وتخصيص أزياء طاقم الطيران حسب احتياجاتك
              </p>
              <Link 
                href="/quote" 
                className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors block text-center text-sm font-medium"
              >
                طلب تصميم مخصص
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  في عالم يتجه بقوة نحو التفريد والتخصيص، تشهد صناعة أزياء الطيران تطوراً مثيراً نحو الأزياء المخصصة التي تعكس شخصية الفرد مع الحفاظ على الهوية المؤسسية. هذا التوجه الجديد يمثل توازناً دقيقاً بين التعبير الشخصي والانتماء المهني، مما يخلق تجربة عمل أكثر إشباعاً وثقة.
                </p>
                
                <div className="bg-pink-50 border-r-4 border-pink-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-pink-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-pink-600" />
                    فوائد التخصيص في أزياء الطيران
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>✨ تعزيز الثقة والرضا الشخصي</li>
                      <li>🎯 مطابقة مثالية لشكل الجسم</li>
                      <li>🌟 تحسين الأداء والراحة</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>💪 زيادة الولاء للشركة</li>
                      <li>🎨 التعبير عن الهوية الثقافية</li>
                      <li>📈 تحسين تجربة العملاء</li>
                    </ul>
                  </div>
                </div>

                <p>
                  التخصيص لا يعني فقط تعديل المقاسات، بل يشمل اختيار الألوان ضمن نطاق معين، وتفضيلات الأقمشة، وحتى التفاصيل الصغيرة مثل الأزرار والإكسسوارات. هذا النهج يتطلب نظاماً متطوراً لإدارة التنوع مع ضمان الوحدة والتماسك البصري للفريق.
                </p>
              </div>
            </section>

            <section id="customization-levels" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                مستويات التخصيص
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/crew_uniform_solutions.webp"
                    alt="الحلول التقنية للتخصيص"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    تدرج خيارات التخصيص
                  </h3>
                  <p className="text-gray-700">
                    يمكن تقسيم التخصيص إلى عدة مستويات تتراوح من التعديلات البسيطة إلى التصميم الكامل. كل مستوى يوفر درجة مختلفة من التفريد مع الحفاظ على المعايير المهنية والسلامة.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-purple-800">مستويات التخصيص:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🎯 التخصيص الأساسي (المقاسات فقط)</li>
                      <li>🎨 التخصيص المتوسط (ألوان وأقمشة)</li>
                      <li>✨ التخصيص المتقدم (تفاصيل وإكسسوارات)</li>
                      <li>🌟 التخصيص الكامل (تصميم فردي)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">
                  خيارات التخصيص المتاحة
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📏</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">التخصيص القياسي</h4>
                    <p className="text-gray-600 text-sm">مقاسات دقيقة وتعديلات طفيفة في القصة</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">التخصيص الجمالي</h4>
                    <p className="text-gray-600 text-sm">اختيار الألوان والأنماط ضمن المعايير</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">التخصيص الوظيفي</h4>
                    <p className="text-gray-600 text-sm">ميزات إضافية حسب المهام والاحتياجات</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="personal-identity" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                الهوية الشخصية والمهنية
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                    <FaUserTie className="text-indigo-600" />
                    توازن الهوية الشخصية والمؤسسية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-indigo-700">التعبير الشخصي:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• اختيار تفاصيل تعكس الشخصية</li>
                        <li>• مراعاة التفضيلات الثقافية</li>
                        <li>• تكييف الزي للاحتياجات الخاصة</li>
                        <li>• إضافة لمسات شخصية مناسبة</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-indigo-700">الهوية المؤسسية:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• الحفاظ على الألوان الأساسية</li>
                        <li>• تطبيق معايير السلامة</li>
                        <li>• ضمان الوحدة البصرية</li>
                        <li>• تعزيز صورة العلامة التجارية</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-pink-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">عنصر التخصيص</th>
                        <th className="border border-gray-300 p-4 text-right">الفائدة الشخصية</th>
                        <th className="border border-gray-300 p-4 text-right">الفائدة المؤسسية</th>
                        <th className="border border-gray-300 p-4 text-right">مستوى التحكم</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">المقاسات</td>
                        <td className="border border-gray-300 p-4">راحة مثالية</td>
                        <td className="border border-gray-300 p-4">مظهر احترافي</td>
                        <td className="border border-gray-300 p-4">كامل</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">الألوان</td>
                        <td className="border border-gray-300 p-4">تعبير شخصي</td>
                        <td className="border border-gray-300 p-4">هوية موحدة</td>
                        <td className="border border-gray-300 p-4">محدود</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الإكسسوارات</td>
                        <td className="border border-gray-300 p-4">لمسة شخصية</td>
                        <td className="border border-gray-300 p-4">تمييز الأدوار</td>
                        <td className="border border-gray-300 p-4">متوسط</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">التفاصيل</td>
                        <td className="border border-gray-300 p-4">تفرد وتميز</td>
                        <td className="border border-gray-300 p-4">جودة متسقة</td>
                        <td className="border border-gray-300 p-4">عالي</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="technical-solutions" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                الحلول التقنية المبتكرة
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                    alt="الحلول التقنية للتخصيص"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-800">
                    تقنيات التخصيص المتطورة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تستخدم أحدث التقنيات في تخصيص أزياء الطيران من المسح ثلاثي الأبعاد إلى التصميم بالذكاء الاصطناعي، مما يضمن دقة عالية وسرعة في التنفيذ مع الحفاظ على الجودة والمعايير المهنية.
                  </p>
                  <div className="bg-teal-100 p-4 rounded-lg">
                    <h4 className="font-medium text-teal-800 mb-2">التقنيات الحديثة:</h4>
                    <ul className="text-sm space-y-1 text-teal-700">
                      <li>📱 تطبيقات القياس الذكية</li>
                      <li>🎮 الواقع المعزز للتجربة</li>
                      <li>🤖 الذكاء الاصطناعي للتصميم</li>
                      <li>⚡ الطباعة ثلاثية الأبعاد</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">
                  منصات التخصيص الرقمية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">أدوات القياس الرقمية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• مسح ثلاثي الأبعاد للجسم</li>
                      <li>• قياسات دقيقة بالمليمتر</li>
                      <li>• تحليل وضعية الجسم</li>
                      <li>• توقع احتياجات الحركة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">منصات التصميم التفاعلية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• واجهات تصميم سهلة الاستخدام</li>
                      <li>• معاينة فورية للتغييرات</li>
                      <li>• مكتبة واسعة من الخيارات</li>
                      <li>• حفظ ومشاركة التصاميم</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="measurement-fitting" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                القياس والمطابقة المثالية
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">
                    علم القياس الدقيق
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">القياسات الأساسية</h4>
                        <p className="text-sm text-gray-700">
                          قياسات شاملة تشمل المحيط والطول والعرض لجميع أجزاء الجسم
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-medium text-indigo-800 mb-2">القياسات المتقدمة</h4>
                        <p className="text-sm text-gray-700">
                          تحليل الحركة ونقاط الضغط والمرونة المطلوبة
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">القياسات التكيفية</h4>
                        <p className="text-sm text-gray-700">
                          مراعاة التغيرات الموسمية والاحتياجات الخاصة
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="القياسات الدقيقة للأزياء"
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
                      <span className="text-2xl">📐</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">دقة القياس</h4>
                    <p className="text-gray-600 text-sm">قياسات بدقة تصل إلى المليمتر</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">مطابقة مثالية</h4>
                    <p className="text-gray-600 text-sm">توافق تام مع شكل الجسم</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">تحديث مستمر</h4>
                    <p className="text-gray-600 text-sm">متابعة التغيرات وإعادة التعديل</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="cultural-adaptation" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-pink-600 pr-4">
                التكيف الثقافي والإقليمي
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/cultural_aviation_uniforms.webp"
                    alt="التكيف الثقافي في التخصيص"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-800">
                    مراعاة التنوع الثقافي
                  </h3>
                  <p className="text-gray-700 text-sm">
                    يتطلب التخصيص في أزياء الطيران فهماً عميقاً للتنوع الثقافي والديني والإقليمي. هذا يشمل خيارات الأكمام الطويلة، والأقمشة المناسبة لمختلف المناخات، والألوان التي تتماشى مع التقاليد المحلية.
                  </p>
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <h4 className="font-medium text-amber-800 mb-2">اعتبارات ثقافية:</h4>
                    <ul className="text-sm space-y-1 text-amber-700">
                      <li>🕌 مراعاة التقاليد الدينية</li>
                      <li>🌍 التكيف مع المناخات المختلفة</li>
                      <li>🎨 الألوان المفضلة ثقافياً</li>
                      <li>👥 احترام التنوع الشخصي</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-amber-800">
                  خيارات التكيف الإقليمي
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-amber-700 mb-3">المنطقة العربية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• خيارات الأكمام الطويلة</li>
                      <li>• أقمشة مناسبة للحر</li>
                      <li>• ألوان تتماشى مع التقاليد</li>
                      <li>• قصات محتشمة ومريحة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-700 mb-3">المناطق الباردة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• طبقات إضافية للدفء</li>
                      <li>• أقمشة عازلة للحرارة</li>
                      <li>• ألوان تناسب البيئة</li>
                      <li>• قصات تسمح بالطبقات</li>
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
                        src="/images/flight_crew/crew_uniform_visual_identity.webp"
                        alt="اعتبارات تصميم زي شركات الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-pink-600 transition-colors">
                        اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-14" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/cultural_aviation_uniforms.webp"
                        alt="علم نفس الألوان"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-pink-600 transition-colors">
                        علم نفس الألوان في أزياء الطيران
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-8" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/arab_airlines_uniforms.webp"
                        alt="التصميم الثقافي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-pink-600 transition-colors">
                        التصميم الثقافي في أزياء شركات الطيران العربية
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