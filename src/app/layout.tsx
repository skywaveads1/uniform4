import { metadata } from './metadata';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 