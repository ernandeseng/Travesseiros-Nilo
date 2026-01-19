import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Nilo Travesseiros - Conforto que Transforma Noites',
  description:
    'Travesseiros de qualidade premium com preço justo. Produção própria e entrega rápida para todo Brasil.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
