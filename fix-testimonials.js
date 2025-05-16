const fs = require('fs');

// Read the file
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Update testimonials
const testimonialsSection = content.match(/const testimonials = \[([\s\S]*?)\];/);
if (testimonialsSection) {
  let testimonialsContent = testimonialsSection[1];
  
  // Replace all testimonial images with unique images
  for (let i = 1; i <= 12; i++) {
    const testimonialsRegex = new RegExp(`name: '([^']+)',\\s+image: '\/images\/flight_crew\/crew_uniform_visual_identity\\.jpeg'`, 'g');
    testimonialsContent = testimonialsContent.replace(testimonialsRegex, (match, name) => {
      const imageIndex = (i % 5) + 1;
      return `name: '${name}', image: '/images/testimonials/testimonial_${imageIndex}.jpeg'`;
    });
  }

  // Replace the testimonials section with the updated content
  content = content.replace(/const testimonials = \[([\s\S]*?)\];/, `const testimonials = [${testimonialsContent}];`);
}

// Also update slides with better images
content = content.replace(
  /image: '\/images\/flight_crew\/air_crew_attire\.jpeg',(\s+)title: 'أزياء طيران احترافية'/,
  "image: '/images/flight_crew/cabin_crew_uniforms.jpeg',$1title: 'أزياء طيران احترافية'"
);

content = content.replace(
  /image: '\/images\/clinic_wear\/medical_wear\.jpeg',(\s+)title: 'أزياء طبية متخصصة'/,
  "image: '/images/clinic_wear/header_medical_uniform.jpeg',$1title: 'أزياء طبية متخصصة'"
);

content = content.replace(
  /image: '\/images\/culinary_apparel\/kitchen_staff_clothing\.jpeg',(\s+)title: 'أزياء الضيافة والمطاعم'/,
  "image: '/images/culinary_apparel/header_chef_uniform.jpeg',$1title: 'أزياء الضيافة والمطاعم'"
);

// Write the updated content back to the file
fs.writeFileSync('src/app/page.tsx', content);

console.log('Testimonials and slides images updated successfully!'); 