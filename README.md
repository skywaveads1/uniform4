# Uniform Company Website

A Next.js-based website for a uniform company, optimized for performance and SEO.

## Features

- Static site generation with Next.js
- Image optimization with WebP format support
- Lazy loading images
- SEO optimizations with metadata and structured data
- Performance optimizations with resource hints
- PWA capabilities with web app manifest
- Sitemap generation
- Blog with multiple categories
- Responsive design

## Tech Stack

- Next.js 13+
- React
- TypeScript
- TailwindCSS

## Development

### Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Generate Sitemap
```bash
npm run generate-sitemap
```

### Optimize Images
```bash
npm run optimize-images
```

## بناء الموقع للإنتاج

لبناء الموقع للنشر المحلي:
```bash
npm run build
```

لبناء الموقع للنشر على GitHub Pages:
```bash
npm run build:gh-pages
```

ستجد ملفات الإخراج في مجلد `out`.

## النشر على GitHub Pages

تم تكوين المشروع للنشر التلقائي على GitHub Pages عند دفع التغييرات إلى الفرع الرئيسي.

### إعداد GitHub Actions

يحتوي المشروع على ملف تكوين GitHub Actions في `.github/workflows/deploy.yml` الذي يقوم تلقائياً ببناء ونشر الموقع عند دفع التغييرات.

### الإعدادات اليدوية (في حالة عدم استخدام GitHub Actions)

1. قم ببناء الموقع:
```bash
npm run build:gh-pages
```

2. انشر محتويات مجلد `out` على فرع `gh-pages` في المستودع.

## حل مشكلة الصور في GitHub Pages

تم حل مشكلة عدم ظهور الصور على GitHub Pages من خلال:

1. تكوين Next.js لاستخدام المسار الأساسي الصحيح (`basePath` و `assetPrefix`)
2. استخدام محمّل صور مخصص يضيف اسم المستودع إلى مسارات الصور
3. إضافة سكريبت في جانب العميل لتصحيح مسارات الصور المكسورة تلقائياً

## بنية المشروع

- `src/app` - مكونات وصفحات التطبيق
- `public/images` - الصور المستخدمة في الموقع
- `public/optimized_images` - نسخ محسّنة من الصور (إن وجدت)

## التحسين

يمكنك تحسين الصور باستخدام سكريبت التحسين المضمن:

```bash
node optimize-images.js
```

لاستعادة الصور الأصلية بعد التحسين:

```bash
node restore-backups.js
```

## تطوير المزيد من المقالات

راجع ملف `articlemap.md` للحصول على قائمة بالمقالات المخطط لها.

---

تم تطوير هذا الموقع باستخدام [Next.js](https://nextjs.org/) و [Tailwind CSS](https://tailwindcss.com/). 