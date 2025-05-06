import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات',
  description: 'دليل شامل حول متطلبات ومواصفات ملابس العمل المناسبة لفنيي الخدمة الميدانية في مختلف القطاعات، مع التركيز على المتانة والراحة والسلامة',
};

export default function ArticlePage() {
  const imageSrc = '/images/utility_services/maintenance_technician_clothing.jpeg';
  const title = 'ملابس فنيي الخدمة الميدانية: المتطلبات والمواصفات';

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
            يواجه فنيو الخدمة الميدانية تحديات فريدة في بيئات عملهم المتنوعة، سواء كانوا يعملون في مجال الاتصالات، أو صيانة المعدات، أو خدمات الطاقة، أو غيرها من القطاعات. وتلعب ملابس العمل المناسبة دوراً حاسماً في ضمان سلامتهم وراحتهم وكفاءتهم أثناء أداء مهامهم اليومية.
          </p>
          <p className="mb-4">
            في هذا المقال، نستعرض المتطلبات والمواصفات الرئيسية لملابس فنيي الخدمة الميدانية، مع مراعاة الاختلافات بين القطاعات المختلفة والظروف البيئية المتنوعة التي يعملون فيها.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">أهمية ملابس العمل المناسبة لفنيي الخدمة الميدانية</h2>
          <p className="mb-4">
            تتجاوز أهمية ملابس العمل المناسبة مجرد توفير مظهر موحد، حيث تلعب دوراً حيوياً في حماية الفنيين وتسهيل أدائهم وتعزيز هوية الشركة التي يمثلونها.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">المتطلبات الأساسية لملابس فنيي الخدمة الميدانية</h2>
          <p className="mb-4">
            تتضمن المتطلبات الأساسية لملابس فنيي الخدمة الميدانية عناصر مثل المتانة، والراحة، والحماية من المخاطر المختلفة، والملاءمة للظروف المناخية، وسهولة التنظيف والصيانة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">مواصفات الأقمشة المناسبة</h2>
          <p className="mb-4">
            تختلف مواصفات الأقمشة المناسبة باختلاف طبيعة العمل والبيئة، من الأقمشة المقاومة للماء والرياح، إلى الأقمشة المقاومة للاشتعال، والأقمشة الخفيفة والمتنفسة للبيئات الحارة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">تصميم الملابس وميزاتها العملية</h2>
          <p className="mb-4">
            يجب أن يتضمن تصميم ملابس فنيي الخدمة الميدانية ميزات عملية مثل الجيوب المتعددة، والتعزيزات في مناطق التآكل، والقصات التي تسمح بحرية الحركة، والعناصر العاكسة للضوء.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">معايير السلامة والامتثال</h2>
          <p className="mb-4">
            يجب أن تلبي ملابس فنيي الخدمة الميدانية معايير السلامة المحلية والدولية المعتمدة، مثل معايير مقاومة اللهب، ومقاومة الكهرباء الساكنة، والرؤية العالية، وغيرها.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">خاتمة</h2>
          <p className="mb-4">
            تمثل ملابس العمل المناسبة استثماراً مهماً في سلامة وكفاءة فنيي الخدمة الميدانية. ومن خلال مراعاة المتطلبات والمواصفات المذكورة، يمكن للشركات توفير زي عمل يحمي موظفيها، ويسهل أداءهم، ويعزز صورتها المهنية.
          </p>
        </section>
      </article>
    </main>
  );
} 