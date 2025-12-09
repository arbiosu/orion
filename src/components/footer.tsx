import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const links = [
  {
    label: 'About Us',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
];

export default function Footer() {
  return (
    <footer className='font-main'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mb-2 border-t' />
        <div className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='flex flex-col gap-4'>
            <div>
              <h3 className='mb-2 text-2xl font-bold'>
                Orion Remodeling & Handyman
              </h3>
              <p className='text-sm leading-relaxed'>
                Transforming homes with quality craftsmanship and exceptional
                service since 2024.
              </p>
            </div>
          </div>

          <div>
            <h4 className='mb-4 text-lg font-semibold'>Company</h4>
            <ul className='space-y-3'>
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className='text-sm transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='mb-4 text-lg font-semibold'>Get In Touch</h4>
            <div className='space-y-4'>
              <Link
                href='tel:+17324927646'
                className='flex items-center gap-3 text-sm transition-colors'
              >
                <Phone size={18} className='shrink-0' />
                <span>+1 (732) 492-7646</span>
              </Link>
              <Link
                href='mailto:orionremodeling2024@gmail.com'
                className='flex items-center gap-3 text-sm transition-colors'
              >
                <Mail size={18} className='shrink-0' />
                <span>orionremodeling2024@gmail.com</span>
              </Link>
              <div className='flex items-start gap-3 text-sm'>
                <MapPin size={18} className='mt-0.5 shrink-0' />
                <span>Howell, NJ and Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-4 pt-8 text-sm md:flex-row'>
          <p>
            &copy; {new Date().getFullYear()} ORION REMODELING & HANDYMAN LLC.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
