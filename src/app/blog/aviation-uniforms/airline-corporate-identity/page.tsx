import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'زي الطيران وهوية الشركة المؤسسية',
  description: 'دراسة تحليلية للعلاقة بين تصميم أزياء الطيران وهوية الشركة المؤسسية وكيف تسهم الأزياء في تعزيز العلامة التجارية لشركات الطيران',
};

export default function ArticlePage() {
  const imageSrc = '/images/flight_crew/crew_uniform_visual_identity.jpeg';
  const title = 'زي الطيران وهوية الشركة المؤسسية';

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
            تعد أزياء الطيران عنصراً أساسياً في تشكيل الهوية المؤسسية لشركات الطيران، فهي ليست مجرد ملابس وظيفية، بل تمثل امتداداً مرئياً للعلامة التجارية وقيمها. في هذا المقال، نستكشف العلاقة المتكاملة بين تصميم أزياء الطيران وهوية الشركة المؤسسية، وكيف تسهم هذه الأزياء في تعزيز الصورة الذهنية لشركات الطيران لدى العملاء والجمهور.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">عناصر الهوية البصرية في أزياء الطيران</h2>
          <p className="mb-4">
            تتكون الهوية البصرية لأزياء الطيران من عدة عناصر أساسية تسهم مجتمعة في خلق صورة متكاملة وموحدة تعبر عن شخصية الشركة وقيمها الأساسية.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">دور الألوان في تعزيز الهوية المؤسسية</h2>
          <p className="mb-4">
            تلعب الألوان دوراً محورياً في تصميم أزياء الطيران وتشكيل الهوية المؤسسية، حيث ترتبط بالعلامة التجارية وتثير استجابات عاطفية معينة لدى المسافرين.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">الرموز والشعارات في تصميم الزي</h2>
          <p className="mb-4">
            تمثل الرموز والشعارات عناصر أساسية في تصميم أزياء الطيران، حيث تسهم في تعزيز هوية الشركة وتميزها عن منافسيها في سوق الطيران التنافسية.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">دراسات حالة لشركات طيران مميزة</h2>
          <p className="mb-4">
            نستعرض في هذا القسم بعض التجارب الناجحة لشركات طيران عالمية استطاعت من خلال تصميم أزيائها تعزيز هويتها المؤسسية وتحقيق تميز بصري ملحوظ.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">تحديات الموازنة بين الهوية والوظيفية</h2>
          <p className="mb-4">
            تواجه عملية تصميم أزياء الطيران تحدياً مستمراً في تحقيق التوازن بين التعبير عن الهوية المؤسسية وضمان الوظيفية والراحة للطاقم.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">خاتمة</h2>
          <p className="mb-4">
            تمثل أزياء الطيران أداة استراتيجية في بناء وتعزيز الهوية المؤسسية لشركات الطيران. ومن خلال التصميم المدروس الذي يجمع بين العناصر البصرية المميزة والوظيفية العالية، يمكن لهذه الأزياء أن تسهم بشكل فعال في خلق تجربة متكاملة للمسافرين تعزز ولاءهم للعلامة التجارية وتميز الشركة في سوق تنافسية.
          </p>
        </section>
      </article>
    </main>
  );
} 