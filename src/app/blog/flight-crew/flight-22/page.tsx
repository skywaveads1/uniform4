import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaGraduationCap, FaStar, FaUsers } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'برامج التدريب على معايير أزياء الطيران: إعداد الطاقم للتميز المهني | يونيفورم',
  description: 'اكتشف أهمية برامج التدريب على معايير وبروتوكولات أزياء الطيران، وكيف تساهم في تطوير الطاقم وضمان الالتزام بأعلى معايير المظهر المهني.',
  keywords: 'تدريب أزياء الطيران، معايير المظهر المهني، برامج تطوير الطاقم، بروتوكولات الزي، السعودية',
  openGraph: {
    title: 'برامج التدريب على معايير أزياء الطيران: إعداد الطاقم للتميز المهني',
    description: 'برامج تدريبية شاملة لضمان الالتزام بمعايير أزياء الطيران وتطوير المظهر المهني',
    images: ['/images/flight_crew/crew_uniform_solutions.webp'],
  },
};

export default function Article22Page() {
  const heroImage = '/images/flight_crew/crew_uniform_solutions.webp';
  const title = 'برامج التدريب على معايير أزياء الطيران: إعداد الطاقم للتميز المهني';
  const readingTime = '11 دقيقة';
  const publishDate = '٢ يناير ٢٠٢٥';
  const author = 'خبراء التدريب والتطوير المهني - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'training-importance', title: 'أهمية التدريب على المعايير' },
    { id: 'program-components', title: 'مكونات البرامج التدريبية' },
    { id: 'practical-training', title: 'التدريب العملي والتطبيقي' },
    { id: 'assessment-methods', title: 'أساليب التقييم والمتابعة' },
    { id: 'continuous-development', title: 'التطوير المستمر' },
    { id: 'cultural-training', title: 'التدريب الثقافي والإقليمي' },
    { id: 'measuring-success', title: 'قياس نجاح البرامج' },
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
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaGraduationCap />
                  التدريب والتطوير
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                برامج متخصصة لإعداد وتأهيل طاقم الطيران وفقاً لأعلى معايير المظهر المهني والبروتوكولات الدولية
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

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-blue-900">
                برنامج تدريبي مخصص؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على برنامج تدريبي متخصص لطاقم الطيران في شركتك
              </p>
              <Link 
                href="/quote" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors block text-center text-sm font-medium"
              >
                طلب برنامج تدريبي
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
                  في عالم الطيران المعاصر، لا يكفي توفير أزياء عالية الجودة لطاقم الطيران، بل يجب أيضاً ضمان فهم الطاقم الكامل لمعايير ارتدائها وصيانتها والالتزام بالبروتوكولات المرتبطة بها. برامج التدريب على معايير أزياء الطيران تلعب دوراً محورياً في تحقيق التميز المهني وتعزيز صورة شركة الطيران أمام المسافرين.
                </p>
                
                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-blue-600" />
                    أهداف برامج التدريب على معايير الأزياء
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>🎯 ضمان الالتزام بالمعايير المهنية</li>
                      <li>✨ تعزيز الثقة والاحترافية</li>
                      <li>🛡️ الحفاظ على صورة العلامة التجارية</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>📚 نقل المعرفة والخبرات</li>
                      <li>🔄 تطوير المهارات المستمر</li>
                      <li>🤝 تعزيز روح الفريق الواحد</li>
                    </ul>
                  </div>
                </div>

                <p>
                  تشمل هذه البرامج التدريبية جوانب متعددة من المعرفة والمهارات العملية، بدءاً من فهم فلسفة تصميم الزي وانتهاءً بالتطبيق العملي للمعايير اليومية. كما تغطي الجوانب الثقافية والاجتماعية التي تؤثر على المظهر المهني في بيئات عمل متنوعة.
                </p>
              </div>
            </section>

            <section id="training-importance" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                أهمية التدريب على المعايير
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/corporate_flight_crew_uniforms.webp"
                    alt="أهمية التدريب على معايير الأزياء"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    تأثير التدريب على الأداء المهني
                  </h3>
                  <p className="text-gray-700">
                    التدريب المنهجي على معايير أزياء الطيران يحقق تحسناً ملموساً في مستوى الاحترافية والثقة بالنفس لدى أفراد الطاقم. هذا ينعكس إيجابياً على جودة الخدمة المقدمة وتجربة المسافرين الإجمالية.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-800">مؤشرات النجاح:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>📈 تحسن رضا المسافرين بنسبة 35%</li>
                      <li>🎯 زيادة الالتزام بالمعايير بنسبة 80%</li>
                      <li>💼 تعزيز الثقة المهنية بنسبة 60%</li>
                      <li>⭐ تحسين تقييمات الجودة الداخلية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">
                  الفوائد متعددة الأبعاد للتدريب
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">👤</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الفرد</h4>
                    <p className="text-gray-600 text-sm">زيادة الثقة والاحترافية والرضا الوظيفي</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">👥</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">الفريق</h4>
                    <p className="text-gray-600 text-sm">تماسك الفريق ووحدة المظهر والأهداف</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">الشركة</h4>
                    <p className="text-gray-600 text-sm">تعزيز السمعة وجودة الخدمة والتميز التنافسي</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="program-components" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                مكونات البرامج التدريبية
              </h2>

              <div className="space-y-8">
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                    <FaUsers className="text-indigo-600" />
                    المحاور الأساسية للبرنامج التدريبي
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-indigo-700">الجانب النظري:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• تاريخ وفلسفة تصميم أزياء الطيران</li>
                        <li>• المعايير الدولية والمحلية</li>
                        <li>• علم نفس المظهر والانطباع الأول</li>
                        <li>• الأسس الثقافية والاجتماعية</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-indigo-700">الجانب العملي:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• طرق ارتداء الزي الصحيحة</li>
                        <li>• تقنيات العناية والصيانة</li>
                        <li>• التعامل مع الحالات الطارئة</li>
                        <li>• البروتوكولات اليومية</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">المرحلة التدريبية</th>
                        <th className="border border-gray-300 p-4 text-right">المحتوى</th>
                        <th className="border border-gray-300 p-4 text-right">المدة</th>
                        <th className="border border-gray-300 p-4 text-right">طريقة التقييم</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">التوجيه الأولي</td>
                        <td className="border border-gray-300 p-4">مقدمة عامة ومعايير أساسية</td>
                        <td className="border border-gray-300 p-4">4 ساعات</td>
                        <td className="border border-gray-300 p-4">اختبار نظري</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">التدريب المتخصص</td>
                        <td className="border border-gray-300 p-4">تطبيقات عملية وحالات دراسية</td>
                        <td className="border border-gray-300 p-4">8 ساعات</td>
                        <td className="border border-gray-300 p-4">تقييم عملي</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">التدريب المتقدم</td>
                        <td className="border border-gray-300 p-4">حالات خاصة وبروتوكولات متقدمة</td>
                        <td className="border border-gray-300 p-4">6 ساعات</td>
                        <td className="border border-gray-300 p-4">مشروع تطبيقي</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">التطوير المستمر</td>
                        <td className="border border-gray-300 p-4">تحديثات وتطويرات جديدة</td>
                        <td className="border border-gray-300 p-4">2 ساعة/شهر</td>
                        <td className="border border-gray-300 p-4">تقييم دوري</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="practical-training" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                التدريب العملي والتطبيقي
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/crew_uniform_solutions.webp"
                    alt="التدريب العملي على أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-800">
                    ورش العمل التطبيقية
                  </h3>
                  <p className="text-gray-700 text-sm">
                    الجانب العملي يشكل العمود الفقري لبرامج التدريب، حيث يتم تطبيق المعرفة النظرية في بيئات محاكية لبيئة العمل الفعلية. هذا يضمن إتقان المهارات وبناء الثقة قبل التطبيق الميداني.
                  </p>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-800 mb-2">أساليب التدريب العملي:</h4>
                    <ul className="text-sm space-y-1 text-orange-700">
                      <li>🎭 المحاكاة والتمثيل</li>
                      <li>📹 التسجيل والمراجعة</li>
                      <li>👥 التدريب بالأقران</li>
                      <li>🔍 الملاحظة والتقييم المباشر</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">
                  سيناريوهات التدريب العملي
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-700 mb-3">المواقف اليومية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• التحضير للعمل والفحص الذاتي</li>
                      <li>• التعامل مع ملاحظات الركاب</li>
                      <li>• إجراءات ما بين الرحلات</li>
                      <li>• البروتوكولات في المطارات المختلفة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-3">الحالات الخاصة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• التعامل مع الطوارئ</li>
                      <li>• الرحلات الرسمية والبروتوكولية</li>
                      <li>• المناسبات الخاصة والاحتفالات</li>
                      <li>• التعامل مع وسائل الإعلام</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="assessment-methods" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                أساليب التقييم والمتابعة
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">
                    أدوات التقييم المتنوعة
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">التقييم النظري</h4>
                        <p className="text-sm text-gray-700">
                          اختبارات شاملة لقياس فهم المعايير والقواعد والبروتوكولات
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-medium text-pink-800 mb-2">التقييم العملي</h4>
                        <p className="text-sm text-gray-700">
                          تقييم الأداء الفعلي في مواقف محاكية ومراقبة مباشرة
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-medium text-indigo-800 mb-2">التقييم المستمر</h4>
                        <p className="text-sm text-gray-700">
                          متابعة دورية للأداء والالتزام بالمعايير في بيئة العمل
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                        alt="أساليب التقييم والمتابعة"
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
                      <span className="text-2xl">📊</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">التقييم الكمي</h4>
                    <p className="text-gray-600 text-sm">قياس الأداء بمؤشرات رقمية واضحة</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">التقييم النوعي</h4>
                    <p className="text-gray-600 text-sm">تقييم جودة الأداء والسلوك المهني</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">التحسين المستمر</h4>
                    <p className="text-gray-600 text-sm">تطوير الأداء بناءً على نتائج التقييم</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="continuous-development" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                التطوير المستمر
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/air_crew_attire.webp"
                    alt="برامج التطوير المستمر"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-800">
                    التعلم مدى الحياة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    في عالم متغير باستمرار، تحتاج معايير أزياء الطيران إلى تحديث مستمر. برامج التطوير المستمر تضمن مواكبة أحدث الاتجاهات والمعايير الدولية والتكيف مع التطورات الجديدة في الصناعة.
                  </p>
                  <div className="bg-teal-100 p-4 rounded-lg">
                    <h4 className="font-medium text-teal-800 mb-2">آليات التطوير:</h4>
                    <ul className="text-sm space-y-1 text-teal-700">
                      <li>🔄 ورش عمل دورية</li>
                      <li>📱 التعلم الإلكتروني التفاعلي</li>
                      <li>🌐 تبادل الخبرات الدولية</li>
                      <li>📈 تحديث المناهج باستمرار</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">
                  مراحل التطوير المهني
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">المرحلة الأساسية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• إتقان المعايير الأساسية</li>
                      <li>• تطبيق البروتوكولات اليومية</li>
                      <li>• بناء العادات الإيجابية</li>
                      <li>• تقييم الأداء الدوري</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">المرحلة المتقدمة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• التخصص في مجالات محددة</li>
                      <li>• تدريب الآخرين ونقل الخبرة</li>
                      <li>• المشاركة في تطوير المعايير</li>
                      <li>• القيادة والتوجيه</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/flight-crew/flight-17" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/comfort_safety_airline_uniforms.webp"
                        alt="لوائح ومعايير أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        لوائح ومعايير أزياء الطيران: دليل شامل للامتثال والسلامة
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
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        التصميم الإرجونومي في أزياء الطيران: الصحة والراحة أولاً
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-21" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/crew_uniform_visual_identity.webp"
                        alt="تخصيص أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        تخصيص وتفريد أزياء الطيران: اتجاهات حديثة في التصميم الشخصي
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