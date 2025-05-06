import Link from 'next/link';
import { FaUserShield, FaLock, FaCookieBite, FaSyncAlt, FaEnvelope } from 'react-icons/fa';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">سياسة الخصوصية</h1>
        <p className="mb-8 text-gray-700 text-center">
          نحن في <span className="font-semibold text-blue-800">الأزياء الموحدة المتخصصة</span> نولي خصوصيتك أهمية كبيرة. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدامك لموقعنا.
        </p>

        {/* جمع المعلومات */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaUserShield className="ml-2" /> <h2 className="text-xl font-bold">1. جمع المعلومات</h2></div>
          <ul className="list-disc list-inside text-gray-700 ml-10 space-y-2">
            <li>المعلومات التي تقدمها طوعًا (الاسم، البريد الإلكتروني، رقم الهاتف، تفاصيل الطلبات).</li>
            <li>المعلومات التقنية مثل عنوان IP، نوع المتصفح، بيانات الاستخدام.</li>
            <li>المعلومات التي يتم جمعها عبر النماذج أو التواصل المباشر معنا.</li>
          </ul>
        </div>

        {/* استخدام المعلومات */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaLock className="ml-2" /> <h2 className="text-xl font-bold">2. استخدام المعلومات</h2></div>
          <ul className="list-disc list-inside text-gray-700 ml-10 space-y-2">
            <li>تقديم وتحسين خدماتنا وتجربة المستخدم.</li>
            <li>التواصل معك بشأن الطلبات أو الاستفسارات أو العروض.</li>
            <li>تحليل بيانات الاستخدام لتحسين أداء الموقع.</li>
            <li>الامتثال للمتطلبات القانونية والتنظيمية.</li>
          </ul>
        </div>

        {/* حماية المعلومات */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaLock className="ml-2" /> <h2 className="text-xl font-bold">3. حماية المعلومات</h2></div>
          <p className="text-gray-700 ml-6">
            نلتزم باتخاذ جميع التدابير الأمنية اللازمة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. لا تتم مشاركة بياناتك مع أي طرف ثالث إلا في حالات الضرورة القصوى أو بموجب القانون.
          </p>
        </div>

        {/* ملفات تعريف الارتباط */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaCookieBite className="ml-2" /> <h2 className="text-xl font-bold">4. ملفات تعريف الارتباط (Cookies)</h2></div>
          <p className="text-gray-700 ml-6">
            قد نستخدم الكوكيز وتقنيات مشابهة لتحسين تجربة التصفح وتحليل استخدام الموقع. يمكنك ضبط إعدادات المتصفح للتحكم في الكوكيز أو رفضها.
          </p>
        </div>

        {/* تحديث السياسة */}
        <div className="mb-8">
          <div className="flex items-center mb-2 text-blue-700"><FaSyncAlt className="ml-2" /> <h2 className="text-xl font-bold">5. تحديث سياسة الخصوصية</h2></div>
          <p className="text-gray-700 ml-6">
            نحتفظ بحقنا في تعديل سياسة الخصوصية في أي وقت. سيتم نشر التحديثات على هذه الصفحة ويعتبر استمرار استخدامك للموقع موافقة على السياسة المحدثة.
          </p>
        </div>

        {/* التواصل */}
        <div className="mt-10 text-center">
          <div className="flex justify-center items-center mb-2 text-blue-700"><FaEnvelope className="ml-2" /> <h2 className="text-lg font-bold">للاستفسار أو التواصل</h2></div>
          <p className="text-gray-600 text-sm mb-2">
            إذا كان لديك أي استفسار حول سياسة الخصوصية، يرجى التواصل معنا عبر صفحة <Link href="/contact" className="text-blue-700 underline">اتصل بنا</Link>.
          </p>
        </div>
      </div>
    </div>
  );
} 