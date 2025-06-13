import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaRuler, FaStar, FaShieldAlt } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'اعتبارات تصميم زي شركات الطيران: المعايير والتقنيات الحديثة | يونيفورم',
  description: 'دليل شامل لاعتبارات تصميم أزياء شركات الطيران، يشمل المعايير الوظيفية، تقنيات الأقمشة، الهوية المؤسسية، والتوازن بين الجمال والأمان.',
  keywords: 'تصميم زي طيران، اعتبارات تصميم، معايير أزياء الطيران، هوية مؤسسية، تقنيات أقمشة، السعودية',
  openGraph: {
    title: 'اعتبارات تصميم زي شركات الطيران: المعايير والتقنيات الحديثة',
    description: 'دليل شامل لاعتبارات تصميم أزياء شركات الطيران',
    images: ['/images/aviation_uniforms/airline_uniform_design.webp'],
  },
};

export default function AirlineUniformDesignPage() {
  const heroImage = '/images/aviation_uniforms/airline_uniform_design.webp';
  const title = 'اعتبارات تصميم أزياء الطيران: توازن مثالي بين الوظيفة والأناقة';
  const readingTime = '13 دقيقة';
  const publishDate = '١٢ يناير ٢٠٢٥';
  const author = 'خبراء التصميم والهوية المؤسسية - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'functional-design', title: 'التصميم الوظيفي' },
    { id: 'safety-security', title: 'اعتبارات الأمان والسلامة' },
    { id: 'brand-identity', title: 'الهوية البصرية' },
    { id: 'comfort-ergonomics', title: 'الراحة والإرجونوميكا' },
    { id: 'cultural-aspects', title: 'الاعتبارات الثقافية' },
    { id: 'sustainability', title: 'الاستدامة' },
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
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaRuler />
                  اعتبارات التصميم
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                دليل شامل للاعتبارات الأساسية والمتقدمة في تصميم أزياء الطيران المثالية التي تجمع بين الأناقة والوظيفة
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
                تصميم مخصص؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة مجانية لتصميم أزياء طيران مخصصة لشركتك
              </p>
              <Link 
                href="/quote" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors block text-center text-sm font-medium"
              >
                طلب استشارة
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
                  تصميم أزياء الطيران يمثل تحدياً فريداً في عالم التصميم، حيث يجب التوفيق بين متطلبات متعددة ومعقدة. فهذا التصميم ليس مجرد زي عمل، بل هو بيان بصري للهوية المؤسسية، وأداة تسويقية قوية، ومعدات عمل يومية للطاقم، وعنصر أمان حيوي في بيئة الطيران.
                </p>
                
                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-blue-600" />
                    التحديات الرئيسية في تصميم أزياء الطيران
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>🎯 التوازن بين الأناقة والوظيفة</li>
                      <li>🛡️ الالتزام بمعايير الأمان الصارمة</li>
                      <li>🌍 التكيف مع البيئات المتنوعة</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>💼 تمثيل الهوية المؤسسية</li>
                      <li>👥 مراعاة الاختلافات الثقافية</li>
                      <li>♻️ تحقيق الاستدامة البيئية</li>
                    </ul>
                  </div>
                </div>

                <p>
                  في هذا المقال، نستكشف الاعتبارات الأساسية التي يجب مراعاتها عند تصميم أزياء الطيران، من الجوانب التقنية والوظيفية إلى الأبعاد الجمالية والثقافية. كما نتناول أفضل الممارسات والإرشادات العملية لضمان تحقيق تصميم ناجح يلبي جميع المتطلبات.
                </p>
              </div>
            </section>

            <section id="functional-design" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                التصميم الوظيفي
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/aviation_uniforms/functional_design.webp"
                    alt="التصميم الوظيفي لأزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    العناصر الوظيفية الأساسية
                  </h3>
                  <p className="text-gray-700">
                    الوظيفة هي حجر الأساس في تصميم أزياء الطيران. يجب أن يدعم التصميم أداء الطاقم لمهامهم اليومية بكفاءة وراحة، مع مراعاة طبيعة العمل الخاصة في بيئة الطيران.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-purple-800">المتطلبات الوظيفية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🧳 جيوب متعددة الأحجام للمعدات</li>
                      <li>🔧 سهولة الحركة والانحناء</li>
                      <li>🌡️ تنظيم حراري فعال</li>
                      <li>💧 مقاومة السوائل والبقع</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">
                  متطلبات التصميم حسب دور الطاقم
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">✈️</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الطيارون</h4>
                    <p className="text-gray-600 text-sm">جيوب للوثائق، راحة أثناء الجلوس الطويل</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">👩‍✈️</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">طاقم المقصورة</h4>
                    <p className="text-gray-600 text-sm">حرية حركة، مقاومة البقع، سهولة التنظيف</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🏃‍♂️</span>
                    </div>
                    <h4 className="font-semibold text-orange-800 mb-2">الطاقم الأرضي</h4>
                    <p className="text-gray-600 text-sm">متانة عالية، حماية من العوامل الجوية</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="safety-security" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                اعتبارات الأمان والسلامة
              </h2>

              <div className="space-y-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                    <FaShieldAlt className="text-red-600" />
                    معايير السلامة الإلزامية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-red-700">مقاومة الحريق:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• استخدام أقمشة مقاومة للهب</li>
                        <li>• تجنب المواد الاصطناعية القابلة للاشتعال</li>
                        <li>• اختبار جميع المكونات للامتثال</li>
                        <li>• شهادات معتمدة من هيئات الطيران</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-red-700">متطلبات الطوارئ:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• عدم إعاقة الحركة السريعة</li>
                        <li>• تجنب الإكسسوارات المتدلية</li>
                        <li>• ألوان مرئية في الظلام</li>
                        <li>• سهولة خلع المعدات عند الحاجة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-red-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">المعيار</th>
                        <th className="border border-gray-300 p-4 text-right">المتطلب</th>
                        <th className="border border-gray-300 p-4 text-right">طريقة الاختبار</th>
                        <th className="border border-gray-300 p-4 text-right">المرجع</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">مقاومة الحريق</td>
                        <td className="border border-gray-300 p-4">لا يشتعل لمدة 12 ثانية</td>
                        <td className="border border-gray-300 p-4">FAR 25.853</td>
                        <td className="border border-gray-300 p-4">إدارة الطيران الفيدرالية</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">قوة الشد</td>
                        <td className="border border-gray-300 p-4">حد أدنى 200 نيوتن</td>
                        <td className="border border-gray-300 p-4">ASTM D5034</td>
                        <td className="border border-gray-300 p-4">المعايير الأمريكية</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">مقاومة التمزق</td>
                        <td className="border border-gray-300 p-4">حد أدنى 40 نيوتن</td>
                        <td className="border border-gray-300 p-4">ISO 13937</td>
                        <td className="border border-gray-300 p-4">المنظمة الدولية للمعايير</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">ثبات الألوان</td>
                        <td className="border border-gray-300 p-4">درجة 4 أو أعلى</td>
                        <td className="border border-gray-300 p-4">ISO 105</td>
                        <td className="border border-gray-300 p-4">المنظمة الدولية للمعايير</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="brand-identity" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                الهوية البصرية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/aviation_uniforms/brand_identity.webp"
                    alt="الهوية البصرية في أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    تمثيل الهوية المؤسسية
                  </h3>
                  <p className="text-gray-700 text-sm">
                    زي الطيران هو السفير البصري للعلامة التجارية. يجب أن يعكس قيم الشركة وشخصيتها، ويترك انطباعاً إيجابياً لدى المسافرين، ويميز الشركة عن منافسيها في السوق.
                  </p>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-2">عناصر الهوية:</h4>
                    <ul className="text-sm space-y-1 text-indigo-700">
                      <li>🎨 الألوان المؤسسية</li>
                      <li>🏷️ الشعارات والرموز</li>
                      <li>✨ الطابع والأسلوب</li>
                      <li>🌟 التميز والتفرد</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                  استراتيجيات بناء الهوية البصرية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-indigo-700 mb-3">التماسك البصري:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• توحيد نظام الألوان عبر جميع القطع</li>
                      <li>• تطبيق نفس معايير الجودة والتشطيب</li>
                      <li>• استخدام نفس خطوط التصميم والأسلوب</li>
                      <li>• تنسيق الإكسسوارات والمكملات</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-700 mb-3">التميز التنافسي:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• ابتكار عناصر فريدة ومميزة</li>
                      <li>• دمج التراث الثقافي بطريقة عصرية</li>
                      <li>• استخدام تقنيات تصميم متطورة</li>
                      <li>• إضافة لمسات إبداعية مميزة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="comfort-ergonomics" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                الراحة والإرجونوميكا
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">
                    أسس التصميم الإرجونومي
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-800 mb-2">التحليل الحركي</h4>
                        <p className="text-sm text-gray-700">
                          دراسة حركات الطاقم اليومية لتصميم زي يدعم هذه الحركات
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-medium text-teal-800 mb-2">توزيع الوزن</h4>
                        <p className="text-sm text-gray-700">
                          توزيع وزن القطع والإكسسوارات بطريقة متوازنة على الجسم
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">النقاط الحرجة</h4>
                        <p className="text-sm text-gray-700">
                          تجنب الضغط على نقاط الجسم الحساسة مثل الأكتاف والرقبة
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/aviation_uniforms/ergonomic_design.webp"
                        alt="التصميم الإرجونومي لأزياء الطيران"
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
                      <span className="text-2xl">💪</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">المرونة</h4>
                    <p className="text-gray-600 text-sm">أقمشة تمتد وتنثني مع حركة الجسم</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌬️</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">التهوية</h4>
                    <p className="text-gray-600 text-sm">تصميم يسمح بتدفق الهواء والراحة الحرارية</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">التوازن</h4>
                    <p className="text-gray-600 text-sm">توزيع متوازن للعناصر والوزن</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/aviation-uniforms/airline-uniform-design-evolution" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/aviation_uniforms/airline_uniform_design.webp"
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
                        src="/images/aviation_uniforms/airline_uniform_design.webp"
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
                
                <Link href="/blog/aviation-uniforms/crew-aviation-on-uniform" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/aviation_uniforms/airline_uniform_design.webp"
                        alt="تأثير طاقم الطيران على الزي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        تأثير طاقم الطيران على الزي الموحد
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
