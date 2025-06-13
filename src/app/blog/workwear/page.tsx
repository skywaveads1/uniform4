import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaUser, FaCalendar } from 'react-icons/fa';

const workwearPosts = [
  {
    id: 'clothing-maintenance-work-health',
    slug: '/blog/workwear/clothing-maintenance-work-health',
    title: 'العناية بملابس العمل وأثرها على الصحة المهنية',
    description: 'دليل شامل حول كيفية العناية بملابس العمل للحفاظ على جودتها وتأثير ذلك على صحة وسلامة الموظفين في بيئة العمل.',
    image: "/images/workwear/work_clothes_care.webp",
    date: '١ مايو ٢٠٢٤',
    readTime: '8 دقائق',
    author: {
      name: 'فريق يونيفورم',
      role: 'خبراء ملابس العمل'
    },
    category: 'ملابس العمل',
  },
  {
    id: 'utility-services-uniform-standards',
    slug: '/blog/workwear/utility-services-uniform-standards',
    title: 'معايير الزي الموحد لشركات الخدمات والمرافق',
    description: 'استعراض شامل للمعايير الأساسية التي يجب اتباعها عند اختيار وتصميم الزي الموحد لشركات الخدمات والمرافق والصيانة.',
    image: "/images/workwear/utility_services_uniform_standards.webp",
    date: '٢ مايو ٢٠٢٤',
    readTime: '10 دقائق',
    author: {
      name: 'أحمد الحارثي',
      role: 'خبير معايير الأزياء المهنية'
    },
    category: 'ملابس العمل',
  },
  {
    id: 'field-service-technician-workwear',
    slug: '/blog/workwear/field-service-technician-workwear',
    title: 'ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات',
    description: 'دليل شامل حول متطلبات ومواصفات ملابس العمل المناسبة لفنيي الخدمة الميدانية في مختلف القطاعات الصناعية والتقنية.',
    image: "/images/workwear/field_technician_workwear.webp",
    date: '٣ مايو ٢٠٢٤',
    readTime: '12 دقيقة',
    author: {
      name: 'سارة المطيري',
      role: 'مهندسة السلامة المهنية'
    },
    category: 'ملابس العمل',
  },
  {
    id: 'uniform-importance-workplace',
    slug: '/blog/workwear/uniform-importance-workplace',
    title: 'الزي الموحد: أهميته وتأثيره على بيئة العمل',
    description: 'تحليل شامل لأهمية الزي الموحد وتأثيره الإيجابي على بيئة العمل وهوية الشركة والإنتاجية وروح الفريق.',
    image: "/images/workwear/uniform_importance.webp",
    date: '٤ مايو ٢٠٢٤',
    readTime: '9 دقائق',
    author: {
      name: 'عبدالله النمري',
      role: 'استشاري الموارد البشرية'
    },
    category: 'ملابس العمل',
  },
  {
    id: 'maintenance-worker-uniform-requirements',
    slug: '/blog/workwear/maintenance-worker-uniform-requirements',
    title: 'متطلبات الزي الموحد لعمال الصيانة والتشغيل',
    description: 'دليل متكامل حول المتطلبات الأساسية للزي الموحد لعمال الصيانة والتشغيل بما يتوافق مع معايير السلامة المهنية.',
    image: "/images/workwear/maintenance_uniform_requirements.webp",
    date: '٥ مايو ٢٠٢٤',
    readTime: '11 دقيقة',
    author: {
      name: 'محمد الزهراني',
      role: 'خبير السلامة الصناعية'
    },
    category: 'ملابس العمل',
  },
  {
    id: 'corporate-uniform-design',
    slug: '/blog/workwear/corporate-uniform-design',
    title: 'تصميم الأزياء المؤسسية: التوازن بين الأناقة والعملية',
    description: 'استكشف أسس تصميم الأزياء المؤسسية التي تحقق التوازن المثالي بين الأناقة المهنية والوظيفية العملية في بيئة العمل.',
    image: "/images/workwear/corporate_uniform.webp",
    date: '٦ مايو ٢٠٢٤',
    readTime: '10 دقائق',
    author: {
      name: 'لينا العتيبي',
      role: 'مصممة أزياء مؤسسية'
    },
    category: 'ملابس العمل',
  },
];

export const metadata = {
  title: 'ملابس العمل - دليل شامل وأحدث المقالات | يونيفورم',
  description: 'اكتشف أحدث المقالات والمعلومات حول ملابس العمل ومتطلباتها في مختلف القطاعات، معايير السلامة، والعناية بالأزياء المهنية.',
  keywords: 'ملابس العمل، زي موحد، ملابس مهنية، معايير السلامة، أزياء مؤسسية، السعودية',
};

export default function WorkwearBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/workwear/header_workwear_uniform.webp"
              alt="ملابس العمل"
              fill
              style={{ objectFit: 'cover' }}
              className="brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">ملابس العمل</h1>
                <p className="text-xl text-gray-200">
                  اكتشف أحدث المقالات والمعلومات حول ملابس العمل ومتطلباتها في مختلف القطاعات
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workwearPosts.map((post) => (
            <Link key={post.id} href={post.slug} className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FaCalendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <FaUser className="w-4 h-4 text-gray-400 ml-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              هل تحتاج ملابس عمل مخصصة؟
            </h2>
            <p className="text-orange-100 mb-6">
              احصل على استشارة مجانية من خبرائنا لتصميم ملابس عمل تلبي احتياجاتك ومعايير السلامة
            </p>
            <Link 
              href="/quote" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block font-semibold"
            >
              اطلب استشارة مجانية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
