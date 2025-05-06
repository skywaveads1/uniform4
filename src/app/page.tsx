'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ImageWithPath, { NextImageWithPath } from './components/ImageWithPath';

// استيراد بيانات المقالات ذات الصلة من ملف المدونة
import { posts as blogPosts, fallbackImages } from './blog/data';

// تعريف نوع المقال
interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  date: string;
  imageUrl?: string;
  englishSlug?: string;
}

const slides = [
  {
    image: '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
    title: 'أزياء طيران احترافية',
    description: 'تصاميم عصرية تجمع بين الأناقة والراحة'
  },
  {
    image: '/images/clinic_wear/clinic_scrubs.jpg',
    title: 'أزياء طبية متخصصة',
    description: 'تصاميم مريحة تلبي احتياجات القطاع الطبي'
  },
  {
    image: '/images/culinary_apparel/kitchen_staff_clothing.jpeg',
    title: 'أزياء الضيافة والمطاعم',
    description: 'أزياء عملية تجمع بين الأناقة والاحترافية'
  }
];

const features = [
  {
    icon: '🎨',
    title: 'تصميم احترافي',
    description: 'فريق متخصص من المصممين لتطوير أزياء تناسب هويتك المؤسسية'
  },
  {
    icon: '✨',
    title: 'جودة عالية',
    description: 'أقمشة ومواد ممتازة مع اهتمام بأدق التفاصيل'
  },
  {
    icon: '⚡',
    title: 'خدمة سريعة',
    description: 'التزام بمواعيد التسليم مع مرونة في تلبية الطلبات العاجلة'
  },
  {
    icon: '🌟',
    title: 'تخصيص كامل',
    description: 'خيارات متعددة للتطريز والطباعة وإضافة الشعارات'
  },
  {
    icon: '💯',
    title: 'ضمان الجودة',
    description: 'ضمان شامل على جميع منتجاتنا مع دعم فني مستمر'
  },
  {
    icon: '🌐',
    title: 'تغطية واسعة',
    description: 'خدمات شاملة لجميع مناطق المملكة والخليج'
  }
];

const stats = [
  { number: '1000+', label: 'عميل راضٍ' },
  { number: '50000+', label: 'زي موحد' },
  { number: '15+', label: 'سنة خبرة' },
  { number: '100%', label: 'رضا العملاء' }
];

// وظيفة لتحويل العناوين العربية إلى الإنجليزية للروابط
const getEnglishSlug = (id: string, category: string) => {
  // قائمة المقالات والعناوين الإنجليزية المقابلة
  const slugMap: {[key: string]: string} = {
    // أزياء طبية
    'clinic-1': 'best-medical-scrubs-for-nurses-doctors',
    'clinic-2': 'medical-uniform-standards-saudi-health-ministry',
    'clinic-3': 'comfortable-antibacterial-medical-scrub-fabrics',
    'flight-1': 'airline-uniform-design-considerations',
    'flight-2': 'cabin-crew-uniform-fabric-selection',
    'flight-3': 'airline-corporate-identity-uniforms',
    'academic-1': 'top-school-uniform-suppliers-riyadh',
    'academic-2': 'choosing-school-uniform-fabrics-saudi-climate',
    'culinary-1': 'chef-uniform-design-standards',
    'culinary-2': 'kitchen-staff-uniform-requirements',
    'protective-1': 'security-guard-uniform-specifications',
    'utility-1': 'maintenance-worker-uniform-requirements',
  };
  
  // إذا كان المعرف موجوداً في القائمة، استخدمه
  if (slugMap[id]) {
    return slugMap[id];
  }
  
  // وإلا استخدم المعرف الأصلي مع الفئة
  return `${category}-${id}`;
};

// وظيفة الحصول على صورة من الفئة
const getCategoryImage = (category: string, index: number) => {
  const images: { [key: string]: string[] } = {
    academic_attire: ['school_uniforms.jpeg', 'academic_attire.jpeg'],
    clinic_wear: ['clinic_scrubs.jpg', 'clinic_staff_uniforms.jpg'],
    culinary_apparel: ['kitchen_staff_clothing.jpeg', 'chef_uniforms.jpeg'],
    flight_crew: ['flight_crew_uniforms_riyadh.jpg', 'cabin_crew_uniforms.jpeg'],
    protective_services: ['protective_services_uniforms.jpeg', 'security_guard_uniforms.jpeg'],
    utility_services: ['utility_uniforms.jpeg', 'maintenance_technician_clothing.jpeg'],
  };
  
  const categoryImages = images[category];
  if (categoryImages && categoryImages.length > 0) {
    return `/images/${category}/${categoryImages[index % categoryImages.length]}`;
  }

  return fallbackImages[category as keyof typeof fallbackImages] || '/images/culinary_apparel/kitchen_staff_clothing.jpeg';
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [posts, setPosts] = useState<Post[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  
  // تحويل أسماء الفئات العربية إلى الإنجليزية
  const categoryMapping: { [key: string]: string } = {
    'الكل': 'all',
    'أزياء الطيران': 'flight_crew',
    'أزياء الخدمات الوقائية': 'protective_services',
    'أزياء الخدمات المساندة': 'utility_services', 
    'أزياء طبية': 'clinic_wear',
    'الزي الأكاديمي': 'academic_attire',
    'أزياء الطهاة': 'culinary_apparel'
  };
  
  // قائمة الفئات المتاحة
  const categories = [
    'الكل', 
    'أزياء الطيران', 
    'أزياء طبية', 
    'أزياء الطهاة',
    'أزياء الخدمات الوقائية', 
    'أزياء الخدمات المساندة',
    'الزي الأكاديمي'
  ];
  
  useEffect(() => {
    // إعداد المقالات بإضافة مسارات الصور والأسلاج الإنجليزية
    if (blogPosts && blogPosts.length > 0) {
      const processedPosts = blogPosts.map((post: Post, index: number) => ({
        ...post,
        imageUrl: getCategoryImage(post.category, index),
        englishSlug: getEnglishSlug(post.id, post.category)
      }));
      
      // تعيين المقالات المميزة (أحدث 2 مقالات)
      setFeaturedPosts(processedPosts.slice(0, 2));
      
      // تعيين أحدث 6 مقالات للعرض في القسم الرئيسي
      setPosts(processedPosts.slice(0, 6));
    }
  }, []);
  
  const filteredPosts = activeCategory === 'الكل' 
    ? posts 
    : posts.filter(post => post.category === categoryMapping[activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider */}
      <section className="relative h-[80vh]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          effect="fade"
          loop={true}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
                <div className="absolute inset-0">
                  <div className="flex h-full items-center justify-center">
                    <div className="max-w-4xl mx-auto text-center px-4">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                        <Link 
                          href="/quote"
                          className="w-full sm:w-auto bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                          اطلب عرض سعر
                        </Link>
                        <Link 
                          href="/blog"
                          className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          تصفح المدونة
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">مميزاتنا</h2>
            <p className="text-xl text-gray-600">نقدم لكم أفضل الحلول في مجال الأزياء الموحدة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">مقالات مميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.category}/${post.englishSlug}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <div className="relative h-52 w-full bg-gray-200">
                    <ImageWithPath
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.src = fallbackImages[post.category as keyof typeof fallbackImages] || '/images/culinary_apparel/kitchen_staff_clothing.jpeg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2">{
                      post.category === 'flight_crew' ? 'أزياء الطيران' :
                      post.category === 'clinic_wear' ? 'أزياء طبية' :
                      post.category === 'culinary_apparel' ? 'أزياء الطهاة' :
                      post.category === 'protective_services' ? 'أزياء الخدمات الوقائية' :
                      post.category === 'utility_services' ? 'أزياء الخدمات المساندة' :
                      'الزي الأكاديمي'
                    }</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">أحدث المقالات</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 space-x-4 rtl:space-x-reverse">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.category}/${post.englishSlug}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow transition-shadow duration-300 group-hover:shadow-lg">
                  <div className="relative h-48 w-full bg-gray-200">
                    <ImageWithPath
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.src = fallbackImages[post.category as keyof typeof fallbackImages] || '/images/culinary_apparel/kitchen_staff_clothing.jpeg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2">{
                      post.category === 'flight_crew' ? 'أزياء الطيران' :
                      post.category === 'clinic_wear' ? 'أزياء طبية' :
                      post.category === 'culinary_apparel' ? 'أزياء الطهاة' :
                      post.category === 'protective_services' ? 'أزياء الخدمات الوقائية' :
                      post.category === 'utility_services' ? 'أزياء الخدمات المساندة' :
                      'الزي الأكاديمي'
                    }</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              عرض جميع المقالات
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">فئات الأزياء الموحدة</h2>
          <p className="text-xl text-center text-gray-600 mb-12">استكشف مجموعة واسعة من الأزياء الموحدة لمختلف القطاعات</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/flight_crew/flight_crew_uniforms_riyadh.jpg"
                  alt="أزياء الطيران"
                  fill
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">أزياء الطيران</h3>
                <p className="text-gray-600 mb-4">مجموعة متكاملة من الأزياء الرسمية لطاقم الطيران</p>
                <Link href="/blog?category=flight_crew" className="text-blue-600 hover:text-blue-800">
                  عرض التفاصيل <span>&#8594;</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/clinic_wear/clinic_scrubs.jpg"
                  alt="الأزياء الطبية"
                  fill
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">الأزياء الطبية</h3>
                <p className="text-gray-600 mb-4">أزياء متخصصة للقطاع الطبي بمختلف تخصصاته</p>
                <Link href="/blog?category=clinic_wear" className="text-blue-600 hover:text-blue-800">
                  عرض التفاصيل <span>&#8594;</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/culinary_apparel/kitchen_staff_clothing.jpeg"
                  alt="أزياء الطهاة"
                  fill
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">أزياء الطهاة</h3>
                <p className="text-gray-600 mb-4">أزياء احترافية للعمل في المطاعم والفنادق</p>
                <Link href="/blog?category=culinary_apparel" className="text-blue-600 hover:text-blue-800">
                  عرض التفاصيل <span>&#8594;</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/products" className="text-blue-600 font-semibold text-lg hover:text-blue-800">
              عرض جميع التصنيفات <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">آراء عملائنا</h2>
          <p className="text-xl text-center text-gray-600 mb-12">ماذا يقول عملاؤنا عن تجربتهم معنا</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow relative">
              <div className="text-blue-600 text-4xl absolute top-4 right-6">"</div>
              <div className="pt-4">
                <p className="text-gray-600 mb-4">لقد تعاملنا مع شركة يونيفورم لتوفير الزي الموحد لشركة الطيران لدينا، وقد أبدعوا في تقديم تصاميم راقية وعملية تناسب متطلباتنا.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                    <Image 
                      src="/images/testimonials/person1.jpg" 
                      alt="محمد العمري" 
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentNode as HTMLElement;
                        if (parent) parent.classList.add('bg-blue-100');
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">محمد العمري</h4>
                    <p className="text-sm text-gray-500">المدير التنفيذي - شركة الأجنحة للطيران</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow relative">
              <div className="text-blue-600 text-4xl absolute top-4 right-6">"</div>
              <div className="pt-4">
                <p className="text-gray-600 mb-4">تميزت شركة يونيفورم بالالتزام بمواعيد التسليم والجودة العالية للأزياء الطبية التي وفرتها لمستشفانا. نوصي بهم بشدة.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                    <Image 
                      src="/images/testimonials/person2.jpg" 
                      alt="سارة الخالدي" 
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentNode as HTMLElement;
                        if (parent) parent.classList.add('bg-blue-100');
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">سارة الخالدي</h4>
                    <p className="text-sm text-gray-500">مديرة الموارد البشرية - مستشفى الشفاء</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow relative">
              <div className="text-blue-600 text-4xl absolute top-4 right-6">"</div>
              <div className="pt-4">
                <p className="text-gray-600 mb-4">حصلنا على أزياء موحدة ذات جودة ممتازة لفريق المطعم بأكمله. التصاميم عصرية وعملية والخامات مريحة ومتينة.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                    <Image 
                      src="/images/testimonials/person3.jpg" 
                      alt="أحمد السليمان" 
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentNode as HTMLElement;
                        if (parent) parent.classList.add('bg-blue-100');
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">أحمد السليمان</h4>
                    <p className="text-sm text-gray-500">مالك سلسلة مطاعم الذواقة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">عملاؤنا</h2>
          <p className="text-xl text-center text-gray-600 mb-12">نفخر بثقة عملائنا من كبرى الشركات والمؤسسات</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* هنا يمكن إضافة شعارات وصور الشركات والعملاء */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-100 h-24 rounded-lg flex items-center justify-center p-4">
                <div className="text-gray-400 font-semibold">شعار شركة {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">الأسئلة الشائعة</h2>
          <p className="text-xl text-center text-gray-600 mb-12">إجابات على الأسئلة الأكثر شيوعًا</p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">كيف يمكنني طلب عرض سعر للأزياء الموحدة؟</h3>
              <p className="text-gray-600">يمكنك طلب عرض سعر مباشرة من خلال الموقع عبر صفحة "طلب عرض سعر" أو التواصل معنا على الأرقام الموضحة أسفل الصفحة.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">ما هي مدة التنفيذ المتوقعة للطلبات الكبيرة؟</h3>
              <p className="text-gray-600">تعتمد مدة التنفيذ على حجم الطلب والتصميم المطلوب، لكن بشكل عام نلتزم بإنجاز الطلبات الكبيرة خلال 2-4 أسابيع من تاريخ الموافقة على العينة.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">هل توفرون خدمة التوصيل لجميع مناطق المملكة؟</h3>
              <p className="text-gray-600">نعم، نوفر خدمة التوصيل لجميع مناطق المملكة العربية السعودية ودول الخليج مع إمكانية الشحن الدولي للطلبات الكبيرة.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">هل يمكن تصميم زي موحد خاص بشركتنا؟</h3>
              <p className="text-gray-600">بالطبع، نوفر خدمة التصميم المخصص بالكامل بما يتناسب مع هوية شركتك وطبيعة عملها، مع إمكانية إضافة الشعارات والألوان المميزة للشركة.</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/faq" className="text-blue-600 font-semibold text-lg hover:text-blue-800">
              المزيد من الأسئلة الشائعة <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز لتطوير مظهر فريق عملك؟</h2>
          <p className="text-xl text-blue-100 mb-8">احصل على عرض سعر مخصص يناسب احتياجات مؤسستك</p>
          <Link 
            href="/quote"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            اطلب عرض سعر الآن
          </Link>
        </div>
      </section>
    </div>
  );
} 