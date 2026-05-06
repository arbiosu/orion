import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { FileText, Phone } from 'lucide-react';
import LicenseCard from './license-card';

export default function Hero() {
  return (
    <section className='font-main flex flex-col items-center justify-center gap-2 overflow-hidden px-4 pt-10 text-center tracking-tighter'>
      <Image
        src='/orion-logo-no-bg.png'
        width={300}
        height={240}
        alt='Orion Handyman and Remodeling Logo'
        className='mx-auto -mb-4 block'
      />
      <div className='flex max-w-2xl flex-col items-center gap-4 pt-0'>
        <h1 className='text-4xl font-bold drop-shadow-lg sm:text-6xl'>
          Orion Remodeling & Handyman
        </h1>
        <p className='text-lg sm:text-2xl'>
          Expert Remodeling & Handyman Services
        </p>
        <p className='text-base sm:text-xl'>
          Proudly Serving{' '}
          <span className='font-extrabold'>Howell Township, New Jersey</span> &
          Surrounding Areas
        </p>
        <div className='flex gap-4'>
          <Button asChild size='lg'>
            <Link href='/#quoteForm'>
              <FileText />
              Get A Free Quote
            </Link>
          </Button>
          <Button asChild size='lg' className='bg-blue-700 text-white'>
            <Link
              href='tel:+17324927646'
              className='flex items-center gap-3 text-sm'
            >
              <Phone size={18} />
              <span>(732) 492-7646</span>
            </Link>
          </Button>
        </div>
        <LicenseCard />
      </div>
    </section>
  );
}
