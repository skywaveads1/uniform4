import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaCalendar, FaLeaf, FaStar, FaRecycle } from 'react-icons/fa';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata = {
  title: 'برامج الاستدامة في أزياء الطيران: مبادرات صديقة للبيئة ومسؤولية اجتماعية | يونيفورم',
  description: 'اكتشف برامج الاستدامة المتطورة في أزياء الطيران والمبادرات البيئية الرائدة التي تساهم في حماية البيئة وتعزيز المسؤولية الاجتماعية.',
  keywords: 'استدامة أزياء الطيران، المبادرات البيئية، المسؤولية الاجتماعية، البيئة، السعودية',
  openGraph: {
    title: 'برامج الاستدامة في أزياء الطيران: مبادرات صديقة للبيئة ومسؤولية اجتماعية',
    description: 'برامج ومبادرات بيئية رائدة لتحقيق الاستدامة في صناعة أزياء الطيران',
    images: ['/images/flight_crew/sustainability_programs.jpeg'],
  },
};

export default function Article24Page() {
  const heroImage = '/images/flight_crew/air_crew_innovative_uniforms.webp';
  const title = 'برامج الاستدامة في أزياء الطيران: مبادرات صديقة للبيئة ومسؤولية اجتماعية';
  const readingTime = '14 دقيقة';
  const publishDate = '٨ يناير ٢٠٢٥';
  const author = 'خبراء الاستدامة والمسؤولية البيئية - يونيفورم';

  const sections = [
    { id: 'intro', title: 'مقدمة' },
    { id: 'sustainability-importance', title: 'أهمية الاستدامة في الطيران' },
    { id: 'green-initiatives', title: 'المبادرات الخضراء' },
    { id: 'circular-economy', title: 'الاقتصاد الدائري' },
    { id: 'social-responsibility', title: 'المسؤولية الاجتماعية' },
    { id: 'innovation-technology', title: 'الابتكار والتكنولوجيا' },
    { id: 'global-partnerships', title: 'الشراكات العالمية' },
    { id: 'future-vision', title: 'رؤية المستقبل' },
  ];

  return (
    <main className="bg-gray-50 rtl">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] mb-8">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-end pb-16">
            <div className="text-white max-w-4xl">
              <div className="mb-4">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <FaLeaf />
                  الاستدامة البيئية
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                رحلة نحو مستقبل أكثر اخضراراً ومسؤولية في صناعة أزياء الطيران عبر مبادرات مبتكرة وحلول مستدامة
              </p>
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <FaUser className="w-4 h-4" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>{readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="w-4 h-4" />
                  <span>{publishDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 lg:sticky lg:top-24 h-fit">
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-green-600 pr-3">
                محتويات المقال
              </h3>
              <nav>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-700 hover:text-green-600 block transition-colors py-2 text-sm border-r-2 border-transparent hover:border-green-400 pr-3"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-r-4 border-green-600 pr-3">
                مشاركة المقال
              </h3>
              <ShareButtons url="" title={title} />
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-3 text-green-900">
                مبادرة استدامة مخصصة؟
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                انضم إلى برامج الاستدامة وطور حلول صديقة للبيئة لشركتك
              </p>
              <Link 
                href="/quote" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors block text-center text-sm font-medium"
              >
                ابدأ مبادرة الاستدامة
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 rounded-xl shadow-lg">
            
            <section id="intro" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                مقدمة
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-gray-800">
                  في عصر يشهد اهتماماً متزايداً بقضايا البيئة والاستدامة، تقود صناعة الطيران جهوداً رائدة لتبني ممارسات صديقة للبيئة في كافة جوانب العمل، بما في ذلك أزياء الطيران. هذه المبادرات لا تقتصر على حماية البيئة فحسب، بل تمتد لتشمل المسؤولية الاجتماعية وبناء مستقبل أكثر استدامة للأجيال القادمة.
                </p>
                
                <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-green-600" />
                    أهداف برامج الاستدامة في أزياء الطيران
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li>🌱 تقليل البصمة الكربونية</li>
                      <li>♻️ تعزيز إعادة التدوير</li>
                      <li>💧 ترشيد استهلاك المياه</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>🌍 حماية البيئة الطبيعية</li>
                      <li>🤝 تعزيز المسؤولية الاجتماعية</li>
                      <li>📈 تحقيق الكفاءة الاقتصادية</li>
                    </ul>
                  </div>
                </div>

                <p>
                  تشمل هذه البرامج مجموعة واسعة من المبادرات من استخدام المواد المستدامة وتقليل النفايات، إلى تطوير تقنيات إنتاج أكثر كفاءة وصداقة للبيئة. كما تركز على بناء شراكات استراتيجية مع الموردين والمجتمعات المحلية لتعزيز التأثير الإيجابي على نطاق أوسع.
                </p>
              </div>
            </section>

            <section id="sustainability-importance" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                أهمية الاستدامة في الطيران
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/cultural_aviation_uniforms.webp"
                    alt="أهمية الاستدامة في الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-emerald-800">
                    التحدي البيئي في صناعة الطيران
                  </h3>
                  <p className="text-gray-700">
                    صناعة الطيران تواجه تحديات بيئية كبيرة، وأزياء الطيران كجزء من هذه الصناعة تلعب دوراً مهماً في تقليل التأثير البيئي. من استهلاك الموارد الطبيعية إلى النفايات الناتجة عن دورة الحياة الكاملة للأزياء.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-emerald-800">التحديات البيئية:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>💨 انبعاثات الكربون من الإنتاج</li>
                      <li>💧 استهلاك المياه في المعالجة</li>
                      <li>🗑️ النفايات النسيجية</li>
                      <li>⚡ استهلاك الطاقة في التصنيع</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-emerald-800">
                  الفوائد المتعددة للاستدامة
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">البيئة</h4>
                    <p className="text-gray-600 text-sm">حماية النظم البيئية وتقليل التلوث</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">الاقتصاد</h4>
                    <p className="text-gray-600 text-sm">تحسين الكفاءة وخفض التكاليف</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">👥</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">المجتمع</h4>
                    <p className="text-gray-600 text-sm">تعزيز المسؤولية الاجتماعية</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="green-initiatives" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                المبادرات الخضراء
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <FaLeaf className="text-green-600" />
                    برامج المبادرات البيئية الرائدة
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">استخدام المواد الصديقة للبيئة:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>🌱 أقمشة من الألياف الطبيعية المعاد تدويرها</li>
                        <li>🌿 أصباغ عضوية خالية من المواد الكيميائية الضارة</li>
                        <li>♻️ مواد مبتكرة من النفايات البلاستيكية المحيطية</li>
                        <li>🍃 خيوط من الخيزران والقنب الطبيعي</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-green-700">عمليات الإنتاج المستدامة:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>⚡ استخدام الطاقة المتجددة في المصانع</li>
                        <li>💧 أنظمة معالجة وإعادة استخدام المياه</li>
                        <li>🌬️ تقليل انبعاثات الكربون</li>
                        <li>📦 تغليف قابل للتحلل الحيوي</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-green-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    مؤشرات الأداء البيئي
                  </h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-green-700">85%</span>
                      </div>
                      <h4 className="font-semibold text-green-800 mb-1">تقليل النفايات</h4>
                      <p className="text-gray-600 text-xs">منذ تطبيق البرامج</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-blue-700">70%</span>
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-1">توفير المياه</h4>
                      <p className="text-gray-600 text-xs">مقارنة بالطرق التقليدية</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-purple-700">90%</span>
                      </div>
                      <h4 className="font-semibold text-purple-800 mb-1">طاقة متجددة</h4>
                      <p className="text-gray-600 text-xs">في عمليات الإنتاج</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-orange-700">60%</span>
                      </div>
                      <h4 className="font-semibold text-orange-800 mb-1">تقليل الكربون</h4>
                      <p className="text-gray-600 text-xs">في سلسلة التوريد</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="circular-economy" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                الاقتصاد الدائري
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/circular_economy_uniforms.jpeg"
                    alt="الاقتصاد الدائري في أزياء الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-emerald-800">
                    نموذج جديد للاستدامة
                  </h3>
                  <p className="text-gray-700">
                    الاقتصاد الدائري في أزياء الطيران يركز على تقليل الهدر وإعادة الاستخدام والتدوير. هذا النهج يحول النفايات إلى موارد قيمة ويطيل دورة حياة المنتجات لتحقيق أقصى استفادة من الموارد.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-emerald-800">مراحل الاقتصاد الدائري:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🔄 التصميم للاستدامة</li>
                      <li>📋 الإنتاج المسؤول</li>
                      <li>🔧 الصيانة والتجديد</li>
                      <li>♻️ إعادة التدوير والاستخدام</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-emerald-800">
                  تطبيقات الاقتصاد الدائري في أزياء الطيران
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-emerald-200">
                    <div className="text-center mb-3">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                        <FaRecycle className="text-green-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2 text-center">إعادة التدوير</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• تحويل الأزياء المستعملة لمواد جديدة</li>
                      <li>• إعادة تدوير الأزرار والإكسسوارات</li>
                      <li>• تفكيك المواد للاستخدام المتخصص</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="text-center mb-3">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-xl">🔧</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2 text-center">التجديد</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• برامج الصيانة الدورية</li>
                      <li>• ترقية التصاميم والوظائف</li>
                      <li>• إصلاح وتجديد الأزياء القديمة</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="text-center mb-3">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-xl">🎁</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2 text-center">إعادة الاستخدام</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• تحويل الأزياء لاستخدامات أخرى</li>
                      <li>• التبرع للمؤسسات التعليمية</li>
                      <li>• برامج تبادل الأزياء بين الشركات</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="social-responsibility" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                المسؤولية الاجتماعية
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    التأثير الاجتماعي للبرامج المستدامة
                  </h3>
                  <p className="text-gray-700 mb-4">
                    برامج الاستدامة في أزياء الطيران تتجاوز حماية البيئة لتشمل تحسين ظروف العمل، ودعم المجتمعات المحلية، وتعزيز العدالة الاجتماعية في سلاسل التوريد العالمية.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-blue-700">دعم المجتمعات المحلية:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>🏘️ توظيف العمالة المحلية في المشاريع</li>
                        <li>📚 برامج التدريب والتطوير المهني</li>
                        <li>🤝 شراكات مع المؤسسات المجتمعية</li>
                        <li>💼 دعم المشاريع الصغيرة والمتوسطة</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-blue-700">تحسين ظروف العمل:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>⚖️ ضمان أجور عادلة ومناسبة</li>
                        <li>🛡️ توفير بيئة عمل آمنة وصحية</li>
                        <li>👥 احترام حقوق العمال</li>
                        <li>📈 فرص النمو والتطوير المهني</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    مؤشرات التأثير الاجتماعي
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-blue-700">2,500+</span>
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-1">وظيفة مُوجدة</h4>
                      <p className="text-gray-600 text-xs">في المجتمعات المحلية</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-green-700">150+</span>
                      </div>
                      <h4 className="font-semibold text-green-800 mb-1">شراكة مجتمعية</h4>
                      <p className="text-gray-600 text-xs">مع مؤسسات محلية</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-purple-700">5,000+</span>
                      </div>
                      <h4 className="font-semibold text-purple-800 mb-1">متدرب استفاد</h4>
                      <p className="text-gray-600 text-xs">من برامج التطوير</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="innovation-technology" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                الابتكار والتكنولوجيا
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/sustainable_tech_innovation.jpeg"
                    alt="الابتكار والتكنولوجيا المستدامة"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    تقنيات مبتكرة للاستدامة
                  </h3>
                  <p className="text-gray-700">
                    الابتكار التكنولوجي يقود ثورة حقيقية في مجال الاستدامة، من تطوير مواد جديدة صديقة للبيئة إلى أنظمة إنتاج ذكية تقلل الهدر وتحسن الكفاءة.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-indigo-800">التقنيات الناشئة:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🧬 الألياف الحيوية المطورة معملياً</li>
                      <li>🤖 الإنتاج الآلي الذكي</li>
                      <li>🌐 إنترنت الأشياء للمراقبة البيئية</li>
                      <li>🔬 النانوتكنولوجي للحماية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                  مجالات الابتكار الرئيسية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                      <span className="text-lg">🧪</span>
                      المواد المبتكرة
                    </h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• ألياف من الطحالب البحرية</li>
                      <li>• أقمشة ذاتية التنظيف</li>
                      <li>• مواد قابلة للتحلل الحيوي</li>
                      <li>• أقمشة ذكية مع وظائف متقدمة</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <span className="text-lg">⚡</span>
                      تقنيات الإنتاج
                    </h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• الطباعة ثلاثية الأبعاد للنماذج</li>
                      <li>• أنظمة إدارة الطاقة الذكية</li>
                      <li>• معالجة المياه المتقدمة</li>
                      <li>• الروبوتات في خطوط الإنتاج</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="global-partnerships" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                الشراكات العالمية
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">
                    شبكة التعاون الدولي للاستدامة
                  </h3>
                  <p className="text-gray-700 mb-4">
                    الشراكات العالمية تلعب دوراً محورياً في تحقيق أهداف الاستدامة، من خلال تبادل المعرفة والخبرات، وتطوير معايير موحدة، وتنسيق الجهود على مستوى عالمي.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-teal-800 mb-2">المنظمات الدولية</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• منظمة الطيران المدني الدولي</li>
                        <li>• الاتحاد الدولي للنقل الجوي</li>
                        <li>• مجلس الأزياء المستدامة</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">الشراكات الأكاديمية</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• جامعات البحث والتطوير</li>
                        <li>• معاهد التصميم المستدام</li>
                        <li>• مراكز الابتكار التكنولوجي</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">الشراكات الصناعية</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• شركات التكنولوجيا المتقدمة</li>
                        <li>• موردي المواد المستدامة</li>
                        <li>• شركات إعادة التدوير</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-teal-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">
                    نماذج الشراكات الناجحة
                  </h3>
                  <div className="space-y-6">
                    <div className="border-r-4 border-green-500 pr-4">
                      <h4 className="font-semibold text-green-800 mb-2">
                        شراكة تطوير المواد المستدامة
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">
                        تعاون مع شركات الكيماويات المتقدمة لتطوير أقمشة صديقة للبيئة
                      </p>
                      <div className="text-xs text-gray-600">
                        النتائج: تقليل 40% من استهلاك المياه، 60% انخفاض في المواد الكيميائية الضارة
                      </div>
                    </div>
                    
                    <div className="border-r-4 border-blue-500 pr-4">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        مبادرة إعادة التدوير العالمية
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">
                        شبكة دولية لجمع وإعادة تدوير أزياء الطيران المستعملة
                      </p>
                      <div className="text-xs text-gray-600">
                        النتائج: إعادة تدوير 85% من الأزياء، خلق 1,200 فرصة عمل جديدة
                      </div>
                    </div>
                    
                    <div className="border-r-4 border-purple-500 pr-4">
                      <h4 className="font-semibold text-purple-800 mb-2">
                        برنامج نقل التكنولوجيا
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">
                        تبادل التقنيات المتقدمة مع الدول النامية لدعم الصناعات المحلية
                      </p>
                      <div className="text-xs text-gray-600">
                        النتائج: تدريب 3,000 فني، إنشاء 50 مرفق إنتاج مستدام
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="future-vision" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900 border-r-4 border-green-600 pr-4">
                رؤية المستقبل
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64">
                  <Image
                    src="/images/flight_crew/future_sustainable_aviation.jpeg"
                    alt="مستقبل الاستدامة في الطيران"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-emerald-800">
                    نحو مستقبل أكثر استدامة
                  </h3>
                  <p className="text-gray-700">
                    رؤية المستقبل تركز على تحقيق الحياد الكربوني بحلول 2050، وتطوير تقنيات ثورية تعيد تعريف مفهوم الاستدامة في أزياء الطيران، مع التركيز على الابتكار والمسؤولية البيئية.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-emerald-800">أهداف 2030:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>🎯 الحياد الكربوني الكامل</li>
                      <li>🌊 صفر نفايات في المحيطات</li>
                      <li>♻️ 100% مواد قابلة للتدوير</li>
                      <li>🌱 إنتاج متجدد بالكامل</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-emerald-800">
                  الاستراتيجيات المستقبلية
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-emerald-700">التطوير التقني:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>🧬 هندسة المواد الحيوية المتقدمة</li>
                      <li>🤖 الأتمتة الكاملة للإنتاج المستدام</li>
                      <li>🌐 منصات رقمية شاملة للإدارة البيئية</li>
                      <li>🔬 تقنيات النانو للحماية الذاتية</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-emerald-700">التوسع العالمي:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>🌍 شبكة عالمية للإنتاج المستدام</li>
                      <li>🤝 شراكات أوسع مع المجتمعات المحلية</li>
                      <li>📚 برامج تعليمية للاستدامة</li>
                      <li>📊 معايير دولية موحدة للقياس</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-emerald-200 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4 text-center">
                  خارطة طريق الاستدامة 2025-2050
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                      2025
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">المرحلة الأولى</h4>
                      <p className="text-gray-700 text-sm">تحقيق 50% تقليل في البصمة الكربونية</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                      2035
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">المرحلة الثانية</h4>
                      <p className="text-gray-700 text-sm">تحويل 80% من العمليات للطاقة المتجددة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                      2050
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">المرحلة النهائية</h4>
                      <p className="text-gray-700 text-sm">تحقيق الحياد الكربوني الكامل والاستدامة الشاملة</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/flight-crew/flight-15" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/sustainable_airline_uniforms.jpeg"
                        alt="المواد المستدامة"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        المواد المستدامة في أزياء الطيران: ثورة خضراء في السماء
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-20" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/future_airline_uniforms.jpeg"
                        alt="مستقبل أزياء الطيران"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        مستقبل أزياء الطيران: رؤية 2030 وما بعدها
                      </h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/flight-crew/flight-18" className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src="/images/flight_crew/future_airline_uniform_tech.jpeg"
                        alt="تقنيات المستقبل"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                        تقنيات وابتكارات أزياء الطيران المستقبلية
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
} 