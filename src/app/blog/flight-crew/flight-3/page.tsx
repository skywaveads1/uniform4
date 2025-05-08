import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'أزياء الطيران النسائية: تطورها وخصائصها الحديثة',
  description: 'استكشاف تاريخ وتطور أزياء الطيران النسائية، والاتجاهات الحديثة في تصميمها، والتحديات التي تواجهها، وكيف تجمع بين الأناقة والوظيفية والراحة.',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/female_male_air_crew_wear.jpeg';
  const title = 'أزياء الطيران النسائية: تطورها وخصائصها الحديثة';
  const readingTime = '5 دقائق';
  const datePublished = '٢٥ مايو ٢٠٢٣';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'history', title: 'التطور التاريخي لأزياء الطيران النسائية' },
    { id: 'modern', title: 'خصائص الأزياء الحديثة' },
    { id: 'challenges', title: 'التحديات والحلول المبتكرة' },
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
                  <Link href="/blog/flight-crew/flight-1" className="text-sm hover:text-blue-600 block">
                    اعتبارات تصميم زي شركات الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-2" className="text-sm hover:text-blue-600 block">
                    اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة
                  </Link>
                </li>
                <li>
                  <Link href="/blog/flight-crew/flight-7" className="text-sm hover:text-blue-600 block">
                    متطلبات السلامة والأمان في تصميم ملابس طاقم الطائرة
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
                لطالما كانت أزياء الطيران النسائية عنواناً للأناقة والتميز في صناعة الطيران، ومرآة تعكس التغيرات الاجتماعية والثقافية في نظرة المجتمع للمرأة العاملة. من البدايات المتواضعة في الأربعينيات حيث استوحيت التصاميم من الزي العسكري والتمريضي، إلى تصاميم اليوم التي تجمع بين التطور التكنولوجي والوعي البيئي، شهدت هذه الأزياء رحلة تطور مثيرة عكست كل مرحلة من مراحلها روح عصرها وتحدياته.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                وفي الوقت الحاضر، أصبحت أزياء الطيران النسائية تواجه تحديات غير مسبوقة تتمثل في ضرورة الموازنة بين عوامل متعددة ومتباينة: التنوع الثقافي والديني للطاقم والمسافرين، الراحة والوظيفية لساعات العمل الطويلة، الهوية المميزة للعلامة التجارية، معايير السلامة الصارمة، والتوجه المتزايد نحو الاستدامة والمسؤولية البيئية.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                في هذا المقال، نستعرض رحلة تطور أزياء الطيران النسائية عبر العصور، ونلقي الضوء على الخصائص والاتجاهات الحديثة في تصميمها، والتحديات والفرص التي تواجه مصممي هذه الأزياء اليوم. كما نستكشف كيف تسهم هذه الأزياء في تعزيز صورة شركات الطيران وهويتها، وفي دعم المضيفات لتقديم أفضل مستويات الخدمة والسلامة على متن الطائرات.
              </p>
            </section>

            <section id="history" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التطور التاريخي لأزياء الطيران النسائية</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">بدايات متواضعة: من الممرضات إلى المضيفات (1930-1950)</h3>
                <p className="mb-2 font-medium text-blue-700">المرحلة التأسيسية:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>بدأت مهنة مضيفة الطيران في عام 1930 مع تعيين إلين تشيرتش أول مضيفة في شركة بوينج إير ترانسبورت</li>
                  <li>كانت المتطلبات الأولى تشترط أن تكون المضيفات ممرضات مسجلات، مما أثر على تصميم الزي الأول</li>
                  <li>الزي الأول كان مستوحى من الزي العسكري: بدلات محافظة، قبعات رسمية، وأزرار معدنية</li>
                  <li>ألوان داكنة (كحلي، رمادي، أسود) وأقمشة ثقيلة كالصوف لإضفاء طابع الجدية والاحترافية</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">العصر الذهبي للطيران: الأناقة والتحرر (1950-1970)</h3>
                  <p className="mb-2 text-gray-700">الانتقال من التوحيد إلى التنوع:</p>
                  <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                    <li>تحول من البدلات الرسمية إلى تصاميم أكثر أنوثة وعصرية</li>
                    <li>ألوان أكثر حيوية وإشراقًا تعكس روح عصر الازدهار</li>
                    <li>تصاميم مستوحاة من أحدث صيحات الموضة العالمية</li>
                    <li>ظهور الإكسسوارات المميزة كالقفازات والقبعات الأنيقة</li>
                  </ol>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">عصر العولمة والتنوع (1980-2000)</h3>
                  <p className="mb-2 text-gray-700">تأثير العولمة والانفتاح:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>دمج عناصر من الثقافات المختلفة في التصاميم العالمية</li>
                    <li>تطوير أزياء تحترم التنوع الديني والثقافي للمضيفات</li>
                    <li>التحول من الرؤية الموحدة إلى مجموعات أكثر تنوعًا</li>
                    <li>تصاميم عملية تناسب الرحلات الطويلة عبر القارات</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="modern" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">خصائص الأزياء الحديثة</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">أقمشة متطورة وتقنيات حديثة</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تكنولوجيا النسيج المتقدمة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة مقاومة للتجعد تحافظ على المظهر الأنيق طوال الرحلة</li>
                    <li>أنسجة مضادة للبقع والسوائل لسهولة التنظيف والعناية</li>
                    <li>خامات تنظم درجة الحرارة وتمتص الرطوبة لراحة أكبر</li>
                    <li>أقمشة خفيفة الوزن ومرنة تسمح بحرية الحركة</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mt-6 mb-3 text-blue-800">تصاميم متعددة الاستخدامات</h3>
              <div className="border-r-4 border-blue-200 pr-4 py-2 mb-6">
                <p className="mb-2 font-medium text-gray-700">المرونة والتكيف:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5 text-gray-700">
                  <li>أنظمة متعددة القطع يمكن تنسيقها بطرق مختلفة</li>
                  <li>تصاميم قابلة للتعديل للتكيف مع الظروف المناخية المختلفة</li>
                  <li>خيارات للتبديل بين القطع لتناسب مراحل الرحلة المختلفة</li>
                  <li>تصاميم كبسولية تسمح بإضافة أو إزالة طبقات حسب الحاجة</li>
                </ol>
              </div>
            </section>

            <section id="challenges" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التحديات والحلول المبتكرة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التنوع الثقافي والشمولية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">تحديات الاحتواء الثقافي:</p>
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>تطوير أزياء تحترم الخصوصية الدينية والثقافية</li>
                      <li>خيارات للحجاب وملابس محتشمة تتناسب مع الهوية</li>
                      <li>الموازنة بين الهوية الموحدة والتنوع الثقافي</li>
                      <li>تصاميم تناسب مختلف أنماط الجسم والأعمار</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الاستدامة والمسؤولية البيئية</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <p className="mb-2 text-gray-700">المستقبل الأخضر:</p>
                    <ol className="list-decimal list-inside space-y-2 mr-3 text-gray-700">
                      <li>استخدام أقمشة معاد تدويرها ومستدامة</li>
                      <li>تقليل البصمة الكربونية في عمليات الإنتاج</li>
                      <li>تصاميم متينة لإطالة عمر الزي وتقليل الاستهلاك</li>
                      <li>برامج إعادة تدوير الأزياء القديمة</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الخلاصة</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <p className="mb-4 leading-7 text-gray-700">
                  تمثل أزياء الطيران النسائية مجالاً مثيراً يجمع بين التاريخ العريق والتطور المستمر، وبين التقاليد المتوارثة والابتكار المتواصل. لقد عكست هذه الأزياء، عبر تطورها التاريخي، التغيرات الاجتماعية والثقافية في مكانة المرأة ودورها، وتحولت من مجرد علامة على الأناقة والجاذبية إلى تعبير عن الاحترافية والتمكين والتنوع.
                </p>
                <p className="mb-4 leading-7 text-gray-700">
                  اليوم، يواجه مصممو أزياء الطيران النسائية تحديات متعددة تتطلب موازنة دقيقة بين اعتبارات متباينة: الحفاظ على الهوية المميزة للعلامة التجارية مع احترام التنوع الثقافي، تحقيق أقصى درجات الراحة والوظيفية دون التضحية بالأناقة، الالتزام بمعايير السلامة الصارمة مع تبني الابتكارات التكنولوجية، والاستجابة للمتطلبات البيئية مع مراعاة الاعتبارات الاقتصادية.
                </p>
                <p className="mb-4 leading-7 text-gray-700">
                  ومع استمرار تطور صناعة الطيران وتغير توقعات المسافرين والمعايير الاجتماعية، ستظل أزياء الطيران النسائية مجالاً للإبداع والابتكار، وستستمر في التطور لتعكس القيم المعاصرة وتلبي الاحتياجات المتجددة. والشركات التي ستنجح في هذا المجال هي تلك التي ستتمكن من تحقيق التوازن الأمثل بين التراث والحداثة، وبين الهوية الموحدة والتنوع الشامل، وبين الجمال الخارجي والرفاهية الداخلية للمضيفات اللواتي يمثلن واجهة شركات الطيران أمام العالم.
                </p>
              </div>
            </section>

            {/* قسم التعليقات */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-6">التعليقات</h3>
              <p className="text-gray-600 mb-4">شاركنا رأيك حول هذا المقال</p>
              
              <form className="mb-8">
                <div className="mb-4">
                  <textarea 
                    placeholder="أضف تعليقك هنا..." 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3"
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex gap-4 mb-4">
                  <input 
                    type="text" 
                    placeholder="الاسم" 
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                  />
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني" 
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  إرسال التعليق
                </button>
              </form>
            </div>

            {/* زر العودة للأعلى */}
            <div className="fixed bottom-8 left-8">
              <a 
                href="#top" 
                className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
                aria-label="العودة للأعلى"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 