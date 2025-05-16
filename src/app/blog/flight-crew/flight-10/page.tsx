import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'كيف يتم تصميم زي طاقم طيران يعكس الثقافة السعودية؟',
  description: 'استكشاف عملية تصميم زي طاقم طيران يجمع بين الهوية السعودية الأصيلة ومتطلبات الطيران العصرية، مع دراسة العناصر الثقافية والرموز التراثية التي تميز هذه الأزياء',
};

// صورة الهيدر للمقال
const heroImage = '/images/flight_crew/header_flight_crew_uniform.jpeg';

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/uniforms_saudi_arabia.jpeg';
  const title = 'كيف يتم تصميم زي طاقم طيران يعكس الثقافة السعودية؟';
  const readingTime = '9 دقائق';
  const datePublished = '١٢ يونيو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'cultural-elements', title: 'العناصر الثقافية السعودية الملهمة' },
    { id: 'design-stages', title: 'مراحل تصميم زي طيران يعكس الثقافة السعودية' },
    { id: 'challenges', title: 'تحديات دمج الثقافة السعودية في تصميم أزياء الطيران' },
    { id: 'case-studies', title: 'دراسات حالة لأزياء طيران سعودية ناجحة' },
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
                <li>
                  <Link href="/blog/flight-crew/flight-5" className="text-sm hover:text-blue-600 block">
                    تأثير الثقافة المحلية على تصميم أزياء شركات الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-6" className="text-sm hover:text-blue-600 block">
                    الإكسسوارات في أزياء الطيران: اللمسات المكملة للأناقة والوظيفة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-11" className="text-sm hover:text-blue-600 block">
                    مقارنة بين زي طواقم شركات الطيران المختلفة العاملة في المملكة
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
            يعد زي طاقم الطائرة أحد أهم العناصر المرئية التي تعكس هوية شركة الطيران وثقافة البلد الذي تمثله. وفي المملكة العربية السعودية، حيث تتجذر الثقافة في تاريخ عريق وتراث غني، تكتسب عملية تصميم زي يجمع بين الأصالة والمعاصرة أهمية استثنائية. فهذا الزي ليس مجرد ملابس وظيفية، بل هو سفير ثقافي يحمل رسالة المملكة إلى العالم مع كل رحلة جوية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            ومع تنامي دور المملكة في صناعة الطيران العالمية، وإطلاق مبادرات استراتيجية ضمن رؤية 2030 لتعزيز قطاع الطيران، ازداد الاهتمام بتطوير أزياء تعكس الهوية السعودية وتبرز عناصرها الثقافية الفريدة، مع الالتزام بالمعايير العالمية للأناقة والوظيفية والراحة.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            في هذا المقال، نستكشف كيفية تصميم زي طاقم طيران يعكس الثقافة السعودية، متناولين المراحل المختلفة لعملية التصميم، والعناصر الثقافية التي يتم دمجها، والتحديات التي تواجه المصممين، مع الإشارة إلى أمثلة ناجحة لأزياء طيران سعودية استطاعت أن تجمع بين الهوية المحلية والمتطلبات العالمية.
          </p>
        </section>

            <section id="cultural-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر الثقافية السعودية الملهمة لتصميم أزياء الطيران</h2>
          
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التراث الملبسي السعودي التقليدي</h3>
                <p className="mb-2 font-medium text-blue-700">يستلهم المصممون من:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الثوب السعودي التقليدي بخطوطه الأنيقة وانسيابيته</li>
                  <li>العباءة النسائية التقليدية وتطوراتها المعاصرة</li>
                  <li>المشلح (البشت) بتفاصيله الدقيقة وتطريزاته الذهبية</li>
                  <li>الأزياء التقليدية لمختلف مناطق المملكة، مثل أزياء الحجاز ونجد والأحساء وعسير</li>
                  <li>غطاء الرأس التقليدي (الغترة والعقال للرجال، والشيلة للنساء)</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الزخارف والرموز التراثية</h3>
                  <p className="mb-2 text-gray-700">عناصر تضفي هوية فريدة على التصميم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>النقوش السدو التقليدية والتي تتميز بأشكالها الهندسية ومعانيها العميقة</li>
                    <li>الزخارف النباتية المستلهمة من النخيل والواحات السعودية</li>
                    <li>أنماط القط العسيري الفريدة ذات الألوان الزاهية</li>
                    <li>الزخارف الهندسية الإسلامية وأشكال الأرابيسك الدقيقة</li>
                    <li>التطريزات التقليدية المستخدمة في الملابس التراثية مثل "الزري" و"المخرمة"</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الألوان المستوحاة من البيئة السعودية</h3>
                  <p className="mb-2 text-gray-700">لوحة ألوان تعكس جغرافية المملكة وتراثها:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>اللون الأخضر: رمز الخصب والنماء، ولون العلم السعودي</li>
                    <li>درجات البيج والذهبي: تعكس لون رمال الصحراء السعودية</li>
                    <li>الأزرق بدرجاته: مستوحى من مياه الخليج العربي والبحر الأحمر</li>
                    <li>اللون العنابي والأرجواني: المستخدم في الأزياء التقليدية للمناطق المختلفة</li>
                    <li>الأبيض: رمز النقاء والأصالة، والمستخدم تقليدياً في الملابس السعودية</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="design-stages" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مراحل تصميم زي طيران يعكس الثقافة السعودية</h2>
          
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">البحث والاستلهام</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">مرحلة التوثيق والدراسة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>دراسة تاريخية للأزياء التقليدية السعودية في مختلف المناطق</li>
                    <li>زيارة المتاحف والمعارض الثقافية لتوثيق التفاصيل الأصيلة</li>
                    <li>التشاور مع خبراء التراث والحرفيين التقليديين</li>
                    <li>تحليل قصص النجاح العالمية في دمج الثقافة المحلية بأزياء الطيران</li>
                    <li>دراسة اتجاهات التصميم المعاصرة التي تتناغم مع العناصر التقليدية</li>
          </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تحديد هوية التصميم والمفهوم</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">بلورة الرؤية وتوجيه المشروع:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>وضع استراتيجية تصميم تتماشى مع هوية وقيم شركة الطيران</li>
                      <li>تحديد العناصر الثقافية الأساسية التي سيتم دمجها في التصميم</li>
                      <li>اختيار لوحة ألوان مستوحاة من الثقافة السعودية ومتوافقة مع هوية الشركة</li>
                      <li>تطوير مزاج تصميمي (Mood Board) يجمع العناصر البصرية الملهمة</li>
                      <li>صياغة قصة تصميمية تعكس رحلة المسافر عبر التراث السعودي</li>
          </ol>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التصميم المفاهيمي والرسومات الأولية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">تحويل الرؤية إلى أفكار ملموسة:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>رسم اسكتشات يدوية تستكشف مختلف تفسيرات الثقافة السعودية</li>
                      <li>تطوير تصاميم رقمية ثلاثية الأبعاد توضح الرؤية النهائية</li>
                      <li>تجربة دمج العناصر الزخرفية التقليدية بأسلوب عصري</li>
                      <li>اختبار مختلف تركيبات الألوان والقصات لتحقيق التوازن المطلوب</li>
                      <li>وضع تصورات لمجموعة متكاملة للطاقم النسائي والرجالي</li>
          </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">اختيار المواد والأقمشة</h3>
                <p className="mb-2 text-gray-700">انتقاء الخامات المناسبة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>اختيار أقمشة عالية الجودة تتوافق مع متطلبات السلامة في الطيران</li>
                  <li>البحث عن أقمشة تعكس ملمس وخصائص الأنسجة التقليدية السعودية</li>
                  <li>تجربة مزج الخامات التقليدية مثل الحرير والقطن مع الألياف الاصطناعية المتطورة</li>
                  <li>اختيار مواد تناسب المناخ السعودي والظروف المختلفة داخل الطائرة</li>
                  <li>التركيز على المواد المستدامة والصديقة للبيئة حيثما أمكن</li>
          </ul>
              </div>
        </section>

            <section id="challenges" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تحديات دمج الثقافة السعودية في تصميم أزياء الطيران</h2>
          
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التوازن بين الأصالة والمعاصرة</h3>
                  <p className="mb-2 text-gray-700">تحديات تحقيق المعادلة الصعبة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>استلهام العناصر التقليدية دون المبالغة التي قد تؤثر على الطابع المهني للزي</li>
                    <li>مواكبة اتجاهات الموضة العالمية مع الحفاظ على الهوية الثقافية</li>
                    <li>تحديث الرموز التراثية بأسلوب يحترم أصالتها ويجعلها مقبولة عالمياً</li>
                    <li>تجنب الصور النمطية والتبسيط المخل للعناصر الثقافية المعقدة</li>
                    <li>خلق تصميم معاصر يفهمه العالم مع الحفاظ على جذوره الثقافية الأصيلة</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الالتزام بمعايير الطيران العالمية</h3>
                  <p className="mb-2 text-gray-700">موازنة الهوية الثقافية مع المتطلبات الفنية:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>تلبية معايير السلامة والأمان الصارمة في صناعة الطيران</li>
                    <li>استخدام مواد مقاومة للحريق دون التضحية بالمظهر التقليدي</li>
                    <li>تصميم زي يسمح بحرية الحركة أثناء أداء واجبات طاقم الطيران</li>
                    <li>مراعاة ظروف العمل المختلفة والتغيرات في درجات الحرارة داخل الطائرة</li>
                    <li>الالتزام بمعايير الراحة والمتانة التي تتطلبها ساعات العمل الطويلة</li>
          </ol>
                </div>
              </div>

              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تنوع الثقافة السعودية ومناطقها</h3>
                <p className="mb-2 text-gray-700">تمثيل غنى وتعدد التراث السعودي:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>تحقيق التوازن بين العناصر الثقافية المختلفة للمناطق السعودية المتنوعة</li>
                  <li>إيجاد القواسم المشتركة التي تمثل الهوية السعودية الشاملة</li>
                  <li>تفادي التحيز لثقافة منطقة معينة على حساب المناطق الأخرى</li>
                  <li>التعامل مع الاختلافات الجغرافية والتاريخية بين أجزاء المملكة المختلفة</li>
                  <li>إبراز التنوع الثقافي السعودي كمصدر ثراء وليس كتحد للتوحيد البصري</li>
          </ul>
              </div>
        </section>

            <section id="case-studies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دراسات حالة لأزياء طيران سعودية ناجحة</h2>
          
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تجربة الخطوط السعودية في تطوير الزي الرسمي</h3>
                <p className="mb-2 text-gray-700">مسيرة الناقل الوطني في تعزيز الهوية:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>التطور التاريخي لزي الخطوط السعودية منذ تأسيسها وعبر العقود المختلفة</li>
                  <li>التصميم الحالي وكيفية دمجه للعناصر السعودية التقليدية مثل ألوان العلم والزخارف الإسلامية</li>
                  <li>استخدام اللون الأخضر كعنصر أساسي يعكس الهوية الوطنية</li>
                  <li>التطريزات الذهبية المستوحاة من البشت السعودي في زي الطيارين</li>
                  <li>تطوير زي نسائي يجمع بين الاحترام للثقافة المحلية والأناقة العالمية</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">ابتكارات شركات الطيران الاقتصادي السعودية</h3>
                  <p className="mb-2 text-gray-700">تجارب متميزة في تقديم هوية شابة:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>نهج طيران أديل في تقديم زي عصري يعكس طبيعة الشركة الشابة مع لمسات تراثية</li>
                    <li>تجربة طيران ناس في تطوير زي اقتصادي يحافظ على الهوية الثقافية</li>
                    <li>استخدام الألوان النابضة بالحياة التي تعكس تنوع المناظر الطبيعية السعودية</li>
                    <li>الاستفادة من الخطوط والتصاميم البسيطة التي تعكس الطابع المعاصر للشركة</li>
                    <li>تطوير إكسسوارات مبتكرة مستوحاة من التراث السعودي</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تعاون المصممين السعوديين مع شركات الطيران</h3>
                  <p className="mb-2 text-gray-700">الاستفادة من المواهب المحلية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تجارب ناجحة للتعاون بين شركات الطيران والمصممين السعوديين البارزين</li>
                    <li>مبادرات لإشراك طلاب تصميم الأزياء السعوديين في تطوير مفاهيم مبتكرة</li>
                    <li>الاستفادة من رؤية المصممين المحليين في تفسير العناصر الثقافية بطريقة أصيلة</li>
                    <li>دور الحرفيين التقليديين في إضفاء لمسات تراثية أصيلة على التصاميم</li>
                    <li>مشاريع مشتركة بين شركات الطيران ومؤسسات التراث والحرف اليدوية السعودية</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-lg border border-gray-200">
                <p className="mb-4 leading-7 text-gray-700">
                  يمثل تصميم زي طاقم طيران يعكس الثقافة السعودية تحدياً إبداعياً فريداً يجمع بين الاحترام للتراث والهوية من جهة، والالتزام بمتطلبات صناعة الطيران العالمية من جهة أخرى. وقد نجحت شركات الطيران السعودية، وعلى رأسها الخطوط السعودية، في تقديم نماذج متميزة تعكس هذا التوازن الدقيق، مستلهمة من العناصر الثقافية الغنية التي تزخر بها المملكة.
                </p>
                <p className="mb-4 leading-7 text-gray-700">
                  إن عملية تصميم زي الطيران ليست مجرد اختيار ألوان وقصات، بل هي رحلة بحث وتطوير تمر بمراحل عديدة، بدءاً من البحث والاستلهام، مروراً بتحديد المفهوم والتصميم المبدئي، وصولاً إلى اختيار المواد والاختبار والإنتاج النهائي. وخلال هذه الرحلة، يتعين على المصممين التغلب على تحديات عديدة، أبرزها تحقيق التوازن بين الأصالة والمعاصرة، والالتزام بمعايير السلامة والراحة، وتمثيل تنوع الثقافة السعودية بطريقة شاملة ومتوازنة.
          </p>
                <p className="mb-0 leading-7 text-gray-700">
                  ومع استمرار تطور صناعة الطيران في المملكة، وتنامي الاهتمام العالمي بالثقافة السعودية، ستظل أزياء طاقم الطيران نافذة مهمة تطل من خلالها المملكة على العالم، تعرض من خلالها تراثها الغني وهويتها المتجددة، وتجسد رحلة التحول والتطور التي تشهدها ضمن رؤية 2030، مؤكدة على أن الأصالة والحداثة يمكن أن تتكاملا في تناغم فريد يعكس قصة المملكة العربية السعودية المعاصرة.
          </p>
              </div>
        </section>
      </article>
        </div>
      </div>
    </main>
  );
} 