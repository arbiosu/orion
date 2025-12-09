'use client';

import type React from 'react';

import Link from 'next/link';
import { Facebook, Star, Home, Award, CheckCircle2 } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

export default function SocialLinks() {
  const links: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/OrionRemodelingAndHandyman/',
      icon: <Facebook className='h-6 w-6' />,
      description: 'Follow us for updates and community engagement',
      color: 'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200',
    },
    {
      name: 'Yelp',
      url: 'https://www.yelp.com/biz/orion-remodeling-and-handyman-howell-township',
      icon: <Star className='h-6 w-6 fill-red-500 text-red-500' />,
      description: 'Read reviews from our satisfied customers',
      color: 'from-red-50 to-red-100 hover:from-red-100 hover:to-red-200',
    },
    {
      name: 'Angi',
      url: 'https://www.angi.com/companylist/us/nj/howell/orion-remodeling-handyman-llc-reviews-1.htm',
      icon: <Home className='h-6 w-6' />,
      description: 'Verified home services provider',
      color:
        'from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200',
    },
    {
      name: 'BuildZoom',
      url: 'https://www.buildzoom.com/contractor/orion-remodeling-handyman-llc',
      icon: <Award className='h-6 w-6' />,
      description: 'Check our licenses and credentials',
      color:
        'from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200',
    },
    {
      name: 'HomeAdvisor',
      url: 'https://www.homeadvisor.com/rated.OrionRemodelingand.141850989.html',
      icon: <CheckCircle2 className='h-6 w-6' />,
      description: 'View our certifications and ratings',
      color:
        'from-green-50 to-green-100 hover:from-green-100 hover:to-green-200',
    },
  ];

  return (
    <section className='font-main w-full px-4 py-16'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-12 text-center'>
          <h2 className='mb-3 text-4xl tracking-tighter sm:text-6xl'>
            Find Us Online
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-slate-600 dark:text-white'>
            Connect with us on the platforms you trust. Check our reviews,
            credentials, and ratings across verified construction industry
            networks.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className={`group relative overflow-hidden rounded-lg bg-linear-to-br ${link.color} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className='relative z-10 flex flex-col items-center gap-3 text-center'>
                <div className='rounded-lg p-3 text-black shadow-sm transition-shadow group-hover:shadow-md'>
                  {link.icon}
                </div>
                <h3 className='text-lg font-semibold text-slate-900'>
                  {link.name}
                </h3>
                <p className='line-clamp-2 text-sm text-slate-700'>
                  {link.description}
                </p>
                <div className='mt-2 text-xs font-semibold text-slate-600 transition-colors group-hover:text-slate-900'>
                  Visit →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='mt-12 border-t border-slate-200 pt-8 text-center'>
          <p className='text-sm'>
            Trusted by homeowners in Howell, NJ and surrounding areas. We
            maintain certifications and positive ratings on all major platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
