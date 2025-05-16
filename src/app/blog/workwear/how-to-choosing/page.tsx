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
  title: 'كيفية اختيار ملابس العمل المناسبة للقطاعات المختلفة',
  description: 'دليل شامل حول معايير وخطوات اختيار ملابس العمل المناسبة لمختلف القطاعات المهنية مع مراعاة عوامل السلامة والراحة والمظهر المهني',
};

export default function HowToChoosingWorkwear() {
  const imageSrc = '/images/workwear/corporate_uniform.jpeg';
  const title = 'كيفية اختيار ملابس العمل المناسبة للقطاعات المختلفة';
  const readingTime = '٩ دقائق للقراءة';
  const datePublished = '١٠ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'assessment', title: 'تقييم احتياجات ملابس العمل' },
    { id: 'criteria', title: 'معايير اختيار ملابس العمل' },
    { id: 'sectors', title: 'اختيار ملابس العمل حسب القطاع' },
    { id: 'process', title: 'خطوات عملية لاختيار ملابس العمل' },
    { id: 'conclusion', title: 'الخلاصة' },
  ];

  const tags = ["ملابس العمل", "اختيار الزي الموحد", "المعايير المهنية", "السلامة المهنية", "تصميم ملابس العمل"];

  const relatedArticles = [
    {
      title: "ملابس العمل: أنواعها ومواصفاتها وأهميتها",
      description: "دليل شامل حول أنواع ملابس العمل المختلفة ومواصفاتها وفوائدها في تحسين بيئة العمل",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/clothing",
      date: "٨ مايو ٢٠٢٤"
    },
    {
      title: "أحذية السلامة للعمال: مواصفاتها ودورها",
      description: "دليل شامل حول أنواع أحذية السلامة ومواصفاتها ودورها في حماية العمال من مخاطر بيئة العمل",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/safety-shoes-from-uniform-workers-facilities",
      date: "١٢ مايو ٢٠٢٤"
    },
    {
      title: "تأثير ملابس العمل على إنتاجية الموظفين وصورة الشركة",
      description: "تحليل علمي لتأثير ملابس العمل والزي الموحد على مستويات الإنتاجية والانتماء المؤسسي",
      image: "/images/workwear/workwear_maintenance.jpeg",
      url: "/blog/workwear/on-clothing",
      date: "١٤ مايو ٢٠٢٤"
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
          يُعد اختيار ملابس العمل المناسبة قرارًا استراتيجيًا يؤثر بشكل مباشر على سلامة الموظفين وراحتهم وإنتاجيتهم، إضافة إلى تأثيره على الصورة المهنية للمؤسسة. ومع تنوع القطاعات المهنية واختلاف متطلباتها، أصبحت عملية اختيار ملابس العمل أكثر تعقيدًا وأهمية في الوقت ذاته.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
          في هذا الدليل الشامل، سنستعرض المعايير الأساسية والخطوات العملية لاختيار ملابس العمل الأنسب لمختلف القطاعات المهنية، مع التركيز على التوازن بين السلامة والراحة والمظهر المهني والاعتبارات المالية.
              </p>
            </section>

            <section id="assessment" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تقييم احتياجات ملابس العمل</h2>
              <p className="mb-4 leading-7 text-gray-700">
          قبل البدء في عملية اختيار ملابس العمل، من الضروري إجراء تقييم شامل للاحتياجات الفعلية للمؤسسة والموظفين:
              </p>
              
              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">خطوات تقييم الاحتياجات</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>تحليل المخاطر:</strong> تحديد المخاطر المحتملة في بيئة العمل (فيزيائية، كيميائية، بيولوجية، إلخ)
                  </li>
                  <li>
                    <strong>تحديد المتطلبات القانونية:</strong> التعرف على معايير السلامة والصحة المهنية المطبقة في القطاع
                  </li>
                  <li>
                    <strong>مراعاة طبيعة العمل:</strong> دراسة المهام اليومية للموظفين ومتطلبات الحركة والراحة
                  </li>
                  <li>
                    <strong>استطلاع آراء الموظفين:</strong> أخذ ملاحظات واحتياجات الموظفين في الاعتبار
                  </li>
                  <li>
                    <strong>تحديد الهوية المؤسسية:</strong> وضع تصور لكيفية عكس ملابس العمل لقيم وهوية المؤسسة
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">نموذج تقييم المخاطر</h3>
                <p className="mb-2 text-gray-700">
            ينصح بإعداد نموذج تقييم للمخاطر المهنية يتضمن: وصف المخاطر المحتملة، درجة خطورتها، احتمالية حدوثها، متطلبات الوقاية اللازمة. على سبيل المثال:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>مخاطر ميكانيكية:</strong> سقوط أجسام ثقيلة، أدوات حادة، آلات متحركة → تتطلب أحذية سلامة، قفازات واقية، خوذات، ملابس متينة
                  </li>
                  <li>
                    <strong>مخاطر كيميائية:</strong> مواد كاوية، سوائل ضارة، أبخرة → تتطلب ملابس مقاومة للمواد الكيميائية، نظارات واقية، أقنعة
                  </li>
                  <li>
                    <strong>مخاطر حرارية:</strong> حرارة عالية، لهب مكشوف → تتطلب ملابس مقاومة للحريق، قفازات عازلة للحرارة
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
        src="/images/workwear/workwear_maintenance.jpeg"
        alt="تقييم احتياجات ملابس العمل"
                  fill
                  style={{ objectFit: 'cover' }}
      />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  التقييم الدقيق لاحتياجات ملابس العمل يضمن اختيارًا مناسبًا يوازن بين السلامة والراحة والمظهر المهني
                </div>
              </div>
            </section>

            <section id="criteria" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">معايير اختيار ملابس العمل</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تتعدد المعايير التي ينبغي مراعاتها عند اختيار ملابس العمل، ويمكن تقسيمها إلى أربعة محاور رئيسية:
              </p>

              <div className="bg-red-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-red-800">١. معايير السلامة والحماية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>معايير الجودة العالمية:</strong> اختيار ملابس العمل التي تلبي المعايير العالمية مثل ISO، EN، ANSI، وغيرها حسب القطاع
                  </li>
                  <li>
                    <strong>خصائص الحماية المطلوبة:</strong> تحديد خصائص الحماية اللازمة مثل: مقاومة الحريق، مقاومة المواد الكيميائية، عزل كهربائي، مقاومة للقطع أو التمزق
                  </li>
                  <li>
                    <strong>تصنيف مستوى الحماية:</strong> اختيار مستوى الحماية المناسب، فليست كل المهام تتطلب أعلى مستويات الحماية، والمبالغة قد تؤثر سلبًا على الراحة
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">٢. معايير الراحة والأداء</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>مناسبة الحجم والمقاس:</strong> توفير مقاسات متنوعة تناسب جميع الموظفين، مع مراعاة خصوصية الأجسام المختلفة وتوفير خيارات للرجال والنساء
                  </li>
                  <li>
                    <strong>حرية الحركة:</strong> تصميم يسمح بحرية الحركة خاصة للأعمال التي تتطلب مجهودًا بدنيًا، مع وجود خيارات مثل أكمام قابلة للضبط أو مفاصل مرنة
                  </li>
                  <li>
                    <strong>خصائص المواد:</strong> اختيار مواد تتناسب مع طبيعة العمل: خفيفة الوزن، ذات تهوية جيدة للأعمال الشاقة، أو عازلة للحرارة للعمل في بيئات باردة
                  </li>
                  <li>
                    <strong>ملاءمة الظروف المناخية:</strong> توفير ملابس مناسبة لمختلف الفصول والظروف الجوية، خاصة للعمل في الهواء الطلق
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">٣. معايير المظهر المهني والهوية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>التوافق مع الهوية البصرية:</strong> استخدام ألوان وشعارات تعكس هوية المؤسسة وتتوافق مع علامتها التجارية
                  </li>
                  <li>
                    <strong>الأناقة والمظهر المهني:</strong> اختيار تصاميم أنيقة تعكس احترافية المؤسسة مع الحفاظ على الطابع المهني المناسب للقطاع
                  </li>
                  <li>
                    <strong>التمييز بين المستويات الوظيفية:</strong> إمكانية تمييز المستويات الوظيفية المختلفة من خلال تفاصيل في التصميم مثل الألوان أو الشارات
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">٤. معايير التكلفة والاستدامة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>التوازن بين التكلفة والجودة:</strong> الموازنة بين الجودة والمتانة من جهة والتكلفة من جهة أخرى، مع الأخذ في الاعتبار دورة الحياة الكاملة للملابس
                  </li>
                  <li>
                    <strong>سهولة الصيانة:</strong> اختيار ملابس سهلة الغسيل والصيانة لتقليل تكاليف العناية وإطالة عمرها الافتراضي
                  </li>
                  <li>
                    <strong>الاعتبارات البيئية:</strong> النظر في خيارات ملابس العمل المستدامة والصديقة للبيئة، خاصة للمؤسسات التي تتبنى سياسات المسؤولية البيئية
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mb-6 border-r-4 border-gray-400">
                <blockquote className="italic text-gray-700">
        عند اختيار ملابس العمل، ضع السلامة على رأس أولوياتك، ثم ابحث عن التوازن المثالي بين الراحة والأناقة والتكلفة. تذكر أن الملابس غير المناسبة قد تكلفك أكثر على المدى الطويل من حيث الإصابات والشكاوى وانخفاض الإنتاجية.
                  <footer className="text-sm mt-2 text-gray-600">- م. سارة الجابر، خبيرة السلامة المهنية</footer>
                </blockquote>
              </div>
            </section>

            <section id="sectors" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اختيار ملابس العمل حسب القطاع</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تختلف متطلبات ملابس العمل باختلاف القطاعات المهنية. فيما يلي إرشادات لاختيار ملابس العمل المناسبة لبعض القطاعات الرئيسية:
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">القطاع الصناعي والإنشائي</h3>
                <h4 className="text-lg font-medium mb-2 text-blue-700">عناصر ملابس العمل الأساسية</h4>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700 mb-4">
                  <li>بدلات عمل متينة مصنوعة من مواد قوية مثل القطن المعالج أو خليط من القطن والبوليستر</li>
                  <li>أحذية سلامة بمقدمة معدنية ونعل مقاوم للانزلاق والثقب</li>
                  <li>خوذات سلامة لحماية الرأس وفقًا لمعايير ANSI/ISEA Z89.1 أو ما يعادلها</li>
                  <li>نظارات واقية لحماية العينين من الشظايا والغبار</li>
                  <li>قفازات واقية مناسبة لطبيعة العمل (مقاومة للقطع، عازلة للحرارة، إلخ)</li>
                </ul>
                <p className="text-gray-700">
            عند اختيار ملابس العمل للقطاع الصناعي، ينبغي التركيز على المتانة ومقاومة التآكل مع توفير جيوب وحلقات لحمل الأدوات. للأعمال التي تتضمن لحامًا أو تعاملًا مع الحرارة، يجب اختيار ملابس مقاومة للحريق وفقًا لمعايير NFPA 2112.
                </p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">القطاع الطبي والصحي</h3>
                <h4 className="text-lg font-medium mb-2 text-green-700">عناصر ملابس العمل الأساسية</h4>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700 mb-4">
                  <li>زي طبي (Scrubs) مصنوع من مواد مريحة سهلة التنظيف والتعقيم</li>
                  <li>معاطف طبية بيضاء للأطباء والصيادلة</li>
                  <li>أحذية مريحة مغلقة مقاومة للانزلاق ويمكن تنظيفها بسهولة</li>
                  <li>غطاء للرأس وكمامات وقفازات للعاملين في البيئات المعقمة</li>
                </ul>
                <p className="text-gray-700">
            يجب اختيار أقمشة عالية الجودة مقاومة للبقع وسهلة التنظيف، مع مراعاة المظهر المهني والراحة نظرًا لساعات العمل الطويلة. للعاملين في المختبرات، ينبغي توفير ملابس واقية إضافية مثل المعاطف المقاومة للسوائل والمواد الكيميائية.
                </p>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-amber-800">قطاع الضيافة والمطاعم</h3>
                <h4 className="text-lg font-medium mb-2 text-amber-700">عناصر ملابس العمل الأساسية</h4>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700 mb-4">
                  <li>زي أنيق يعكس طابع المؤسسة (رسمي للفنادق الفاخرة، كاجوال للمطاعم العائلية)</li>
                  <li>مريلة (مئزر) للطهاة وموظفي خدمة الطعام</li>
                  <li>أحذية مريحة مغلقة مقاومة للانزلاق ومانعة للماء</li>
                  <li>قبعات وشبكات للشعر للعاملين في تحضير الطعام</li>
                </ul>
                <p className="text-gray-700">
            ينبغي التركيز على اختيار أقمشة سهلة التنظيف ومقاومة للبقع والروائح، مع الحرص على الأناقة والمظهر المرتب. للطهاة، يجب اختيار ملابس مقاومة للحرارة وسترات مزدوجة الصدر تحمي من الرذاذ الساخن وتسمح بتغيير الطبقة الخارجية عند اتساخها.
                </p>
              </div>

              <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                <Image
          src="/images/workwear/workwear_maintenance.jpeg"
          alt="ملابس العمل حسب القطاعات المختلفة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                  لكل قطاع مهني متطلباته الخاصة من ملابس العمل التي تراعي طبيعة المهام والمخاطر المحتملة
                </div>
              </div>
            </section>

            <section id="process" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">خطوات عملية لاختيار ملابس العمل</h2>
              <p className="mb-4 leading-7 text-gray-700">
          بعد فهم المعايير الأساسية ومتطلبات القطاع، يمكن اتباع الخطوات العملية التالية لاختيار ملابس العمل المناسبة:
              </p>

              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <ul className="list-disc list-inside space-y-4 mr-5 text-gray-700">
                  <li>
                    <strong>١. تشكيل فريق اختيار:</strong> إشراك ممثلين من مختلف الأقسام: الموارد البشرية، السلامة المهنية، مسؤولي التشغيل، وممثلين عن الموظفين الذين سيرتدون ملابس العمل.
                  </li>
                  <li>
                    <strong>٢. إعداد موازنة واقعية:</strong> تحديد ميزانية واقعية تأخذ في الاعتبار الجودة والكمية المطلوبة ودورة الاستبدال. تذكر أن الجودة العالية قد تكون أكثر اقتصادية على المدى الطويل.
                  </li>
                  <li>
                    <strong>٣. البحث عن موردين موثوقين:</strong> البحث عن موردين ذوي سمعة جيدة يقدمون منتجات عالية الجودة ويلتزمون بالمعايير العالمية. طلب عينات وشهادات المطابقة والجودة.
                  </li>
                  <li>
                    <strong>٤. اختبار وتقييم العينات:</strong> اختبار العينات في ظروف العمل الفعلية وجمع آراء الموظفين حولها من حيث الراحة والملاءمة والمتانة.
                  </li>
                  <li>
                    <strong>٥. وضع برنامج للصيانة والاستبدال:</strong> تطوير نظام لصيانة ملابس العمل وجدول زمني للاستبدال المنتظم، مع توفير التدريب للموظفين حول كيفية العناية بملابس العمل.
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">نصائح إضافية</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>
                    <strong>التجربة المباشرة:</strong> السماح للموظفين بتجربة الملابس قبل شراء كميات كبيرة
                  </li>
                  <li>
                    <strong>خيارات التخصيص:</strong> البحث عن إمكانيات تخصيص ملابس العمل لتتناسب مع متطلبات محددة
                  </li>
                  <li>
                    <strong>مراجعة دورية:</strong> تقييم مدى ملاءمة ملابس العمل بشكل دوري وإجراء التحسينات اللازمة
                  </li>
                  <li>
                    <strong>التوعية والتدريب:</strong> تثقيف الموظفين حول أهمية ملابس العمل المناسبة وكيفية استخدامها بشكل صحيح
                  </li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يتطلب اختيار ملابس العمل المناسبة نهجًا منهجيًا يراعي جوانب السلامة والراحة والمظهر المهني والاعتبارات المالية. من خلال إجراء تقييم دقيق للاحتياجات وفهم متطلبات القطاع المهني واتباع خطوات عملية للاختيار، يمكن للمؤسسات توفير ملابس عمل تحقق التوازن المثالي بين حماية الموظفين وتعزيز صورة المؤسسة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                لا تنسَ أن ملابس العمل ليست مجرد قطع قماش، بل هي استثمار استراتيجي في سلامة وراحة وإنتاجية الموظفين، وفي الهوية المؤسسية للشركة. الاختيار الأمثل لملابس العمل يعود بفوائد ملموسة على المؤسسة والعاملين على حد سواء، ويساهم في خلق بيئة عمل آمنة ومهنية ومنتجة.
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