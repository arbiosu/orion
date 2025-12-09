import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { dmSans } from '../../public/fonts/font';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.orionremodels.com/'),

  title: 'Orion | Licensed Home Improvement Contractor',
  description:
    'Licensed Home Improvement Contractor in Monmouth County, NJ. Residential home improvement, remodeling, renovation, and general handyman services.',

  keywords: [
    'construction company',
    'home improvement',
    'home remodeling',
    'home renovation',
    'Monmouth County construction',
    'Monmouth County home improvement',
    'handyman services',
    'licensed contractor',
    'licensed contractor Monmouth County',
    'carpentry Monmouth County',
    'plumbing Monmouth County',
    'electrician Monmouth County',
    'painting Monmouth County',
    'handyman Monmouth County',
    'licensed contractor howell township',
    'carpentry howell township',
    'plumbing howell township',
    'electrician howell township',
    'painting howell township',
    'handyman howell township',
    'bathroom remodel howell township',
    'kitchen remodel howell township',
    'living room remodel howell township',
  ],

  authors: [
    {
      name: 'Orion Remodeling & Handyman',
      url: 'https://www.orionremodels.com/#about',
    },
  ],

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
          defaultTheme='system'
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
