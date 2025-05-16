import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'صيانة وإدارة ملابس العمل: استراتيجيات فعالة لإطالة العمر الافتراضي',
  description: 'دليل شامل حول طرق صيانة ملابس العمل والزي الموحد للحفاظ على جودتها وإطالة عمرها الافتراضي لضمان أفضل قيمة للاستثمار',
};

export default function WorkwearMaintenance() {
  const imageSrc = '/images/workwear/maintenance.jpeg';
  const title = 'صيانة وإدارة ملابس العمل: استراتيجيات فعالة لإطالة العمر الافتراضي';
  const readingTime = '7 دقائق للقراءة';
  const datePublished = '١٨ يونيو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'importance', title: 'أهمية الصيانة الدورية لملابس العمل' },
    { id: 'washing', title: 'طرق الغسيل والتنظيف المثالية' },
    { id: 'storage', title: 'التخزين الصحيح والعناية اليومية' },
    { id: 'repair', title: 'استراتيجيات الإصلاح والترميم' },
    { id: 'management', title: 'إدارة مخزون ملابس العمل' },
    { id: 'conclusion', title: 'الخلاصة والتوصيات' },
  ];

  const tags = ['صيانة ملابس العمل', 'الزي الموحد', 'العناية بالملابس', 'إدارة المخزون', 'جودة ملابس العمل'];

  const relatedArticles = [
    {
      title: "العناية بملابس العمل: دليل شامل للحفاظ على جودتها",
      description: "إرشادات مفصلة حول طرق العناية بملابس العمل والزي الموحد للحفاظ على مظهرها وأدائها",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/in-clothing-maintenance",
      date: "١٨ يونيو ٢٠٢٤"
    },
    {
      title: "أسس اختيار ملابس العمل الوظيفية",
      description: "دليل شامل حول أسس اختيار ملابس العمل الوظيفية المناسبة لمختلف بيئات العمل",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/workwear-2",
      date: "١٥ مايو ٢٠٢٤"
    },
    {
      title: "متطلبات الزي الموحد لعمال الصيانة",
      description: "دراسة تفصيلية عن متطلبات والمواصفات الخاصة بملابس العمل لفرق الصيانة في مختلف القطاعات",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/maintenance-worker-uniform-requirements",
      date: "١٠ يونيو ٢٠٢٤"
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
                تعتبر ملابس العمل والزي الموحد استثماراً مهماً للشركات والمؤسسات، ليس فقط لما تمثله من واجهة مرئية للمؤسسة، بل أيضاً لدورها الأساسي في توفير الحماية والراحة للموظفين. ومع ارتفاع تكاليف توفير ملابس عمل ذات جودة عالية، تصبح عملية صيانتها وإدارتها بشكل فعال أمراً ضرورياً لضمان استمرارية أدائها وإطالة عمرها الافتراضي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض استراتيجيات وممارسات فعالة لصيانة ملابس العمل وإدارة مخزونها بطريقة تضمن الحفاظ على مظهرها المهني وخصائصها الوظيفية لأطول فترة ممكنة. سنتناول مختلف جوانب العناية بملابس العمل، بدءاً من تقنيات الغسيل والتنظيف المناسبة، مروراً بطرق التخزين الصحيحة، وصولاً إلى استراتيجيات الإصلاح والترميم وأنظمة إدارة المخزون.
              </p>
            </section>

            <section id="importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية الصيانة الدورية لملابس العمل</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تتجاوز أهمية صيانة ملابس العمل مجرد الحفاظ على المظهر الجيد، لتشمل جوانب أكثر أهمية ترتبط بالسلامة والإنتاجية والجوانب الاقتصادية:
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الفوائد الرئيسية للصيانة الفعالة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>تحسين السلامة:</strong> الحفاظ على خصائص الحماية في ملابس العمل، مثل مقاومة الحريق أو المواد الكيميائية أو الحماية من الصدمات الكهربائية.
                  </li>
                  <li>
                    <strong>إطالة العمر الافتراضي:</strong> زيادة فترة استخدام الملابس مما يقلل من تكرار الشراء ويخفض التكاليف الإجمالية.
                  </li>
                  <li>
                    <strong>تعزيز الصورة المهنية:</strong> الحفاظ على مظهر أنيق ومهني للموظفين يعكس احترافية المؤسسة.
                  </li>
                  <li>
                    <strong>تحسين الراحة والإنتاجية:</strong> ملابس العمل النظيفة والمصانة جيداً توفر راحة أكبر للموظفين وتساهم في تحسين أدائهم.
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="فوائد صيانة ملابس العمل"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  الصيانة المنتظمة تضمن الحفاظ على الخصائص الوظيفية والمظهر المهني لملابس العمل
                </div>
              </div>
            </section>

            <section id="washing" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">طرق الغسيل والتنظيف المثالية</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعتبر الغسيل والتنظيف المناسب من أهم عوامل إطالة عمر ملابس العمل والحفاظ على خصائصها. تختلف طرق الغسيل باختلاف نوع القماش وطبيعة الأوساخ والتلوثات:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">ملابس العمل القطنية</h3>
                  <p className="text-gray-700">
                    غسيل بماء دافئ (30-40 درجة) مع منظف خفيف، تجنب المبيضات الكلورية، استخدام دورة عصر معتدلة، تجفيف في الهواء الطلق أو بمجفف على درجة حرارة منخفضة.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">ملابس البوليستر والمخلوطة</h3>
                  <p className="text-gray-700">
                    غسيل بماء بارد أو فاتر، استخدام منظف معتدل، تجنب المنعمات الزائدة التي قد تؤثر على خصائص الأقمشة التقنية، التجفيف على درجة حرارة منخفضة.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">التعامل مع الملوثات الصناعية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>
                      <strong>بقع الزيوت والشحوم:</strong> معالجة أولية بمزيل البقع الدهنية أو صابون الأطباق قبل الغسيل العادي.
                    </li>
                    <li>
                      <strong>بقع الطلاء:</strong> استخدام مزيل مناسب حسب نوع الطلاء (ماء أو زيت) فور حدوث البقعة.
                    </li>
                    <li>
                      <strong>المواد الكيميائية:</strong> شطف فوري بالماء الجاري، ثم غسيل منفصل باستخدام منظف خاص.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="storage" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التخزين الصحيح والعناية اليومية</h2>
              <p className="mb-4 leading-7 text-gray-700">
                طريقة تخزين ملابس العمل بين فترات الاستخدام تؤثر بشكل كبير على عمرها الافتراضي ومظهرها:
              </p>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">أساسيات التخزين السليم</h3>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>التجفيف الكامل:</strong> التأكد من جفاف الملابس تماماً قبل تخزينها لمنع تكون العفن والروائح.
                  </li>
                  <li>
                    <strong>الشماعات المناسبة:</strong> استخدام شماعات قوية للبدلات والسترات، وشماعات خاصة للبنطلونات.
                  </li>
                  <li>
                    <strong>التهوية المناسبة:</strong> توفير مساحة كافية بين القطع لضمان تدفق الهواء.
                  </li>
                  <li>
                    <strong>الحماية من الغبار:</strong> استخدام أغطية قماشية (تسمح بمرور الهواء) لحماية الملابس المخزنة لفترات طويلة.
                  </li>
                </ol>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="التخزين السليم لملابس العمل"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  أنظمة تخزين متطورة لملابس العمل في المؤسسات الكبيرة
                </div>
              </div>
            </section>

            <section id="repair" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">استراتيجيات الإصلاح والترميم</h2>
              <p className="mb-4 leading-7 text-gray-700">
                التدخل السريع لإصلاح التلف البسيط يمكن أن يطيل عمر ملابس العمل بشكل كبير:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الإصلاحات الشائعة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>إصلاح التمزقات الصغيرة بالخياطة أو الرقع المناسبة</li>
                    <li>استبدال الأزرار المفقودة وإصلاح السحابات المعطلة</li>
                    <li>تقوية مناطق الخياطة المجهدة (الإبط، الركبتين)</li>
                    <li>معالجة تنسل الأطراف بالتشطيب المناسب</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">متى يجب الاستبدال</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تلف خصائص الحماية الأساسية مثل مقاومة اللهب</li>
                    <li>تآكل القماش بشكل واضح يصعب إصلاحه</li>
                    <li>تغير اللون بشكل كبير يؤثر على المظهر المهني</li>
                    <li>فقدان المرونة والراحة بعد غسلات متعددة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mb-6 border-r-4 border-gray-400">
                <blockquote className="italic text-gray-700">
                  وجدنا أن إنشاء ورشة صيانة صغيرة داخل الشركة أدى إلى تقليل تكاليف استبدال ملابس العمل بنسبة 35% خلال العام الأول. الاستثمار في الصيانة الوقائية يحقق عائداً واضحاً ومباشراً.
                  <footer className="text-sm mt-2 text-gray-600">- م. سعد الغامدي، مدير الخدمات المساندة بشركة صناعية كبرى</footer>
                </blockquote>
              </div>
            </section>

            <section id="management" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">إدارة مخزون ملابس العمل</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تطبيق نظام فعال لإدارة مخزون ملابس العمل يضمن توفر القطع المناسبة عند الحاجة إليها ويساعد في ضبط التكاليف:
              </p>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">عناصر نظام إدارة المخزون الفعال</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>التتبع والتسجيل:</strong> استخدام نظام محوسب أو تطبيق لتسجيل توزيع الملابس وتتبع دورة حياتها.
                  </li>
                  <li>
                    <strong>تحديد المستويات المثلى للمخزون:</strong> تحديد الحد الأدنى للمخزون لكل نوع ومقاس لضمان الطلب في الوقت المناسب.
                  </li>
                  <li>
                    <strong>جدولة الاستبدال:</strong> وضع جدول زمني لاستبدال القطع بناءً على متوسط العمر الافتراضي وظروف الاستخدام.
                  </li>
                  <li>
                    <strong>معايير التقييم والفحص:</strong> وضع إجراءات واضحة لفحص حالة الملابس وتقييم الحاجة للإصلاح أو الاستبدال.
                  </li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة والتوصيات</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر صيانة ملابس العمل وإدارتها بشكل فعال جزءاً أساسياً من استراتيجية إدارة الموارد في أي مؤسسة. الاستثمار في برامج الصيانة والإدارة الجيدة يحقق وفورات مالية واضحة، ويحسن من مستوى السلامة والمظهر المهني للموظفين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                نوصي المؤسسات بتطوير سياسات واضحة للصيانة والعناية بملابس العمل، وتدريب الموظفين على أفضل الممارسات للعناية اليومية، وتطبيق أنظمة فعالة لإدارة المخزون. كما نوصي بالاستفادة من التقنيات الحديثة مثل أنظمة التتبع الرقمية والباركود لتحسين كفاءة إدارة مخزون ملابس العمل.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في النهاية، فإن النهج المتكامل الذي يجمع بين الصيانة الجيدة والإدارة الفعالة للمخزون سيضمن تحقيق أقصى قيمة من الاستثمار في ملابس العمل، وسيعزز من صورة المؤسسة وسلامة موظفيها.
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