import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-800">يونيـفورم</span>
            </Link>
          </div>
          {/* Links */}
          <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-blue-700 font-medium transition">الرئيسية</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-700 font-medium transition">المدونة</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium transition">من نحن</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 font-medium transition">تواصل معنا</Link>
          </div>
          {/* CTA Button */}
          <div className="flex items-center">
            <Link href="/quote" className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">اطلب عرض سعر</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 