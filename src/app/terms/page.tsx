import Link from 'next/link';
import { FaGavel, FaCopyright, FaExchangeAlt, FaEdit, FaExternalLinkAlt } from 'react-icons/fa';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">الشروط والأحكام</h1>
        <p className="mb-8 text-gray-700 text-center">
          نرحب بكم في موقع <span className="font-semibold text-blue-800">الأزياء الموحدة المتخصصة</span>. يرجى قراءة الشروط والأحكام التالية بعناية قبل استخدام الموقع أو أي من خدماتنا.
        </p>

        {/* استخدام الموقع */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaGavel className="ml-2" /> <h2 className="text-xl font-bold">1. استخدام الموقع</h2></div>
          <p className="text-gray-700 ml-6">
            يجب استخدام الموقع لأغراض مشروعة فقط وبما لا يخل بالقوانين والأنظمة المعمول بها في المملكة العربية السعودية. يُمنع استخدام الموقع لأي نشاط غير قانوني أو ضار.
          </p>
        </div>

        {/* حقوق الملكية الفكرية */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaCopyright className="ml-2" /> <h2 className="text-xl font-bold">2. حقوق الملكية الفكرية</h2></div>
          <p className="text-gray-700 ml-6">
            جميع المحتويات المعروضة على الموقع (نصوص، صور، شعارات، تصاميم، أكواد) مملوكة للشركة أو مرخصة لها. لا يجوز نسخ أو إعادة استخدام أي جزء من الموقع دون إذن خطي مسبق.
          </p>
        </div>

        {/* الطلبات والدفع */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaExchangeAlt className="ml-2" /> <h2 className="text-xl font-bold">3. الطلبات والدفع</h2></div>
          <ul className="list-disc list-inside text-gray-700 ml-10 space-y-2">
            <li>تخضع جميع الطلبات للمراجعة والموافقة من قبل الشركة.</li>
            <li>يجب تقديم معلومات دقيقة وكاملة عند تقديم الطلب.</li>
            <li>تحتفظ الشركة بحقها في رفض أو إلغاء أي طلب في أي وقت.</li>
            <li>جميع عمليات الدفع تخضع لسياسات الشركة، ويتم التعامل معها بسرية تامة.</li>
          </ul>
        </div>

        {/* تعديل الشروط */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaEdit className="ml-2" /> <h2 className="text-xl font-bold">4. تعديل الشروط</h2></div>
          <p className="text-gray-700 ml-6">
            يحق للشركة تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. سيتم نشر التعديلات على هذه الصفحة ويعتبر استمرار استخدامك للموقع موافقة ضمنية على التعديلات.
          </p>
        </div>

        {/* الروابط الخارجية */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaExternalLinkAlt className="ml-2" /> <h2 className="text-xl font-bold">5. الروابط الخارجية</h2></div>
          <p className="text-gray-700 ml-6">
            قد يحتوي الموقع على روابط لمواقع خارجية لا تخضع لإشرافنا. لسنا مسؤولين عن محتوى أو سياسات تلك المواقع، ويُنصح بمراجعة سياسات الخصوصية والشروط الخاصة بها.
          </p>
        </div>

        {/* مسؤولية المستخدم */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><span className="ml-2">⚠️</span> <h2 className="text-xl font-bold">6. مسؤولية المستخدم</h2></div>
          <p className="text-gray-700 ml-6">
            يتحمل المستخدم كامل المسؤولية عن أي استخدام غير قانوني أو غير مصرح به للموقع أو محتواه.
          </p>
        </div>

        {/* التواصل */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm mb-2">
            لمزيد من المعلومات أو الاستفسارات، يرجى التواصل معنا عبر صفحة <Link href="/contact" className="text-blue-700 underline">اتصل بنا</Link>.
          </p>
        </div>
      </div>
    </div>
  );
} 