import Link from 'next/link';
import { Button } from './ui/button';
import { FileText } from 'lucide-react';
import LicenseCard from './license-card';

export default function Hero() {
  return (
    <section className='font-main relative flex h-screen items-center justify-center overflow-hidden text-center tracking-tighter'>
      <div className='relative z-10 flex flex-col items-center justify-center gap-8'>
        <div className='flex max-w-2xl flex-col items-center justify-center gap-4 px-4'>
          <h1 className='text-4xl font-bold drop-shadow-lg sm:text-6xl'>
            Orion Remodeling & Handyman
          </h1>
          <p className='text-lg sm:text-2xl'>
            Expert Remodeling & Handyman Services
          </p>
          <p className='text-base sm:text-xl'>
            Proudly Serving{' '}
            <span className='font-extrabold'>Monmouth County</span> &
            Surrounding Areas
          </p>{' '}
          <Button asChild size={'lg'} className='max-w-lg'>
            <Link href='/#quoteForm'>
              {' '}
              <FileText />
              Get A Free Quote
            </Link>
          </Button>
          <LicenseCard />
        </div>
      </div>
    </section>
  );
}
