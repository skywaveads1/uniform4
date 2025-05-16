import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'معايير اختيار الزي الطبي للعيادات الخاصة',
  description: 'دليل شامل لمعايير اختيار الزي الطبي المناسب للعيادات الخاصة بما يتوافق مع المتطلبات العملية والمهنية والتسويقية',
};

export default function ClinicWear2() {
  const imageSrc = '/images/clinic_wear/clinic_clothing.jpeg';
  const title = 'معايير اختيار الزي الطبي للعيادات الخاصة';
  const readingTime = '٦ دقائق للقراءة';
  const datePublished = '١٢ يونيو ٢٠٢٤';

  const relatedArticles = [
    {
      title: "الزي الطبي الحديث: مزايا وتطورات ملابس العيادات",
      description: "استعراض شامل للتطورات الحديثة في تصميم الزي الطبي للعيادات وأهميته في تعزيز الصورة المهنية",
      image: "/images/clinic_wear/medical_wear.jpeg",
      url: "/blog/clinic-wear/clinic-1",
      date: "١٨ يونيو ٢٠٢٤",
      category: "الزي الطبي"
    },
    {
      title: "الزي الموحد في قطاع خدمات التموين والضيافة السعودي",
      description: "استعراض شامل لتطور الزي الموحد في قطاع خدمات التموين والضيافة في المملكة العربية السعودية",
      image: "/images/clinic_wear/medical_wear.jpeg",
      url: "/blog/chef-uniforms/uniform-in-services-catering-Saudi",
      date: "٢٠ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    },
    {
      title: "اتجاهات تصميم ملابس الطهاة لعام 2025",
      description: "استعراض لأحدث اتجاهات تصميم ملابس الطهاة المتوقعة في عام 2025",
      image: "/images/clinic_wear/medical_wear.jpeg",
      url: "/blog/chef-uniforms/in-design-clothing-chef-2025",
      date: "١٠ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    }
  ];

  const tags = ["معايير الزي الطبي", "ملابس العيادات الخاصة", "يونيفورم طبي", "اختيار الزي الطبي", "زي الأطباء", "الهوية البصرية للعيادات"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'professional-image', title: 'الصورة المهنية والهوية البصرية' },
    { id: 'quality-standards', title: 'معايير الجودة والمتانة' },
    { id: 'comfort-functionality', title: 'الراحة والوظائف العملية' },
    { id: 'hygiene-safety', title: 'النظافة والسلامة' },
    { id: 'clinic-types', title: 'اختيار الزي حسب نوع العيادة' },
    { id: 'supplier-selection', title: 'معايير اختيار مورد الزي الطبي' },
  ];

  return (
    <main className="bg-gray-50 rtl">
      {/* صورة الغلاف الكاملة مع تأثير التدرج */}
      <div className="relative w-full h-[60vh] mb-8">
            <Image
              src={imageSrc}
              alt={title}
              fill
          priority
              style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <div className="flex items-center text-gray-200 text-sm md:text-base mb-6">
              <span className="flex items-center mr-4"><FaClock className="ml-1" />{readingTime}</span>
              <span>{datePublished}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* القائمة الجانبية */}
          <aside className="md:w-1/4 md:sticky md:top-24 h-fit bg-white p-5 rounded-lg shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">محتويات المقال</h3>
              <nav>
                <ul className="space-y-2">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-blue-600 block transition-colors py-1 text-sm"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مشاركة المقال</h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="border-t pt-4 mt-6">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h3>
              <ul className="space-y-3">
                {relatedArticles.map((article, index) => (
                  <li key={index}>
                    <Link href={article.url} className="text-sm hover:text-blue-600 block">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعد اختيار الزي الطبي المناسب للعيادات الخاصة قراراً استراتيجياً يتجاوز البعد الجمالي ليؤثر في ثقة المرضى، أداء الكادر الطبي، وصورة العيادة كمؤسسة صحية احترافية. في ظل المنافسة المتزايدة بين العيادات الخاصة في المملكة، أصبح الزي الطبي أحد عناصر التميز والهوية المؤسسية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا الدليل الشامل، نستعرض المعايير الأساسية لاختيار الزي الطبي المناسب للعيادات الخاصة، مع التركيز على الجوانب العملية والمهنية والتسويقية. سواء كنت تخطط لافتتاح عيادة جديدة أو تسعى لتحديث صورة عيادة قائمة، ستجد هنا إرشادات مفيدة لاتخاذ القرار الأمثل.
          </p>
        </section>

            <section id="professional-image" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الصورة المهنية والهوية البصرية</h2>
          
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">عناصر الصورة المهنية في الزي الطبي</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">التوافق مع الهوية البصرية:</span> اختيار ألوان وتصاميم تنسجم مع شعار وألوان العيادة لتعزيز التعرف على العلامة التجارية.</li>
                  <li><span className="font-medium">التمييز بين الأدوار:</span> زي متباين يسمح للمرضى بالتمييز بسهولة بين الأطباء والممرضين والإداريين.</li>
                  <li><span className="font-medium">التعبير عن تخصص العيادة:</span> عناصر تصميمية تعكس طبيعة التخصص الطبي (طب أطفال، جلدية، أسنان).</li>
                  <li><span className="font-medium">الأناقة المهنية:</span> تصاميم تعكس مستوى العيادة وتضمن مظهراً احترافياً يبعث على الثقة.</li>
          </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="أزياء طبية تعزز الصورة المهنية للعيادات"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  كادر طبي في عيادة خاصة يرتدي زياً موحداً يعزز الصورة المهنية والهوية البصرية للمؤسسة
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">الزي الموحد في عيادتنا أصبح جزءاً أساسياً من استراتيجية التسويق. المرضى يتذكرون اللون المميز والتصميم الأنيق، وأصبح أحد عناصر هويتنا البصرية في مواد التسويق والتواصل الاجتماعي. كما أنه يعزز شعور الانتماء لدى فريق العمل.</p>
                  <footer className="text-sm text-gray-600">— د. نورة العتيبي، مديرة عيادات الرياض للأسنان</footer>
                </blockquote>
              </div>
        </section>

            <section id="quality-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير الجودة والمتانة</h2>
          
              <p className="mb-4 leading-7 text-gray-700">
                تمثل جودة الزي الطبي استثماراً طويل المدى يؤثر في عدة جوانب من عمل العيادة:
          </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مواصفات الأقمشة عالية الجودة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>نسبة قطن لا تقل عن 35% لضمان الراحة</li>
                    <li>كثافة نسيج 180-240 جم/م² للمتانة</li>
                    <li>معالجة ضد الانكماش والتجعد</li>
                    <li>ثبات الألوان بعد غسيل متكرر</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مؤشرات الجودة في التصنيع</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>خياطة مزدوجة في المناطق المعرضة للضغط</li>
                    <li>أزرار مثبتة بإحكام أو بدائل كالسحابات</li>
                    <li>تقوية الجيوب وأماكن تعليق الأدوات</li>
                    <li>تشطيبات نظيفة للحواف الداخلية</li>
          </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="معايير جودة الزي الطبي للعيادات"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  فحص جودة الأقمشة والخياطة في الزي الطبي المخصص للعيادات الخاصة
                </div>
              </div>
        </section>

            <section id="comfort-functionality" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الراحة والوظائف العملية</h2>
          
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">عناصر الراحة والوظائف العملية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">قابلية التنفس والتحكم في الحرارة:</span> خاصة في المناطق ذات المناخ الحار، وفي العيادات ذات التكييف القوي.</li>
                    <li><span className="font-medium">خاصية التمدد والمرونة:</span> أقمشة تحتوي على نسبة سباندكس أو مواد مرنة تسمح بحرية الحركة.</li>
                    <li><span className="font-medium">وزن مناسب للارتداء لساعات طويلة:</span> تجنب الأقمشة الثقيلة التي تسبب الإرهاق أثناء يوم عمل طويل.</li>
                    <li><span className="font-medium">تصميم وظيفي للجيوب والحوامل:</span> جيوب بأحجام مناسبة للأدوات الطبية المستخدمة بشكل متكرر.</li>
          </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="ملابس طبية مريحة وعملية للعيادات"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  زي طبي عصري يجمع بين الراحة والوظائف العملية لاستخدام يومي طويل في العيادات الخاصة
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">عندما استثمرنا في زي طبي مريح وعملي، لاحظنا تحسناً في معنويات الفريق وإنتاجيتهم. أكثر ما يقدره الكادر الطبي هو الأقمشة المريحة خفيفة الوزن والتصميم العملي للجيوب، خاصة مع نوبات العمل الطويلة في العيادة.</p>
                  <footer className="text-sm text-gray-600">— منال الشمري، مديرة التمريض في مجمع عيادات المستقبل</footer>
                </blockquote>
              </div>
        </section>

            <section id="hygiene-safety" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">النظافة والسلامة</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تعد معايير النظافة والسلامة من أهم الاعتبارات في اختيار الزي الطبي للعيادات، خاصة في ظل متطلبات مكافحة العدوى:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مواصفات النظافة والسلامة في الزي الطبي</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">معالجات مضادة للميكروبات:</span> خصائص تثبط نمو البكتيريا وتقلل الروائح، خاصة في بيئات العمل المكثف.</li>
                  <li><span className="font-medium">قابلية الغسل بدرجات حرارة عالية:</span> أقمشة تتحمل التنظيف بمواد مطهرة ودرجات حرارة لا تقل عن 60 درجة مئوية.</li>
                  <li><span className="font-medium">معالجات طاردة للسوائل:</span> حماية من تسرب السوائل والبقع، مع المحافظة على قابلية التنفس.</li>
                  <li><span className="font-medium">خصائص مقاومة الاشتعال:</span> خاصة للعيادات التي تستخدم فيها معدات ذات درجات حرارة عالية.</li>
                  <li><span className="font-medium">تصميمات سهلة التنظيف:</span> تجنب التفاصيل المعقدة والزخارف التي يصعب تنظيفها أو تتراكم فيها الأوساخ.</li>
          </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="ملابس طبية مقاومة للميكروبات والبقع"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  زي طبي بمعالجات متقدمة مضادة للميكروبات وطاردة للسوائل لبيئة عمل أكثر نظافة وأماناً
                </div>
              </div>
        </section>

            <section id="clinic-types" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اختيار الزي حسب نوع العيادة</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تختلف متطلبات الزي الطبي باختلاف التخصص والفئة المستهدفة للعيادة:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">عيادات الأسنان</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>معاطف قصيرة أو بدلات ذات أكمام قصيرة للحركة</li>
                      <li>ألوان فاتحة لإظهار أي تلوث أو بقع</li>
                      <li>أقمشة مقاومة للماء والرذاذ</li>
                      <li>جيوب إضافية لأدوات الأسنان الصغيرة</li>
          </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">عيادات الأطفال</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>ألوان زاهية ورسومات مرحة لخلق بيئة ودية</li>
                      <li>تصميمات تحتوي على شخصيات كرتونية</li>
                      <li>أقمشة ناعمة غير معالجة بمواد كيميائية قاسية</li>
                      <li>جيوب إضافية للألعاب والمكافآت الصغيرة</li>
          </ul>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="زي طبي لعيادات الأطفال"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  زي طبي مصمم خصيصاً لعيادات الأطفال بألوان مرحة ورسومات تخفف من رهبة الزيارة الطبية
                </div>
              </div>
          
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">أنواع أخرى من العيادات</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">عيادات التجميل والجلدية:</span> زي أنيق بتصميم عصري يعكس الذوق الرفيع، غالباً بألوان هادئة وخامات فاخرة.</li>
                  <li><span className="font-medium">العيادات النسائية:</span> زي يراعي الخصوصية الثقافية مع ألوان ناعمة وتصميمات محتشمة.</li>
                  <li><span className="font-medium">العيادات الجراحية:</span> زي عملي بدرجة عالية من الحماية والتعقيم، مع إمكانية ارتداء طبقات إضافية.</li>
                  <li><span className="font-medium">عيادات الطب البديل والتأهيل:</span> زي مريح يسمح بحرية الحركة، غالباً بألوان محايدة تبعث على الاسترخاء.</li>
          </ul>
              </div>
        </section>

            <section id="supplier-selection" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير اختيار مورد الزي الطبي</h2>
          
              <p className="mb-4 leading-7 text-gray-700">
                يؤثر اختيار المورد المناسب بشكل كبير على جودة الزي الطبي وتجربة العيادة على المدى الطويل:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">معايير تقييم موردي الزي الطبي</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">الخبرة في قطاع الرعاية الصحية:</span> الاستعانة بموردين متخصصين في الزي الطبي وليس موردي يونيفورم عامين.</li>
                  <li><span className="font-medium">القدرة على التخصيص:</span> إمكانية تعديل التصاميم والألوان حسب هوية العيادة الخاصة.</li>
                  <li><span className="font-medium">خدمات ما بعد البيع:</span> توفير خدمات الصيانة والاستبدال وإضافة قطع جديدة بنفس التصميم لاحقاً.</li>
                  <li><span className="font-medium">الشهادات والمعايير:</span> حيازة المورد على شهادات الجودة مثل ISO 9001 وشهادات سلامة المنسوجات.</li>
                  <li><span className="font-medium">المرونة في التوريد:</span> القدرة على توفير قطع إضافية بسرعة عند الحاجة أو تغيير المقاسات.</li>
          </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="إدارة توريد الزي الطبي للعيادات"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  عملية تصميم وتوريد الزي الطبي المخصص للعيادات الخاصة مع فريق متخصص
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">التعامل مع مورد متخصص في الزي الطبي وفر علينا الكثير من الوقت والجهد. خبرتهم في فهم متطلبات العيادات المختلفة ساعدتنا في اختيار الزي الأنسب لتخصصنا، كما وفروا خدمة ممتازة في التطريز والتخصيص والتبديل، وهو ما لم نجده مع الموردين العامين.</p>
                  <footer className="text-sm text-gray-600">— د. عبدالرحمن السلمي، مؤسس مركز الرعاية الطبية المتكاملة</footer>
                </blockquote>
              </div>
        </section>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
              <h2 className="text-xl font-semibold mb-3">الكلمات المفتاحية</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-10 pt-6">
              <h2 className="text-xl font-semibold mb-4">مقالات ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((article, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 text-blue-900 hover:text-blue-700">
                        <Link href={article.url}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                      <p className="text-sm text-gray-700 line-clamp-2">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
      </article>
        </div>
      </div>
    </main>
  );
}