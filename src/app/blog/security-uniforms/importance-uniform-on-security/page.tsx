import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import BlogArticle from '@/components/BlogArticle';
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
  title: 'أهمية الزي الموحد في قطاع الأمن والحراسة',
  description: 'دراسة تفصيلية عن دور وتأثير الزي الموحد في قطاع الأمن والحراسة، وكيف يساهم في تعزيز الهيبة المهنية والفعالية والأمان.',
};

export default function ImportanceUniformOnSecurity() {
  const imageSrc = '/images/security_uniforms/official_security_clothing.jpeg';
  const title = 'أهمية الزي الموحد في قطاع الأمن والحراسة';
  const readingTime = '٨ دقائق للقراءة';
  const datePublished = '٢٠ يونيو ٢٠٢٤';
  const authorName = "فريق يونيفورم";
  const authorImage = "/images/author/team.jpg";
  const authorTitle = "خبراء تصميم الأزياء الموحدة";

  const relatedArticles = [
    {
      title: "الزي الموحد لفرق الخدمات الوقائية: معايير الجودة والسلامة",
      description: "استعراض شامل لمعايير الجودة والسلامة في الزي الموحد لفرق الخدمات الوقائية",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/protective-services/protective-1",
      date: "١٥ يونيو ٢٠٢٤",
      category: "الخدمات الوقائية"
    },
    {
      title: "مواد تصنيع زي رجال الأمن: المتانة والأداء",
      description: "تحليل شامل لمواد تصنيع الزي الموحد لرجال الأمن ومميزاتها",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security-uniforms/uniform-security-materials",
      date: "٥ يونيو ٢٠٢٤",
      category: "زي الأمن"
    },
    {
      title: "مواصفات الزي الأمني المعتمد عالمياً",
      description: "دليل مفصل لمواصفات الزي الأمني المعتمدة عالمياً ومعايير اختياره",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security-uniforms/security-uniform-specifications",
      date: "١٢ يونيو ٢٠٢٤",
      category: "زي الأمن"
    }
  ];

  const tags = ["زي الأمن", "الحراسة الأمنية", "الزي الموحد", "يونيفورم أمني", "الهوية المهنية", "الأمن والسلامة"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'psychological-impact', title: 'التأثير النفسي والمهني للزي الموحد' },
    { id: 'identity-distinction', title: 'تعزيز الهوية والتمييز المهني' },
    { id: 'effectiveness', title: 'تأثير الزي الموحد على فعالية الأداء' },
    { id: 'trust-authority', title: 'بناء الثقة والسلطة مع الجمهور' },
    { id: 'practical-benefits', title: 'الفوائد العملية للزي الموحد' },
    { id: 'case-studies', title: 'دراسات حالة وإحصائيات' },
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
            
            {/* Author information */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">الكاتب</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    width={64}
                    height={64}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">{authorName}</h4>
                  <p className="text-sm text-gray-600">{authorTitle}</p>
                </div>
              </div>
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
                يمثل الزي الموحد في قطاع الأمن والحراسة أكثر من مجرد ملابس اعتيادية؛ إنه رمز للسلطة والنظام والمهنية. منذ نشأة المؤسسات الأمنية المنظمة، ظل الزي الموحد عنصراً أساسياً في تشكيل هوية رجال الأمن والحراسة وتحديد دورهم في المجتمع.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نتناول بالتحليل أهمية الزي الموحد في قطاع الأمن والحراسة من جوانب متعددة. سنستكشف تأثيره النفسي والمهني على العاملين في القطاع، ودوره في تعزيز الهوية المؤسسية، وكيف يسهم في تحسين فعالية الأداء وبناء الثقة مع الجمهور. كما سنستعرض الفوائد العملية للزي الموحد، مدعومة بدراسات حالة وإحصائيات من قطاع الأمن.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                سواء كنت من العاملين في مجال الأمن، أو مديراً لمؤسسة أمنية، أو مهتماً بفهم ديناميكيات هذا القطاع، سيقدم لك هذا المقال رؤى قيمة حول أحد أهم عناصر الهوية المهنية في قطاع الأمن والحراسة.
              </p>
            </section>

            <section id="psychological-impact" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التأثير النفسي والمهني للزي الموحد</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التأثير على الذات المهنية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">تعزيز الهوية المهنية:</span> يساعد الزي الموحد رجال الأمن على الانتقال الذهني من هويتهم الشخصية إلى دورهم المهني، مما يسهل تبني السلوكيات والمسؤوليات المرتبطة بالوظيفة.</li>
                  <li><span className="font-medium">زيادة الانضباط الذاتي:</span> أظهرت الدراسات أن ارتداء الزي الموحد يعزز الشعور بالمسؤولية والانضباط الذاتي، مما ينعكس على السلوك المهني.</li>
                  <li><span className="font-medium">تقوية الثقة بالنفس:</span> يمنح الزي الموحد الرسمي شعوراً بالسلطة والاحترام، مما يزيد من ثقة رجال الأمن بأنفسهم عند التعامل مع الجمهور والمواقف الصعبة.</li>
                  <li><span className="font-medium">تخفيف التوتر الاجتماعي:</span> يقلل الزي الموحد من الحاجة لاتخاذ قرارات حول الملابس المناسبة، مما يوفر الطاقة الذهنية للتركيز على المهام الأمنية الأساسية.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="التأثير النفسي للزي الموحد على رجال الأمن"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الزي الموحد يعزز الهوية المهنية والثقة بالنفس لدى رجال الأمن
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">عندما أرتدي زيي الرسمي، أشعر بتحول في شخصيتي؛ أصبح أكثر يقظة وحسماً وجاهزية للتعامل مع المواقف الصعبة. الزي ليس مجرد قطع قماش، بل هو رمز لمسؤولية حماية الآخرين التي أحملها على عاتقي.</p>
                  <footer className="text-sm text-gray-600">— محمد العتيبي، مشرف أمني بخبرة 15 عاماً</footer>
                </blockquote>
              </div>
            </section>

            <section id="identity-distinction" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تعزيز الهوية والتمييز المهني</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                يلعب الزي الموحد دوراً محورياً في بناء وتعزيز الهوية المؤسسية وتمييز العاملين في قطاع الأمن:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التمييز المرئي السريع</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحديد هوية رجال الأمن بسهولة في المواقف الطارئة</li>
                    <li>تمييز المستويات الوظيفية والتخصصات المختلفة</li>
                    <li>إظهار الحضور الأمني بشكل مرئي لردع المخالفين</li>
                    <li>تسهيل التعرف على المسؤولين عن السلامة والأمان</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الهوية المؤسسية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تعزيز الانتماء للمؤسسة الأمنية والعمل الجماعي</li>
                    <li>تجسيد قيم المؤسسة من خلال التصميم والألوان والشعارات</li>
                    <li>تعزيز الاحترافية والمعايير المهنية الموحدة</li>
                    <li>بناء صورة ذهنية متسقة لدى الجمهور عن المؤسسة الأمنية</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="الزي الموحد يعزز الهوية المؤسسية في قطاع الأمن"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الشعارات والتصاميم الموحدة تعزز الانتماء المؤسسي والتمييز البصري
                </div>
              </div>
            </section>

            <section id="effectiveness" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تأثير الزي الموحد على فعالية الأداء</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تعزيز الكفاءة المهنية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">تحسين الجاهزية العملياتية:</span> تصميم الزي الموحد بشكل وظيفي يسمح بحمل المعدات الضرورية وسهولة الوصول إليها، مما يرفع من جاهزية رجال الأمن للاستجابة السريعة.</li>
                    <li><span className="font-medium">تعزيز التواصل المرئي:</span> يسهل الزي الموحد التعرف على الفريق أثناء العمليات، مما يحسن التنسيق والتعاون بين أفراد طاقم الأمن.</li>
                    <li><span className="font-medium">زيادة الالتزام بالبروتوكولات:</span> ترتبط الملابس الرسمية نفسياً بالالتزام بالإجراءات والبروتوكولات الأمنية، مما يعزز الامتثال للمعايير المهنية.</li>
                    <li><span className="font-medium">تقليل وقت اتخاذ القرار:</span> توفير إشارات بصرية واضحة للرتب والمسؤوليات يسهل تسلسل القيادة واتخاذ القرارات السريعة في المواقف الطارئة.</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="تأثير الزي الموحد على أداء فرق الأمن"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الزي الموحد المصمم بشكل وظيفي يعزز أداء فرق الأمن في الميدان
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">لاحظنا تحسناً كبيراً في أداء فرق الأمن بعد تحديث الزي الموحد بتصميم أكثر وظيفية. الجيوب المخصصة للمعدات، والأقمشة المتطورة التي تسمح بالحركة بحرية أكبر، والشارات الواضحة للرتب، كلها ساهمت في رفع كفاءة الاستجابة للحوادث الأمنية بنسبة 23% خلال الربع الأول من تطبيق الزي الجديد.</p>
                  <footer className="text-sm text-gray-600">— المهندس فهد السالم، مدير عمليات بشركة أمن متخصصة</footer>
                </blockquote>
              </div>
            </section>

            <section id="trust-authority" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">بناء الثقة والسلطة مع الجمهور</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تعزيز الثقة العامة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>تقديم انطباع أولي بالاحترافية والكفاءة</li>
                      <li>توحيد المظهر يعزز الثقة في المؤسسة الأمنية</li>
                      <li>خلق شعور بالاستقرار والنظام في المجتمع</li>
                      <li>تمييز رجال الأمن الشرعيين من المنتحلين</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">ترسيخ السلطة المهنية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>زيادة الامتثال الطوعي للتعليمات الأمنية</li>
                      <li>تقليل الحاجة لاستخدام الإجراءات القسرية</li>
                      <li>منح رجال الأمن مظهر "السلطة الشرعية"</li>
                      <li>بناء علاقة احترام متبادل مع الجمهور</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="دور الزي الموحد في بناء الثقة مع الجمهور"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الزي الرسمي يعزز التواصل الفعال وبناء الثقة بين رجال الأمن والجمهور
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الدراسات والإحصائيات</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أظهرت دراسة أجريت في 2023 أن 78% من المستطلعين يشعرون بثقة أكبر عند التعامل مع حراس أمن يرتدون زياً رسمياً مقارنة بنسبة 31% فقط مع حراس بملابس مدنية.</li>
                  <li>وجدت دراسة سلوكية أن معدل الامتثال للتعليمات الأمنية يزداد بنسبة 65% عندما تصدر من شخص يرتدي زياً رسمياً.</li>
                  <li>سجلت المجمعات التجارية التي وظفت حراساً بزي موحد رسمي انخفاضاً في حوادث السرقة بنسبة 47% مقارنة بالفترات التي استخدمت فيها حراساً بملابس غير رسمية.</li>
                </ul>
              </div>
            </section>

            <section id="practical-benefits" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الفوائد العملية للزي الموحد</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مزايا تشغيلية وإدارية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">الحماية الوظيفية:</span> تصميم ملابس توفر الحماية من المخاطر المهنية المحتملة (مقاومة التمزق، مقاومة الماء، حماية من المواد الخطرة).</li>
                  <li><span className="font-medium">توفير التكاليف على المدى الطويل:</span> جودة عالية تؤدي لمتانة أكبر وعمر استخدامي أطول، مما يقلل من تكرار شراء الملابس.</li>
                  <li><span className="font-medium">سهولة الإدارة اللوجستية:</span> توحيد مصادر التوريد وإجراءات الشراء وإدارة المخزون للملابس المهنية.</li>
                  <li><span className="font-medium">تسهيل مراقبة الامتثال للمعايير:</span> سهولة تحديد أي انحرافات عن معايير الزي المطلوبة والحفاظ على المظهر الاحترافي.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="الفوائد العملية للزي الموحد في قطاع الأمن"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الزي الموحد المصمم بشكل وظيفي يوفر حماية وراحة ومرونة في بيئة العمل الأمني
                </div>
              </div>
            </section>

            <section id="case-studies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دراسات حالة وإحصائيات</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">دراسة حالة: تأثير تحديث الزي الموحد على أداء فريق الأمن</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <p className="mb-4 text-gray-700">قامت شركة أمن رائدة في المملكة بتحديث الزي الموحد لأكثر من 1,200 فرد أمن في عام 2023، مع التركيز على:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة متطورة ذات خصائص وظيفية (مقاومة للماء، قابلة للتنفس، خفيفة الوزن)</li>
                    <li>تصميم مريح يسمح بحرية الحركة مع الحفاظ على المظهر الرسمي</li>
                    <li>عناصر عاكسة لتحسين الرؤية ليلاً</li>
                    <li>علامات مميزة واضحة للرتب والمسؤوليات</li>
                  </ul>
                  <p className="mt-4 mb-2 font-medium text-blue-800">النتائج بعد 6 أشهر:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>انخفاض شكاوى العاملين المتعلقة بالراحة بنسبة 62%</li>
                    <li>تحسن في استجابة الجمهور والتعاون مع رجال الأمن بنسبة 41%</li>
                    <li>زيادة في تقييم رضا العملاء عن خدمات الشركة الأمنية بنسبة 28%</li>
                    <li>انخفاض معدل دوران الموظفين بنسبة 17%</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">إحصائيات من قطاع الأمن</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">استطلاع عام 2024:</span> 91% من شركات الأمن الرائدة تعتبر الزي الموحد عنصراً استراتيجياً في تسويق خدماتها وبناء هويتها المؤسسية.</li>
                  <li><span className="font-medium">دراسة مقارنة:</span> المؤسسات الأمنية التي تستثمر بشكل أكبر في جودة الزي الموحد (10%+ من ميزانية المعدات) تسجل معدلات احتفاظ بالموظفين أعلى بنسبة 24% من الشركات ذات الاستثمار المنخفض.</li>
                  <li><span className="font-medium">تقرير صناعة الأمن 2023:</span> يمثل سوق الزي الموحد للأمن والحراسة في المملكة العربية السعودية ما قيمته 420 مليون ريال سنوياً، بمعدل نمو 8.5% سنوياً.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="إحصائيات حول الزي الموحد في قطاع الأمن"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  رسم بياني يوضح تأثير الزي الموحد على معايير الأداء في قطاع الأمن
                </div>
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