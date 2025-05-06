'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const workwearPosts = [
  {
    id: 'clothing-maintenance-work-health',
    title: 'العناية بملابس العمل وأثرها على الصحة المهنية',
    description: 'دليل شامل حول كيفية العناية بملابس العمل للحفاظ على جودتها وتأثير ذلك على صحة وسلامة الموظفين',
    image: '/images/workwear/clothing_maintenance.jpeg',
    date: '2024-05-01',
    author: {
      name: 'فريق يونيفورم',
      image: '/images/author/uniform_team.png',
      role: 'خبراء ملابس العمل'
    },
    category: 'ملابس العمل',
  },
  {
    id: 'utility-services-uniform-standards',
    title: 'معايير الزي الموحد لشركات الخدمات والمرافق',
    description: 'استعراض شامل للمعايير الأساسية التي يجب اتباعها عند اختيار وتصميم الزي الموحد لشركات الخدمات والمرافق',
    image: '/images/workwear/utility_services_standards.jpeg',
    date: '2024-05-02',
    author: {
      name: 'فريق يونيفورم',
      image: '/images/author/uniform_team.png',
      role: 'خبراء ملابس العمل'
    },
    category: 'ملابس العمل',
  },
  {
    id: 'field-service-technician-workwear',
    title: 'ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات',
    description: 'دليل شامل حول متطلبات ومواصفات ملابس العمل المناسبة لفنيي الخدمة الميدانية في مختلف القطاعات',
    image: '/images/workwear/field_technician.jpeg',
    date: '2024-05-03',
    author: {
      name: 'فريق يونيفورم',
      image: '/images/author/uniform_team.png',
      role: 'خبراء ملابس العمل'
    },
    category: 'ملابس العمل',
  },
  {
    id: 'uniform',
    title: 'الزي الموحد: أهميته وتأثيره على بيئة العمل',
    description: 'تحليل شامل لأهمية الزي الموحد وتأثيره الإيجابي على بيئة العمل وهوية الشركة والإنتاجية',
    image: '/images/workwear/uniform_importance.jpeg',
    date: '2024-05-04',
    author: {
      name: 'فريق يونيفورم',
      image: '/images/author/uniform_team.png',
      role: 'خبراء ملابس العمل'
    },
    category: 'ملابس العمل',
  },
  {
    id: 'maintenance-worker-uniform-requirements',
    title: 'متطلبات الزي الموحد لعمال الصيانة والتشغيل',
    description: 'دليل متكامل حول المتطلبات الأساسية للزي الموحد لعمال الصيانة والتشغيل بما يتوافق مع معايير السلامة',
    image: '/images/workwear/maintenance_uniform.jpeg',
    date: '2024-05-05',
    author: {
      name: 'فريق يونيفورم',
      image: '/images/author/uniform_team.png',
      role: 'خبراء ملابس العمل'
    },
    category: 'ملابس العمل',
  },
];

export default function WorkwearBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ملابس العمل</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف أحدث المقالات والمعلومات حول ملابس العمل ومتطلباتها في مختلف القطاعات
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