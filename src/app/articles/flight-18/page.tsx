import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تقنيات وابتكارات أزياء الطيران المستقبلية: نحو عصر جديد من الذكاء والراحة | يونيفورم',
  description: 'استكشف أحدث التقنيات والابتكارات في أزياء طاقم الطيران، من الأقمشة الذكية إلى تقنيات الاستشعار والذكاء الاصطناعي.',
  keywords: 'تقنيات أزياء الطيران, الأقمشة الذكية, ابتكارات الطيران, تكنولوجيا الملابس, الذكاء الاصطناعي',
  openGraph: {
    title: 'تقنيات وابتكارات أزياء الطيران المستقبلية: نحو عصر جديد من الذكاء والراحة',
    description: 'اكتشف كيف تعيد التقنيات الحديثة تشكيل مستقبل أزياء طاقم الطيران وتحسين تجربة العمل والسلامة.',
    images: ['/images/flight_crew/crew-technology.jpg'],
  },
};

export default function Flight18Page() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-indigo-600/80 to-purple-600/90"></div>
        <Image
          src="/images/flight_crew/crew-technology.jpg"
          alt="تقنيات وابتكارات أزياء الطيران"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            تقنيات وابتكارات أزياء الطيران المستقبلية
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            نحو عصر جديد من الذكاء والراحة في السماء
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Article Meta */}
            <div className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  تقنيات وابتكارات
                </span>
                <span>وقت القراءة: 11 دقيقة</span>
                <span>•</span>
                <span>مستوى: متقدم</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                انطلق في رحلة استكشافية لأحدث التقنيات والابتكارات التي تعيد تشكيل مستقبل أزياء طاقم الطيران، من الأقمشة الذكية والمواد النانوية إلى تقنيات الاستشعار والذكاء الاصطناعي التي تحول الزي من مجرد ملابس إلى نظام ذكي متكامل يعزز الأداء والسلامة.
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-blue-500 pr-4">
                مقدمة: ثورة التقنية في أزياء الطيران
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  نشهد اليوم ثورة حقيقية في عالم أزياء الطيران، حيث تتقارب التكنولوجيا المتقدمة مع احتياجات العمل الجوي لتخلق حلولاً مبتكرة تعيد تعريف مفهوم الزي المهني. لم تعد أزياء طاقم الطيران مجرد ملابس تحمل شعار الشركة، بل أصبحت منصات تقنية متطورة تدمج الذكاء الاصطناعي والاستشعار الحيوي.
                </p>
                <p>
                  من الأقمشة التي تتفاعل مع البيئة المحيطة إلى الأزياء التي تراقب الصحة وتحسن الأداء، نقف على أعتاب عصر جديد يجمع بين الأناقة والوظائف الذكية لخدمة سلامة وراحة طاقم الطيران.
                </p>
                <div className="bg-blue-50 border-r-4 border-blue-400 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">رؤية مستقبلية</h3>
                  <p className="text-blue-700">
                    بحلول عام 2030، يُتوقع أن تصبح 75% من أزياء طاقم الطيران مزودة بتقنيات ذكية تعزز الأداء والسلامة.
                  </p>
                </div>
              </div>
            </section>

            {/* Smart Fabrics */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-indigo-500 pr-4">
                الأقمشة الذكية والمواد المتقدمة
              </h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-indigo-50 p-6 rounded-xl text-center">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-xl font-bold text-indigo-800 mb-3">الألياف النانوية</h3>
                    <p className="text-gray-700">أقمشة خفيفة ومقاومة بتقنية النانو تكنولوجي</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <div className="text-4xl mb-4">🌡️</div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">تنظيم الحرارة</h3>
                    <p className="text-gray-700">مواد تتكيف مع درجة حرارة الجسم والبيئة</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl text-center">
                    <div className="text-4xl mb-4">💧</div>
                    <h3 className="text-xl font-bold text-purple-800 mb-3">مقاومة الرطوبة</h3>
                    <p className="text-gray-700">تقنيات طرد المياه والرطوبة المتقدمة</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">مزايا الأقمشة الذكية</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        تنظيم درجة الحرارة التلقائي
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        مقاومة البكتيريا والروائح
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        خصائص الشفاء الذاتي للأقمشة
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        مرونة فائقة ومتانة عالية
                      </li>
                    </ul>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        حماية من الأشعة فوق البنفسجية
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        خفة الوزن وسهولة الحركة
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        تغيير اللون حسب الظروف
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        توليد الطاقة من الحركة
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Sensor Technology */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-purple-500 pr-4">
                تقنيات الاستشعار والمراقبة الصحية
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">أجهزة الاستشعار المدمجة</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-bold text-gray-800">مراقبة ضربات القلب</h4>
                          <p className="text-gray-600 text-sm">أجهزة استشعار مدمجة لمراقبة النبض والإجهاد</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-bold text-gray-800">قياس درجة الحرارة</h4>
                          <p className="text-gray-600 text-sm">مراقبة مستمرة لحرارة الجسم والبيئة</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-bold text-gray-800">تتبع النشاط</h4>
                          <p className="text-gray-600 text-sm">قياس مستوى النشاط والحركة والسعرات</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">التطبيقات الذكية</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg flex items-center gap-3">
                        <span className="text-2xl">📱</span>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">تطبيق الصحة المهنية</h4>
                          <p className="text-gray-600 text-xs">مراقبة حالة الطاقم في الوقت الفعلي</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg flex items-center gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">إنذارات السلامة</h4>
                          <p className="text-gray-600 text-xs">تنبيهات تلقائية للحالات الطارئة</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg flex items-center gap-3">
                        <span className="text-2xl">📊</span>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">تحليل البيانات</h4>
                          <p className="text-gray-600 text-xs">تقارير مفصلة عن الأداء والصحة</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Integration */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-blue-500 pr-4">
                الذكاء الاصطناعي في أزياء الطيران
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">تطبيقات الذكاء الاصطناعي</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl mb-3">🤖</div>
                      <h4 className="font-bold text-blue-800 mb-2">التحكم التلقائي</h4>
                      <p className="text-gray-600 text-sm">تعديل خصائص الزي حسب الظروف</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl mb-3">🧠</div>
                      <h4 className="font-bold text-indigo-800 mb-2">التعلم الآلي</h4>
                      <p className="text-gray-600 text-sm">تحسين الأداء بناءً على البيانات</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl mb-3">🔮</div>
                      <h4 className="font-bold text-purple-800 mb-2">التنبؤ الذكي</h4>
                      <p className="text-gray-600 text-sm">توقع احتياجات الصيانة والاستبدال</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                      <tr>
                        <th className="border border-gray-300 p-4 text-right">التقنية</th>
                        <th className="border border-gray-300 p-4 text-right">الوظيفة</th>
                        <th className="border border-gray-300 p-4 text-right">المزايا</th>
                        <th className="border border-gray-300 p-4 text-right">مستوى التطبيق</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الاستشعار الذكي</td>
                        <td className="border border-gray-300 p-4">مراقبة الصحة</td>
                        <td className="border border-gray-300 p-4">الوقاية المبكرة</td>
                        <td className="border border-gray-300 p-4">متقدم</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">التحكم البيئي</td>
                        <td className="border border-gray-300 p-4">تنظيم الحرارة</td>
                        <td className="border border-gray-300 p-4">راحة مثلى</td>
                        <td className="border border-gray-300 p-4">تجريبي</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الصيانة التنبؤية</td>
                        <td className="border border-gray-300 p-4">إدارة دورة الحياة</td>
                        <td className="border border-gray-300 p-4">توفير التكاليف</td>
                        <td className="border border-gray-300 p-4">قيد التطوير</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Communication Technology */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-indigo-500 pr-4">
                تقنيات الاتصال والتفاعل
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-indigo-800 mb-3">الاتصال اللاسلكي</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• تقنية البلوتوث المتقدمة</li>
                      <li>• شبكات الواي فاي المدمجة</li>
                      <li>• اتصال 5G للبيانات السريعة</li>
                      <li>• تقنيات NFC للتفاعل القريب</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">واجهات التفاعل</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• شاشات OLED مرنة مدمجة</li>
                      <li>• أزرار تفاعلية ذكية</li>
                      <li>• تحكم بالإيماءات والصوت</li>
                      <li>• التفاعل بالواقع المعزز</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">مشاركة المعلومات في الوقت الفعلي</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-indigo-600 mb-1">100%</div>
                      <p className="text-gray-600 text-sm">تغطية شبكة الاتصال</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">&lt; 1 ثانية</div>
                      <p className="text-gray-600 text-sm">زمن الاستجابة</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">256-bit</div>
                      <p className="text-gray-600 text-sm">تشفير البيانات</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety Innovations */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-purple-500 pr-4">
                ابتكارات السلامة والحماية
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">الحماية الذكية</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• أنظمة الإنذار المبكر</li>
                      <li>• حماية من الصدمات الكهربائية</li>
                      <li>• مقاومة محسنة للحريق</li>
                      <li>• تنبيهات الطوارئ التلقائية</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">المراقبة البيئية</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• كشف الغازات الضارة</li>
                      <li>• مراقبة مستوى الإشعاع</li>
                      <li>• قياس جودة الهواء</li>
                      <li>• تحليل الضوضاء المحيطة</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-indigo-800 mb-3">الاستجابة الطارئة</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• تفعيل إشارات الضيق</li>
                      <li>• إرسال موقع GPS تلقائياً</li>
                      <li>• تسجيل البيانات الحيوية</li>
                      <li>• اتصال مباشر بالطوارئ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost and Implementation */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-blue-500 pr-4">
                التكلفة والتطبيق العملي
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">تحليل التكلفة والعائد</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">تكلفة التطوير الأولية</span>
                        <span className="font-bold text-blue-600">$200,000 - $500,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">تكلفة الزي الواحد</span>
                        <span className="font-bold text-blue-600">$800 - $2,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">توفير سنوي متوقع</span>
                        <span className="font-bold text-green-600">$50,000 - $150,000</span>
                      </div>
                      <hr className="border-blue-200" />
                      <div className="flex justify-between items-center font-bold">
                        <span className="text-gray-800">فترة الاسترداد</span>
                        <span className="text-blue-600">2-3 سنوات</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-indigo-800 mb-4">مراحل التطبيق</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-bold text-gray-800">المرحلة التجريبية</h4>
                          <p className="text-gray-600 text-sm">اختبار محدود على مجموعة صغيرة</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-bold text-gray-800">التطبيق الجزئي</h4>
                          <p className="text-gray-600 text-sm">توسيع النطاق تدريجياً</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-bold text-gray-800">التطبيق الكامل</h4>
                          <p className="text-gray-600 text-sm">تغطية شاملة لجميع الطاقم</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Future Outlook */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-purple-500 pr-4">
                نظرة على المستقبل
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">توقعات السنوات القادمة</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">2025-2027: التطوير المتقدم</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• دمج كامل للذكاء الاصطناعي</li>
                        <li>• أقمشة ذاتية الإصلاح</li>
                        <li>• شاشات مرنة شفافة</li>
                        <li>• تقنيات الهولوجرام</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">2028-2030: الثورة الكاملة</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• أزياء تغير شكلها تلقائياً</li>
                        <li>• مراقبة صحية شاملة ومتقدمة</li>
                        <li>• تفاعل بالواقع المختلط</li>
                        <li>• أنظمة طاقة متجددة مدمجة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                    <p className="text-gray-700">نسبة الأزياء الذكية المتوقعة بحلول 2030</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                    <p className="text-gray-700">تحسن الكفاءة التشغيلية</p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">75%</div>
                    <p className="text-gray-700">تقليل حوادث العمل</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg text-white text-center">
              <h2 className="text-3xl font-bold mb-4">هل تريد أن تكون جزءاً من مستقبل أزياء الطيران؟</h2>
              <p className="text-xl mb-6 opacity-90">
                انضم إلى رحلة الابتكار واكتشف كيف يمكن للتقنيات الذكية أن تحول تجربة العمل في الطيران
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                استكشف الحلول المبتكرة
              </Link>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">محتويات المقال</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    مقدمة: ثورة التقنية
                  </a>
                  <a href="#smart-fabrics" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    الأقمشة الذكية
                  </a>
                  <a href="#sensors" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    تقنيات الاستشعار
                  </a>
                  <a href="#ai" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    الذكاء الاصطناعي
                  </a>
                  <a href="#communication" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    تقنيات الاتصال
                  </a>
                  <a href="#safety" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    ابتكارات السلامة
                  </a>
                  <a href="#implementation" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    التطبيق العملي
                  </a>
                </nav>
              </div>

              {/* Related Articles */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">مقالات ذات صلة</h3>
                <div className="space-y-4">
                  <Link href="/articles/flight-15" className="block group">
                    <div className="text-indigo-600 group-hover:text-indigo-800 transition-colors">
                      المواد المستدامة في أزياء الطيران
                    </div>
                  </Link>
                  <Link href="/articles/flight-16" className="block group">
                    <div className="text-indigo-600 group-hover:text-indigo-800 transition-colors">
                      التصميم الإرجونومي في أزياء الطيران
                    </div>
                  </Link>
                  <Link href="/articles/flight-17" className="block group">
                    <div className="text-indigo-600 group-hover:text-indigo-800 transition-colors">
                      لوائح ومعايير أزياء الطيران
                    </div>
                  </Link>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-b from-blue-500 to-purple-500 rounded-2xl shadow-lg p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-3">استشارة تقنية؟</h3>
                <p className="mb-4 opacity-90">احصل على استشارة حول أحدث التقنيات</p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
} 