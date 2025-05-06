# دليل إنشاء مقالات المدونة الاحترافية

هذا الدليل يوفر إرشادات حول كيفية إنشاء وتحرير مقالات المدونة الاحترافية باستخدام مكونات React المخصصة.

## نظرة عامة على النظام

يتكون نظام المقالات من ثلاثة مكونات رئيسية:

1. **BlogArticle**: مكون React يوفر قالبًا موحدًا ومتناسقًا لجميع مقالات المدونة.
2. **ArabicContentElements**: مكونات مخصصة لتنسيق محتوى المقالات العربية بشكل احترافي.
3. **ArticleTemplate**: قالب جاهز لإنشاء مقالات جديدة بسرعة.

## كيفية إنشاء مقال جديد

### 1. إنشاء مجلد وملف للمقال

لإنشاء مقال جديد، اتبع هذه الخطوات:

1. قم بإنشاء مجلد جديد ضمن المسار المناسب:
   ```
   src/app/blog/[فئة_المقال]/[اسم-المقال-بالإنجليزية]/
   ```

2. أنشئ ملف `page.tsx` داخل هذا المجلد.

3. انسخ محتوى مكون `ArticleTemplate` إلى الملف الجديد.

### 2. تحديث معلومات المقال

قم بتحديث البيانات التالية داخل المكون:

#### معلومات المقال الأساسية

```tsx
<BlogArticle
  title="عنوان المقال الرئيسي"
  description="وصف موجز للمقال يظهر تحت العنوان الرئيسي"
  category="اسم الفئة"
  categoryUrl="/blog/category"
  heroImage="/images/category/hero-image.jpg"
  publishDate="١ مايو ٢٠٢٤"
  readTime="١٠ دقائق للقراءة"
  authorName="اسم الكاتب"
  authorImage="/images/author/author-image.jpg"
  authorTitle="الوصف الوظيفي للكاتب"
  backUrl="/blog/category"
  tags={tags}
  relatedArticles={relatedArticles}
>
  {/* محتوى المقال */}
</BlogArticle>
```

#### الكلمات المفتاحية (tags)

```tsx
const tags = ["الكلمة المفتاحية الأولى", "الكلمة المفتاحية الثانية", "الكلمة المفتاحية الثالثة"];
```

#### المقالات ذات الصلة

```tsx
const relatedArticles = [
  {
    title: "عنوان المقال ذو الصلة",
    description: "وصف موجز للمقال ذو الصلة",
    image: "/images/category/image.jpg",
    url: "/blog/category/article-slug",
    date: "١ مايو ٢٠٢٤",
    category: "اسم الفئة"
  },
  // يمكن إضافة المزيد من المقالات
];
```

### 3. إضافة محتوى المقال باستخدام مكونات ArabicContentElements

يتم استخدام مكونات خاصة لتنسيق المحتوى العربي بشكل احترافي. تأكد من استيراد هذه المكونات في بداية ملف المقال:

```tsx
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
```

#### بنية المقال باستخدام المكونات الاحترافية:

```tsx
<Section id="intro" title="مقدمة">
  <Paragraph isLead={true}>
    نص المقدمة هنا يظهر بخط أكبر لأنه الفقرة الأولى...
  </Paragraph>
  <Paragraph>
    فقرة عادية من المقدمة...
  </Paragraph>
</Section>

<Section id="section1" title="عنوان القسم الأول">
  <Paragraph>
    محتوى القسم الأول...
  </Paragraph>
  
  <BulletList>
    <ListItem title="العنصر الأول">
      وصف العنصر الأول بالتفصيل...
    </ListItem>
    <ListItem title="العنصر الثاني">
      وصف العنصر الثاني بالتفصيل...
    </ListItem>
  </BulletList>
  
  <HighlightBox title="معلومة مهمة" color="blue">
    <Paragraph>
      محتوى المعلومة المهمة...
    </Paragraph>
  </HighlightBox>
</Section>
```

**ملاحظة مهمة**: يتم إنشاء جدول المحتويات تلقائيًا من مكونات `Section` بناءً على خصائص `id` و `title`.

## مكونات المحتوى المتاحة

### 1. مكون Section (قسم)

يستخدم لإنشاء أقسام المقال الرئيسية مع عنوان منسق:

```tsx
<Section id="section-id" title="عنوان القسم">
  {/* محتوى القسم */}
</Section>
```

### 2. مكون Paragraph (فقرة)

يستخدم لإنشاء فقرات نصية:

```tsx
<Paragraph isLead={true}>
  فقرة رئيسية تظهر بتنسيق بارز...
</Paragraph>

<Paragraph>
  فقرة عادية...
</Paragraph>
```

### 3. مكون BulletList (قائمة نقطية)

يستخدم لإنشاء قوائم منسقة:

```tsx
<BulletList>
  <ListItem title="العنوان الأول">
    الوصف التفصيلي للنقطة الأولى...
  </ListItem>
  <ListItem title="العنوان الثاني">
    الوصف التفصيلي للنقطة الثانية...
  </ListItem>
</BulletList>
```

### 4. مكون HighlightBox (مربع تمييز)

يستخدم لإبراز معلومات مهمة:

```tsx
<HighlightBox title="معلومة مهمة" color="blue">
  <Paragraph>
    محتوى المعلومة المهمة...
  </Paragraph>
</HighlightBox>
```

الألوان المتاحة: `blue`, `green`, `amber`, `red`

### 5. مكون KeyPointsBox (مربع النقاط الرئيسية)

يستخدم لعرض قائمة من النقاط الرئيسية:

```tsx
<KeyPointsBox 
  title="النقاط الرئيسية"
  points={[
    "النقطة الأولى المهمة",
    "النقطة الثانية المهمة",
    "النقطة الثالثة المهمة"
  ]}
/>
```

### 6. مكون Quote (اقتباس)

يستخدم لإضافة اقتباسات:

```tsx
<Quote author="اسم المصدر" source="المرجع">
  نص الاقتباس هنا...
</Quote>
```

### 7. مكون ArticleImage (صورة المقال)

يستخدم لإضافة صور مع شرح توضيحي:

```tsx
<ArticleImage 
  src="/images/category/image.jpg"
  alt="وصف الصورة"
  caption="وصف توضيحي للصورة"
  source="المصدر"
/>
```

## مثال كامل لبنية مقال

```tsx
<BlogArticle {...articleProps}>
  <Section id="intro" title="مقدمة">
    <Paragraph isLead={true}>
      نص المقدمة هنا...
    </Paragraph>
  </Section>

  <Section id="section1" title="القسم الأول">
    <Paragraph>
      محتوى القسم الأول...
    </Paragraph>
    
    <BulletList>
      <ListItem title="العنصر الأول">
        وصف العنصر الأول...
      </ListItem>
    </BulletList>
    
    <HighlightBox title="معلومة مهمة" color="blue">
      <Paragraph>
        معلومة مهمة هنا...
      </Paragraph>
    </HighlightBox>
  </Section>
  
  <ArticleImage 
    src="/images/category/image.jpg"
    alt="وصف الصورة"
    caption="شرح الصورة"
  />
  
  <Section id="section2" title="القسم الثاني">
    <Paragraph>
      محتوى القسم الثاني...
    </Paragraph>
    
    <KeyPointsBox 
      title="النقاط الرئيسية"
      points={[
        "النقطة الأولى",
        "النقطة الثانية"
      ]}
    />
    
    <Quote author="المصدر">
      اقتباس مهم هنا...
    </Quote>
  </Section>
  
  <Section id="conclusion" title="الخلاصة">
    <Paragraph>
      خلاصة المقال...
    </Paragraph>
  </Section>
</BlogArticle>
```

## ميزات المقالات

مكون `BlogArticle` يوفر العديد من الميزات تلقائيًا:

1. **شريط تقدم القراءة**: يظهر في أعلى الصفحة ويعرض نسبة تقدم القراءة.
2. **زر العودة للمدونة**: يظهر عند التمرير لأسفل ويتيح العودة لصفحة الفئة.
3. **أزرار المشاركة**: تظهر على الجانب للمشاركة عبر وسائل التواصل الاجتماعي.
4. **جدول المحتويات الديناميكي**: يتم إنشاؤه تلقائيًا بناءً على مكونات `Section` المستخدمة في المقال.
5. **مقالات ذات صلة**: تعرض في نهاية المقال.
6. **نموذج الاشتراك في النشرة البريدية**: يظهر في نهاية المقال.

## نصائح لتحسين المقالات

1. **قسم المحتوى**: استخدم مكون `Section` لتقسيم المقال إلى أقسام منطقية واضحة.
2. **اختر عناوين معبرة**: اختر عناوين واضحة ومعبرة لكل قسم.
3. **استخدم تنسيقات متنوعة**: استخدم مزيجًا من الفقرات والقوائم والمربعات والاقتباسات لكسر رتابة النص.
4. **أضف صورًا توضيحية**: استخدم مكون `ArticleImage` لإضافة صور ذات صلة بالمحتوى.
5. **أبرز المعلومات المهمة**: استخدم مكون `HighlightBox` لإبراز المعلومات المهمة.
6. **لخص النقاط الرئيسية**: استخدم مكون `KeyPointsBox` لتلخيص النقاط الرئيسية في كل قسم.

## تحديث قائمة المقالات

عند إنشاء مقال جديد، تأكد من تحديث ملف `src/app/data.ts` لإضافة المقال إلى قائمة المقالات في الفئة المناسبة.

## مساعدة إضافية

إذا كنت بحاجة إلى مساعدة إضافية، يمكنك الاطلاع على مقال نموذجي في:
`src/app/blog/workwear/clothing-maintenance-work-health/page.tsx` 