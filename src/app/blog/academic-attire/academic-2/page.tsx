import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'ألوان ورموز الزي الأكاديمي ودلالاتها العلمية',
  description: 'دليل شامل لألوان ورموز الزي الأكاديمي ودلالاتها على التخصصات والدرجات العلمية المختلفة، مع تفسير النظام العالمي للألوان وتطبيقاته في المؤسسات التعليمية.',
};

export default function ArticlePage() {
  const imageSrc = '/images/academic_attire/academic_colors.jpeg';
  const title = 'ألوان ورموز الزي الأكاديمي ودلالاتها العلمية';
  const readingTime = '٧ دقائق للقراءة';
  const datePublished = '١٨ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'color-system', title: 'نظام الألوان في الزي الأكاديمي' },
    { id: 'color-meanings', title: 'دلالات الألوان حسب التخصصات العلمية' },
    { id: 'symbols', title: 'الرموز والشارات في الزي الأكاديمي' },
    { id: 'international', title: 'الاختلافات الدولية في نظم الألوان' },
    { id: 'modern-adapt', title: 'التكييفات المعاصرة للألوان والرموز' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const tags = ["الزي الأكاديمي", "ألوان أكاديمية", "رموز الدرجات العلمية", "التخصصات الجامعية", "حفلات التخرج"];

  const relatedArticles = [
    {
      title: "تصميم الزي الأكاديمي: تاريخه وتطوره ودلالاته الثقافية",
      description: "نظرة شاملة على تاريخ الزي الأكاديمي وتطوره عبر العصور ودلالاته الثقافية والاجتماعية في المجتمعات المختلفة",
      image: "/images/academic_attire/header_academic_uniform.jpeg",
      url: "/blog/academic-attire/academic-1",
      date: "١٥ مايو ٢٠٢٤"
    },
    {
      title: "العباءة الأكاديمية السعودية: مزج الهوية المحلية مع التقاليد العالمية",
      description: "استعراض تطور العباءة الأكاديمية في المملكة العربية السعودية والجمع بين الهوية المحلية والتقاليد الأكاديمية العالمية",
      image: "/images/academic_attire/academic_robes_history.jpeg",
      url: "/blog/academic-attire/saudi-academic-gown",
      date: "٢٢ مايو ٢٠٢٤"
    },
    {
      title: "مستلزمات حفلات التخرج: الزي الأكاديمي وتنظيم الفعاليات",
      description: "دليل شامل لمستلزمات حفلات التخرج من الزي الأكاديمي والشهادات وكيفية تنظيم الفعاليات بشكل احترافي",
      image: "/images/academic_attire/graduation_gowns.jpeg",
      url: "/blog/academic-attire/graduation-ceremony-supplies",
      date: "٢٠ مايو ٢٠٢٤"
    }
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
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">الوسوم</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تعد ألوان ورموز الزي الأكاديمي جزءاً أساسياً من التقاليد الجامعية، وتحمل دلالات عميقة تمتد لقرون عديدة. فهي ليست مجرد عناصر زخرفية أو تصميمية، بل تمثل نظاماً متكاملاً من الرموز البصرية التي تعكس التخصصات العلمية والدرجات الأكاديمية والمؤسسات التعليمية المختلفة حول العالم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنستكشف نظام الألوان المستخدم في الزي الأكاديمي، ودلالات كل لون وارتباطه بمجالات العلوم والمعرفة المختلفة. كما سنتناول مجموعة الرموز والشارات التي تزين الزي الأكاديمي وتعكس المستويات والإنجازات العلمية، مع الإشارة إلى الاختلافات الدولية في هذه الأنظمة والتكييفات المعاصرة التي طرأت عليها.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                سواء كنت طالباً مقبلاً على التخرج، أو منظماً لحفلات التخرج الجامعية، أو مهتماً بالتقاليد الأكاديمية، فإن فهم هذا النظام اللوني والرمزي سيفتح أمامك نافذة جديدة لقراءة المشهد الأكاديمي وتفسير الدلالات البصرية التي تحيط بالمناسبات العلمية المختلفة.
              </p>
            </section>

            <section id="color-system" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">نظام الألوان في الزي الأكاديمي</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">نشأة وتطور نظام الألوان الأكاديمية</h3>
                <p className="mb-2 font-medium text-blue-700">المراحل التاريخية الرئيسية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>العصور الوسطى: بدايات التمييز اللوني بين الكليات في الجامعات الأوروبية الأولى</li>
                  <li>القرن الـ 18: ترسيخ نظام الألوان في الجامعات البريطانية كأسلوب للتمييز بين التخصصات</li>
                  <li>1895: تأسيس مجلس بين جامعي في الولايات المتحدة لتوحيد معايير الألوان الأكاديمية</li>
                  <li>1935: إصدار أول دليل رسمي للألوان الأكاديمية الذي أصبح أساساً للنظام المعاصر</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مكونات الزي الملونة</h3>
                  <p className="mb-2 text-gray-700">العناصر التي تظهر فيها الألوان الدالة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>الوشاح (Hood): العنصر الأكثر أهمية في تمثيل التخصص من خلال لون بطانته الداخلية</li>
                    <li>الشريط (Edging): الحافة الملونة التي تحيط بالقبعة الأكاديمية أو تزين العباءة</li>
                    <li>الشرابة (Tassel): الخيوط المتدلية من القبعة وقد يختلف لونها حسب الدرجة العلمية</li>
                    <li>القلادة (Stole): نوع من الوشاح يوضع حول الرقبة ويحمل ألواناً تمثل التخصص أو الإنجازات</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أهمية الألوان في السياق الأكاديمي</h3>
                  <p className="mb-2 text-gray-700">وظائف النظام اللوني:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>توفير نظام بصري موحد للتعرف على التخصصات عبر المؤسسات المختلفة</li>
                    <li>تسهيل تمييز الخلفيات الأكاديمية للمشاركين في المناسبات الرسمية</li>
                    <li>تعزيز الشعور بالانتماء للمجال العلمي والتخصص المحدد</li>
                    <li>الحفاظ على التقاليد التاريخية للمؤسسات التعليمية وتعزيز هويتها</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="color-meanings" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دلالات الألوان حسب التخصصات العلمية</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الألوان الأساسية والكليات التقليدية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">ألوان الكليات الكلاسيكية:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li><span className="font-bold text-purple-900">الأرجواني</span>: كلية القانون، يرمز للعدالة والكرامة الملكية</li>
                      <li><span className="font-bold text-green-700">الأخضر</span>: كلية الطب، يرمز للحياة والنمو والشفاء</li>
                      <li><span className="font-bold text-blue-700">الأزرق الداكن</span>: كلية الفلسفة، يرمز للحكمة والتأمل</li>
                      <li><span className="font-bold text-red-700">الأحمر القرمزي</span>: كلية اللاهوت، يرمز للإيمان والحماس</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li><span className="font-bold text-blue-400">الأزرق الفاتح</span>: كلية التعليم، يرمز لصفاء الأفكار</li>
                      <li><span className="font-bold text-amber-600">النحاسي/البرتقالي</span>: كلية الهندسة، يرمز للمعادن والبناء</li>
                      <li><span className="font-bold text-yellow-500">الذهبي الأصفر</span>: كلية العلوم، يرمز للبحث والاكتشاف</li>
                      <li><span className="font-bold text-pink-700">الوردي</span>: كلية الموسيقى، يرمز للإبداع والفن</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">ألوان التخصصات المعاصرة</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">الألوان المستحدثة للمجالات الحديثة:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                    <li><span className="font-bold text-teal-600">التركواز</span>: العلاج المهني والفيزيائي</li>
                    <li><span className="font-bold text-olive-600">الزيتوني</span>: الصيدلة وعلم الأدوية</li>
                    <li><span className="font-bold text-gray-500">الرمادي</span>: إدارة الأعمال والتجارة</li>
                    <li><span className="font-bold text-emerald-600">الزمردي الأخضر</span>: طب الأسنان</li>
                  </ol>
                  <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                    <li><span className="font-bold text-orange-500">البرتقالي</span>: علوم الحاسب والمعلوماتية</li>
                    <li><span className="font-bold text-indigo-600">البنفسجي</span>: العمارة والتصميم</li>
                    <li><span className="font-bold text-lime-500">الليموني</span>: الصحة العامة والوبائيات</li>
                    <li><span className="font-bold text-brown-600">البني</span>: الزراعة والغابات</li>
                  </ol>
                </div>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/academic_attire/school_uniforms_riyadh.jpeg"
                  alt="مخطط ألوان الزي الأكاديمي حسب التخصصات"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  مخطط توضيحي لألوان الزي الأكاديمي وارتباطها بالتخصصات العلمية المختلفة
                </div>
              </div>
            </section>

            <section id="symbols" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الرموز والشارات في الزي الأكاديمي</h2>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">رموز الدرجات العلمية</h3>
                <p className="mb-2 text-gray-700">عناصر تمييز المستوى الأكاديمي:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>شكل القبعة: مربعة للبكالوريوس والماجستير، مثمنة أو مستديرة للدكتوراه</li>
                  <li>الشرابة: موقعها (يمين، يسار، وسط) يحدد مرحلة ما قبل التخرج، التخرج، وبعد التخرج</li>
                  <li>أشرطة الأكمام: عددها وطولها يشير إلى الدرجة العلمية والأقدمية</li>
                  <li>المخمل والحرير: نوع القماش المستخدم في الزخارف يختلف حسب الدرجة العلمية</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">شارات التميز والإنجاز</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 text-gray-700">رموز الأداء الاستثنائي والمكانة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>وشاح التفوق (Honor Cords): حبال ملونة تشير إلى التفوق الأكاديمي</li>
                  <li>الدبابيس والميداليات: ترمز للعضوية في جمعيات علمية أو فخرية</li>
                  <li>الأشرطة الذهبية والفضية: تعكس المناصب القيادية الطلابية أو الإدارية</li>
                  <li>نجوم وزخارف خاصة: تمثل الإنجازات الاستثنائية أو المساهمات المميزة</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">شعارات المؤسسات</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">تمثيل الانتماء المؤسسي:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>شعار الجامعة: يظهر على الأزرار، القلادات، والأوشحة</li>
                      <li>رموز الكليات: شعارات خاصة بكل كلية أو مدرسة داخل الجامعة</li>
                      <li>ألوان المؤسسة: قد تدمج ألوان الجامعة الرسمية في الزي</li>
                      <li>شارات الانتماء: رموز تشير للشراكات والتوأمة الأكاديمية</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">رموز المناصب الأكاديمية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">تمييز المناصب الإدارية والعلمية:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>العصا الأكاديمية (Mace): رمز للسلطة يُحمل في المواكب الرسمية</li>
                      <li>سلسلة المنصب: قلادة معدنية ترمز لمنصب رئيس الجامعة أو العميد</li>
                      <li>الخاتم الرسمي: يحمله مسؤولو الجامعة كرمز للسلطة الأكاديمية</li>
                      <li>الأوشحة المميزة: ألوان وتصاميم خاصة لشاغلي المناصب العليا</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section id="international" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاختلافات الدولية في نظم الألوان</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">التقاليد الإقليمية في الزي الأكاديمي</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">تنوع الأنظمة اللونية عالمياً:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>التقليد البريطاني: ألوان تختلف حسب الجامعة أكثر من اختلافها حسب التخصص</li>
                    <li>النظام الأمريكي: توحيد قياسي للألوان وربطها بالتخصصات العلمية</li>
                    <li>التقاليد الأوروبية القارية: تنوع كبير بين الدول، غالباً مع تركيز على ألوان المؤسسات</li>
                    <li>الأنظمة الآسيوية: دمج بين التقاليد الغربية والرموز الثقافية المحلية</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تكييف نظام الألوان في العالم العربي</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 text-gray-700">خصوصية التطبيق في السياق العربي:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>دمج الألوان الوطنية: استخدام ألوان العلم الوطني في تصميم الزي الأكاديمي</li>
                  <li>العناصر التراثية: إضافة زخارف وعناصر من التراث العربي والإسلامي</li>
                  <li>التخصصات الإسلامية: تطوير ألوان خاصة للدراسات الإسلامية والشريعة</li>
                  <li>الاعتبارات الثقافية: تعديلات على الزي تراعي قيم الحشمة والهوية المحلية</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">حالات خاصة ومميزة</h3>
                <p className="mb-2 text-gray-700">تقاليد فريدة حول العالم:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>جامعة أكسفورد: نظام معقد من الألوان والرموز يعكس تاريخها العريق والكليات المختلفة</li>
                  <li>الجامعات الفرنسية: استخدام أوشحة ذات شرائط متعددة الألوان للتمييز بين التخصصات</li>
                  <li>الجامعات اليابانية: دمج العناصر التقليدية اليابانية مع التقاليد الغربية</li>
                  <li>جامعة الأزهر: نظام ألوان خاص يعكس تاريخها الإسلامي المميز والتخصصات الشرعية</li>
                </ul>
              </div>
            </section>

            <section id="modern-adapt" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التكييفات المعاصرة للألوان والرموز</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التحديات المعاصرة للنظام التقليدي</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تزايد التخصصات البينية التي لا تنتمي بوضوح لمجال علمي واحد</li>
                  <li>ظهور مجالات دراسية جديدة لم تكن موجودة عند وضع النظام الأصلي</li>
                  <li>التحولات في الهياكل الأكاديمية وتداخل التخصصات في الجامعات الحديثة</li>
                  <li>تنوع أشكال التعليم والدرجات العلمية بما يتجاوز النموذج التقليدي</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الابتكارات في نظام الألوان</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 text-gray-700">حلول مبتكرة للقضايا المعاصرة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>ألوان مزدوجة: دمج لونين لتمثيل التخصصات البينية (شرائط متعددة الألوان)</li>
                  <li>استحداث ألوان جديدة للمجالات المستجدة (كعلوم البيئة والاستدامة)</li>
                  <li>توظيف تدرجات الألوان لتعكس الارتباط بين التخصصات المتقاربة</li>
                  <li>أنظمة ألوان مرنة تسمح بالتخصيص حسب الجامعة مع الحفاظ على المعايير العامة</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">الاتجاهات المستقبلية</h3>
                <p className="mb-2 text-gray-700">آفاق تطور نظام الألوان والرموز:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>رقمنة الرموز: دمج رموز رقمية (QR) تحمل معلومات عن الخلفية الأكاديمية</li>
                  <li>الشمولية الثقافية: تطوير نظام عالمي يستوعب تنوع التقاليد الأكاديمية</li>
                  <li>التخصيص الشخصي: إتاحة خيارات تعكس المسار الأكاديمي الفريد لكل خريج</li>
                  <li>الاستدامة: استخدام مواد وتقنيات صديقة للبيئة مع الحفاظ على جماليات الزي التقليدي</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل ألوان ورموز الزي الأكاديمي لغة بصرية غنية تربط الماضي بالحاضر، وتعكس عمق وتنوع المجالات المعرفية والمؤسسات التعليمية حول العالم. هذا النظام اللوني والرمزي ليس مجرد تقليد جامد، بل هو نظام حي متطور، يستجيب للتغيرات في المشهد الأكاديمي مع الحفاظ على أصالته وقيمه الأساسية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في عصر يتسم بالعولمة وتداخل التخصصات، يواجه هذا النظام تحديات متنوعة تدفعه نحو مزيد من المرونة والابتكار. ومع ذلك، يبقى المغزى الأساسي لهذه الألوان والرموز ثابتاً: الاحتفاء بالإنجاز العلمي، وتجسيد الانتماء للتقاليد الأكاديمية، وتمييز المسارات المعرفية المختلفة في مشهد بصري غني بالدلالات.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                إن فهم هذه اللغة البصرية يمنحنا مفتاحاً لقراءة المشهد الأكاديمي بعمق أكبر، ويسمح لنا بتقدير التنوع الفكري والمعرفي الذي تجسده الجامعات والمؤسسات التعليمية. وبينما تستمر هذه الرموز في التطور، فإنها ستظل تعكس القيم الجوهرية للمؤسسات الأكاديمية: السعي للمعرفة، تقدير التميز، والاحتفاء بتنوع العلوم والمعارف البشرية.
              </p>
            </section>
          </article>
        </div>

        {/* مقالات ذات صلة */}
        <div className="mt-16 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={article.url} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-gray-100">
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 