'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "ما هي خدمات الأزياء الموحدة التي تقدمونها؟",
    answer: "نقدم مجموعة شاملة من خدمات الأزياء الموحدة تشمل تصميم وتصنيع الأزياء للقطاعات المختلفة مثل الطيران، الأمن، الضيافة، والخدمات الطبية. نوفر حلولاً مخصصة تلبي احتياجات كل عميل مع التركيز على الجودة والراحة والمظهر المهني."
  },
  {
    question: "كيف يمكنني طلب عرض سعر؟",
    answer: "يمكنك طلب عرض سعر بسهولة من خلال تعبئة نموذج طلب العرض على موقعنا. سنقوم بالتواصل معك خلال 24 ساعة لمناقشة متطلباتك وتقديم عرض سعر مفصل يناسب احتياجاتك."
  },
  {
    question: "ما هي الحد الأدنى للكمية المطلوبة؟",
    answer: "يختلف الحد الأدنى للكمية حسب نوع الزي والتصميم المطلوب. عموماً، نقبل الطلبات التي تبدأ من 50 قطعة للتصميم الواحد. للطلبات الأقل من ذلك، يرجى التواصل معنا لمناقشة الخيارات المتاحة."
  },
  {
    question: "هل تقدمون خدمات التطريز وطباعة الشعارات؟",
    answer: "نعم، نقدم خدمات التطريز وطباعة الشعارات بأعلى جودة. نستخدم أحدث التقنيات والمعدات لضمان جودة عالية ومتانة في التطريز والطباعة، مع إمكانية تنفيذ التصاميم المعقدة والألوان المتعددة."
  },
  {
    question: "ما هي خيارات الدفع المتاحة؟",
    answer: "نقبل مجموعة متنوعة من طرق الدفع تشمل التحويل البنكي، البطاقات الائتمانية، والدفع على مراحل للطلبات الكبيرة. يتم تحديد شروط الدفع بشكل واضح في عرض السعر المقدم."
  },
  {
    question: "كم تستغرق عملية التصنيع والتسليم؟",
    answer: "تختلف مدة التصنيع والتسليم حسب حجم الطلب والتصميم المطلوب. عادةً تستغرق العملية من 4-8 أسابيع من تاريخ اعتماد العينة. نحرص على الالتزام بمواعيد التسليم المتفق عليها."
  },
  {
    question: "هل تقدمون خدمة تصميم الأزياء المخصصة؟",
    answer: "نعم، لدينا فريق متخصص من المصممين يقدم خدمات تصميم مخصصة تناسب هوية شركتك وتلبي متطلباتك الخاصة. نعمل معك عن قرب لتطوير تصاميم فريدة تعكس قيم وأهداف مؤسستك."
  },
  {
    question: "ما هي سياسة الضمان الخاصة بكم؟",
    answer: "نقدم ضماناً شاملاً على جميع منتجاتنا يغطي عيوب التصنيع والخياطة لمدة 6 أشهر من تاريخ التسليم. نلتزم بمعالجة أي مشاكل تتعلق بالجودة بشكل فوري وفعال."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12 mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">الأسئلة الشائعة</h1>
          <p className="text-xl text-blue-100">إجابات على أكثر الأسئلة شيوعاً حول خدماتنا</p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <button
                  className="w-full py-4 text-right focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <span className="transform transition-transform duration-200">
                      {openIndex === index ? (
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="pb-4 pr-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">لم تجد إجابة على سؤالك؟</p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </div>
  );
} 