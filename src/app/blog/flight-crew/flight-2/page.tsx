import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaFlask, FaStar, FaLeaf } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'اختيار أقمشة زي طاقم الطائرة: دليل الجودة والمتانة والابتكار | يونيفورم',
  description: 'دليل شامل حول اختيار الأقمشة المناسبة لأزياء طاقم الطائرة، مع التركيز على معايير الجودة والمتانة والراحة والسلامة والتقنيات الحديثة.',
  keywords: 'أقمشة زي طاقم الطائرة، جودة الأقمشة، أقمشة مقاومة الحريق، تقنيات النسيج، ملابس طيران، السعودية',
  openGraph: {
    title: 'اختيار أقمشة زي طاقم الطائرة: دليل الجودة والمتانة والابتكار',
    description: 'دليل شامل حول اختيار الأقمشة المناسبة لأزياء طيران',
    images: ['/images/flight_crew/flight_crew_uniform_fabrics.webp'],
  },
};

export default function Article2Page() {
  const heroImage = '/images/flight_crew/flight_crew_uniform_fabrics.webp';
  const title = 'اختيار أقمشة زي طاقم الطائرة: دليل الجودة والمتانة والابتكار';
  const readingTime = '9 دقائق';
  const publishDate = '٣٠ نوفمبر ٢٠٢٤';
  const author = 'خبراء الأقمشة والنسيج - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'selection-criteria', title: 'معايير اختيار الأقمشة' },
    { id: 'fabric-types', title: 'أنواع الأقمشة المناسبة' },
    { id: 'safety-requirements', title: 'متطلبات السلامة' },
    { id: 'modern-technologies', title: 'التقنيات الحديثة' },
    { id: 'sustainability', title: 'الاستدامة والبيئة' },
    { id: 'testing-standards', title: 'اختبارات الجودة والمعايير' },
    { id: 'care-maintenance', title: 'العناية والصيانة' },
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
                <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaFlask />
                  تقنيات متقدمة
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                اكتشف أسرار اختيار الأقمشة المثالية لأزياء الطيران الحديثة
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-green-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-green-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-green-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-green-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-green-900">
                تحتاج أقمشة عالية الجودة؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة لاختيار أفضل الأقمشة لأزياء طيران متينة وآمنة
              </p>
              <Link 
                href="/quote" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة مجانية
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  في عالم الطيران حيث تجتمع التقنية المتطورة مع التحديات البيئية القاسية، تلعب الأقمشة دوراً محورياً في تحديد نجاح زي طاقم الطائرة. فهي ليست مجرد مواد تُحاك منها الملابس، بل هي تقنية متقدمة تضمن الأمان والراحة والأناقة في آن واحد.
                </p>
                
                <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-green-600" />
                    لماذا اختيار الأقمشة مهم؟
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• ضمان السلامة والامتثال للمعايير</li>
                      <li>• توفير الراحة القصوى للطاقم</li>
                      <li>• المتانة وطول العمر الافتراضي</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• الحفاظ على المظهر الاحترافي</li>
                      <li>• مقاومة الظروف البيئية القاسية</li>
                      <li>• سهولة العناية والصيانة</li>
                    </ul>
                  </div>
                </div>

                <p>
                  اختيار الأقمشة المناسبة لأزياء طاقم الطائرة يتطلب فهماً عميقاً للتحديات الفريدة التي تواجه هذه الصناعة، بدءاً من متطلبات مقاومة الحريق الصارمة، وصولاً إلى الحاجة لأقمشة تحافظ على أناقتها بعد ساعات طويلة من العمل في بيئات متغيرة.
                </p>
              </div>
            </section>

            <section id="selection-criteria" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                معايير اختيار الأقمشة
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/fabric_testing.webp"
                    alt="اختبار الأقمشة"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    المعايير الأساسية للاختيار
                  </h3>
                  <p className="text-gray-700">
                    عملية اختيار الأقمشة تخضع لمعايير صارمة تضمن تلبية جميع المتطلبات التشغيلية والأمنية.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-800">المعايير الرئيسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🔥 مقاومة الحريق والاشتعال</li>
                      <li>💪 القوة والمتانة</li>
                      <li>😌 الراحة وقابلية التنفس</li>
                      <li>🧼 سهولة العناية والتنظيف</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">
                  الخصائص الفيزيائية المطلوبة
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الوزن المثالي</h4>
                    <p className="text-gray-600 text-sm">أقمشة خفيفة تقلل من إجهاد الطاقم خلال الرحلات الطويلة</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🌬️</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">النفاذية</h4>
                    <p className="text-gray-600 text-sm">تهوية ممتازة لضمان الراحة في بيئة المقصورة</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">المرونة</h4>
                    <p className="text-gray-600 text-sm">مرونة كافية لحرية الحركة أثناء أداء المهام</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="fabric-types" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                أنواع الأقمشة المناسبة
              </h2>

              <div className="space-y-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    🧵 الأقمشة الطبيعية المعالجة
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-blue-700">الصوف المعالج:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• خصائص طبيعية لمقاومة الحريق</li>
                        <li>• مظهر فاخر ومناسب للبدلات الرسمية</li>
                        <li>• قدرة على تنظيم درجة الحرارة</li>
                        <li>• متانة عالية مع العناية المناسبة</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-blue-700">القطن المطور:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• راحة فائقة وملمس ناعم</li>
                        <li>• معالجات خاصة لمقاومة التجعد</li>
                        <li>• امتصاص ممتاز للرطوبة</li>
                        <li>• سهولة في العناية والتنظيف</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-green-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">نوع القماش</th>
                        <th className="border border-gray-300 p-4 text-right">المميزات الرئيسية</th>
                        <th className="border border-gray-300 p-4 text-right">الاستخدام المثالي</th>
                        <th className="border border-gray-300 p-4 text-right">التقييم</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">بوليستر عالي الأداء</td>
                        <td className="border border-gray-300 p-4">مقاومة التجعد، المتانة</td>
                        <td className="border border-gray-300 p-4">القمصان والبلوزات</td>
                        <td className="border border-gray-300 p-4">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">خلطة صوف-بوليستر</td>
                        <td className="border border-gray-300 p-4">أناقة، متانة، سهولة عناية</td>
                        <td className="border border-gray-300 p-4">البدلات والسترات</td>
                        <td className="border border-gray-300 p-4">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الأقمشة التقنية</td>
                        <td className="border border-gray-300 p-4">خصائص متقدمة، ذكية</td>
                        <td className="border border-gray-300 p-4">الاستخدامات الخاصة</td>
                        <td className="border border-gray-300 p-4">⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">مخلوط القطن المطور</td>
                        <td className="border border-gray-300 p-4">راحة، تنفس، طبيعية</td>
                        <td className="border border-gray-300 p-4">الملابس الداخلية</td>
                        <td className="border border-gray-300 p-4">⭐⭐⭐⭐</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="safety-requirements" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                متطلبات السلامة
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/fire_resistant_fabric.webp"
                    alt="أقمشة مقاومة للحريق"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-800">
                    مقاومة الحريق الإلزامية
                  </h3>
                  <p className="text-gray-700 text-sm">
                    جميع أقمشة أزياء الطيران يجب أن تمر باختبارات صارمة لمقاومة الحريق وفقاً لمعايير الطيران المدني الدولية.
                  </p>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">المعايير المطلوبة:</h4>
                    <ul className="text-sm space-y-1 text-red-700">
                      <li>✓ اختبار FAR 25.853 للطيران المدني</li>
                      <li>✓ معيار ASTM D6413 للمواد النسيجية</li>
                      <li>✓ اختبار OSU (Ohio State University)</li>
                      <li>✓ معيار CS 25.853 الأوروبي</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  💡 تنبيه مهم حول السلامة
                </h3>
                <p className="text-yellow-700">
                  استخدام أقمشة غير معتمدة في أزياء الطيران يمكن أن يؤدي إلى مخاطر جسيمة على سلامة الطاقم والمسافرين، بالإضافة إلى مخالفات قانونية وإلغاء تراخيص التشغيل. لذلك، التأكد من حصول جميع الأقمشة على الشهادات المطلوبة أمر غير قابل للتفاوض.
                </p>
              </div>
            </section>

            <section id="modern-technologies" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                التقنيات الحديثة
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    الابتكارات في عالم الأقمشة التقنية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">الألياف النانوية</h4>
                        <p className="text-sm text-gray-700">
                          تقنية متقدمة تنتج أقمشة فائقة الخفة مع خصائص مضادة للبكتيريا ومقاومة للبقع
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-800 mb-2">الأقمشة الذكية</h4>
                        <p className="text-sm text-gray-700">
                          مواد تتفاعل مع البيئة المحيطة وتعدل خصائصها لتوفير راحة مثلى
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">تقنية التحكم في الرطوبة</h4>
                        <p className="text-sm text-gray-700">
                          أقمشة تنقل الرطوبة بعيداً عن الجسم وتجففها بسرعة فائقة
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/smart_fabric_technology.webp"
                        alt="تقنيات الأقمشة الذكية"
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
                      <span className="text-2xl">🔬</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">المعالجات المضادة للميكروبات</h4>
                    <p className="text-gray-600 text-sm">حماية مستمرة ضد البكتيريا والفطريات</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">الحماية من الأشعة فوق البنفسجية</h4>
                    <p className="text-gray-600 text-sm">حماية فعالة للطاقم من أشعة الشمس الضارة</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌡️</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">تنظيم درجة الحرارة</h4>
                    <p className="text-gray-600 text-sm">تكيف تلقائي مع تغيرات درجة الحرارة</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="sustainability" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                الاستدامة والبيئة
              </h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <FaLeaf className="text-green-600" />
                  التوجه نحو الأقمشة المستدامة
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-green-700">المواد المعاد تدويرها:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• ألياف البوليستر من الزجاجات البلاستيكية</li>
                      <li>• القطن المعاد تدويره من النفايات النسيجية</li>
                      <li>• ألياف طبيعية من مصادر مستدامة</li>
                      <li>• أصباغ صديقة للبيئة وخالية من المواد الضارة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-green-700">عمليات التصنيع:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• تقليل استهلاك المياه في الإنتاج</li>
                      <li>• استخدام الطاقة المتجددة في المصانع</li>
                      <li>• تقليل النفايات والانبعاثات الكربونية</li>
                      <li>• حصول المصانع على شهادات الاستدامة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/sustainable_fabric.webp"
                    alt="الأقمشة المستدامة"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    فوائد الأقمشة المستدامة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    الاستثمار في الأقمشة المستدامة ليس فقط مسؤولية بيئية، بل استثمار ذكي يحقق فوائد طويلة المدى للشركات.
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">المزايا الاقتصادية:</h4>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>✓ تحسين صورة الشركة البيئية</li>
                      <li>✓ جذب العملاء المهتمين بالاستدامة</li>
                      <li>✓ توفير في التكاليف طويلة المدى</li>
                      <li>✓ الامتثال للوائح البيئية المستقبلية</li>
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
                        src="/images/flight_crew/airline_uniform_design.webp"
                        alt="اعتبارات تصميم زي شركات الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز
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
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
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
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
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