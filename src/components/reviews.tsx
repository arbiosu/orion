'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Heading from './heading';

interface Review {
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: 'Ashley Viera',
    text: 'This company has great attention to detail, the work ethic is amazing and so is the communication. Will definitely recommend trying this service if ur looking to renovate or remodel, great quality service for a fair price!',
    rating: 5,
    avatar: 'AV',
  },
  {
    name: 'Iryna Stupak',
    text: "It's amazing how you can get many services done by this business. We had an excellent work done in our house! Years ago, my family had to call other people to get things done but now, we are gonna be calling these guys only!!! Won't stop recommending!",
    rating: 5,
    avatar: 'IS',
  },
  {
    name: 'Eric Freeman',
    text: 'Gherson did a fantastic job adding some rooms and a bathroom in my basement. Very fast work, very good communication. Highly recommended.',
    rating: 5,
    avatar: 'EF',
  },
];

export default function ReviewCards({}) {
  return (
    <div className='font-main w-full px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
        <Heading
          overline='reviews'
          headingText='Client Testimonials'
          className='mb-10'
        />
        <div className='grid w-full snap-x snap-mandatory auto-cols-max grid-flow-col gap-2 overflow-x-auto overflow-y-hidden p-0 lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:p-8'>
          {reviews.map((review, i) => {
            return (
              <div
                key={i}
                className={i == 1 ? 'lg:-translate-y-6 lg:scale-105' : ''}
              >
                <Card className='relative flex h-[400px] w-full flex-col overflow-hidden rounded-4xl shadow-lg transition-transform duration-300'>
                  <CardContent className='flex h-full flex-col justify-between p-8'>
                    <div className='flex flex-col gap-3'>
                      <div className='flex items-center gap-3'>
                        <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 text-lg font-semibold text-white'>
                          {review.avatar}
                        </div>
                        <span className='text-lg font-medium tracking-tight'>
                          {review.name}
                        </span>
                      </div>
                      <div className='flex gap-0.5'>
                        {Array.from({ length: 5 }, (_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 fill-current ${
                              j < review.rating
                                ? 'text-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom: review text */}
                    <p className='max-w-xs text-sm leading-relaxed'>
                      {`"${review.text}"`}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Google Reviews link */}
        <div className='mt-6 flex justify-center'>
          <Link
            href='https://www.google.com/search?q=Orion+Remodeling+%26+Handyman+Reviews'
            target='_blank'
          >
            <div className='rounded-lg border border-gray-200 bg-gray-50 px-4 py-2'>
              <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1'>
                  <div className='flex h-4 w-4 items-center justify-center rounded-sm bg-blue-500'>
                    <span className='text-xs font-bold text-white'>G</span>
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Google Reviews
                  </span>
                </div>
                <div className='h-4 w-px bg-gray-300' />
                <span className='text-xs text-gray-500'>Verified reviews</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
