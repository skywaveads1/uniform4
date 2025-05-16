import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تصميم أزياء الطهاة في المملكة العربية السعودية',
  description: 'استكشاف تطور وتصميم أزياء الطهاة في المملكة العربية السعودية، مع التركيز على المزج بين التقاليد المحلية والمعايير العالمية',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 