import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="text-2xl font-bold mb-2">يونيـفورم</div>
          <p className="text-gray-200 mb-4">نقدم أفضل حلول الأزياء الموحدة للشركات والمؤسسات في جميع القطاعات.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">روابط سريعة</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">الرئيسية</Link></li>
            <li><Link href="/blog" className="hover:underline">المدونة</Link></li>
            <li><Link href="/about" className="hover:underline">من نحن</Link></li>
            <li><Link href="/contact" className="hover:underline">تواصل معنا</Link></li>
            <li><Link href="/privacy" className="hover:underline">سياسة الخصوصية</Link></li>
            <li><Link href="/terms" className="hover:underline">الشروط والأحكام</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">تواصل معنا</h4>
          <p className="mb-2">البريد الإلكتروني: <a href="mailto:info@uniform.com" className="underline">info@uniform.com</a></p>
          <p>الهاتف: <a href="tel:+966500000000" className="underline">+966 50 000 0000</a></p>
        </div>
      </div>
      <div className="border-t border-blue-800 mt-8 pt-4 text-center text-gray-300 text-sm">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} يونيـفورم
      </div>
    </footer>
  );
} 