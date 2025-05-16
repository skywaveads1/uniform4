import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'التصميم المبتكر لملابس طاقم الطائرة',
  description: 'استكشاف التصاميم المبتكرة لملابس أطقم الطائرات، والتوازن بين الأناقة والوظيفية والراحة والسلامة في صناعة الطيران الحديثة',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/air_crew_innovative_uniforms.jpeg';
  const title = 'التصميم المبتكر لملابس طاقم الطائرة';
  const readingTime = '9 دقائق';
  const datePublished = '٣ مايو ٢٠٢٤';
  const authorName = 'م. ريما السباعي';
  const authorImage = '/images/author/ريما_السباعي.png';
  const authorTitle = 'مستشارة في تصميم أزياء الطيران';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة عن ملابس طاقم الطائرة' },
    { id: 'innovation-importance', title: 'أهمية الابتكار في ملابس الطاقم' },
    { id: 'design-elements', title: 'العناصر الرئيسية في التصميم المبتكر' },
    { id: 'materials-tech', title: 'المواد والتقنيات الحديثة' },
    { id: 'challenges', title: 'تحديات التصميم وحلول مبتكرة' },
    { id: 'future-trends', title: 'اتجاهات مستقبلية' },
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
            
            {/* Author information */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">الكاتب</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    width={64}
                    height={64}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">{authorName}</h4>
                  <p className="text-sm text-gray-600">{authorTitle}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مشاركة المقال</h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="border-t pt-4 mt-6">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/flight-crew/modern-flight-attendant-fashion" className="text-sm hover:text-blue-600 block">
                    أزياء المضيفات الحديثة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/comfort-safety-airline-uniforms" className="text-sm hover:text-blue-600 block">
                    الراحة والسلامة في أزياء شركات الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/design-uniform" className="text-sm hover:text-blue-600 block">
                    تصميم زي طاقم الطائرة
                  </Link>
                </li>
          </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة عن ملابس طاقم الطائرة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر ملابس طاقم الطائرة واجهة مرئية أساسية لشركات الطيران، حيث تجمع بين الأناقة والوظيفية في منظومة متكاملة. على مر السنين، تطورت هذه الملابس من مجرد زي موحد إلى تصاميم مبتكرة تعكس هوية العلامة التجارية وتلبي احتياجات متعددة ومتنوعة للطاقم والمسافرين على حد سواء.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في عالم الطيران المعاصر، باتت التصاميم المبتكرة لملابس طاقم الطائرة تمثل مزيجاً فريداً من الفن والهندسة وعلم الأرجونوميكس. فهي تجمع بين الجماليات المرئية والقدرة على تحمل ساعات طويلة من العمل في ظروف متغيرة، مع ضرورة الالتزام بمعايير السلامة الصارمة.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستكشف كيف يدفع الابتكار في تصميم ملابس طاقم الطائرة حدود التكنولوجيا والتصميم، وكيف تساهم هذه الابتكارات في تحسين تجربة العمل للطاقم وتعزيز صورة شركات الطيران في عيون المسافرين. سنتناول أيضاً التحديات الفريدة التي تواجه المصممين والحلول المبتكرة التي يقدمونها، إضافة إلى استشراف مستقبل تصميم هذه الملابس في عصر يتسم بالتغير السريع والتقدم التكنولوجي المستمر.
              </p>
        </section>

            <section id="innovation-importance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أهمية الابتكار في ملابس الطاقم</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="مضيفات يرتدين أزياء طيران مبتكرة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تصاميم مبتكرة لملابس المضيفات | المصدر: معرض أزياء الطيران العالمي
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التميز البصري والهوية المؤسسية</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">يساهم الابتكار في تصميم ملابس الطاقم في:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تعزيز صورة العلامة التجارية وتمييزها بصرياً عن المنافسين</li>
                  <li>خلق انطباع أولي إيجابي ودائم لدى المسافرين</li>
                  <li>تجسيد قيم ورؤية شركة الطيران من خلال عناصر التصميم</li>
                  <li>تعزيز الشعور بالفخر والانتماء لدى أفراد الطاقم</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تحسين الأداء الوظيفي</h3>
                  <p className="mb-2 text-gray-700">الابتكارات الوظيفية تؤدي إلى:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>تعزيز حرية الحركة خلال أداء المهام المختلفة</li>
                    <li>تقليل التعب والإجهاد خلال الرحلات الطويلة</li>
                    <li>تحسين القدرة على التعامل مع حالات الطوارئ</li>
                    <li>تكيف أفضل مع التغيرات في درجات الحرارة والضغط</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التأثير الاقتصادي</h3>
                  <p className="mb-2 text-gray-700">العوائد الاستثمارية للابتكار:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تقليل تكاليف الصيانة والاستبدال على المدى الطويل</li>
                    <li>تعزيز قيمة العلامة التجارية وجاذبيتها</li>
                    <li>تحسين رضا الموظفين وتقليل معدل دوران العمالة</li>
                    <li>تأثير إيجابي على تجربة العملاء ومعدلات الولاء</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="design-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر الرئيسية في التصميم المبتكر</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">التوازن بين الجمال والوظيفة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تحقيق المعادلة الصعبة في التصميم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>خطوط أنيقة مع مرونة كافية للحركة</li>
                    <li>ألوان جذابة تحتفظ ببريقها رغم الاستخدام المتكرر</li>
                    <li>تفاصيل دقيقة تعزز الأناقة دون التضحية بالراحة</li>
                    <li>تناغم بين مختلف قطع الزي للحصول على مظهر متكامل</li>
          </ul>
                </div>
              </div>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="عناصر تصميم أزياء طاقم الطائرة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  عناصر التصميم المبتكر في أزياء طاقم الطائرة | المصدر: مركز الابتكار في تصميم الأزياء
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الارجونوميكس وهندسة الراحة</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">تطبيق مبادئ علم الحركة والراحة البشرية:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>دراسة حركات الجسم الشائعة خلال أداء المهام للطاقم</li>
                  <li>تصميم قصات تسمح بمدى حركة أوسع في المناطق الحيوية</li>
                  <li>توزيع متوازن للوزن والضغط لتقليل الإجهاد العضلي</li>
                  <li>حلول مبتكرة للتخزين والجيوب لتسهيل الوصول للأدوات الضرورية</li>
          </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التنوع والشمولية</h3>
                  <p className="mb-2 text-gray-700">تصاميم تناسب مختلف الأشخاص:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>مقاسات شاملة تناسب مختلف أنماط الجسم</li>
                    <li>خيارات متنوعة تراعي الاختلافات الثقافية والدينية</li>
                    <li>حلول مبتكرة للاحتياجات الخاصة</li>
                    <li>تصاميم غير نمطية تتجاوز القوالب التقليدية</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التكيف مع البيئات المتغيرة</h3>
                  <p className="mb-2 text-gray-700">تصاميم مرنة للظروف المختلفة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>نظام الطبقات للتكيف مع اختلاف درجات الحرارة</li>
                    <li>قابلية التعديل حسب الوجهات والمواسم</li>
                    <li>حلول للانتقال السلس بين البيئات المكيفة والخارجية</li>
                    <li>تصاميم تعمل بكفاءة في ظروف الرطوبة والجفاف المختلفة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="materials-tech" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المواد والتقنيات الحديثة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الأقمشة الذكية</h3>
                  <p className="mb-2 text-gray-700">تطورات ثورية في عالم النسيج:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة تعديل الحرارة تتكيف مع درجات حرارة الجسم</li>
                    <li>نسيج مقاوم للسوائل والبقع مع الحفاظ على النفاذية</li>
                    <li>ألياف خفيفة فائقة المتانة</li>
                    <li>أقمشة مضادة للميكروبات لبيئة صحية أفضل</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تقنيات الحياكة المتقدمة</h3>
                  <p className="mb-2 text-gray-700">أساليب مبتكرة في تصنيع الملابس:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>الحياكة ثلاثية الأبعاد للمناطق التي تتطلب دعماً إضافياً</li>
                    <li>تقنيات لصق متقدمة بديلة عن الخياطة التقليدية</li>
                    <li>الحياكة الذكية التي تسمح بمرونة مختلفة حسب مناطق الجسم</li>
                    <li>الطباعة المباشرة على الأقمشة لتصاميم أكثر استدامة</li>
          </ol>
                </div>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="تقنيات حديثة في صناعة ملابس الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  مواد وتقنيات حديثة في تصنيع ملابس طاقم الطائرة | المصدر: معرض الابتكار في صناعة النسيج
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الاستدامة في المواد والإنتاج</h3>
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="mb-2 font-medium text-blue-700">توجه عالمي نحو ممارسات أكثر استدامة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>استخدام مواد معاد تدويرها من زجاجات البلاستيك والمخلفات النسيجية</li>
                  <li>أقمشة طبيعية وعضوية بتأثير بيئي أقل</li>
                  <li>عمليات إنتاج منخفضة استهلاك الماء والطاقة</li>
                  <li>ألياف مستدامة جديدة مثل الليوسيل والتنسل والخيزران</li>
                  <li>تصميم للتدوير (Design for Recycling) يسهل إعادة تدوير الملابس بعد انتهاء عمرها</li>
          </ul>
              </div>
        </section>

            <section id="challenges" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تحديات التصميم وحلول مبتكرة</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">تحديات فريدة في مجال الطيران</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">عقبات تواجه مصممي ملابس طاقم الطائرة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>التغيرات المفاجئة في درجات الحرارة والضغط</li>
                    <li>ساعات عمل طويلة في مساحات محدودة</li>
                    <li>متطلبات سلامة صارمة ومتطورة باستمرار</li>
                    <li>الحاجة إلى التمييز البصري مع الحفاظ على الجانب العملي</li>
                    <li>تنوع المهام من خدمة المسافرين إلى التعامل مع حالات الطوارئ</li>
          </ul>
                </div>
              </div>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="حلول مبتكرة لتحديات تصميم ملابس الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  حلول مبتكرة للتوفيق بين السلامة والراحة والأناقة | المصدر: مؤتمر ابتكارات صناعة الطيران
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">ابتكارات في مجال السلامة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">مقاومة الحريق المتقدمة</h3>
                  <p className="mb-2 text-gray-700">تطورات في مجال حماية الطاقم:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة ذاتية الإطفاء في حال تعرضها للحريق</li>
                    <li>ألياف متطورة تتحمل درجات حرارة عالية دون الذوبان</li>
                    <li>معالجات نانوية تعزز مقاومة الاشتعال</li>
                    <li>تصاميم متكاملة مع معدات السلامة الشخصية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تعزيز الرؤية والتمييز</h3>
                  <p className="mb-2 text-gray-700">حلول لتحديد طاقم المقصورة بسرعة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>عناصر عاكسة مدمجة بأناقة في التصميم</li>
                    <li>ألوان محددة تسهل التمييز في ظروف الإضاءة المنخفضة</li>
                    <li>شارات وعلامات واضحة لتحديد المسؤوليات</li>
                    <li>تقنيات الإضاءة الذاتية للاستخدام في حالات الطوارئ</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="future-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اتجاهات مستقبلية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التكنولوجيا القابلة للارتداء</h3>
                <p className="mb-2 font-medium text-blue-700">دمج الأجهزة الإلكترونية في الزي الموحد:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>شارات ذكية مزودة بمستشعرات لمراقبة البيئة المحيطة</li>
                  <li>أنظمة اتصال مدمجة في تصميم الزي</li>
                  <li>مساعدات رقمية شخصية متكاملة لتسهيل التواصل وتسجيل البيانات</li>
                  <li>أنظمة تتبع الصحة والسلامة لمراقبة الإجهاد وإدارة الراحة</li>
          </ul>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="مستقبل تصميم ملابس طاقم الطائرة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تصورات مستقبلية لأزياء طاقم الطائرة | المصدر: معرض مستقبل صناعة الطيران
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">التخصيص المتقدم</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الحلول المخصصة</h3>
                  <p className="mb-2 text-gray-700">تقنيات التخصيص الجماعي:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>مسح ثلاثي الأبعاد للجسم لتصنيع ملابس مخصصة بدقة</li>
                    <li>أنظمة رقمية لتتبع التفضيلات الشخصية للطاقم</li>
                    <li>منصات تسمح بدرجة من التخصيص ضمن الإطار العام للتصميم</li>
                    <li>إنتاج مرن للقطع حسب الطلب لتقليل الفائض</li>
          </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الواقع المعزز في التصميم</h3>
                  <p className="mb-2 text-gray-700">استخدام التقنيات الرقمية المتقدمة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تطبيقات تتيح تجربة الزي افتراضياً قبل التصنيع</li>
                    <li>أنظمة محاكاة متطورة لاختبار أداء التصاميم في بيئات مختلفة</li>
                    <li>تقنيات ذكاء اصطناعي لتحليل حركة الجسم وتحسين القصات</li>
                    <li>نمذجة رقمية تقلل من استهلاك الموارد في مرحلة التطوير</li>
          </ul>
                </div>
              </div>
        </section>

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