import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'لوائح ومعايير أزياء الطيران: دليل شامل للامتثال والسلامة | يونيفورم',
  description: 'تعرف على اللوائح والمعايير الدولية لأزياء طاقم الطيران، معايير السلامة، والامتثال للقوانين الجوية في صناعة الطيران.',
  keywords: 'لوائح أزياء الطيران, معايير السلامة, الامتثال الجوي, قوانين الطيران, معايير ICAO, لوائح FAA',
  openGraph: {
    title: 'لوائح ومعايير أزياء الطيران: دليل شامل للامتثال والسلامة',
    description: 'دليل متكامل حول اللوائح والمعايير الدولية التي تحكم تصميم وتصنيع أزياء طاقم الطيران ومتطلبات السلامة.',
    images: ['/images/flight_crew/crew-regulations.jpg'],
  },
};

export default function Flight17Page() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-red-600/80 to-pink-600/90"></div>
        <Image
          src="/images/flight_crew/crew-regulations.jpg"
          alt="لوائح ومعايير أزياء الطيران"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            لوائح ومعايير أزياء الطيران
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            دليل شامل للامتثال والسلامة في صناعة الطيران
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Article Meta */}
            <div className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100">
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  لوائح وقوانين
                </span>
                <span>وقت القراءة: 12 دقيقة</span>
                <span>•</span>
                <span>مستوى: متقدم</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                اكتشف عالم اللوائح والمعايير المعقدة التي تحكم تصميم وتصنيع أزياء طاقم الطيران، من معايير السلامة الدولية إلى متطلبات الامتثال المحلية، وكيف تضمن هذه اللوائح أعلى مستويات الحماية والمهنية في السماء.
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-orange-500 pr-4">
                مقدمة: أهمية اللوائح في صناعة الطيران
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  تُعتبر صناعة الطيران من أكثر الصناعات تنظيماً في العالم، حيث تخضع كل جانب من جوانب العمل، بما في ذلك أزياء طاقم الطيران، لمعايير ولوائح صارمة تهدف إلى ضمان السلامة والمهنية والامتثال للقوانين الدولية والمحلية.
                </p>
                <p>
                  تطورت هذه اللوائح عبر عقود من الخبرة والدروس المستفادة من الحوادث والتحديات التشغيلية، وتشمل اليوم مجموعة شاملة من المتطلبات التي تغطي كل شيء من مواد التصنيع إلى التصميم والألوان والعلامات التجارية.
                </p>
                <div className="bg-orange-50 border-r-4 border-orange-400 p-6 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-2">هل تعلم؟</h3>
                  <p className="text-orange-700">
                    تستغرق عملية اعتماد زي طاقم طيران جديد ما بين 18-24 شهراً للحصول على جميع الموافقات اللازمة من الجهات التنظيمية المختلفة.
                  </p>
                </div>
              </div>
            </section>

            {/* International Standards */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-red-500 pr-4">
                المعايير الدولية والجهات التنظيمية
              </h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-red-800 mb-4">منظمة الطيران المدني الدولي (ICAO)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• معايير التصميم الأساسية</li>
                      <li>• متطلبات الرؤية والتمييز</li>
                      <li>• إرشادات الألوان والشارات</li>
                      <li>• معايير السلامة العامة</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">إدارة الطيران الفيدرالية (FAA)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• لوائح التصنيع والجودة</li>
                      <li>• متطلبات مقاومة الحريق</li>
                      <li>• معايير الصحة المهنية</li>
                      <li>• إجراءات الفحص والاعتماد</li>
                    </ul>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                      <tr>
                        <th className="border border-gray-300 p-4 text-right">الجهة التنظيمية</th>
                        <th className="border border-gray-300 p-4 text-right">نطاق التطبيق</th>
                        <th className="border border-gray-300 p-4 text-right">المتطلبات الرئيسية</th>
                        <th className="border border-gray-300 p-4 text-right">فترة التجديد</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">ICAO</td>
                        <td className="border border-gray-300 p-4">دولي</td>
                        <td className="border border-gray-300 p-4">معايير التصميم الأساسية</td>
                        <td className="border border-gray-300 p-4">5 سنوات</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">FAA</td>
                        <td className="border border-gray-300 p-4">الولايات المتحدة</td>
                        <td className="border border-gray-300 p-4">السلامة والجودة</td>
                        <td className="border border-gray-300 p-4">3 سنوات</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">EASA</td>
                        <td className="border border-gray-300 p-4">أوروبا</td>
                        <td className="border border-gray-300 p-4">البيئة والاستدامة</td>
                        <td className="border border-gray-300 p-4">4 سنوات</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">GACA</td>
                        <td className="border border-gray-300 p-4">السعودية</td>
                        <td className="border border-gray-300 p-4">الثقافة المحلية</td>
                        <td className="border border-gray-300 p-4">2 سنة</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Safety Requirements */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-pink-500 pr-4">
                متطلبات السلامة والحماية
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-pink-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">مقاومة الحريق</div>
                    <p className="text-gray-700">جميع المواد يجب أن تكون مقاومة للاشتعال ومعتمدة من FAR 25.853</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">الرؤية الليلية</div>
                    <p className="text-gray-700">عناصر عاكسة وألوان عالية التباين لحالات الطوارئ</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">المتانة</div>
                    <p className="text-gray-700">مقاومة التمزق والتآكل في البيئات القاسية</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-red-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">اختبارات السلامة المطلوبة</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ اختبار مقاومة الحريق (Flame Resistance)</li>
                      <li>✓ اختبار الانبعاثات السامة (Toxic Emissions)</li>
                      <li>✓ اختبار القوة والمتانة (Strength & Durability)</li>
                      <li>✓ اختبار الثبات اللوني (Color Fastness)</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ اختبار مقاومة الكهرباء الساكنة</li>
                      <li>✓ اختبار التوافق البيولوجي</li>
                      <li>✓ اختبار الأداء في درجات الحرارة القصوى</li>
                      <li>✓ اختبار مقاومة الأشعة فوق البنفسجية</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Compliance Process */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-orange-500 pr-4">
                عملية الامتثال والاعتماد
              </h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">مراحل الاعتماد</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-bold text-gray-800">التصميم الأولي</h4>
                          <p className="text-gray-600">وضع المفاهيم الأساسية ومراجعة اللوائح</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-bold text-gray-800">اختيار المواد</h4>
                          <p className="text-gray-600">اختبار وتقييم المواد المطابقة للمعايير</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-bold text-gray-800">النموذج الأولي</h4>
                          <p className="text-gray-600">إنتاج عينات للاختبار والتقييم</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                        <div>
                          <h4 className="font-bold text-gray-800">الاختبارات النهائية</h4>
                          <p className="text-gray-600">إجراء جميع الاختبارات المطلوبة</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">الوثائق المطلوبة</h3>
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          شهادات اختبار المواد
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          تقارير السلامة الفنية
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          مواصفات التصميم التفصيلية
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          خطة ضمان الجودة
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          إجراءات الصيانة والعناية
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          دليل التدريب والاستخدام
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Regional Differences */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-red-500 pr-4">
                الاختلافات الإقليمية والثقافية
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-red-800 mb-3">الشرق الأوسط</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• احترام القيم الثقافية والدينية</li>
                      <li>• تغطية مناسبة للجسم</li>
                      <li>• مراعاة المناخ الحار</li>
                      <li>• تكييف التصاميم للعادات المحلية</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-orange-800 mb-3">أوروبا</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• معايير الاستدامة البيئية</li>
                      <li>• لوائح العمل الصارمة</li>
                      <li>• متطلبات إعادة التدوير</li>
                      <li>• حقوق العمال والراحة</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-pink-800 mb-3">آسيا</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• التوازن بين التقليد والحداثة</li>
                      <li>• مراعاة التنوع الثقافي</li>
                      <li>• التكيف مع المناخات المتنوعة</li>
                      <li>• متطلبات الصحة المهنية</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">اللوائح السعودية الخاصة</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">المتطلبات الثقافية</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• التصاميم المحتشمة والمناسبة</li>
                        <li>• مراعاة التقاليد السعودية</li>
                        <li>• تكييف الألوان والرموز</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">المتطلبات البيئية</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• مقاومة درجات الحرارة العالية</li>
                        <li>• حماية من الرياح الرملية</li>
                        <li>• مواد خفيفة ومتينة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Analysis */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-pink-500 pr-4">
                التكاليف والاستثمار في الامتثال
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-pink-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-pink-800 mb-4">تكاليف التطوير والاعتماد</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">البحث والتطوير</span>
                        <span className="font-bold text-pink-600">$50,000 - $150,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">اختبارات السلامة</span>
                        <span className="font-bold text-pink-600">$25,000 - $75,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">رسوم الاعتماد</span>
                        <span className="font-bold text-pink-600">$15,000 - $40,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">التصنيع التجريبي</span>
                        <span className="font-bold text-pink-600">$30,000 - $80,000</span>
                      </div>
                      <hr className="border-pink-200" />
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span className="text-gray-800">الإجمالي</span>
                        <span className="text-pink-600">$120,000 - $345,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">العائد على الاستثمار</h3>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">18-24 شهر</div>
                        <p className="text-gray-700">فترة استرداد التكلفة المتوقعة</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-xl font-bold text-orange-600">25%</div>
                          <p className="text-gray-700 text-sm">توفير في التكاليف</p>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-orange-600">40%</div>
                          <p className="text-gray-700 text-sm">تحسن الجودة</p>
                        </div>
                      </div>
                      <div className="bg-orange-100 p-4 rounded-lg">
                        <p className="text-orange-800 text-sm">
                          الاستثمار في الامتثال يقلل من المخاطر القانونية ويحسن سمعة الشركة
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Future Trends */}
            <section className="mb-12 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-4 border-red-500 pr-4">
                مستقبل اللوائح والمعايير
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-red-800 mb-3">التوجهات المستقبلية</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• تشديد معايير الاستدامة البيئية</li>
                      <li>• دمج التقنيات الذكية والاستشعار</li>
                      <li>• معايير جديدة للصحة والعافية</li>
                      <li>• توحيد اللوائح الدولية</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-orange-800 mb-3">التحديات المقبلة</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• التوازن بين الأمان والراحة</li>
                      <li>• مواكبة التطورات التقنية</li>
                      <li>• التكيف مع التغيرات المناخية</li>
                      <li>• إدارة التكاليف المتزايدة</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">رؤية 2030 والطيران السعودي</h3>
                  <p className="text-gray-700 mb-4">
                    في إطار رؤية المملكة 2030، تتجه صناعة الطيران السعودية نحو تطوير معايير جديدة تجمع بين الأصالة والحداثة، مع التركيز على الاستدامة والابتكار.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-600 mb-1">50%</div>
                      <p className="text-gray-600 text-sm">تقليل الانبعاثات</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                      <p className="text-gray-600 text-sm">مواد قابلة لإعادة التدوير</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600 mb-1">30%</div>
                      <p className="text-gray-600 text-sm">تحسن الكفاءة</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="p-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg text-white text-center">
              <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى استشارة في لوائح أزياء الطيران؟</h2>
              <p className="text-xl mb-6 opacity-90">
                فريقنا من الخبراء جاهز لمساعدتك في فهم والامتثال لجميع اللوائح والمعايير المطلوبة
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                احصل على استشارة مجانية
              </Link>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">محتويات المقال</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-orange-600 hover:text-orange-800 transition-colors">
                    مقدمة: أهمية اللوائح
                  </a>
                  <a href="#standards" className="block text-orange-600 hover:text-orange-800 transition-colors">
                    المعايير الدولية
                  </a>
                  <a href="#safety" className="block text-orange-600 hover:text-orange-800 transition-colors">
                    متطلبات السلامة
                  </a>
                  <a href="#compliance" className="block text-orange-600 hover:text-orange-800 transition-colors">
                    عملية الامتثال
                  </a>
                  <a href="#regional" className="block text-orange-600 hover:text-orange-800 transition-colors">
                    الاختلافات الإقليمية
                  </a>
                  <a href="#costs" className="block text-orange-600 hover:text-orange-800 transition-colors">
                    التكاليف والاستثمار
                  </a>
                  <a href="#future" className="block text-orange-600 hover:text-orange-800 transition-colors">
                    مستقبل اللوائح
                  </a>
                </nav>
              </div>

              {/* Related Articles */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">مقالات ذات صلة</h3>
                <div className="space-y-4">
                  <Link href="/articles/flight-13" className="block group">
                    <div className="text-red-600 group-hover:text-red-800 transition-colors">
                      دليل الصيانة والعناية بأزياء طاقم الطيران
                    </div>
                  </Link>
                  <Link href="/articles/flight-14" className="block group">
                    <div className="text-red-600 group-hover:text-red-800 transition-colors">
                      علم نفس الألوان في أزياء الطيران
                    </div>
                  </Link>
                  <Link href="/articles/flight-15" className="block group">
                    <div className="text-red-600 group-hover:text-red-800 transition-colors">
                      المواد المستدامة في أزياء الطيران
                    </div>
                  </Link>
                  <Link href="/articles/flight-16" className="block group">
                    <div className="text-red-600 group-hover:text-red-800 transition-colors">
                      التصميم الإرجونومي في أزياء الطيران
                    </div>
                  </Link>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-b from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-3">تحتاج مساعدة؟</h3>
                <p className="mb-4 opacity-90">اتصل بنا للحصول على استشارة مخصصة</p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-orange-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
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