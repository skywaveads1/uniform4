'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// تعريف الخدمات مع الصور والتفاصيل
const serviceCategories = [
  {
    id: 'flight-crew',
    title: 'أزياء الطيران',
    description: 'نقدم تصاميم عصرية وأنيقة لأطقم الطيران بما يتوافق مع هوية شركات الطيران ومعايير الراحة والأناقة.',
    image: '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
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
    image: '/images/clinic_wear/clinic_scrubs.jpg',
    features: [
      'سكراب طبي بخامات مضادة للبكتيريا وسهلة التنظيف',
      'معاطف مخبرية بمقاسات وألوان متعددة',
      'ملابس طبية مريحة تناسب ساعات العمل الطويلة',
      'إمكانية تطريز الشعارات والأسماء على الملابس الطبية'
    ]
  },
  {
    id: 'culinary-apparel',
    title: 'أزياء الطهاة',
    description: 'مجموعة متنوعة من الأزياء المخصصة للطهاة والعاملين في المطابخ والمطاعم، مصممة لتوفير الراحة والحماية أثناء العمل.',
    image: '/images/culinary_apparel/kitchen_staff_clothing.jpeg',
    features: [
      'سترات شيف بتصاميم عصرية ومتنوعة',
      'مرايل للطهاة بخامات متينة ومقاومة للحرارة',
      'قبعات طهاة بمقاسات مختلفة',
      'ملابس كاملة لطاقم المطبخ والخدمة'
    ]
  },
  {
    id: 'academic-attire',
    title: 'الزي الأكاديمي',
    description: 'مجموعة متكاملة من الزي المدرسي والجامعي، بما في ذلك عباءات التخرج والقبعات والشالات الأكاديمية.',
    image: '/images/utility_services/utility_uniforms.jpeg',
    features: [
      'زي مدرسي كامل للمراحل التعليمية المختلفة',
      'عباءات وقبعات تخرج بتصاميم أنيقة',
      'شالات أكاديمية بألوان متنوعة حسب التخصص',
      'إمكانية تطريز شعارات المؤسسات التعليمية'
    ]
  },
  {
    id: 'protective-services',
    title: 'خدمات الحماية',
    description: 'ملابس وزي رسمي للعاملين في مجالات الأمن والحراسة والخدمات الوقائية، مصممة بمعايير حماية وراحة عالية.',
    image: '/images/protective_services/security_guard_uniforms.jpeg',
    features: [
      'بدلات رسمية للحراس الأمنيين',
      'سترات تحمل علامات وشعارات الأمن',
      'ملابس مقاومة للعوامل الجوية للعمل الخارجي',
      'إكسسوارات أمنية مكملة للزي الرسمي'
    ]
  },
  {
    id: 'utility-services',
    title: 'خدمات المرافق',
    description: 'أزياء موحدة للعاملين في خدمات الصيانة والمرافق العامة، مصممة للراحة والمتانة وسهولة الحركة أثناء العمل.',
    image: '/images/utility_services/maintenance_technician_clothing.jpeg',
    features: [
      'أوفرول عمل متين للفنيين والمهندسين',
      'سترات عاكسة للعمل في الظروف المختلفة',
      'قمصان وبنطلونات عمل مريحة',
      'معدات وقاية شخصية مكملة للزي الرسمي'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا المتميزة</h1>
          <p className="text-xl text-blue-100 mb-8">نقدم حلولاً متكاملة للأزياء الموحدة لمختلف القطاعات بأعلى معايير الجودة</p>
          <Link href="/quote" className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
            اطلب عرض سعر
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">نلبي احتياجات جميع القطاعات</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            تخصصنا في يونيفورم هو توفير حلول أزياء موحدة عالية الجودة لمختلف القطاعات، مع التركيز على الراحة والمتانة والتصميم الأنيق.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 w-full bg-gray-200">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/culinary_apparel/kitchen_staff_clothing.jpeg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mt-0.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/quote?service=${category.id}`} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full text-center">
                  احصل على عرض سعر
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا تختار يونيفورم؟</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نتميز بتقديم حلول متكاملة للأزياء الموحدة مع التركيز على الجودة والخدمة المتميزة والتصاميم العصرية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">جودة عالية</h3>
              <p className="text-gray-600">
                نستخدم أفضل الخامات ونطبق أعلى معايير الجودة في تصنيع جميع منتجاتنا لضمان المتانة والراحة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">تصاميم عصرية</h3>
              <p className="text-gray-600">
                نواكب أحدث صيحات الموضة العالمية مع الحفاظ على التناسب مع الثقافة المحلية والاحتياجات العملية.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">حلول متكاملة</h3>
              <p className="text-gray-600">
                نقدم خدمة شاملة من التصميم والتصنيع إلى التوصيل والصيانة، مع إمكانية التخصيص حسب احتياجات العميل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">جاهزون لخدمتك</h2>
          <p className="text-xl mb-8">
            تواصل معنا اليوم للحصول على استشارة مجانية ومعرفة كيف يمكننا مساعدتك في توفير أفضل حلول الأزياء الموحدة لمؤسستك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
              تواصل معنا
            </Link>
            <Link href="/quote" className="bg-transparent hover:bg-blue-800 text-white border border-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
              اطلب عرض سعر
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 