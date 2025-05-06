'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-900">
                يونيفورم
              </Link>
            </div>
            <div className="hidden sm:mr-6 sm:flex sm:space-x-8 rtl:space-x-reverse">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                من نحن
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                المدونة
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                اتصل بنا
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link
              href="/quote"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              اطلب عرض سعر
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">فتح القائمة</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              من نحن
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              المدونة
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              اتصل بنا
            </Link>
            <Link
              href="/quote"
              className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              اطلب عرض سعر
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 