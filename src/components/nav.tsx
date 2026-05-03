// components/navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ModeToggle } from './theme-toggle';

const navLinks = [
  { href: '/flooring', label: 'Flooring' },
  { href: '/painting', label: 'Painting' },
  { href: '/carpentry', label: 'Carpentry' },
  { href: '/bathroom', label: 'Bathroom' },
  { href: '/kitchen', label: 'Kitchen' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className='font-main bg-background fixed z-50 w-full border-b'>
      <div className='container mx-auto flex h-16 items-center justify-between'>
        <Link href='/' className='px-1 text-xl font-bold tracking-tight'>
          Orion Remodeling
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden items-center justify-between gap-6 md:flex'>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'hover:text-foreground/80 text-sm font-medium transition-colors',
                pathname === href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden items-center gap-2 md:flex'>
          <Button asChild size={'lg'} className='max-w-lg'>
            <Link href='/#quoteForm'>
              {' '}
              <FileText />
              Get A Free Quote
            </Link>
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='font-main w-[280px] sm:w-[350px]'
          >
            <SheetHeader>
              {' '}
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className='flex flex-col gap-6 p-2 pt-6'>
              <Link
                href='/'
                className='text-xl font-bold'
                onClick={() => setOpen(false)}
              >
                Orion
              </Link>
              <nav className='flex flex-col gap-4'>
                {navLinks.map(({ href, label }) => (
                  <SheetClose asChild key={href}>
                    <Link
                      href={href}
                      className={cn(
                        'hover:text-foreground text-base font-medium transition-colors',
                        pathname === href
                          ? 'text-foreground'
                          : 'text-foreground/60'
                      )}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className='mt-4 flex flex-col gap-2'>
                <Button asChild size={'lg'} className='max-w-lg'>
                  <Link href='/#quoteForm'>
                    {' '}
                    <FileText />
                    Get A Free Quote
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
