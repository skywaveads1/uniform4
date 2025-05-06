'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const aviationPosts = [
  {
    id: 'aviation-uniform-standards-2025',
    title: 'معايير أزياء الطيران 2025: أحدث التوجهات والمواصفات',
    description: 'استكشف أحدث المعايير والمواصفات لأزياء طاقم الطيران في عام 2025، مع التركيز على الجودة والراحة والهوية البصرية.',
    image: '/images/flight_crew/flight_crew_uniform_design.jpeg',
    date: '2024-03-15',
    author: {
      name: 'ريما السباعي',
      image: '/images/author/ريما_السباعي.png',
      role: 'خبيرة تصميم أزياء الطيران'
    },
    category: 'أزياء الطيران',
  },
  {
    id: 'comfort-safety-airline-uniforms',
    title: 'الراحة والسلامة في أزياء طاقم الطيران',
    description: 'دليل شامل حول كيفية تحقيق التوازن بين الراحة والسلامة في تصميم أزياء طاقم الطيران مع الحفاظ على المظهر الاحترافي.',
    image: '/images/flight_crew/flight_crew_uniform_fabrics.jpeg',
    date: '2024-03-10',
    author: {
      name: 'أمجد الضبياني',
      image: '/images/author/أمجد_الضبياني.png',
      role: 'مستشار سلامة الطيران'
    },
    category: 'أزياء الطيران',
  },
  {
    id: 'modern-flight-attendant-fashion',
    title: 'موضة مضيفات الطيران الحديثة: بين التقاليد والابتكار',
    description: 'استكشاف أحدث اتجاهات الموضة في أزياء مضيفات الطيران، مع التركيز على التصاميم العصرية التي تحافظ على الهوية المؤسسية.',
    image: '/images/flight_crew/flight_attendant_dress.jpeg',
    date: '2024-03-05',
    author: {
      name: 'حنين البقمي',
      image: '/images/author/حنين_البقمي.png',
      role: 'مصممة أزياء طيران'
    },
    category: 'أزياء الطيران',
  },
];

export default function AviationBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">أزياء الطيران</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف أحدث المقالات والأخبار في عالم أزياء طاقم الطيران
          </p>
        </div>

        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">لا توجد مقالات متاحة حالياً</h2>
          <p className="text-gray-600">يرجى المحاولة لاحقاً</p>
        </div>
      </div>
    </div>
  );
} 