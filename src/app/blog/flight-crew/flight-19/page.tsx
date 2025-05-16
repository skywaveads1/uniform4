import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الزي الموحد لموظفي الخدمات الأرضية في المطارات',
  description: 'نظرة شاملة على الزي الموحد لموظفي الخدمات الأرضية في المطارات، تصميمه، وظائفه، وأهميته في العمليات الأرضية وخدمة المسافرين',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/ground_crew_attire.jpeg';
  const title = 'الزي الموحد لموظفي الخدمات الأرضية في المطارات';
  const readingTime = '9 دقائق';
  const datePublished = '١٢ يونيو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'psychological-impact', title: 'الأبعاد النفسية للزي الرسمي' },
    { id: 'identity-belonging', title: 'تعزيز الانتماء والهوية الجماعية' },
    { id: 'professional-performance', title: 'تعزيز المهنية والأداء' },
    { id: 'design-considerations', title: 'تصميم الزي لتعزيز الانتماء والمهنية' },
    { id: 'challenges', title: 'التحديات والاعتبارات' },
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
                  <Link href="/blog/flight-crew/flight-8" className="text-sm hover:text-blue-600 block">
                    دور الأزياء في تعزيز الحضور المهني لطاقم الطائرة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/ground-crew-attire" className="text-sm hover:text-blue-600 block">
                    ملابس طاقم الخدمات الأرضية
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-18" className="text-sm hover:text-blue-600 block">
                    الإكسسوارات المكملة لزي طاقم الطيران
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
                يعمل طاقم الخدمات الأرضية دوراً محورياً في سلسلة عمليات الطيران، إذ يقع على عاتقهم مسؤولية تنفيذ العمليات الحيوية التي تضمن سلامة وراحة المسافرين قبل وبعد الرحلة الجوية. ومن هنا تأتي أهمية تصميم زي متخصص يلبي احتياجاتهم المتنوعة، ويعكس صورة الشركة، ويسهم في تمييزهم بوضوح أمام المسافرين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض الخصائص والمتطلبات الأساسية لملابس طاقم الخدمات الأرضية، والاعتبارات التي تؤخذ في الاعتبار عند تصميمها، وكيفية موازنة الأناقة مع الوظيفية في هذا النوع من الأزياء المتخصصة. كما نلقي الضوء على الاتجاهات الحديثة في تصميم هذه الأزياء والابتكارات التكنولوجية التي تسهم في تعزيز أداء وسلامة طاقم العمليات الأرضية.
              </p>
        </section>

            <section id="psychological-impact" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الأبعاد النفسية للزي الرسمي</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تأثير الزي على الإدراك الذاتي للموظف</h3>
                <p className="mb-2 font-medium text-blue-700">عندما يرتدي العاملون الزي الرسمي، يحدث تحول نفسي في إدراكهم لأنفسهم:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تفعيل ظاهرة "التفكير الملبوس" (Enclothed Cognition) حيث يؤثر ما نرتديه على سلوكنا</li>
                  <li>تعزيز الإحساس بالمسؤولية والالتزام بمعايير الشركة</li>
                  <li>زيادة الشعور بالثقة والاحترافية والكفاءة</li>
                  <li>تحسين الانضباط الذاتي والالتزام بالمعايير المهنية</li>
          </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الزي كمصدر للفخر المهني</h3>
                  <p className="mb-2 text-gray-700">يرتبط الزي الرسمي بمشاعر الفخر والاعتزاز المهني من خلال:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>الارتباط بتاريخ وإرث شركة الطيران وإنجازاتها</li>
                    <li>تمثيل الانتماء لمهنة ذات قيمة ومكانة اجتماعية</li>
                    <li>الإحساس بالتميز والخصوصية المرتبط بالزي المميز</li>
                    <li>زيادة الرضا الوظيفي المرتبط بوضوح الهوية المهنية</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الزي وتقليل الضغط النفسي</h3>
                  <p className="mb-2 text-gray-700">الدور الإيجابي للزي الموحد في التعامل مع ضغوط العمل:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تخفيف القلق المرتبط باختيار الملابس اليومية</li>
                    <li>توفير إطار عمل واضح للتصرف في المواقف المختلفة</li>
                    <li>خلق مسافة نفسية بين الشخصية المهنية والشخصية الخاصة</li>
                    <li>تيسير الانتقال الذهني من وضع الحياة الشخصية إلى بيئة العمل</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="identity-belonging" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تعزيز الانتماء والهوية الجماعية</h2>
              
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="فريق عمل أرضي يرتدي زياً موحداً"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  فريق عمل أرضي يرتدي الزي الموحد لإحدى شركات الطيران | المصدر: مجلة الطيران الدولية
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">بناء الإحساس بالفريق الواحد</h3>
              <div className="border-r-2 border-blue-500 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">يساهم الزي الموحد في تكوين روح الفريق من خلال:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>إلغاء الفوارق الظاهرية والتركيز على الهوية المشتركة</li>
                  <li>تيسير التعرف السريع على أعضاء الفريق خاصة في المواقف الطارئة</li>
                  <li>تعزيز الشعور بالتضامن والدعم المتبادل بين أفراد الطاقم</li>
                  <li>خلق لغة مشتركة غير لفظية للتواصل والتعاون</li>
          </ol>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الزي كرمز للانتماء المؤسسي</h3>
                <p className="mb-2 text-gray-700">كيف يحول الزي الموظف إلى سفير للشركة:</p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>استيعاب وتمثل قيم ورؤية الشركة من خلال الزي الرسمي</li>
                  <li>تعزيز الارتباط العاطفي بالعلامة التجارية والشعور بتمثيلها</li>
                  <li>زيادة الالتزام بالسلوكيات المتوافقة مع قيم المؤسسة</li>
                  <li>تحفيز المشاركة الإيجابية في فعاليات وأنشطة الشركة</li>
          </ul>
              </div>
        </section>

            <section id="professional-performance" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تعزيز المهنية والأداء</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">دور الزي في تحسين الأداء المهني</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">تأثير الزي المناسب على جودة العمل:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>زيادة التركيز على المهام المهنية وتقليل التشتت</li>
                      <li>تعزيز الالتزام بإجراءات وبروتوكولات السلامة والخدمة</li>
                      <li>تحسين مستويات الانضباط والدقة في أداء المهام</li>
                      <li>تسهيل تحول السلوك من الشخصي إلى المهني عند ارتداء الزي</li>
          </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تأثير الزي على إدراك العملاء للمهنية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">كيف يؤثر زي الطاقم على ثقة المسافرين:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>زيادة ثقة المسافرين في كفاءة وقدرات طاقم الطائرة</li>
                      <li>تسهيل التعرف على الطاقم وطلب المساعدة عند الحاجة</li>
                      <li>تعزيز الشعور بالأمان والاطمئنان خلال الرحلة</li>
                      <li>تكوين انطباعات إيجابية عن مستوى خدمات شركة الطيران</li>
          </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الزي والتواصل غير اللفظي</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">أهمية الزي كأداة تواصل لطاقم الطيران:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>نقل معلومات فورية عن دور ومسؤولية الموظف دون الحاجة للشرح</li>
                    <li>استخدام عناصر الزي (مثل الشارات والرتب) لتوضيح التسلسل الهرمي</li>
                    <li>تسهيل التعامل مع المسافرين من مختلف الثقافات واللغات</li>
                    <li>تعزيز التواصل الفعال مع الركاب وبناء الثقة السريعة</li>
          </ul>
                </div>
              </div>
        </section>

            <section id="design-considerations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تصميم الزي لتعزيز الانتماء والمهنية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">عناصر التصميم المؤثرة في الشعور بالانتماء</h3>
                <p className="mb-2 font-medium text-blue-700">خصائص تصميمية تعزز الهوية المشتركة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>استخدام ألوان الشركة الرئيسية بشكل متناسق ومدروس</li>
                  <li>دمج رموز وشعارات تعكس تاريخ وقيم المؤسسة</li>
                  <li>تضمين عناصر مميزة وفريدة تميز الشركة عن منافسيها</li>
                  <li>التوازن بين التوحيد والسماح بلمسات فردية محدودة</li>
          </ul>
              </div>

              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/flight_crew/air_crew_attire.jpeg"
                  alt="تصميم زي فريق العمل الأرضي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تصميم يراعي الراحة والوظيفية مع الحفاظ على الأناقة | المصدر: معهد تصميم أزياء الطيران
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">الموازنة بين الراحة والمظهر المهني</h3>
              <p className="mb-4 leading-7 text-gray-700">
                تعتبر الموازنة بين راحة الموظفين والمظهر الاحترافي من أهم التحديات في تصميم زي طاقم الطيران. فمن جهة، يقضي أفراد الطاقم ساعات طويلة في أداء مهام تتطلب الحركة والنشاط، مما يستدعي ارتداء ملابس مريحة تسمح بحرية الحركة. ومن جهة أخرى، يمثل الزي واجهة الشركة ويجب أن يعكس صورة احترافية وأنيقة تليق بمكانة شركة الطيران.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                يمكن تحقيق هذا التوازن من خلال اختيار أقمشة عالية الجودة توفر المرونة والراحة مع الاحتفاظ بمظهر أنيق، وتصميم قصات تراعي طبيعة الحركة مع الحفاظ على الخطوط الأنيقة، والاهتمام بتفاصيل مثل المرونة في منطقة الخصر والكتفين، واستخدام تقنيات خياطة متطورة تجمع بين المتانة والأناقة.
              </p>
        </section>

            <section id="challenges" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التحديات والاعتبارات</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تحديات التوازن بين الفردية والهوية المشتركة</h3>
                  <p className="mb-2 text-gray-700">صعوبات الموازنة بين التوحيد واحترام الشخصية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تلبية رغبة الموظفين في التعبير عن شخصياتهم</li>
                    <li>تصميم زي يناسب جميع الأعمار والأجيال من الموظفين</li>
                    <li>الموازنة بين القوالب المهنية والتطلعات الشخصية</li>
                    <li>تحديد مساحة "الحرية المقيدة" في اختيار الإكسسوارات والتعديلات</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">تجاوز الصور النمطية التقليدية</h3>
                  <p className="mb-2 text-gray-700">تحديات كسر القوالب التقليدية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تقديم خيارات غير نمطية تتجاوز التقسيمات التقليدية</li>
                    <li>تصميم زي يحترم التنوع الثقافي والديني للموظفين</li>
                    <li>تحديث الأزياء التقليدية دون فقدان الهوية والتراث</li>
                    <li>تقديم خيارات مرنة تناسب مختلف الأذواق والتفضيلات</li>
          </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">المستقبل: الاتجاهات الجديدة في تصميم الزي</h3>
              <p className="mb-4 leading-7 text-gray-700">
                يشهد مجال تصميم أزياء طاقم الطيران تطورات متسارعة تعكس التغيرات في المفاهيم المجتمعية والتكنولوجية. من بين الاتجاهات البارزة: تصاميم أكثر شمولية تناسب مختلف أنماط الجسم والهويات، واعتماد نهج "المجموعة" بدلاً من "الزي الموحد"، حيث يتم توفير عدة خيارات متناسقة يمكن للموظفين الاختيار من بينها، والاستفادة من التكنولوجيا في تطوير أقمشة ذكية توفر راحة أكبر وأداء أفضل.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                كما يتزايد الاهتمام بالاستدامة في تصميم الأزياء، مع توجه العديد من شركات الطيران نحو استخدام مواد صديقة للبيئة، وتصميم قطع متعددة الاستخدامات، وتبني نماذج الاقتصاد الدائري في إنتاج وتداول الزي. هذه التوجهات لا تسهم فقط في تقليل البصمة البيئية لشركات الطيران، بل تعزز أيضاً صورتها كمؤسسات مسؤولة ومواكبة للتطورات العالمية.
          </p>
        </section>
      </article>
        </div>
      </div>
    </main>
  );
} 