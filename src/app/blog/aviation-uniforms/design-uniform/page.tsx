import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';
import { AuthorBio } from '@/components/AuthorBio';
import { RelatedPosts } from '@/components/RelatedPosts';

export const metadata = {
  title: 'مبادئ تصميم زي الطيران: دليل شامل',
  description: 'استعراض المبادئ الأساسية والمعايير المهنية في تصميم أزياء الطيران وكيفية تحقيق التوازن بين الوظيفة والأناقة',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_uniform_design.jpeg';
  const title = 'مبادئ تصميم زي الطيران: دليل شامل';
  const readingTime = '14 دقائق';
  const datePublished = '٨ مايو ٢٠٢٤';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة في مبادئ تصميم زي الطيران' },
    { id: 'basic-principles', title: 'المبادئ الأساسية في تصميم زي الطيران' },
    { id: 'essential-elements', title: 'العناصر الأساسية في تصميم زي الطيران' },
    { id: 'materials-colors', title: 'اعتبارات المواد والألوان في تصميم زي الطيران' },
    { id: 'design-cycle', title: 'دورة تصميم زي الطيران: من الفكرة إلى التنفيذ' },
    { id: 'successful-examples', title: 'أمثلة ناجحة في تصميم زي الطيران' },
    { id: 'future-trends', title: 'اتجاهات مستقبلية في تصميم زي الطيران' },
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
                  <Link href="/blog/aviation-uniforms/in-design-uniform-aviation-Saudi" className="text-sm hover:text-blue-600 block">
                    تصميم أزياء الطيران في المملكة العربية السعودية
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/cabin-crew-uniform-fabric-selection" className="text-sm hover:text-blue-600 block">
                    اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/aviation-uniforms/airline-corporate-identity-uniforms" className="text-sm hover:text-blue-600 block">
                    أزياء شركات الطيران كعنصر في الهوية المؤسسية
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة في مبادئ تصميم زي الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يعتبر تصميم زي الطيران من المجالات المتخصصة التي تجمع بين علم التصميم والوظيفية العملية والهوية المؤسسية. ويتطلب هذا المجال فهماً عميقاً للتوازن الدقيق بين الجمال والراحة والمتانة، مع مراعاة متطلبات السلامة والأمان الخاصة بصناعة الطيران.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
          في هذا المقال، نستعرض المبادئ الأساسية التي يجب مراعاتها عند تصميم زي الطيران، والعناصر التي تميز التصاميم الناجحة، مع تقديم نماذج وأمثلة من شركات طيران مختلفة حول العالم. يهدف هذا الدليل إلى توفير رؤية شاملة للمصممين والمهتمين بهذا المجال المتخصص.
              </p>
            </section>

            <section id="basic-principles" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المبادئ الأساسية في تصميم زي الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يقوم تصميم زي الطيران الناجح على مجموعة من المبادئ الأساسية التي تضمن تحقيق جميع الأهداف المرجوة منه.
              </p>
        
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
          src="/images/aviation_uniforms/airline_uniform_design.jpeg"
          alt="مبادئ تصميم زي الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  المبادئ الأساسية التي تحكم عملية تصميم زي الطيران | المصدر: مجلة تصميم الأزياء المهنية
                </div>
              </div>
        
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">المبادئ الأساسية لتصميم زي الطيران</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">التوازن بين الوظيفة والجمال:</span> في قلب تصميم زي الطيران يكمن التحدي الأكبر: كيف نصمم زياً وظيفياً يلبي متطلبات العمل المتنوعة، ويوفر في الوقت نفسه مظهراً أنيقاً يعكس احترافية الطاقم وهوية الشركة؟ يتطلب تحقيق هذا التوازن دراسة متأنية للمهام اليومية التي يقوم بها طاقم الطائرة، والعوامل التي تؤثر على أدائهم وراحتهم.</li>
                    <li><span className="font-medium">الملاءمة للهوية المؤسسية:</span> يعتبر زي الطيران امتداداً مرئياً لهوية شركة الطيران وقيمها. لذلك، يجب أن يعكس التصميم شخصية العلامة التجارية من خلال استخدام الألوان والرموز والأشكال التي تتوافق مع الهوية البصرية للشركة، مع مراعاة القيم التي تريد الشركة إيصالها.</li>
                    <li><span className="font-medium">مراعاة التنوع والشمولية:</span> من المبادئ الحديثة التي أصبحت ضرورية في تصميم أزياء الطيران مراعاة التنوع في أشكال وأحجام وثقافات أفراد الطاقم. ويتطلب ذلك تصميمات تناسب مختلف الأجسام والإثنيات، وتحترم الخصوصيات الثقافية والدينية للموظفين.</li>
                    <li><span className="font-medium">الاستجابة للتحديات البيئية:</span> نظراً لأن طاقم الطائرة يعمل في بيئات متنوعة ومتغيرة، يجب أن يستجيب التصميم للاحتياجات المختلفة في ظروف مختلفة: من الحرارة الشديدة في المطارات الاستوائية إلى البرودة في المقصورة المكيفة، ومن التحرك بحرية أثناء تقديم الخدمة إلى الجلوس لفترات طويلة.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">حقيقة مثيرة للاهتمام</h3>
                <p className="leading-7 text-gray-700">
            وفقاً لدراسة أجرتها منظمة النقل الجوي الدولية (IATA)، فإن شركات الطيران التي تستثمر في تصميم أزياء تلبي متطلبات الراحة والوظيفية بشكل متوازن تسجل مستويات رضا وظيفي أعلى لدى طاقم الطائرة بنسبة 23%، مما ينعكس إيجاباً على جودة الخدمة المقدمة للركاب.
                </p>
              </div>
            </section>

            <section id="essential-elements" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">العناصر الأساسية في تصميم زي الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يتكون زي الطيران من مجموعة من العناصر الأساسية التي تشكل معاً المظهر الكامل للطاقم، ولكل منها اعتبارات تصميمية خاصة.
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">عناصر زي الطيران الأساسية</h3>
                <p className="mb-2 font-medium text-blue-700">المكونات الرئيسية للزي المتكامل:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>البدلة أو الجاكيت (للطيارين والمضيفين): تمثل العنصر الأكثر رسمية وتحمل عادة شارات الرتبة والهوية</li>
                  <li>القميص/البلوزة: يوفر الراحة ويعكس ألوان الشركة، مع متطلبات عملية مثل مقاومة التجعد</li>
                  <li>البنطلون/التنورة: يجب أن تسمح بحرية الحركة مع الحفاظ على المظهر الأنيق</li>
                  <li>الإكسسوارات: مثل ربطات العنق، الأوشحة، القبعات، والشارات التي تكمل المظهر وتعزز الهوية</li>
                  <li>الأحذية: عنصر أساسي يجمع بين الأناقة والراحة، مع مراعاة احتياجات السلامة</li>
                  <li>الملابس الخارجية: معاطف ومعاطف واقية من المطر للحماية في مختلف الظروف الجوية</li>
                </ul>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
          يجب أن تتكامل هذه العناصر معاً لتشكل مظهراً متناسقاً يعكس الصورة المهنية المطلوبة. وتختلف التفاصيل بين شركات الطيران المختلفة، لكن المبادئ العامة في التصميم تظل متشابهة.
              </p>
            </section>

            <section id="materials-colors" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اعتبارات المواد والألوان في تصميم زي الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تلعب المواد والألوان دوراً حاسماً في نجاح تصميم زي الطيران، وتخضع لاعتبارات متعددة تتجاوز الجوانب الجمالية.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">اختيار المواد المناسبة</h3>
                  <p className="mb-2 text-gray-700">العوامل المؤثرة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>التوازن بين المتانة والراحة</li>
                    <li>مقاومة التجعد والبقع</li>
                    <li>قابلية التنفس وتنظيم الحرارة</li>
                    <li>سهولة العناية والغسيل</li>
                    <li>المناسبة لمختلف المناخات</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">دور الألوان ودلالاتها</h3>
                  <p className="mb-2 text-gray-700">التأثير والاستخدام:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>التعبير عن هوية شركة الطيران</li>
                    <li>الدلالات النفسية والثقافية للألوان</li>
                    <li>الألوان الداكنة للقطع الرئيسية</li>
                    <li>ألوان مميزة للإكسسوارات والتفاصيل</li>
                  </ul>
                </div>
              </div>
        
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
          src="/images/aviation_uniforms/airline_uniform_design.jpeg"
          alt="المواد والألوان في زي الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
        />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تأثير اختيار المواد والألوان على المظهر النهائي لزي الطيران | المصدر: معهد تصميم الأزياء المهنية
                </div>
              </div>
        
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <p className="italic text-gray-700 border-r-4 border-blue-300 pr-4 py-2 mb-4">
          "في تصميم زي الطيران، الألوان ليست مجرد عناصر جمالية، بل هي أدوات قوية للتواصل والتعبير عن هوية الشركة. اختيار اللون المناسب يتطلب فهماً عميقاً للتاريخ والثقافة والقيم التي تمثلها شركة الطيران."
                </p>
                <p className="text-sm text-gray-600 text-left">- ليلى الراشد، مصممة أزياء طيران عالمية</p>
              </div>
            </section>

            <section id="design-cycle" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دورة تصميم زي الطيران: من الفكرة إلى التنفيذ</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تمر عملية تصميم زي الطيران بسلسلة من المراحل المنظمة، تضمن الوصول إلى نتيجة تلبي جميع المتطلبات.
              </p>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">مراحل تصميم زي الطيران</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">البحث والدراسة:</span> دراسة هوية شركة الطيران وقيمها، واحتياجات الطاقم والمهام التي يقومون بها، وتحليل الاتجاهات الحالية في تصميم أزياء الطيران.</li>
                    <li><span className="font-medium">وضع المفهوم والرؤية:</span> تطوير رؤية شاملة للزي الجديد وإعداد لوحات الإلهام (Mood Boards) التي تجمع الأفكار والاتجاهات البصرية المقترحة.</li>
                    <li><span className="font-medium">التصميم الأولي:</span> ترجمة الرؤية إلى رسومات وتصاميم أولية، وتجربة مجموعات لونية وقصات متنوعة للوصول إلى التوازن المطلوب.</li>
                    <li><span className="font-medium">النماذج الأولية والاختبارات:</span> إنتاج نماذج للتصاميم المختارة واختبارها في ظروف مشابهة لبيئة العمل، مع مشاركة الطاقم في التقييم.</li>
                    <li><span className="font-medium">التعديل والتحسين:</span> إجراء تعديلات بناءً على نتائج الاختبارات والملاحظات، والوصول إلى التصميم الأمثل.</li>
                    <li><span className="font-medium">الإنتاج والتنفيذ:</span> وضع مواصفات تفصيلية للتصنيع واختيار المواد النهائية وتحديد المقاسات المختلفة.</li>
                    <li><span className="font-medium">التدريب والإطلاق:</span> تدريب الطاقم على كيفية ارتداء الزي والعناية به، ثم إطلاق الزي الجديد مع حملة إعلامية مناسبة.</li>
                  </ol>
                </div>
              </div>
        
              <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-800">نصيحة من الخبراء</h3>
                <p className="leading-7 text-gray-700">
            من الممارسات الفضلى في مشاريع تصميم زي الطيران إشراك ممثلين من مختلف أقسام طاقم الطائرة في جميع مراحل العملية، من البحث الأولي إلى اختبار النماذج النهائية. هذا يضمن تلبية التصميم للاحتياجات العملية للطاقم، ويخلق شعوراً بالملكية والفخر بالزي الجديد.
                </p>
              </div>
            </section>

            <section id="successful-examples" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">أمثلة ناجحة في تصميم زي الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
          تقدم صناعة الطيران العالمية العديد من الأمثلة الرائدة في تصميم الأزياء، حيث نجحت شركات مختلفة في إبداع تصاميم مميزة تعكس هويتها الفريدة.
              </p>
        
              <div className="space-y-6 mb-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">طيران الإمارات: الأناقة التقليدية مع لمسة عصرية</h3>
                  <p className="mb-2 text-gray-700">
            يعتبر زي طيران الإمارات من التصاميم الأكثر تميزاً، حيث يجمع بين العناصر التقليدية الخليجية والأناقة العالمية. الزي المعروف بقبعته الحمراء المميزة ووشاح الرأس الأبيض يعكس التراث الإماراتي، بينما تضفي القصات العصرية والتفاصيل الأنيقة طابعاً دولياً.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الخطوط الجوية السنغافورية: البساطة والإتقان</h3>
                  <p className="mb-2 text-gray-700">
            اشتهرت الخطوط السنغافورية بأزيائها الأنيقة المستوحاة من الثوب التقليدي "الساري". يتميز التصميم بالبساطة والاهتمام بالتفاصيل، واستخدام أنماط وألوان متناسقة تعكس الهوية الآسيوية مع لمسة عالمية.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الخطوط الجوية السعودية: التراث والمعاصرة</h3>
                  <p className="mb-2 text-gray-700">
            قدمت الخطوط السعودية نموذجاً ناجحاً في دمج العناصر التراثية السعودية مع التصميم العصري. يتميز الزي الجديد باستخدام ألوان العلم السعودي بطريقة أنيقة، مع إدخال عناصر من الزخارف التقليدية في التفاصيل.
                  </p>
                </div>
              </div>

              <p className="mb-4 leading-7 text-gray-700">
          تظهر هذه الأمثلة كيف يمكن للتصميم الناجح أن يعكس الهوية الثقافية للشركة مع تلبية المتطلبات العملية، وكيف يمكن للتفاصيل الصغيرة أن تخلق تأثيراً كبيراً في المظهر العام.
              </p>
            </section>

            <section id="future-trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اتجاهات مستقبلية في تصميم زي الطيران</h2>
              <p className="mb-4 leading-7 text-gray-700">
          يشهد مجال تصميم زي الطيران تطورات مستمرة، مدفوعة بالتغيرات في صناعة الطيران والتكنولوجيا والاتجاهات الاجتماعية.
              </p>
        
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
          src="/images/aviation_uniforms/airline_uniform_design.jpeg"
          alt="مستقبل أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm text-center">
                  تصور لاتجاهات مستقبلية في تصميم زي الطيران | المصدر: معرض الابتكار في صناعة الطيران 2024
                </div>
              </div>
        
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">اتجاهات تصميم زي الطيران المستقبلية</h3>
                <p className="mb-2 font-medium text-blue-700">التطورات المتوقعة في المستقبل القريب:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>تكنولوجيا المنسوجات الذكية: أقمشة تنظم الحرارة، مقاومة للميكروبات، قادرة على التكيف مع البيئة</li>
                  <li>الاستدامة والمسؤولية البيئية: مواد معاد تدويرها، مواد طبيعية مستدامة، عمليات إنتاج صديقة للبيئة</li>
                  <li>التخصيص والتنوع: خيارات متنوعة تراعي الاختلافات الفردية والثقافية ضمن إطار موحد</li>
                  <li>التصميم المتكامل الوظائف: قطع متعددة الوظائف، قابلة للتعديل، يمكن ارتداؤها بطرق متعددة</li>
                </ul>
              </div>
            </section>
        
            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يعد تصميم زي الطيران مجالاً متخصصاً يتطلب الموازنة بين اعتبارات متعددة، من الهوية المؤسسية والأناقة إلى الراحة والوظيفية والمتانة. ويتطلب النجاح في هذا المجال فهماً عميقاً لطبيعة عمل طاقم الطائرة ومتطلباتهم، مع إلمام بتقنيات التصميم واتجاهات الموضة العالمية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                مع التطور المستمر في تقنيات صناعة الأقمشة والاهتمام المتزايد بالاستدامة والشمولية، يشهد مجال تصميم زي الطيران تحولات مهمة تفتح آفاقاً جديدة للإبداع والابتكار. ويبقى التحدي الأكبر هو تحقيق التوازن الأمثل بين جميع العناصر، للوصول إلى تصميم يعزز صورة الشركة ويوفر تجربة إيجابية لكل من الطاقم والمسافرين.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في النهاية، يمكن القول إن الزي الناجح ليس مجرد ملابس أنيقة، بل هو تعبير بصري عن هوية شركة الطيران، وأداة وظيفية تؤثر على أداء الطاقم وراحتهم، وعنصر أساسي من عناصر تجربة السفر الجوي المتكاملة.
              </p>
            </section>

            {/* Author Bio Section */}
            <div className="mb-12">
              <AuthorBio 
                author="محمد القحطاني" 
                image="/images/author/mohammed_al_qahtani.jpg" 
                title="خبير في تصميم أزياء الطيران والأزياء المهنية"
              />
            </div>

            {/* Related Posts Section */}
            <div className="mb-10">
              <RelatedPosts 
                currentCategory="aviation-uniforms" 
                currentSlug="design-uniform"
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