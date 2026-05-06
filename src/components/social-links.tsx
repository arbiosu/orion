'use client';

import type React from 'react';

import Link from 'next/link';
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
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
      name: 'Angi',
      url: 'https://www.angi.com/companylist/us/nj/howell/orion-remodeling-handyman-llc-reviews-1.htm',
      icon: <Home className='h-6 w-6' />,
      description: 'Verified home services provider',
      color: 'from-orange-400 via-orange-500 to-red-600',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/OrionRemodelingAndHandyman/',
      icon: <Facebook className='h-6 w-6' />,
      description: 'Follow us for updates and community engagement',
      color: 'from-blue-800 via-blue-600 to-blue-500',
    },
    {
      name: 'Yelp',
      url: 'https://www.yelp.com/biz/orion-remodeling-and-handyman-howell-township',
      icon: <Star className='h-6 w-6' />,
      description: 'Read reviews from our satisfied customers',
      color: 'from-red-500 via-red-600 to-rose-700',
    },
    {
      name: 'BuildZoom',
      url: 'https://www.buildzoom.com/contractor/orion-remodeling-handyman-llc',
      icon: <Award className='h-6 w-6' />,
      description: 'Check our licenses and credentials',
      color: 'from-yellow-400 via-amber-500 to-orange-600',
    },
    {
      name: 'HomeAdvisor',
      url: 'https://www.homeadvisor.com/rated.OrionRemodelingand.141850989.html',
      icon: <CheckCircle2 className='h-6 w-6' />,
      description: 'View our certifications and ratings',
      color: 'from-emerald-400 via-green-500 to-teal-600',
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

        <div className='grid w-full snap-x snap-mandatory auto-cols-max grid-flow-col gap-2 overflow-x-auto overflow-y-hidden p-0 lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-3 lg:gap-8 lg:overflow-visible'>
          {links.map((link) => (
            <Card
              key={link.name}
              className={`group relative max-w-3xs overflow-hidden rounded-4xl bg-linear-to-br ${link.color} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              {/* Grain overlay */}
              <div
                className='absolute inset-0 opacity-20 mix-blend-overlay'
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                }}
              />
              <Link href={link.url} target='_blank' rel='noopener noreferrer'>
                <div className='relative z-10 flex flex-col items-center gap-3 text-center'>
                  <div className='rounded-lg p-3 text-white shadow-sm transition-shadow group-hover:shadow-md'>
                    {link.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-white'>
                    {link.name}
                  </h3>
                  <p className='line-clamp-2 text-sm text-white'>
                    {link.description}
                  </p>
                  <div className='mt-2 text-xs font-semibold text-white'>
                    Visit →
                  </div>
                </div>
              </Link>
            </Card>
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
