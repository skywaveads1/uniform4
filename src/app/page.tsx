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
import { articles as blogPosts } from './blog/data';

// بيانات المقالات من site_articles.txt (100 مقالة كاملة)
const siteArticles = [
  { title: 'اعتبارات تصميم زي شركات الطيران', path: '/blog/flight-crew/flight-1', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة', path: '/blog/flight-crew/flight-2', image: '/images/flight_crew/flight_crew_uniform_fabrics.jpeg' },
  { title: 'أزياء الطيران النسائية: تطورها وخصائصها الحديثة', path: '/blog/flight-crew/flight-3', image: '/images/flight_crew/female_male_air_crew_wear.jpeg' },
  { title: 'الزي الرسمي لطياري وقائدي الطائرات: المواصفات والرموز', path: '/blog/flight-crew/flight-4', image: '/images/flight_crew/pilot_attendant_uniforms.jpeg' },
  { title: 'تأثير الثقافة المحلية على تصميم أزياء شركات الطيران', path: '/blog/flight-crew/flight-5', image: '/images/flight_crew/uniforms_saudi_arabia.jpeg' },
  { title: 'دور أوشحة ولفحات الرقبة في استكمال زي مضيفات الطيران', path: '/blog/flight-crew/flight-6', image: '/images/flight_crew/flight_crew_scarves.jpeg' },
  { title: 'متطلبات السلامة والأمان في تصميم ملابس طاقم الطائرة', path: '/blog/flight-crew/flight-7', image: '/images/flight_crew/flight_crew_safety_requirements.jpeg' },
  { title: 'أفضل الممارسات للحفاظ على مظهر زي الطيران بشكل مثالي', path: '/blog/flight-crew/flight-8', image: '/images/flight_crew/best_flight_crew_attire.jpeg' },
  { title: 'موردو يونيفورم الطيران المتخصصون في الشرق الأوسط', path: '/blog/flight-crew/flight-9', image: '/images/flight_crew/flight_crew_uniform_manufacturer.jpeg' },
  { title: 'كيف يتم تصميم زي طاقم طيران يعكس الثقافة السعودية؟', path: '/blog/flight-crew/flight-10', image: '/images/flight_crew/uniforms_saudi_arabia.jpeg' },
  { title: 'مقارنة بين زي طواقم شركات الطيران المختلفة العاملة في المملكة', path: '/blog/flight-crew/flight-11', image: '/images/flight_crew/flight_crew_uniforms_riyadh.jpg' },
  { title: 'تطور أزياء مضيفات الطيران عبر العصور', path: '/blog/flight-crew/flight-12', image: '/images/flight_crew/flight_attendant_dress.jpeg' },
  { title: 'أهمية التصميم الموحد لزي طاقم الطائرة', path: '/blog/flight-crew/flight-13', image: '/images/flight_crew/crew_uniform_visual_identity.jpeg' },
  { title: 'كيفية اختيار الأحذية المناسبة لطاقم الطيران', path: '/blog/flight-crew/flight-14', image: '/images/flight_crew/flight_crew_uniform_accessories.jpeg' },
  { title: 'الإكسسوارات المكملة لزي طاقم الطيران', path: '/blog/flight-crew/flight-15', image: '/images/flight_crew/flight_crew_uniform_accessories.jpeg' },
  { title: 'تأثير ألوان زي الطيران على انطباعات المسافرين', path: '/blog/flight-crew/flight-16', image: '/images/flight_crew/crew_uniform_visual_identity.jpeg' },
  { title: 'أنواع الأقمشة المستخدمة في تصنيع أزياء الطيران', path: '/blog/flight-crew/flight-17', image: '/images/flight_crew/flight_crew_uniform_fabrics.jpeg' },
  { title: 'الفرق بين زي الطيران للرحلات الداخلية والدولية', path: '/blog/flight-crew/flight-18', image: '/images/flight_crew/cabin_crew_uniforms.jpeg' },
  { title: 'الزي الموحد لموظفي الخدمات الأرضية في المطارات', path: '/blog/flight-crew/flight-19', image: '/images/flight_crew/air_crew_attire.jpeg' },
  { title: 'تاريخ تطور زي الخطوط الجوية السعودية', path: '/blog/flight-crew/flight-20', image: '/images/flight_crew/uniforms_saudi_arabia.jpeg' },
  { title: 'الاتجاهات المستقبلية في تصميم أزياء الطيران', path: '/blog/flight-crew/flight-21', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'أزياء طاقم الطائرات الخاصة: الفخامة والتميز', path: '/blog/flight-crew/flight-22', image: '/images/flight_crew/corporate_flight_crew_uniforms.jpg' },
  { title: 'أزياء الطيران ودورها في بناء الهوية المؤسسية لشركات الطيران', path: '/blog/flight-crew/flight-23', image: '/images/flight_crew/crew_uniform_visual_identity.jpeg' },
  { title: 'بروتوكول ارتداء الزي الرسمي خارج ساعات العمل لطاقم الطيران', path: '/blog/flight-crew/flight-24', image: '/images/flight_crew/flight_crew_uniforms.jpeg' },
  { title: 'مستقبل تصميم زي طواقم الطيران: الابتكار والتقنية', path: '/blog/flight-crew/flight-25', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'اعتبارات تصميم زي شركات الطيران: توازن الأناقة والوظيفة', path: '/blog/aviation-uniforms/airline-uniform-design-considerations', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'تطور تصميم زي شركات الطيران عبر العصور', path: '/blog/aviation-uniforms/airline-uniform-design-evolution', image: '/images/flight_crew/flight_crew_uniforms_riyadh.jpg' },
  { title: 'معايير زي الطيران لعام 2025', path: '/blog/aviation-uniforms/aviation-uniform-standards-2025', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'تأثير طاقم الطيران على الزي الموحد', path: '/blog/aviation-uniforms/crew-aviation-on-uniform', image: '/images/flight_crew/crew_uniforms.jpeg' },
  { title: 'تصميم الزي الموحد في الطيران', path: '/blog/aviation-uniforms/in-design-uniform-aviation', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'تصميم أزياء الطيران في المملكة العربية السعودية', path: '/blog/aviation-uniforms/uniform-aviation-in-kingdom', image: '/images/flight_crew/uniforms_saudi_arabia.jpeg' },
  { title: 'زي طاقم الطائرة', path: '/blog/aviation-uniforms/uniform-crew', image: '/images/flight_crew/cabin_crew_uniforms.jpeg' },
  { title: 'الطيران في تصميم الأزياء', path: '/blog/aviation-uniforms/aviation-in', image: '/images/flight_crew/flight_attire.jpeg' },
  { title: 'أفضل الممارسات في زي الطيران', path: '/blog/aviation-uniforms/best-on-uniform-aviation', image: '/images/flight_crew/best_flight_crew_attire.jpeg' },
  { title: 'تصميم ملابس طاقم الطائرة', path: '/blog/aviation-uniforms/in-design-clothing-crew-aircraft', image: '/images/flight_crew/crew_uniform_solutions.jpeg' },
  { title: 'تصميم زي طاقم الطيران', path: '/blog/aviation-uniforms/design-uniform-crew-aviation', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'أزياء شركات الطيران كعنصر في الهوية المؤسسية', path: '/blog/aviation-uniforms/airline-corporate-identity-uniforms', image: '/images/flight_crew/crew_uniform_visual_identity.jpeg' },
  { title: 'اختيار أقمشة زي طاقم المقصورة', path: '/blog/aviation-uniforms/cabin-crew-uniform-fabric-selection', image: '/images/flight_crew/flight_crew_uniform_fabrics.jpeg' },
  { title: 'مبادئ تصميم زي الطيران', path: '/blog/aviation-uniforms/design-uniform', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'تصميم زي الطيران في المملكة العربية السعودية', path: '/blog/aviation-uniforms/in-design-uniform-aviation-Saudi', image: '/images/flight_crew/uniforms_saudi_arabia.jpeg' },
  { title: 'أزياء الطيران في المملكة السعودية: التطور والتميز', path: '/blog/flight-crew/uniforms-saudi-arabia', image: '/images/flight_crew/uniforms_saudi_arabia.jpeg' },
  { title: 'تصميم زي طاقم الطيران', path: '/blog/flight-crew/flight-crew-uniform-design', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'ملابس طاقم الطيران', path: '/blog/flight-crew/air-crew-attire', image: '/images/flight_crew/air_crew_attire.jpeg' },
  { title: 'أزياء المضيفات الحديثة', path: '/blog/flight-crew/modern-flight-attendant-fashion', image: '/images/flight_crew/flight_attendant_dress.jpeg' },
  { title: 'الراحة والسلامة في أزياء شركات الطيران', path: '/blog/flight-crew/comfort-safety-airline-uniforms', image: '/images/flight_crew/flight_crew_safety_requirements.jpeg' },
  { title: 'تصميم الزي الموحد', path: '/blog/flight-crew/design-uniform', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'تصميم أزياء الطيران في المملكة العربية السعودية', path: '/blog/flight-crew/in-design-uniform-aviation-saudi', image: '/images/flight_crew/uniforms_saudi_arabia.jpeg' },
  { title: 'تصميم زي شركات الطيران', path: '/blog/flight-crew/airline-uniform-design', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'ملابس طاقم الخدمات الأرضية', path: '/blog/flight-crew/ground-crew-attire', image: '/images/flight_crew/air_crew_attire.jpeg' },
  { title: 'زي الطيار', path: '/blog/flight-crew/pilot-uniform', image: '/images/flight_crew/captain_copilot_wear.jpeg' },
  { title: 'زي المضيفات', path: '/blog/flight-crew/stewardess-uniform', image: '/images/flight_crew/flight_attendant_dress.jpeg' },
  { title: 'أساسيات تصميم أزياء الطيران', path: '/blog/aviation-uniforms/aviation', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'الابتكار في تصميم أزياء الطيران', path: '/blog/aviation/page', image: '/images/flight_crew/flight_crew_uniform_design.jpeg' },
  { title: 'زي الطيران وهوية الشركة المؤسسية', path: '/blog/aviation-uniforms/airline-corporate-identity', image: '/images/flight_crew/crew_uniform_visual_identity.jpeg' },
  { title: 'معايير تصميم زي الطهاة العالمية', path: '/blog/culinary-apparel/culinary-1', image: '/images/culinary_apparel/chef_uniforms.jpeg' },
  { title: 'متطلبات زي طاقم المطبخ حسب الوظيفة والتخصص', path: '/blog/culinary-apparel/culinary-2', image: '/images/culinary_apparel/kitchen_staff_clothing.jpeg' },
  { title: 'تصميم أزياء الطهاة في السعودية', path: '/blog/chef-uniforms/design-in-Saudi', image: '/images/culinary_apparel/culinary_uniforms_riyadh.jpeg' },
  { title: 'ملابس الطهاة الحديثة', path: '/blog/chef-uniforms/culinary_apparel-culinary-17', image: '/images/culinary_apparel/modern_traditional_chef_wear.jpeg' },
  { title: 'تصميم ملابس الطهاة لعام 2025', path: '/blog/chef-uniforms/in-design-clothing-chef-2025', image: '/images/culinary_apparel/culinary_apparel_design.jpeg' },
  { title: 'الزي الموحد في خدمات التموين السعودية', path: '/blog/chef-uniforms/uniform-in-services-catering-Saudi', image: '/images/culinary_apparel/catering_kitchen_uniforms.jpeg' },
  { title: 'أفضل أنواع السكراب الطبي للممرضين والأطباء', path: '/blog/clinic-wear/clinic-1', image: '/images/clinic_wear/clinic_scrubs.jpg' },
  { title: 'معايير اختيار الملابس الطبية حسب متطلبات وزارة الصحة', path: '/blog/clinic-wear/clinic-2', image: '/images/clinic_wear/clinic_staff_uniforms.jpg' },
  { title: 'اللوائح التنظيمية للزي الطبي في المنشآت الصحية السعودية', path: '/blog/clinic-wear/clinic-2', image: '/images/clinic_wear/clinic_uniforms.jpeg' },
  { title: 'مواصفات زي الحرس الأمني المثالي', path: '/blog/protective-services/protective-1', image: '/images/protective_services/security_guard_uniforms.jpeg' },
  { title: 'معايير اختيار زي الخدمات الوقائية', path: '/blog/protective-services/protective-2', image: '/images/protective_services/protective_services_uniforms.jpeg' },
  { title: 'اختيار أفضل ملابس عمل (أفرولات) لقطاع الصيانة والمرافق بالسعودية', path: '/blog/utility-services/utility-1', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'أهمية وخصائص الأقمشة المقاومة في زي عمال المرافق', path: '/blog/utility-services/utility-2', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'المواد المستخدمة في تصنيع أزياء الأمن: دليل شامل', path: '/blog/security-uniforms/uniform-security-materials', image: '/images/protective_services/security_guard_uniforms.jpeg' },
  { title: 'أهمية الزي الموحد في تعزيز مستوى الأمن والأمان', path: '/blog/security-uniforms/importance-uniform-on-security', image: '/images/protective_services/security_guard_uniforms.jpeg' },
  { title: 'مواصفات زي الأمن المثالي', path: '/blog/security-uniforms/security-uniform-specifications', image: '/images/protective_services/security_guard_uniforms.jpeg' },
  { title: 'تأثير الزي الموحد على مستوى الأمن والحماية', path: '/blog/security_uniforms/importance-uniform-on-security', image: '/images/protective_services/security_guard_uniforms.jpeg' },
  { title: 'الزي الموحد للحراسة الأمنية: المواصفات والمعايير', path: '/blog/security_uniforms/security-uniform-standards', image: '/images/protective_services/security_guard_uniforms.jpeg' },
  { title: 'أهمية شارات الرتب في أزياء شركات الأمن', path: '/blog/security_uniforms/importance-rank-badges', image: '/images/protective_services/security_badges_patches.jpeg' },
  { title: 'الألوان وتأثيرها النفسي في أزياء الأمن والحراسة', path: '/blog/security_uniforms/security-uniform-colors-psychology', image: '/images/protective_services/security_services_clothing_supplier.jpeg' },
  { title: 'العناية بملابس العمل وأثرها على الصحة المهنية', path: '/blog/workwear/clothing-maintenance-work-health', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'معايير الزي الموحد لشركات الخدمات والمرافق', path: '/blog/workwear/utility-services-uniform-standards', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات', path: '/blog/workwear/field-service-technician-workwear', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'الزي الموحد: أهميته وتأثيره على بيئة العمل', path: '/blog/workwear/uniform', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'متطلبات الزي الموحد لعمال الصيانة والتشغيل', path: '/blog/workwear/maintenance-worker-uniform-requirements', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'أسس اختيار ملابس العمل الوظيفية', path: '/blog/workwear/workwear-2', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'العناية بملابس العمل', path: '/blog/workwear/in-clothing-maintenance', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'أهمية الزي الموحد', path: '/blog/workwear/importance-from-uniform', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'الزي الموحد في السعودية', path: '/blog/workwear/uniform-in-Saudi', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'ملابس العمل في المملكة', path: '/blog/workwear/clothing-in-kingdom', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'الزي الموحد', path: '/blog/workwear/uniform-in', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'صيانة الملابس', path: '/blog/workwear/maintenance', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'مرافق ملابس العمل في الدمام', path: '/blog/workwear/clothing-facilities-in-Dammam', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'تصميم زي الصيانة الموحد', path: '/blog/workwear/design-uniform-maintenance', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'كيفية اختيار ملابس العمل المناسبة', path: '/blog/workwear/how-to-choosing', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'معلومات عن ملابس العمل', path: '/blog/workwear/on-clothing', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'أحذية السلامة من موردي ملابس عمال المرافق', path: '/blog/workwear/safety-shoes-from-uniform-workers-facilities', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'ملابس العمل: أنواعها ومواصفاتها وأهميتها في بيئة العمل', path: '/blog/workwear/clothing', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'أفضل موردي الزي المدرسي الموحد في الرياض', path: '/blog/academic-attire/academic-1', image: '/images/academic_attire/school_uniforms.jpeg' },
  { title: 'كيفية اختيار أقمشة الزي المدرسي المناسبة لمناخ السعودية', path: '/blog/academic-attire/academic-2', image: '/images/academic_attire/school_uniform_fabrics.jpeg' },
  { title: 'كيف يعكس الزي الرسمي الموحد هوية وقيم شركتك في السعودية؟', path: '/blog/corporate-uniforms/corporate-1', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'تصميم أزياء العاملين في الفنادق السعودية: بين الضيافة والهوية المحلية', path: '/blog/hospitality/hospitality-1', image: '/images/flight_crew/air_hospitality_uniforms.jpeg' },
  { title: 'أفضل الممارسات للعناية بالزي الموحد وإطالة عمره الافتراضي', path: '/blog/uniform-care/uniform-care-1', image: '/images/utility_services/maintenance_technician_clothing.jpeg' },
  { title: 'الزي الموحد في القطاعات المختلفة: خصائصه ومميزاته ومتطلباته', path: '/blog/workwear/uniform-sectors', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'الزي الموحد للشركات: استثمار استراتيجي للمؤسسات الناجحة', path: '/blog/workwear/corporate-uniform', image: '/images/utility_services/utility_uniforms.jpeg' },
  { title: 'أساسيات العناية بملابس العمل: دليل شامل للحفاظ على جودتها', path: '/blog/workwear/workwear-maintenance-guide', image: '/images/utility_services/maintenance_technician_clothing.jpeg' }
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

  return '/images/culinary_apparel/kitchen_staff_clothing.jpeg';
};

// مكون السلايدر:
const testimonials = [
  {
    name: 'أمجد الضبياني',
    image: '/images/author/أمجد_الضبياني.png',
    title: 'مدير الموارد البشرية - شركة الخليج',
    text: 'خدمة ممتازة وجودة عالية في الأقمشة والتصميم. فريق العمل متعاون وسريع الاستجابة.'
  },
  {
    name: 'حنين البقمي',
    image: '/images/author/حنين_البقمي.png',
    title: 'مديرة مشاريع - مؤسسة الريادة',
    text: 'التعامل مع يونيفورم كان احترافيًا من البداية للنهاية. أنصح الجميع بتجربتهم.'
  },
  {
    name: 'ريما السباعي',
    image: '/images/author/ريما_السباعي.png',
    title: 'مديرة تشغيل - مطاعم الذواقة',
    text: 'التصاميم عصرية والخدمة سريعة. شكراً لكم على الاهتمام بالتفاصيل.'
  },
  {
    name: 'سيف الهويمل',
    image: '/images/author/سيف_الهويمل.jpg',
    title: 'مالك مؤسسة الهويمل',
    text: 'أفضل تجربة زي موحد حصلت عليها. جودة وخدمة تفوق التوقعات.'
  },
  {
    name: 'شهد السهلي',
    image: '/images/author/شهد_السهلي.jpg',
    title: 'مديرة موارد بشرية',
    text: 'الالتزام بالمواعيد والدقة في التنفيذ. شكراً يونيفورم.'
  },
  {
    name: 'طلال المطيري',
    image: '/images/author/طلال_المطيري.jpg',
    title: 'مدير عام - شركة المطيري',
    text: 'خدمة عملاء رائعة وتصاميم تناسب جميع أفراد الفريق.'
  },
  {
    name: 'عبدالرحمن الزهراني',
    image: '/images/author/عبدالرحمن_الزهراني.jpg',
    title: 'مدير مشتريات',
    text: 'أنصح بالتعامل مع يونيفورم لكل من يبحث عن الجودة والاحترافية.'
  },
  {
    name: 'علي الهذيل',
    image: '/images/author/علي_الهذيل.jpg',
    title: 'مدير تشغيل',
    text: 'خدمة ممتازة وسرعة في التسليم. شكراً لكم.'
  },
  {
    name: 'غادة الفارس',
    image: '/images/author/غادة_الفارس.jpg',
    title: 'مديرة تسويق',
    text: 'تصاميم مبتكرة وجودة عالية. تجربة رائعة.'
  },
  {
    name: 'ليان البليهد',
    image: '/images/author/ليان_البليهد.jpg',
    title: 'مديرة مشاريع',
    text: 'الزي الموحد أنيق ومريح. شكراً يونيفورم.'
  },
  {
    name: 'مها العمودي',
    image: '/images/author/مها_العمودي.jpg',
    title: 'مديرة موارد بشرية',
    text: 'خدمة عملاء ممتازة واهتمام بالتفاصيل.'
  },
  {
    name: 'ياسر البليهي',
    image: '/images/author/ياسر_البليهي.jpg',
    title: 'مدير عام',
    text: 'أفضل شركة زي موحد تعاملت معها. أنصح بها للجميع.'
  },
];

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + visible < total ? prev + 1 : 0));
  const prev = () => setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : total - visible));

  return (
    <div className="relative">
      <button onClick={prev} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-2 shadow-md"><span>&#8592;</span></button>
      <div className="flex gap-6 justify-center">
        {testimonials.slice(current, current + visible).map((t, idx) => (
          <div key={t.name} className="bg-white p-8 rounded-lg shadow relative w-80 flex-shrink-0 text-center border border-gray-100">
            <div className="flex flex-col items-center mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden relative mb-2 border-2 border-blue-200">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <h4 className="font-semibold text-lg">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
            <div className="text-blue-600 text-3xl mb-2">"</div>
            <p className="text-gray-700">{t.text}</p>
          </div>
        ))}
      </div>
      <button onClick={next} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-2 shadow-md"><span>&#8594;</span></button>
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: total - visible + 1 }).map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full ${current === i ? 'bg-blue-600' : 'bg-blue-200'}`}></button>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [visibleCount, setVisibleCount] = useState(6);

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

      {/* All Posts Section - 100 Articles from site_articles.txt */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">جميع المقالات</h2>
          <p className="text-xl text-center text-gray-600 mb-8">تصفح جميع مقالاتنا الـ 100 المتخصصة في مجال الأزياء الموحدة</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteArticles.map((article, idx) => (
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">آراء العملاء</h2>
          <p className="text-xl text-center text-gray-600 mb-12">استمع إلى تجارب عملائنا الحقيقيين مع يونيفورم</p>
          {/* سلايدر آراء العملاء */}
          <TestimonialsSlider />
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

      {/* Blog Cards Section (showing visiblePosts) */}
      {visiblePosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <Link
              key={post.id}
              href={`${post.url}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 w-full bg-gray-200">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <div className="mt-auto flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {categoryLabels[post.category] || post.category}
                  </span>
                  <span className="text-blue-600 text-sm font-medium">قراءة المزيد →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 