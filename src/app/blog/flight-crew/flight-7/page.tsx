import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { formatDate } from '@/lib/utils';
import { getReadingTime } from '@/lib/utils';
import { TableOfContents } from '@/components/TableOfContents';
import { ShareButtons } from '@/components/ShareButtons';
import { RelatedPosts } from '@/components/RelatedPosts';
import { AuthorBio } from '@/components/AuthorBio';
import { FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'متطلبات السلامة والأمان في تصميم ملابس طاقم الطائرة',
  description: 'دليل شامل حول معايير ومتطلبات السلامة في تصميم أزياء طاقم الطائرة، وكيفية موازنة الجوانب الجمالية مع الاعتبارات الأمنية الضرورية في بيئة الطيران.',
};

// صورة الهيدر للمقال
const heroImage = '/images/flight_crew/header_flight_crew_uniform.jpeg';

export default function PostPage({ params }: { params: { category: string; slug: string } }) {
  const post = {
    content: `<section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">مقدمة</h2>
          <p className="mb-4">
            تصميم أزياء طاقم الطائرة ليس مجرد تمرين في الأناقة والهوية المؤسسية، بل هو مهمة معقدة تضع السلامة والأمان في صميم اعتباراتها. فملابس الطيارين والمضيفين ليست مجرد زي موحد يعكس صورة الشركة، بل هي في المقام الأول معدات سلامة مصممة للعمل في بيئة فريدة تنطوي على تحديات وظروف استثنائية.
          </p>
          <p className="mb-4">
            في حالات الطوارئ، يمكن أن يتحول الزي الأنيق إلى خط دفاع أول يحمي أفراد الطاقم ويساعدهم على أداء واجباتهم في إنقاذ الركاب. هذا الدور الحيوي يفرض اشتراطات ومواصفات صارمة تنظمها هيئات الطيران المدني وسلطات السلامة العالمية، وتدفع المصممين إلى تحقيق توازن دقيق بين مختلف المتطلبات المتعارضة أحياناً.
          </p>
          <p className="mb-4">
            يستكشف هذا المقال معايير ومتطلبات السلامة الأساسية في تصميم ملابس طاقم الطائرة، بدءاً من مقاومة الحريق وحتى سهولة الحركة والتمييز البصري. كما يناقش التطورات التكنولوجية التي تعزز أداء هذه الملابس في ظروف الطوارئ، والتحديات التي تواجه المصممين في تحقيق التوازن المثالي بين السلامة والراحة والأناقة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">معايير مقاومة الحريق والاشتعال</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">المعايير التنظيمية العالمية</h3>
          <p className="mb-4">
            تشكل مقاومة الحريق حجر الزاوية في متطلبات السلامة لأزياء طاقم الطائرة:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">معيار FAR 25.853 الصادر عن إدارة الطيران الفيدرالية الأمريكية (FAA) للمواد المستخدمة في المقصورة</li>
            <li className="mb-2">معيار CS-25 الصادر عن وكالة سلامة الطيران الأوروبية (EASA) وتعديلاته المستمرة</li>
            <li className="mb-2">اختبار 12 ثانية للهب المباشر: يجب أن تتوقف الأقمشة عن الاشتعال في غضون ثانيتين بعد إزالة مصدر اللهب</li>
            <li className="mb-2">معدل انتشار اللهب لا يتجاوز 4 بوصات في الدقيقة وفق اختبارات محددة</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">خصائص الأقمشة المقاومة للهب</h3>
          <p className="mb-4">
            المواصفات التقنية للأقمشة الآمنة:
          </p>
          <ol className="list-decimal list-inside mb-4 mr-5">
            <li className="mb-2">استخدام ألياف طبيعية معالجة (كالقطن المعالج) أو مخلوطة بألياف مقاومة للهب</li>
            <li className="mb-2">ألياف اصطناعية خاصة مثل نوميكس (Nomex) وكيرمل (Kermel) المطورة خصيصاً للاستخدامات عالية المخاطر</li>
            <li className="mb-2">تجنب المواد البترولية الصرفة (كالبوليستر 100%) التي تنصهر وتلتصق بالجلد عند التعرض للهب</li>
            <li className="mb-2">معالجات كيميائية متقدمة تمنح الأقمشة خاصية مقاومة اللهب مع الحفاظ على ملمسها ومظهرها</li>
          </ol>

          <h3 className="text-xl font-medium mt-6 mb-3">اختبارات مقاومة الاشتعال</h3>
          <p className="mb-4">
            بروتوكولات صارمة لضمان السلامة:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">اختبار الاشتعال العمودي (Vertical Flammability Test) وفق معيار ASTM D6413</li>
            <li className="mb-2">اختبارات كثافة الدخان وسميته لتقييم خطورة الغازات المنبعثة</li>
            <li className="mb-2">اختبارات الحرارة الإشعاعية لمحاكاة ظروف الحريق الأكثر حدة</li>
            <li className="mb-2">اختبارات دورة الغسيل المتكررة للتأكد من استمرار خصائص المقاومة للهب طوال عمر الزي</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">متطلبات حرية الحركة والوظيفية</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">تصميمات تدعم إجراءات الطوارئ</h3>
          <p className="mb-4">
            عناصر تصميمية لضمان الأداء الأمثل في حالات الطوارئ:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">قصات تسمح بمدى حركة كامل للأطراف، خاصة عند فتح أبواب الطوارئ</li>
            <li className="mb-2">تجنب الأكمام الواسعة الفضفاضة التي قد تعلق بمقابض الطوارئ أو المعدات</li>
            <li className="mb-2">تناسب محكم في منطقة الخصر والكتفين دون تقييد الحركة</li>
            <li className="mb-2">تصميم الأحذية بارتفاع كعب محدود (عادة لا يتجاوز 3 سم) لضمان الاستقرار عند الإخلاء</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">مرونة الحركة وقابلية التمدد</h3>
          <p className="mb-4">
            خصائص تقنية تدعم وظائف الطاقم:
          </p>
          <ol className="list-decimal list-inside mb-4 mr-5">
            <li className="mb-2">أقمشة مرنة بأربع اتجاهات (4-way stretch) تسمح بالانحناء والالتفاف والوصول للأماكن الضيقة</li>
            <li className="mb-2">نسبة إلاستين (Elastane) مدروسة في الأقمشة (تتراوح عادة بين 2-5%) للمرونة مع الحفاظ على الشكل الرسمي</li>
            <li className="mb-2">تقنيات حياكة خاصة في مناطق الإجهاد (الإبط، الركبتين، الكوعين) تسمح بمدى حركة أكبر</li>
            <li className="mb-2">تعزيزات مطاطية مخفية في التنانير لتسهيل الحركة السريعة في حالات الطوارئ</li>
          </ol>

          <h3 className="text-xl font-medium mt-6 mb-3">الوصول السريع للمعدات والأدوات</h3>
          <p className="mb-4">
            عناصر تصميمية وظيفية:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">جيوب استراتيجية لحمل معدات السلامة الأساسية (مثل مصباح يدوي صغير، قفازات واقية)</li>
            <li className="mb-2">تصميم حزام متعدد الأغراض يسمح بتثبيت أدوات الاتصال (مثل جهاز اللاسلكي الصغير)</li>
            <li className="mb-2">أماكن مخصصة لحمل مفاتيح الطوارئ ومفاتيح المقصورة الأساسية</li>
            <li className="mb-2">تجنب العناصر المتدلية (مثل الأوشحة الطويلة) التي قد تعيق الوصول السريع للمعدات</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">الرؤية والتمييز في حالات الطوارئ</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">العناصر العاكسة والتباين اللوني</h3>
          <p className="mb-4">
            تعزيز الرؤية في ظروف الطوارئ:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">شرائط عاكسة مدمجة في تصميم الزي، خاصة في منطقة الصدر والذراعين</li>
            <li className="mb-2">استخدام تقنية High-Visibility (Hi-Vis) في الأجزاء الخارجية من الزي</li>
            <li className="mb-2">تباين لوني مدروس بين أجزاء الزي للتمييز السريع في ظروف الإضاءة المنخفضة</li>
            <li className="mb-2">ألوان فلورية في بعض العناصر تظهر بوضوح في حالات الدخان الكثيف</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">تمييز أفراد الطاقم عن الركاب</h3>
          <p className="mb-4">
            عناصر التعريف الفوري:
          </p>
          <ol className="list-decimal list-inside mb-4 mr-5">
            <li className="mb-2">ألوان مميزة للطاقم تختلف عن الملابس المدنية المعتادة</li>
            <li className="mb-2">شارات وإشارات واضحة تحدد الدور والرتبة بشكل فوري (قائد، مضيف، مهندس)</li>
            <li className="mb-2">توحيد عناصر محددة في الزي (القبعات، الشارات) لتيسير التعرف على الطاقم في الظروف الصعبة</li>
            <li className="mb-2">تصميمات تتميز بالتفرد لتسهيل تمييز الطاقم وسط الحشود</li>
          </ol>

          <h3 className="text-xl font-medium mt-6 mb-3">معدات السلامة المدمجة والإضافية</h3>
          <p className="mb-4">
            عناصر تكميلية للطوارئ:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">سترات ومعاطف للطوارئ بألوان عالية الوضوح (عادة الأصفر الفسفوري أو البرتقالي)</li>
            <li className="mb-2">مصابيح صغيرة قابلة للتثبيت على الزي للإضاءة في حالات انقطاع الكهرباء</li>
            <li className="mb-2">صفارات ومنبهات صوتية مدمجة في الزي للإرشاد في حالات الرؤية المنخفضة</li>
            <li className="mb-2">دمج تقنية RFID لتتبع موقع أفراد الطاقم في الطوارئ الكبرى</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">معدات الحماية الشخصية واعتبارات خاصة</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">أحذية السلامة المتخصصة</h3>
          <p className="mb-4">
            مواصفات مدروسة للحماية والوظيفية:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">نعل مقاوم للانزلاق حتى على الأسطح المبللة أو الملساء</li>
            <li className="mb-2">تصميم يسمح بالوقوف لفترات طويلة مع دعم للقوس والكاحل</li>
            <li className="mb-2">مواد متينة مقاومة للثقب والضغط لحماية القدم في حالات الطوارئ</li>
            <li className="mb-2">قابلية للخلع السريع في حالة الهبوط الاضطراري على الماء</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">القفازات والمعدات الواقية للأيدي</h3>
          <p className="mb-4">
            حماية متخصصة أثناء العمليات الطارئة:
          </p>
          <ol className="list-decimal list-inside mb-4 mr-5">
            <li className="mb-2">قفازات مقاومة للحرارة والحريق لاستخدامها في حالات الإخلاء</li>
            <li className="mb-2">مواد تسمح بالإمساك الآمن مع الأسطح الساخنة أو الحادة</li>
            <li className="mb-2">تصميم يسمح بالمهارة اليدوية الدقيقة للتعامل مع معدات الطوارئ</li>
            <li className="mb-2">تخزين مدمج في الزي يسمح بالوصول السريع للقفازات عند الحاجة</li>
          </ol>

          <h3 className="text-xl font-medium mt-6 mb-3">حماية الجهاز التنفسي</h3>
          <p className="mb-4">
            عناصر التأمين ضد الدخان والغازات:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">أقنعة وكمامات طوارئ مخزنة بشكل استراتيجي ضمن عناصر الزي</li>
            <li className="mb-2">أغطية وأوشحة خاصة يمكن استخدامها لتغطية الفم والأنف في حالات الدخان</li>
            <li className="mb-2">تدريب الطاقم على استخدام الملابس ذاتها (مثل قماش القميص المبلل) كفلتر مؤقت للهواء</li>
            <li className="mb-2">توافق تصميم الزي مع استخدام أقنعة الأكسجين في حالات انخفاض الضغط</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">اعتبارات الظروف المناخية القصوى</h3>
          <p className="mb-4">
            تأمين الطاقم ضد العوامل البيئية:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">طبقات إضافية خفيفة الوزن للحماية من البرد الشديد في حالات الهبوط الاضطراري في المناطق الباردة</li>
            <li className="mb-2">مواد تعكس الحرارة في بعض عناصر الزي للمساعدة في الحفاظ على درجة حرارة الجسم</li>
            <li className="mb-2">معالجات مقاومة للماء لبعض طبقات الملابس للحماية في حالات الطقس الماطر</li>
            <li className="mb-2">عناصر إضافية للحماية من الشمس والأشعة فوق البنفسجية في حالات الإخلاء في المناطق المكشوفة</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">التوازن بين متطلبات السلامة والاعتبارات الأخرى</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">المعادلة الصعبة: الأمان والأناقة</h3>
          <p className="mb-4">
            التحديات والحلول:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">استخدام تقنيات تصميم متقدمة تخفي عناصر السلامة ضمن خطوط أنيقة</li>
            <li className="mb-2">تطوير أقمشة ذات مظهر فاخر مع الالتزام بمعايير السلامة الصارمة</li>
            <li className="mb-2">إضافة عناصر السلامة بطرق لا تضحي بالنواحي الجمالية للزي</li>
            <li className="mb-2">استخدام اللون والتصميم بطرق تعزز السلامة وتحافظ على الأناقة في آن واحد</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">الموازنة بين التكلفة والسلامة</h3>
          <p className="mb-4">
            تحديات اقتصادية وحلول عملية:
          </p>
          <ol className="list-decimal list-inside mb-4 mr-5">
            <li className="mb-2">الاستثمار الذكي في الأقمشة والمواد عالية الجودة للعناصر الأكثر صلة بالسلامة</li>
            <li className="mb-2">تصميم نظام متكامل يسمح بتحديث أو استبدال عناصر السلامة دون تغيير الزي بالكامل</li>
            <li className="mb-2">تحليل تكلفة دورة الحياة الكاملة بدلاً من التكلفة الأولية فقط</li>
            <li className="mb-2">الاستفادة من التقدم التكنولوجي لتطوير حلول فعالة من حيث التكلفة دون المساس بالسلامة</li>
          </ol>

          <h3 className="text-xl font-medium mt-6 mb-3">الشمولية والتنوع في متطلبات السلامة</h3>
          <p className="mb-4">
            تأمين الحماية للجميع:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">تصميم أزياء آمنة تراعي الاختلافات الجسدية والجندرية بين أفراد الطاقم</li>
            <li className="mb-2">مراعاة المتطلبات الدينية والثقافية مع الحفاظ على معايير السلامة</li>
            <li className="mb-2">تطوير خيارات متعددة للزي تناسب مختلف الفئات مع توحيد عناصر السلامة الأساسية</li>
            <li className="mb-2">اختبارات شاملة على مجموعة متنوعة من الأجسام والحركات لضمان كفاءة عناصر السلامة للجميع</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">خاتمة</h2>
          <p className="mb-4">
            تمثل متطلبات السلامة والأمان في تصميم ملابس طاقم الطائرة تحدياً متعدد الأبعاد يجمع بين العلم والفن والهندسة والتصميم. وتقع على عاتق المصممين والمصنعين ومسؤولي الطيران مسؤولية ضمان تلبية هذه الأزياء للمعايير الصارمة التي تحمي حياة الطاقم والركاب، مع الحفاظ على الوظائف الأخرى المهمة من الراحة والأناقة والتمثيل المؤسسي.
          </p>
          <p className="mb-4">
            إن التطور المستمر في تقنيات النسيج ومواد الحماية وأساليب الاختبار يفتح آفاقاً جديدة لتحسين سلامة أزياء الطيران وأدائها. وتتجه صناعة الطيران بشكل متزايد نحو اعتماد حلول مبتكرة تجمع بين التقنيات المتقدمة والتصاميم الذكية لتعزيز قدرة الطاقم على الاستجابة بفعالية في حالات الطوارئ.
          </p>
          <p className="mb-4">
            وفي النهاية، تبقى قيمة الحياة البشرية هي الاعتبار الأسمى في تصميم أزياء طاقم الطائرة، مما يفرض التزاماً أخلاقياً وقانونياً بعدم المساومة على متطلبات السلامة مهما كانت الضغوط الأخرى. ويمثل الالتزام بهذه المتطلبات وتطويرها باستمرار جزءاً لا يتجزأ من ثقافة السلامة الشاملة التي تعد من أهم سمات صناعة الطيران الحديثة.
          </p>
        </section>`,
    metadata: {
      title: 'متطلبات السلامة والأمان في تصميم ملابس طاقم الطائرة',
      description: metadata.description,
      date: '2025-05-07T12:28:42.907Z',
      author: 'يونيفورم',
      category: 'flight-crew',
      tags: ["زي موحد","يونيفورم","flight crew"],
      image: "/images/flight_crew/air_crew_attire.jpeg",
      slug: 'flight-7',
      readTime: '10 دقائق للقراءة',
      authorImage: '/images/author/team.jpg',
      authorTitle: 'خبراء تصميم الأزياء الموحدة'
    }
  };

  // Calculate reading time
  const readingTime = getReadingTime(post.content);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            يونيفورم
          </Link>
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-blue-600">الرئيسية</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">من نحن</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">خدماتنا</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">المدونة</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">اتصل بنا</Link>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            اطلب عرض سعر
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <article className="lg:w-2/3">
            {/* Hero section */}
            <div className="mb-8">
              <div className="relative w-full h-[400px] mb-6">
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.metadata.title}</h1>
              <div className="flex items-center text-gray-600 mb-6">
                {post.metadata.author && (
                  <span className="ml-4">بواسطة: {post.metadata.author}</span>
                )}
                <span className="ml-4">{formatDate(post.metadata.date)}</span>
                <span>{readingTime} دقائق قراءة</span>
              </div>
            </div>

            {/* Table of Contents - Sticky on desktop */}
            <div className="hidden lg:block mb-8">
              <TableOfContents content={post.content} />
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">الوسوم:</h3>
              <div className="flex flex-wrap gap-2">
                {post.metadata.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag}`}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Share buttons */}
            <div className="mt-8">
              <ShareButtons
                url={`https://yourdomain.com/blog/${post.metadata.category}/${post.metadata.slug}`}
                title={post.metadata.title}
              />
            </div>

            {/* Author bio */}
            {post.metadata.author && (
              <div className="mt-8 border-t pt-8">
                <AuthorBio 
                  author={post.metadata.author}
                  image={post.metadata.authorImage}
                  title={post.metadata.authorTitle}
                />
              </div>
            )}

            {/* Related posts */}
            <div className="mt-12">
              <RelatedPosts
                currentCategory={post.metadata.category}
                currentSlug={post.metadata.slug}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            {/* Table of Contents - Mobile only */}
            <div className="lg:hidden mb-8">
              <TableOfContents content={post.content} />
            </div>

            {/* Newsletter signup */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">اشترك في النشرة البريدية</h3>
              <p className="text-gray-600 mb-4">احصل على آخر المقالات والأخبار مباشرة في بريدك الإلكتروني</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  اشترك الآن
                </button>
              </form>
            </div>

            {/* Social media links */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">تابعنا</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">فيسبوك</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">تويتر</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">لينكد إن</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">واتساب</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">يونيفورم</h3>
              <p className="text-gray-300">
                نحن نقدم أفضل حلول الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">الرئيسية</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">من نحن</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white">خدماتنا</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white">المدونة</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">اتصل بنا</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">اتصل بنا</h3>
              <ul className="space-y-2 text-gray-300">
                <li>البريد الإلكتروني: info@uniform.com</li>
                <li>الهاتف: +966 12 345 6789</li>
                <li>العنوان: الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} يونيفورم. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}