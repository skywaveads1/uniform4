const fs = require('fs');

// Read the page.tsx file
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Update culinary/chef articles with more appropriate images
content = content.replace(
  /path: '\/blog\/culinary-apparel\/culinary-1', image: '\/images\/culinary_apparel\/global_chef_standards\.jpeg'/,
  "path: '/blog/culinary-apparel/culinary-1', image: '/images/culinary_apparel/header_chef_uniform.jpeg'"
);

content = content.replace(
  /path: '\/blog\/culinary-apparel\/culinary-2', image: '\/images\/culinary_apparel\/kitchen_staff_specialization\.jpeg'/,
  "path: '/blog/culinary-apparel/culinary-2', image: '/images/culinary_apparel/culinary_arts_uniforms.jpeg'"
);

content = content.replace(
  /path: '\/blog\/chef-uniforms\/design-in-Saudi', image: '\/images\/culinary_apparel\/saudi_chef_designs\.jpeg'/,
  "path: '/blog/chef-uniforms/design-in-Saudi', image: '/images/culinary_apparel/chef_jackets.jpeg'"
);

content = content.replace(
  /path: '\/blog\/chef-uniforms\/culinary_apparel-culinary-17', image: '\/images\/culinary_apparel\/modern_chef_attire\.jpeg'/,
  "path: '/blog/chef-uniforms/culinary_apparel-culinary-17', image: '/images/culinary_apparel/chef_coats.jpeg'"
);

content = content.replace(
  /path: '\/blog\/chef-uniforms\/in-design-clothing-chef-2025', image: '\/images\/culinary_apparel\/chef_2025_trends\.jpeg'/,
  "path: '/blog/chef-uniforms/in-design-clothing-chef-2025', image: '/images/culinary_apparel/modern_traditional_chef_wear.jpeg'"
);

content = content.replace(
  /path: '\/blog\/chef-uniforms\/uniform-in-services-catering-Saudi', image: '\/images\/culinary_apparel\/saudi_catering_uniforms\.jpeg'/,
  "path: '/blog/chef-uniforms/uniform-in-services-catering-Saudi', image: '/images/culinary_apparel/catering_kitchen_uniforms.jpeg'"
);

// Update clinic/medical articles with more appropriate images
content = content.replace(
  /path: '\/blog\/clinic-wear\/clinic-1', image: '\/images\/clinic_wear\/top_medical_scrubs\.jpeg'/,
  "path: '/blog/clinic-wear/clinic-1', image: '/images/clinic_wear/medical_wear.jpeg'"
);

content = content.replace(
  /path: '\/blog\/clinic-wear\/clinic-2', image: '\/images\/clinic_wear\/ministry_health_standards\.jpeg'/,
  "path: '/blog/clinic-wear/clinic-2', image: '/images/clinic_wear/header_medical_uniform.jpeg'"
);

content = content.replace(
  /path: '\/blog\/clinic-wear\/clinic-2', image: '\/images\/clinic_wear\/saudi_medical_regulations\.jpeg'/,
  "path: '/blog/clinic-wear/clinic-2', image: '/images/clinic_wear/clinic_staff_uniforms.jpg'"
);

// Update security/protective services articles with more appropriate images
content = content.replace(
  /path: '\/blog\/protective-services\/protective-1', image: '\/images\/protective_services\/protective_uniforms_quality\.jpeg'/,
  "path: '/blog/protective-services/protective-1', image: '/images/protective_services/header_security_uniform.jpeg'"
);

content = content.replace(
  /path: '\/blog\/protective-services\/protective-2', image: '\/images\/protective_services\/protective_services_uniforms\.jpeg'/,
  "path: '/blog/protective-services/protective-2', image: '/images/protective_services/security_guard_uniforms.jpeg'"
);

content = content.replace(
  /path: '\/blog\/security-uniforms\/uniform-security-materials', image: '\/images\/protective_services\/security_materials_guide\.jpeg'/,
  "path: '/blog/security-uniforms/uniform-security-materials', image: '/images/security_uniforms/security_uniform_design.jpeg'"
);

content = content.replace(
  /path: '\/blog\/security-uniforms\/importance-uniform-on-security', image: '\/images\/protective_services\/enhancing_security_uniforms\.jpeg'/,
  "path: '/blog/security-uniforms/importance-uniform-on-security', image: '/images/protective_services/professional_security_uniforms.jpeg'"
);

content = content.replace(
  /path: '\/blog\/security-uniforms\/security-uniform-specifications', image: '\/images\/protective_services\/ideal_security_uniform\.jpeg'/,
  "path: '/blog/security-uniforms/security-uniform-specifications', image: '/images/security_uniforms/header_security_uniform.jpeg'"
);

content = content.replace(
  /path: '\/blog\/security_uniforms\/importance-uniform-on-security', image: '\/images\/protective_services\/uniform_protection_impact\.jpeg'/,
  "path: '/blog/security_uniforms/importance-uniform-on-security', image: '/images/protective_services/facility_protection_uniforms.jpeg'"
);

content = content.replace(
  /path: '\/blog\/security_uniforms\/security-uniform-standards', image: '\/images\/protective_services\/guard_uniform_standards\.jpeg'/,
  "path: '/blog/security_uniforms/security-uniform-standards', image: '/images/protective_services/security_services_attire.jpeg'"
);

content = content.replace(
  /path: '\/blog\/security_uniforms\/importance-rank-badges', image: '\/images\/protective_services\/rank_badges_significance\.jpeg'/,
  "path: '/blog/security_uniforms/importance-rank-badges', image: '/images/security_uniforms/rank_badges.jpeg'"
);

content = content.replace(
  /path: '\/blog\/security_uniforms\/security-uniform-colors-psychology', image: '\/images\/protective_services\/colors_psychological_security\.jpeg'/,
  "path: '/blog/security_uniforms/security-uniform-colors-psychology', image: '/images/protective_services/high_visibility_protection_uniforms.jpeg'"
);

// Update utility services and workwear articles
content = content.replace(
  /path: '\/blog\/utility-services\/utility-1', image: '\/images\/utility_services\/maintenance_overalls_selection\.jpeg'/,
  "path: '/blog/utility-services/utility-1', image: '/images/utility_services/utility_uniforms.jpeg'"
);

content = content.replace(
  /path: '\/blog\/utility-services\/utility-2', image: '\/images\/utility_services\/resistant_fabric_properties\.jpeg'/,
  "path: '/blog/utility-services/utility-2', image: '/images/utility_services/maintenance_technician_clothing.jpeg'"
);

// Update testimonials images
for (let i = 1; i <= 12; i++) {
  content = content.replace(
    new RegExp(`name: '[^']+',\\s+image: '/images/flight_crew/crew_uniform_visual_identity\\.jpeg'`, 'g'),
    `name: '$1', image: '/images/testimonials/testimonial_${Math.floor(Math.random() * 5) + 1}.jpeg'`
  );
}

// Update slides with better images
content = content.replace(
  /image: '\/images\/flight_crew\/air_crew_attire\.jpeg',\s+title: 'أزياء طيران احترافية'/,
  "image: '/images/flight_crew/cabin_crew_uniforms.jpeg', title: 'أزياء طيران احترافية'"
);

content = content.replace(
  /image: '\/images\/clinic_wear\/medical_wear\.jpeg',\s+title: 'أزياء طبية متخصصة'/,
  "image: '/images/clinic_wear/header_medical_uniform.jpeg', title: 'أزياء طبية متخصصة'"
);

content = content.replace(
  /image: '\/images\/culinary_apparel\/kitchen_staff_clothing\.jpeg',\s+title: 'أزياء الضيافة والمطاعم'/,
  "image: '/images/culinary_apparel/header_chef_uniform.jpeg', title: 'أزياء الضيافة والمطاعم'"
);

// Write the updated content back to page.tsx
fs.writeFileSync('src/app/page.tsx', content);

console.log('Homepage images updated successfully!'); 