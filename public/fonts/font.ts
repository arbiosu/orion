import { Roboto, Roboto_Slab } from 'next/font/google';

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const robotoSlab = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
});
