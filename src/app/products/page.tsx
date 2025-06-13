import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'منتجاتنا - أزياء موحدة لجميع القطاعات | يونيفورم',
  description: 'تصفح مجموعة واسعة من الأزياء الموحدة لمختلف القطاعات: الطيران، الطب، الضيافة، الأمن، والمزيد. جودة عالية وتصاميم احترافية.',
  keywords: 'أزياء موحدة، زي طيران، زي طبي، زي طهاة، زي أمن، ملابس عمل، السعودية',
};

const productCategories = [
  {
    title: 'أزياء الطيران',
    description: 'أزياء احترافية لطاقم الطيران والمضيفات',
    image: '/images/flight_crew/cabin_crew_uniforms.webp',
    link: '/blog?category=flight_crew',
    features: ['تصاميم أنيقة', 'أقمشة عالية الجودة', 'مقاومة للتجاعيد', 'راحة في الحركة']
  },
  {
    title: 'الأزياء الطبية',
    description: 'ملابس طبية متخصصة للأطباء والممرضين',
    image: '/images/clinic_wear/medical_wear.webp',
    link: '/blog?category=clinic_wear',
    features: ['مقاومة للبكتيريا', 'سهولة التنظيف', 'راحة طوال اليوم', 'ألوان متنوعة']
  },
  {
    title: 'أزياء الطهاة',
    description: 'ملابس احترافية للمطاعم والفنادق',
    image: '/images/culinary_apparel/chef_uniforms.webp',
    link: '/blog?category=culinary_apparel',
    features: ['مقاومة للحرارة', 'سهولة الحركة', 'تصاميم عملية', 'أقمشة قابلة للغسيل']
  },
  {
    title: 'أزياء الأمن',
    description: 'ملابس أمنية احترافية للحراسة والأمن',
    image: '/images/protective_services/security_guard_uniforms.webp',
    link: '/blog?category=protective_services',
    features: ['متانة عالية', 'جيوب متعددة', 'ألوان رسمية', 'راحة في العمل']
  },
  {
    title: 'ملابس العمل',
    description: 'أزياء عملية لمختلف بيئات العمل',
    image: '/images/workwear/workwear_clothing.webp',
    link: '/blog?category=workwear',
    features: ['حماية من المخاطر', 'متانة فائقة', 'تصاميم عملية', 'مقاومة للتآكل']
  },
  {
    title: 'الزي الأكاديمي',
    description: 'أزياء مدرسية وجامعية للطلاب',
    image: '/images/academic_attire/school_uniforms.jpeg',
    link: '/blog?category=academic_attire',
    features: ['أقمشة مريحة', 'ألوان ثابتة', 'تصاميم عملية', 'مقاسات متنوعة']
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            منتجاتنا
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            مجموعة شاملة من الأزياء الموحدة عالية الجودة لجميع القطاعات والمهن
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.link}
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    تصفح المنتجات
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            هل تحتاج إلى تصميم مخصص؟
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            نوفر خدمات التصميم المخصص لتناسب احتياجات مؤسستك
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            اطلب عرض سعر
          </Link>
        </div>
      </section>
    </main>
  );
} 