import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaChartLine } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تقنيات المستقبل في أزياء الطيران: الابتكار والتكنولوجيا الذكية | يونيفورم',
  description: 'استكشف أحدث تقنيات المستقبل في أزياء الطيران، من الأقمشة الذكية والتقنيات القابلة للارتداء إلى الذكاء الاصطناعي والاستدامة البيئية.',
  keywords: 'تقنيات أزياء الطيران، الأقمشة الذكية، تكنولوجيا قابلة للارتداء، مستقبل ملابس الطيران، الابتكار، السعودية',
  openGraph: {
    title: 'تقنيات المستقبل في أزياء الطيران: الابتكار والتكنولوجيا الذكية',
    description: 'استكشف أحدث تقنيات المستقبل في أزياء الطيران',
    images: ['/images/flight_crew/future_airline_uniforms.webp'],
  },
};

export default function Article2Page() {
  const heroImage = '/images/flight_crew/future_airline_uniforms.webp';
  const title = 'أحدث اتجاهات الأزياء الموحدة في عام 2024';
  const readingTime = '7 دقائق';
  const publishDate = '٢٠ نوفمبر ٢٠٢٤';
  const author = 'خبراء التصميم - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'tech-integration', title: 'دمج التقنيات الذكية' },
    { id: 'sustainability', title: 'الاستدامة والصداقة البيئية' },
    { id: 'color-trends', title: 'اتجاهات الألوان لعام 2024' },
    { id: 'fabric-innovation', title: 'ابتكارات الأقمشة والمواد' },
    { id: 'design-evolution', title: 'تطور التصاميم والقصات' },
    { id: 'future-outlook', title: 'نظرة على المستقبل' },
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
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  اتجاهات 2024
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                استكشف أحدث الابتكارات والتقنيات التي تشكل مستقبل الأزياء الموحدة في عصر التطور التقني
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
                ابق على اطلاع بأحدث الاتجاهات
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                اشترك في نشرتنا البريدية لتصلك أحدث الاتجاهات والابتكارات في عالم الأزياء الموحدة
              </p>
              <Link 
                href="/contact" 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors block text-center text-sm font-medium"
              >
                اشترك الآن
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
                  يشهد عام 2024 نقلة نوعية في عالم الأزياء الموحدة، حيث تتجه الشركات والمؤسسات نحو تبني التقنيات الحديثة والمواد المبتكرة لتطوير أزياء موحدة تواكب التطورات العصرية وتلبي احتياجات الموظفين المتزايدة.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-r-4 border-purple-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <FaChartLine className="text-purple-600" />
                    أبرز اتجاهات عام 2024
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• الأقمشة الذكية والتفاعلية</li>
                      <li>• التصاميم المستدامة بيئياً</li>
                      <li>• الألوان الجريئة والعصرية</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• التخصيص الفردي المتقدم</li>
                      <li>• التقنيات المضادة للبكتيريا</li>
                      <li>• الراحة والوظيفية المعززة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="tech-integration" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                دمج التقنيات الذكية
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/wearable_tech.webp"
                    alt="التقنيات الذكية في الأزياء الموحدة"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    ثورة التقنيات القابلة للارتداء
                  </h3>
                  <p className="text-gray-700">
                    تشهد الأزياء الموحدة دمجاً متزايداً للتقنيات الذكية التي تعزز من الأداء والراحة، بما في ذلك أجهزة الاستشعار المدمجة ومراقبة الصحة.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-800">أمثلة على التقنيات المدمجة:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🔋 شحن لاسلكي مدمج للأجهزة</li>
                      <li>🌡️ مراقبة درجة الحرارة الجسم</li>
                      <li>💓 تتبع معدل ضربات القلب</li>
                      <li>📱 اتصال البلوتوث مع التطبيقات</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-blue-900">أقمشة موصلة للكهرباء</h4>
                  <p className="text-sm text-gray-700">ألياف معدنية مدمجة تسمح بمرور التيار الكهربائي دون التأثير على الراحة</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🌡️</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-green-900">تنظيم الحرارة التلقائي</h4>
                  <p className="text-sm text-gray-700">مواد تتكيف مع درجة حرارة الجسم لضمان الراحة المثلى</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-purple-900">حماية متقدمة</h4>
                  <p className="text-sm text-gray-700">طبقات واقية من الأشعة فوق البنفسجية والمواد الكيميائية</p>
                </div>
              </div>
            </section>

            <section id="sustainability" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                الاستدامة والصداقة البيئية
              </h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  🌱 مبادرات الاستدامة في 2024
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-green-700">المواد المعاد تدويرها:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• أقمشة من البلاستيك المعاد تدويره</li>
                      <li>• ألياف عضوية معتمدة</li>
                      <li>• أصباغ طبيعية وآمنة بيئياً</li>
                      <li>• أزرار وسحابات من مواد مستدامة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-green-700">عمليات التصنيع:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• تقليل استهلاك المياه بنسبة 40%</li>
                      <li>• طاقة متجددة في المصانع</li>
                      <li>• تقليل النفايات والانبعاثات</li>
                      <li>• شهادات الاستدامة المعتمدة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/sustainable_airline_fashion.jpeg"
                    alt="الأزياء المستدامة"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    الاقتصاد الدائري للأزياء
                  </h3>
                  <p className="text-gray-700 text-sm">
                    تتجه الشركات نحو نموذج الاقتصاد الدائري، حيث يتم إعادة تدوير الأزياء القديمة لإنتاج أزياء جديدة، مما يقلل من النفايات ويحافظ على البيئة.
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">فوائد الاستدامة:</h4>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>✓ تحسين صورة الشركة البيئية</li>
                      <li>✓ توفير في التكاليف طويلة المدى</li>
                      <li>✓ جذب المواهب الواعية بيئياً</li>
                      <li>✓ الامتثال للوائح البيئية</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="color-trends" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                اتجاهات الألوان لعام 2024
              </h2>

              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">لوحة ألوان 2024</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="bg-blue-600 w-20 h-20 rounded-full mx-auto mb-2 shadow-lg"></div>
                      <p className="text-sm font-medium">أزرق رقمي</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-500 w-20 h-20 rounded-full mx-auto mb-2 shadow-lg"></div>
                      <p className="text-sm font-medium">أخضر مستدام</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-600 w-20 h-20 rounded-full mx-auto mb-2 shadow-lg"></div>
                      <p className="text-sm font-medium">بنفسجي تقني</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-500 w-20 h-20 rounded-full mx-auto mb-2 shadow-lg"></div>
                      <p className="text-sm font-medium">برتقالي طاقة</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-700 w-20 h-20 rounded-full mx-auto mb-2 shadow-lg"></div>
                      <p className="text-sm font-medium">رمادي عصري</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-900">الألوان التقنية</h4>
                    <p className="text-sm text-gray-700 mb-3">ألوان تعكس التطور التقني والابتكار</p>
                    <ul className="text-sm space-y-1 text-blue-700">
                      <li>• أزرق رقمي متدرج</li>
                      <li>• فضي معدني</li>
                      <li>• أبيض تقني نقي</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-green-900">الألوان الطبيعية</h4>
                    <p className="text-sm text-gray-700 mb-3">مستوحاة من الطبيعة والاستدامة</p>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• أخضر الغابات العميق</li>
                      <li>• بني الأرض الطبيعي</li>
                      <li>• بيج رملي هادئ</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-purple-900">الألوان الجريئة</h4>
                    <p className="text-sm text-gray-700 mb-3">للشركات التي تريد التميز والبروز</p>
                    <ul className="text-sm space-y-1 text-purple-700">
                      <li>• بنفسجي ملكي</li>
                      <li>• برتقالي نابض</li>
                      <li>• أحمر شغف</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="fabric-innovation" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                ابتكارات الأقمشة والمواد
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    المواد المبتكرة في 2024
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">الألياف النانوية</h4>
                        <p className="text-sm text-gray-700">
                          تقنية متقدمة تنتج ألياف أرفع من الشعر البشري، توفر خصائص مضادة للبكتيريا ومقاومة للماء
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-800 mb-2">الأقمشة التفاعلية</h4>
                        <p className="text-sm text-gray-700">
                          تتغير خصائصها حسب البيئة المحيطة، مثل تغيير اللون أو الملمس استجابة للحرارة
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-800 mb-2">الألياف البيولوجية</h4>
                        <p className="text-sm text-gray-700">
                          مصنوعة من مواد طبيعية مثل الطحالب والفطريات، قابلة للتحلل البيولوجي بالكامل
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/smart_materials.jpeg"
                        alt="المواد الذكية"
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
                        <th className="border border-gray-300 p-4 text-right">المادة المبتكرة</th>
                        <th className="border border-gray-300 p-4 text-right">الخصائص الرئيسية</th>
                        <th className="border border-gray-300 p-4 text-right">التطبيقات</th>
                        <th className="border border-gray-300 p-4 text-right">التوفر</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الجرافين المدمج</td>
                        <td className="border border-gray-300 p-4">موصلية عالية، مقاومة قصوى</td>
                        <td className="border border-gray-300 p-4">أزياء التقنيين والمهندسين</td>
                        <td className="border border-gray-300 p-4">محدود</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">الألياف المضيئة</td>
                        <td className="border border-gray-300 p-4">إضاءة LED مدمجة</td>
                        <td className="border border-gray-300 p-4">أزياء الأمن والطوارئ</td>
                        <td className="border border-gray-300 p-4">متوفر</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الأقمشة المضادة للأشعة</td>
                        <td className="border border-gray-300 p-4">حماية 99% من الأشعة فوق البنفسجية</td>
                        <td className="border border-gray-300 p-4">العمل الخارجي والبناء</td>
                        <td className="border border-gray-300 p-4">متوفر</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="design-evolution" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                تطور التصاميم والقصات
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800">التصاميم العصرية</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">القصات المرنة</h4>
                      <p className="text-sm text-gray-700">
                        تصاميم تتكيف مع حركة الجسم وتوفر راحة قصوى للموظفين في بيئات العمل المختلفة
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">التصاميم التفاعلية</h4>
                      <p className="text-sm text-gray-700">
                        عناصر تصميمية تتفاعل مع البيئة أو تتغير حسب الحاجة، مثل الجيوب القابلة للتوسيع
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">الأناقة الوظيفية</h4>
                      <p className="text-sm text-gray-700">
                        دمج الجمال مع الوظيفية في تصاميم عصرية تلبي احتياجات العمل دون التنازل عن الأناقة
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-80">
                  <Image
                    src="/images/flight_crew/modern_airline_uniform_design.jpeg"
                    alt="التصاميم العصرية"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  اتجاهات التخصيص والشخصنة
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-2xl">👤</span>
                    </div>
                    <h4 className="font-semibold mb-2">تخصيص فردي</h4>
                    <p className="text-sm text-gray-700">قياسات وتفضيلات شخصية لكل موظف</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-2xl">🎨</span>
                    </div>
                    <h4 className="font-semibold mb-2">خيارات متعددة</h4>
                    <p className="text-sm text-gray-700">ألوان وأنماط مختلفة ضمن الهوية الموحدة</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-2xl">⚙️</span>
                    </div>
                    <h4 className="font-semibold mb-2">تعديلات ذكية</h4>
                    <p className="text-sm text-gray-700">عناصر قابلة للتغيير حسب المهام</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="future-outlook" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-purple-600 pr-4">
                نظرة على المستقبل
              </h2>

              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  مستقبل الأزياء الموحدة: 2025 وما بعدها
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <FaChartLine />
                      التوقعات المستقبلية
                    </h4>
                    <ul className="space-y-2 text-purple-100">
                      <li>• الذكاء الاصطناعي في التصميم والإنتاج</li>
                      <li>• طباعة ثلاثية الأبعاد للأزياء حسب الطلب</li>
                      <li>• أقمشة قابلة للبرمجة والتحكم الرقمي</li>
                      <li>• دمج كامل مع إنترنت الأشياء</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">🚀 الابتكارات المنتظرة</h4>
                    <ul className="space-y-2 text-purple-100">
                      <li>• أزياء تتفاعل مع الحالة المزاجية</li>
                      <li>• مواد ذكية تشفى نفسها من التلف</li>
                      <li>• تقنيات الواقع المعزز في التصميم</li>
                      <li>• أنظمة تحليل البيانات لتحسين الراحة</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-xl mb-4">
                    ابدأ رحلتك نحو مستقبل الأزياء الموحدة اليوم
                  </p>
                  <Link 
                    href="/quote" 
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block font-semibold"
                  >
                    استكشف الحلول المستقبلية
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/category/article-1" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/corporate_uniforms/corporate_identity_uniforms.jpeg"
                        alt="دليل اختيار الأزياء الموحدة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                        دليل شامل لاختيار الأزياء الموحدة المناسبة لشركتك
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/category/article-3" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/workwear/corporate_uniform.jpeg"
                        alt="أهمية الأزياء الموحدة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                        أهمية الأزياء الموحدة في بناء هوية الشركة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-25" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/future_flight_crew_fashion.jpeg"
                        alt="مستقبل تصميم الأزياء"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                        مستقبل تصميم زي طواقم الطيران: الابتكار والتقنية
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