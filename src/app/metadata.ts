import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: process.env.NODE_ENV === 'production' 
    ? new URL('https://www.yourdomain.com') 
    : new URL('http://localhost:3000'),
  title: 'يونيفورم | الأزياء الموحدة المتخصصة للشركات في المملكة العربية السعودية',
  description: 'شركة رائدة في تصميم وتصنيع الأزياء الموحدة للشركات والمؤسسات في المملكة العربية السعودية. نقدم حلولاً مبتكرة وعالية الجودة لقطاعات الطيران والضيافة والرعاية الصحية والتعليم والأمن.',
  keywords: 'أزياء موحدة, يونيفورم شركات, ملابس طيران, أزياء طبية, زي مدرسي, يونيفورم أمن, أزياء طهاة, تصميم أزياء موحدة, أزياء شركات, المملكة العربية السعودية, الرياض, جدة, الدمام',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://www.yourdomain.com',
    siteName: 'يونيفورم - الأزياء الموحدة المتخصصة',
    title: 'يونيفورم | الأزياء الموحدة المتخصصة للشركات والمؤسسات',
    description: 'حلول متكاملة للأزياء الموحدة في المملكة العربية السعودية - نخدم قطاعات الطيران والضيافة والرعاية الصحية والتعليم والأمن',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'يونيفورم - الأزياء الموحدة المتخصصة'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@YourTwitterHandle',
    creator: '@YourTwitterHandle',
    title: 'يونيفورم | الأزياء الموحدة المتخصصة',
    description: 'حلول متكاملة للأزياء الموحدة في المملكة العربية السعودية - تصميم وتصنيع أزياء احترافية',
    images: [
      {
        url: '/images/twitter-image.jpg',
        width: 1200,
        height: 630,
        alt: 'يونيفورم - الأزياء الموحدة المتخصصة'
      }
    ],
  },
  alternates: {
    canonical: 'https://www.yourdomain.com',
    languages: {
      'ar-SA': 'https://www.yourdomain.com',
      'en-US': 'https://www.yourdomain.com/en',
    },
  },
  applicationName: 'يونيفورم',
  authors: [
    { name: 'يونيفورم', url: 'https://www.yourdomain.com' }
  ],
  generator: 'Next.js',
  publisher: 'يونيفورم',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  creator: 'يونيفورم',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      me: ['your-name', 'your-email@example.com'],
    },
  },
  category: 'أزياء موحدة',
}; 