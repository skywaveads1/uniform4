import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? 'https://helden2026.github.io/Uniform-Blogs/' 
    : 'http://localhost:3000'),
  title: 'الأزياء الموحدة المتخصصة | تصميم وتصنيع أزياء الشركات والمؤسسات',
  description: 'شركة متخصصة في تصميم وتصنيع الأزياء الموحدة للشركات في المملكة العربية السعودية. نقدم حلولاً مبتكرة لقطاعات الطيران والأمن والضيافة والرعاية الصحية.',
  keywords: 'أزياء موحدة, يونيفورم شركات, ملابس طيران, أزياء أمن, أزياء طبية, تصميم أزياء موحدة, السعودية',
  openGraph: {
    title: 'الأزياء الموحدة المتخصصة | تصميم وتصنيع أزياء الشركات',
    description: 'حلول متكاملة للأزياء الموحدة في المملكة العربية السعودية',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الأزياء الموحدة المتخصصة',
    description: 'حلول متكاملة للأزياء الموحدة في المملكة العربية السعودية',
    images: ['/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.yourdomain.com',
    languages: {
      'ar-SA': 'https://www.yourdomain.com/ar',
      'en-US': 'https://www.yourdomain.com/en',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}; 