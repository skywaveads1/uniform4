import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaUser, FaCalendar } from 'react-icons/fa';

const securityUniformsPosts = [
  {
    id: 'uniform-security-materials',
    slug: '/blog/security-uniforms/uniform-security-materials',
    title: 'المواد المستخدمة في تصنيع أزياء الأمن: دليل شامل',
    description: 'استعراض تفصيلي للمواد المستخدمة في تصنيع أزياء الأمن والحراسة مع مقارنة بين أنواعها ومميزاتها ومواصفات الجودة.',
    image: "/images/security_uniforms/security_guard_uniforms.webp",
    date: '١ يونيو ٢٠٢٤',
    readTime: '10 دقائق',
    author: {
      name: 'خالد الأحمدي',
      role: 'خبير أزياء الأمن'
    },
    category: 'أزياء الأمن',
  },
  {
    id: 'importance-uniform-on-security',
    slug: '/blog/security-uniforms/importance-uniform-on-security',
    title: 'أهمية الزي الموحد في تعزيز مستوى الأمن والأمان',
    description: 'تحليل علمي لتأثير الزي الموحد على تعزيز مستوى الأمن والأمان في المنشآت والمؤسسات المختلفة وتأثيره النفسي.',
    image: "/images/security_uniforms/professional_security_uniforms.webp",
    date: '٢ يونيو ٢٠٢٤',
    readTime: '8 دقائق',
    author: {
      name: 'مريم القحطاني',
      role: 'استشارية أمنية'
    },
    category: 'أزياء الأمن',
  },
  {
    id: 'security-uniform-design-principles',
    slug: '/blog/security-uniforms/security-uniform-design-principles',
    title: 'مبادئ تصميم أزياء الأمن: الهيبة والوظيفية',
    description: 'دليل شامل حول مبادئ تصميم أزياء الأمن التي تجمع بين الهيبة المطلوبة والوظيفية العملية لأداء المهام الأمنية بكفاءة.',
    image: "/images/security_uniforms/security_uniform_design.webp",
    date: '٣ يونيو ٢٠٢٤',
    readTime: '12 دقيقة',
    author: {
      name: 'عبدالرحمن الشهري',
      role: 'مصمم أزياء أمنية'
    },
    category: 'أزياء الأمن',
  },
  {
    id: 'security-rank-badges-systems',
    slug: '/blog/security-uniforms/security-rank-badges-systems',
    title: 'أنظمة الرتب والشارات في أزياء الأمن',
    description: 'استعراض تفصيلي لأنظمة الرتب والشارات المستخدمة في أزياء الأمن، أهميتها في التنظيم الهرمي وتحديد المسؤوليات.',
    image: "/images/security_uniforms/rank_badges.webp",
    date: '٤ يونيو ٢٠٢٤',
    readTime: '9 دقائق',
    author: {
      name: 'سعد العنزي',
      role: 'خبير الأنظمة الأمنية'
    },
    category: 'أزياء الأمن',
  },
  {
    id: 'official-security-clothing-standards',
    slug: '/blog/security-uniforms/official-security-clothing-standards',
    title: 'معايير الملابس الأمنية الرسمية في المملكة',
    description: 'دليل شامل حول المعايير والمواصفات الرسمية للملابس الأمنية في المملكة العربية السعودية والمتطلبات القانونية.',
    image: "/images/security_uniforms/official_security_clothing.webp",
    date: '٥ يونيو ٢٠٢٤',
    readTime: '11 دقيقة',
    author: {
      name: 'نورا البلوي',
      role: 'مستشارة قانونية أمنية'
    },
    category: 'أزياء الأمن',
  },
  {
    id: 'security-badges-patches-guide',
    slug: '/blog/security-uniforms/security-badges-patches-guide',
    title: 'دليل الشارات والرقع في الأزياء الأمنية',
    description: 'دليل تفصيلي حول أنواع الشارات والرقع المستخدمة في الأزياء الأمنية، معانيها، وطرق تطبيقها بشكل صحيح ومهني.',
    image: "/images/security_uniforms/security_badges_patches.webp",
    date: '٦ يونيو ٢٠٢٤',
    readTime: '8 دقائق',
    author: {
      name: 'أحمد المالكي',
      role: 'مدرب أنظمة الأمن'
    },
    category: 'أزياء الأمن',
  },
];

export const metadata = {
  title: 'أزياء الأمن - دليل شامل ومعايير احترافية | يونيفورم',
  description: 'اكتشف أحدث المقالات والمعلومات حول أزياء الأمن ومواصفاتها وأهميتها في تعزيز الأمان، مع أدلة شاملة حول المعايير والتصميم.',
  keywords: 'أزياء الأمن، ملابس حراس الأمن، زي موحد أمني، معايير الأمن، شارات الأمن، السعودية',
};

export default function SecurityUniformsBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/security_uniforms/header_security_uniform.webp"
              alt="أزياء الأمن"
              fill
              style={{ objectFit: 'cover' }}
              className="brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">أزياء الأمن</h1>
                <p className="text-xl text-gray-200">
                  اكتشف أحدث المقالات والمعلومات حول أزياء الأمن ومواصفاتها وأهميتها في تعزيز الأمان
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityUniformsPosts.map((post) => (
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
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors line-clamp-2">
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
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              هل تحتاج أزياء أمن احترافية؟
            </h2>
            <p className="text-gray-300 mb-6">
              احصل على استشارة مجانية من خبرائنا لتصميم أزياء أمن تلبي أعلى معايير الجودة والمهنية
            </p>
            <Link 
              href="/quote" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block font-semibold"
            >
              اطلب استشارة مجانية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 