'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ImageWithPath, { NextImageWithPath } from './components/ImageWithPath';
import { OrganizationSchema, WebsiteSchema } from './components/JsonLdSchema';

// استيراد بيانات المقالات ذات الصلة من ملف المدونة
import { articles as blogPosts } from './blog/data';

// بيانات المقالات من site_articles.txt (100 مقالة كاملة)
const siteArticles = [
  { title: 'اعتبارات تصميم زي شركات الطيران', path: '/blog/flight-crew/flight-1', image: '/images/flight_crew/crew_uniform_visual_identity.webp' },
  { title: 'أقمشة أزياء طاقم الطائرة', path: '/blog/flight-crew/flight-2', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'موضة مضيفات الطيران العصرية', path: '/blog/flight-crew/flight-3', image: '/images/flight_crew/cabin_crew_uniforms.webp' },
  { title: 'أزياء الطيارين والمضيفات', path: '/blog/flight-crew/flight-4', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'التصميم الثقافي في أزياء الطيران العربية', path: '/blog/flight-crew/flight-8', image: '/images/flight_crew/cultural_aviation_uniforms.webp' },
  { title: 'وشاحات طاقم الطائرة وأهميتها', path: '/blog/flight-crew/flight-6', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'متطلبات السلامة في أزياء الطيران', path: '/blog/flight-crew/flight-7', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'أفضل أزياء طاقم الطائرة', path: '/blog/flight-crew/flight-5', image: '/images/flight_crew/best_flight_crew_attire.webp' },
  { title: 'مصنعو أزياء طاقم الطيران', path: '/blog/flight-crew/flight-9', image: '/images/flight_crew/crew_uniform_solutions.webp' },
  { title: 'أزياء الطيران في السعودية', path: '/blog/flight-crew/flight-10', image: '/images/flight_crew/arab_airlines_uniforms.webp' },
  { title: 'أهمية التصميم الموحد لزي طاقم الطائرة', path: '/blog/flight-crew/flight-13', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'أحذية وحقائب طاقم الطائرة', path: '/blog/flight-crew/flight-12', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'إكسسوارات أزياء طاقم الطائرة', path: '/blog/flight-crew/flight-11', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'نظرة عامة على أزياء طاقم الطائرة', path: '/blog/flight-crew/flight-1', image: '/images/flight_crew/cabin_crew_uniforms.webp' },
  { title: 'مواد أزياء طاقم الطائرة', path: '/blog/flight-crew/cabin-crew-uniform-fabric-selection', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'أزياء الطيران الذكية', path: '/blog/flight-crew/air-crew-attire', image: '/images/flight_crew/air_crew_innovative_uniforms.webp' },
  { title: 'أزياء طاقم الأرض', path: '/blog/flight-crew/ground-crew-attire', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'تاريخ تطور زي الخطوط الجوية السعودية', path: '/blog/flight-crew/flight-20', image: '/images/flight_crew/cultural_aviation_uniforms.webp' },
  { title: 'أزياء الطيران المستقبلية', path: '/blog/flight-crew/flight-19', image: '/images/flight_crew/air_crew_innovative_uniforms.webp' },
  { title: 'الابتكار في أزياء شركات الطيران', path: '/blog/aviation-uniforms/innovative-airline-uniforms', image: '/images/flight_crew/air_crew_innovative_uniforms.webp' },
  { title: 'ملابس طاقم الطيران للرجال والنساء', path: '/blog/aviation-uniforms/female-male-air-crew-wear', image: '/images/flight_crew/cabin_crew_uniforms.webp' },
  { title: 'مستقبل موضة طاقم الطائرة', path: '/blog/aviation-uniforms/aviation-uniform-standards-2025', image: '/images/flight_crew/air_crew_innovative_uniforms.webp' },
  { title: 'اعتبارات تصميم الزي الموحد للطيران', path: '/blog/aviation-uniforms/airline-uniform-design-considerations', image: '/images/flight_crew/crew_uniform_visual_identity.webp' },
  { title: 'تطوير تصميم أزياء شركات الطيران', path: '/blog/aviation-uniforms/airline-uniform-design-evolution', image: '/images/flight_crew/crew_uniform_visual_identity.webp' },
  { title: 'معايير أزياء الطيران', path: '/blog/aviation-uniforms/aviation-uniform-standards', image: '/images/flight_crew/crew_uniform_solutions.webp' },
  { title: 'زي الطيران في الطيران', path: '/blog/aviation-uniforms/crew-aviation-on-uniform', image: '/images/flight_crew/cabin_crew_uniforms.webp' },
  { title: 'تصميم الزي في الطيران', path: '/blog/aviation-uniforms/in-design-uniform-aviation', image: '/images/flight_crew/crew_uniform_visual_identity.webp' },
  { title: 'زي الطيران في المملكة', path: '/blog/aviation-uniforms/uniform-aviation-in-kingdom', image: '/images/flight_crew/arab_airlines_uniforms.webp' },
  { title: 'زي طاقم الطائرة', path: '/blog/aviation-uniforms/uniform-crew', image: '/images/flight_crew/cabin_crew_uniforms.webp' },
  { title: 'الطيران في تصميم الأزياء', path: '/blog/aviation-uniforms/aviation-in', image: '/images/flight_crew/air_crew_innovative_uniforms.webp' },
  { title: 'أفضل الممارسات في زي الطيران', path: '/blog/aviation-uniforms/best-on-uniform-aviation', image: '/images/flight_crew/best_flight_crew_attire.webp' },
  { title: 'تصميم ملابس طاقم الطائرة', path: '/blog/aviation-uniforms/in-design-clothing-crew-aircraft', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'تصميم زي طاقم الطيران', path: '/blog/aviation-uniforms/design-uniform-crew-aviation', image: '/images/flight_crew/crew_uniform_visual_identity.webp' },
  { title: 'أزياء شركات الطيران كعنصر في الهوية المؤسسية', path: '/blog/aviation-uniforms/airline-corporate-identity-uniforms', image: '/images/flight_crew/arab_airlines_uniforms.webp' },
  { title: 'اختيار أقمشة زي طاقم المقصورة', path: '/blog/aviation-uniforms/cabin-crew-uniform-fabric-selection', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'مبادئ تصميم زي الطيران', path: '/blog/aviation-uniforms/design-uniform', image: '/images/flight_crew/crew_uniform_visual_identity.webp' },
  { title: 'تصميم زي الطيران في المملكة العربية السعودية', path: '/blog/aviation-uniforms/in-design-uniform-aviation-Saudi', image: '/images/flight_crew/arab_airlines_uniforms.webp' },
  { title: 'أزياء الطيران في المملكة السعودية: التطور والتميز', path: '/blog/flight-crew/uniforms-saudi-arabia', image: '/images/flight_crew/arab_airlines_uniforms.webp' },
  { title: 'تصميم زي طاقم الطيران', path: '/blog/flight-crew/flight-crew-uniform-design', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'ملابس طاقم الطيران', path: '/blog/flight-crew/air-crew-attire', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'أزياء المضيفات الحديثة', path: '/blog/flight-crew/modern-flight-attendant-fashion', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'الراحة والسلامة في أزياء شركات الطيران', path: '/blog/flight-crew/comfort-safety-airline-uniforms', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'تصميم الزي الموحد', path: '/blog/flight-crew/design-uniform', image: '/images/flight_crew/uniform_safety_standards.webp' },
  { title: 'تصميم أزياء الطيران في المملكة العربية السعودية', path: '/blog/flight-crew/in-design-uniform-aviation-saudi', image: '/images/flight_crew/arab_airlines_uniforms.webp' },
  { title: 'تصميم زي شركات الطيران', path: '/blog/flight-crew/airline-uniform-design', image: '/images/flight_crew/crew_uniform_visual_identity.webp' },
  { title: 'ملابس طاقم الخدمات الأرضية', path: '/blog/flight-crew/ground-crew-attire', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'زي الطيار', path: '/blog/flight-crew/pilot-uniform', image: '/images/flight_crew/modern_airline_uniform_design.webp' },
  { title: 'زي المضيفات', path: '/blog/flight-crew/stewardess-uniform', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'أساسيات تصميم أزياء الطيران', path: '/blog/aviation-uniforms/aviation', image: '/images/flight_crew/crew_uniform_visual_identity.webp' },
  { title: 'الابتكار في تصميم أزياء الطيران', path: '/blog/aviation/page', image: '/images/flight_crew/air_crew_innovative_uniforms.webp' },
  { title: 'زي الطيران وهوية الشركة المؤسسية', path: '/blog/aviation-uniforms/airline-corporate-identity', image: '/images/flight_crew/arab_airlines_uniforms.webp' },
  { title: 'معايير تصميم زي الطهاة العالمية', path: '/blog/culinary-apparel/culinary-1', image: '/images/culinary_apparel/header_chef_uniform.webp' },
  { title: 'متطلبات زي طاقم المطبخ حسب الوظيفة والتخصص', path: '/blog/culinary-apparel/culinary-2', image: '/images/culinary_apparel/culinary_arts_uniforms.webp' },
  { title: 'تصميم أزياء الطهاة في السعودية', path: '/blog/chef-uniforms/design-in-Saudi', image: '/images/culinary_apparel/chef_jackets.webp' },
  { title: 'ملابس الطهاة الحديثة', path: '/blog/chef-uniforms/culinary_apparel-culinary-17', image: '/images/culinary_apparel/chef_coats.webp' },
  { title: 'تصميم ملابس الطهاة لعام 2025', path: '/blog/chef-uniforms/in-design-clothing-chef-2025', image: '/images/culinary_apparel/modern_traditional_chef_wear.webp' },
  { title: 'الزي الموحد في خدمات التموين السعودية', path: '/blog/chef-uniforms/uniform-in-services-catering-Saudi', image: '/images/culinary_apparel/catering_kitchen_uniforms.webp' },
  { title: 'أفضل أنواع السكراب الطبي للممرضين والأطباء', path: '/blog/clinic-wear/clinic-1', image: '/images/clinic_wear/medical_wear.webp' },
  { title: 'معايير اختيار الملابس الطبية حسب متطلبات وزارة الصحة', path: '/blog/clinic-wear/clinic-2', image: '/images/clinic_wear/header_medical_uniform.webp' },
  { title: 'اللوائح التنظيمية للزي الطبي في المنشآت الصحية السعودية', path: '/blog/clinic-wear/clinic-2', image: '/images/clinic_wear/clinic_staff_uniforms.webp' },
  { title: 'مواصفات زي الحرس الأمني المثالي', path: '/blog/protective-services/protective-1', image: '/images/protective_services/header_security_uniform.webp' },
  { title: 'معايير اختيار زي الخدمات الوقائية', path: '/blog/protective-services/protective-2', image: '/images/protective_services/security_guard_uniforms.webp' },
  { title: 'اختيار أفضل ملابس عمل (أفرولات) لقطاع الصيانة والمرافق بالسعودية', path: '/blog/utility-services/utility-1', image: '/images/utility_services/utility_uniforms.webp' },
  { title: 'أهمية وخصائص الأقمشة المقاومة في زي عمال المرافق', path: '/blog/utility-services/utility-2', image: '/images/utility_services/maintenance_technician_clothing.webp' },
  { title: 'المواد المستخدمة في تصنيع أزياء الأمن: دليل شامل', path: '/blog/security-uniforms/uniform-security-materials', image: '/images/security_uniforms/security_uniform_design.webp' },
  { title: 'أهمية الزي الموحد في تعزيز مستوى الأمن والأمان', path: '/blog/security-uniforms/importance-uniform-on-security', image: '/images/protective_services/professional_security_uniforms.webp' },
  { title: 'مواصفات زي الأمن المثالي', path: '/blog/security-uniforms/security-uniform-specifications', image: '/images/security_uniforms/header_security_uniform.webp' },
  { title: 'تأثير الزي الموحد على مستوى الأمن والحماية', path: '/blog/security_uniforms/importance-uniform-on-security', image: '/images/protective_services/facility_protection_uniforms.webp' },
  { title: 'الزي الموحد للحراسة الأمنية: المواصفات والمعايير', path: '/blog/security_uniforms/security-uniform-standards', image: '/images/protective_services/security_services_attire.webp' },
  { title: 'أهمية شارات الرتب في أزياء شركات الأمن', path: '/blog/security_uniforms/importance-rank-badges', image: '/images/security_uniforms/rank_badges.webp' },
  { title: 'الألوان وتأثيرها النفسي في أزياء الأمن والحراسة', path: '/blog/security_uniforms/security-uniform-colors-psychology', image: '/images/protective_services/high_visibility_protection_uniforms.webp' },
  { title: 'العناية بملابس العمل وأثرها على الصحة المهنية', path: '/blog/workwear/clothing-maintenance-work-health', image: '/images/workwear/work_clothes_care.webp' },
  { title: 'معايير الزي الموحد لشركات الخدمات والمرافق', path: '/blog/workwear/utility-services-uniform-standards', image: '/images/workwear/utility_services_uniform_standards.webp' },
  { title: 'ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات', path: '/blog/workwear/field-service-technician-workwear', image: '/images/workwear/field_technician_workwear.webp' },
  { title: 'الزي الموحد: أهميته وتأثيره على بيئة العمل', path: '/blog/workwear/uniform', image: '/images/workwear/uniform_importance.webp' },
  { title: 'متطلبات الزي الموحد لعمال الصيانة والتشغيل', path: '/blog/workwear/maintenance-worker-uniform-requirements', image: '/images/workwear/maintenance_uniform_requirements.webp' },
  { title: 'أسس اختيار ملابس العمل الوظيفية', path: '/blog/workwear/workwear-2', image: '/images/workwear/workwear_2.webp' },
  { title: 'العناية بملابس العمل', path: '/blog/workwear/in-clothing-maintenance', image: '/images/workwear/maintenance.webp' },
  { title: 'أهمية الزي الموحد', path: '/blog/workwear/importance-from-uniform', image: '/images/workwear/header_workwear_uniform.webp' },
  { title: 'الزي الموحد في السعودية', path: '/blog/workwear/uniform-in-Saudi', image: '/images/flight_crew/smart_materials.webp' },
  { title: 'ملابس العمل في المملكة', path: '/blog/workwear/clothing-in-kingdom', image: '/images/workwear/workwear_maintenance.webp' },
  { title: 'الزي الموحد', path: '/blog/workwear/uniform-in', image: '/images/workwear/uniform_sectors.webp' },
  { title: 'صيانة الملابس', path: '/blog/workwear/maintenance', image: '/images/flight_crew/crew_pins_badges.webp' },
  { title: 'مرافق ملابس العمل في الدمام', path: '/blog/workwear/clothing-facilities-in-Dammam', image: '/images/flight_crew/accessories_overview.webp' },
  { title: 'تصميم زي الصيانة الموحد', path: '/blog/workwear/design-uniform-maintenance', image: '/images/workwear/corporate_uniform.webp' },
  { title: 'كيفية اختيار ملابس العمل المناسبة', path: '/blog/workwear/how-to-choosing', image: '/images/flight_crew/flight_crew_uniforms.webp' },
  { title: 'معلومات عن ملابس العمل', path: '/blog/workwear/on-clothing', image: '/images/workwear/workwear_maintenance_guide.webp' },
  { title: 'أحذية السلامة من موردي ملابس عمال المرافق', path: '/blog/workwear/safety-shoes-from-uniform-workers-facilities', image: '/images/flight_crew/cabin_crew_uniforms.webp' },
  { title: 'ملابس العمل: أنواعها ومواصفاتها وأهميتها في بيئة العمل', path: '/blog/workwear/clothing', image: '/images/flight_crew/flight_crew_uniforms_riyadh.webp' },
  { title: 'أفضل موردي الزي المدرسي الموحد في الرياض', path: '/blog/academic-attire/academic-1', image: '/images/academic_attire/school_uniforms_riyadh.jpeg' },
  { title: 'كيفية اختيار أقمشة الزي المدرسي المناسبة لمناخ السعودية', path: '/blog/academic-attire/academic-2', image: '/images/academic_attire/school_uniform_fabrics.jpeg' },
  { title: 'كيف يعكس الزي الرسمي الموحد هوية وقيم شركتك في السعودية؟', path: '/blog/corporate-uniforms/corporate-1', image: '/images/corporate_uniforms/corporate_identity_uniforms.webp' },
  { title: 'تصميم أزياء العاملين في الفنادق السعودية: بين الضيافة والهوية المحلية', path: '/blog/hospitality/hospitality-1', image: '/images/hospitality/hotel_staff_uniforms.webp' },
  { title: 'أفضل الممارسات للعناية بالزي الموحد وإطالة عمره الافتراضي', path: '/blog/uniform-care/uniform-care-1', image: '/images/uniform_care/uniform_maintenance.webp' },
  { title: 'الزي الموحد في القطاعات المختلفة: خصائصه ومميزاته ومتطلباته', path: '/blog/workwear/uniform-sectors', image: '/images/flight_crew/flight_crew_uniforms_riyadh.webp' },
  { title: 'الزي الموحد للشركات: استثمار استراتيجي للمؤسسات الناجحة', path: '/blog/workwear/corporate-uniform', image: '/images/flight_crew/flight_crew_uniform_design.webp' },
  { title: 'أساسيات العناية بملابس العمل: دليل شامل للحفاظ على جودتها', path: '/blog/workwear/workwear-maintenance-guide', image: '/images/workwear/workwear_maintenance_guide.webp' }
];

// تعريف نوع المقال
interface Post {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  url: string;
  englishSlug?: string;
}

const slides = [
  {
    image: '/images/flight_crew/cabin_crew_uniforms.webp', title: 'أزياء طيران احترافية',
    description: 'تصاميم عصرية تجمع بين الأناقة والراحة'
  },
  {
    image: '/images/clinic_wear/header_medical_uniform.webp', title: 'أزياء طبية متخصصة',
    description: 'تصاميم مريحة تلبي احتياجات القطاع الطبي'
  },
  {
    image: '/images/culinary_apparel/header_chef_uniform.webp', title: 'أزياء الضيافة والمطاعم',
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
    academic_attire: ['school_uniforms.webp', 'academic_attire.webp'],
    clinic_wear: ['clinic_scrubs.webp', 'clinic_staff_uniforms.webp'],
    culinary_apparel: ['kitchen_staff_clothing.webp', 'chef_uniforms.webp'],
    flight_crew: ['flight_crew_uniforms_riyadh.webp', 'cabin_crew_uniforms.webp'],
    protective_services: ['protective_services_uniforms.webp', 'security_guard_uniforms.webp'],
    workwear: ['uniform_workwear.webp', 'workwear_clothing.webp'],
    utility_services: ['utility_services_uniforms.webp', 'utility_work_clothing.webp'],
    culinary: ['chef_kitchen_clothing.webp', 'culinary_clothing.webp'],
  };
  
  const categoryImages = images[category];
  if (categoryImages && categoryImages.length > 0) {
    return `/images/${category}/${categoryImages[index % categoryImages.length]}`;
  }

  return '/images/culinary_apparel/kitchen_staff_clothing.jpeg';
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [visibleCount, setVisibleCount] = useState(6);
  // Add these new states for lazy loading
  const [displayedArticles, setDisplayedArticles] = useState(12); // Initial number of displayed articles
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null); // Reference to loader element

  // تحديث الفئات تلقائياً من بيانات المقالات
  const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
  const categoryLabels: { [key: string]: string } = {
    'aviation-uniforms': 'أزياء الطيران',
    'medical-uniforms': 'أزياء طبية',
    'chef-uniforms': 'أزياء الطهاة',
    'academic-uniforms': 'الزي الأكاديمي',
    'protective-uniforms': 'أزياء الخدمات الوقائية',
    'certifications': 'الشهادات',
    'support-uniforms': 'أزياء الخدمات المساندة'
  };
  const categories = ['الكل', ...allCategories.map(cat => categoryLabels[cat] || cat)];
  const categoryMap = Object.fromEntries(Object.entries(categoryLabels).map(([k, v]) => [v, k]));

  // تجهيز المقالات مع روابطها
  const processedPosts = blogPosts.map(post => ({
    ...post,
    englishSlug: post.id,
  }));

  const filteredPosts = activeCategory === 'الكل'
    ? processedPosts
    : processedPosts.filter(post => post.category === categoryMap[activeCategory]);

  // عرض المزيد
  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const canShowMore = visibleCount < filteredPosts.length;
  
  // Lazy loading setup
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '200px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isLoading && displayedArticles < siteArticles.length) {
        loadMoreArticles();
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading, displayedArticles]);

  // Function to load more articles
  const loadMoreArticles = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedArticles(prevCount => Math.min(prevCount + 12, siteArticles.length));
      setIsLoading(false);
    }, 300);
  };

  // Get displayed articles
  const visibleArticles = siteArticles.slice(0, displayedArticles);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Schema */}
      <OrganizationSchema />
      <WebsiteSchema />
      
      {/* Hero Slider */}
      <section className="relative h-[80vh]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false 
          }}
          effect="fade"
          loop={true}
          className="h-full"
          speed={1000}
          watchSlidesProgress={true}
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

      {/* All Posts Section - 100 Articles from site_articles.txt */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">جميع المقالات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleArticles.map((article, idx) => (
              <Link key={idx} href={article.path} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full bg-gray-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                    <span className="text-blue-700 font-medium mt-auto">قراءة المزيد</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Loader */}
          {displayedArticles < siteArticles.length && (
            <div 
              ref={loaderRef} 
              className="text-center py-8 mt-8"
            >
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-700"></div>
                  <span className="mr-2">جاري تحميل المزيد من المقالات...</span>
                </div>
              ) : (
                <button 
                  onClick={loadMoreArticles}
                  className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  عرض المزيد
                </button>
              )}
            </div>
          )}
          
          {/* Display count */}
          <div className="text-center mb-4">
            <p className="text-gray-700">
              {displayedArticles > siteArticles.length ? siteArticles.length : displayedArticles} مقالة من أصل {siteArticles.length} مقالة
            </p>
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
                  src="/images/flight_crew/cabin_crew_uniforms.jpeg"
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
                  src="/images/clinic_wear/medical_wear.jpeg"
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