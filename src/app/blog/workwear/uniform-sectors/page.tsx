import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الزي الموحد في القطاعات المختلفة: خصائصه ومميزاته ومتطلباته',
  description: 'دليل شامل حول خصائص ومميزات ومتطلبات الزي الموحد في مختلف القطاعات المهنية والصناعية والخدمية',
};

export default function UniformSectors() {
  const imageSrc = '/images/workwear/uniform_sectors.jpeg';
  const title = 'الزي الموحد في القطاعات المختلفة: خصائصه ومميزاته ومتطلباته';
  const readingTime = '9 دقائق للقراءة';
  const datePublished = '١١ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'healthcare', title: 'الزي الموحد في القطاع الصحي' },
    { id: 'hospitality', title: 'الزي الموحد في قطاع الضيافة' },
    { id: 'industrial', title: 'الزي الموحد في القطاع الصناعي' },
    { id: 'corporate', title: 'الزي الموحد في القطاع المؤسسي' },
    { id: 'benefits', title: 'فوائد الزي الموحد المخصص للقطاعات' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const tags = ["الزي الموحد", "الملابس المهنية", "قطاعات الأعمال", "الهوية المؤسسية", "المعايير المهنية"];

  const relatedArticles = [
    {
      title: "ملابس العمل: أنواعها ومواصفاتها وأهميتها",
      description: "دليل شامل حول أنواع ملابس العمل المختلفة ومواصفاتها وفوائدها في تحسين بيئة العمل",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/clothing",
      date: "٨ مايو ٢٠٢٤"
    },
    {
      title: "كيفية اختيار ملابس العمل المناسبة",
      description: "دليل شامل لاختيار ملابس العمل المناسبة للمهن المختلفة مع مراعاة عوامل السلامة والراحة",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/how-to-choosing",
      date: "١٠ مايو ٢٠٢٤"
    },
    {
      title: "الزي الموحد للشركات: استثمار استراتيجي للمؤسسات الناجحة",
      description: "تحليل استراتيجي لأهمية الزي الموحد في تعزيز نجاح المؤسسات وتحقيق أهدافها التسويقية والتشغيلية",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/corporate-uniform",
      date: "١٣ مايو ٢٠٢٤"
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
                يمثل الزي الموحد عنصراً أساسياً في العديد من القطاعات المهنية، فهو ليس مجرد ملابس بل يعكس هوية المؤسسة وثقافتها ويؤثر على كفاءة الموظفين والانطباع الذي يتركونه لدى العملاء. تختلف متطلبات الزي الموحد باختلاف طبيعة عمل كل قطاع، حيث تتنوع من حيث التصميم والوظيفة والمواد المستخدمة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، سنستعرض خصائص ومميزات ومتطلبات الزي الموحد في أربعة قطاعات رئيسية: الصحي، الضيافة، الصناعي، والمؤسسي. سنسلط الضوء على كيفية تلبية الزي الموحد لاحتياجات كل قطاع، والفوائد التي يقدمها للمؤسسات والموظفين والعملاء.
              </p>
            </section>

            <section id="healthcare" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الزي الموحد في القطاع الصحي</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يتميز القطاع الصحي بمتطلبات خاصة للزي الموحد نظراً لطبيعة العمل التي تتضمن التعامل مع المرضى والبيئات المعقمة:
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الخصائص الرئيسية للزي الطبي</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>النظافة والتعقيم:</strong> سهولة التنظيف والتعقيم لمنع انتشار العدوى، مع استخدام أقمشة مقاومة للبقع والسوائل
                  </li>
                  <li>
                    <strong>التمييز الوظيفي:</strong> استخدام ألوان مختلفة لتمييز التخصصات والأقسام المختلفة (الأطباء، التمريض، الفنيين)
                  </li>
                  <li>
                    <strong>الراحة والعملية:</strong> تصميمات مريحة تسمح بحرية الحركة خلال ساعات العمل الطويلة، مع وجوب جيوب عملية لحمل الأدوات
                  </li>
                  <li>
                    <strong>المهنية:</strong> مظهر احترافي يبعث الثقة لدى المرضى ويعزز صورة المؤسسة الصحية
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="الزي الموحد في القطاع الصحي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  الزي الطبي الموحد يجمع بين الوظيفة والمظهر المهني مع التركيز على منع انتشار العدوى
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                يشمل الزي الطبي النموذجي البدلة الطبية (سكرابس) للعاملين في الأقسام السريرية، والمعاطف البيضاء للأطباء، وأزياء متخصصة للعاملين في غرف العمليات وأقسام العناية المركزة. وتضمن المواد المستخدمة في صناعة هذه الأزياء الراحة والمتانة مع إمكانية تحمل التعقيم المتكرر.
              </p>
            </section>

            <section id="hospitality" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الزي الموحد في قطاع الضيافة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعتبر الزي الموحد في قطاع الضيافة (الفنادق والمطاعم والمنتجعات) أداة تسويقية مهمة تعكس مستوى الخدمة وأسلوب المؤسسة:
              </p>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">مميزات زي الضيافة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>الأناقة والتميز:</strong> تصاميم أنيقة تعكس مستوى المنشأة وفخامتها، مع اهتمام خاص بالتفاصيل والتشطيبات
                  </li>
                  <li>
                    <strong>الهوية البصرية:</strong> استخدام ألوان وعناصر تصميم تتوافق مع الهوية البصرية للعلامة التجارية
                  </li>
                  <li>
                    <strong>التنوع الوظيفي:</strong> تصاميم مختلفة حسب الوظيفة (الاستقبال، الخدمة، الطهي، الإدارة)
                  </li>
                  <li>
                    <strong>المقاومة للاتساخ:</strong> أقمشة عملية تتحمل الاستخدام المكثف وتقاوم البقع، خاصة لموظفي خدمة الطعام
                  </li>
                </ul>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                يعتمد تصميم الزي في قطاع الضيافة على نوع المنشأة ومستواها، فالفنادق الفاخمة تميل للأزياء الرسمية الأنيقة، بينما قد تختار المطاعم العائلية أزياء أكثر بساطة وعملية. ويتضمن زي الطهاة عادة سترات بيضاء مزدوجة الصدر وقبعات مميزة، مع التركيز على مقاومة الحرارة والسوائل.
              </p>
            </section>

            <div className="bg-gray-50 p-5 rounded-lg mb-10 border-r-4 border-gray-400">
              <blockquote className="italic text-gray-700">
                الزي الموحد المصمم بعناية لكل قطاع لا يعكس فقط احترافية المؤسسة، بل يساهم أيضاً في تعزيز الانتماء المؤسسي وتحسين تجربة العميل وكفاءة العمليات.
                <footer className="text-sm mt-2 text-gray-600">- د. محمد العمري، استشاري إدارة الموارد البشرية</footer>
              </blockquote>
            </div>

            <section id="industrial" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الزي الموحد في القطاع الصناعي</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يركز الزي الموحد في القطاع الصناعي بشكل أساسي على السلامة والحماية، مع مراعاة الكفاءة في أداء المهام الصناعية:
              </p>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">متطلبات الزي الصناعي</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>معايير السلامة:</strong> الالتزام بمعايير السلامة المهنية العالمية مثل ISO و ANSI، مع توفير حماية مناسبة للمخاطر المحددة
                  </li>
                  <li>
                    <strong>المتانة والمقاومة:</strong> مقاومة للتمزق والاهتراء والمواد الكيميائية والحرارة والشرر حسب طبيعة العمل
                  </li>
                  <li>
                    <strong>الوضوح والتمييز:</strong> استخدام شرائط عاكسة وألوان عالية الوضوح في بيئات العمل منخفضة الإضاءة
                  </li>
                  <li>
                    <strong>العملية:</strong> جيوب متعددة وتصميمات وظيفية تسهل حمل الأدوات والمعدات
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="الزي الموحد في القطاع الصناعي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  ملابس العمل الصناعية توفر الحماية والسلامة مع ميزات عملية تناسب بيئة العمل الصناعي
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                تختلف أزياء القطاع الصناعي حسب المجال، فشركات النفط والغاز تتطلب ملابس مقاومة للحريق، بينما تحتاج مصانع المعالجة الكيميائية لأزياء مقاومة للمواد الكيميائية. وتشمل الأزياء الصناعية النموذجية بدلات العمل الكاملة (أوفرول)، وسترات وسراويل متينة، وسترات عاكسة للضوء، بالإضافة لمعدات الحماية الشخصية المكملة.
              </p>
            </section>

            <section id="corporate" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الزي الموحد في القطاع المؤسسي</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يركز الزي المؤسسي (للبنوك وشركات التأمين والمكاتب) على تعزيز الهوية المؤسسية والمظهر الاحترافي:
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">خصائص الزي المؤسسي</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>الاحترافية:</strong> تصاميم أنيقة تعكس الطابع الرسمي والمهني، مع التركيز على البساطة والأناقة
                  </li>
                  <li>
                    <strong>التمثيل البصري للعلامة التجارية:</strong> استخدام ألوان وشعارات الشركة بطريقة متناسقة ومدروسة
                  </li>
                  <li>
                    <strong>التدرج الوظيفي:</strong> تمييز المستويات الإدارية المختلفة من خلال تفاصيل معينة في الزي
                  </li>
                  <li>
                    <strong>الراحة مع الأناقة:</strong> اختيار أقمشة مريحة تسمح بالعمل لساعات طويلة مع الحفاظ على المظهر الأنيق
                  </li>
                </ul>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
                يتراوح الزي المؤسسي من البدلات الرسمية الكاملة إلى أزياء شبه رسمية تتضمن قمصان وبناطيل بألوان محددة، مع إضافات مثل الأوشحة أو ربطات العنق أو الدبابيس التي تحمل شعار الشركة. ويتيح هذا النوع من الزي مرونة أكبر مع الحفاظ على التناسق في المظهر العام.
              </p>
            </section>

            <section id="benefits" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">فوائد الزي الموحد المخصص للقطاعات</h2>
              <p className="mb-4 leading-7 text-gray-700">
                توفر الأزياء الموحدة المصممة خصيصاً لكل قطاع مجموعة من الفوائد للمؤسسات والموظفين والعملاء:
              </p>

              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <ul className="list-disc list-inside space-y-4 mr-5 text-gray-700">
                  <li>
                    <strong>زيادة الإنتاجية والكفاءة:</strong> تصميم ملابس مناسبة لطبيعة العمل يسهل أداء المهام ويحسن الكفاءة، مع تقليل الوقت الضائع نتيجة الملابس غير المناسبة أو الإصابات المهنية.
                  </li>
                  <li>
                    <strong>تعزيز الانتماء والعمل الجماعي:</strong> يساهم الزي الموحد في خلق شعور بالانتماء للفريق والمؤسسة، ويقلل الفوارق الاجتماعية بين الموظفين.
                  </li>
                  <li>
                    <strong>تحسين تجربة العميل:</strong> سهولة التعرف على الموظفين وتمييز أدوارهم يسهل على العملاء الحصول على المساعدة، ويعزز الثقة في المؤسسة ومستوى خدماتها.
                  </li>
                  <li>
                    <strong>تعزيز الصورة الذهنية للعلامة التجارية:</strong> يمثل الزي الموحد عنصراً مرئياً قوياً يعزز التعرف على العلامة التجارية ويساهم في بناء صورة ذهنية إيجابية عنها.
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/workwear/workwear_maintenance.jpeg"
                  alt="فوائد الزي الموحد المخصص"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  الزي الموحد المصمم بعناية يعزز الهوية المؤسسية ويحسن تجربة العميل والموظف
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعتبر الزي الموحد المخصص لكل قطاع استثماراً استراتيجياً يتجاوز مجرد توفير ملابس للموظفين. فمن خلال مراعاة المتطلبات الخاصة لكل قطاع، سواء كانت متعلقة بالسلامة أو الوظيفة أو الهوية البصرية، يمكن للمؤسسات الاستفادة من الزي الموحد كأداة لتحسين الكفاءة وتعزيز الهوية وتحسين تجربة العملاء.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                يتطلب اختيار الزي الموحد المناسب فهماً عميقاً لطبيعة العمل في كل قطاع، مع مراعاة التوازن بين الجوانب الوظيفية والجمالية والاقتصادية. ومع التطور المستمر في تقنيات المنسوجات وتصميم الأزياء، أصبح بإمكان المؤسسات الاستفادة من خيارات متنوعة تلبي احتياجاتها الخاصة وتساهم في تميزها في سوق تنافسي.
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