import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'الصفحة غير موجودة | يونيفورم - الأزياء الموحدة المتخصصة',
  description: 'عذراً، الصفحة التي تبحث عنها غير موجودة. يمكنك العودة للصفحة الرئيسية أو تصفح خدماتنا.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const popularLinks = [
    { href: '/', label: 'الصفحة الرئيسية' },
    { href: '/services/', label: 'خدماتنا' },
    { href: '/blog/', label: 'المدونة' },
    { href: '/contact/', label: 'اتصل بنا' },
    { href: '/quote/', label: 'طلب عرض سعر' },
  ];

  const categories = [
    { href: '/blog/?category=flight_crew', label: 'أزياء الطيران' },
    { href: '/blog/?category=clinic_wear', label: 'الأزياء الطبية' },
    { href: '/blog/?category=culinary_apparel', label: 'أزياء الطهاة' },
    { href: '/blog/?category=academic_attire', label: 'الزي الأكاديمي' },
    { href: '/blog/?category=protective_services', label: 'خدمات الحماية' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Script id="404-redirect-script" strategy="beforeInteractive">
        {`
          // This script attempts to fix common URL patterns causing 404 errors
          (function() {
            try {
              const currentPath = window.location.pathname;
              let redirectTo = null;
              
              // Fix URLs without trailing slash
              if (currentPath !== '/' && !currentPath.endsWith('/')) {
                redirectTo = currentPath + '/';
              }
              
              // Fix blog post URLs
              const blogPostMatch = currentPath.match(/\\/blog\\/([^\\/]+)\\/([^\\/]+)$/);
              if (blogPostMatch) {
                redirectTo = \`/blog/\${blogPostMatch[1]}/\${blogPostMatch[2]}/\`;
              }
              
              // Fix category URLs
              const categoryMatch = currentPath.match(/\\/blog\\?category=([^&]+)$/);
              if (categoryMatch) {
                redirectTo = \`/blog/?category=\${categoryMatch[1]}\`;
              }
              
              // Fix main section URLs
              const mainSections = ['about', 'contact', 'faq', 'terms', 'privacy', 'quote', 'blog'];
              for (const section of mainSections) {
                if (currentPath === \`/\${section}\`) {
                  redirectTo = \`/\${section}/\`;
                  break;
                }
              }
              
              // Redirect if needed
              if (redirectTo && redirectTo !== currentPath) {
                console.log('Redirecting from', currentPath, 'to', redirectTo);
                window.location.href = redirectTo;
              }
            } catch (error) {
              console.error('Error in 404 redirect script:', error);
            }
          })();
        `}
      </Script>
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-5 sm:p-10 text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">عذراً، الصفحة غير موجودة</h2>
          <p className="text-gray-600 mb-8">يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو أنها غير موجودة.</p>
          
          <div className="mb-8">
            <Link 
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              العودة للصفحة الرئيسية
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center md:text-right text-blue-800">روابط مفيدة</h3>
              <ul className="space-y-2">
                {popularLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-blue-600 hover:text-blue-800 transition-colors">
                      <span>&#8594;</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center md:text-right text-blue-800">تصفح حسب الفئة</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link href={category.href} className="text-blue-600 hover:text-blue-800 transition-colors">
                      <span>&#8594;</span> {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 