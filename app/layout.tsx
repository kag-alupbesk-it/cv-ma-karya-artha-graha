import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CV. Ma Karya Artha Graha',
  description: 'Kontraktor Aluminium & Kaca terbaik dan terpercaya di Yogyakarta.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
