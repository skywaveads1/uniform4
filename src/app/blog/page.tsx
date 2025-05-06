'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { key: 'all', label: 'الكل' },
  { key: 'academic_attire', label: 'الزي الأكاديمي' },
  { key: 'clinic_wear', label: 'أزياء طبية' },
  { key: 'culinary_apparel', label: 'أزياء الطهاة' },
  { key: 'flight_crew', label: 'أزياء الطيران' },
  { key: 'protective_services', label: 'أزياء الخدمات الوقائية' },
  { key: 'utility_services', label: 'أزياء الخدمات المساندة' },
];

// صور احتياطية لكل قسم في حالة وجود خطأ
const fallbackImages = {
  academic_attire: '/images/utility_services/utility_uniforms.jpeg',
  clinic_wear: '/images/clinic_wear/clinic_scrubs.jpg',
  culinary_apparel: '/images/culinary_apparel/kitchen_staff_clothing.jpeg',
  flight_crew: '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
  protective_services: '/images/protective_services/security_guard_uniforms.jpeg',
  utility_services: '/images/utility_services/maintenance_technician_clothing.jpeg',
};

// واجهة لتعريف نوع كائن sectionImages
interface SectionImagesMap {
  [key: string]: string;
}

// مسارات قاعدية للصور المستخدمة في كل قسم
const sectionImages: SectionImagesMap = {
  academic_attire: '/images/academic_attire/academic_attire.jpeg', // استخدام صورة من خدمات المساندة كبديل
  corporate_attire: '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
  clinic_wear: '/images/clinic_wear/clinic_scrubs.jpg',
  culinary_apparel: '/images/culinary_apparel/kitchen_staff_clothing.jpeg',
  flight_crew: '/images/flight_crew/cabin_crew_uniforms.jpeg',
  protective_services: '/images/protective_services/protective_services_uniforms.jpeg',
  utility_services: '/images/utility_services/utility_uniforms.jpeg',
};

// الصورة الاحتياطية الرئيسية
const DEFAULT_FALLBACK_IMAGE = '/images/culinary_apparel/kitchen_staff_clothing.jpeg';

// قائمة المقالات من ملف site_articles.txt
const articlesData = [
  {
    title: "اعتبارات تصميم زي شركات الطيران",
    path: "/blog/flight-crew/flight-1",
    image: "/images/flight_crew/flight_crew_uniform_design.jpeg"
  },
  {
    title: "اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة",
    path: "/blog/flight-crew/flight-2",
    image: "/images/flight_crew/flight_crew_uniform_fabrics.jpeg"
  },
  {
    title: "أزياء الطيران النسائية: تطورها وخصائصها الحديثة",
    path: "/blog/flight-crew/flight-3",
    image: "/images/flight_crew/female_male_air_crew_wear.jpeg"
  },
  {
    title: "الزي الرسمي لطياري وقائدي الطائرات: المواصفات والرموز",
    path: "/blog/flight-crew/flight-4",
    image: "/images/flight_crew/pilot_attendant_uniforms.jpeg"
  },
  {
    title: "تأثير الثقافة المحلية على تصميم أزياء شركات الطيران",
    path: "/blog/flight-crew/flight-5",
    image: "/images/flight_crew/uniforms_saudi_arabia.jpeg"
  },
  {
    title: "دور أوشحة ولفحات الرقبة في استكمال زي مضيفات الطيران",
    path: "/blog/flight-crew/flight-6",
    image: "/images/flight_crew/flight_crew_scarves.jpeg"
  },
  {
    title: "متطلبات السلامة والأمان في تصميم ملابس طاقم الطائرة",
    path: "/blog/flight-crew/flight-7",
    image: "/images/flight_crew/flight_crew_safety_requirements.jpeg"
  },
  {
    title: "أفضل الممارسات للحفاظ على مظهر زي الطيران بشكل مثالي",
    path: "/blog/flight-crew/flight-8",
    image: "/images/flight_crew/best_flight_crew_attire.jpeg"
  },
  {
    title: "موردو يونيفورم الطيران المتخصصون في الشرق الأوسط",
    path: "/blog/flight-crew/flight-9",
    image: "/images/flight_crew/flight_crew_uniform_manufacturer.jpeg"
  },
  {
    title: "كيف يتم تصميم زي طاقم طيران يعكس الثقافة السعودية؟",
    path: "/blog/flight-crew/flight-10",
    image: "/images/flight_crew/uniforms_saudi_arabia.jpeg"
  },
  {
    title: "مقارنة بين زي طواقم شركات الطيران المختلفة العاملة في المملكة",
    path: "/blog/flight-crew/flight-11",
    image: "/images/flight_crew/flight_crew_uniforms_riyadh.jpg"
  },
  {
    title: "تطور أزياء مضيفات الطيران عبر العصور",
    path: "/blog/flight-crew/flight-12",
    image: "/images/flight_crew/flight_attendant_dress.jpeg"
  },
  {
    title: "أهمية التصميم الموحد لزي طاقم الطائرة",
    path: "/blog/flight-crew/flight-13",
    image: "/images/flight_crew/crew_uniform_visual_identity.jpeg"
  },
  {
    title: "كيفية اختيار الأحذية المناسبة لطاقم الطيران",
    path: "/blog/flight-crew/flight-14",
    image: "/images/flight_crew/flight_crew_uniform_accessories.jpeg"
  },
  {
    title: "الإكسسوارات المكملة لزي طاقم الطيران",
    path: "/blog/flight-crew/flight-15",
    image: "/images/flight_crew/flight_crew_uniform_accessories.jpeg"
  },
  {
    title: "تأثير ألوان زي الطيران على انطباعات المسافرين",
    path: "/blog/flight-crew/flight-16",
    image: "/images/flight_crew/crew_uniform_visual_identity.jpeg"
  },
  {
    title: "أنواع الأقمشة المستخدمة في تصنيع أزياء الطيران",
    path: "/blog/flight-crew/flight-17",
    image: "/images/flight_crew/flight_crew_uniform_fabrics.jpeg"
  },
  {
    title: "الفرق بين زي الطيران للرحلات الداخلية والدولية",
    path: "/blog/flight-crew/flight-18",
    image: "/images/flight_crew/cabin_crew_uniforms.jpeg"
  },
  {
    title: "الزي الموحد لموظفي الخدمات الأرضية في المطارات",
    path: "/blog/flight-crew/flight-19",
    image: "/images/flight_crew/air_crew_attire.jpeg"
  },
  {
    title: "تاريخ تطور زي الخطوط الجوية السعودية",
    path: "/blog/flight-crew/flight-20",
    image: "/images/flight_crew/uniforms_saudi_arabia.jpeg"
  },
  {
    title: "الاتجاهات المستقبلية في تصميم أزياء الطيران",
    path: "/blog/flight-crew/flight-21",
    image: "/images/flight_crew/flight_crew_uniform_design.jpeg"
  },
  {
    title: "أزياء طاقم الطائرات الخاصة: الفخامة والتميز",
    path: "/blog/flight-crew/flight-22",
    image: "/images/flight_crew/corporate_flight_crew_uniforms.jpg"
  },
  {
    title: "أزياء الطيران ودورها في بناء الهوية المؤسسية لشركات الطيران",
    path: "/blog/flight-crew/flight-23",
    image: "/images/flight_crew/crew_uniform_visual_identity.jpeg"
  },
  {
    title: "بروتوكول ارتداء الزي الرسمي خارج ساعات العمل لطاقم الطيران",
    path: "/blog/flight-crew/flight-24",
    image: "/images/flight_crew/flight_crew_uniforms.jpeg"
  },
  {
    title: "مستقبل تصميم زي طواقم الطيران: الابتكار والتقنية",
    path: "/blog/flight-crew/flight-25",
    image: "/images/flight_crew/flight_crew_uniform_design.jpeg"
  },
  {
    title: "اعتبارات تصميم زي شركات الطيران: توازن الأناقة والوظيفة",
    path: "/blog/aviation-uniforms/airline-uniform-design-considerations",
    image: "/images/flight_crew/flight_crew_uniform_design.jpeg"
  },
  {
    title: "تطور تصميم زي شركات الطيران عبر العصور",
    path: "/blog/aviation-uniforms/airline-uniform-design-evolution",
    image: "/images/flight_crew/flight_crew_uniforms_riyadh.jpg"
  },
  {
    title: "معايير زي الطيران لعام 2025",
    path: "/blog/aviation-uniforms/aviation-uniform-standards-2025",
    image: "/images/flight_crew/flight_crew_uniform_design.jpeg"
  },
  {
    title: "تأثير طاقم الطيران على الزي الموحد",
    path: "/blog/aviation-uniforms/crew-aviation-on-uniform",
    image: "/images/flight_crew/crew_uniforms.jpeg"
  },
  {
    title: "تصميم الزي الموحد في الطيران",
    path: "/blog/aviation-uniforms/in-design-uniform-aviation",
    image: "/images/flight_crew/flight_crew_uniform_design.jpeg"
  },
  // ... يمكن إضافة المزيد من المقالات هنا
];

// مكون بطاقة المقالة
const BlogCard = ({ title, image, path }: { title: string, image: string, path: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={path}>
        <div className="relative h-48 w-full">
          <Image 
            src={image} 
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            quality={90}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-blue-700 font-medium">قراءة المزيد</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-50" ref={scrollRef}>
      {/* Blog Header */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">مدونة يونيفورم - نسخة محدثة</h1>
          <p className="text-xl text-blue-100">كل ما يخص عالم الأزياء الموحدة والابتكار في القطاعات المختلفة</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors border ${activeCategory === category.key ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-blue-900 border-blue-200 hover:bg-blue-50'}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">أحدث المقالات</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article, index) => (
            <BlogCard 
              key={index}
              title={article.title}
              image={article.image}
              path={article.path}
            />
          ))}
        </div>
      </section>
    </div>
  );
} 