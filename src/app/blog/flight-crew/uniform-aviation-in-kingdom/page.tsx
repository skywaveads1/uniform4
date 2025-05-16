import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'أزياء الطيران في المملكة العربية السعودية: تاريخ وتطور وهوية',
  description: 'استكشف تاريخ وتطور أزياء الطيران في المملكة العربية السعودية، والتي تعكس الهوية الوطنية والتزامها بالمعايير العالمية للطيران المدني.',
};

// صورة الهيدر للمقال
const heroImage = '/images/flight_crew/header_flight_crew_uniform.jpeg';

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/flight_crew_uniforms_riyadh.jpg';
  const title = 'أزياء الطيران في المملكة العربية السعودية: تاريخ وتطور وهوية';

  return (
    <main className="container mx-auto px-4 py-8 rtl">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        
        {imageSrc && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        )}

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">مقدمة</h2>
          <p className="mb-4">
            تعتبر أزياء الطيران في المملكة العربية السعودية مرآة حقيقية لتطور قطاع الطيران السعودي وهويته، حيث تجمع بين الأصالة والمعاصرة، وتعكس القيم الثقافية والدينية للمملكة مع الالتزام بالمعايير العالمية للطيران المدني.
          </p>
          <p className="mb-4">
            منذ تأسيس أول خطوط جوية سعودية وحتى يومنا هذا، شهدت أزياء الطيران تحولات كبيرة مرتبطة بالتطورات الاجتماعية والاقتصادية والتكنولوجية، لكنها ظلت محافظة على هويتها الفريدة التي تميزها عن غيرها من شركات الطيران العالمية.
          </p>
          <p className="mb-4">
            في هذا المقال، سنستعرض مسيرة تاريخ وتطور أزياء الطيران في المملكة العربية السعودية، ونسلط الضوء على أهم المحطات والخصائص التي ميزتها عبر العقود المختلفة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">البدايات: نشأة أزياء الطيران السعودية</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">الأربعينيات والخمسينيات: ميلاد الطيران السعودي</h3>
          <p className="mb-4">
            بدأت قصة أزياء الطيران السعودية مع تأسيس الخطوط الجوية السعودية في عام 1945، حيث كانت الأزياء في تلك الفترة تتميز بالبساطة والطابع الرسمي الذي كان سائداً في عالم الطيران آنذاك.
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">كان زي الطيارين مستوحى من النموذج العسكري البريطاني</li>
            <li className="mb-2">اتسمت أزياء طاقم الضيافة بالطابع التقليدي المحافظ</li>
            <li className="mb-2">تم استخدام ألوان محدودة تغلب عليها درجات الأزرق الداكن والرمادي</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">الستينيات والسبعينيات: بداية التميز والهوية</h3>
          <p className="mb-4">
            مع توسع الخطوط السعودية وافتتاح خطوط دولية جديدة، بدأت ملامح هوية سعودية مميزة تظهر في أزياء الطيران:
          </p>
          <ol className="list-decimal list-inside mb-4 mr-5">
            <li className="mb-2">إدخال اللون الأخضر كعنصر أساسي في الزي، تعبيراً عن الهوية الوطنية</li>
            <li className="mb-2">ظهور العناصر التقليدية السعودية في تصميم الأزياء، مثل استخدام الشماغ للمضيفين</li>
            <li className="mb-2">تطوير زي خاص بالمضيفات يجمع بين الأناقة العالمية والاحتشام المطلوب</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">مرحلة التطور: تحديث أزياء الطيران السعودية</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">الثمانينيات والتسعينيات: عصر التحديث والتنوع</h3>
          <p className="mb-4">
            شهدت هذه الفترة طفرة اقتصادية كبيرة في المملكة، انعكست على قطاع الطيران وأزيائه:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">تطوير الزي الرسمي للخطوط السعودية ليكون أكثر عصرية وأناقة</li>
            <li className="mb-2">التعاون مع مصممي أزياء عالميين لتطوير تصاميم تجمع بين العالمية والهوية المحلية</li>
            <li className="mb-2">استخدام أقمشة ذات جودة عالية ومريحة مناسبة للرحلات الطويلة</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">بداية الألفية الجديدة: تنوع شركات الطيران وأزياءها</h3>
          <p className="mb-4">
            مع دخول شركات طيران خاصة إلى سوق الطيران السعودي، ظهر تنوع في تصاميم أزياء الطيران:
          </p>
          <ol className="list-decimal list-inside mb-4 mr-5">
            <li className="mb-2">طيران ناس: تبنى زياً أكثر بساطة وعملية، مع الحفاظ على العناصر الأساسية للهوية السعودية</li>
            <li className="mb-2">طيران أديل: قدم رؤية عصرية تستهدف الشباب، مع الالتزام بالقيم الأساسية</li>
            <li className="mb-2">الشركات المتخصصة في الطيران الخاص: قدمت أزياء تتميز بالفخامة والتفرد</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">رؤية 2030 وأزياء الطيران المعاصرة</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">التحديث والتطوير الشامل</h3>
          <p className="mb-4">
            مع إطلاق رؤية المملكة 2030، شهدت أزياء الطيران تحديثات جذرية:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">إطلاق تصاميم جديدة للخطوط السعودية تعكس التوجه المستقبلي للمملكة</li>
            <li className="mb-2">الاستعانة بمصممين سعوديين موهوبين لإضفاء لمسة محلية أصيلة</li>
            <li className="mb-2">التركيز على الاستدامة والمواد صديقة البيئة في صناعة الأزياء</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">العناصر الثقافية الأساسية</h3>
          <p className="mb-4">
            رغم التطورات المستمرة، حافظت أزياء الطيران السعودية على عناصر ثقافية أساسية:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2"><strong>اللون الأخضر:</strong> استمر كرمز للهوية الوطنية في معظم تصاميم الأزياء</li>
            <li className="mb-2"><strong>النقوش العربية والإسلامية:</strong> ظهرت في تفاصيل الأزياء كاللفحات والأوشحة</li>
            <li className="mb-2"><strong>الاحتشام والأناقة:</strong> ظلت قيماً راسخة في تصميم الأزياء، خاصة للمضيفات</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">التحديات والفرص المستقبلية</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">تحديات تصميم أزياء الطيران السعودية</h3>
          <p className="mb-4">
            تواجه صناعة أزياء الطيران السعودية مجموعة من التحديات، أهمها:
          </p>
          <ul className="list-disc list-inside mb-4 mr-5">
            <li className="mb-2">التوازن بين الحفاظ على الهوية السعودية ومواكبة التطورات العالمية</li>
            <li className="mb-2">مراعاة التنوع البشري والثقافي لأفراد الطاقم والمسافرين</li>
            <li className="mb-2">تلبية متطلبات الراحة والوظيفية مع الحفاظ على الجماليات</li>
            <li className="mb-2">تحقيق الاستدامة البيئية في تصنيع الأزياء</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">الفرص الواعدة</h3>
          <p className="mb-4">
            في المقابل، هناك فرص واعدة لتطوير أزياء الطيران السعودية:
          </p>
          <ol className="list-decimal list-inside mb-4 mr-5">
            <li className="mb-2">توطين صناعة أزياء الطيران بالكامل في المملكة</li>
            <li className="mb-2">تصدير التصاميم السعودية المميزة إلى شركات طيران عالمية</li>
            <li className="mb-2">الاستفادة من التكنولوجيا المتطورة في تصنيع أقمشة ذكية ومستدامة</li>
            <li className="mb-2">تطوير مدارس تصميم متخصصة في أزياء الطيران</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">الخاتمة</h2>
          <p className="mb-4">
            تمثل أزياء الطيران في المملكة العربية السعودية قصة نجاح في الجمع بين الأصالة والمعاصرة، وفي تحقيق التوازن بين الهوية المحلية والمعايير العالمية. من البدايات المتواضعة إلى التصاميم العصرية المبتكرة، استطاعت هذه الأزياء أن تكون سفيراً للثقافة السعودية وواجهة مشرفة للمملكة في المحافل الدولية.
          </p>
          <p className="mb-4">
            ومع استمرار مسيرة التطوير والتحديث ضمن رؤية 2030، من المتوقع أن تشهد أزياء الطيران السعودية المزيد من الابتكار والتميز، لتظل رمزاً للفخر الوطني والتطور الحضاري للمملكة العربية السعودية.
          </p>
        </section>
      </article>
    </main>
  );
} 