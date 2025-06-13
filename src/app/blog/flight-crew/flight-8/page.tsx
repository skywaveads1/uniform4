import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaGlobe, FaStar, FaMosque } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'التصميم الثقافي في أزياء الخطوط الجوية العربية | يونيفورم',
  description: 'اكتشف كيف تعكس أزياء الخطوط الجوية العربية الهوية الثقافية والتراث العريق مع التصميم المعاصر والوظائف العملية',
  keywords: 'أزياء طيران عربية، التصميم الثقافي، الهوية العربية، أزياء الخطوط السعودية، التراث في الطيران، السعودية',
  openGraph: {
    title: 'التصميم الثقافي في أزياء الخطوط الجوية العربية',
    description: 'كيف تمزج أزياء الطيران العربية بين التراث والحداثة',
    images: ['/images/flight_crew/cultural_aviation_uniforms.webp'],
  },
};

export default function Article8Page() {
  const heroImage = '/images/flight_crew/cultural_aviation_uniforms.webp';
  const title = 'التصميم الثقافي في أزياء شركات الطيران العربية: هوية وتراث';
  const readingTime = '12 دقيقة';
  const publishDate = '١١ ديسمبر ٢٠٢٤';
  const author = 'خبراء التراث والتصميم الثقافي - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'cultural-identity', title: 'الهوية الثقافية في التصميم' },
    { id: 'traditional-elements', title: 'العناصر التراثية والرموز' },
    { id: 'islamic-influence', title: 'التأثير الإسلامي في التصميم' },
    { id: 'regional-variations', title: 'التنوع الإقليمي العربي' },
    { id: 'modern-adaptation', title: 'التكيف مع العصر الحديث' },
    { id: 'success-stories', title: 'قصص نجاح ملهمة' },
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
                <span className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaGlobe />
                  تراث وثقافة
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                رحلة عبر التراث العربي وكيف تجسده أزياء شركات الطيران في تصاميم تجمع بين الأصالة والحداثة
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
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-amber-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-amber-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-amber-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-amber-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-red-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-amber-900">
                تحتاج تصميم ثقافي؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على استشارة متخصصة في دمج التراث والثقافة في تصاميم الأزياء الموحدة
              </p>
              <Link 
                href="/quote" 
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors block text-center text-sm font-medium"
              >
                استشارة ثقافية
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  تمثل أزياء شركات الطيران العربية نافذة حضارية تطل من خلالها على العالم، حيث تحمل في طياتها عبق التراث وجمال الهوية العربية والإسلامية. فهذه الأزياء ليست مجرد ملابس عمل، بل هي سفراء ثقافيون يجوبون العالم، ينقلون رسائل الضيافة العربية والكرم الأصيل إلى كل مطار وكل رحلة.
                </p>
                
                <div className="bg-amber-50 border-r-4 border-amber-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-amber-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-amber-600" />
                    عناصر الهوية الثقافية
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>• الرموز والزخارف التراثية</li>
                      <li>• الألوان ذات الدلالة الثقافية</li>
                      <li>• التصاميم المستوحاة من التراث</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• العمامة والغترة في تصاميم الرجال</li>
                      <li>• الحجاب والعباءة في أزياء النساء</li>
                      <li>• الخط العربي والزخرفة الإسلامية</li>
                    </ul>
                  </div>
                </div>

                <p>
                  في عالم يتجه نحو العولمة، تقف شركات الطيران العربية كحاملة للواء الخصوصية الثقافية، مؤكدة أن الحداثة لا تعني التخلي عن الجذور، بل يمكن أن تكون جسراً يربط بين الماضي العريق والمستقبل المشرق.
                </p>
              </div>
            </section>

            <section id="cultural-identity" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                الهوية الثقافية في التصميم
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/cultural_aviation_uniforms.webp"
                    alt="عناصر التصميم الإسلامي"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-800">
                    جوهر الهوية في كل تفصيلة
                  </h3>
                  <p className="text-gray-700">
                    تتجلى الهوية الثقافية العربية في أزياء الطيران من خلال تفاصيل دقيقة ومدروسة، تبدأ من اختيار الألوان وتنتهي بأدق الزخارف، مشكلة لوحة متكاملة تحكي قصة الحضارة العربية العريقة.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-red-800">عناصر الهوية الأساسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🎨 اللوحة اللونية التراثية</li>
                      <li>📐 الأشكال الهندسية الإسلامية</li>
                      <li>✍️ الخط العربي والكاليجرافيا</li>
                      <li>🌺 الزخارف النباتية والتجريدية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="my-10">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/flight_crew/crew_uniform_visual_identity.webp"
                    alt="تصميم أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-red-600/60 flex items-center">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">تراث عريق يحلق في السماء</h3>
                      <p className="text-lg mb-4">أزياء تحمل روح الحضارة العربية إلى كل قارة</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-white/20 px-3 py-1 rounded-full">🏺 تراث</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">🎨 فن</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">✈️ طيران</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-red-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">العناصر التراثية في التصميم</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/cabin_crew_uniforms.webp"
                        alt="أزياء طاقم الطيران النسائية"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                    <h4 className="font-semibold text-amber-800 mb-2">الزخارف الإسلامية</h4>
                    <p className="text-sm text-gray-600">أنماط هندسية وزخرفية مستوحاة من الفن الإسلامي</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_hospitality_uniforms.webp"
                        alt="الألوان التراثية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-amber-800 mb-2">الألوان التراثية</h4>
                    <p className="text-sm text-gray-600">لوحة ألوان مستوحاة من الطبيعة والتراث العربي</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/captain_copilot_wear.webp"
                        alt="الخط العربي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-amber-800 mb-2">الخط العربي</h4>
                    <p className="text-sm text-gray-600">فن الكاليجرافيا العربية في تفاصيل الزي</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="traditional-elements" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                العناصر التراثية والرموز
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <FaMosque className="text-green-600" />
                    الرموز والزخارف الإسلامية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">الزخارف الهندسية:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• النجمة الثمانية والأشكال المتداخلة</li>
                        <li>• الأرابيسك والزخارف النباتية المجردة</li>
                        <li>• الأنماط المتكررة والمتماثلة</li>
                        <li>• التشابك والتداخل الهندسي المعقد</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">عناصر الخط والكتابة:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• الخط الكوفي في التصاميم الحديثة</li>
                        <li>• خط النسخ والثلث في الديكورات</li>
                        <li>• الآيات القرآنية والعبارات الجميلة</li>
                        <li>• أسماء الله الحسنى والعبارات الإيمانية</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-amber-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">العنصر التراثي</th>
                        <th className="border border-gray-300 p-4 text-right">المعنى الثقافي</th>
                        <th className="border border-gray-300 p-4 text-right">التطبيق في الأزياء</th>
                        <th className="border border-gray-300 p-4 text-right">أمثلة شركات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الغترة والعقال</td>
                        <td className="border border-gray-300 p-4">رمز الرجولة والأناقة العربية</td>
                        <td className="border border-gray-300 p-4">إكسسوارات الطيارين والمضيفين</td>
                        <td className="border border-gray-300 p-4">السعودية، الإمارات</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">العباءة والحجاب</td>
                        <td className="border border-gray-300 p-4">الحشمة والأناقة الإسلامية</td>
                        <td className="border border-gray-300 p-4">تصاميم أزياء المضيفات</td>
                        <td className="border border-gray-300 p-4">إيران، ماليزيا</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">النقوش البدوية</td>
                        <td className="border border-gray-300 p-4">تراث الصحراء والبداوة</td>
                        <td className="border border-gray-300 p-4">زخارف الأوشحة والإكسسوارات</td>
                        <td className="border border-gray-300 p-4">الأردن، الكويت</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">ألوان العلم الوطني</td>
                        <td className="border border-gray-300 p-4">الانتماء والهوية الوطنية</td>
                        <td className="border border-gray-300 p-4">اللوحة اللونية الأساسية</td>
                        <td className="border border-gray-300 p-4">جميع الدول العربية</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="islamic-influence" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                التأثير الإسلامي في التصميم
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/cultural_aviation_uniforms.webp"
                    alt="التأثير الإسلامي في تصميم أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    الفن الإسلامي في خدمة التصميم
                  </h3>
                  <p className="text-gray-700 text-sm">
                    يلعب الفن الإسلامي دوراً محورياً في إثراء تصاميم أزياء الطيران العربية، حيث يوفر مخزوناً لا ينضب من الأشكال والزخارف التي تحمل عمقاً روحياً وجمالياً فريداً.
                  </p>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">التأثيرات الإسلامية:</h4>
                    <ul className="text-sm space-y-1 text-purple-700">
                      <li>🕌 أشكال القباب والمآذن</li>
                      <li>📿 السبحة والرموز الروحية</li>
                      <li>🌙 الهلال والنجمة</li>
                      <li>🏛️ تصاميم المساجد والمحاريب</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  🎨 معايير التصميم الإسلامي
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">المبادئ الجمالية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• التوازن والتماثل في التصميم</li>
                      <li>• التكرار والنمطية المنتظمة</li>
                      <li>• تجنب التشبيه والتجسيد</li>
                      <li>• الهندسة المقدسة والنسب الذهبية</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">القيم الروحية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• الحشمة والوقار في التصميم</li>
                      <li>• اللباس الساتر والمحتشم</li>
                      <li>• الألوان الهادئة والمريحة</li>
                      <li>• التعبير عن القيم الإسلامية السمحة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="regional-variations" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                التنوع الإقليمي العربي
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-800">
                    تنوع ثقافي ثري عبر الوطن العربي
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border-r-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-2">دول الخليج العربي</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• الغترة والعقال للرجال</li>
                        <li>• العباءة المزخرفة للنساء</li>
                        <li>• ألوان البحر والصحراء</li>
                        <li>• النقوش البحرية واللؤلؤ</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-r-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 mb-2">بلاد الشام</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• الكوفية الفلسطينية</li>
                        <li>• الثوب المطرز الشامي</li>
                        <li>• نقوش الأرابيسك الدمشقي</li>
                        <li>• ألوان الزيتون والياسمين</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-r-4 border-purple-500">
                      <h4 className="font-semibold text-purple-800 mb-2">شمال أفريقيا</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• الجلباب المغربي</li>
                        <li>• الحناء والزخارف البربرية</li>
                        <li>• نقوش الموزاييك الأندلسي</li>
                        <li>• ألوان الطين والصحراء</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                      <span>🏺</span>
                      التراث المصري
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      يتميز بالرقي والعراقة، مع استلهام من الحضارة الفرعونية والإسلامية
                    </p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• هيروغليفية مبسطة في التصاميم</li>
                      <li>• ألوان الذهب والفيروز</li>
                      <li>• خط النسخ المصري الجميل</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <span>🌴</span>
                      التراث العراقي
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      يجمع بين عراقة بابل وآشور وجمال الحضارة الإسلامية العباسية
                    </p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• نقوش دجلة والفرات</li>
                      <li>• ألوان الطين والنخيل</li>
                      <li>• الخط البغدادي العباسي</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="modern-adaptation" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                التكيف مع العصر الحديث
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/modern_arabic_uniforms.jpeg"
                    alt="التكيف الحديث للتصاميم التراثية"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-800">
                    تطوير التراث للعصر الحديث
                  </h3>
                  <p className="text-gray-700 text-sm">
                    يكمن التحدي الأكبر في كيفية المحافظة على جوهر التراث مع تطويره ليناسب متطلبات العصر الحديث ومعايير الطيران الدولية، دون فقدان الهوية الثقافية الأصيلة.
                  </p>
                  <div className="bg-teal-100 p-4 rounded-lg">
                    <h4 className="font-medium text-teal-800 mb-2">استراتيجيات التطوير:</h4>
                    <ul className="text-sm space-y-1 text-teal-700">
                      <li>💡 التبسيط مع الحفاظ على الجوهر</li>
                      <li>🔧 استخدام التقنيات الحديثة</li>
                      <li>🌐 التوافق مع المعايير الدولية</li>
                      <li>⚖️ التوازن بين التراث والحداثة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-teal-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">
                  تحديات وحلول التطوير
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">التحديات:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• الحفاظ على الأصالة في عالم متغير</li>
                      <li>• تلبية معايير السلامة الدولية</li>
                      <li>• التوازن بين الثقافة والعملية</li>
                      <li>• قبول الجمهور العالمي للتصاميم</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-700 mb-3">الحلول المبتكرة:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• دمج العناصر التراثية بحداثة</li>
                      <li>• استخدام مواد عصرية بتصاميم تراثية</li>
                      <li>• تطوير قطع اختيارية للتعبير الثقافي</li>
                      <li>• التدرج في تطبيق التراث</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-amber-600 pr-4">
                قصص نجاح ملهمة
              </h2>

              <div className="my-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">التنوع الإقليمي في أزياء الطيران العربية</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/best_flight_crew_attire.webp"
                        alt="أزياء الطيران الخليجية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-amber-800">أزياء دول الخليج</h4>
                    <p className="text-sm text-gray-600">
                      تصاميم تعكس تراث البادية والبحر، مع استخدام الألوان الذهبية والزرقاء
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_attire.webp"
                        alt="أزياء الطيران المغاربية والشامية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-amber-800">أزياء المغرب والشام</h4>
                    <p className="text-sm text-gray-600">
                      تصاميم تجمع بين الأندلسي والعثماني مع لمسات معاصرة
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">قصص نجاح ملهمة</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <div className="relative h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden">
                      <Image
                        src="/images/flight_crew/cockpit_crew_clothing.webp"
                        alt="الخطوط السعودية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-medium text-blue-800 text-sm">الخطوط السعودية</h4>
                    <p className="text-xs text-gray-600 mt-1">تجسيد للهوية الوطنية</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="relative h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden">
                      <Image
                        src="/images/flight_crew/corporate_flight_crew_uniforms.webp"
                        alt="طيران الإمارات"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-medium text-blue-800 text-sm">طيران الإمارات</h4>
                    <p className="text-xs text-gray-600 mt-1">أناقة عالمية بروح عربية</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="relative h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden">
                      <Image
                        src="/images/flight_crew/custom_crew_uniforms.webp"
                        alt="الخطوط القطرية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-medium text-blue-800 text-sm">الخطوط القطرية</h4>
                    <p className="text-xs text-gray-600 mt-1">تراث قطري معاصر</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="relative h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden">
                      <Image
                        src="/images/flight_crew/crew_footwear_bags.webp"
                        alt="الملكية المغربية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-medium text-blue-800 text-sm">الملكية المغربية</h4>
                    <p className="text-xs text-gray-600 mt-1">عبق الأندلس والمغرب</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/flight-crew/flight-5" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/uniforms_saudi_arabia.jpeg"
                        alt="تأثير الثقافة المحلية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-amber-600 transition-colors">
                        تأثير الثقافة المحلية على تصميم أزياء شركات الطيران
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-3" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/female_flight_crew_uniforms.jpeg"
                        alt="أزياء الطيران النسائية"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-amber-600 transition-colors">
                        أزياء الطيران النسائية: رحلة التطور والابتكار
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-1" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/airline_uniform_design.jpeg"
                        alt="اعتبارات تصميم أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-amber-600 transition-colors">
                        اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز
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