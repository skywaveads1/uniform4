import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaHeartbeat, FaStar, FaCheckCircle } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'التصميم الإرجونومي في أزياء الطيران: الصحة والراحة أولاً | يونيفورم',
  description: 'اكتشف كيف يساهم التصميم الإرجونومي في أزياء طاقم الطيران في تحسين الصحة والراحة، وتقليل التعب والإجهاد أثناء ساعات العمل الطويلة.',
  keywords: 'التصميم الإرجونومي، راحة طاقم الطيران، صحة العمل، أزياء مريحة، تصميم وظيفي، السعودية',
  openGraph: {
    title: 'التصميم الإرجونومي في أزياء الطيران: الصحة والراحة أولاً',
    description: 'تحسين صحة وراحة طاقم الطيران من خلال التصميم الإرجونومي المتطور',
    images: ['/images/flight_crew/crew_uniform_visual_identity.webp'],
  },
};

export default function Article16Page() {
  const heroImage = '/images/flight_crew/crew_uniform_visual_identity.webp';
  const title = 'التصميم الإرجونومي في أزياء الطيران: الصحة والراحة أولاً';
  const readingTime = '10 دقائق';
  const publishDate = '٢٥ ديسمبر ٢٠٢٤';
  const author = 'خبراء الصحة المهنية والتصميم - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'principles', title: 'مبادئ التصميم الإرجونومي' },
    { id: 'health-benefits', title: 'الفوائد الصحية' },
    { id: 'design-features', title: 'ميزات التصميم المتطور' },
    { id: 'material-technology', title: 'تقنيات المواد المتقدمة' },
    { id: 'case-studies', title: 'دراسات حالة' },
    { id: 'implementation', title: 'التطبيق العملي' },
    { id: 'future-trends', title: 'الاتجاهات المستقبلية' },
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
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaHeartbeat />
                  الصحة والراحة
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                تطوير أزياء الطيران وفقاً لأسس علمية لضمان الصحة والراحة المثلى للطاقم
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

            <div className="bg-gradient-to-br from-blue-50 to-teal-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-blue-900">
                استشارة إرجونومية
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                احصل على تقييم إرجونومي متخصص لأزياء طاقم الطيران في شركتك
              </p>
              <Link 
                href="/quote" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors block text-center text-sm font-medium"
              >
                طلب تقييم مجاني
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
                  يعمل طاقم الطيران في بيئة فريدة تتطلب ساعات عمل طويلة، وحركة مستمرة، والتعامل مع ضغوط جسدية ونفسية متنوعة. في هذا السياق، يلعب التصميم الإرجونومي لأزياء الطيران دوراً حاسماً في ضمان صحة وراحة الطاقم، وتحسين أدائهم وإنتاجيتهم.
                </p>
                
                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-blue-600" />
                    أهمية التصميم الإرجونومي
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>🏥 تقليل الإصابات المهنية</li>
                      <li>💪 تحسين الأداء البدني</li>
                      <li>😊 زيادة الرضا الوظيفي</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>⚡ تقليل التعب والإجهاد</li>
                      <li>🎯 تحسين التركيز والدقة</li>
                      <li>💰 توفير تكاليف الرعاية الصحية</li>
                    </ul>
                  </div>
                </div>

                <p>
                  التصميم الإرجونومي لا يقتصر على الراحة الفورية، بل يمتد ليشمل الوقاية من الإصابات طويلة المدى، وتحسين جودة حياة العمل، وتعزيز الكفاءة المهنية. هذا النهج العلمي في التصميم يأخذ في الاعتبار علم التشريح والفسيولوجيا وعلم النفس لخلق أزياء تتناغم مع احتياجات الجسم البشري.
                </p>
              </div>
            </section>

            <section id="principles" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                مبادئ التصميم الإرجونومي
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-blue-600" />
                    المبادئ الأساسية للتصميم الصحي
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-800 mb-2">التوافق مع التشريح البشري</h4>
                        <p className="text-sm text-gray-700">
                          تصميم الأزياء وفقاً لشكل الجسم الطبيعي ونقاط الضغط والحركة
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-medium text-cyan-800 mb-2">المرونة والحركة</h4>
                        <p className="text-sm text-gray-700">
                          ضمان حرية الحركة الكاملة في جميع الاتجاهات دون قيود
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-medium text-teal-800 mb-2">توزيع الوزن</h4>
                        <p className="text-sm text-gray-700">
                          توزيع متوازن للوزن لتجنب الضغط على نقاط محددة
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-64">
                      <Image
                        src="/images/flight_crew/ergonomic_design_principles.jpeg"
                        alt="مبادئ التصميم الإرجونومي"
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
                      <tr className="bg-blue-600 text-white">
                        <th className="border border-gray-300 p-4 text-right">المبدأ</th>
                        <th className="border border-gray-300 p-4 text-right">التطبيق</th>
                        <th className="border border-gray-300 p-4 text-right">الفائدة</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">القصة التشريحية</td>
                        <td className="border border-gray-300 p-4">خياطة تتبع منحنيات الجسم</td>
                        <td className="border border-gray-300 p-4">راحة وحرية حركة</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">النسيج المتمدد</td>
                        <td className="border border-gray-300 p-4">مواد مرنة في النقاط الحرجة</td>
                        <td className="border border-gray-300 p-4">تحسين الأداء الحركي</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-medium">التهوية الذكية</td>
                        <td className="border border-gray-300 p-4">فتحات تهوية استراتيجية</td>
                        <td className="border border-gray-300 p-4">تنظيم حرارة الجسم</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-medium">التبطين المدروس</td>
                        <td className="border border-gray-300 p-4">حشو في نقاط الضغط</td>
                        <td className="border border-gray-300 p-4">تقليل التعب والألم</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="health-benefits" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-blue-600 pr-4">
                الفوائد الصحية
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-48">
                  <Image
                    src="/images/flight_crew/health_benefits_ergonomic.jpeg"
                    alt="الفوائد الصحية للتصميم الإرجونومي"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    تحسينات صحية ملموسة
                  </h3>
                  <p className="text-gray-700 text-sm">
                    الأزياء المصممة إرجونومياً تحقق فوائد صحية مثبتة علمياً، من تحسين الدورة الدموية إلى تقليل آلام العضلات والمفاصل، مما يؤدي إلى تحسين جودة الحياة المهنية للطاقم.
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">النتائج المثبتة:</h4>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>📉 تقليل آلام الظهر بنسبة 60%</li>
                      <li>💨 تحسين التنفس بنسبة 25%</li>
                      <li>🩸 تحسين الدورة الدموية</li>
                      <li>😴 جودة نوم أفضل بعد العمل</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  📊 التأثيرات الإيجابية على صحة الطاقم
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">الصحة الجسدية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• تقليل التعب العضلي</li>
                      <li>• تحسين وضعية الجسم</li>
                      <li>• منع إصابات الحركة المتكررة</li>
                      <li>• تقليل ضغط المفاصل</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">الصحة النفسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• زيادة الثقة بالنفس</li>
                      <li>• تقليل التوتر المهني</li>
                      <li>• تحسين المزاج العام</li>
                      <li>• زيادة الرضا الوظيفي</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">الأداء المهني:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• تحسين الكفاءة</li>
                      <li>• زيادة التركيز</li>
                      <li>• تقليل الأخطاء</li>
                      <li>• سرعة الاستجابة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="daily-care" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                العناية اليومية
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/comfort_safety_airline_uniforms.webp"
                    alt="التصميم الإرجونومي في أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-800">
                    مبادئ التصميم الإرجونومي
                  </h3>
                  <p className="text-gray-700">
                    يركز التصميم الإرجونومي على توافق الزي مع التشريح البشري وطبيعة الحركة في بيئة الطيران. هذا النهج العلمي يضمن الراحة القصوى والأداء الأمثل للطاقم.
                  </p>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-teal-800">العناصر الأساسية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🧍 دعم المفاصل والعضلات</li>
                      <li>🤲 حرية الحركة الكاملة</li>
                      <li>🌡️ تنظيم حرارة الجسم</li>
                      <li>⚖️ توزيع متوازن للوزن</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* إضافة صورة إضافية للمحتوى */}
              <div className="my-8">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/flight_crew/best_flight_crew_attire.webp"
                    alt="أفضل تصاميم أزياء الطيران الإرجونومية"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-sm font-medium">
                      تصاميم متطورة تجمع بين الأناقة والوظيفية لراحة مثلى لطاقم الطيران
                    </p>
                  </div>
                </div>
              </div>

              {/* قسم إضافي للتقنيات المتطورة */}
              <div className="bg-blue-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">التقنيات المتطورة في التصميم</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/flight_crew_uniform_fabrics.webp"
                        alt="أقمشة متطورة لأزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">أقمشة ذكية</h4>
                    <p className="text-sm text-gray-600">أقمشة تتكيف مع درجة الحرارة وتوفر تهوية مثلى</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/air_crew_innovative_uniforms.webp"
                        alt="تصاميم مبتكرة لأزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">تصميم مبتكر</h4>
                    <p className="text-sm text-gray-600">قطع معاد تصميمها علمياً لتوفير راحة استثنائية</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/images/flight_crew/accessories_overview.webp"
                        alt="إكسسوارات مساعدة للراحة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">إكسسوارات داعمة</h4>
                    <p className="text-sm text-gray-600">عناصر مساعدة تعزز الراحة والأداء</p>
                  </div>
                </div>
              </div>

            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/flight-crew/flight-6" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/modern_comfort_technology.jpeg"
                        alt="تقنيات الراحة الحديثة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        تقنيات الراحة والأمان في أزياء الطيران الحديثة
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-13" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/uniform_maintenance_care.jpeg"
                        alt="صيانة أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        دليل الصيانة والعناية بأزياء طاقم الطيران
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-15" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/sustainable_airline_uniforms.jpeg"
                        alt="المواد المستدامة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                        المواد المستدامة في أزياء الطيران
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