'use client';

import React from 'react';
import BlogArticle from '@/components/BlogArticle';
import { 
  Section, 
  Paragraph, 
  BulletList, 
  ListItem, 
  Quote, 
  HighlightBox, 
  KeyPointsBox,
  ArticleImage
} from '@/components/ArabicContentElements';

/**
 * ArticleTemplate - Copy this component to create new article pages
 * 
 * Instructions:
 * 1. Copy this file to your new article directory under src/app/blog/[category]/[article-slug]/page.tsx
 * 2. Update all the article content including: title, description, images, content, tags, and related articles
 * 3. Add proper id attributes to your h2 headings to enable the table of contents navigation
 * 4. Update the function name to match your article name (use PascalCase)
 */
export default function ArticleTemplate() {
  // Replace this data with your article's data
  const relatedArticles = [
    {
      title: "عنوان المقال الأول ذو الصلة",
      description: "وصف موجز للمقال الأول ذو الصلة بهذا المقال",
      image: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
      url: "/blog/category/article-slug",
      date: "١ مايو ٢٠٢٤",
      category: "اسم الفئة"
    },
    {
      title: "عنوان المقال الثاني ذو الصلة",
      description: "وصف موجز للمقال الثاني ذو الصلة بهذا المقال",
      image: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
      url: "/blog/category/article-slug-2",
      date: "٥ مايو ٢٠٢٤",
      category: "اسم الفئة"
    },
    {
      title: "عنوان المقال الثالث ذو الصلة",
      description: "وصف موجز للمقال الثالث ذو الصلة بهذا المقال",
      image: "/images/flight_crew/crew_uniform_visual_identity.jpeg",
      url: "/blog/category/article-slug-3",
      date: "١٠ مايو ٢٠٢٤",
      category: "اسم الفئة"
    }
  ];

  // Replace with your article's tags
  const tags = ["الكلمة المفتاحية الأولى", "الكلمة المفتاحية الثانية", "الكلمة المفتاحية الثالثة", "الكلمة المفتاحية الرابعة"];

  return (
    <BlogArticle
      title="عنوان المقال الرئيسي"
      description="وصف موجز للمقال يظهر تحت العنوان الرئيسي"
      category="اسم الفئة"
      categoryUrl="/blog/category"
      heroImage="/images/flight_crew/crew_uniform_visual_identity.jpeg"
      publishDate="١ مايو ٢٠٢٤"
      readTime="١٠ دقائق للقراءة"
      authorName="اسم الكاتب"
      authorImage="/images/author/team.jpg"
      authorTitle="الوصف الوظيفي للكاتب"
      backUrl="/blog/category"
      tags={tags}
      relatedArticles={relatedArticles}
    >
      {/* المقدمة */}
      <Section id="intro" title="مقدمة">
        <Paragraph isLead={true}>
          هنا يتم كتابة مقدمة المقال. هذه المقدمة يجب أن تكون جذابة وتلخص محتوى المقال بشكل موجز.
          يمكن إضافة فقرات متعددة حسب الحاجة.
        </Paragraph>
        <Paragraph>
          هنا يمكن إضافة المزيد من التفاصيل حول موضوع المقال والنقاط الرئيسية التي سيتم تناولها.
        </Paragraph>
      </Section>

      {/* القسم الأول */}
      <Section id="section1" title="عنوان القسم الأول">
        <Paragraph>
          محتوى القسم الأول من المقال. يمكن إضافة فقرات متعددة وصور وقوائم وغيرها.
        </Paragraph>
        <BulletList>
          <ListItem title="العنصر الأول">
            وصف العنصر الأول بالتفصيل مع معلومات إضافية وشرح مفصل.
          </ListItem>
          <ListItem title="العنصر الثاني">
            وصف العنصر الثاني بالتفصيل مع معلومات إضافية وشرح مفصل.
          </ListItem>
        </BulletList>

        <HighlightBox title="معلومة مهمة" color="blue">
          <Paragraph>
            هنا يمكن إضافة معلومة مهمة تتعلق بموضوع المقال وتريد تسليط الضوء عليها.
          </Paragraph>
        </HighlightBox>
      </Section>

      {/* صورة توضيحية */}
      <ArticleImage 
        src="/images/flight_crew/crew_uniform_visual_identity.jpeg"
        alt="وصف الصورة"
        caption="وصف توضيحي للصورة يظهر أسفلها"
        source="المصدر"
      />

      {/* القسم الثاني */}
      <Section id="section2" title="عنوان القسم الثاني">
        <Paragraph>
          محتوى القسم الثاني من المقال. يمكن إضافة فقرات متعددة وصور وقوائم وغيرها.
        </Paragraph>

        <KeyPointsBox 
          title="النقاط الرئيسية"
          points={[
            "النقطة الأولى المهمة في هذا القسم",
            "النقطة الثانية المهمة في هذا القسم",
            "النقطة الثالثة المهمة في هذا القسم"
          ]}
        />

        <Quote author="اسم المصدر" source="المرجع">
          هنا يمكن إضافة اقتباس مهم يتعلق بموضوع المقال.
        </Quote>
      </Section>

      {/* القسم الثالث */}
      <Section id="section3" title="عنوان القسم الثالث">
        <Paragraph>
          محتوى القسم الثالث من المقال. يمكن إضافة فقرات متعددة وصور وقوائم وغيرها.
        </Paragraph>
        
        <HighlightBox title="نصيحة مهمة" color="green">
          <Paragraph>
            هنا يمكن إضافة نصيحة مهمة تتعلق بموضوع المقال.
          </Paragraph>
        </HighlightBox>
      </Section>

      {/* الخلاصة */}
      <Section id="conclusion" title="الخلاصة">
        <Paragraph>
          هنا يتم كتابة خلاصة المقال وتلخيص النقاط الرئيسية التي تم تناولها.
        </Paragraph>
        <Paragraph>
          يمكن إضافة دعوة للعمل أو توصيات نهائية للقارئ.
        </Paragraph>
      </Section>
    </BlogArticle>
  );
} 