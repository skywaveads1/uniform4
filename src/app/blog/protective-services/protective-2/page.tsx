import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'معايير اختيار زي الخدمات الوقائية',
  description: 'دليل شامل حول معايير اختيار زي الخدمات الوقائية مع التركيز على المواصفات الفنية والوظيفية والمناخية والثقافية',
};

export default function ArticlePage() {
  const imageSrc = '/images/protective_services/protective_services_uniforms.jpeg';
  const title = 'معايير اختيار زي الخدمات الوقائية';

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
            تعتبر الخدمات الوقائية من القطاعات الحيوية التي تساهم في الحفاظ على أمن وسلامة المنشآت والأفراد. ويعد زي العاملين في هذا المجال عنصراً أساسياً يعكس الاحترافية ويساهم في تعزيز الثقة والأمان.
          </p>
          <p className="mb-4">
            في هذا المقال، سنستعرض أهم المعايير التي يجب مراعاتها عند اختيار زي الخدمات الوقائية، مع التركيز على الجوانب الوظيفية والتنظيمية والثقافية المناسبة للبيئة السعودية.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">المعايير الأساسية لاختيار زي الخدمات الوقائية</h2>
          <p className="mb-4">
            يجب أن يلبي زي الخدمات الوقائية مجموعة من المعايير الأساسية التي تضمن الفعالية والراحة والمتانة، مع الالتزام بالمتطلبات التنظيمية والقانونية.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">المواصفات الفنية المطلوبة</h2>
          <p className="mb-4">
            تشمل المواصفات الفنية نوعية الأقمشة والمواد المستخدمة، والتصميم الوظيفي، وعناصر السلامة والحماية التي يجب توفرها في زي الخدمات الوقائية.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">الاعتبارات المناخية والثقافية</h2>
          <p className="mb-4">
            من المهم مراعاة الظروف المناخية والثقافية عند تصميم زي الخدمات الوقائية، خاصة في المملكة العربية السعودية التي تتميز بمناخ حار وقيم ثقافية محددة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">إدارة وصيانة الزي</h2>
          <p className="mb-4">
            تعتبر إدارة وصيانة الزي من العناصر المهمة لضمان الحفاظ على المظهر الاحترافي والوظائف الحمائية للزي على المدى الطويل.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">خاتمة</h2>
          <p className="mb-4">
            يمثل اختيار زي الخدمات الوقائية المناسب استثماراً استراتيجياً للشركات العاملة في هذا المجال، حيث يساهم في تعزيز صورتها المهنية وضمان سلامة وكفاءة موظفيها.
          </p>
        </section>
      </article>
    </main>
  );
} 