'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { articles as allArticles } from './data';

// تعريف الفئات المتاحة - مع إضافة فئات جديدة من ملف site_articles.txt
const categories = [
  { key: 'all', label: 'الكل' },
  { key: 'aviation-uniforms', label: 'أزياء الطيران' },
  { key: 'medical-uniforms', label: 'أزياء طبية' },
  { key: 'chef-uniforms', label: 'أزياء الطهاة' },
  { key: 'academic-uniforms', label: 'الزي الأكاديمي' },
  { key: 'protective-uniforms', label: 'أزياء الخدمات الوقائية' },
  { key: 'support-uniforms', label: 'أزياء الخدمات المساندة' },
  { key: 'certifications', label: 'الشهادات' },
];

// صور احتياطية حسب الفئة
const categoryFallbackImages: { [key: string]: string } = {
  'aviation-uniforms': '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
  'medical-uniforms': '/images/clinic_wear/clinic_scrubs.jpg',
  'chef-uniforms': '/images/culinary_apparel/chef_uniforms.jpeg',
  'academic-uniforms': '/images/academic_attire/school_uniforms.jpeg',
  'protective-uniforms': '/images/protective_services/security_guard_uniforms.jpeg',
  'support-uniforms': '/images/utility_services/utility_uniforms.jpeg',
  'certifications': '/images/flight_crew/flight_crew_uniform_design.jpeg',
};

// صور احتياطية لكل قسم في المسار
const pathFallbackImages: { [key: string]: string } = {
  'flight-crew': '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
  'clinic-wear': '/images/clinic_wear/clinic_scrubs.jpg',
  'culinary-apparel': '/images/culinary_apparel/kitchen_staff_clothing.jpeg',
  'academic-attire': '/images/academic_attire/school_uniforms.jpeg',
  'protective-services': '/images/protective_services/security_guard_uniforms.jpeg',
  'utility-services': '/images/utility_services/utility_uniforms.jpeg',
  'security-uniforms': '/images/protective_services/security_guard_uniforms.jpeg',
  'workwear': '/images/utility_services/maintenance_technician_clothing.jpeg',
  'chef-uniforms': '/images/culinary_apparel/chef_uniforms.jpeg',
  'aviation-uniforms': '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
  'corporate-uniforms': '/images/utility_services/utility_uniforms.jpeg',
  'hospitality': '/images/flight_crew/air_hospitality_uniforms.jpeg',
  'uniform-care': '/images/utility_services/maintenance_technician_clothing.jpeg',
};

// الصورة الاحتياطية الرئيسية
const DEFAULT_FALLBACK_IMAGE = '/images/flight_crew/flight_crew_uniforms_riyadh.jpg';

// استخراج القسم من مسار المقال
const getCategoryFromPath = (path: string): string => {
  // تحليل مسار المقال للحصول على القسم
  const parts = path.split('/');
  
  // البحث عن القسم في المسار (ثاني عنصر بعد /blog/)
  if (parts.length >= 3 && parts[1] === 'blog') {
    return parts[2];
  }
  
  return 'all'; // القسم الافتراضي
};

// واجهة لتعريف نوع كائن sectionImages
interface SectionImagesMap {
  [key: string]: string;
}

// مسارات قاعدية للصور المستخدمة في كل قسم
const sectionImages: SectionImagesMap = {
  academic_attire: '/images/academic_attire/academic_attire.jpeg',
  corporate_attire: '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
  clinic_wear: '/images/clinic_wear/clinic_scrubs.jpg',
  culinary_apparel: '/images/culinary_apparel/kitchen_staff_clothing.jpeg',
  flight_crew: '/images/flight_crew/cabin_crew_uniforms.jpeg',
  protective_services: '/images/protective_services/protective_services_uniforms.jpeg',
  utility_services: '/images/utility_services/utility_uniforms.jpeg',
};

// تحويل المقالات من التنسيق المستخدم في data.ts إلى التنسيق المتوافق مع مكون BlogCard
const adaptedArticles = allArticles.map(article => ({
  title: article.title,
  image: article.imageUrl,
  path: article.url,
  category: article.category
}));

// حذف التكرار في المقالات باستخدام المسار كمفتاح فريد
const uniqueArticles = Array.from(
  new Map(adaptedArticles.map(article => [article.path, article])).values()
);

// دالة لتوليد صور عشوائية لكل فئة
const getCategoryRandomImage = (category: string): string => {
  // تعريف مصفوفات الصور لكل فئة
  const categoryImages: { [key: string]: string[] } = {
    'aviation-uniforms': [
      '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
      '/images/flight_crew/cabin_crew_uniforms.jpeg',
      '/images/flight_crew/flight_crew_uniform_design.jpeg',
      '/images/flight_crew/air_crew_attire.jpeg',
      '/images/flight_crew/pilot_attendant_uniforms.jpeg',
      '/images/flight_crew/flight_attendant_dress.jpeg',
      '/images/flight_crew/crew_uniform_visual_identity.jpeg',
    ],
    'medical-uniforms': [
      '/images/clinic_wear/clinic_scrubs.jpg',
      '/images/clinic_wear/clinic_staff_uniforms.jpg',
      '/images/clinic_wear/clinic_uniforms.jpeg',
    ],
    'chef-uniforms': [
      '/images/culinary_apparel/chef_uniforms.jpeg',
      '/images/culinary_apparel/kitchen_staff_clothing.jpeg',
      '/images/culinary_apparel/culinary_uniforms_riyadh.jpeg',
      '/images/culinary_apparel/modern_traditional_chef_wear.jpeg',
      '/images/culinary_apparel/culinary_apparel_design.jpeg',
    ],
    'academic-uniforms': [
      '/images/academic_attire/school_uniforms.jpeg',
      '/images/academic_attire/school_uniform_fabrics.jpeg',
    ],
    'protective-uniforms': [
      '/images/protective_services/security_guard_uniforms.jpeg',
      '/images/protective_services/protective_services_uniforms.jpeg',
      '/images/protective_services/security_badges_patches.jpeg',
    ],
    'support-uniforms': [
      '/images/utility_services/utility_uniforms.jpeg',
      '/images/utility_services/maintenance_technician_clothing.jpeg',
      '/images/utility_services/maintenance_wear.jpeg',
    ],
    'certifications': [
      '/images/flight_crew/flight_crew_uniform_design.jpeg',
    ],
  };
  
  // استخدم الصور المحددة للفئة، أو الصورة الافتراضية إذا لم تكن هناك صور للفئة
  const images = categoryImages[category] || [DEFAULT_FALLBACK_IMAGE];
  
  // اختر صورة عشوائية من المجموعة
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// مكون بطاقة المقالة
const BlogCard = ({ title, image, path, category }: { title: string, image: string, path: string, category: string }) => {
  // استخدم الصورة المحددة مع تحميل الصورة الاحتياطية إذا فشل التحميل
  const [imgSrc, setImgSrc] = useState<string>(image);
  const [hasError, setHasError] = useState<boolean>(false);
  const pathCategory = getCategoryFromPath(path);
  
  // معالجة خطأ تحميل الصورة
  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      
      // محاولة استخدام صورة احتياطية حسب الفئة
      if (category && categoryFallbackImages[category]) {
        setImgSrc(categoryFallbackImages[category]);
      }
      // أو استخدام صورة احتياطية حسب المسار
      else if (pathCategory && pathFallbackImages[pathCategory.replace('_', '-')]) {
        setImgSrc(pathFallbackImages[pathCategory.replace('_', '-')]);
      }
      // أو توليد صورة عشوائية للفئة
      else if (category) {
        setImgSrc(getCategoryRandomImage(category));
      }
      // أو استخدم الصورة الافتراضية
      else {
        setImgSrc(DEFAULT_FALLBACK_IMAGE);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={path}>
        <div className="relative h-48 w-full bg-gray-100">
          <Image 
            src={imgSrc} 
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            quality={90}
            priority={false}
            onError={handleImageError}
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

// Create a new SearchParamsWrapper component that uses useSearchParams
const SearchParamsWrapper = ({ onCategoryChange }: { onCategoryChange: (category: string) => void }) => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Verificar si hay un parámetro de categoría en la URL
    const category = searchParams.get('category');
    
    if (category) {
      // Convertir posibles guiones bajos en guiones
      const formattedCategory = category.replace('_', '-');
      console.log('URL category parameter detected:', formattedCategory);
      onCategoryChange(formattedCategory);
    } else {
      onCategoryChange('all');
    }
  }, [searchParams, onCategoryChange]);
  
  return null;
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleArticles, setVisibleArticles] = useState<number>(12);
  const [filteredArticles, setFilteredArticles] = useState<any[]>([]);
  const articlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Aplicar filtrado basado en la categoría seleccionada
    if (selectedCategory === 'all') {
      setFilteredArticles(uniqueArticles);
    } else {
      // Convertir guiones a guiones bajos para compatibilidad
      const categoryKey = selectedCategory.replace('-', '_');
      
      // Filtramos por la categoría o por la ruta que contiene la categoría
      const filtered = uniqueArticles.filter(article => {
        const articleCategory = article.category;
        const articlePath = article.path;
        
        return (
          (articleCategory && articleCategory.replace('-', '_') === categoryKey) ||
          (articlePath && articlePath.includes(`/${selectedCategory.replace('_', '-')}/`))
        );
      });
      
      setFilteredArticles(filtered);
    }
  }, [selectedCategory]);

  // Asegurarse de que la cantidad de artículos visibles se restablezca al cambiar la categoría
  useEffect(() => {
    setVisibleArticles(12);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    if (category) {
      console.log('Category selected:', category);
      setSelectedCategory(category);
      
      // Scroll al inicio de los artículos
      if (articlesRef.current) {
        articlesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 12);
  };

  return (
    <div className="min-h-screen bg-gray-50" ref={articlesRef}>
      {/* Wrap the component that uses useSearchParams in Suspense */}
      <Suspense fallback={null}>
        <SearchParamsWrapper onCategoryChange={setSelectedCategory} />
      </Suspense>
      
      {/* Blog Header */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">مدونة يونيفورم</h1>
          <p className="text-xl text-blue-100">كل ما يخص عالم الأزياء الموحدة والابتكار في القطاعات المختلفة</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors border ${selectedCategory === category.key ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-blue-900 border-blue-200 hover:bg-blue-50'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArticles.length > 0 ? (
            filteredArticles.slice(0, visibleArticles).map((article, index) => (
              <BlogCard
                key={`${article.path}-${index}`}
                title={article.title}
                image={article.image}
                path={article.path}
                category={article.category}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">لا توجد مقالات في هذه الفئة</h3>
              <p className="text-gray-500">يرجى اختيار فئة أخرى أو العودة إلى الكل</p>
            </div>
          )}
        </div>
        
        {/* مؤشر التحميل */}
        {visibleArticles < filteredArticles.length && (
          <div 
            className="text-center py-8 mb-8"
          >
            <button 
              onClick={loadMoreArticles}
              className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
            >
              عرض المزيد
            </button>
          </div>
        )}
        
        {/* توضيح عدد المقالات المعروضة */}
        <div className="text-center mb-8">
          <p className="text-gray-700">
            {visibleArticles} مقالة من أصل {filteredArticles.length} مقالة
          </p>
        </div>
      </section>
    </div>
  );
} 