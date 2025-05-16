import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تصميم الزي الأكاديمي: تاريخه وتطوره ودلالاته الثقافية',
  description: 'دليل شامل حول تاريخ الزي الأكاديمي وتطوره عبر العصور ودلالاته الثقافية، مع التركيز على أنواعه ومكوناته الرئيسية وأهميته في المناسبات الأكاديمية المختلفة.',
};

export default function ArticlePage() {
  const imageSrc = '/images/academic_attire/header_academic_uniform.jpeg';
  const title = 'تصميم الزي الأكاديمي: تاريخه وتطوره ودلالاته الثقافية';
  const readingTime = '٨ دقائق للقراءة';
  const datePublished = '١٥ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'history', title: 'تاريخ الزي الأكاديمي وأصوله' },
    { id: 'components', title: 'مكونات الزي الأكاديمي وأنواعه' },
    { id: 'significance', title: 'الدلالات الثقافية والرمزية للزي الأكاديمي' },
    { id: 'modern-use', title: 'استخدامات الزي الأكاديمي في العصر الحديث' },
    { id: 'design', title: 'اعتبارات تصميم الزي الأكاديمي المعاصر' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const tags = ["الزي الأكاديمي", "الجامعات", "التعليم", "التقاليد الأكاديمية", "التخرج", "روب التخرج"];

  const relatedArticles = [
    {
      title: "ألوان ورموز الزي الأكاديمي ودلالاتها العلمية",
      description: "استكشاف معاني الألوان والرموز المستخدمة في الزي الأكاديمي ودلالاتها على التخصصات والدرجات العلمية المختلفة",
      image: "/images/academic_attire/academic_colors.jpeg",
      url: "/blog/academic-attire/academic-2",
      date: "١٨ مايو ٢٠٢٤"
    },
    {
      title: "مستلزمات حفلات التخرج: الزي الأكاديمي وتنظيم الفعاليات",
      description: "دليل شامل لمستلزمات حفلات التخرج من الزي الأكاديمي والشهادات وكيفية تنظيم الفعاليات بشكل احترافي",
      image: "/images/academic_attire/graduation_gowns.jpeg",
      url: "/blog/academic-attire/graduation-ceremony-supplies",
      date: "٢٠ مايو ٢٠٢٤"
    },
    {
      title: "العباءة الأكاديمية السعودية: مزج الهوية المحلية مع التقاليد العالمية",
      description: "استعراض تطور العباءة الأكاديمية في المملكة العربية السعودية والجمع بين الهوية المحلية والتقاليد الأكاديمية العالمية",
      image: "/images/academic_attire/academic_robes_history.jpeg",
      url: "/blog/academic-attire/saudi-academic-gown",
      date: "٢٢ مايو ٢٠٢٤"
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
                يُعد الزي الأكاديمي من أقدم التقاليد الجامعية وأكثرها رسوخاً، فهو يجسد تاريخاً عريقاً يمتد لقرون عديدة، ويحمل في طياته رموزاً ودلالات ثقافية عميقة. لا يُعتبر هذا الزي مجرد لباس احتفالي يُرتدى في المناسبات الأكاديمية، بل هو شاهد على تطور المؤسسات التعليمية وتقاليدها عبر العصور المختلفة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنتناول تاريخ الزي الأكاديمي وأصوله، ونستعرض مكوناته الرئيسية بمختلف أشكالها وأنواعها. كما سنسلط الضوء على الدلالات الثقافية والرمزية التي يحملها هذا الزي، واستخداماته في العصر الحديث، وصولاً إلى الاعتبارات المعاصرة التي تؤثر في تصميمه.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                سواء كنت مصمماً للأزياء الأكاديمية، أو مسؤولاً في مؤسسة تعليمية، أو حتى طالباً مقبلاً على التخرج، فإن فهم جوانب الزي الأكاديمي المختلفة سيفتح أمامك نافذة واسعة على عالم من التقاليد العريقة والرموز ذات المغزى، التي تربط الماضي بالحاضر، وتعزز الشعور بالانتماء للمجتمع الأكاديمي العالمي.
              </p>
            </section>

            <section id="history" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تاريخ الزي الأكاديمي وأصوله</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">جذور الزي الأكاديمي في العصور الوسطى</h3>
                <p className="mb-2 font-medium text-blue-700">البدايات الأولى للزي الجامعي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>نشأ الزي الأكاديمي في أوروبا خلال القرنين الـ 12 والـ 13 الميلادي، بالتزامن مع تأسيس أولى الجامعات</li>
                  <li>كان الزي في الأصل ملابس يومية يرتديها رجال الدين والعلماء المسؤولون عن التدريس في الجامعات الأولى</li>
                  <li>استُوحي التصميم من الجبة الرهبانية (Cappa Clausa) التي كانت تُستخدم للتدفئة في قاعات الدراسة الباردة</li>
                  <li>كان يهدف إلى تمييز أعضاء المجتمع الأكاديمي وإضفاء طابع رسمي ومهيب على المناسبات الجامعية</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تطور الزي عبر العصور</h3>
                  <p className="mb-2 text-gray-700">المراحل التاريخية الرئيسية:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>القرن الـ 14: تنوع الزي الأكاديمي حسب الرتب والتخصصات العلمية</li>
                    <li>القرن الـ 16: ترسيخ التقاليد المتعلقة بالألوان والرموز الخاصة بالكليات المختلفة</li>
                    <li>القرن الـ 18: تقنين الزي الأكاديمي في الجامعات البريطانية، خاصة أكسفورد وكامبريدج</li>
                    <li>القرن الـ 19: انتشار التقليد إلى الجامعات الأمريكية مع تطويره ليناسب السياق المحلي</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">توحيد المعايير في العصر الحديث</h3>
                  <p className="mb-2 text-gray-700">مبادرات تنظيم الزي الأكاديمي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>1895: تأسيس مجلس بين جامعي في الولايات المتحدة لتوحيد معايير الزي الأكاديمي</li>
                    <li>1935: إصدار أول دليل شامل للزي الأكاديمي والألوان حسب التخصصات</li>
                    <li>1960: توسع استخدام الزي في المناسبات الرسمية على مستوى عالمي</li>
                    <li>2000 وما بعده: تكييف الزي الأكاديمي مع الهويات الثقافية المحلية مع الحفاظ على المعايير الأساسية</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="components" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مكونات الزي الأكاديمي وأنواعه</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">المكونات الأساسية للزي الأكاديمي</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">العناصر الرئيسية للزي التقليدي:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>العباءة (الروب): الرداء الخارجي الفضفاض، ويختلف تصميمه حسب الدرجة العلمية</li>
                    <li>القلنسوة (القبعة): غطاء الرأس الأكاديمي، وأشهرها القبعة المربعة المعروفة باسم قبعة التخرج</li>
                    <li>الوشاح (الشال): يوضع حول الرقبة أو الكتفين، ويعكس لونه التخصص الأكاديمي</li>
                    <li>القلادة: تُمنح للأشخاص ذوي المناصب الأكاديمية الرفيعة كرؤساء الجامعات والعمداء</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">أنواع الزي حسب الدرجة العلمية</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">تصنيف الأزياء حسب المستوى الأكاديمي:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>زي البكالوريوس: عباءة بسيطة ذات أكمام طويلة مغلقة، قبعة مربعة مع شرابة</li>
                  <li>زي الماجستير: عباءة ذات أكمام أطول وأكثر اتساعاً، قبعة مربعة مماثلة لدرجة البكالوريوس</li>
                  <li>زي الدكتوراه: عباءة فاخرة ذات ألوان زاهية، أكمام مستديرة واسعة مبطنة بأقمشة ملونة، قبعة مخملية مثمنة</li>
                  <li>زي الأساتذة والإداريين: تصاميم خاصة تعكس المنصب الأكاديمي، غالباً ما تكون مزخرفة بشكل أكثر تميزاً</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الأنماط الإقليمية والثقافية</h3>
                <p className="mb-2 text-gray-700">تنوع الزي الأكاديمي حول العالم:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>النمط البريطاني: يتميز بالتفاصيل التقليدية والتنوع بين الجامعات، مع استخدام مكثف للفرو المخملي</li>
                  <li>النمط الأمريكي: أكثر توحيداً وبساطة، مع تركيز على نظام الألوان حسب التخصصات</li>
                  <li>النمط الأوروبي القاري: تنوع كبير بين الدول، وخاصة في فرنسا وإيطاليا وألمانيا، مع استخدام ألوان وتصاميم مميزة</li>
                  <li>الأنماط العربية والإسلامية: دمج التقاليد الأكاديمية الغربية مع عناصر من التراث المحلي والثقافة الإسلامية</li>
                </ul>
              </div>
            </section>

            <section id="significance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الدلالات الثقافية والرمزية للزي الأكاديمي</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الرمزية المهنية والعلمية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">ما يعكسه الزي من قيم أكاديمية:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>رمز للسلطة العلمية والمكانة الأكاديمية في المجتمع</li>
                      <li>تجسيد للتراكم المعرفي والاستمرارية في تقاليد التعليم</li>
                      <li>إشارة إلى المستوى التعليمي والتخصص العلمي للفرد</li>
                      <li>تمثيل للانتماء لمجتمع علمي عالمي يتجاوز الحدود الجغرافية والثقافية</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">دلالات الألوان والزخارف</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">لغة الرموز البصرية:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>الألوان كرموز للتخصصات: الأحمر للاهوت، الأزرق للفلسفة، الأخضر للطب، إلخ</li>
                      <li>الزخارف الذهبية والفضية: تشير إلى المناصب القيادية في المؤسسات الأكاديمية</li>
                      <li>أشرطة القطيفة والحرير: تعكس المستوى العلمي والتخصص</li>
                      <li>الشارات والشعارات: ترمز للانتماء لمؤسسة تعليمية محددة وتاريخها</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المعاني الاجتماعية والنفسية</h3>
                <p className="mb-2 text-gray-700">أبعاد غير مرئية للزي الأكاديمي:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>الشعور بالإنجاز والفخر عند ارتداء الزي في مناسبات التخرج</li>
                  <li>تعزيز الهوية المهنية والانتماء المؤسسي للأكاديميين</li>
                  <li>خلق طقوس العبور (Rites of Passage) التي تميز الانتقال من مرحلة حياتية إلى أخرى</li>
                  <li>المساواة والديمقراطية: توحيد المظهر بغض النظر عن الخلفيات الاجتماعية والاقتصادية</li>
                </ul>
              </div>
            </section>

            <section id="modern-use" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">استخدامات الزي الأكاديمي في العصر الحديث</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">المناسبات الرسمية الأكاديمية</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">متى يُرتدى الزي الأكاديمي اليوم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>حفلات التخرج: الاستخدام الأكثر شيوعاً للزي الأكاديمي في الوقت الحاضر</li>
                    <li>حفلات تنصيب رؤساء الجامعات والقيادات الأكاديمية</li>
                    <li>المؤتمرات والفعاليات العلمية الكبرى التي يحضرها ممثلون عن مؤسسات أكاديمية مختلفة</li>
                    <li>الاحتفالات بالذكرى السنوية لتأسيس الجامعات والمناسبات التاريخية الخاصة</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التحديات المعاصرة</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 text-gray-700">قضايا تواجه استخدام الزي الأكاديمي حالياً:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>التكلفة العالية للزي الأكاديمي وتأثيرها على الطلاب محدودي الدخل</li>
                  <li>النقاشات حول مدى ملاءمة التقاليد القديمة للسياق التعليمي المعاصر</li>
                  <li>تحديات دمج الهويات الثقافية المتنوعة ضمن إطار الزي الأكاديمي التقليدي</li>
                  <li>مبادرات إعادة استخدام وتدوير الزي لتقليل التأثير البيئي والتكلفة</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/academic_attire/school_uniforms_riyadh.jpeg"
                  alt="حفل تخرج جامعي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  حفل تخرج جامعي يُظهر استخدام الزي الأكاديمي في المناسبات الرسمية المعاصرة
                </div>
              </div>
            </section>

            <section id="design" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اعتبارات تصميم الزي الأكاديمي المعاصر</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الموازنة بين التقاليد والحداثة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الحفاظ على العناصر الأساسية التاريخية مع إدخال تحسينات معاصرة</li>
                  <li>تكييف الزي ليناسب المناخات والبيئات المختلفة حول العالم</li>
                  <li>تطوير نسخ مبسطة للاستخدام في المناسبات الأقل رسمية</li>
                  <li>إدماج التكنولوجيا في تصنيع الزي لتحسين الراحة والمتانة</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الهوية المؤسسية والتمييز</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 text-gray-700">تخصيص الزي لتعزيز هوية المؤسسة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>دمج ألوان وشعارات المؤسسة التعليمية في تصميم الزي</li>
                  <li>إضافة عناصر مميزة تعكس تاريخ الجامعة وقيمها الأساسية</li>
                  <li>تطوير تصاميم فريدة لكليات ومدارس محددة ضمن المؤسسة</li>
                  <li>تحديث الزي الأكاديمي بشكل دوري لعكس التطورات في الهوية المؤسسية</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">اعتبارات الشمولية والتنوع</h3>
                <p className="mb-2 text-gray-700">تصميم للجميع:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>توفير خيارات تناسب مختلف الأحجام والأشكال الجسدية</li>
                  <li>مراعاة الحساسيات الثقافية والدينية في التصميم</li>
                  <li>تطوير أزياء تناسب الأشخاص ذوي الاحتياجات الخاصة</li>
                  <li>خيارات محايدة جندرياً لتكون أكثر شمولية</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يبقى الزي الأكاديمي، رغم قدمه وتجذره في التقاليد القديمة، عنصراً أساسياً في المشهد الأكاديمي المعاصر. إنه جسر يربط بين الماضي والحاضر، ويجسد استمرارية المؤسسات التعليمية ودورها في المجتمع. لم يعد الزي الأكاديمي مجرد لباس تقليدي، بل أصبح رمزاً للإنجاز والتميز العلمي، ووسيلة للتعبير عن الهوية المؤسسية والاحتفاء بالمعرفة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في عالم يتسم بالتغير السريع، يواجه تصميم واستخدام الزي الأكاديمي تحديات متنوعة، تتطلب توازناً دقيقاً بين احترام التقاليد والاستجابة لمتطلبات العصر. ومع ذلك، يظل النجاح في تحقيق هذا التوازن هو المفتاح لضمان استمرارية هذا التقليد العريق وأهميته الرمزية لأجيال المستقبل من الأكاديميين والخريجين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                إن فهم تاريخ الزي الأكاديمي ودلالاته ومكوناته ليس مجرد دراسة تاريخية، بل هو استكشاف لتطور المؤسسات التعليمية نفسها وللقيم التي تتبناها وتسعى لغرسها في طلابها. وبينما تستمر الجامعات والمؤسسات الأكاديمية في التطور والتكيف مع التغيرات العالمية، يبقى الزي الأكاديمي شاهداً على الأصالة والاستمرارية التي تميز عالم التعليم العالي.
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