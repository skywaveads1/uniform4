import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'الزي الطبي الحديث: مزايا وتطورات ملابس العيادات',
  description: 'استعراض شامل للتطورات الحديثة في تصميم الزي الطبي للعيادات وأهميته في تعزيز الصورة المهنية وتحسين تجربة المرضى والطاقم الطبي',
};

export default function ClinicWear1() {
  const imageSrc = '/images/clinic_wear/clinic_uniforms.jpeg';
  const title = 'الزي الطبي الحديث: مزايا وتطورات ملابس العيادات';
  const readingTime = '٧ دقائق للقراءة';
  const datePublished = '١٨ يونيو ٢٠٢٤';

  const relatedArticles = [
    {
      title: "معايير اختيار الزي الطبي للعيادات الخاصة",
      description: "دليل شامل لمعايير اختيار الزي الطبي المناسب للعيادات الخاصة بما يتوافق مع المتطلبات العملية والمهنية",
      image: "/images/clinic_wear/medical_wear.jpeg",
      url: "/blog/clinic-wear/clinic-2",
      date: "١٢ يونيو ٢٠٢٤",
      category: "الزي الطبي"
    },
    {
      title: "الزي الموحد في قطاع خدمات التموين والضيافة السعودي",
      description: "استعراض شامل لتطور الزي الموحد في قطاع خدمات التموين والضيافة في المملكة العربية السعودية",
      image: "/images/clinic_wear/medical_wear.jpeg",
      url: "/blog/chef-uniforms/uniform-in-services-catering-Saudi",
      date: "٢٠ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    },
    {
      title: "اتجاهات تصميم ملابس الطهاة لعام 2025",
      description: "استعراض لأحدث اتجاهات تصميم ملابس الطهاة المتوقعة في عام 2025",
      image: "/images/clinic_wear/medical_wear.jpeg",
      url: "/blog/chef-uniforms/in-design-clothing-chef-2025",
      date: "١٠ يونيو ٢٠٢٤",
      category: "أزياء الطهاة"
    }
  ];

  const tags = ["الزي الطبي", "ملابس العيادات", "يونيفورم طبي", "الصورة المهنية الطبية", "زي الأطباء", "زي الممرضات"];

  // أقسام المقال للتنقل السريع
  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'evolution', title: 'تطور الزي الطبي عبر التاريخ' },
    { id: 'modern-design', title: 'خصائص تصميم الزي الطبي الحديث' },
    { id: 'benefits', title: 'مزايا الزي الطبي المتطور' },
    { id: 'materials', title: 'المواد والأقمشة المتقدمة' },
    { id: 'specializations', title: 'ملابس العيادات حسب التخصصات' },
    { id: 'trends', title: 'اتجاهات مستقبلية في الزي الطبي' },
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
                يعتبر الزي الطبي أحد أهم عناصر البيئة العلاجية في العيادات والمراكز الطبية، حيث يتجاوز دوره كونه مجرد ملابس موحدة إلى أداة تساهم في تعزيز الصورة المهنية وتحسين تجربة المرضى وتوفير الراحة والوظائف العملية للطاقم الطبي.
          </p>
              <p className="mb-4 leading-7 text-gray-700">
                في السنوات الأخيرة، شهد تصميم الزي الطبي تطورات كبيرة تماشياً مع التقدم التكنولوجي والمتطلبات المتغيرة للرعاية الصحية الحديثة. في هذا المقال، نستعرض مزايا وتطورات الزي الطبي العصري للعيادات، وكيف أصبح استثماراً استراتيجياً يسهم في تحسين جودة الخدمات الصحية وتعزيز ثقة المرضى.
          </p>
        </section>

            <section id="evolution" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">تطور الزي الطبي عبر التاريخ</h2>
          
              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">المراحل الرئيسية في تطور الزي الطبي</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">العصور القديمة (قبل القرن 19):</span> كان الأطباء يرتدون ملابسهم العادية، مع استخدام بعض الرموز كالعصا والثعبان للتمييز.</li>
                  <li><span className="font-medium">القرن 19 وبداية القرن 20:</span> ظهور المعاطف البيضاء كرمز للنظافة والنقاء، وبدء استخدام الملابس الموحدة في المستشفيات.</li>
                  <li><span className="font-medium">منتصف القرن 20:</span> تطور الزي الطبي ليشمل البدلات الجراحية (Scrubs) والملابس المتخصصة لمختلف أقسام المستشفى.</li>
                  <li><span className="font-medium">العصر الحديث (من 1980 حتى الآن):</span> ثورة في تصميم الزي الطبي مع التركيز على الراحة، الوظائف العملية، المظهر الاحترافي، والتقنيات المتقدمة في الأقمشة.</li>
          </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="تطور الزي الطبي عبر العصور"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تطور الزي الطبي من المعاطف التقليدية إلى التصاميم العصرية المتخصصة
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">عبر التاريخ، عكس تطور الزي الطبي تغيرات جذرية في فهمنا للطب والرعاية الصحية. من رموز السلطة إلى علامات النظافة، ثم إلى أدوات وظيفية متكاملة، تحول الزي الطبي ليصبح جزءاً أساسياً من المنظومة العلاجية الحديثة.</p>
                  <footer className="text-sm text-gray-600">— د. سارة العتيبي، أستاذة تاريخ الطب</footer>
                </blockquote>
              </div>
        </section>

            <section id="modern-design" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">خصائص تصميم الزي الطبي الحديث</h2>
          
              <p className="mb-4 leading-7 text-gray-700">
                يتميز الزي الطبي الحديث للعيادات بمجموعة من الخصائص التي تجمع بين الجمالية والوظيفة والراحة:
          </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">التصميم الوظيفي</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>جيوب متعددة الأحجام والأغراض</li>
                    <li>حلقات تعليق للشارات والأدوات</li>
                    <li>قصات تسمح بحرية الحركة</li>
                    <li>تصميمات سهلة الارتداء والخلع</li>
          </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-medium mb-3 text-blue-800">الراحة والمتانة</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li>أقمشة مرنة تتكيف مع حركة الجسم</li>
                    <li>خامات خفيفة الوزن للعمل لساعات طويلة</li>
                    <li>تقنيات خياطة متقدمة لتحمل الاستخدام المكثف</li>
                    <li>أنظمة تهوية لمنع تراكم الحرارة</li>
          </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="تصميم الزي الطبي الحديث"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  زي طبي عصري بتصميم يجمع بين الأناقة المهنية والوظائف العملية
                </div>
              </div>
        </section>

            <section id="benefits" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">مزايا الزي الطبي المتطور</h2>
          
              <div className="rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-800 text-white py-2 px-4">
                  <h3 className="text-xl font-medium">المزايا الرئيسية للزي الطبي الحديث</h3>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                    <li><span className="font-medium">تعزيز الهوية المهنية:</span> يساعد الزي الموحد في تمييز الكادر الطبي وترسيخ صورة احترافية تعزز ثقة المرضى.</li>
                    <li><span className="font-medium">تحسين النظافة ومكافحة العدوى:</span> تصميمات وأقمشة تقلل من تراكم الجراثيم وتسهل عمليات التعقيم.</li>
                    <li><span className="font-medium">زيادة الراحة وتقليل الإجهاد:</span> ملابس مريحة تساعد الطاقم الطبي على العمل لساعات طويلة بكفاءة أعلى.</li>
                    <li><span className="font-medium">تمييز التخصصات والأدوار:</span> استخدام الألوان والتصاميم لتمييز مختلف التخصصات والمستويات الوظيفية.</li>
          </ul>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="الزي الطبي وتمييز الأدوار المختلفة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  فريق طبي بأزياء موحدة تساعد في تمييز التخصصات المختلفة داخل العيادة
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">لاحظنا تحسناً ملحوظاً في تجربة المرضى وأداء الفريق الطبي بعد تحديث الزي الموحد في عيادتنا. الملابس المريحة والعملية أسهمت في تقليل إرهاق الطاقم، بينما ساعد المظهر المهني الموحد في تعزيز ثقة المرضى وتحسين التواصل معهم.</p>
                  <footer className="text-sm text-gray-600">— د. فهد القحطاني، مدير مجمع عيادات الرياض التخصصي</footer>
                </blockquote>
              </div>
        </section>

            <section id="materials" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">المواد والأقمشة المتقدمة</h2>
          
              <p className="mb-4 leading-7 text-gray-700">
                شهدت المواد المستخدمة في صناعة الزي الطبي تطوراً كبيراً في السنوات الأخيرة، مع التركيز على تحسين الأداء والراحة:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">التقنيات المتقدمة في أقمشة الزي الطبي</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">أقمشة مضادة للميكروبات:</span> معالجات خاصة تمنع نمو البكتيريا والفطريات، تقلل الروائح وتطيل فترات الاستخدام بين الغسيل.</li>
                  <li><span className="font-medium">تقنيات التنظيف الذاتي:</span> معالجات طاردة للسوائل تمنع امتصاص البقع وتسهل تنظيفها.</li>
                  <li><span className="font-medium">أقمشة تنظيم الحرارة:</span> مواد متطورة تساعد على الحفاظ على درجة حرارة مريحة للجسم في مختلف بيئات العمل.</li>
                  <li><span className="font-medium">خامات قابلة للتمدد 4-way stretch:</span> مرونة في جميع الاتجاهات تسمح بحرية الحركة الكاملة.</li>
                  <li><span className="font-medium">الأقمشة المستدامة:</span> مواد صديقة للبيئة مصنوعة من مصادر متجددة أو معاد تدويرها.</li>
          </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="أقمشة متطورة للزي الطبي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  أقمشة طبية متطورة بتقنيات مضادة للميكروبات وطاردة للسوائل
                </div>
              </div>
        </section>

            <section id="specializations" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">ملابس العيادات حسب التخصصات</h2>
              
              <p className="mb-4 leading-7 text-gray-700">
                تختلف متطلبات الزي الطبي باختلاف التخصصات والأدوار في العيادات المختلفة:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">زي الأطباء والاستشاريين</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>معاطف بيضاء طويلة للاستشاريين</li>
                      <li>معاطف قصيرة للأطباء المقيمين</li>
                      <li>تصاميم مع جيوب متعددة للأدوات الطبية</li>
                      <li>أقمشة متينة مقاومة للبقع والتجعد</li>
          </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-blue-800">زي التمريض والمساعدين</h3>
                  <div className="border-r-2 border-blue-500 pr-3">
                    <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                      <li>بدلات عملية (Scrubs) مريحة بألوان مميزة</li>
                      <li>تصاميم عملية مع جيوب متعددة الاستخدامات</li>
                      <li>أقمشة سهلة التنظيف ومضادة للميكروبات</li>
                      <li>خيارات متنوعة للسترات والجاكيتات</li>
          </ul>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="زي التمريض في العيادات الحديثة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  زي تمريض عصري يجمع بين الراحة والأناقة والوظائف العملية
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">ملابس العيادات المتخصصة</h3>
                <ul className="list-disc list-inside space-y-2 mr-5 text-gray-700">
                  <li><span className="font-medium">عيادات الأسنان:</span> بدلات مقاومة للماء مع واقيات إضافية وألوان فاتحة.</li>
                  <li><span className="font-medium">عيادات الأطفال:</span> أزياء بألوان زاهية ورسومات مرحة لخلق بيئة ودية.</li>
                  <li><span className="font-medium">عيادات الجلدية والتجميل:</span> أزياء أنيقة بتصاميم عصرية تعكس هوية العيادة التجميلية.</li>
                  <li><span className="font-medium">العيادات الجراحية:</span> ملابس بمواصفات أعلى للتعقيم والحماية.</li>
          </ul>
              </div>
        </section>

            <section id="trends" className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-r-4 border-blue-600 pr-3">اتجاهات مستقبلية في الزي الطبي</h2>
          
              <p className="mb-4 leading-7 text-gray-700">
                تشير التوجهات الحالية إلى عدة اتجاهات مستقبلية في تصميم وتصنيع الزي الطبي للعيادات:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-medium mb-3 text-blue-800">الاتجاهات المستقبلية للزي الطبي</h3>
                <ul className="list-disc list-inside space-y-2 mr-3 text-gray-700">
                  <li><span className="font-medium">التخصيص الشخصي:</span> تقنيات متقدمة تتيح تخصيص الزي حسب متطلبات كل طبيب.</li>
                  <li><span className="font-medium">الأقمشة الذكية:</span> أقمشة مزودة بمستشعرات لمراقبة الإجهاد أو التعرض للمواد الخطرة.</li>
                  <li><span className="font-medium">الاستدامة:</span> التحول نحو المواد المستدامة والقابلة للتدوير والإنتاج المسؤول بيئياً.</li>
                  <li><span className="font-medium">التصاميم المستوحاة من الرياضة:</span> دمج تقنيات الملابس الرياضية لمزيد من الراحة والأداء.</li>
                  <li><span className="font-medium">العلامة التجارية المتكاملة:</span> تصميم الزي كجزء من هوية العيادة البصرية الشاملة.</li>
          </ul>
              </div>

              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="اتجاهات مستقبلية في تصميم الزي الطبي"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-sm">
                  تصميمات مبتكرة تعكس الاتجاهات المستقبلية في الزي الطبي للعيادات
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <blockquote className="italic border-r-4 border-blue-500 pr-4 py-2 mb-4">
                  <p className="text-gray-700">مستقبل الزي الطبي سيتجاوز مجرد الملابس إلى أنظمة متكاملة تدمج التكنولوجيا والتصميم والوظائف المتقدمة. نتوقع أزياء طبية تتفاعل مع البيئة المحيطة، تساعد في تشخيص حالة مرتديها، وتسهم في تحسين التواصل مع المرضى بطرق مبتكرة.</p>
                  <footer className="text-sm text-gray-600">— م. خالد النعيمي، مصمم ومطور الأزياء الطبية التقنية</footer>
                </blockquote>
              </div>
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