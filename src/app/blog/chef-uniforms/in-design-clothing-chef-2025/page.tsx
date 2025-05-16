import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'اتجاهات تصميم ملابس الطهاة لعام 2025',
  description: 'استعراض لأحدث اتجاهات وابتكارات تصميم ملابس الطهاة المتوقعة في عام 2025 مع التركيز على التكنولوجيا المتقدمة والاستدامة والتخصيص',
};

export default function ChefUniformDesign2025() {
  const imageSrc = '/images/chef_uniforms/modern_chef_wear_2025.jpeg';
  const title = 'اتجاهات تصميم ملابس الطهاة لعام 2025';
  const readingTime = '٧ دقائق للقراءة';
  const datePublished = '١٠ يونيو ٢٠٢٤';

  const relatedArticles = [
    {
      title: "الزي الموحد في قطاع خدمات التموين والضيافة السعودي",
      description: "استعراض شامل لتطور الزي الموحد في قطاع خدمات التموين والضيافة في المملكة العربية السعودية",
      image: "/images/culinary_apparel/chef_uniforms.jpeg",
      url: "/blog/chef-uniforms/uniform-in-services-catering-Saudi",
      date: "٢٠ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    },
    {
      title: "تصميم أزياء الطهاة في المملكة العربية السعودية",
      description: "نظرة عميقة على اتجاهات وابتكارات تصميم أزياء الطهاة في المملكة العربية السعودية",
      image: "/images/culinary_apparel/chef_uniforms.jpeg",
      url: "/blog/chef-uniforms/design-in-Saudi",
      date: "١٥ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    },
    {
      title: "الملابس المهنية للطهاة: المعايير والمواصفات العالمية",
      description: "دليل شامل للمعايير والمواصفات العالمية لملابس الطهاة المهنية",
      image: "/images/culinary_apparel/chef_uniforms.jpeg",
      url: "/blog/chef-uniforms/culinary_apparel-culinary-17",
      date: "٥ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    }
  ];

  const tags = ["تصميم أزياء الطهاة", "اتجاهات 2025", "ملابس الطهاة المستقبلية", "التقنيات الذكية للأزياء", "الاستدامة في ملابس الطهاة", "الأقمشة المبتكرة", "التخصيص في أزياء الطهاة"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'tech-integration', title: 'دمج التكنولوجيا في ملابس الطهاة' },
    { id: 'sustainability', title: 'الاستدامة والمسؤولية البيئية' },
    { id: 'customization', title: 'التخصيص والتفرد في التصميم' },
    { id: 'functional-aesthetic', title: 'التوازن بين الوظيفة والجمالية' },
    { id: 'health-safety', title: 'معايير الصحة والسلامة المتطورة' },
    { id: 'cultural-elements', title: 'دمج العناصر الثقافية في التصميم العالمي' },
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
                يشهد عالم تصميم ملابس الطهاة تطورات متسارعة تدفعها التقنيات الجديدة والاحتياجات المتغيرة لبيئة العمل المعاصرة. مع اقتراب عام 2025، تتبلور اتجاهات واضحة ستشكل مستقبل هذه الصناعة، مجسدة التوازن بين الوظيفية والاستدامة والأناقة والهوية الثقافية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض أبرز الاتجاهات المتوقع أن تهيمن على تصميم ملابس الطهاة في عام 2025، استناداً إلى تحليل توجهات السوق الحالية، وآراء خبراء الصناعة، والتطورات التكنولوجية الناشئة. هذه النظرة المستقبلية تقدم رؤى قيمة للمصممين والمصنعين ومشغلي المطاعم والفنادق الراغبين في مواكبة أحدث التطورات في هذا المجال الحيوي.
              </p>
            </section>

            <section id="tech-integration" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دمج التكنولوجيا في ملابس الطهاة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة الذكية والتكنولوجيا المدمجة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">أقمشة تنظيم الحرارة:</span> تقنيات متقدمة تتكيف مع درجة حرارة الجسم والبيئة المحيطة، تحافظ على برودة الطاهي في المطابخ الساخنة.</li>
                  <li><span className="font-medium">مواد مضادة للميكروبات:</span> معالجات متطورة تمنع نمو البكتيريا والفطريات، تقلل الروائح وتطيل فترات الاستخدام بين الغسيل.</li>
                  <li><span className="font-medium">أنسجة ذاتية التنظيف:</span> تقنيات نانو متقدمة تجعل الأقمشة طاردة للسوائل والبقع، وقادرة على تحليل البقع العنيدة عند تعرضها للضوء.</li>
                  <li><span className="font-medium">أجهزة استشعار مدمجة:</span> مستشعرات صغيرة مدمجة في الملابس لقياس درجات الحرارة المحيطة وتنبيه الطهاة للمخاطر المحتملة.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="التكنولوجيا المدمجة في ملابس الطهاة المستقبلية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  أحدث التقنيات المدمجة في سترات الطهاة لعام 2025 تجمع بين الراحة والوظائف الذكية
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">نشهد تحولاً جذرياً في توقعات المستخدمين لملابس الطهاة. لم تعد الوظيفة الأساسية كافية - يريد الطهاة المعاصرون ملابس تعمل بذكاء معهم، تتكيف مع احتياجاتهم وتعزز أداءهم في المطبخ.</p>
                  <footer className="text-sm text-gray-600">— سارة المطيري، مديرة الابتكار في شركة تصميم الأزياء المهنية</footer>
                </blockquote>
              </div>
            </section>

            <section id="sustainability" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاستدامة والمسؤولية البيئية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تتزايد أهمية الاستدامة كاتجاه رئيسي في تصميم ملابس الطهاة، مدفوعة بالوعي البيئي المتنامي والتنظيمات الحكومية الصارمة:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المواد المستدامة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>استخدام القطن العضوي المزروع بدون مبيدات</li>
                    <li>ألياف مصنعة من النفايات البلاستيكية المعاد تدويرها</li>
                    <li>مواد متجددة مثل قماش الليوسيل المستخرج من لب الخشب</li>
                    <li>أقمشة مخلوطة تقلل الاعتماد على البتروكيماويات</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">عمليات الإنتاج المسؤولة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تقنيات الصباغة الخالية من المياه لتوفير الموارد</li>
                    <li>استخدام الطاقة المتجددة في المصانع</li>
                    <li>تقليل النفايات من خلال تقنيات القص المحوسبة</li>
                    <li>سلاسل توريد محلية لتقليل البصمة الكربونية</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="ملابس الطهاة المستدامة والصديقة للبيئة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  زي الطهاة المستدام المصنوع من مواد معاد تدويرها وألياف طبيعية متجددة
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الدورة الكاملة للمنتج</h3>
                <p className="mb-2 text-gray-700">نهج "من المهد إلى المهد" في تصميم ملابس الطهاة لعام 2025:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تصميم قابل للتفكيك: سهولة فصل المكونات المختلفة عند نهاية العمر الافتراضي</li>
                  <li>خدمات إصلاح من المصنعين لإطالة عمر المنتجات</li>
                  <li>برامج إعادة التدوير: استعادة الملابس المستعملة لتحويلها إلى منتجات جديدة</li>
                  <li>مواد قابلة للتحلل البيولوجي: تتحلل بأمان عند التخلص منها</li>
                </ul>
              </div>
            </section>

            <section id="customization" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التخصيص والتفرد في التصميم</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                يتجه تصميم ملابس الطهاة في 2025 نحو مزيد من التخصيص والتفرد، مما يتيح للمطاعم والطهاة التعبير عن هويتهم الفريدة:
              </p>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">مستويات التخصيص المتقدمة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">التصميم الرقمي والطباعة ثلاثية الأبعاد:</span> إمكانية تصميم أنماط فريدة وتفاصيل دقيقة تعكس هوية المطعم أو أسلوب الطاهي.</li>
                    <li><span className="font-medium">القصات المخصصة:</span> تعديل الأنماط التقليدية لتناسب أنواع الأجسام المختلفة وتفضيلات الطهاة الشخصية.</li>
                    <li><span className="font-medium">خيارات التطريز المتقدمة:</span> دمج شعارات ورموز معقدة باستخدام تقنيات تطريز آلية متطورة.</li>
                    <li><span className="font-medium">أنظمة تصميم تفاعلية:</span> منصات رقمية تتيح للعملاء تصميم ملابسهم عبر الإنترنت وتعديلها بحرية.</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="تخصيص ملابس الطهاة حسب الهوية والأسلوب"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  أنظمة التخصيص المتقدمة تتيح للطهاة تصميم ملابس تعكس أسلوبهم الشخصي وهوية مطاعمهم
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">نرى تحولاً واضحاً من النمط الموحد العالمي إلى التعبير عن الهوية الفردية. لم يعد الطهاة يريدون أن يبدوا متشابهين - بل يسعون إلى ملابس تعكس فلسفتهم الطهوية ومصدر إلهامهم وقصتهم الخاصة.</p>
                  <footer className="text-sm text-gray-600">— فيصل العنزي، مصمم أزياء الطهاة ومستشار المطاعم</footer>
                </blockquote>
              </div>
            </section>

            <section id="functional-aesthetic" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التوازن بين الوظيفة والجمالية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                يتجه تصميم ملابس الطهاة لعام 2025 نحو تحقيق توازن أفضل بين المتطلبات الوظيفية والجمالية، مستفيداً من التطورات في تقنيات الأقمشة والتصميم:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تطورات وظيفية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>تصميمات مرنة تتكيف مع حركة الجسم أثناء العمل المكثف</li>
                      <li>أنظمة تهوية مدمجة تعزز تدفق الهواء في المناطق الحرجة</li>
                      <li>جيوب وحوامل أدوات معاد تصميمها لتحسين الوصول وتنظيم المعدات</li>
                      <li>تقنيات تثبيت متطورة تلغي الحاجة للأزرار التقليدية</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">عناصر جمالية معاصرة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>خطوط أنيقة مستوحاة من تصاميم الأزياء المعاصرة</li>
                      <li>ألوان جريئة تخرج عن التقليدية الأبيض والأسود</li>
                      <li>لمسات من الأقمشة ذات الملمس المميز للتباين البصري</li>
                      <li>تفاصيل معمارية مستوحاة من تصميم المطاعم الحديثة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="التوازن بين الوظيفة والجمالية في تصميم ملابس الطهاة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تصاميم مبتكرة تجمع بين الأداء العملي والأناقة العصرية في أزياء الطهاة لعام 2025
                </div>
              </div>
            </section>

            <section id="health-safety" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير الصحة والسلامة المتطورة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">معايير السلامة المتقدمة في تصميم 2025</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">حماية متطورة من الحرارة:</span> طبقات ومواد مركبة توفر عزلاً أفضل ضد الحرارة العالية والرذاذ الساخن.</li>
                  <li><span className="font-medium">مقاومة متقدمة للقطع:</span> تقنيات نسيج جديدة تحمي من إصابات السكاكين دون المساس بخفة الوزن.</li>
                  <li><span className="font-medium">ميزات مضادة للانزلاق:</span> تصميمات أحذية مبتكرة توفر قبضة أفضل على الأسطح الرطبة.</li>
                  <li><span className="font-medium">أنظمة تنبيه مدمجة:</span> مستشعرات تكشف المخاطر المحتملة مثل درجات الحرارة المفرطة أو التعرض الطويل للحرارة.</li>
                </ul>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                تعكس معايير الصحة والسلامة المتطورة في تصميم ملابس الطهاة لعام 2025 الوعي المتزايد بأهمية حماية العاملين في بيئات المطابخ المحفوفة بالمخاطر. تدفع التشريعات العالمية والمحلية الأكثر صرامة، إلى جانب الطلب المتزايد من أصحاب المطاعم والطهاة أنفسهم، تطوير حلول مبتكرة تجمع بين الحماية المتقدمة والراحة العالية.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الصحة والرفاهية المهنية</h3>
                <p className="mb-2 text-gray-700">تطورات تركز على الصحة طويلة المدى للطهاة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تصميمات مريحة هندسياً تقلل من إجهاد العضلات والمفاصل خلال نوبات العمل الطويلة</li>
                  <li>أنظمة دعم الظهر المدمجة لتحسين وضعية الجسم أثناء الوقوف لفترات طويلة</li>
                  <li>مواد خالية من المواد الكيميائية الضارة لتقليل مخاطر تهيج الجلد والحساسية</li>
                  <li>تقنيات تخفيف الضغط المستهدف في مناطق الجسم الأكثر عرضة للإجهاد</li>
                </ul>
              </div>
            </section>

            <section id="cultural-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دمج العناصر الثقافية في التصميم العالمي</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                يتجه تصميم ملابس الطهاة في 2025 نحو دمج أكثر إبداعاً للعناصر الثقافية المحلية ضمن إطار عالمي، مما يخلق هويات مميزة تعكس تنوع المطابخ والثقافات:
              </p>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">توجهات الهوية الثقافية في تصميم 2025</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">رموز ثقافية مدمجة:</span> استخدام عناصر من التراث المحلي في التفاصيل والزخارف.</li>
                    <li><span className="font-medium">تقنيات حرفية تقليدية:</span> إحياء أساليب الصباغة والتطريز الحرفية التقليدية بلمسة معاصرة.</li>
                    <li><span className="font-medium">لوحات ألوان مستوحاة من البيئات المحلية:</span> اختيار ألوان تعكس البيئة الطبيعية والثقافية للمنطقة.</li>
                    <li><span className="font-medium">تكييف القصات التقليدية:</span> تطويع الأنماط العالمية لتعكس التفضيلات المحلية للراحة والأناقة.</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="دمج العناصر الثقافية في تصميم ملابس الطهاة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  ملابس طهاة تجمع بين العناصر الثقافية السعودية التقليدية ومعايير التصميم العالمية المعاصرة
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">التوازن الدقيق بين احترام الهوية الثقافية وتلبية المعايير العالمية هو مفتاح تصميم ملابس الطهاة المستقبلية. نسعى لخلق تصاميم تحتفي بالتراث المحلي دون التضحية بالوظائف والمعايير العالمية التي تحدد زي الطهاة الاحترافي.</p>
                  <footer className="text-sm text-gray-600">— د. نورة القحطاني، أستاذة تصميم الأزياء المهنية</footer>
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