export interface Article {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const categories: Category[] = [
  {
    id: "academic-uniforms",
    title: "الزي الأكاديمي",
    description: "أزياء الجامعات والمدارس والكليات",
    imageUrl: "/images/categories/academic_uniforms.jpg"
  },
  {
    id: "medical-uniforms",
    title: "أزياء طبية",
    description: "أزياء للأطباء والممرضين والعاملين في المجال الطبي",
    imageUrl: "/images/categories/medical_uniforms.jpg"
  },
  {
    id: "chef-uniforms",
    title: "أزياء الطهاة",
    description: "أزياء للطهاة والعاملين في المطابخ",
    imageUrl: "/images/categories/chef_uniforms.jpg"
  },
  {
    id: "aviation-uniforms",
    title: "أزياء الطيران",
    description: "أزياء لطاقم الطائرة والطيارين",
    imageUrl: "/images/categories/aviation_uniforms.jpg"
  },
  {
    id: "protective-uniforms",
    title: "أزياء الخدمات الوقائية",
    description: "أزياء رجال الإطفاء والشرطة وخدمات الأمن",
    imageUrl: "/images/categories/protective_uniforms.jpg"
  },
  {
    id: "certifications",
    title: "الشهادات",
    description: "شهادات واعتمادات في مجال الزي الموحد",
    imageUrl: "/images/categories/certifications.jpg"
  },
  {
    id: "support-uniforms",
    title: "أزياء الخدمات المساندة",
    description: "أزياء عمال النظافة والصيانة وغيرها",
    imageUrl: "/images/categories/support_uniforms.jpg"
  }
];

export const articles: Article[] = [
  // Flight Crew / Aviation Uniforms
  {
    id: "flight-1",
    title: "اعتبارات تصميم زي شركات الطيران",
    url: "/blog/flight-crew/flight-1",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-2",
    title: "اختيار أقمشة زي طاقم الطائرة: الجودة والمتانة",
    url: "/blog/flight-crew/flight-2",
    imageUrl: "/images/flight_crew/flight_crew_uniform_fabrics.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-3",
    title: "أزياء الطيران النسائية: تطورها وخصائصها الحديثة",
    url: "/blog/flight-crew/flight-3",
    imageUrl: "/images/flight_crew/female_male_air_crew_wear.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-4",
    title: "الزي الرسمي لطياري وقائدي الطائرات: المواصفات والرموز",
    url: "/blog/flight-crew/flight-4",
    imageUrl: "/images/flight_crew/pilot_attendant_uniforms.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-5",
    title: "تأثير الثقافة المحلية على تصميم أزياء شركات الطيران",
    url: "/blog/flight-crew/flight-5",
    imageUrl: "/images/flight_crew/uniforms_saudi_arabia.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-6",
    title: "دور أوشحة ولفحات الرقبة في استكمال زي مضيفات الطيران",
    url: "/blog/flight-crew/flight-6",
    imageUrl: "/images/flight_crew/flight_crew_scarves.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-7",
    title: "متطلبات السلامة والأمان في تصميم ملابس طاقم الطائرة",
    url: "/blog/flight-crew/flight-7",
    imageUrl: "/images/flight_crew/flight_crew_safety_requirements.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-8",
    title: "أفضل الممارسات للحفاظ على مظهر زي الطيران بشكل مثالي",
    url: "/blog/flight-crew/flight-8",
    imageUrl: "/images/flight_crew/best_flight_crew_attire.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-9",
    title: "موردو يونيفورم الطيران المتخصصون في الشرق الأوسط",
    url: "/blog/flight-crew/flight-9",
    imageUrl: "/images/flight_crew/flight_crew_uniform_manufacturer.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-10",
    title: "كيف يتم تصميم زي طاقم طيران يعكس الثقافة السعودية؟",
    url: "/blog/flight-crew/flight-10",
    imageUrl: "/images/flight_crew/uniforms_saudi_arabia.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-11",
    title: "مقارنة بين زي طواقم شركات الطيران المختلفة العاملة في المملكة",
    url: "/blog/flight-crew/flight-11",
    imageUrl: "/images/flight_crew/flight_crew_uniforms_riyadh.jpg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-12",
    title: "تطور أزياء مضيفات الطيران عبر العصور",
    url: "/blog/flight-crew/flight-12",
    imageUrl: "/images/flight_crew/flight_attendant_dress.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-13",
    title: "أهمية التصميم الموحد لزي طاقم الطائرة",
    url: "/blog/flight-crew/flight-13",
    imageUrl: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-14",
    title: "كيفية اختيار الأحذية المناسبة لطاقم الطيران",
    url: "/blog/flight-crew/flight-14",
    imageUrl: "/images/flight_crew/flight_crew_uniform_accessories.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-15",
    title: "الإكسسوارات المكملة لزي طاقم الطيران",
    url: "/blog/flight-crew/flight-15",
    imageUrl: "/images/flight_crew/flight_crew_uniform_accessories.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-16",
    title: "تأثير ألوان زي الطيران على انطباعات المسافرين",
    url: "/blog/flight-crew/flight-16",
    imageUrl: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-17",
    title: "أنواع الأقمشة المستخدمة في تصنيع أزياء الطيران",
    url: "/blog/flight-crew/flight-17",
    imageUrl: "/images/flight_crew/flight_crew_uniform_fabrics.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-18",
    title: "الفرق بين زي الطيران للرحلات الداخلية والدولية",
    url: "/blog/flight-crew/flight-18",
    imageUrl: "/images/flight_crew/cabin_crew_uniforms.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-19",
    title: "الزي الموحد لموظفي الخدمات الأرضية في المطارات",
    url: "/blog/flight-crew/flight-19",
    imageUrl: "/images/flight_crew/air_crew_attire.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-20",
    title: "تاريخ تطور زي الخطوط الجوية السعودية",
    url: "/blog/flight-crew/flight-20",
    imageUrl: "/images/flight_crew/uniforms_saudi_arabia.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-21",
    title: "الاتجاهات المستقبلية في تصميم أزياء الطيران",
    url: "/blog/flight-crew/flight-21",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-22",
    title: "أزياء طاقم الطائرات الخاصة: الفخامة والتميز",
    url: "/blog/flight-crew/flight-22",
    imageUrl: "/images/flight_crew/corporate_flight_crew_uniforms.jpg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-23",
    title: "أزياء الطيران ودورها في بناء الهوية المؤسسية لشركات الطيران",
    url: "/blog/flight-crew/flight-23",
    imageUrl: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-24",
    title: "بروتوكول ارتداء الزي الرسمي خارج ساعات العمل لطاقم الطيران",
    url: "/blog/flight-crew/flight-24",
    imageUrl: "/images/flight_crew/flight_crew_uniforms.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-25",
    title: "مستقبل تصميم زي طواقم الطيران: الابتكار والتقنية",
    url: "/blog/flight-crew/flight-25",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  // مقالات إضافية في قسم أزياء الطيران
  {
    id: "airline-uniform-design-considerations",
    title: "اعتبارات تصميم زي شركات الطيران: توازن الأناقة والوظيفة",
    url: "/blog/aviation-uniforms/airline-uniform-design-considerations",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "airline-uniform-design-evolution",
    title: "تطور تصميم زي شركات الطيران عبر العصور",
    url: "/blog/aviation-uniforms/airline-uniform-design-evolution",
    imageUrl: "/images/flight_crew/flight_crew_uniforms_riyadh.jpg",
    category: "aviation-uniforms"
  },
  {
    id: "aviation-uniform-standards-2025",
    title: "معايير زي الطيران لعام 2025",
    url: "/blog/aviation-uniforms/aviation-uniform-standards-2025",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "crew-aviation-on-uniform",
    title: "تأثير طاقم الطيران على الزي الموحد",
    url: "/blog/aviation-uniforms/crew-aviation-on-uniform",
    imageUrl: "/images/flight_crew/crew_uniforms.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "in-design-uniform-aviation",
    title: "تصميم الزي الموحد في الطيران",
    url: "/blog/aviation-uniforms/in-design-uniform-aviation",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "uniform-aviation-in-kingdom",
    title: "تصميم أزياء الطيران في المملكة العربية السعودية",
    url: "/blog/aviation-uniforms/uniform-aviation-in-kingdom",
    imageUrl: "/images/flight_crew/uniforms_saudi_arabia.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "uniform-crew",
    title: "زي طاقم الطائرة",
    url: "/blog/aviation-uniforms/uniform-crew",
    imageUrl: "/images/flight_crew/cabin_crew_uniforms.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "aviation-in",
    title: "الطيران في تصميم الأزياء",
    url: "/blog/aviation-uniforms/aviation-in",
    imageUrl: "/images/flight_crew/flight_attire.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "best-on-uniform-aviation",
    title: "أفضل الممارسات في زي الطيران",
    url: "/blog/aviation-uniforms/best-on-uniform-aviation",
    imageUrl: "/images/flight_crew/best_flight_crew_attire.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "in-design-clothing-crew-aircraft",
    title: "تصميم ملابس طاقم الطائرة",
    url: "/blog/aviation-uniforms/in-design-clothing-crew-aircraft",
    imageUrl: "/images/flight_crew/crew_uniform_solutions.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "design-uniform-crew-aviation",
    title: "تصميم زي طاقم الطيران",
    url: "/blog/aviation-uniforms/design-uniform-crew-aviation",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "airline-corporate-identity-uniforms",
    title: "أزياء شركات الطيران كعنصر في الهوية المؤسسية",
    url: "/blog/aviation-uniforms/airline-corporate-identity-uniforms",
    imageUrl: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "cabin-crew-uniform-fabric-selection",
    title: "اختيار أقمشة زي طاقم المقصورة",
    url: "/blog/aviation-uniforms/cabin-crew-uniform-fabric-selection",
    imageUrl: "/images/flight_crew/flight_crew_uniform_fabrics.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "design-uniform",
    title: "مبادئ تصميم زي الطيران",
    url: "/blog/aviation-uniforms/design-uniform",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "in-design-uniform-aviation-Saudi",
    title: "تصميم زي الطيران في المملكة العربية السعودية",
    url: "/blog/aviation-uniforms/in-design-uniform-aviation-Saudi",
    imageUrl: "/images/flight_crew/uniforms_saudi_arabia.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "uniforms-saudi-arabia",
    title: "أزياء الطيران في المملكة السعودية: التطور والتميز",
    url: "/blog/flight-crew/uniforms-saudi-arabia",
    imageUrl: "/images/flight_crew/uniforms_saudi_arabia.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "flight-crew-uniform-design",
    title: "تصميم زي طاقم الطيران",
    url: "/blog/flight-crew/flight-crew-uniform-design",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "air-crew-attire",
    title: "ملابس طاقم الطيران",
    url: "/blog/flight-crew/air-crew-attire",
    imageUrl: "/images/flight_crew/air_crew_attire.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "modern-flight-attendant-fashion",
    title: "أزياء المضيفات الحديثة",
    url: "/blog/flight-crew/modern-flight-attendant-fashion",
    imageUrl: "/images/flight_crew/flight_attendant_dress.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "comfort-safety-airline-uniforms",
    title: "الراحة والسلامة في أزياء شركات الطيران",
    url: "/blog/flight-crew/comfort-safety-airline-uniforms",
    imageUrl: "/images/flight_crew/flight_crew_safety_requirements.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "design-uniform-flight",
    title: "تصميم الزي الموحد",
    url: "/blog/flight-crew/design-uniform",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "in-design-uniform-aviation-saudi",
    title: "تصميم أزياء الطيران في المملكة العربية السعودية",
    url: "/blog/flight-crew/in-design-uniform-aviation-saudi",
    imageUrl: "/images/flight_crew/uniforms_saudi_arabia.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "airline-uniform-design",
    title: "تصميم زي شركات الطيران",
    url: "/blog/flight-crew/airline-uniform-design",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "ground-crew-attire",
    title: "ملابس طاقم الخدمات الأرضية",
    url: "/blog/flight-crew/ground-crew-attire",
    imageUrl: "/images/flight_crew/air_crew_attire.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "pilot-uniform",
    title: "زي الطيار",
    url: "/blog/flight-crew/pilot-uniform",
    imageUrl: "/images/flight_crew/captain_copilot_wear.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "stewardess-uniform",
    title: "زي المضيفات",
    url: "/blog/flight-crew/stewardess-uniform",
    imageUrl: "/images/flight_crew/flight_attendant_dress.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "aviation",
    title: "أساسيات تصميم أزياء الطيران",
    url: "/blog/aviation-uniforms/aviation",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "aviation-page",
    title: "الابتكار في تصميم أزياء الطيران",
    url: "/blog/aviation/page",
    imageUrl: "/images/flight_crew/flight_crew_uniform_design.jpeg",
    category: "aviation-uniforms"
  },
  {
    id: "airline-corporate-identity",
    title: "زي الطيران وهوية الشركة المؤسسية",
    url: "/blog/aviation-uniforms/airline-corporate-identity",
    imageUrl: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
    category: "aviation-uniforms"
  },
  
  // Chef Uniforms
  {
    id: "culinary-1",
    title: "معايير تصميم زي الطهاة العالمية",
    url: "/blog/culinary-apparel/culinary-1",
    imageUrl: "/images/culinary_apparel/chef_uniforms.jpeg",
    category: "chef-uniforms"
  },
  {
    id: "culinary-2",
    title: "متطلبات زي طاقم المطبخ حسب الوظيفة والتخصص",
    url: "/blog/culinary-apparel/culinary-2",
    imageUrl: "/images/culinary_apparel/kitchen_staff_clothing.jpeg",
    category: "chef-uniforms"
  },
  {
    id: "design-in-Saudi",
    title: "تصميم أزياء الطهاة في السعودية",
    url: "/blog/chef-uniforms/design-in-Saudi",
    imageUrl: "/images/culinary_apparel/culinary_uniforms_riyadh.jpeg",
    category: "chef-uniforms"
  },
  {
    id: "culinary_apparel-culinary-17",
    title: "ملابس الطهاة الحديثة",
    url: "/blog/chef-uniforms/culinary_apparel-culinary-17",
    imageUrl: "/images/culinary_apparel/modern_traditional_chef_wear.jpeg",
    category: "chef-uniforms"
  },
  {
    id: "in-design-clothing-chef-2025",
    title: "تصميم ملابس الطهاة لعام 2025",
    url: "/blog/chef-uniforms/in-design-clothing-chef-2025",
    imageUrl: "/images/culinary_apparel/culinary_apparel_design.jpeg",
    category: "chef-uniforms"
  },
  {
    id: "uniform-in-services-catering-Saudi",
    title: "الزي الموحد في خدمات التموين السعودية",
    url: "/blog/chef-uniforms/uniform-in-services-catering-Saudi",
    imageUrl: "/images/culinary_apparel/catering_kitchen_uniforms.jpeg",
    category: "chef-uniforms"
  },
  
  // Medical Uniforms
  {
    id: "clinic-1",
    title: "أفضل أنواع السكراب الطبي للممرضين والأطباء",
    url: "/blog/clinic-wear/clinic-1",
    imageUrl: "/images/clinic_wear/clinic_scrubs.jpg",
    category: "medical-uniforms"
  },
  {
    id: "clinic-2-1",
    title: "معايير اختيار الملابس الطبية حسب متطلبات وزارة الصحة",
    url: "/blog/clinic-wear/clinic-2",
    imageUrl: "/images/clinic_wear/clinic_staff_uniforms.jpg",
    category: "medical-uniforms"
  },
  {
    id: "clinic-2-2",
    title: "اللوائح التنظيمية للزي الطبي في المنشآت الصحية السعودية",
    url: "/blog/clinic-wear/clinic-2",
    imageUrl: "/images/clinic_wear/clinic_uniforms.jpeg",
    category: "medical-uniforms"
  },
  
  // Protective Uniforms
  {
    id: "protective-1",
    title: "مواصفات زي الحرس الأمني المثالي",
    url: "/blog/protective-services/protective-1",
    imageUrl: "/images/protective_services/security_guard_uniforms.jpeg",
    category: "protective-uniforms"
  },
  {
    id: "protective-2",
    title: "معايير اختيار زي الخدمات الوقائية",
    url: "/blog/protective-services/protective-2",
    imageUrl: "/images/protective_services/protective_services_uniforms.jpeg",
    category: "protective-uniforms"
  },
  {
    id: "uniform-security-materials",
    title: "المواد المستخدمة في تصنيع أزياء الأمن: دليل شامل",
    url: "/blog/security-uniforms/uniform-security-materials",
    imageUrl: "/images/protective_services/security_guard_uniforms.jpeg",
    category: "protective-uniforms"
  },
  {
    id: "importance-uniform-on-security",
    title: "أهمية الزي الموحد في تعزيز مستوى الأمن والأمان",
    url: "/blog/security-uniforms/importance-uniform-on-security",
    imageUrl: "/images/protective_services/security_guard_uniforms.jpeg",
    category: "protective-uniforms"
  },
  {
    id: "security-uniform-specifications",
    title: "مواصفات زي الأمن المثالي",
    url: "/blog/security-uniforms/security-uniform-specifications",
    imageUrl: "/images/protective_services/security_guard_uniforms.jpeg",
    category: "protective-uniforms"
  },
  {
    id: "importance-uniform-on-security-2",
    title: "تأثير الزي الموحد على مستوى الأمن والحماية",
    url: "/blog/security_uniforms/importance-uniform-on-security",
    imageUrl: "/images/protective_services/security_guard_uniforms.jpeg",
    category: "protective-uniforms"
  },
  {
    id: "security-uniform-standards",
    title: "الزي الموحد للحراسة الأمنية: المواصفات والمعايير",
    url: "/blog/security_uniforms/security-uniform-standards",
    imageUrl: "/images/protective_services/professional_security_uniforms.jpeg",
    category: "protective-uniforms"
  },
  {
    id: "importance-rank-badges",
    title: "أهمية شارات الرتب في أزياء شركات الأمن",
    url: "/blog/security_uniforms/importance-rank-badges",
    imageUrl: "/images/protective_services/security_badges_patches.jpeg",
    category: "protective-uniforms"
  },
  {
    id: "security-uniform-colors-psychology",
    title: "الألوان وتأثيرها النفسي في أزياء الأمن والحراسة",
    url: "/blog/security_uniforms/security-uniform-colors-psychology",
    imageUrl: "/images/protective_services/security_services_clothing_supplier.jpeg",
    category: "protective-uniforms"
  },
  
  // Support Uniforms
  {
    id: "utility-1",
    title: "اختيار أفضل ملابس عمل (أفرولات) لقطاع الصيانة والمرافق بالسعودية",
    url: "/blog/utility-services/utility-1",
    imageUrl: "/images/utility_services/maintenance_technician_clothing.jpeg",
    category: "support-uniforms"
  },
  {
    id: "utility-2",
    title: "أهمية وخصائص الأقمشة المقاومة في زي عمال المرافق",
    url: "/blog/utility-services/utility-2",
    imageUrl: "/images/utility_services/utility_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "clothing-maintenance-work-health",
    title: "العناية بملابس العمل وأثرها على الصحة المهنية",
    url: "/blog/workwear/clothing-maintenance-work-health",
    imageUrl: "/images/utility_services/safety_standard_compliant_workwear.jpeg",
    category: "support-uniforms"
  },
  {
    id: "utility-services-uniform-standards",
    title: "معايير الزي الموحد لشركات الخدمات والمرافق",
    url: "/blog/workwear/utility-services-uniform-standards",
    imageUrl: "/images/utility_services/utility_services_uniform_supplier.jpeg",
    category: "support-uniforms"
  },
  {
    id: "field-service-technician-workwear",
    title: "ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات",
    url: "/blog/workwear/field-service-technician-workwear",
    imageUrl: "/images/utility_services/field_worker_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "uniform",
    title: "الزي الموحد: أهميته وتأثيره على بيئة العمل",
    url: "/blog/workwear/uniform",
    imageUrl: "/images/utility_services/utility_company_identity_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "maintenance-worker-uniform-requirements",
    title: "متطلبات الزي الموحد لعمال الصيانة والتشغيل",
    url: "/blog/workwear/maintenance-worker-uniform-requirements",
    imageUrl: "/images/utility_services/utility_emergency_crew_wear.jpeg",
    category: "support-uniforms"
  },
  {
    id: "workwear-2",
    title: "أسس اختيار ملابس العمل الوظيفية",
    url: "/blog/workwear/workwear-2",
    imageUrl: "/images/utility_services/durable_utility_clothing.jpeg",
    category: "support-uniforms"
  },
  {
    id: "in-clothing-maintenance",
    title: "العناية بملابس العمل",
    url: "/blog/workwear/in-clothing-maintenance",
    imageUrl: "/images/utility_services/maintenance_technician_clothing.jpeg",
    category: "support-uniforms"
  },
  {
    id: "importance-from-uniform",
    title: "أهمية الزي الموحد",
    url: "/blog/workwear/importance-from-uniform",
    imageUrl: "/images/utility_services/utility_company_logo_embroidery.jpeg",
    category: "support-uniforms"
  },
  {
    id: "uniform-in-Saudi",
    title: "الزي الموحد في السعودية",
    url: "/blog/workwear/uniform-in-Saudi",
    imageUrl: "/images/utility_services/utility_supervisor_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "clothing-in-kingdom",
    title: "ملابس العمل في المملكة",
    url: "/blog/workwear/clothing-in-kingdom",
    imageUrl: "/images/utility_services/utility_uniforms_riyadh.jpeg",
    category: "support-uniforms"
  },
  {
    id: "uniform-in",
    title: "الزي الموحد",
    url: "/blog/workwear/uniform-in",
    imageUrl: "/images/utility_services/energy_water_sector_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "maintenance",
    title: "صيانة الملابس",
    url: "/blog/workwear/maintenance",
    imageUrl: "/images/utility_services/routine_maintenance_team_wear.jpeg",
    category: "support-uniforms"
  },
  {
    id: "clothing-facilities-in-Dammam",
    title: "مرافق ملابس العمل في الدمام",
    url: "/blog/workwear/clothing-facilities-in-Dammam",
    imageUrl: "/images/utility_services/utility_attire_dammam.jpeg",
    category: "support-uniforms"
  },
  {
    id: "design-uniform-maintenance",
    title: "تصميم زي الصيانة الموحد",
    url: "/blog/workwear/design-uniform-maintenance",
    imageUrl: "/images/utility_services/utility_uniform_design.jpeg",
    category: "support-uniforms"
  },
  {
    id: "how-to-choosing",
    title: "كيفية اختيار ملابس العمل المناسبة",
    url: "/blog/workwear/how-to-choosing",
    imageUrl: "/images/utility_services/custom_utility_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "on-clothing",
    title: "معلومات عن ملابس العمل",
    url: "/blog/workwear/on-clothing",
    imageUrl: "/images/utility_services/utility_company_uniform_solutions.jpeg",
    category: "support-uniforms"
  },
  {
    id: "safety-shoes-from-uniform-workers-facilities",
    title: "أحذية السلامة من موردي ملابس عمال المرافق",
    url: "/blog/workwear/safety-shoes-from-uniform-workers-facilities",
    imageUrl: "/images/protective_services/security_boots.jpeg",
    category: "support-uniforms"
  },
  {
    id: "clothing",
    title: "ملابس العمل: أنواعها ومواصفاتها وأهميتها في بيئة العمل",
    url: "/blog/workwear/clothing",
    imageUrl: "/images/utility_services/maintenance_technician_clothing.jpeg",
    category: "support-uniforms"
  },
  {
    id: "uniform-sectors",
    title: "الزي الموحد في القطاعات المختلفة: خصائصه ومميزاته ومتطلباته",
    url: "/blog/workwear/uniform-sectors",
    imageUrl: "/images/utility_services/utility_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "corporate-uniform",
    title: "الزي الموحد للشركات: استثمار استراتيجي للمؤسسات الناجحة",
    url: "/blog/workwear/corporate-uniform",
    imageUrl: "/images/utility_services/utility_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "workwear-maintenance-guide",
    title: "أساسيات العناية بملابس العمل: دليل شامل للحفاظ على جودتها",
    url: "/blog/workwear/workwear-maintenance-guide",
    imageUrl: "/images/utility_services/maintenance_technician_clothing.jpeg",
    category: "support-uniforms"
  },
  
  // Academic Uniforms
  {
    id: "academic-1",
    title: "أفضل موردي الزي المدرسي الموحد في الرياض",
    url: "/blog/academic-attire/academic-1",
    imageUrl: "/images/academic_attire/school_uniforms.jpeg",
    category: "academic-uniforms"
  },
  {
    id: "academic-2",
    title: "كيفية اختيار أقمشة الزي المدرسي المناسبة لمناخ السعودية",
    url: "/blog/academic-attire/academic-2",
    imageUrl: "/images/academic_attire/school_uniform_fabrics.jpeg",
    category: "academic-uniforms"
  },
  
  // Miscellaneous
  {
    id: "corporate-1",
    title: "كيف يعكس الزي الرسمي الموحد هوية وقيم شركتك في السعودية؟",
    url: "/blog/corporate-uniforms/corporate-1",
    imageUrl: "/images/utility_services/utility_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "hospitality-1",
    title: "تصميم أزياء العاملين في الفنادق السعودية: بين الضيافة والهوية المحلية",
    url: "/blog/hospitality/hospitality-1",
    imageUrl: "/images/flight_crew/air_hospitality_uniforms.jpeg",
    category: "support-uniforms"
  },
  {
    id: "uniform-care-1",
    title: "أفضل الممارسات للعناية بالزي الموحد وإطالة عمره الافتراضي",
    url: "/blog/uniform-care/uniform-care-1",
    imageUrl: "/images/utility_services/maintenance_technician_clothing.jpeg",
    category: "certifications"
  }
]; 