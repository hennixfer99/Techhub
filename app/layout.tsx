import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'TechHub Consultoria',
    template: '%s · TechHub Consultoria',
  },
  description:
    'Consultoria em TI, desenvolvimento de software, suporte técnico e licenças de software para empresas de todos os portes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
