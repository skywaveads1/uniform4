import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import { 
  Section, 
  Paragraph, 
  BulletList, 
  ListItem, 
  Quote, 
  HighlightBox, 
  KeyPointsBox,
  ArticleImage
} from '@/components/ArabicContentElements';

export const metadata = {
  title: 'تأثير الزي الموحد على مستوى الأمن والحماية',
  description: 'دراسة تحليلية شاملة حول كيفية تأثير الزي الموحد على تعزيز مستوى الأمن والسلامة في المؤسسات والمنشآت',
};

export default function ImportanceUniformOnSecurity() {
  const imageSrc = '/images/security_uniforms/security_guard_uniforms.jpeg';
  const title = 'أهمية الزي الموحد في قطاع الأمن والحراسة';
  const readingTime = '٧ دقائق للقراءة';
  const datePublished = '١٨ مايو ٢٠٢٤';

  const relatedArticles = [
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

  const tags = ["الزي الموحد الأمني", "الأمن والسلامة", "علم الجريمة", "الأمن النفسي", "الحراسة الأمنية", "شركات الأمن"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'psychological-effects', title: 'الأبعاد النفسية للزي الموحد في تعزيز الأمن' },
    { id: 'practical-effects', title: 'الأبعاد العملية للزي الموحد في تعزيز الأمن' },
    { id: 'uniform-functions', title: 'الوظائف العملية للزي الأمني الموحد' },
    { id: 'uniform-types', title: 'أنواع الزي الموحد وتأثيرها على مستوى الأمن' },
    { id: 'case-studies', title: 'دراسات حالة واقعية' },
    { id: 'recommendations', title: 'توصيات لاختيار الزي الأمني المناسب' },
    { id: 'conclusion', title: 'الخلاصة' },
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
                يُعتبر الزي الموحد من أهم العناصر المرئية التي تميز أفراد الأمن في أي منشأة. ولكن أهميته تتجاوز المظهر الخارجي لتشمل تأثيرات نفسية وعملية تساهم بشكل كبير في تعزيز مستوى الأمن والأمان.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنقدم تحليلًا علميًا مدعومًا بالدراسات والأبحاث حول كيفية تأثير الزي الموحد على تعزيز الأمن في المنشآت والمؤسسات المختلفة.
              </p>
            </section>

            <section id="psychological-effects" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأبعاد النفسية للزي الموحد في تعزيز الأمن</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التأثير النفسي للزي الموحد</h3>
                <p className="mb-2 text-gray-700">للزي الموحد تأثير نفسي قوي على كل من يرتديه ومن يراه، مما يساهم في خلق بيئة أكثر أمانًا:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">تعزيز الهوية المهنية:</span> أظهرت دراسة نُشرت في مجلة علم النفس التطبيقي أن ارتداء الزي الموحد يعزز الشعور بالانتماء المهني، مما يؤدي إلى زيادة الالتزام بالمسؤوليات الأمنية.</li>
                  <li><span className="font-medium">زيادة الثقة بالنفس:</span> يمنح الزي الموحد أفراد الأمن ثقة أكبر في أداء مهامهم، خاصة في المواقف الصعبة التي تتطلب إظهار السلطة والحزم.</li>
                  <li><span className="font-medium">تغيير السلوك:</span> وفقاً لنظرية "التصرف النفسي" في علم النفس، يؤثر الزي الرسمي على سلوك مرتديه، حيث يميل أفراد الأمن المرتدين للزي الرسمي إلى التصرف بمهنية واحترافية أكبر.</li>
                  <li><span className="font-medium">تقليل التحيز الشخصي:</span> يساعد الزي الموحد في تقليل التأثير الشخصي في اتخاذ القرارات الأمنية، مما يعزز الموضوعية في تطبيق إجراءات الأمن.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="التأثير النفسي للزي الأمني الموحد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الأبعاد النفسية للزي الموحد وأثرها على مستوى الأمن والسلامة
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">تأثير الزي الموحد على سلوك الجمهور والزوار: أثبتت دراسات في علم الجريمة أن مجرد وجود أفراد أمن بزي موحد ومميز يقلل من معدلات الجريمة والمخالفات بنسبة تصل إلى 40%.</p>
                </blockquote>
              </div>
            </section>

            <section id="practical-effects" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأبعاد العملية للزي الموحد في تعزيز الأمن</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                بالإضافة إلى التأثيرات النفسية، يقدم الزي الموحد فوائد عملية تساهم في تحسين مستوى الأمن:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التعرف السريع والتنسيق</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>التمييز السريع بين أفراد الأمن والزوار</li>
                    <li>سهولة التعرف على المسؤولين في حالات الطوارئ</li>
                    <li>تحسين التنسيق بين أفراد الفريق الأمني</li>
                    <li>تسهيل إدارة الازدحام في المناسبات الكبرى</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الحد من التنكر والانتحال</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>صعوبة انتحال صفة أفراد الأمن الرسميين</li>
                    <li>الزي المميز يمنع دخول المتطفلين</li>
                    <li>العناصر الأمنية في الزي تزيد من صعوبة التقليد</li>
                    <li>توحيد المظهر يسهل كشف الدخلاء</li>
                  </ul>
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                تُظهر البيانات الميدانية من عمليات مكافحة الحرائق والاستجابة للكوارث أن الفرق التي ترتدي زيًا موحدًا تتمتع بمستويات تنسيق أعلى بنسبة 30%.
              </p>
            </section>

            <section id="uniform-functions" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الوظائف العملية للزي الأمني الموحد</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الوظائف الأساسية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تصميم بهدف تحسين الأداء:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">حمل المعدات الأمنية:</span> تصمم أزياء الأمن عادة بجيوب وحوامل مخصصة للمعدات الأمنية مثل أجهزة الاتصال، المصابيح، الدفاتر، وأحيانًا الأسلحة، مما يحسن من أداء أفراد الأمن.</li>
                    <li><span className="font-medium">الحماية الجسمية:</span> توفر العديد من الأزياء الأمنية حماية إضافية ضد المخاطر المختلفة مثل المواد القاطعة أو المقاومة للحريق، مما يزيد من سلامة أفراد الأمن.</li>
                    <li><span className="font-medium">ملاءمة ظروف العمل:</span> تصمم أزياء الأمن بحيث تناسب طبيعة عمل أفراد الأمن، سواء كانوا في بيئات داخلية أو خارجية، حارة أو باردة، مما يحسن الأداء الأمثل في مختلف الظروف.</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="الوظائف العملية للزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تصميم الزي الأمني الموحد مع مراعاة الوظائف العملية والاحتياجات المهنية
                </div>
              </div>
            </section>

            <section id="uniform-types" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أنواع الزي الموحد وتأثيرها على مستوى الأمن</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تختلف أنواع الزي الأمني الموحد باختلاف طبيعة المنشأة واحتياجاتها الأمنية، ولكل نوع تأثير مختلف:
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الأنواع الرئيسية للزي الأمني</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">الزي الرسمي:</span> يعزز السلطة والهيبة ويناسب المنشآت الحكومية والبنوك</li>
                  <li><span className="font-medium">الزي شبه العسكري:</span> يعزز الانضباط والنظام ويناسب المنشآت الحساسة</li>
                  <li><span className="font-medium">الزي المدني المميز:</span> يوفر توازناً بين الهيبة والودية ويناسب المنشآت التجارية والفنادق</li>
                  <li><span className="font-medium">الزي الميداني:</span> مصمم للراحة والحركة ويناسب المنشآت الكبيرة والمناطق المفتوحة</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="أنواع الزي الأمني الموحد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  أنواع مختلفة من الزي الأمني الموحد لمختلف الاحتياجات والمنشآت
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">الزي الموحد ليس مجرد قطعة ملابس، بل هو أداة أمنية فعالة تساهم في خلق بيئة آمنة وتعزز احترافية فريق الأمن. اختيار الزي المناسب قد يكون عاملاً حاسماً في فعالية الإجراءات الأمنية.</p>
                  <footer className="text-sm text-gray-600">— د. محمد السعدي، أستاذ علم الأمن والوقاية</footer>
                </blockquote>
              </div>
            </section>

            <section id="case-studies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دراسات حالة واقعية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                لتوضيح التأثير العملي للزي الموحد على مستوى الأمن، دعونا نستعرض بعض دراسات الحالة:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">حالة 1: مجمع تجاري كبير</h3>
                  <p className="text-gray-700 mb-2">
                    بعد تحديث زي فريق الأمن في أحد المجمعات التجارية الكبرى في الرياض ليصبح أكثر بروزًا ومهنية، انخفضت حوادث السرقة بنسبة 35% خلال الأشهر الستة الأولى، وزاد شعور المتسوقين بالأمان بنسبة 47% حسب استطلاعات الرضا.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">حالة 2: مستشفى خاص</h3>
                  <p className="text-gray-700 mb-2">
                    قام مستشفى خاص بتغيير زي فريق الأمن من الزي التقليدي إلى زي أكثر ودية مع الحفاظ على الطابع المهني. أدى ذلك إلى تحسن في تفاعل المرضى والزوار مع أفراد الأمن بنسبة 62%، وزيادة التعاون في تطبيق إجراءات الأمن بنسبة 41%.
                  </p>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="دراسات حالة في استخدام الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تأثير استخدام الزي الأمني المناسب على الأداء والنتائج في منشآت مختلفة
                </div>
              </div>
            </section>

            <section id="recommendations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">توصيات لاختيار الزي الأمني المناسب</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">إرشادات عملية</h3>
                <p className="mb-2 text-gray-700">بناءً على الدراسات والأبحاث، نقدم التوصيات التالية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">تحليل احتياجات المنشأة:</span> يجب دراسة طبيعة المنشأة واحتياجاتها الأمنية بدقة قبل اختيار نوع الزي المناسب.</li>
                  <li><span className="font-medium">التوازن بين الهيبة والودية:</span> اختيار زي يوفر توازناً مناسباً بين إظهار السلطة والهيبة وبين الودية والتواصل مع الجمهور.</li>
                  <li><span className="font-medium">مراعاة الراحة والعملية:</span> التأكد من أن الزي مريح ويتيح الحركة بسهولة، ويناسب ظروف العمل المختلفة.</li>
                  <li><span className="font-medium">إضافة عناصر الأمان:</span> تضمين عناصر أمنية في الزي مثل البطاقات التعريفية وشارات الرتب لمنع الانتحال.</li>
                  <li><span className="font-medium">التحديث المستمر:</span> مراجعة وتحديث الزي بشكل دوري لمواكبة التطورات في مجال الأمن والحماية.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="اختيار الزي الأمني المناسب"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  عملية اختيار الزي الأمني المناسب وفق احتياجات المنشأة
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يتضح مما سبق أن الزي الموحد لأفراد الأمن ليس مجرد عنصر للمظهر الخارجي، بل هو جزء أساسي من منظومة الأمن الشاملة. من خلال تأثيراته النفسية على مرتديه وعلى الجمهور، وفوائده العملية في تسهيل التعرف والتنسيق، يساهم الزي الموحد بشكل كبير في تعزيز مستوى الأمن والسلامة في المنشآت والمؤسسات.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                لذلك، ينبغي على المسؤولين عن الأمن في المنشآت المختلفة إيلاء اهتمام خاص لاختيار الزي المناسب لفرق الأمن، ليس فقط من ناحية الشكل والمظهر، بل أيضاً من ناحية الوظائف العملية والتأثير النفسي المطلوب تحقيقه.
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