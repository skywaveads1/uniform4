import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الملابس المهنية للطهاة: المعايير والمواصفات العالمية',
  description: 'دليل شامل للمعايير والمواصفات العالمية لملابس الطهاة المهنية مع التركيز على الجودة والسلامة والأداء',
};

export default function CulinaryApparel17() {
  const imageSrc = '/images/chef_uniforms/culinary_standards.jpeg';
  const title = 'الملابس المهنية للطهاة: المعايير والمواصفات العالمية';
  const readingTime = '٨ دقائق للقراءة';
  const datePublished = '٥ يونيو ٢٠٢٤';

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
      title: "اتجاهات تصميم ملابس الطهاة لعام 2025",
      description: "استعراض لأحدث اتجاهات تصميم ملابس الطهاة المتوقعة في عام 2025",
      image: "/images/culinary_apparel/chef_uniforms.jpeg",
      url: "/blog/chef-uniforms/in-design-clothing-chef-2025",
      date: "١٠ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    }
  ];

  const tags = ["المعايير العالمية لملابس الطهاة", "السلامة في زي الطهاة", "أقمشة ملابس الطهاة", "مواصفات الجودة", "سترات الطهاة", "معايير المطاعم"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'global-standards', title: 'المعايير العالمية لملابس الطهاة' },
    { id: 'fabric-specs', title: 'مواصفات الأقمشة والمواد' },
    { id: 'safety-requirements', title: 'متطلبات السلامة والصحة المهنية' },
    { id: 'culinary-jackets', title: 'مواصفات سترات الطهاة الاحترافية' },
    { id: 'pants-accessories', title: 'البناطيل والإكسسوارات المكملة' },
    { id: 'certifications', title: 'الشهادات والاعتمادات العالمية' },
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
                تمثل الملابس المهنية للطهاة أكثر من مجرد زي موحد؛ إنها أدوات عمل أساسية تجمع بين الوظيفة والسلامة والهوية المهنية. على مدار تاريخها الطويل، تطورت هذه الملابس لتلبي متطلبات بيئة المطبخ الصعبة مع الحفاظ على التقاليد المهنية العريقة للطهي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض المعايير والمواصفات العالمية لملابس الطهاة المهنية، ونسلط الضوء على الجوانب الأساسية التي يجب مراعاتها عند اختيار أو تصميم هذه الملابس. يقدم هذا الدليل رؤى مفصلة للمصنعين والمشغلين والطهاة المهتمين بفهم أفضل الممارسات العالمية في هذا المجال.
              </p>
            </section>

            <section id="global-standards" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المعايير العالمية لملابس الطهاة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الهيئات المعيارية الرئيسية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">المنظمة الدولية للمعايير (ISO):</span> تضع معايير الجودة العامة للمنسوجات المستخدمة في الملابس المهنية، بما في ذلك معايير ISO 13688 الخاصة بالملابس الواقية.</li>
                  <li><span className="font-medium">رابطة المطاعم الوطنية (NRA):</span> تقدم إرشادات حول ملابس الطهاة المناسبة لضمان السلامة الغذائية والنظافة.</li>
                  <li><span className="font-medium">إدارة السلامة والصحة المهنية (OSHA):</span> تحدد متطلبات السلامة للملابس المستخدمة في بيئات المطبخ التجارية.</li>
                  <li><span className="font-medium">الاتحاد العالمي لجمعيات الطهاة (WACS):</span> يوفر إرشادات حول الزي التقليدي والمهني للطهاة.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="معايير الزي العالمية للطهاة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  طهاة يرتدون ملابس مهنية تتوافق مع المعايير العالمية في مطبخ حديث
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">المعايير العالمية ليست قيوداً على الإبداع في تصميم ملابس الطهاة، بل هي إطار يضمن تحقيق الوظيفة الأساسية من حيث السلامة والأداء، مع إتاحة مساحة للتعبير عن الهوية المهنية والثقافية للطاهي والمؤسسة.</p>
                  <footer className="text-sm text-gray-600">— الشيف توماس كيلر، حائز على نجوم ميشلان</footer>
                </blockquote>
              </div>
            </section>

            <section id="fabric-specs" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مواصفات الأقمشة والمواد</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر الأقمشة والمواد المستخدمة في ملابس الطهاة من أهم العوامل التي تحدد أداءها وراحتها ومتانتها:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة الموصى بها</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قطن مصري بنسبة 100% للراحة والتنفس</li>
                    <li>خلطات القطن والبوليستر (65/35) للمتانة وسهولة العناية</li>
                    <li>تويل مزدوج الطبقة لمقاومة الحرارة</li>
                    <li>جاباردين للبناطيل لمقاومة التآكل والمتانة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">خصائص الأداء المطلوبة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مقاومة للحرارة حتى 200 درجة مئوية</li>
                    <li>مقاومة للاحتكاك بمعدل 30,000 دورة مارتنديل</li>
                    <li>ثبات الأبعاد بعد الغسيل (تقلص أقل من 3%)</li>
                    <li>مقاومة البقع والسوائل مع قابلية التنفس</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="أقمشة ملابس الطهاة عالية الأداء"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  عينات من الأقمشة عالية الأداء المستخدمة في تصنيع ملابس الطهاة المهنية
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">اختبارات جودة الأقمشة</h3>
                <p className="mb-2 text-gray-700">معايير الاختبار العالمية للأقمشة المستخدمة في ملابس الطهاة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>اختبار مقاومة الاشتعال (EN ISO 14116)</li>
                  <li>اختبار نفاذية الهواء (ASTM D737)</li>
                  <li>اختبار ثبات الألوان (ISO 105)</li>
                  <li>اختبار مقاومة التمزق والشد (ISO 13934)</li>
                  <li>اختبار امتصاص الماء والحرارة (BS 3424)</li>
                </ul>
              </div>
            </section>

            <section id="safety-requirements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">متطلبات السلامة والصحة المهنية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تحدد متطلبات السلامة والصحة المهنية الخصائص الأساسية التي يجب توافرها في ملابس الطهاة لحماية مرتديها في بيئة المطبخ:
              </p>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">معايير السلامة الأساسية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">مقاومة اللهب:</span> يجب أن تكون الأقمشة مقاومة للاشتعال أو ذاتية الانطفاء، خاصة في المطابخ التي تستخدم اللهب المفتوح.</li>
                    <li><span className="font-medium">الحماية من الرذاذ الساخن:</span> سماكة كافية ومعالجات خاصة لمنع وصول السوائل الساخنة للجلد بشكل فوري.</li>
                    <li><span className="font-medium">منع الانزلاق:</span> أحذية بنعل مقاوم للانزلاق مصممة خصيصاً لبيئات المطابخ.</li>
                    <li><span className="font-medium">تصميم آمن:</span> خلو الملابس من الأجزاء المتدلية أو الأزرار غير المثبتة جيداً التي قد تعلق بالمعدات.</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="ملابس الطهاة الواقية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  ملابس طهاة مصممة مع التركيز على عناصر السلامة والحماية في بيئة المطبخ
                </div>
              </div>
            </section>

            <section id="culinary-jackets" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مواصفات سترات الطهاة الاحترافية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تعد سترة الطاهي القطعة الأكثر تميزاً في زي الطهاة، وتخضع لمواصفات دقيقة تجمع بين الوظيفة والتقاليد المهنية:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المواصفات الهيكلية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>طبقة مزدوجة من القماش في الجزء الأمامي للحماية المضاعفة</li>
                      <li>أكمام تتحمل درجات حرارة عالية مع قابلية الطي للتحكم في الطول</li>
                      <li>أزرار من مواد متينة غير قابلة للانصهار (مثل القرص أو النيلون المقوى)</li>
                      <li>جيوب استراتيجية للأدوات الصغيرة بتصميم يمنع تراكم بقايا الطعام</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">أنواع التصميمات المعتمدة</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>التصميم الكلاسيكي بصف مزدوج من الأزرار (Double-breasted)</li>
                      <li>التصميم الاسكندنافي بياقة عالية وطية أمامية واحدة</li>
                      <li>التصميم الفرنسي التقليدي بأكمام طويلة وخط كتف خلفي منخفض</li>
                      <li>التصميم المعاصر خفيف الوزن بأكمام قصيرة ونسيج تقني للمطابخ الحديثة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="سترات الطهاة بالمواصفات العالمية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  مجموعة من سترات الطهاة المصممة وفق المعايير العالمية بمختلف التصاميم
                </div>
              </div>
            </section>

            <section id="pants-accessories" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">البناطيل والإكسسوارات المكملة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مواصفات بناطيل الطهاة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">النمط الكلاسيكي Houndstooth:</span> نمط "عظمة السمكة" أو "قدم الدجاج" التقليدي يخفي البقع ويعكس التقاليد المهنية.</li>
                  <li><span className="font-medium">نسيج متين:</span> أقمشة بوزن 7-9 أونصات تتحمل الاستخدام المتكرر والغسيل المستمر.</li>
                  <li><span className="font-medium">خصر مرن:</span> حزام مطاطي مع رباط قابل للتعديل للراحة خلال الحركة المستمرة.</li>
                  <li><span className="font-medium">جيوب عملية:</span> تصميم الجيوب بشكل لا يعيق الحركة مع متانة كافية لحمل الأدوات الصغيرة.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الإكسسوارات المعيارية</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">قبعة الطاهي (Toque)</h4>
                    <ul className="list-disc list-inside space-y-1 mr-3 text-gray-700 text-sm">
                      <li>ارتفاع 8-12 بوصة للشيف التنفيذي</li>
                      <li>تصميم يسمح بتدوير الهواء فوق الرأس</li>
                      <li>قماش قطني 100% قابل للتنفس</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">منديل العنق (Neckerchief)</h4>
                    <ul className="list-disc list-inside space-y-1 mr-3 text-gray-700 text-sm">
                      <li>قماش خفيف ماص للعرق</li>
                      <li>طول 90 سم × عرض 60 سم</li>
                      <li>سهولة الطي والتثبيت</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">المريول (Apron)</h4>
                    <ul className="list-disc list-inside space-y-1 mr-3 text-gray-700 text-sm">
                      <li>مقاومة للماء والبقع</li>
                      <li>جيوب متعددة للأدوات الصغيرة</li>
                      <li>رباط قابل للتعديل لراحة العنق</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">أحذية المطبخ</h4>
                    <ul className="list-disc list-inside space-y-1 mr-3 text-gray-700 text-sm">
                      <li>نعل مقاوم للانزلاق</li>
                      <li>مقدمة مقواة لحماية الأصابع</li>
                      <li>مقاومة للماء والزيوت</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/culinary_apparel/chef_uniforms.jpeg"
                  alt="إكسسوارات الطهاة المكملة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  مناديل العنق وقبعات الطهاة التقليدية المصممة وفق المعايير المهنية
                </div>
              </div>
            </section>

            <section id="certifications" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الشهادات والاعتمادات العالمية</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر الشهادات والاعتمادات ضمانة للالتزام بالمعايير العالمية في تصنيع ملابس الطهاة:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">أهم الشهادات العالمية</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">STANDARD 100 by OEKO-TEX®:</span> شهادة تضمن خلو المنسوجات من المواد الضارة</li>
                  <li><span className="font-medium">STeP by OEKO-TEX®:</span> شهادة للإنتاج المستدام والصديق للبيئة</li>
                  <li><span className="font-medium">ISO 9001:</span> نظام إدارة الجودة في التصنيع</li>
                  <li><span className="font-medium">ISO 14001:</span> نظام الإدارة البيئية</li>
                  <li><span className="font-medium">ASTM F1506:</span> معيار مقاومة الحريق للملابس</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">عند اختيار ملابس الطهاة، تعتبر الشهادات والاعتمادات الدولية أكثر من مجرد ملصقات؛ إنها ضمان للجودة والسلامة التي لا يمكن المساومة عليها في بيئة المطبخ الاحترافية. في عالمنا المعاصر، أصبحت المعايير البيئية جزءاً لا يتجزأ من هذه الشهادات، مما يعكس التزاماً مزدوجاً بسلامة الطهاة وكوكبنا.</p>
                  <footer className="text-sm text-gray-600">— ماريا روسي، مديرة معهد أبحاث المنسوجات الصناعية</footer>
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