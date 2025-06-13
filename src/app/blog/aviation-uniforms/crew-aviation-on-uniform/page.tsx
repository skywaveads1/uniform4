import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaUsers, FaStar, FaComments } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تأثير طاقم الطيران على تصميم الزي: تجربة المستخدم في المقدمة | يونيفورم',
  description: 'كيف يؤثر طاقم الطيران على تصميم الأزياء الموحدة، من خلال التغذية الراجعة والاحتياجات العملية والتجربة اليومية لضمان أزياء عملية ومريحة.',
  keywords: 'تأثير طاقم الطيران على الزي، تجربة المستخدم، تصميم تشاركي، احتياجات الطاقم، تطوير الأزياء، السعودية',
  openGraph: {
    title: 'تأثير طاقم الطيران على تصميم الزي: تجربة المستخدم في المقدمة',
    description: 'كيف يشكل طاقم الطيران مستقبل تصميم الأزياء الموحدة',
    images: ['/images/aviation_uniforms/airline_uniform_design.webp'],
  },
};

export default function Article29Page() {
  const heroImage = '/images/aviation_uniforms/airline_uniform_design.webp';
  const title = 'تأثير طاقم الطيران على الزي الموحد: شراكة تصميمية تفاعلية وتطوير مستمر';
  const readingTime = '14 دقيقة';
  const publishDate = '٢١ يناير ٢٠٢٥';
  const author = 'خبراء التصميم التشاركي وتجربة المستخدم - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'feedback-systems', title: 'أنظمة التغذية الراجعة' },
    { id: 'design-collaboration', title: 'التعاون في التصميم' },
    { id: 'practical-needs', title: 'الاحتياجات العملية' },
    { id: 'user-experience', title: 'تجربة المستخدم' },
    { id: 'continuous-improvement', title: 'التطوير المستمر' },
    { id: 'case-studies', title: 'دراسات حالة' },
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
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaUsers />
                  تأثير الطاقم
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                استكشاف الدور المحوري لطاقم الطيران في تشكيل وتطوير تصاميم الأزياء الموحدة من خلال التعاون والتغذية الراجعة
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

            <div className="bg-gradient-to-br from-blue-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-blue-900">
                تصميم تشاركي؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                اشرك طاقمك في تطوير أزياء مثالية لاحتياجاتهم
              </p>
              <Link 
                href="/quote" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors block text-center text-sm font-medium"
              >
                ابدأ التصميم المشترك
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
                  يلعب طاقم الطيران دوراً محورياً في تشكيل وتطوير تصاميم الأزياء الموحدة. فهم ليسوا مجرد مرتدين للزي، بل شركاء أساسيون في عملية التصميم والتطوير المستمر. تجاربهم اليومية وملاحظاتهم العملية تقود الابتكار وتحسن الأداء الوظيفي للأزياء.
                </p>
                
                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-blue-600" />
                    محاور التأثير الرئيسية
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>💬 التغذية الراجعة المستمرة</li>
                      <li>🤝 التعاون في عملية التصميم</li>
                      <li>⚡ تحديد الاحتياجات العملية</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>🎯 تحسين تجربة المستخدم</li>
                      <li>🔄 التطوير والتحديث المستمر</li>
                      <li>📊 قياس الأداء والرضا</li>
                    </ul>
                  </div>
                </div>

                <p>
                  هذا التفاعل المستمر بين الطاقم والمصممين يضمن أن الأزياء لا تلبي المعايير الجمالية فحسب، بل تتفوق في الأداء العملي والراحة والوظيفة في بيئة العمل الحقيقية.
                </p>
              </div>
            </section>

            <section id="feedback-systems" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                أنظمة التغذية الراجعة
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    آليات جمع الملاحظات
                  </h3>
                  <p className="text-gray-700">
                    تطوير أنظمة فعالة لجمع وتحليل ملاحظات الطاقم حول الأزياء الحالية واقتراحات التحسين للإصدارات المستقبلية.
                  </p>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-indigo-800">طرق جمع الملاحظات:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>📱 استبيانات رقمية منتظمة</li>
                      <li>👥 جلسات نقاش جماعية</li>
                      <li>🎤 مقابلات فردية متعمقة</li>
                      <li>📊 مراقبة الاستخدام التفاعلي</li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/images/aviation_uniforms/crew_feedback_systems.jpeg"
                    alt="أنظمة التغذية الراجعة من طاقم الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                  منهجية التحليل والاستجابة
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📝</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">جمع البيانات</h4>
                    <p className="text-gray-600 text-sm">ملاحظات شاملة من جميع أفراد الطاقم</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">التحليل</h4>
                    <p className="text-gray-600 text-sm">تحليل أنماط وأولويات التحسين</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">التطبيق</h4>
                    <p className="text-gray-600 text-sm">تنفيذ التحسينات والتطويرات</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="design-collaboration" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                التعاون في التصميم
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    <FaComments className="text-purple-600" />
                    ورش العمل التشاركية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-purple-700">مراحل التعاون:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• جلسات العصف الذهني الأولية</li>
                        <li>• مراجعة النماذج الأولية</li>
                        <li>• اختبار العينات التجريبية</li>
                        <li>• التطوير النهائي المشترك</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-purple-700">أدوات التعاون:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• منصات التصميم التفاعلية</li>
                        <li>• نماذج ثلاثية الأبعاد</li>
                        <li>• تجارب الواقع الافتراضي</li>
                        <li>• التطبيقات المحمولة للتقييم</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-purple-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">مرحلة التعاون</th>
                        <th className="border border-gray-300 p-4 text-right">مشاركة الطاقم</th>
                        <th className="border border-gray-300 p-4 text-right">النتائج المتوقعة</th>
                        <th className="border border-gray-300 p-4 text-right">الأدوات المستخدمة</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">المفهوم الأولي</td>
                        <td className="border border-gray-300 p-4">تحديد الاحتياجات</td>
                        <td className="border border-gray-300 p-4">متطلبات واضحة</td>
                        <td className="border border-gray-300 p-4">استبيانات، مقابلات</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">التصميم الأولي</td>
                        <td className="border border-gray-300 p-4">مراجعة التصاميم</td>
                        <td className="border border-gray-300 p-4">تصاميم محسنة</td>
                        <td className="border border-gray-300 p-4">نماذج رقمية، عينات</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">النموذج الأولي</td>
                        <td className="border border-gray-300 p-4">اختبار عملي</td>
                        <td className="border border-gray-300 p-4">تقييم الأداء</td>
                        <td className="border border-gray-300 p-4">تجارب ميدانية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">التطوير النهائي</td>
                        <td className="border border-gray-300 p-4">موافقة نهائية</td>
                        <td className="border border-gray-300 p-4">منتج جاهز للإنتاج</td>
                        <td className="border border-gray-300 p-4">نماذج نهائية</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="practical-needs" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                الاحتياجات العملية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/aviation_uniforms/practical_needs.jpeg"
                    alt="الاحتياجات العملية لطاقم الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-800">
                    متطلبات بيئة العمل
                  </h3>
                  <p className="text-gray-700 text-sm">
                    فهم عميق لبيئة عمل طاقم الطيران وتحدياتها اليومية يقود تطوير حلول تصميمية عملية وفعالة تحسن من الأداء والراحة.
                  </p>
                  <div className="bg-teal-100 p-4 rounded-lg">
                    <h4 className="font-medium text-teal-800 mb-2">التحديات الرئيسية:</h4>
                    <ul className="text-sm space-y-1 text-teal-700">
                      <li>🕰️ ساعات العمل الطويلة</li>
                      <li>🌡️ تغيرات درجة الحرارة</li>
                      <li>💼 الحاجة للحركة المستمرة</li>
                      <li>🧳 حمل المعدات والأدوات</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">
                  تطوير الحلول العملية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">حلول التصميم:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• جيوب متعددة الوظائف</li>
                      <li>• أقمشة مقاومة للتجعد</li>
                      <li>• تصاميم قابلة للتعديل</li>
                      <li>• تقنيات التهوية المحسنة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">الابتكارات التقنية:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• مواد ذكية تتكيف مع البيئة</li>
                      <li>• أنظمة تنظيم الحرارة</li>
                      <li>• تقنيات مقاومة البقع</li>
                      <li>• خصائص مضادة للبكتيريا</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="user-experience" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                تجربة المستخدم
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-amber-800">
                    مؤشرات الرضا والأداء
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">😊</span>
                      </div>
                      <h4 className="font-semibold text-amber-800 mb-2">رضا الطاقم</h4>
                      <p className="text-gray-600 text-sm">مستوى الراحة والرضا العام</p>
                      <div className="mt-2 text-lg font-bold text-amber-600">94.2%</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h4 className="font-semibold text-green-800 mb-2">كفاءة الأداء</h4>
                      <p className="text-gray-600 text-sm">تحسن في سرعة أداء المهام</p>
                      <div className="mt-2 text-lg font-bold text-green-600">+18%</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">الوظيفية</h4>
                      <p className="text-gray-600 text-sm">تقييم الجوانب الوظيفية</p>
                      <div className="mt-2 text-lg font-bold text-blue-600">4.7/5</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="continuous-improvement" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                التطوير المستمر
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">دورة التحسين:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• مراجعة ربع سنوية للملاحظات</li>
                    <li>• تطبيق تحديثات دورية</li>
                    <li>• اختبار ميداني للتحسينات</li>
                    <li>• تقييم النتائج وقياس التأثير</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">مؤشرات النجاح:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• زيادة مستوى الرضا العام</li>
                    <li>• تحسن الأداء الوظيفي</li>
                    <li>• تقليل الشكاوى والمشاكل</li>
                    <li>• زيادة متانة وعمر الزي</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/aviation-uniforms/airline-uniform-design-considerations" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                        alt="اعتبارات تصميم أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        اعتبارات تصميم أزياء الطيران: توازن مثالي بين الوظيفة والأناقة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/aviation-uniforms/airline-uniform-design-evolution" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                        alt="تطور تصميم أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        تطور تصميم أزياء شركات الطيران: رحلة عبر الزمن
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/aviation-uniforms/aviation-uniform-standards-2025" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                        alt="معايير أزياء الطيران 2025"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
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