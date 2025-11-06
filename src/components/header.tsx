'use client';

import { Button } from './ui/button';
import { FileText } from 'lucide-react';

export default function Header() {
  return (
    <header className='font-main sticky top-0 right-0 left-0 z-50 bg-black p-2 px-2 transition-all duration-300 will-change-transform'>
      <div className='flex items-center justify-end'>
        <Button className='cursor-pointer'>
          {' '}
          <FileText /> Get A Free Quote
        </Button>
      </div>
    </header>
  );
}
