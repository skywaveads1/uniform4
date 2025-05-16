'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const securityUniformsPosts = [
  {
    id: 'uniform-security-materials',
    title: 'المواد المستخدمة في تصنيع أزياء الأمن: دليل شامل',
    description: 'استعراض تفصيلي للمواد المستخدمة في تصنيع أزياء الأمن والحراسة مع مقارنة بين أنواعها ومميزاتها',
    image: "/images/protective_services/security_guard_uniforms.jpeg",
    date: '2024-06-01',
    author: {
      name: 'فريق يونيفورم',
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      role: 'خبراء أزياء الأمن'
    },
    category: 'أزياء الأمن',
  },
  {
    id: 'importance-uniform-on-security',
    title: 'أهمية الزي الموحد في تعزيز مستوى الأمن والأمان',
    description: 'تحليل علمي لتأثير الزي الموحد على تعزيز مستوى الأمن والأمان في المنشآت والمؤسسات المختلفة',
    image: "/images/protective_services/security_guard_uniforms.jpeg",
    date: '2024-06-02',
    author: {
      name: 'فريق يونيفورم',
      image: "/images/protective_services/security_guard_uniforms.jpeg",
      role: 'خبراء أزياء الأمن'
    },
    category: 'أزياء الأمن',
  },
];

// صورة الهيدر للمقال
const heroImage = '/images/protective_services/header_security_uniform.jpeg';

export default function SecurityUniformsBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">أزياء الأمن</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف أحدث المقالات والمعلومات حول أزياء الأمن ومواصفاتها وأهميتها في تعزيز الأمان
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