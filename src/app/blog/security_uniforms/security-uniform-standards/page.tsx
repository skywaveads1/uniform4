import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الزي الموحد للحراسة الأمنية: المواصفات والمعايير',
  description: 'دليل شامل حول المواصفات والمعايير الواجب توافرها في الزي الموحد للحراسة الأمنية بما يتوافق مع معايير الجودة والسلامة العالمية',
};

export default function SecurityUniformStandards() {
  const imageSrc = '/images/security_uniforms/header_security_uniform.jpeg';
  const title = 'المعايير العالمية للزي الأمني وتطبيقاتها محلياً';
  const readingTime = '١٠ دقائق للقراءة';
  const datePublished = '٥ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'essential-features', title: 'المواصفات الأساسية للزي الأمني الموحد' },
    { id: 'global-standards', title: 'المعايير العالمية للزي الأمني' },
    { id: 'uniform-components', title: 'مكونات الزي الأمني النموذجي' },
    { id: 'material-specs', title: 'مواصفات الأقمشة والخامات' },
    { id: 'customization', title: 'تخصيص الزي وفق احتياجات المنشأة' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const relatedArticles = [
    {
      title: "تأثير الزي الموحد على مستوى الأمن والحماية",
      description: "دراسة تحليلية شاملة حول كيفية تأثير الزي الموحد على تعزيز مستوى الأمن والسلامة في المؤسسات والمنشآت",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security_uniforms/importance-uniform-on-security",
      date: "١ مايو ٢٠٢٤",
      category: "أزياء الأمن"
    },
    {
      title: "أهمية شارات الرتب في أزياء شركات الأمن",
      description: "كيف تساهم شارات الرتب والشعارات في تعزيز الهيكل التنظيمي والانضباط في شركات الأمن",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security_uniforms/importance-rank-badges",
      date: "٥ مايو ٢٠٢٤",
      category: "أزياء الأمن"
    },
    {
      title: "الألوان وتأثيرها النفسي في أزياء الأمن والحراسة",
      description: "دراسة تحليلية حول تأثير ألوان الزي الأمني على السلوك والإدراك النفسي",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security_uniforms/security-uniform-colors-psychology",
      date: "٧ مايو ٢٠٢٤",
      category: "أزياء الأمن"
    }
  ];

  const tags = ["معايير الزي الأمني", "مواصفات أزياء الحراسة", "الجودة في الزي الموحد", "زي شركات الأمن", "معايير السلامة", "الحراسة الأمنية"];

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
                يعتبر الزي الموحد للحراسة الأمنية من العناصر الأساسية التي تعكس مستوى احترافية ومهنية شركات الأمن والحراسة. فهو ليس مجرد قطع ملابس، بل منظومة متكاملة تجمع بين الوظيفية العملية والمظهر الاحترافي والتوافق مع معايير السلامة والأمان.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا الدليل الشامل، سنستعرض المواصفات والمعايير التي يجب توافرها في الزي الموحد للحراسة الأمنية، مع التركيز على الجوانب الفنية والتنظيمية التي تضمن تحقيق أعلى مستويات الكفاءة والفعالية في بيئة العمل الأمني.
              </p>
            </section>

            <section id="essential-features" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المواصفات الأساسية للزي الأمني الموحد</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الخصائص الرئيسية الواجب توافرها</h3>
                <p className="mb-2 text-gray-700">هناك مجموعة من المواصفات الأساسية التي يجب توافرها في الزي الأمني بغض النظر عن نوع المنشأة أو طبيعة المهام:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">المتانة والتحمل:</span> قدرة الزي على تحمل ظروف العمل القاسية وساعات العمل الطويلة</li>
                  <li><span className="font-medium">الراحة والملاءمة:</span> تصميم يسمح بالحركة بحرية ويوفر الراحة خلال المناوبات الطويلة</li>
                  <li><span className="font-medium">الوظيفية العملية:</span> توفير جيوب وحوامل للمعدات الأمنية اللازمة للعمل</li>
                  <li><span className="font-medium">التمييز والوضوح:</span> سهولة التعرف على أفراد الأمن وتمييزهم عن بقية العاملين والزوار</li>
                  <li><span className="font-medium">المظهر الاحترافي:</span> تصميم يعزز صورة الاحترافية والموثوقية لدى الجمهور</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="المواصفات الأساسية للزي الأمني الموحد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الخصائص الرئيسية التي يجب توافرها في الزي الأمني المتكامل
                </div>
              </div>
            </section>

            <section id="global-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المعايير العالمية للزي الأمني</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير السلامة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مقاومة الاشتعال وفق معيار ISO 11612</li>
                    <li>حماية من المخاطر الحرارية (EN 531)</li>
                    <li>مقاومة الشحنات الكهروستاتيكية (EN 1149)</li>
                    <li>الرؤية العالية للعمل الليلي (EN 20471)</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">معايير الجودة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>متانة الأقمشة وفق معيار (ASTM D5034)</li>
                    <li>ثبات الألوان ضد الغسيل والتعرق (ISO 105)</li>
                    <li>مقاومة الأقمشة للتمزق (ISO 13937)</li>
                    <li>معايير تحمل الغسيل المتكرر (ISO 6330)</li>
                  </ul>
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                تختلف المعايير المطبقة باختلاف البيئة التشغيلية وطبيعة المخاطر المحتملة في كل منشأة. على سبيل المثال، قد تتطلب بيئات العمل الصناعية معايير إضافية للحماية من المواد الكيميائية، بينما تركز المنشآت التجارية على المظهر المهني والتمييز البصري.
              </p>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">تشير الدراسات إلى أن الشركات الأمنية التي تلتزم بالمعايير العالمية في زيها الموحد تسجل معدلات أعلى من رضا العملاء بنسبة 37% وثقة أكبر في مستوى الخدمات المقدمة.</p>
                  <footer className="text-sm text-gray-600">— تقرير الجمعية الدولية للأمن والسلامة، 2023</footer>
                </blockquote>
              </div>
            </section>

            <section id="uniform-components" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مكونات الزي الأمني النموذجي</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                يتكون الزي الأمني النموذجي من عدة قطع أساسية، لكل منها مواصفات محددة تتناسب مع وظيفتها والغرض منها. وفيما يلي استعراض لأهم مكونات الزي الأمني المتكامل:
              </p>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">المكونات الأساسية للزي الأمني</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">القطع الرئيسية التي يشملها الزي الموحد:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">القميص/البلوزة:</span> يفضل تصميمه بأكمام طويلة وقصيرة للتكيف مع الظروف المناخية المختلفة، مع جيوب عملية ومساحة لشارات الهوية</li>
                    <li><span className="font-medium">البنطلون/السروال:</span> تصميم متين مع جيوب متعددة، ويفضل استخدام خامات مقاومة للاتساخ والتمزق</li>
                    <li><span className="font-medium">السترة/الجاكيت:</span> للاستخدام في الأجواء الباردة، مع توفير طبقة حماية إضافية وجيوب للمعدات</li>
                    <li><span className="font-medium">غطاء الرأس:</span> قبعة أو برية تحمل شعار الشركة، وتوفر حماية من العوامل الجوية</li>
                    <li><span className="font-medium">الأحذية:</span> مصممة للراحة خلال فترات الوقوف الطويلة، مع مقاومة للانزلاق وتوفير الدعم المناسب للقدم</li>
                    <li><span className="font-medium">الإكسسوارات:</span> حزام، ربطة عنق، شارات الهوية والرتب، حاملات المعدات</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="مكونات الزي الأمني النموذجي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  مثال على مكونات متكاملة للزي الأمني الموحد من مختلف الزوايا
                </div>
              </div>
            </section>

            <section id="material-specs" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مواصفات الأقمشة والخامات</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">خامات الزي الأمني الموصى بها</h3>
                <p className="mb-2 text-gray-700">تُعد اختيار الخامات المناسبة من أهم عوامل نجاح الزي الأمني:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">خلطات البوليستر والقطن:</span> توفر توازناً بين المتانة والراحة، ويفضل نسبة 65% بوليستر و35% قطن للقمصان والبناطيل</li>
                  <li><span className="font-medium">ريب ستوب (Ripstop):</span> قماش خاص مقاوم للتمزق، مناسب للاستخدام في المناطق الخارجية والظروف القاسية</li>
                  <li><span className="font-medium">الأقمشة التكتيكية:</span> خامات متخصصة توفر مرونة عالية وتهوية جيدة مع مقاومة متميزة للتآكل</li>
                  <li><span className="font-medium">الصوف المعالج:</span> للسترات الرسمية في البيئات التي تتطلب مظهراً أكثر أناقة مع توفير الدفء</li>
                  <li><span className="font-medium">أقمشة معالجة بتقنية Teflon:</span> لتوفير مقاومة للبقع والسوائل مع سهولة التنظيف</li>
                </ul>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                يجب أن تتمتع أقمشة الزي الأمني بمجموعة من الخصائص التقنية التي تضمن أداءً متميزاً خلال فترة الاستخدام. من أهم هذه الخصائص: مقاومة التآكل (الاحتكاك) بمعدل لا يقل عن 20,000 دورة وفق اختبار مارتينديل، ومقاومة للانكماش بنسبة لا تزيد عن 3% بعد الغسيل المتكرر، وثبات الألوان بدرجة 4 على الأقل وفق المقياس الرمادي.
              </p>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="مواصفات أقمشة الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  عينات من الأقمشة والخامات المتخصصة للاستخدام في أزياء الأمن والحراسة
                </div>
              </div>
            </section>

            <section id="customization" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تخصيص الزي وفق احتياجات المنشأة</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                يجب أن يتم تخصيص الزي الأمني ليتناسب مع طبيعة المنشأة واحتياجاتها الخاصة، مع الحفاظ على المعايير الأساسية للجودة والسلامة. وفيما يلي أهم النقاط التي يجب مراعاتها عند تخصيص الزي الأمني:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تخصيص حسب بيئة العمل</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>البيئات الداخلية: التركيز على الراحة والمظهر المهني</li>
                    <li>البيئات الخارجية: مقاومة العوامل الجوية والحماية من الشمس</li>
                    <li>البيئات الصناعية: تعزيز عناصر السلامة ومقاومة المواد الكيميائية</li>
                    <li>بيئات الضيافة والتجزئة: توازن بين الأناقة والوظيفية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تخصيص حسب الهوية المؤسسية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>دمج ألوان العلامة التجارية بشكل متناسق</li>
                    <li>تطبيق الشعارات والرموز وفق معايير الهوية البصرية</li>
                    <li>اختيار قصات تعكس ثقافة المؤسسة وقيمها</li>
                    <li>تمييز الرتب والمسؤوليات المختلفة بشكل واضح</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">إرشادات للتخصيص الفعال</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">التوازن بين المعايير والخصوصية:</span> الحفاظ على المعايير الأساسية مع إضافة لمسات خاصة</li>
                  <li><span className="font-medium">توحيد المظهر مع مراعاة الفروق الفردية:</span> توفير مقاسات متنوعة وخيارات تناسب الجنسين</li>
                  <li><span className="font-medium">التحديث الدوري:</span> مراجعة الزي بشكل منتظم لمواكبة المستجدات التقنية والتشريعية</li>
                  <li><span className="font-medium">الاستماع لملاحظات المستخدمين:</span> تطوير الزي بناءً على خبرات وتجارب أفراد الأمن الميدانية</li>
                  <li><span className="font-medium">الاستعانة بالخبراء:</span> التعاون مع متخصصين في تصميم الأزياء الأمنية لضمان التوازن المثالي</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يمثل الزي الموحد للحراسة الأمنية عنصراً أساسياً في منظومة الأمن الشاملة، حيث يتجاوز كونه مجرد ملابس ليصبح أداة تواصل بصري تعكس احترافية المؤسسة وتعزز الشعور بالأمان والثقة لدى العملاء والجمهور.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                ولضمان تحقيق الأهداف المرجوة من الزي الأمني، يجب الالتزام بالمواصفات والمعايير المهنية العالمية، مع تخصيصها وفق احتياجات المنشأة وطبيعة عملها. كما يتطلب الأمر التقييم والتطوير المستمر للزي لمواكبة المستجدات التقنية والتشريعية في مجال الأمن والسلامة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                إن الاستثمار في زي أمني عالي الجودة يعد استثماراً استراتيجياً له مردود إيجابي على كفاءة العمل الأمني وصورة المؤسسة ومستوى رضا العاملين والعملاء على حد سواء.
              </p>
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