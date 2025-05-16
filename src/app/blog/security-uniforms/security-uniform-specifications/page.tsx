import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'مواصفات الزي الأمني المعتمد عالمياً',
  description: 'دليل مفصل لمواصفات الزي الأمني المعتمدة عالمياً ومعايير اختياره للامتثال للمتطلبات الدولية وتحقيق أعلى معايير الأداء.',
};

export default function SecurityUniformSpecifications() {
  const imageSrc = '/images/security_uniforms/security_uniform_design.jpeg';
  const title = 'مواصفات الزي الأمني المعتمد عالمياً';
  const readingTime = '٧ دقائق للقراءة';
  const datePublished = '١٢ يونيو ٢٠٢٤';

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
      title: "أهمية الزي الموحد في قطاع الأمن والحراسة",
      description: "دراسة تفصيلية عن دور وتأثير الزي الموحد في قطاع الأمن والحراسة",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security-uniforms/importance-uniform-on-security",
      date: "٢٠ يونيو ٢٠٢٤",
      category: "زي الأمن"
    },
    {
      title: "مواد تصنيع زي رجال الأمن: المتانة والأداء",
      description: "تحليل شامل لمواد تصنيع الزي الموحد لرجال الأمن ومميزاتها",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security-uniforms/uniform-security-materials",
      date: "٥ يونيو ٢٠٢٤",
      category: "زي الأمن"
    }
  ];

  const tags = ["المعايير الدولية", "الزي الأمني", "مواصفات الأمن", "المطابقة العالمية", "معايير الجودة", "الزي الموحد"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'global-standards', title: 'المعايير العالمية للزي الأمني' },
    { id: 'technical-specs', title: 'المواصفات الفنية والوظيفية' },
    { id: 'safety-requirements', title: 'متطلبات السلامة والحماية' },
    { id: 'professional-identifiers', title: 'العناصر المميزة للهوية المهنية' },
    { id: 'certification', title: 'الاعتماد والشهادات الدولية' },
    { id: 'future-trends', title: 'اتجاهات مستقبلية في معايير الزي الأمني' },
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
                يعد الالتزام بالمواصفات العالمية للزي الأمني أمراً ضرورياً للمؤسسات الأمنية التي تسعى للامتثال للمعايير الدولية وتقديم خدمات تتسم بالاحترافية والكفاءة. فالزي الأمني ليس مجرد هوية بصرية، بل منظومة متكاملة تخضع لمعايير تقنية وفنية دقيقة تضمن الأداء الأمثل وتوفر مستويات عالية من السلامة والراحة والوظائف العملية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض المواصفات العالمية المعتمدة للزي الأمني، ونسلط الضوء على المعايير الدولية التي تحكم تصميم وتصنيع وتوريد الزي الموحد لقطاع الأمن. كما نتناول المتطلبات الفنية والوظيفية التي يجب أن يستوفيها الزي الأمني، ونناقش أهمية الاعتمادات والشهادات الدولية في هذا المجال.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                سواء كنت مديراً لمؤسسة أمنية، أو مسؤولاً عن توريد الزي الموحد، أو متخصصاً في مجال الأمن، سيقدم لك هذا المقال رؤية شاملة عن المواصفات العالمية التي يجب مراعاتها لضمان زي أمني يلبي أعلى معايير الجودة والأداء.
          </p>
        </section>

            <section id="global-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المعايير العالمية للزي الأمني</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الهيئات والمنظمات المعتمدة دولياً</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">المنظمة الدولية للمعايير (ISO):</span> تضع معايير قياسية لخصائص المنسوجات والمواد المستخدمة في الزي الأمني، مثل ISO 11612 للملابس الواقية من الحرارة واللهب، وISO 20471 للملابس عالية الرؤية.</li>
                  <li><span className="font-medium">المعهد الوطني الأمريكي للمعايير (ANSI):</span> يوفر إرشادات محددة لملابس الحماية والسلامة المهنية، خاصة في مجال الزي عالي الرؤية والملابس المقاومة للقطع.</li>
                  <li><span className="font-medium">الاتحاد الأوروبي (EU):</span> يطبق توجيهات معدات الحماية الشخصية (PPE) التي تصنف الملابس الأمنية حسب مستوى الحماية المقدمة.</li>
                  <li><span className="font-medium">المجلس الدولي لأنظمة الزي الموحد (IUCS):</span> يضع معايير لتصنيف وتوحيد مواصفات الزي المهني بما في ذلك القطاع الأمني.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="الهيئات الدولية المعنية بمعايير الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  شعارات وتمثيل للهيئات الدولية المسؤولة عن وضع معايير الزي الأمني
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">المعايير العالمية ليست فقط وثائق تقنية، بل هي ضمان للجودة وتوحيد للممارسات المهنية. الالتزام بها يعني الانضمام إلى شبكة عالمية من المؤسسات الأمنية التي تعمل وفق إطار موحد يعزز التعاون ويرفع مستوى الخدمات المقدمة.</p>
                  <footer className="text-sm text-gray-600">— د. محمد الهاشمي، خبير دولي في أنظمة ومعايير الأمن</footer>
                </blockquote>
              </div>
        </section>

            <section id="technical-specs" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المواصفات الفنية والوظيفية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تخضع المواصفات الفنية للزي الأمني لمعايير دقيقة تضمن الأداء الوظيفي العالي والمتانة الاستثنائية:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مواصفات المتانة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قوة الشد ≥ 500 نيوتن للأقمشة الأساسية (ISO 13934)</li>
                    <li>مقاومة الاحتكاك ≥ 30,000 دورة وفق اختبار مارتينديل</li>
                    <li>ثبات الأبعاد بعد الغسيل مع انكماش أقل من 3%</li>
                    <li>مقاومة التمزق ≥ 25 نيوتن للخياطات والوصلات</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المواصفات الوظيفية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مرونة بنسبة 15-25% للحركة الحرة دون تقييد</li>
                    <li>قابلية النفاذية للهواء ≥ 100 سم³/سم²/ثانية</li>
                    <li>نظام جيوب متعدد المستويات لحمل المعدات الأمنية</li>
                    <li>مناطق تعزيز في الركبتين والمرفقين تتحمل ضغط 45 كيلو باسكال</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="تفاصيل المواصفات الفنية للزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  رسم توضيحي للمواصفات الفنية والوظيفية للزي الأمني المعتمد عالمياً
                </div>
              </div>
        </section>

            <section id="safety-requirements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">متطلبات السلامة والحماية</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">معايير مقاومة المخاطر</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">مقاومة الاشتعال:</span> الحد الأدنى من خصائص انتشار اللهب من الفئة 1 وفقاً لمعيار EN ISO 14116، مع عدم تكوين قطرات منصهرة عند التعرض للهب.</li>
                    <li><span className="font-medium">الرؤية العالية:</span> العاكسية بقيمة ≥ 330 كاندلا/(لوكس•م²) للأشرطة العاكسة وفقاً لمعيار EN ISO 20471 للعمل الليلي.</li>
                    <li><span className="font-medium">الخصائص المضادة للميكروبات:</span> قدرة على تقليل البكتيريا بنسبة ≥ 95% خلال 24 ساعة وفقاً للمعيار AATCC 100 لتقليل خطر العدوى والروائح الكريهة.</li>
                    <li><span className="font-medium">مقاومة الثقب والقطع:</span> مستوى حماية لا يقل عن 3 وفق المعيار EN 388 للمناطق المعرضة للمخاطر الميكانيكية.</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="عناصر السلامة في الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  عناصر السلامة والحماية المدمجة في تصميم الزي الأمني المعتمد عالمياً
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">تخضع متطلبات السلامة في الزي الأمني لتقييم المخاطر المحتملة في بيئة العمل. نحن نصمم الزي الأمني ليكون خط الدفاع الأول للعاملين في هذا القطاع، مع تحقيق توازن دقيق بين الحماية الفعالة وحرية الحركة والراحة اللازمة لنوبات العمل الطويلة.</p>
                  <footer className="text-sm text-gray-600">— م. سارة الحربي، مديرة تطوير المنتجات في شركة متخصصة بالزي الأمني</footer>
                </blockquote>
              </div>
        </section>

            <section id="professional-identifiers" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر المميزة للهوية المهنية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الشارات والرموز</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>شارات الهوية بمواصفات RF-ID آمنة ضد التزوير</li>
                      <li>رموز الرتب والمناصب وفق تدرج لوني ومقاسي موحد</li>
                      <li>الشعارات المؤسسية بتقنية النسيج المطرز عالي الدقة</li>
                      <li>علامات مميزة للتخصصات الأمنية المختلفة</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المقاييس اللونية والتصميمية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>ألوان محددة بدقة وفق نظام بانتون العالمي</li>
                      <li>تصاميم موحدة للقصات تراعي الفروقات الجسدية</li>
                      <li>مظهر احترافي وفق مقاييس السلوك المهني</li>
                      <li>تمايز واضح بين المستويات الإدارية والميدانية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="عناصر الهوية المهنية في الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  العناصر المميزة للهوية المهنية في الزي الأمني المعتمد عالمياً
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الاعتبارات الثقافية والمحلية</h3>
                <p className="mb-2 text-gray-700">التوازن بين المعايير العالمية والخصوصية الثقافية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">المرونة في التطبيق:</span> المعايير العالمية تسمح بتكييف عناصر معينة لتناسب المتطلبات المحلية مع الحفاظ على الوظائف الأساسية.</li>
                  <li><span className="font-medium">اعتبارات المناخ:</span> تعديلات في وزن الأقمشة ونوعيتها لتناسب البيئات المناخية المختلفة من الصحراوية إلى الاستوائية أو الباردة.</li>
                  <li><span className="font-medium">الخصوصية الجندرية:</span> تصاميم مخصصة تراعي المتطلبات الثقافية والدينية مع الحفاظ على المعايير الفنية والوظيفية.</li>
                  <li><span className="font-medium">العناصر الرمزية:</span> إدماج رموز ذات دلالة وطنية أو ثقافية ضمن الإطار العام للمواصفات العالمية.</li>
                </ul>
              </div>
        </section>

            <section id="certification" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاعتماد والشهادات الدولية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">إجراءات الحصول على الاعتماد</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">التأهيل الأولي:</span> تقييم للمصنع أو المورد وفق معايير ISO 9001 لنظم إدارة الجودة والامتثال للمعايير البيئية والاجتماعية.</li>
                  <li><span className="font-medium">اختبارات المنتج:</span> فحص عينات من الزي في مختبرات معتمدة دولياً للتأكد من مطابقتها للمواصفات القياسية.</li>
                  <li><span className="font-medium">التدقيق الدوري:</span> زيارات تفتيش مفاجئة ومجدولة لضمان استمرار الالتزام بالمعايير المطلوبة خلال عمليات الإنتاج.</li>
                  <li><span className="font-medium">تجديد الاعتماد:</span> إعادة التقييم كل 2-3 سنوات للتأكد من مواكبة التحديثات في المعايير العالمية.</li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">الشهادات الرئيسية للزي الأمني</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">شهادة OEKO-TEX® Standard 100:</span> تضمن خلو المنسوجات من المواد الضارة والسامة، وهي ضرورية للملابس التي تلامس الجلد مباشرة لفترات طويلة.</li>
                    <li><span className="font-medium">شهادة CE للمعدات الواقية:</span> إلزامية في الاتحاد الأوروبي وتؤكد امتثال الزي الأمني لمتطلبات السلامة الأساسية.</li>
                    <li><span className="font-medium">شهادة ASTM F1506:</span> تؤكد مقاومة الملابس للحريق وخصائص الحماية من القوس الكهربائي للعاملين في المناطق ذات المخاطر الكهربائية.</li>
                    <li><span className="font-medium">شهادة Bluesign®:</span> تؤكد الإنتاج المستدام والآمن بيئياً للمنسوجات المستخدمة في الزي الأمني.</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="عملية اعتماد وشهادات الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  مراحل الحصول على الاعتماد والشهادات الدولية للزي الأمني
                </div>
              </div>
        </section>

            <section id="future-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اتجاهات مستقبلية في معايير الزي الأمني</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تطور المعايير نحو الذكاء والاستدامة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">معايير الملابس الذكية:</span> تطوير مواصفات جديدة للإلكترونيات المدمجة في الزي الأمني مثل أجهزة تتبع المؤشرات الحيوية وأنظمة الاتصال اللاسلكية.</li>
                  <li><span className="font-medium">الاستدامة البيئية:</span> توجه متزايد نحو معايير أكثر صرامة للزي الصديق للبيئة، مع قياس دورة الحياة الكاملة من الإنتاج إلى إعادة التدوير.</li>
                  <li><span className="font-medium">المرونة التكيفية:</span> معايير جديدة للزي الأمني القادر على التكيف مع البيئات المتغيرة والمهام المتنوعة دون الحاجة لتغيير كامل.</li>
                  <li><span className="font-medium">البصمة الرقمية:</span> مواصفات للتحقق الرقمي من أصالة الزي ومطابقته للمعايير عبر تقنيات مثل البلوكتشين وأكواد QR المشفرة.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="المعايير المستقبلية للزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تصور للاتجاهات المستقبلية في معايير ومواصفات الزي الأمني العالمي
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">المستقبل يحمل تحولاً جذرياً في مفهوم المعايير الدولية للزي الأمني. سنشهد انتقالاً من المواصفات الثابتة إلى المعايير الديناميكية التي تتكيف مع الظروف المتغيرة. الزي الأمني سيصبح منظومة متكاملة من الحماية والمراقبة والاتصال، مع معايير متجددة تواكب هذا التطور المتسارع.</p>
                  <footer className="text-sm text-gray-600">— أ. خالد العبدلي، رئيس لجنة المعايير العالمية للزي الأمني</footer>
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