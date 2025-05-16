import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الابتكار في تصميم أزياء الطيران',
  description: 'استكشاف للابتكارات الحديثة في تصميم أزياء الطيران والتقنيات المستخدمة لتحقيق التوازن بين الأناقة والوظيفية',
};

export default function ArticlePage() {
  const imageSrc = '/images/aviation/aviation-uniform-innovation.jpeg';
  const title = 'الابتكار في تصميم أزياء الطيران';
  const readingTime = '٥ دقائق';
  const datePublished = '٧ مايو ٢٠٢٤';
  const authorName = 'م. ياسر البليهي';
  const authorImage = '/images/author/ياسر_البليهي.jpg';
  const authorTitle = 'خبير في ابتكارات أزياء الطيران';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'materials', title: 'الابتكارات التقنية في المواد والأقمشة' },
    { id: 'designs', title: 'تصاميم مبتكرة تعكس هوية شركات الطيران' },
    { id: 'tech', title: 'التكنولوجيا الذكية في أزياء الطيران' },
    { id: 'sustainability', title: 'الاستدامة والمسؤولية البيئية' },
    { id: 'conclusion', title: 'خاتمة' },
  ];
  
  const relatedArticles = [
    {
      title: "اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة",
      description: "دليل شامل حول اختيار الأقمشة المناسبة لزي طاقم الطائرة، مع التركيز على معايير الجودة والمتانة والراحة",
      image: "/images/aviation/aviation_uniform.jpeg",
      url: "/blog/flight-crew/flight-2",
      date: "٢٠ مايو ٢٠٢٣",
      category: "أزياء الطيران"
    },
    {
      title: "أثر أزياء طاقم الطائرة على انطباع المسافرين",
      description: "كيف تؤثر أزياء الطيران على تجربة العملاء وانطباعاتهم عن الشركة",
      image: "/images/aviation/aviation_uniform.jpeg",
      url: "/blog/flight-crew/flight-16",
      date: "١٨ أبريل ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "تطور تصميم أزياء الطيران عبر العصور",
      description: "نظرة تاريخية على التغيرات في تصميم أزياء طواقم الطيران وتأثير الموضة عليها",
      image: "/images/aviation/aviation_uniform.jpeg",
      url: "/blog/flight-crew/flight-3",
      date: "٥ مارس ٢٠٢٤",
      category: "أزياء الطيران"
    },
  ];

  const tags = ["أزياء الطيران", "ابتكارات", "تكنولوجيا النسيج", "الاستدامة", "تصميم الأزياء"];

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
                {relatedArticles.map((article, index) => (
                  <li key={index}>
                    <Link href={article.url} className="text-sm hover:text-blue-600 block">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يشهد عالم تصميم أزياء الطيران تطوراً مستمراً مع ظهور ابتكارات وتقنيات حديثة تسعى إلى تحقيق التوازن المثالي بين الأناقة والوظيفية. في هذا المقال، نستكشف أبرز الابتكارات في مجال تصميم أزياء الطيران والتقنيات المتطورة التي تسهم في تطوير هذا القطاع الحيوي.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                لم تعد أزياء الطيران مجرد ملابس تقليدية، بل أصبحت منصة للابتكار والإبداع، حيث تتنافس شركات الطيران على تقديم تصاميم متميزة تجمع بين الراحة والأناقة والمتانة، مع مراعاة اعتبارات السلامة والاستدامة. وتسهم التطورات التكنولوجية الحديثة في دفع عجلة الابتكار في هذا المجال نحو آفاق جديدة.
              </p>
            </section>

            <section id="materials" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الابتكارات التقنية في المواد والأقمشة</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المواد المتقدمة في أزياء الطيران</h3>
                <p className="mb-2 text-gray-700">تشكل المواد والأقمشة المستخدمة في تصميم أزياء الطيران أحد أهم مجالات الابتكار:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>أقمشة مقاومة للتجعد تحافظ على مظهر أنيق طوال ساعات العمل الطويلة</li>
                  <li>مواد خفيفة الوزن عالية المتانة تحقق الراحة دون المساس بالمتانة</li>
                  <li>أقمشة ذكية تتكيف مع درجات الحرارة وتنظم حرارة الجسم</li>
                  <li>مواد مقاومة للبكتيريا والروائح تناسب ساعات العمل الطويلة</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation/aviation_uniform.jpeg"
                  alt="أقمشة متطورة في صناعة أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الأقمشة الذكية تتكيف مع ظروف البيئة المختلفة داخل الطائرة
                </div>
              </div>
            </section>

            <section id="designs" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تصاميم مبتكرة تعكس هوية شركات الطيران</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التصاميم المعاصرة</h3>
                  <p className="mb-2 text-gray-700">اتجاهات التصميم الحديثة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>دمج عناصر من الأزياء العصرية مع متطلبات العمل</li>
                    <li>قصات انسيابية تسمح بحرية الحركة دون التضحية بالأناقة</li>
                    <li>استخدام تقنيات القص والخياطة المتقدمة للراحة المثلى</li>
                    <li>تصاميم متعددة الطبقات تناسب البيئات المختلفة</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التخصيص والتمييز</h3>
                  <p className="mb-2 text-gray-700">تفرد العلامة التجارية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تصاميم فريدة تعكس تراث وثقافة شركة الطيران</li>
                    <li>عناصر مميزة يمكن تمييزها بسهولة بين الشركات المختلفة</li>
                    <li>توظيف مصممي أزياء عالميين لإضفاء لمسة فاخرة</li>
                    <li>مزج العناصر التقليدية مع التصاميم المعاصرة</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="tech" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">التكنولوجيا الذكية في أزياء الطيران</h2>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الإلكترونيات القابلة للارتداء</h3>
                <p className="mb-2 text-gray-700">
                  تدمج التكنولوجيا الذكية بشكل متزايد في تصميم أزياء الطيران، مما يعزز وظائفها وراحة الطاقم.
                </p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>أجهزة استشعار مدمجة لمراقبة الحالة الصحية للطاقم خلال الرحلات الطويلة</li>
                  <li>وصلات بلوتوث مدمجة للتواصل بين أفراد الطاقم دون الحاجة لأجهزة إضافية</li>
                  <li>أنظمة تدفئة وتبريد مدمجة في النسيج للتكيف مع تغيرات درجات الحرارة</li>
                  <li>شاشات مرنة قابلة للارتداء لعرض معلومات الرحلة والتنبيهات الهامة</li>
                </ul>
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">الابتكارات الوظيفية</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تقنيات تعزز الأداء والراحة:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>تقنية النانو للحماية من البقع والسوائل وتسهيل التنظيف</li>
                    <li>أقمشة مضادة للميكروبات تقلل الحاجة للغسيل المتكرر وتمنع انتشار الجراثيم</li>
                    <li>تقنيات الضغط التدريجي لتحسين الدورة الدموية خلال الرحلات الطويلة</li>
                    <li>جيوب وحلول تخزين ذكية تناسب احتياجات العمل في الطائرة</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="sustainability" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الاستدامة والمسؤولية البيئية</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">مبادرات الأزياء المستدامة</h3>
                <p className="mb-2 text-gray-700">
                  يمثل التوجه نحو الاستدامة أحد أبرز الاتجاهات في تصميم أزياء الطيران المعاصرة، مع تزايد الوعي البيئي.
                </p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">مواد معاد تدويرها:</span> استخدام البوليستر المعاد تدويره من البلاستيك وزجاجات المياه</li>
                  <li><span className="font-medium">عمليات إنتاج صديقة للبيئة:</span> تقليل استهلاك المياه والطاقة في عمليات الصباغة والتجهيز</li>
                  <li><span className="font-medium">تصاميم طويلة الأمد:</span> الابتعاد عن الاتجاهات السريعة لصالح تصاميم كلاسيكية تدوم لفترات أطول</li>
                  <li><span className="font-medium">برامج إعادة التدوير:</span> استرداد الزي القديم وإعادة تدويره أو تحويله لمنتجات أخرى</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation/aviation_uniform.jpeg"
                  alt="أزياء طيران مستدامة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الاستدامة أصبحت عنصراً أساسياً في تصميم وإنتاج أزياء الطيران الحديثة
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">خاتمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
                يستمر الابتكار في دفع حدود تصميم أزياء الطيران نحو آفاق جديدة، مع التركيز على تحقيق التوازن بين المتطلبات المختلفة والاستجابة للتحديات المعاصرة. ومع تطور التكنولوجيا وتزايد الوعي بأهمية الاستدامة، نتوقع المزيد من الابتكارات المثيرة في هذا المجال في المستقبل القريب.
              </p>
              <p className="mb-4 leading-7 text-gray-700">
                ستستمر شركات الطيران في الاستثمار في تطوير أزياء تلبي احتياجات الطاقم وتعكس هوية العلامة التجارية، مع الاستفادة من التقنيات الناشئة والمواد المتقدمة. وستشهد السنوات القادمة بلا شك تحولاً نحو أزياء أكثر ذكاءً واستدامة وراحة، تتكيف مع البيئة المتغيرة لصناعة الطيران العالمية.
              </p>
            </section>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
              <h2 className="text-xl font-semibold mb-3">الكلمات المفتاحية</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-10 pt-6">
              <h2 className="text-xl font-semibold mb-4">مقالات ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((article, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 text-blue-900 hover:text-blue-700">
                        <Link href={article.url}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                      <p className="text-sm text-gray-700 line-clamp-2">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 