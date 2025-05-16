'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/flight_crew/crew_uniform_visual_identity.jpeg"
          alt="يونيفورم - الأزياء الموحدة المتخصصة"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">من نحن</h1>
              <p className="text-xl text-white/90">
                شركة رائدة في تصميم وتصنيع الأزياء الموحدة في المملكة العربية السعودية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">رؤيتنا</h2>
              <p className="text-gray-700 leading-relaxed">
                أن نكون الخيار الأول في مجال الأزياء الموحدة في المملكة العربية السعودية والشرق الأوسط،
                من خلال تقديم تصاميم مبتكرة وخدمات متميزة تلبي تطلعات عملائنا وتعزز هويتهم المؤسسية.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">رسالتنا</h2>
              <p className="text-gray-700 leading-relaxed">
                تقديم حلول متكاملة في مجال الأزياء الموحدة تجمع بين الجودة العالية والتصميم العصري،
                مع الالتزام بأعلى معايير الخدمة والاحترافية لتحقيق رضا عملائنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl text-blue-600 mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">الجودة</h3>
              <p className="text-gray-600">
                نلتزم بتقديم أعلى معايير الجودة في كل منتجاتنا، من اختيار الأقمشة إلى التصنيع النهائي.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl text-blue-600 mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">الابتكار</h3>
              <p className="text-gray-600">
                نسعى دائماً لتقديم تصاميم مبتكرة تواكب أحدث اتجاهات الموضة مع الحفاظ على الهوية المؤسسية.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl text-blue-600 mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">الموثوقية</h3>
              <p className="text-gray-600">
                نبني علاقات طويلة المدى مع عملائنا قائمة على الثقة والشفافية والالتزام بالمواعيد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">خبرتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">تخصصنا في القطاعات التالية:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-600 ml-2">✈️</span>
                    قطاع الطيران والضيافة الجوية
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 ml-2">🏥</span>
                    القطاع الطبي والمستشفيات
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 ml-2">🏢</span>
                    الشركات والمؤسسات
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 ml-2">🔒</span>
                    قطاع الأمن والحماية
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">مميزات خدماتنا:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-600 ml-2">✨</span>
                    تصاميم عصرية تناسب هوية كل مؤسسة
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 ml-2">🎨</span>
                    خيارات متعددة للألوان والأقمشة
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 ml-2">⚡</span>
                    سرعة في التنفيذ والتسليم
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 ml-2">💯</span>
                    ضمان الجودة على جميع المنتجات
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+15</div>
              <div className="text-blue-200">سنوات خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+1000</div>
              <div className="text-blue-200">عميل راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+50000</div>
              <div className="text-blue-200">زي موحد</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+20</div>
              <div className="text-blue-200">مدينة نخدمها</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">جاهز لتطوير مظهر فريق عملك؟</h2>
          <p className="text-xl text-gray-600 mb-8">
            تواصل معنا اليوم للحصول على عرض سعر مخصص يناسب احتياجات مؤسستك
          </p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <Link
              href="/quote"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              اطلب عرض سعر
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-blue-900"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 