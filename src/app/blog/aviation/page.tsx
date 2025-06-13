import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaUser, FaCalendar } from 'react-icons/fa';

const aviationPosts = [
  {
    id: 'airline-uniform-design-considerations',
    slug: '/blog/flight-crew/flight-1',
    title: 'اعتبارات تصميم زي شركات الطيران: دليل شامل للتميز والاحترافية',
    description: 'استكشف العوامل الحاسمة في تصميم أزياء شركات الطيران، من الجوانب الوظيفية والجمالية إلى معايير السلامة والهوية المؤسسية.',
    image: "/images/flight_crew/air_crew_innovative_uniforms.webp",
    date: '٢٨ نوفمبر ٢٠٢٤',
    readTime: '10 دقائق',
    author: {
      name: 'خبراء التصميم - يونيفورم',
      role: 'خبراء تصميم أزياء الطيران'
    },
    category: 'أزياء الطيران',
  },
  {
    id: 'fabric-selection-flight-crew',
    slug: '/blog/flight-crew/flight-2',
    title: 'اختيار أقمشة زي طاقم الطائرة: دليل الجودة والمتانة والابتكار',
    description: 'دليل شامل حول اختيار الأقمشة المناسبة لأزياء طاقم الطائرة، مع التركيز على معايير الجودة والمتانة والراحة والسلامة.',
    image: "/images/flight_crew/best_flight_crew_attire.webp",
    date: '٣٠ نوفمبر ٢٠٢٤',
    readTime: '9 دقائق',
    author: {
      name: 'خبراء الأقمشة والنسيج - يونيفورم',
      role: 'خبراء أقمشة الطيران'
    },
    category: 'أزياء الطيران',
  },
  {
    id: 'female-aviation-fashion',
    slug: '/blog/flight-crew/flight-3',
    title: 'أزياء الطيران النسائية: رحلة التطور والابتكار عبر العصور',
    description: 'استكشف تطور أزياء طاقم الطائرة النسائية عبر العقود، من التصاميم التقليدية الأولى إلى الابتكارات الحديثة.',
    image: "/images/flight_crew/cabin_crew_uniforms.webp",
    date: '٢ ديسمبر ٢٠٢٤',
    readTime: '8 دقائق',
    author: {
      name: 'خبراء تصميم الأزياء النسائية - يونيفورم',
      role: 'مصممو أزياء طيران'
    },
    category: 'أزياء الطيران',
  },
  {
    id: 'aviation-uniform-standards-2025',
    slug: '/blog/aviation-uniforms/aviation-uniform-standards-2025',
    title: 'معايير أزياء الطيران 2025: أحدث التوجهات والمواصفات',
    description: 'استكشف أحدث المعايير والمواصفات لأزياء طاقم الطيران في عام 2025، مع التركيز على الجودة والراحة والهوية البصرية.',
    image: "/images/flight_crew/buy_air_crew_uniforms.webp",
    date: '١٥ مارس ٢٠٢٤',
    readTime: '12 دقيقة',
    author: {
      name: 'ريما السباعي',
      role: 'خبيرة تصميم أزياء الطيران'
    },
    category: 'أزياء الطيران',
  },
  {
    id: 'airline-uniform-design-evolution',
    slug: '/blog/aviation-uniforms/airline-uniform-design-evolution',
    title: 'تطور تصميم أزياء شركات الطيران: رحلة عبر التاريخ',
    description: 'استكشاف المراحل التاريخية لتطور تصميم أزياء شركات الطيران من البدايات الأولى حتى العصر الحديث.',
    image: "/images/flight_crew/air_crew_attire.webp",
    date: '١٠ مارس ٢٠٢٤',
    readTime: '15 دقيقة',
    author: {
      name: 'أمجد الضبياني',
      role: 'مؤرخ أزياء الطيران'
    },
    category: 'أزياء الطيران',
  },
  {
    id: 'crew-aviation-uniform',
    slug: '/blog/aviation-uniforms/crew-aviation-on-uniform',
    title: 'أزياء طاقم الطيران: بين الوظيفية والأناقة',
    description: 'دليل شامل حول كيفية تحقيق التوازن بين الوظيفية والأناقة في تصميم أزياء طاقم الطيران مع الحفاظ على المظهر الاحترافي.',
    image: "/images/flight_crew/air_hospitality_uniforms.webp",
    date: '٥ مارس ٢٠٢٤',
    readTime: '11 دقيقة',
    author: {
      name: 'حنين البقمي',
      role: 'مصممة أزياء طيران'
    },
    category: 'أزياء الطيران',
  },
];

export const metadata = {
  title: 'أزياء الطيران - مقالات وأخبار حديثة | يونيفورم',
  description: 'اكتشف أحدث المقالات والأخبار في عالم أزياء طاقم الطيران، تصاميم حديثة، معايير الجودة، والابتكارات في صناعة الطيران.',
  keywords: 'أزياء الطيران، طاقم الطائرة، مضيفات الطيران، تصميم أزياء، ملابس طيران، السعودية',
};

export default function AviationBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/flight_crew/crew_uniform_visual_identity.webp"
              alt="أزياء الطيران"
              fill
              style={{ objectFit: 'cover' }}
              className="brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">أزياء الطيران</h1>
                <p className="text-xl text-gray-200">
                  اكتشف أحدث المقالات والأخبار في عالم أزياء طاقم الطيران
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aviationPosts.map((post) => (
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
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              هل تحتاج أزياء طيران مخصصة؟
            </h2>
            <p className="text-blue-100 mb-6">
              احصل على استشارة مجانية من خبرائنا لتصميم أزياء طيران تلبي أعلى المعايير العالمية
            </p>
            <Link 
              href="/quote" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block font-semibold"
            >
              اطلب استشارة مجانية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
