import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { dmSans } from '../../public/fonts/font';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Orion Remodeling & Handyman',
  description: 'Licensed General Contractors Serving Monmouth County, NJ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute={'class'}
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
