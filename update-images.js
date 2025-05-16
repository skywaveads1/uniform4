const fs = require('fs');

// Read the file
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Make replacements for each article
content = content.replace(
  /path: '\/blog\/academic-attire\/academic-1', image: '\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg'/,
  "path: '/blog/academic-attire/academic-1', image: '/images/academic_attire/school_uniforms_riyadh.jpeg'"
);

content = content.replace(
  /path: '\/blog\/academic-attire\/academic-2', image: '\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg'/,
  "path: '/blog/academic-attire/academic-2', image: '/images/academic_attire/school_uniform_fabrics.jpeg'"
);

content = content.replace(
  /path: '\/blog\/corporate-uniforms\/corporate-1', image: '\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg'/,
  "path: '/blog/corporate-uniforms/corporate-1', image: '/images/corporate_uniforms/corporate_identity_uniforms.jpeg'"
);

content = content.replace(
  /path: '\/blog\/hospitality\/hospitality-1', image: '\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg'/,
  "path: '/blog/hospitality/hospitality-1', image: '/images/hospitality/hotel_staff_uniforms.jpeg'"
);

content = content.replace(
  /path: '\/blog\/uniform-care\/uniform-care-1', image: '\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg'/,
  "path: '/blog/uniform-care/uniform-care-1', image: '/images/uniform_care/uniform_maintenance.jpg'"
);

content = content.replace(
  /path: '\/blog\/workwear\/workwear-maintenance-guide', image: '\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg'/,
  "path: '/blog/workwear/workwear-maintenance-guide', image: '/images/workwear/workwear_maintenance.jpeg'"
);

// Write the updated content back to the file
fs.writeFileSync('src/app/page.tsx', content);

console.log('Updated image paths successfully!'); 