import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import { AuthorBio } from '@/components/AuthorBio';
import { RelatedPosts } from '@/components/RelatedPosts';

export const metadata = {
  title: 'الابتكار في تصميم أزياء الطيران في السعودية',
  description: 'استكشاف للابتكارات الحديثة في تصميم أزياء الطيران في المملكة العربية السعودية، وكيف تمزج بين الهوية المحلية والمعايير العالمية، في ظل رؤية المملكة 2030.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/uniforms_saudi_arabia.jpeg';
  const title = 'تصميم الزي الموحد في الطيران السعودي';
  const readingTime = '10 دقائق';
  const datePublished = '٨ مايو ٢٠٢٤';
  const authorName = 'م. أمجد الضبياني';
  const authorImage = '/images/author/أمجد_الضبياني.png';
  const authorTitle = 'متخصص في تصميم أزياء الطيران';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'historical-evolution', title: 'التطور التاريخي لأزياء الطيران السعودية' },
    { id: 'mixing-identity', title: 'مزج الهوية السعودية مع عناصر التصميم الحديثة' },
    { id: 'saudi-designers', title: 'دور المصممين السعوديين في تطوير أزياء الطيران' },
    { id: 'evolution', title: 'تطور أزياء الطيران في المملكة' },
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

            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg font-bold mb-5 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/aviation-uniforms/design-uniform" className="text-sm hover:text-blue-600 block">
                    مبادئ تصميم زي الطيران: دليل شامل
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-crew-uniform-design" className="text-sm hover:text-blue-600 block">
                    معايير الجودة العالمية في تصميم زي الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/uniforms-saudi-arabia" className="text-sm hover:text-blue-600 block">
                    أزياء الطيران في المملكة العربية السعودية
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
            تشهد المملكة العربية السعودية تحولاً كبيراً في مختلف القطاعات ضمن رؤية 2030، ويأتي قطاع الطيران في مقدمة هذه القطاعات التي تشهد تطوراً متسارعاً ونمواً ملحوظاً. ومع التوسع الاستراتيجي للخطوط السعودية وإطلاق شركات طيران جديدة مثل طيران أديل وشركة طيران الهليكوبتر، برزت الحاجة إلى تطوير هوية بصرية متميزة تعكس الطموح السعودي وتجمع بين الأصالة والحداثة.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            يمثل تصميم أزياء الطيران عنصراً أساسياً في هذه الهوية، فهو ليس مجرد زي موحد يرتديه الطاقم، بل هو واجهة الناقل الجوي ورسالة بصرية تنقل قيم العلامة التجارية وتعكس صورة المملكة أمام العالم. ولذلك شهدت السنوات الأخيرة اهتماماً متزايداً بتطوير تصاميم مبتكرة لأزياء الطيران في السعودية، تمزج بين الموروث الثقافي السعودي العريق والمعايير العالمية للأناقة والوظيفية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
            في هذا المقال، نستكشف الابتكارات الحديثة في تصميم أزياء الطيران في المملكة، ونسلط الضوء على كيفية تجسيد الهوية السعودية في هذه التصاميم، وعلى دور المصممين المحليين والعالميين في هذه العملية. كما نتناول التقنيات والمواد المتطورة المستخدمة، والتحديات التي تواجه المصممين، والاتجاهات المستقبلية في هذا المجال الحيوي. ونستعرض أيضاً نماذج ناجحة لأزياء الطيران السعودية التي جمعت بين الأصالة والابتكار، وأسهمت في تعزيز مكانة المملكة على خريطة صناعة الطيران العالمية.
          </p>
        </section>

            <section id="historical-evolution" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التطور التاريخي لأزياء الطيران السعودية</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="تطور أزياء الطيران السعودية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تطور أزياء الطيران السعودية عبر العقود | المصدر: معرض تاريخ الطيران السعودي
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">البدايات: خمسينيات وستينيات القرن العشرين</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">بدأت قصة أزياء الطيران السعودية مع تأسيس الخطوط الجوية العربية السعودية عام 1945، حيث تميزت الفترة الأولى بالتأثر الكبير بالطراز الغربي:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>البذلات الرسمية للطيارين مستوحاة من سلاح الجو البريطاني والأمريكي، مع تعديلات طفيفة</li>
                  <li>أزياء المضيفين تأثرت بشكل كبير بنظيراتها الأوروبية، مع التقيد بمعايير الاحتشام</li>
                  <li>ألوان أساسية (الكحلي والأبيض) مع وجود شعار بسيط يعبر عن الناقل الوطني</li>
                  <li>غياب شبه تام للعناصر الثقافية المحلية، باستثناء بعض الرموز البسيطة</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">فترة التحول: السبعينيات والثمانينيات</h3>
                  <p className="mb-2 text-gray-700">مع الطفرة النفطية وتوسع الخطوط السعودية، بدأت مرحلة جديدة من تطور أزياء الطيران:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>إعادة تصميم شاملة للأزياء مع الحفاظ على الطابع العالمي</li>
                    <li>ظهور تدريجي لعناصر مستوحاة من التراث السعودي في التطريز والزخارف</li>
                    <li>تطور في اختيار الخامات لتناسب المناخ المحلي وظروف الطيران</li>
                    <li>تخصيص أزياء للرحلات الداخلية تختلف عن الرحلات الدولية</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مرحلة الهوية: التسعينيات والألفية الجديدة</h3>
                  <p className="mb-2 text-gray-700">شهدت هذه الفترة بداية التوجه نحو تطوير هوية متميزة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الاستعانة بمصممين سعوديين للمشاركة في تصميم الأزياء</li>
                    <li>دمج أكثر وضوحاً للعناصر التراثية السعودية، خاصة في أزياء المضيفات</li>
                    <li>استخدام ألوان مستوحاة من البيئة المحلية (الأخضر الزيتوني، البيج الصحراوي)</li>
                    <li>تطور تقني في الخامات المستخدمة مع التركيز على الراحة والعملية</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الانطلاقة الحديثة: 2015 حتى الآن</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">مرحلة استراتيجية جديدة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">مع إطلاق رؤية 2030 وبرنامج التحول الوطني، دخلت أزياء الطيران السعودية مرحلة جديدة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تعاون مع دور أزياء عالمية ومصممين سعوديين بارزين</li>
                    <li>إعادة صياغة الهوية البصرية للخطوط السعودية وانعكاسها على الأزياء</li>
                    <li>إطلاق تصاميم جديدة تماماً للناقلات الجديدة مثل طيران أديل وفلاي ناس</li>
                    <li>دمج التكنولوجيا والابتكار في التصاميم مع الحفاظ على الهوية المحلية</li>
                    <li>توجه نحو الاستدامة واستخدام مواد صديقة للبيئة في صناعة الأزياء</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="mixing-identity" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مزج الهوية السعودية مع عناصر التصميم الحديثة</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="مزج الهوية السعودية في تصاميم أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تصاميم حديثة تعكس الهوية السعودية في أزياء الطيران | المصدر: معرض التصميم العربي
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">العناصر التراثية في التصميم المعاصر</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">نجح المصممون في دمج عناصر من التراث السعودي العريق في تصاميم حديثة وعملية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الزخارف النجدية: استلهام الأنماط الهندسية التقليدية في تفاصيل الأزياء بأسلوب مبسط ومعاصر</li>
                  <li>ألوان البيئة السعودية: استخدام درجات الرمال والصحراء والواحات في لوحة الألوان الرئيسية</li>
                  <li>الخط العربي: توظيف عناصر من الخط الديواني والثلث في تطريزات دقيقة على أطراف الأكمام والياقات</li>
                  <li>عباءة المرأة السعودية: إعادة تفسير خطوط العباءة التقليدية في تصميم معاطف المضيفات بطريقة أنيقة وعملية</li>
                  <li>أنماط السدو: استخدام تقنيات النسيج السعودي التقليدي في تفاصيل محددة من الزي الرسمي</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التوازن بين الهوية والمعايير العالمية</h3>
                  <p className="mb-2 text-gray-700">التحدي الأكبر أمام المصممين هو تحقيق التوازن الدقيق بين عدة عناصر:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>مراعاة المعايير الدينية والثقافية مع الحفاظ على الأناقة العالمية</li>
                    <li>تحقيق المتطلبات الوظيفية والأمنية للطيران دون المساس بالجوانب الجمالية</li>
                    <li>إبراز الهوية السعودية بشكل يُفهم ويُقدر عالمياً</li>
                    <li>مواكبة الاتجاهات العالمية مع الحفاظ على خصوصية وأصالة التصميم</li>
                    <li>تلبية احتياجات متنوعة من العملاء (سعوديين، خليجيين، عرب، أجانب) في تجربة موحدة</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">نماذج ناجحة لدمج الهوية المحلية</h3>
                  <p className="mb-2 text-gray-700">برزت عدة تجارب مميزة في هذا المجال:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-bold">المجموعة الخضراء للخطوط السعودية:</span> تصميم يجمع بين اللون الأخضر الوطني وخطوط عصرية، مع لمسات من التطريز السعودي التقليدي على الأطراف</li>
                    <li><span className="font-bold">زي مضيفات طيران أديل:</span> تصميم عصري مستوحى من الألوان الصحراوية، مع وشاح يحمل نقوشاً مستوحاة من الرسوم الصخرية في شمال المملكة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="saudi-designers" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دور المصممين السعوديين في تطوير أزياء الطيران</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">صعود المواهب التصميمية المحلية</h3>
                <p className="mb-2 font-medium text-blue-700">شهدت السنوات الأخيرة بروزاً لافتاً للمصممين السعوديين في مجال أزياء الطيران:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>ارتفاع نسبة مشاركة المصممين السعوديين في مشاريع تصميم أزياء الطيران من أقل من 10% قبل عقد إلى أكثر من 40% حالياً</li>
                  <li>تنامي دور خريجي كليات التصميم والفنون السعودية في المشهد العالمي</li>
                  <li>تأسيس استوديوهات تصميم متخصصة في أزياء الطيران بالمملكة</li>
                  <li>مشاركة فاعلة في المسابقات العالمية لتصميم أزياء الطيران وحصد جوائز مرموقة</li>
                  <li>الاستفادة من برامج الابتعاث لنقل الخبرات العالمية إلى السوق المحلي</li>
          </ul>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="مصممون سعوديون في مجال أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  مصممون سعوديون يبتكرون أزياء طيران عصرية | المصدر: أسبوع الموضة السعودي
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">نماذج من المصممين السعوديين البارزين</h3>
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">مبدعون في مجال تصميم أزياء الطيران</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">قدم مصممون سعوديون إسهامات ملموسة في تطوير أزياء الطيران:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-bold">سارة الغامدي:</span> قدمت تصاميم مبتكرة للخطوط السعودية تمزج بين التراث الحجازي والتقنيات الحديثة في الأقمشة</li>
                    <li><span className="font-bold">محمد العتيبي:</span> صمم مجموعة الإكسسوارات والمكملات لزي طيران أديل، مستوحاة من الفن الصخري في منطقة العلا</li>
                    <li><span className="font-bold">نورة الشهري:</span> طورت نسيجاً فريداً يحمل زخارف سعودية تقليدية بتقنيات حديثة، وأدخلته في تصاميم أوشحة المضيفات</li>
                    <li><span className="font-bold">خالد القحطاني:</span> ابتكر تصميماً خاصاً لزي طياري شركة طيران خاصة سعودية يدمج عناصر من البيئة الصحراوية في التفاصيل</li>
                    <li><span className="font-bold">لينا السليمان:</span> صممت مجموعة متكاملة للخطوط السعودية تلبي احتياجات الرحلات طويلة المدى، مع الاهتمام بالراحة والأناقة</li>
          </ol>
                </div>
              </div>
        </section>

            <section id="evolution" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تطور أزياء الطيران في المملكة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التعاون بين المصممين المحليين والعالميين</h3>
                  <p className="mb-2 text-gray-700">أثمر التعاون المشترك عن نتائج مميزة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>شراكات بين مصممين سعوديين ودور أزياء عالمية</li>
                    <li>ورش عمل مشتركة ومختبرات تصميم</li>
                    <li>برامج تبادل خبرات بين المؤسسات التعليمية</li>
                    <li>تشكيل فرق عمل متعددة الثقافات</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">المبادرات الداعمة للمصممين المحليين</h3>
                  <p className="mb-2 text-gray-700">ساهمت عدة مبادرات في تمكين المصممين السعوديين:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-bold">مسابقة أزياء السماء السعودية:</span> منافسة سنوية للمصممين الشباب</li>
                    <li><span className="font-bold">حاضنة الأزياء التقنية:</span> برنامج يدعم المصممين المتخصصين</li>
                    <li><span className="font-bold">برنامج تطوير المواهب:</span> مبادرة من الخطوط السعودية</li>
                    <li><span className="font-bold">معهد التصميم المتخصص:</span> معهد متخصص في تصميم أزياء النقل</li>
          </ul>
                </div>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="الهوية البصرية لأزياء الطيران السعودية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  الهوية البصرية المتطورة لأزياء الطيران في المملكة | المصدر: مجلة التصميم العربي
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">المستقبل: التوقعات والتطلعات</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">المسار المستقبلي لأزياء الطيران السعودية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>توسع في تصدير التصاميم السعودية لشركات طيران إقليمية وعالمية</li>
                  <li>تكامل أكبر للتقنيات الذكية في الأزياء (أقمشة ذكية، تقنية النانو)</li>
                  <li>تطوير مركز إقليمي لتصميم وإنتاج أزياء الطيران في المملكة</li>
                  <li>نهج أكثر استدامة في اختيار المواد وعمليات الإنتاج</li>
                  <li>تعزيز الشراكة بين القطاعين العام والخاص لتطوير قطاع تصميم الأزياء المتخصصة</li>
          </ul>
              </div>
        </section>

            {/* Author Bio Section */}
            <div className="mb-12">
              <AuthorBio 
                author={authorName} 
                image={authorImage} 
                title={authorTitle}
              />
            </div>

            {/* Related Posts Section */}
            <div className="mb-10">
              <RelatedPosts 
                currentCategory="flight-crew" 
                currentSlug="in-design-uniform-aviation-saudi"
              />
            </div>

            {/* قسم التعليقات */}
            <div className="border-t pt-10 mt-10">
              <h3 className="text-xl font-bold mb-6">التعليقات</h3>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 mb-4">شاركنا رأيك حول هذا المقال</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  إضافة تعليق
                </button>
              </div>
            </div>
      </article>
        </div>
      </div>
    </main>
  );
} 