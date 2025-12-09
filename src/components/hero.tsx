import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { FileText } from 'lucide-react';
import LicenseCard from './license-card';

import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className='font-main relative flex items-center justify-center overflow-hidden text-center tracking-tighter'>
      <div className='relative z-10 flex flex-col items-center justify-center gap-8'>
        <div className='flex max-w-2xl flex-col items-center justify-center gap-4 px-4'>
          <div className='relative z-50'>
            <Image
              src='/orion-logo-no-bg.png'
              width={400}
              height={100}
              alt='Orion Handyman and Remodeling Logo'
            />
          </div>
          <h1 className='text-4xl font-bold drop-shadow-lg sm:text-6xl'>
            Orion Remodeling & Handyman
          </h1>
          <h6 className='text-lg sm:text-2xl'>
            Expert Remodeling & Handyman Services
          </h6>
          <h6 className='text-base sm:text-xl'>
            Proudly Serving{' '}
            <span className='font-extrabold'>Howell Township, New Jersey</span>{' '}
            & Surrounding Areas
          </h6>
          <div className='flex gap-4'>
            <Button asChild size={'lg'} className='max-w-lg'>
              <Link href='/#quoteForm'>
                {' '}
                <FileText />
                Get A Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size={'lg'}
              className='max-w-lg bg-blue-700 text-white'
            >
              <Link
                href='tel:+17324927646'
                className='flex items-center gap-3 text-sm transition-colors'
              >
                <Phone size={18} />
                <span>(732) 492-7646</span>
              </Link>
            </Button>
          </div>

          <LicenseCard />
        </div>
      </div>
    </section>
  );
}
