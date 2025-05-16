import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'تاريخ تطور زي الخطوط الجوية السعودية',
  description: 'استعراض تاريخي لتطور الزي الرسمي للخطوط الجوية السعودية منذ تأسيسها وحتى اليوم، مع تحليل للتغييرات التصميمية وارتباطها بتطور الشركة',
};

// صورة الهيدر للمقال
const heroImage = '/images/flight_crew/header_flight_crew_uniform.jpeg';

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/uniforms_saudi_arabia.jpeg';
  const title = 'تاريخ تطور زي الخطوط الجوية السعودية';
  const readingTime = '10 دقائق';
  const datePublished = '٢٠ مايو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'phase1', title: 'المرحلة الأولى: التخطيط الاستراتيجي' },
    { id: 'phase2', title: 'المرحلة الثانية: البحث والاستكشاف' },
    { id: 'phase3', title: 'المرحلة الثالثة: التصميم التفصيلي' },
    { id: 'phase4', title: 'المرحلة الرابعة: اختبار التصميم النهائي' },
    { id: 'phase5', title: 'المرحلة الخامسة: اختيار المصنعين والإنتاج' },
    { id: 'phase6', title: 'المرحلة السادسة: التوزيع والإطلاق' },
    { id: 'conclusion', title: 'خاتمة' },
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
                <li>
                  <Link href="/blog/flight-crew/flight-2" className="text-sm hover:text-blue-600 block">
                    اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-4" className="text-sm hover:text-blue-600 block">
                    زي الطيارين: تاريخه وتطوره ومعاييره الحديثة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-5" className="text-sm hover:text-blue-600 block">
                    تأثير الثقافة المحلية على تصميم أزياء شركات الطيران
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
            يُعد تصميم وتصنيع زي جديد لشركة طيران كبرى مشروعاً استراتيجياً ضخماً يتجاوز مجرد إنتاج ملابس موحدة. فالأمر يتعلق بإعادة تعريف الهوية البصرية للشركة، وتعزيز تجربة العملاء، ورفع مستوى رضا الموظفين، والتعبير عن قيم العلامة التجارية وتوجهاتها المستقبلية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            هذه العملية المعقدة تمتد عادة من سنة إلى ثلاث سنوات، وتتطلب استثماراً مالياً كبيراً يقدر بملايين الدولارات، وتنسيقاً بين فرق متعددة التخصصات، من المصممين والمهندسين إلى خبراء التسويق وممثلي الموظفين. ويتم خلالها اتخاذ آلاف القرارات التفصيلية التي تؤثر في النتيجة النهائية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            في هذا المقال، نلقي نظرة شاملة على المراحل الرئيسية لتصميم وتصنيع زي جديد لشركة طيران كبرى، بدءاً من مرحلة البحث والفكرة الأولية، مروراً بعمليات التصميم والاختبار، وصولاً إلى الإنتاج الضخم والطرح النهائي. كما نستعرض التحديات والاعتبارات الرئيسية في كل مرحلة، والدروس المستفادة من تجارب شركات الطيران العالمية.
          </p>
        </section>

            <section id="phase1" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المرحلة الأولى: التخطيط الاستراتيجي</h2>
          
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تحديد الأهداف والرؤية</h3>
                <p className="mb-2 font-medium text-blue-700">الخطوات الأساسية لبدء المشروع:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تحديد الأسباب الاستراتيجية لتغيير الزي (تحديث العلامة التجارية، مواكبة المنافسين)</li>
                  <li>وضع أهداف واضحة وقابلة للقياس للمشروع</li>
                  <li>تشكيل لجنة توجيهية تضم ممثلين من الإدارات المختلفة</li>
                  <li>تخصيص الميزانية المناسبة وتحديد الجدول الزمني الأولي</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تحليل البيئة الداخلية والخارجية</h3>
                  <p className="mb-2 text-gray-700">دراسة العوامل المؤثرة في المشروع:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تقييم الزي الحالي: نقاط القوة، أوجه القصور، فرص التحسين</li>
                    <li>دراسة تجارب شركات الطيران المنافسة والشركات الرائدة عالمياً</li>
                    <li>تحليل اتجاهات السوق والتصميم العالمية</li>
                    <li>جمع آراء الموظفين حول تجاربهم مع الزي الحالي واحتياجاتهم</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">اختيار فريق التصميم</h3>
                  <p className="mb-2 text-gray-700">عملية انتقاء الشركاء الإبداعيين:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحديد معايير اختيار المصممين (خبرة، شهرة عالمية، توافق مع قيم الشركة)</li>
                    <li>إطلاق دعوة لتقديم العروض للمصممين والشركات المتخصصة</li>
                    <li>تقييم المقترحات المقدمة وإجراء المقابلات مع المرشحين النهائيين</li>
                    <li>توقيع العقود وتحديد الأدوار والمسؤوليات</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="phase2" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المرحلة الثانية: البحث والاستكشاف</h2>
          
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">البحث المتعمق</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">جمع البيانات والمعلومات اللازمة للتصميم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>إجراء استبيانات ومقابلات شاملة مع مختلف فئات الموظفين</li>
                    <li>مراقبة ميدانية لبيئة العمل والمهام اليومية لطاقم الطيران</li>
                    <li>تحليل السياق الثقافي والتاريخي للشركة وهويتها المرئية</li>
                    <li>دراسة القيود التنظيمية ومتطلبات السلامة العالمية</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تطوير المفاهيم الأولية</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">بلورة الأفكار الإبداعية الأولى:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>عصف ذهني وورش عمل إبداعية مع فريق التصميم</li>
                  <li>إعداد لوحات الإلهام (Mood boards) والمراجع البصرية</li>
                  <li>تطوير مفاهيم تصميمية متعددة تعكس اتجاهات مختلفة</li>
                  <li>تحديد اللوحة اللونية الأولية والخامات المحتملة</li>
          </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التقييم الأولي للمفاهيم</h3>
                <p className="mb-2 text-gray-700">مراجعة واختيار المفاهيم الواعدة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>عرض المفاهيم التصميمية على اللجنة التوجيهية للمشروع</li>
                  <li>إجراء مجموعات تركيز (Focus groups) مع عينة تمثيلية من الموظفين</li>
                  <li>تقييم المفاهيم وفق معايير محددة (التوافق مع الهوية، الوظيفة، الجمالية)</li>
                  <li>اختيار 2-3 مفاهيم للتطوير المتقدم</li>
          </ul>
              </div>
        </section>

            <section id="phase3" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المرحلة الثالثة: التصميم التفصيلي</h2>
          
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تطوير التصاميم المختارة</h3>
                <p className="mb-2 text-gray-700">تحويل المفاهيم إلى تصاميم تفصيلية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>إعداد رسومات تفصيلية لكل قطعة من قطع الزي لجميع فئات الموظفين</li>
                  <li>تحديد المواصفات الدقيقة (القصات، الأزرار، التفاصيل التقنية)</li>
                  <li>اختيار الخامات والأقمشة النهائية وإجراء اختبارات أولية عليها</li>
                  <li>إعداد نماذج رقمية ثلاثية الأبعاد للتصاميم</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">إنتاج عينات أولية (Prototypes)</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">صناعة نماذج حقيقية للتقييم:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>إنتاج عينات للتصاميم المختارة بمقاسات مختلفة</li>
                      <li>عروض أزياء داخلية لتقييم المظهر العام للتصاميم</li>
                      <li>جمع التعليقات والملاحظات من الإدارة والموظفين</li>
                      <li>إجراء التعديلات اللازمة على التصاميم بناء على الملاحظات</li>
          </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">اختبارات الأداء والسلامة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">التأكد من مطابقة التصاميم للمعايير التقنية:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>اختبارات مقاومة الحريق وفق معايير سلامة الطيران العالمية</li>
                      <li>تجارب ارتداء طويلة الأمد لقياس الراحة والمتانة</li>
                      <li>اختبارات الحركة والمرونة في ظروف عمل مختلفة</li>
                      <li>فحوصات تأثير الضغط الجوي والتغيرات في درجات الحرارة</li>
          </ol>
                  </div>
                </div>
              </div>
        </section>

            <section id="phase4" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المرحلة الرابعة: اختبار التصميم النهائي</h2>
          
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">التجارب الميدانية</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-2 text-gray-700">اختبار الزي في ظروف حقيقية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>اختيار مجموعة تجريبية من الموظفين بمقاسات وأدوار مختلفة</li>
                    <li>تجربة الزي على خطوط طيران حقيقية لفترة 3-6 أشهر</li>
                    <li>جمع البيانات والملاحظات بشكل منهجي خلال فترة التجربة</li>
                    <li>قياس ردود فعل المسافرين والإدارة</li>
          </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التعديلات النهائية</h3>
                  <p className="mb-2 text-gray-700">ضبط وتحسين التصميم قبل الإنتاج الضخم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحليل نتائج التجارب الميدانية وتحديد النقاط الحرجة للتحسين</li>
                    <li>إجراء التعديلات النهائية على التصاميم والخامات</li>
                    <li>مراجعة التكاليف والتأكد من مطابقة المواصفات للميزانية</li>
                    <li>الحصول على الموافقات النهائية من الإدارة العليا</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">توثيق المواصفات النهائية</h3>
                  <p className="mb-2 text-gray-700">إعداد الوثائق التقنية للتصنيع:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>إعداد دليل تقني شامل بمواصفات التصنيع التفصيلية</li>
                    <li>تحديد معايير الجودة والفحص لكل قطعة</li>
                    <li>إعداد جداول المقاسات التفصيلية لجميع الفئات</li>
                    <li>توثيق متطلبات التعبئة والتغليف والتوريد</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="phase5" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المرحلة الخامسة: اختيار المصنعين والإنتاج</h2>
          
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">اختيار الشركاء الصناعيين</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">انتقاء المصنعين المناسبين للمشروع:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>إطلاق مناقصة دولية لاختيار شركات التصنيع</li>
                    <li>تقييم المصنعين وفق معايير الجودة، السعر، القدرة الإنتاجية، والمسؤولية البيئية</li>
                    <li>زيارات ميدانية للمصانع المرشحة للتأكد من قدراتها</li>
                    <li>توقيع عقود التصنيع مع تحديد شروط الضمان ومستويات الجودة</li>
          </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تحضير الإنتاج الضخم</h3>
                <p className="mb-2 text-gray-700">خطوات ما قبل الإنتاج الشامل:</p>
                <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                  <li>إنتاج عينات محدودة من كل تصميم للموافقة النهائية</li>
                  <li>شراء المواد الخام بكميات كبيرة (الأقمشة، الإكسسوارات، مواد التغليف)</li>
                  <li>إعداد قوالب وأدوات القص والخياطة المخصصة</li>
                  <li>تدريب فرق العمل في المصانع على المواصفات الخاصة</li>
          </ol>
              </div>

              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الإنتاج والتحكم في الجودة</h3>
                <p className="mb-2 font-medium text-gray-700">التنفيذ مع ضمان المعايير العالية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>إنتاج دفعات تجريبية للموافقة قبل الإنتاج الشامل</li>
                  <li>تطبيق نظام متعدد المستويات للفحص وضبط الجودة</li>
                  <li>وجود ممثلين من شركة الطيران في المصانع للإشراف المباشر</li>
                  <li>تحديد وتصحيح أي مشكلات في عملية الإنتاج بشكل فوري</li>
          </ul>
              </div>
        </section>

            <section id="phase6" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المرحلة السادسة: التوزيع والتدريب والإطلاق</h2>
          
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">إدارة اللوجستيات والتوزيع</h3>
                  <p className="mb-2 text-gray-700">توصيل الزي الجديد لآلاف الموظفين:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>إعداد نظام لجمع مقاسات جميع الموظفين بدقة</li>
                    <li>إنشاء مراكز تركيب وأخذ مقاسات في القواعد الرئيسية للشركة</li>
                    <li>تطوير خطة لوجستية لتوزيع الزي على جميع المواقع العالمية</li>
                    <li>إعداد نظام تتبع وإدارة المخزون لمتابعة عملية التوزيع</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التدريب والتثقيف</h3>
                  <p className="mb-2 text-gray-700">تهيئة الموظفين للزي الجديد:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>إعداد دليل شامل لارتداء والعناية بالزي الجديد</li>
                    <li>تنظيم ورش عمل وفعاليات تدريبية في جميع المحطات والمراكز</li>
                    <li>إنتاج مقاطع فيديو تعليمية توضح طريقة الارتداء الصحيحة</li>
                    <li>تدريب خاص للمشرفين على معالجة استفسارات ومشكلات الموظفين</li>
          </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الإطلاق والترويج</h3>
                <p className="mb-2 font-medium text-blue-700">تقديم الزي الجديد للعالم:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تطوير استراتيجية اتصال متكاملة للإعلان عن الزي الجديد</li>
                  <li>تنظيم حدث إطلاق رسمي مع تغطية إعلامية واسعة</li>
                  <li>إنتاج مواد ترويجية مرئية تبرز مزايا وقصة الزي الجديد</li>
                  <li>حملة تواصل داخلية لبناء حماس وفخر الموظفين بالزي الجديد</li>
                  <li>حملة تسويقية خارجية تربط الزي الجديد بتطور العلامة التجارية</li>
          </ul>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">خاتمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل تصميم وتصنيع زي جديد لشركة طيران رحلة طويلة ومعقدة تتطلب تخطيطاً دقيقاً وتنسيقاً محكماً بين عشرات الأطراف المعنية. ورغم التحديات والتكاليف العالية، تظل هذه العملية استثماراً استراتيجياً يعود بعوائد ملموسة على المدى الطويل، سواء في تعزيز هوية العلامة التجارية، أو تحسين تجربة المسافرين، أو رفع الروح المعنوية للموظفين.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
                ومع تزايد أهمية التمايز البصري في سوق الطيران التنافسي، تحرص شركات الطيران الكبرى على تطوير أزياء تجمع بين الأناقة والراحة، والأصالة والمعاصرة، والبساطة والتميز. ويزداد الاهتمام في السنوات الأخيرة بالجوانب البيئية والاستدامة في تصنيع الزي، مع التركيز على استخدام مواد مستدامة وممارسات تصنيع أكثر مسؤولية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
                ورغم أن الزي المثالي قد يبدو هدفاً صعب المنال، فإن نجاح عملية التصميم والتصنيع لا يقاس فقط بالمنتج النهائي، بل أيضاً بالمنهجية المتبعة والقيمة المضافة للعلامة التجارية والموظفين والمسافرين. والأهم من ذلك، أن الزي الناجح يجب أن يكون قادراً على الصمود أمام اختبار الزمن، ومواكبة تطور الشركة لسنوات قادمة.
          </p>
        </section>
      </article>
        </div>
      </div>
    </main>
  );
} 