const fs = require('fs');

// Read the page.tsx file
const filePath = 'src/app/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Define the new testimonials array
const newTestimonials = `// مكون السلايدر:
const testimonials = [
  {
    name: 'أمجد الضبياني',
    image: '/images/testimonials/testimonial_1.jpeg',
    title: 'مدير الموارد البشرية - شركة الخليج',
    text: 'خدمة ممتازة وجودة عالية في الأقمشة والتصميم. فريق العمل متعاون وسريع الاستجابة.'
  },
  {
    name: 'حنين البقمي',
    image: '/images/testimonials/testimonial_2.jpeg',
    title: 'مديرة مشاريع - مؤسسة الريادة',
    text: 'التعامل مع يونيفورم كان احترافيًا من البداية للنهاية. أنصح الجميع بتجربتهم.'
  },
  {
    name: 'سارة المطيري',
    image: '/images/testimonials/testimonial_3.jpeg',
    title: 'مديرة تشغيل - مطاعم الذواقة',
    text: 'التصاميم عصرية والخدمة سريعة. شكراً لكم على الاهتمام بالتفاصيل.'
  },
  {
    name: 'محمد الهويمل',
    image: '/images/testimonials/testimonial_4.jpeg',
    title: 'مالك مؤسسة الهويمل',
    text: 'أفضل تجربة زي موحد حصلت عليها. جودة وخدمة تفوق التوقعات.'
  },
  {
    name: 'نورة القحطاني',
    image: '/images/testimonials/testimonial_5.jpeg',
    title: 'مديرة موارد بشرية',
    text: 'الالتزام بالمواعيد والدقة في التنفيذ. شكراً يونيفورم.'
  },
  {
    name: 'سلطان العتيبي',
    image: '/images/testimonials/testimonial_1.jpeg',
    title: 'مدير عام - شركة المطيري',
    text: 'خدمة عملاء رائعة وتصاميم تناسب جميع أفراد الفريق.'
  },
  {
    name: 'فيصل الدوسري',
    image: '/images/testimonials/testimonial_2.jpeg',
    title: 'مدير مشتريات',
    text: 'أنصح بالتعامل مع يونيفورم لكل من يبحث عن الجودة والاحترافية.'
  },
  {
    name: 'عبدالله الشهري',
    image: '/images/testimonials/testimonial_3.jpeg',
    title: 'مدير تشغيل',
    text: 'خدمة ممتازة وسرعة في التسليم. شكراً لكم.'
  },
  {
    name: 'منيرة العنزي',
    image: '/images/testimonials/testimonial_4.jpeg',
    title: 'مديرة تسويق',
    text: 'تصاميم مبتكرة وجودة عالية. تجربة رائعة.'
  },
  {
    name: 'هند السبيعي',
    image: '/images/testimonials/testimonial_5.jpeg',
    title: 'مديرة مشاريع',
    text: 'الزي الموحد أنيق ومريح. شكراً يونيفورم.'
  },
  {
    name: 'لطيفة العمري',
    image: '/images/testimonials/testimonial_1.jpeg',
    title: 'مديرة موارد بشرية',
    text: 'خدمة عملاء ممتازة واهتمام بالتفاصيل.'
  },
  {
    name: 'فهد المالكي',
    image: '/images/testimonials/testimonial_2.jpeg',
    title: 'مدير عام',
    text: 'أفضل شركة زي موحد تعاملت معها. أنصح بها للجميع.'
  }
];`;

// Replace the testimonials section
// First, create a backup of the original file
fs.writeFileSync(`${filePath}.bak`, content);

// Define a regex pattern that matches from the testimonials start to end
// This is a simpler, more reliable approach
const pattern = /\/\/ مكون السلايدر:[\s\S]*?const testimonials = \[[\s\S]*?\];/;

// Replace the testimonials section with the new version
const updatedContent = content.replace(pattern, newTestimonials);

// Write the updated content back to the file
fs.writeFileSync(filePath, updatedContent);

console.log('Successfully updated testimonials in page.tsx');
console.log('A backup of the original file has been saved as src/app/page.tsx.bak'); 