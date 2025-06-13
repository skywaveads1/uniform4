import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مستقبل أزياء الطيران: رؤية 2030 وما بعدها | يونيفورم',
  description: 'استكشف مستقبل أزياء طاقم الطيران ورؤية 2030، من التقنيات الثورية إلى التصاميم المبتكرة التي ستغير وجه صناعة الطيران.',
  keywords: 'مستقبل أزياء الطيران, رؤية 2030, تقنيات مستقبلية, ابتكارات الطيران, التصميم المستقبلي',
  openGraph: {
    title: 'مستقبل أزياء الطيران: رؤية 2030 وما بعدها',
    description: 'نظرة شاملة على مستقبل أزياء طاقم الطيران والابتكارات التي ستشكل الصناعة في العقد القادم.',
    images: ['/images/flight_crew/crew-future.jpg'],
  },
};

export default function Flight20Page() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 via-purple-600/80 to-fuchsia-600/90"></div>
        <Image
          src="/images/flight_crew/crew-future.jpg"
          alt="مستقبل أزياء الطيران"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            مستقبل أزياء الطيران
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            رؤية 2030 وما بعدها نحو عصر جديد من الابتكار
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Article Meta */}
            <div className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-violet-100">
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium">
                  رؤى مستقبلية
                </span>
                <span>وقت القراءة: 13 دقيقة</span>
                <span>•</span>
                <span>مستوى: شامل</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                انطلق معنا في رحلة استشرافية نحو المستقبل، حيث تمتزج الخيال العلمي بالواقع التقني لترسم صورة مذهلة لما ستكون عليه أزياء طاقم الطيران في العقود القادمة. من الذكاء الاصطناعي المدمج إلى المواد ذاتية الإصلاح، ومن التفاعل الهولوجرافي إلى الأزياء التي تتكيف مع البيئة تلقائياً.
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-violet-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-violet-500 pr-4">
                مقدمة: على أعتاب المستقبل
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  نقف اليوم على أعتاب ثورة تقنية ستعيد تشكيل كل ما نعرفه عن أزياء الطيران. في عالم يتسارع فيه الابتكار بوتيرة لم يسبق لها مثيل، تستعد صناعة الطيران لدخول عصر جديد حيث تصبح الأزياء منصات ذكية متكاملة تدمج التقنيات المتقدمة مع الراحة والأناقة.
                </p>
                <p>
                  من المتوقع أن تشهد السنوات القادمة تطورات جذرية تتجاوز مجرد تحسين الأقمشة أو تعديل التصاميم، لتشمل إعادة تعريف كامل لمفهوم الزي المهني في الطيران، مع إمكانيات لا محدودة للتخصيص والتكيف والذكاء التفاعلي.
                </p>
                <div className="bg-violet-50 border-r-4 border-violet-400 p-6 rounded-lg">
                  <h3 className="font-bold text-violet-800 mb-2">نظرة مستقبلية</h3>
                  <p className="text-violet-700">
                    بحلول عام 2035، يُتوقع أن تكون 95% من أزياء طاقم الطيران مزودة بذكاء اصطناعي وقدرات تفاعلية متقدمة.
                  </p>
                </div>
              </div>
            </section>

            {/* 2030 Vision */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-purple-500 pr-4">
                رؤية 2030: التحول الرقمي الشامل
              </h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">المحاور الرئيسية لرؤية 2030</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-violet-800 mb-3">🧠 الذكاء الاصطناعي المدمج</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• أنظمة ذكية لمراقبة الصحة والأداء</li>
                        <li>• تعلم آلي لتحسين الراحة تلقائياً</li>
                        <li>• تنبؤات ذكية للصيانة والاستبدال</li>
                        <li>• تفاعل صوتي وإيمائي متقدم</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800 mb-3">🌐 الاتصال والتفاعل</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• شبكات 6G فائقة السرعة</li>
                        <li>• واقع معزز ومختلط مدمج</li>
                        <li>• هولوجرام تفاعلي للمعلومات</li>
                        <li>• ترجمة فورية متعددة اللغات</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-violet-50 p-6 rounded-xl text-center">
                    <div className="text-4xl mb-4">🔬</div>
                    <h3 className="text-lg font-bold text-violet-800 mb-3">المواد الثورية</h3>
                    <p className="text-gray-700 text-sm">نانو مواد ذكية وأقمشة ذاتية الإصلاح</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-lg font-bold text-purple-800 mb-3">الطاقة المتجددة</h3>
                    <p className="text-gray-700 text-sm">توليد الكهرباء من الحركة والضوء</p>
                  </div>
                  <div className="bg-fuchsia-50 p-6 rounded-xl text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-lg font-bold text-fuchsia-800 mb-3">التخصيص الذكي</h3>
                    <p className="text-gray-700 text-sm">تكيف تلقائي مع احتياجات كل فرد</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Revolutionary Technologies */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-fuchsia-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-fuchsia-500 pr-4">
                التقنيات الثورية القادمة
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-fuchsia-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-fuchsia-800 mb-4">الأقمشة الحيوية التفاعلية</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-fuchsia-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">الأقمشة الحية</h4>
                          <p className="text-gray-600 text-xs">مواد تتفاعل مع الجسم وتتكيف معه</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-fuchsia-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">الشفاء الذاتي</h4>
                          <p className="text-gray-600 text-xs">إصلاح تلقائي للتمزقات والأضرار</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-fuchsia-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">التطهير الذاتي</h4>
                          <p className="text-gray-600 text-xs">قتل البكتيريا والفيروسات تلقائياً</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">الواجهات المرئية المتقدمة</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg flex items-center gap-3">
                        <span className="text-2xl">👁️</span>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">عدسات ذكية</h4>
                          <p className="text-gray-600 text-xs">عرض المعلومات مباشرة في العين</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg flex items-center gap-3">
                        <span className="text-2xl">📺</span>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">شاشات مرنة</h4>
                          <p className="text-gray-600 text-xs">عرض البيانات على الملابس مباشرة</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg flex items-center gap-3">
                        <span className="text-2xl">🎭</span>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">هولوجرام تفاعلي</h4>
                          <p className="text-gray-600 text-xs">عرض ثلاثي الأبعاد للمعلومات</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
                      <tr>
                        <th className="border border-gray-300 p-4 text-right">التقنية</th>
                        <th className="border border-gray-300 p-4 text-right">التوقيت المتوقع</th>
                        <th className="border border-gray-300 p-4 text-right">التأثير المتوقع</th>
                        <th className="border border-gray-300 p-4 text-right">مستوى الجاهزية</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الأقمشة ذاتية الإصلاح</td>
                        <td className="border border-gray-300 p-4">2026-2028</td>
                        <td className="border border-gray-300 p-4">ثوري</td>
                        <td className="border border-gray-300 p-4">تجريبي</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الذكاء الاصطناعي المدمج</td>
                        <td className="border border-gray-300 p-4">2025-2027</td>
                        <td className="border border-gray-300 p-4">عالي</td>
                        <td className="border border-gray-300 p-4">متقدم</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">الهولوجرام التفاعلي</td>
                        <td className="border border-gray-300 p-4">2028-2030</td>
                        <td className="border border-gray-300 p-4">متوسط</td>
                        <td className="border border-gray-300 p-4">مفاهيمي</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">المواد الحيوية</td>
                        <td className="border border-gray-300 p-4">2030-2035</td>
                        <td className="border border-gray-300 p-4">ثوري</td>
                        <td className="border border-gray-300 p-4">بحثي</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Adaptive Uniforms */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-violet-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-violet-500 pr-4">
                الأزياء التكيفية والذكية
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">قدرات التكيف المستقبلية</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl mb-3">🌡️</div>
                      <h4 className="font-bold text-violet-800 mb-2">التحكم الحراري</h4>
                      <p className="text-gray-600 text-sm">تعديل درجة الحرارة حسب البيئة والنشاط</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl mb-3">🎨</div>
                      <h4 className="font-bold text-purple-800 mb-2">تغيير الألوان</h4>
                      <p className="text-gray-600 text-sm">تكييف اللون حسب الوقت والمناسبة</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl mb-3">📐</div>
                      <h4 className="font-bold text-fuchsia-800 mb-2">تعديل المقاس</h4>
                      <p className="text-gray-600 text-sm">ملاءمة تلقائية لشكل وحجم الجسم</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-violet-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-violet-800 mb-4">السيناريوهات التفاعلية</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">وضع الطوارئ</h4>
                        <p className="text-gray-600 text-xs">تفعيل إضاءة وإشارات السلامة تلقائياً</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">وضع الراحة</h4>
                        <p className="text-gray-600 text-xs">تخفيف التقييد وتحسين التهوية</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">وضع العمل المكثف</h4>
                        <p className="text-gray-600 text-xs">دعم إضافي للعضلات ومراقبة الإجهاد</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">الذكاء التنبؤي</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">توقع احتياجات الطاقم</span>
                        <span className="font-bold text-purple-600">95%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">كشف المشاكل الصحية</span>
                        <span className="font-bold text-purple-600">89%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">تحسين الأداء</span>
                        <span className="font-bold text-purple-600">76%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">منع الحوادث</span>
                        <span className="font-bold text-purple-600">92%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sustainability Revolution */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-purple-500 pr-4">
                ثورة الاستدامة والاقتصاد الدائري
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">🌱 الإنتاج المستدام</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• مواد 100% قابلة للتحلل</li>
                      <li>• طاقة متجددة في التصنيع</li>
                      <li>• عدم استخدام مواد كيميائية ضارة</li>
                      <li>• تقليل البصمة الكربونية</li>
                    </ul>
                  </div>
                  <div className="bg-violet-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-violet-800 mb-3">♻️ إعادة التدوير المتقدمة</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• تفكيك جزيئي للمواد</li>
                      <li>• إعادة تشكيل كاملة</li>
                      <li>• استخدام متعدد للدورات</li>
                      <li>• صفر نفايات</li>
                    </ul>
                  </div>
                  <div className="bg-fuchsia-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-fuchsia-800 mb-3">🔄 الاقتصاد الدائري</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• نماذج الاشتراك والخدمة</li>
                      <li>• تحديث بدلاً من الاستبدال</li>
                      <li>• مشاركة الموارد</li>
                      <li>• تمديد دورة الحياة</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-fuchsia-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">أهداف الاستدامة 2030</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                      <p className="text-gray-600 text-sm">مواد مستدامة</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-violet-600 mb-1">-80%</div>
                      <p className="text-gray-600 text-sm">انبعاثات كربونية</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-fuchsia-600 mb-1">90%</div>
                      <p className="text-gray-600 text-sm">قابلية إعادة التدوير</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">50%</div>
                      <p className="text-gray-600 text-sm">توفير في التكاليف</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Challenges and Opportunities */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-fuchsia-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-fuchsia-500 pr-4">
                التحديات والفرص المستقبلية
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-fuchsia-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-fuchsia-800 mb-4">التحديات الرئيسية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-fuchsia-500 rounded-full mt-2"></span>
                        <span>التكاليف العالية للتقنيات الجديدة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-fuchsia-500 rounded-full mt-2"></span>
                        <span>التحديات التنظيمية والقانونية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-fuchsia-500 rounded-full mt-2"></span>
                        <span>مقاومة التغيير من الطاقم</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-fuchsia-500 rounded-full mt-2"></span>
                        <span>التعقيد التقني والصيانة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-fuchsia-500 rounded-full mt-2"></span>
                        <span>أمان البيانات والخصوصية</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-violet-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-violet-800 mb-4">الفرص الذهبية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mt-2"></span>
                        <span>سوق جديد بمليارات الدولارات</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mt-2"></span>
                        <span>تحسين جذري في تجربة الطاقم</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mt-2"></span>
                        <span>ريادة في الابتكار التقني</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mt-2"></span>
                        <span>تعزيز السلامة والكفاءة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mt-2"></span>
                        <span>تمييز تنافسي قوي</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-fuchsia-100 to-violet-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">خريطة الطريق للنجاح</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg mb-2">
                        <div className="text-2xl font-bold text-fuchsia-600">المرحلة 1</div>
                        <p className="text-gray-600 text-sm">2024-2026</p>
                      </div>
                      <p className="text-gray-700 text-xs">البحث والتطوير</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg mb-2">
                        <div className="text-2xl font-bold text-violet-600">المرحلة 2</div>
                        <p className="text-gray-600 text-sm">2026-2028</p>
                      </div>
                      <p className="text-gray-700 text-xs">التجارب الأولية</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg mb-2">
                        <div className="text-2xl font-bold text-purple-600">المرحلة 3</div>
                        <p className="text-gray-600 text-sm">2028-2030</p>
                      </div>
                      <p className="text-gray-700 text-xs">التطبيق التجاري</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg mb-2">
                        <div className="text-2xl font-bold text-fuchsia-600">المرحلة 4</div>
                        <p className="text-gray-600 text-sm">2030+</p>
                      </div>
                      <p className="text-gray-700 text-xs">الانتشار الواسع</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="p-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl shadow-lg text-white text-center">
              <h2 className="text-3xl font-bold mb-4">هل تريد أن تكون جزءاً من مستقبل أزياء الطيران؟</h2>
              <p className="text-xl mb-6 opacity-90">
                انضم إلينا في رحلة نحو المستقبل واكتشف كيف يمكن لشركتك أن تقود الابتكار في هذا المجال
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-violet-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                ابدأ رحلة المستقبل معنا
              </Link>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-violet-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">محتويات المقال</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-violet-600 hover:text-violet-800 transition-colors">
                    مقدمة: على أعتاب المستقبل
                  </a>
                  <a href="#vision-2030" className="block text-violet-600 hover:text-violet-800 transition-colors">
                    رؤية 2030
                  </a>
                  <a href="#technologies" className="block text-violet-600 hover:text-violet-800 transition-colors">
                    التقنيات الثورية
                  </a>
                  <a href="#adaptive" className="block text-violet-600 hover:text-violet-800 transition-colors">
                    الأزياء التكيفية
                  </a>
                  <a href="#sustainability" className="block text-violet-600 hover:text-violet-800 transition-colors">
                    ثورة الاستدامة
                  </a>
                  <a href="#challenges" className="block text-violet-600 hover:text-violet-800 transition-colors">
                    التحديات والفرص
                  </a>
                </nav>
              </div>

              {/* Article Series */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">سلسلة أزياء الطيران</h3>
                <div className="space-y-4">
                  <Link href="/articles/flight-17" className="block group">
                    <div className="text-purple-600 group-hover:text-purple-800 transition-colors">
                      لوائح ومعايير أزياء الطيران
                    </div>
                  </Link>
                  <Link href="/articles/flight-18" className="block group">
                    <div className="text-purple-600 group-hover:text-purple-800 transition-colors">
                      تقنيات وابتكارات أزياء الطيران
                    </div>
                  </Link>
                  <Link href="/articles/flight-19" className="block group">
                    <div className="text-purple-600 group-hover:text-purple-800 transition-colors">
                      الاتجاهات العالمية في أزياء الطيران
                    </div>
                  </Link>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-2xl shadow-lg p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-3">استشارة مستقبلية؟</h3>
                <p className="mb-4 opacity-90">احصل على رؤية للمستقبل</p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-violet-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
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