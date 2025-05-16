import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الألوان وتأثيرها النفسي في أزياء الأمن والحراسة',
  description: 'دراسة تحليلية حول تأثير ألوان الزي الأمني على السلوك والإدراك النفسي للعاملين والجمهور، مع توصيات لاختيار الألوان المناسبة لمختلف بيئات العمل الأمني',
};

export default function SecurityUniformColorsPsychology() {
  const imageSrc = '/images/security_uniforms/security_uniform_design.jpeg';
  const title = 'الألوان وتأثيرها النفسي في أزياء الأمن والحراسة';
  const readingTime = '٧ دقائق للقراءة';
  const datePublished = '٧ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'psychological-basis', title: 'الأسس النفسية لتأثير الألوان' },
    { id: 'common-colors', title: 'الألوان الشائعة في أزياء الأمن وتأثيراتها' },
    { id: 'effect-on-workers', title: 'تأثير الألوان على أداء العاملين في مجال الأمن' },
    { id: 'effect-on-public', title: 'تأثير ألوان الزي الأمني على الجمهور' },
    { id: 'color-selection', title: 'اختيار الألوان المناسبة لمختلف بيئات العمل الأمني' },
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
      title: "الزي الموحد للحراسة الأمنية: المواصفات والمعايير",
      description: "دليل شامل حول المواصفات والمعايير الواجب توافرها في الزي الموحد للحراسة الأمنية",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security_uniforms/security-uniform-standards",
      date: "٢ مايو ٢٠٢٤",
      category: "أزياء الأمن"
    },
    {
      title: "أهمية شارات الرتب في أزياء شركات الأمن",
      description: "كيف تساهم شارات الرتب والشعارات في تعزيز الهيكل التنظيمي والانضباط في شركات الأمن",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security_uniforms/importance-rank-badges",
      date: "٥ مايو ٢٠٢٤",
      category: "أزياء الأمن"
    }
  ];

  const tags = ["علم النفس اللوني", "أزياء الأمن", "تصميم الزي الموحد", "السلوك النفسي", "الأمن والحراسة", "هوية الشركات"];

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
                تلعب الألوان دوراً محورياً في تصميم أزياء الأمن والحراسة، حيث تتجاوز كونها مجرد عناصر جمالية إلى مؤثرات نفسية وسلوكية قوية تؤثر على كل من العاملين في مجال الأمن والجمهور الذي يتعامل معهم.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذه الدراسة التحليلية، نستكشف العلاقة بين ألوان الزي الأمني والتأثيرات النفسية المرتبطة بها، مستندين إلى نظريات علم النفس اللوني والأبحاث التطبيقية في هذا المجال.
              </p>
            </section>

            <section id="psychological-basis" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأسس النفسية لتأثير الألوان</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">آليات التأثير النفسي للألوان</h3>
                <p className="mb-2 text-gray-700">يقوم تأثير الألوان على النفس البشرية على أسس علمية متعلقة بكيفية استقبال الدماغ للمعلومات البصرية ومعالجتها، وارتباط الألوان بتجارب وذكريات ودلالات ثقافية واجتماعية مختلفة.</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">المعالجة الفسيولوجية:</span> تؤثر الألوان على نشاط الجهاز العصبي ومستويات الهرمونات في الجسم</li>
                  <li><span className="font-medium">الارتباطات الثقافية:</span> تختلف دلالات الألوان من ثقافة لأخرى، مما يؤثر على تفسيرها نفسياً</li>
                  <li><span className="font-medium">الذاكرة والتجربة:</span> ترتبط الألوان بتجارب سابقة تشكل استجابتنا النفسية لها</li>
                  <li><span className="font-medium">التأثير اللاواعي:</span> تؤثر الألوان على السلوك والمزاج دون وعي كامل من الشخص</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="علم النفس اللوني وتأثير الألوان على السلوك"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  مخطط يوضح تأثير الألوان المختلفة على الحالة النفسية والسلوكية للإنسان
                </div>
              </div>
            </section>

            <section id="common-colors" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الألوان الشائعة في أزياء الأمن وتأثيراتها</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأسود</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>يرمز إلى السلطة والقوة والرسمية</li>
                    <li>يعزز الهيبة والاحترام لدى الجمهور</li>
                    <li>يمكن أن يزيد من الشعور بالمسافة النفسية</li>
                    <li>مناسب للمناسبات الرسمية والمواقع ذات المستوى الأمني العالي</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأزرق الداكن</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>يرمز إلى الثقة والاستقرار والمصداقية</li>
                    <li>يقلل من مستوى العدوانية المتصورة لدى الجمهور</li>
                    <li>يعزز الشعور بالأمان والاطمئنان</li>
                    <li>مناسب للمنشآت التجارية والخدمية والمناطق العامة</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">البيج والخاكي</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>يعطي إحساساً بالدفء والقرب النفسي</li>
                    <li>يقلل من حدة التوتر في البيئات المتوترة</li>
                    <li>يناسب البيئات التي تتطلب تفاعلاً ودياً مع الجمهور</li>
                    <li>شائع في المرافق السياحية والفندقية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأخضر الزيتوني</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>يرتبط بالقوة والنظام والانضباط العسكري</li>
                    <li>يمنح إحساساً بالحماية والأمان</li>
                    <li>يعزز صورة التدريب والكفاءة العالية</li>
                    <li>مناسب للمواقع ذات الطابع شبه العسكري</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="ألوان الزي الأمني المختلفة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  مجموعة متنوعة من ألوان أزياء الأمن المستخدمة في مختلف البيئات الأمنية
                </div>
              </div>
            </section>

            <section id="effect-on-workers" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تأثير الألوان على أداء العاملين في مجال الأمن</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تؤثر ألوان الزي الأمني على الحالة النفسية والسلوكية للعاملين في مجال الأمن، مما ينعكس على أدائهم واستجاباتهم في المواقف المختلفة، وقدرتهم على التركيز لساعات طويلة.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التأثيرات المباشرة على أداء العاملين</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">تعزيز الهوية المهنية:</span> تساهم ألوان معينة مثل الأزرق الداكن والأسود في تعزيز الشعور بالانتماء المهني والفخر الوظيفي</li>
                  <li><span className="font-medium">تأثير الانضباط الذاتي:</span> ترتبط بعض الألوان مثل الأخضر الزيتوني والأسود بزيادة الانضباط السلوكي والالتزام بالقواعد</li>
                  <li><span className="font-medium">تقليل الإجهاد البصري:</span> تساعد الألوان المتوسطة مثل الأزرق والرمادي على تقليل إجهاد العين خلال المناوبات الطويلة</li>
                  <li><span className="font-medium">زيادة اليقظة:</span> تُظهر الدراسات أن الألوان الدافئة مثل البيج يمكن أن تحافظ على مستويات اليقظة لفترات أطول</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">أظهرت دراسة أجريت على فرق أمنية في منشآت متنوعة أن الفرق التي ترتدي أزياء باللون الأزرق الداكن سجلت انخفاضاً بنسبة 18% في معدلات التوتر والإجهاد مقارنة بالفرق التي ترتدي أزياء سوداء، مع زيادة بنسبة 12% في مستويات الرضا الوظيفي.</p>
                  <footer className="text-sm text-gray-600">— د. سارة الخالدي، علم النفس التنظيمي</footer>
                </blockquote>
              </div>
            </section>

            <section id="effect-on-public" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تأثير ألوان الزي الأمني على الجمهور</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تلعب ألوان الزي الأمني دوراً مهماً في تشكيل انطباعات الجمهور حول شركات الأمن والعاملين فيها، وتؤثر على مستوى الثقة والاحترام والشعور بالأمان.
              </p>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">استجابات الجمهور للألوان المختلفة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تختلف استجابات الجمهور باختلاف البيئة والموقف:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">الأزياء السوداء:</span> تعزز الهيبة والسلطة لكنها قد تزيد من مسافة التواصل النفسي وتخلق حاجزاً مع الجمهور</li>
                    <li><span className="font-medium">الأزياء الزرقاء:</span> تعزز الثقة والشعور بالأمان، وتقلل من ردود الفعل العدائية في المواقف المتوترة</li>
                    <li><span className="font-medium">الأزياء البيج والخاكي:</span> تولد شعوراً بالقرب والتواصل وتسهل التفاعل الإيجابي في البيئات الودية</li>
                    <li><span className="font-medium">الألوان المختلطة:</span> الجمع بين لونين مثل الأزرق الداكن والأسود يمكن أن يوازن بين الهيبة وسهولة التواصل</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="استجابات الجمهور للألوان المختلفة في الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  دراسة ميدانية حول استجابات الجمهور للألوان المختلفة في الزي الأمني
                </div>
              </div>
            </section>

            <section id="color-selection" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اختيار الألوان المناسبة لمختلف بيئات العمل الأمني</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تختلف الألوان المثالية للزي الأمني باختلاف بيئة العمل، من المنشآت التجارية إلى المواقع الصناعية والمناطق السكنية والمنشآت الحكومية، وكذلك باختلاف الوظائف المختلفة داخل فريق الأمن.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المنشآت التجارية والفنادق</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الأزرق الداكن: يعزز الثقة والاحترافية</li>
                    <li>الرمادي: يعطي إحساساً بالأناقة والتكامل مع المحيط</li>
                    <li>الألوان المخصصة: متوافقة مع هوية العلامة التجارية</li>
                    <li>تجنب الألوان القاتمة جداً في البيئات الودية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المنشآت الحكومية والحساسة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الأسود: لتعزيز السلطة والهيبة</li>
                    <li>الأزرق الداكن جداً: يقترب من الأسود مع الاحتفاظ بالطابع الرسمي</li>
                    <li>الأخضر الزيتوني: للمواقع ذات الطابع شبه العسكري</li>
                    <li>تفضيل الألوان الموحدة بدون درجات متعددة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">توصيات عامة لاختيار الألوان</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">تحليل بيئة العمل:</span> دراسة طبيعة المكان والجمهور المستهدف</li>
                  <li><span className="font-medium">مراعاة الثقافة المحلية:</span> دلالات الألوان قد تختلف بين الثقافات المختلفة</li>
                  <li><span className="font-medium">التمييز الوظيفي:</span> استخدام تدرجات لونية مختلفة لتمييز المستويات الوظيفية المختلفة</li>
                  <li><span className="font-medium">الراحة البصرية:</span> اختيار ألوان لا تسبب إجهاداً بصرياً خلال المناوبات الطويلة</li>
                  <li><span className="font-medium">التوافق مع الهوية المؤسسية:</span> مراعاة تناسق ألوان الزي مع الهوية البصرية للشركة</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تمثل ألوان أزياء الأمن والحراسة عنصراً استراتيجياً في تصميم نظام الزي الموحد، لما لها من تأثيرات نفسية وسلوكية عميقة على كل من العاملين والجمهور. ومن خلال الاختيار المدروس للألوان، يمكن لشركات الأمن تعزيز الأداء المهني لفرقها، وتحسين صورتها لدى الجمهور، وتحقيق أهدافها المؤسسية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                إن فهم العلاقة بين الألوان والاستجابات النفسية والسلوكية يتيح لمصممي أزياء الأمن والحراسة تطوير منظومة زي فعالة تلبي الاحتياجات العملية والنفسية للعاملين، وتعزز الصورة المؤسسية وثقة الجمهور.
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