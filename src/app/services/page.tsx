import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ClientBreadcrumbSchema, ClientServiceSchema } from '../components/ClientSchemaWrapper';
import ClientOptimizedImage from '../components/ClientOptimizedImage';

// تعريف الخدمات مع الصور والتفاصيل
const serviceCategories = [
  {
    id: 'flight-crew',
    title: 'أزياء الطيران',
    description: 'نقدم تصاميم عصرية وأنيقة لأطقم الطيران بما يتوافق مع هوية شركات الطيران ومعايير الراحة والأناقة.',
    image: '/images/flight_crew/cockpit_crew_clothing.jpeg',
    features: [
      'زي كامل لأطقم الطيران مصمم بأعلى معايير الجودة',
      'مواد مقاومة للتجاعيد وسهلة العناية',
      'تصاميم تجمع بين الأناقة والراحة أثناء العمل',
      'خيارات تخصيص كاملة لتعكس هوية شركتك'
    ]
  },
  {
    id: 'clinic-wear',
    title: 'الأزياء الطبية',
    description: 'تشكيلة متكاملة من الملابس الطبية المريحة والعملية للأطباء والممرضين وطاقم العمل الطبي بمختلف تخصصاتهم.',
    image: '/images/clinic_wear/clinic_nurse_uniforms.jpeg',
    features: [
      'أزياء مصممة حسب المعايير الطبية العالمية',
      'مواد مقاومة للبكتيريا وسهلة التنظيف',
      'خيارات متنوعة للأقسام والتخصصات المختلفة',
      'إمكانية تطريز الأسماء والشعارات'
    ]
  },
  {
    id: 'culinary-apparel',
    title: 'أزياء الطهاة',
    description: 'ملابس احترافية عالية الجودة لفرق الطهي في المطاعم والفنادق وشركات التموين، مصممة لتوفير الراحة والأناقة.',
    image: '/images/culinary_apparel/chef_coats.jpeg',
    features: [
      'تشكيلة كاملة من جاكيتات وبناطيل وقبعات الطهاة',
      'مواد متينة تتحمل درجات الحرارة العالية',
      'تصاميم عملية مع تهوية جيدة',
      'خيارات تخصيص متعددة للمطاعم والفنادق'
    ]
  },
  {
    id: 'academic-attire',
    title: 'الزي الأكاديمي',
    description: 'الأزياء المدرسية والجامعية المصممة بأعلى معايير الجودة والراحة، مناسبة للمناخ المحلي ومتطلبات المؤسسات التعليمية.',
    image: '/images/academic_attire/school_uniform_fabrics.jpeg',
    features: [
      'أزياء مدرسية تناسب مختلف المراحل التعليمية',
      'خامات عالية الجودة تتحمل الاستخدام اليومي',
      'تصاميم مريحة تناسب مناخ المملكة',
      'إمكانية تطريز شعارات المدارس والجامعات'
    ]
  },
  {
    id: 'protective-services',
    title: 'أزياء الحماية والأمن',
    description: 'أزياء احترافية لفرق الأمن والحراسة، مصممة بمعايير عالية من الجودة والمتانة، مع مراعاة متطلبات العمل في الظروف المختلفة.',
    image: '/images/protective_services/security_guard_uniforms.jpeg',
    features: [
      'أزياء رسمية لفرق الأمن والحراسة',
      'مواد متينة مقاومة للتمزق والاهتراء',
      'جيوب وتقنيات عملية تناسب طبيعة العمل',
      'خيارات متعددة للشارات والرتب'
    ]
  },
  {
    id: 'utility-services',
    title: 'ملابس الخدمات والصيانة',
    description: 'ملابس عمل متينة ومريحة لفرق الصيانة والخدمات، مصممة لتوفير الحماية والمتانة مع سهولة الحركة والراحة.',
    image: '/images/utility_services/maintenance_technician_clothing.jpeg',
    features: [
      'أفرولات وملابس عمل بمعايير عالية',
      'أقمشة مقاومة للاتساخ والزيوت',
      'تصاميم عملية تسهل الحركة أثناء العمل',
      'طباعة وتطريز شعارات الشركات'
    ]
  }
];

// تحديد البيانات الوصفية للصفحة (Metadata)
export const metadata: Metadata = {
  title: 'خدماتنا | يونيفورم - تصميم وتصنيع الأزياء الموحدة المتخصصة',
  description: 'استكشف مجموعتنا الشاملة من خدمات تصميم وتصنيع الأزياء الموحدة المتخصصة لمختلف القطاعات بما في ذلك الطيران والرعاية الصحية والضيافة والتعليم والأمن.',
  keywords: 'أزياء موحدة, يونيفورم شركات, ملابس طيران, أزياء طبية, زي مدرسي, يونيفورم أمن, أزياء طهاة, ملابس عمل, أزياء مهنية, المملكة العربية السعودية',
  alternates: {
    canonical: 'https://www.yourdomain.com/services',
  },
  openGraph: {
    title: 'خدماتنا | يونيفورم - تصميم وتصنيع الأزياء الموحدة المتخصصة',
    description: 'استكشف مجموعة متخصصة من خدمات تصميم وتصنيع الأزياء الموحدة المتخصصة لمختلف القطاعات في المملكة العربية السعودية',
    url: 'https://www.yourdomain.com/services',
    siteName: 'يونيفورم - الأزياء الموحدة المتخصصة',
    images: [
      {
        url: 'https://www.yourdomain.com/images/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'خدمات تصميم وتصنيع الأزياء الموحدة المتخصصة',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema.org markup */}
      <ClientBreadcrumbSchema 
        items={[
          { name: 'الرئيسية', url: 'https://www.yourdomain.com/' },
          { name: 'خدماتنا', url: 'https://www.yourdomain.com/services' },
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 bg-blue-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من خدمات تصميم وتصنيع الأزياء الموحدة لمختلف القطاعات والمجالات بأعلى معايير الجودة
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 opacity-80"></div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {serviceCategories.map((category, index) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-2/5 relative h-64 lg:h-auto">
                    <ClientOptimizedImage
                      src={category.image}
                      alt={`${category.title} - يونيفورم للأزياء الموحدة المتخصصة`}
                      fill
                      className="object-cover h-full w-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="lg:w-3/5 p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h2>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">مميزات الخدمة:</h3>
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 ml-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Link 
                        href={`/services/${category.id}`}
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        عرض التفاصيل
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Schema markup for each service */}
                <ClientServiceSchema 
                  service={{
                    name: category.title,
                    description: category.description,
                    provider: {
                      '@type': 'Organization',
                      name: 'يونيفورم',
                      url: 'https://www.yourdomain.com'
                    },
                    serviceType: 'تصميم وتصنيع الأزياء الموحدة',
                    url: `https://www.yourdomain.com/services/${category.id}`,
                    image: `https://www.yourdomain.com${category.image}`
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">جاهز لتطوير مظهر فريق عملك؟</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            تواصل معنا اليوم للحصول على عرض سعر مخصص يناسب احتياجات مؤسستك ويعكس هويتها بشكل احترافي
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/quote"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              طلب عرض سعر
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 