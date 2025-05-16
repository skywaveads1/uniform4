import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'زي الطيران وهوية الشركة المؤسسية',
  description: 'دراسة تحليلية للعلاقة بين تصميم أزياء الطيران وهوية الشركة المؤسسية وكيف تسهم الأزياء في تعزيز العلامة التجارية لشركات الطيران',
};

export default function ArticlePage() {
  const imageSrc = '/images/aviation-uniforms/airline-corporate-identity.jpeg';
  const title = 'زي الطيران وهوية الشركة المؤسسية';
  const readingTime = '٦ دقائق';
  const datePublished = '١٥ مايو ٢٠٢٤';
  const authorName = 'م. غادة الفارس';
  const authorImage = '/images/author/غادة_الفارس.jpg';
  const authorTitle = 'مستشارة في الهوية المؤسسية لشركات الطيران';

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'visual-identity', title: 'عناصر الهوية البصرية في أزياء الطيران' },
    { id: 'colors', title: 'دور الألوان في تعزيز الهوية المؤسسية' },
    { id: 'symbols', title: 'الرموز والشعارات في تصميم الزي' },
    { id: 'case-studies', title: 'دراسات حالة لشركات طيران مميزة' },
    { id: 'challenges', title: 'تحديات الموازنة بين الهوية والوظيفية' },
    { id: 'conclusion', title: 'خاتمة' },
  ];
  
  const relatedArticles = [
    {
      title: "أثر أزياء طاقم الطائرة على انطباع المسافرين",
      description: "كيف تؤثر أزياء الطيران على تجربة العملاء وانطباعاتهم عن الشركة",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/flight-crew/flight-16",
      date: "١٨ أبريل ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "تطور تصميم أزياء الطيران عبر العصور",
      description: "نظرة تاريخية على التغيرات في تصميم أزياء طواقم الطيران وتأثير الموضة عليها",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/flight-crew/flight-3",
      date: "٥ مارس ٢٠٢٤",
      category: "أزياء الطيران"
    },
    {
      title: "الراحة والسلامة في تصميم زي طاقم الطائرة",
      description: "التوازن المثالي بين الراحة والسلامة وجمالية التصميم في أزياء الطيران",
      image: "/images/aviation_uniforms/airline_uniform_design.jpeg",
      url: "/blog/flight-crew/comfort-safety-airline-uniforms",
      date: "٢٠ مارس ٢٠٢٤",
      category: "أزياء الطيران"
    }
  ];

  const tags = ["أزياء الطيران", "الهوية المؤسسية", "تصميم الأزياء", "العلامة التجارية", "شركات الطيران"];

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
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4 border-r-4 border-blue-600 pr-3">عن الكاتب</h3>
              <div className="flex">
                <div className="ml-4">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    width={120}
                    height={120}
                    className="rounded-lg"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 text-xl mb-1">{authorName}</h4>
                  <p className="text-gray-700 mb-3">{authorTitle}</p>
                  <p className="text-gray-600 text-sm mb-3">كاتب محترف في مجال الزي الموحد والمؤقتة. لديه خبرة واسعة في تصميم وتصنيع الزي الموحد للشركات والمؤسسات.</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-600 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-6">
              <h3 className="text-lg font-bold mb-3 border-r-4 border-blue-600 pr-3">مشاركة المقال</h3>
              <ShareButtons url="" title={title} />
            </div>
            
            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg font-bold mb-5 border-r-4 border-blue-600 pr-3">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                      alt="مقال ذو صلة 1"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">مقال ذو صلة 1</h4>
                    <p className="text-gray-600 text-sm">وصف مختصر للمقال الأول...</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                      alt="مقال ذو صلة 2"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">مقال ذو صلة 2</h4>
                    <p className="text-gray-600 text-sm">وصف مختصر للمقال الثاني...</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                      alt="مقال ذو صلة 3"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">مقال ذو صلة 3</h4>
                    <p className="text-gray-600 text-sm">وصف مختصر للمقال الثالث...</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* محتوى المقال الرئيسي */}
          <article className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <section id="intro" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مقدمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
            تعد أزياء الطيران عنصراً أساسياً في تشكيل الهوية المؤسسية لشركات الطيران، فهي ليست مجرد ملابس وظيفية، بل تمثل امتداداً مرئياً للعلامة التجارية وقيمها. في هذا المقال، نستكشف العلاقة المتكاملة بين تصميم أزياء الطيران وهوية الشركة المؤسسية، وكيف تسهم هذه الأزياء في تعزيز الصورة الذهنية لشركات الطيران لدى العملاء والجمهور.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
                على مر التاريخ، تطورت أزياء الطيران من مجرد ملابس عملية إلى عنصر تسويقي استراتيجي يعكس هوية شركة الطيران وثقافتها وقيمها. اليوم، تستثمر شركات الطيران العالمية ملايين الدولارات في تصميم أزياء تجمع بين الوظيفية والأناقة وتعبر عن هويتها الفريدة في سوق تنافسية.
          </p>
        </section>

            <section id="visual-identity" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">عناصر الهوية البصرية في أزياء الطيران</h2>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">العناصر الأساسية للهوية البصرية</h3>
                <p className="mb-2 text-gray-700">تتكون الهوية البصرية لأزياء الطيران من عدة عناصر أساسية تسهم مجتمعة في خلق صورة متكاملة:</p>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li>الألوان الأساسية والثانوية المستمدة من الهوية البصرية للشركة</li>
                  <li>الشعارات والرموز المميزة التي تعكس تاريخ وثقافة الشركة</li>
                  <li>القصات والتصاميم التي تعكس قيم العلامة التجارية (تقليدية، عصرية، محافظة، جريئة)</li>
                  <li>الإكسسوارات والتفاصيل الدقيقة التي تضيف لمسة فريدة (وشاحات، دبابيس، قبعات)</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="عناصر الهوية البصرية في أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  عناصر الهوية البصرية في أزياء الطيران تتكامل لتعكس هوية الشركة
                </div>
              </div>
            </section>

            <section id="colors" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دور الألوان في تعزيز الهوية المؤسسية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التأثير النفسي للألوان</h3>
                  <p className="mb-2 text-gray-700">كيف تؤثر ألوان الزي على المسافرين:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>اللون الأزرق: يوحي بالثقة والأمان والاحترافية</li>
                    <li>اللون الأحمر: يعكس الطاقة والحيوية والجرأة</li>
                    <li>اللون الأخضر: يرتبط بالاستدامة والانسجام</li>
                    <li>الألوان المحايدة: توحي بالأناقة والرقي والكلاسيكية</li>
                  </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">استراتيجيات الألوان</h3>
                  <p className="mb-2 text-gray-700">كيف توظف شركات الطيران الألوان:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>ألوان وطنية تعكس هوية البلد الأم للشركة</li>
                    <li>تدرجات لونية تميز بين مستويات الطاقم</li>
                    <li>ألوان ثابتة على مر السنين لتعزيز التعرف على العلامة</li>
                    <li>تحديثات دورية تحافظ على روح العلامة مع مواكبة العصر</li>
                  </ul>
                </div>
              </div>
        </section>

            <section id="symbols" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">الرموز والشعارات في تصميم الزي</h2>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الرمزية في تصميم الزي</h3>
                <p className="mb-2 text-gray-700">
            تمثل الرموز والشعارات عناصر أساسية في تصميم أزياء الطيران، حيث تسهم في تعزيز هوية الشركة وتميزها عن منافسيها في سوق الطيران التنافسية.
          </p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li>شعار الشركة المطرز بعناية على قطع الزي الرئيسية</li>
                  <li>الرموز التي تعكس التراث الثقافي للشركة وبلدها الأم</li>
                  <li>شارات ودبابيس تميز مستويات الخبرة والأقدمية</li>
                  <li>نقوش وزخارف مستوحاة من عناصر العلامة التجارية</li>
                </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/aviation_uniforms/airline_uniform_design.jpeg"
                  alt="الرموز والشعارات في تصميم أزياء الطيران"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  الشعارات والرموز تعزز الهوية المؤسسية في أزياء الطيران
                </div>
              </div>
        </section>

            <section id="case-studies" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">دراسات حالة لشركات طيران مميزة</h2>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">نماذج ناجحة عالمياً</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <p className="mb-2 font-medium text-blue-700">تجارب متميزة في توظيف الأزياء لتعزيز الهوية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">الخطوط السنغافورية:</span> الساري التقليدي بألوان الشركة المميزة يعكس الأناقة الآسيوية والتراث الثقافي</li>
                    <li><span className="font-medium">طيران الإمارات:</span> غطاء الرأس التقليدي والوشاح الأحمر المميز يجسدان التراث العربي والفخامة</li>
                    <li><span className="font-medium">الخطوط البريطانية:</span> التصميم البحري الكلاسيكي يعكس التاريخ البريطاني العريق والأناقة المحافظة</li>
                    <li><span className="font-medium">الخطوط السعودية:</span> دمج العناصر التقليدية مع التصاميم الحديثة لعكس الأصالة والمعاصرة</li>
                  </ul>
                </div>
              </div>
        </section>

            <section id="challenges" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تحديات الموازنة بين الهوية والوظيفية</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">تحديات التصميم</h3>
                <p className="mb-2 text-gray-700">
            تواجه عملية تصميم أزياء الطيران تحدياً مستمراً في تحقيق التوازن بين التعبير عن الهوية المؤسسية وضمان الوظيفية والراحة للطاقم.
          </p>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">موازنة الجمال والراحة:</span> تصميم أزياء أنيقة تعكس الهوية مع ضمان راحة الطاقم خلال رحلات طويلة</li>
                  <li><span className="font-medium">مراعاة التنوع الثقافي:</span> تصميم زي موحد يناسب طاقماً متنوعاً ثقافياً وجسدياً</li>
                  <li><span className="font-medium">متطلبات السلامة:</span> الالتزام بمعايير السلامة العالمية مع الحفاظ على الجمالية</li>
                  <li><span className="font-medium">الاستدامة والتكلفة:</span> تطوير أزياء مستدامة وعالية الجودة ضمن ميزانية معقولة</li>
                </ul>
              </div>
        </section>

            <section id="conclusion" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">خاتمة</h2>
              <p className="mb-4 leading-7 text-gray-700">
            تمثل أزياء الطيران أداة استراتيجية في بناء وتعزيز الهوية المؤسسية لشركات الطيران. ومن خلال التصميم المدروس الذي يجمع بين العناصر البصرية المميزة والوظيفية العالية، يمكن لهذه الأزياء أن تسهم بشكل فعال في خلق تجربة متكاملة للمسافرين تعزز ولاءهم للعلامة التجارية وتميز الشركة في سوق تنافسية.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
                تستمر شركات الطيران في تطوير أزيائها لتعكس هويتها المتطورة وقيمها المتجددة، مع مواكبة التغيرات في عالم الموضة والتصميم وتلبية احتياجات طاقمها المتنوعة. وتبقى أزياء الطيران شاهداً حياً على تاريخ الشركة وتطلعاتها المستقبلية، وسفيراً دائماً لهويتها أينما حلّت طائراتها.
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