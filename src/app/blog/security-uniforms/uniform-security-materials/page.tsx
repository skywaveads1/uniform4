import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'مواد تصنيع زي رجال الأمن: المتانة والأداء',
  description: 'تحليل شامل لمواد تصنيع الزي الموحد لرجال الأمن ومميزاتها، مع التركيز على معايير المتانة والراحة والأداء العملي في مختلف الظروف.',
};

export default function UniformSecurityMaterials() {
  const imageSrc = '/images/security_uniforms/professional_security_uniforms.jpeg';
  const title = 'مواد تصنيع زي رجال الأمن: المتانة والأداء';
  const readingTime = '٦ دقائق للقراءة';
  const datePublished = '٥ يونيو ٢٠٢٤';

  const relatedArticles = [
    {
      title: "أهمية الزي الموحد في قطاع الأمن والحراسة",
      description: "دراسة تفصيلية عن دور وتأثير الزي الموحد في قطاع الأمن والحراسة",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security-uniforms/importance-uniform-on-security",
      date: "٢٠ يونيو ٢٠٢٤",
      category: "زي الأمن"
    },
    {
      title: "مواصفات الزي الأمني المعتمد عالمياً",
      description: "دليل مفصل لمواصفات الزي الأمني المعتمدة عالمياً ومعايير اختياره",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/security-uniforms/security-uniform-specifications",
      date: "١٢ يونيو ٢٠٢٤",
      category: "زي الأمن"
    },
    {
      title: "الزي الموحد لفرق الخدمات الوقائية: معايير الجودة والسلامة",
      description: "استعراض شامل لمعايير الجودة والسلامة في الزي الموحد لفرق الخدمات الوقائية",
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      url: "/blog/protective-services/protective-1",
      date: "١٥ يونيو ٢٠٢٤",
      category: "الخدمات الوقائية"
    }
  ];

  const tags = ["مواد زي الأمن", "أقمشة الزي الأمني", "متانة الزي الموحد", "أداء الملابس الأمنية", "تقنيات الأقمشة", "خامات الزي الموحد"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'durability-criteria', title: 'معايير المتانة والتحمل' },
    { id: 'fabric-types', title: 'أنواع الأقمشة المستخدمة' },
    { id: 'advanced-materials', title: 'المواد المتطورة والتقنيات الحديثة' },
    { id: 'climate-adaptation', title: 'التكيف مع الظروف المناخية' },
    { id: 'comfort-performance', title: 'الموازنة بين الراحة والأداء' },
    { id: 'maintenance', title: 'صيانة وإطالة عمر الزي الأمني' },
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
                يواجه رجال الأمن تحديات فريدة في عملهم اليومي تتطلب زياً موحداً مصمماً بمواد خاصة تجمع بين المتانة والراحة والأداء العملي. فبخلاف الملابس العادية، يتعرض الزي الأمني لظروف قاسية ومتنوعة تتطلب خصائص استثنائية لضمان الأداء الأمثل والحماية اللازمة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض المواد المستخدمة في تصنيع زي رجال الأمن، ونحلل خصائصها ومميزاتها من حيث المتانة والتحمل والراحة. كما نناقش التقنيات الحديثة التي أحدثت ثورة في مجال أقمشة الزي الأمني، وكيفية موازنة المتطلبات المختلفة لتحقيق أفضل أداء في مختلف الظروف.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                سواء كنت مديراً لشركة أمنية تبحث عن أفضل خيارات الزي الموحد لفريقك، أو متخصصاً في المشتريات، أو رجل أمن مهتماً بفهم خصائص الملابس المهنية، سيقدم لك هذا المقال معلومات قيمة حول المواد والتقنيات التي تضمن متانة وأداء متميزين للزي الأمني.
          </p>
        </section>

            <section id="durability-criteria" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير المتانة والتحمل</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المتطلبات الأساسية لمتانة الزي الأمني</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">مقاومة التمزق والاهتراء:</span> قدرة القماش على تحمل قوى الشد والاحتكاك المتكرر دون أن يتمزق، خاصة عند المفاصل وفي مناطق الحركة المتكررة.</li>
                  <li><span className="font-medium">ثبات الأبعاد:</span> احتفاظ القماش بشكله وحجمه الأصلي بعد الغسيل المتكرر والاستخدام المكثف، مع مقاومة للانكماش والتمدد.</li>
                  <li><span className="font-medium">قوة الغرز والخياطة:</span> تقنيات خياطة متطورة تضمن قوة التثبيت عند التعرض للإجهاد والشد، مع تركيز خاص على مناطق الضغط (الأكتاف، تحت الإبط، المرفقين).</li>
                  <li><span className="font-medium">مقاومة البقع والأوساخ:</span> خصائص طاردة للسوائل والبقع تسهل تنظيف الزي والحفاظ على مظهره الاحترافي لفترات طويلة.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="اختبارات متانة أقمشة الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  اختبار متانة أقمشة الزي الأمني باستخدام تقنيات قياس مقاومة التمزق والاحتكاك
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">التحدي الأكبر في تصميم زي رجال الأمن هو تحقيق التوازن بين المتانة القصوى والراحة المثلى. فالزي لا يحتاج فقط إلى تحمل ظروف العمل القاسية، بل يجب أن يكون مريحاً بما يكفي للارتداء لساعات طويلة دون التسبب في إجهاد أو إعاقة للحركة.</p>
                  <footer className="text-sm text-gray-600">— د. عبدالله المطيري، خبير المنسوجات الفنية</footer>
                </blockquote>
              </div>
        </section>

            <section id="fabric-types" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أنواع الأقمشة المستخدمة</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تتنوع الأقمشة المستخدمة في تصنيع الزي الأمني لتلبي مختلف الاحتياجات الوظيفية وظروف العمل:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">البوليستر والخلطات</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>خلطة بوليستر/قطن (65/35) للتوازن بين المتانة والراحة</li>
                    <li>ميكروفايبر عالي الكثافة للبدلات الرسمية</li>
                    <li>تويل البوليستر المعالج لمقاومة التجعد والماء</li>
                    <li>ريبستوب البوليستر للمتانة العالية ومقاومة التمزق</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">القطن والألياف الطبيعية</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>قطن مصري عالي العد للقمصان والأزياء الرسمية</li>
                    <li>قطن قتالي (Battle Cotton) معالج لتحسين الأداء</li>
                    <li>ألياف القنب والخلطات للتنفس والخصائص المضادة للبكتيريا</li>
                    <li>الصوف الاستوائي خفيف الوزن للبدلات الرسمية</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="أنواع أقمشة الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  مجموعة متنوعة من الأقمشة المستخدمة في تصنيع الزي الأمني للاحتياجات المختلفة
                </div>
              </div>
        </section>

            <section id="advanced-materials" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المواد المتطورة والتقنيات الحديثة</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تقنيات الأقمشة المتقدمة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">أقمشة Cordura®:</span> مواد فائقة المتانة مقاومة للتآكل والاهتراء بنسبة تصل إلى 3 مرات أكثر من النايلون العادي، تستخدم في المناطق المعرضة للاحتكاك الشديد.</li>
                    <li><span className="font-medium">تقنية Ripstop:</span> نسيج خاص يتضمن ألياف تقوية مدمجة على مسافات منتظمة لمنع انتشار التمزقات، تستخدم في السراويل والسترات التكتيكية.</li>
                    <li><span className="font-medium">أقمشة 4-Way Stretch:</span> مواد عالية المرونة تتمدد في جميع الاتجاهات مع استعادة شكلها الأصلي، مثالية للمهام التي تتطلب حركة شديدة.</li>
                    <li><span className="font-medium">تقنية DWR (Durable Water Repellent):</span> معالجات متقدمة تجعل الأقمشة طاردة للماء مع الحفاظ على خاصية التنفس.</li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="التقنيات المتطورة في أقمشة الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  عرض تفصيلي للأقمشة التقنية المتطورة المستخدمة في الزي الأمني الحديث
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">شهدنا تطوراً هائلاً في تقنيات المنسوجات المستخدمة في الزي الأمني خلال السنوات الأخيرة. الأقمشة التي كانت تعتبر متطورة في الاستخدامات العسكرية أصبحت الآن متاحة للاستخدام المدني والأمني، مما أحدث نقلة نوعية في جودة وأداء الزي الموحد لرجال الأمن.</p>
                  <footer className="text-sm text-gray-600">— م. سلطان العنزي، مدير تطوير المنتجات بمصنع الأزياء الموحدة</footer>
                </blockquote>
              </div>
        </section>

            <section id="climate-adaptation" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التكيف مع الظروف المناخية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مواد للمناخ الحار</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>أقمشة Coolmax® لسحب العرق وتسريع التبخر</li>
                      <li>نسيج شبكي (Mesh) استراتيجي للتهوية</li>
                      <li>خلطات مقاومة للأشعة فوق البنفسجية للعمل الخارجي</li>
                      <li>تقنية Wicking لإدارة الرطوبة ومنع تراكم الحرارة</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مواد للمناخ البارد</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>بطانات حرارية خفيفة الوزن مثل Thinsulate™</li>
                      <li>أقمشة محبوكة على طبقات للعزل الحراري</li>
                      <li>أغشية مقاومة للريح مع الحفاظ على التنفس</li>
                      <li>تقنية الطبقات المتعددة للتكيف مع التغيرات الحرارية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="الزي الأمني المتكيف مع الظروف المناخية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  زي أمني مصمم للتكيف مع الظروف المناخية المختلفة من الحرارة الشديدة إلى البرودة
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تقنيات الضبط والتكيف</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">الأقمشة الذكية:</span> مواد تتفاعل مع درجات الحرارة المحيطة، تفتح مسامها عند ارتفاع الحرارة وتغلقها عند انخفاضها.</li>
                  <li><span className="font-medium">تقنية PCM (Phase Change Materials):</span> مواد تمتص الحرارة الزائدة أو تطلقها حسب الحاجة للحفاظ على درجة حرارة مريحة للجسم.</li>
                  <li><span className="font-medium">تصميمات قابلة للتعديل:</span> ميزات مثل فتحات التهوية بسحابات، الأكمام القابلة للفصل، والطبقات المتعددة القابلة للإضافة أو الإزالة.</li>
                  <li><span className="font-medium">تقنية 37.5®:</span> ألياف تحتوي على جزيئات نشطة تعمل على الحفاظ على درجة حرارة الجلد المثالية (37.5 درجة مئوية) ومستوى الرطوبة المثالي (37.5%).</li>
                </ul>
              </div>
        </section>

            <section id="comfort-performance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الموازنة بين الراحة والأداء</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">عناصر الراحة الرئيسية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">الوزن الخفيف:</span> استخدام مواد متطورة توفر المتانة المطلوبة مع الحفاظ على خفة الوزن لتقليل الإجهاد خلال النوبات الطويلة.</li>
                  <li><span className="font-medium">المرونة والتمدد:</span> تضمين نسب من الإيلاستين أو السباندكس في الأقمشة لتوفير المرونة والسماح بحرية الحركة.</li>
                  <li><span className="font-medium">القصات الهندسية:</span> تصميمات مدروسة تتبع حركة الجسم الطبيعية وتقلل الاحتكاك والضغط على المفاصل.</li>
                  <li><span className="font-medium">إدارة الرطوبة:</span> خصائص امتصاص وتبخير العرق للحفاظ على جفاف الجسم وتجنب الشعور بالبلل وعدم الراحة.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="توازن الراحة والأداء في الزي الأمني"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تصميم الزي الأمني المتوازن يجمع بين حرية الحركة والمتانة العالية
                </div>
              </div>
        </section>

            <section id="maintenance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">صيانة وإطالة عمر الزي الأمني</h2>
              
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="bg-blue-700 text-white p-3">
                  <h3 className="text-xl font-medium">خصائص سهولة العناية</h3>
                </div>
                <div className="p-4 border border-blue-300 bg-white">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">مقاومة التجعد:</span> معالجات خاصة تجعل الأقمشة أقل عرضة للتجعد حتى بعد الغسيل، مما يقلل الحاجة إلى الكي المتكرر.</li>
                    <li><span className="font-medium">سهولة التنظيف:</span> تقنيات طرد البقع والسوائل تسهل إزالة الاتساخات وتقلل الحاجة للغسيل بمواد قاسية.</li>
                    <li><span className="font-medium">ثبات الألوان:</span> أصباغ عالية الجودة تقاوم البهتان والتلاشي حتى بعد غسيل متكرر وتعرض مستمر للشمس.</li>
                    <li><span className="font-medium">قابلية الغسل بالماكينة:</span> مواد تتحمل الغسيل الآلي المتكرر دون فقدان خصائصها أو شكلها.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">نصائح للعناية بالزي الأمني</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">اتباع تعليمات الغسيل:</span> الالتزام بالتعليمات المحددة لكل نوع من الأقمشة، خاصة فيما يتعلق بدرجة الحرارة ونوع المنظفات.</li>
                  <li><span className="font-medium">التخزين السليم:</span> تعليق القطع بشكل صحيح لتجنب التجعد، واستخدام أغطية لحماية القطع قليلة الاستخدام من الغبار.</li>
                  <li><span className="font-medium">الإصلاح الفوري:</span> معالجة التمزقات والثقوب الصغيرة فور حدوثها لمنع اتساعها وتفاقم الضرر.</li>
                  <li><span className="font-medium">تنظيف الأماكن المعرضة للاتساخ:</span> تركيز العناية على الياقات والأكمام والجيوب التي تتعرض للاتساخ بشكل أكبر.</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/protective_services/security_guard_uniforms.jpeg"
                  alt="صيانة الزي الأمني وإطالة عمره"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  طرق صحيحة للعناية بالزي الأمني وإطالة عمره الافتراضي
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">الاستثمار في زي أمني عالي الجودة لا يكتمل إلا بالعناية المناسبة. وجدنا أن الشركات التي تطبق برامج منتظمة للعناية والصيانة تحقق وفوراً تصل إلى 40% في ميزانية الملابس السنوية، مع الحفاظ على المظهر الاحترافي لفرق الأمن لديها.</p>
                  <footer className="text-sm text-gray-600">— نورة القحطاني، مستشارة إدارة الموارد في قطاع الأمن</footer>
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