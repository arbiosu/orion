'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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

interface StackedReviewCardsProps {
  overline?: string;
  heading?: string;
}

export default function StackedReviewCards({
  overline = 'Reviews',
  heading = 'Client Testimonials',
}: StackedReviewCardsProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const scrollMid = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      children.forEach((child, i) => {
        const cardMid = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(scrollMid - cardMid);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
  };

  return (
    <div className='font-main w-full px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
        {/* Header row */}
        <div className='mb-10 flex items-end justify-between'>
          <div>
            <p className='mb-2 text-xs tracking-tight text-neutral-500 uppercase'>
              {overline}
            </p>
            <h6 className='text-4xl tracking-tighter md:text-6xl'>{heading}</h6>
          </div>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='icon'
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className='bg-background text-foreground rounded-full border-neutral-800 hover:bg-neutral-800 hover:text-white'
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              onClick={() =>
                scrollTo(Math.min(reviews.length - 1, activeIndex + 1))
              }
              disabled={activeIndex === reviews.length - 1}
              className='bg-background text-foreground rounded-full border-neutral-800 hover:bg-neutral-800 hover:text-white'
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollerRef}
          className='scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, i) => {
            const offset = i - activeIndex;
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                className='shrink-0 snap-center transition-all duration-500 ease-out'
                style={{
                  transform: isActive
                    ? 'scale(1) translateY(0)'
                    : `scale(${0.92 - Math.min(Math.abs(offset) * 0.04, 0.16)}) translateY(${Math.min(Math.abs(offset) * 12, 32)}px)`,
                  opacity: isActive
                    ? 1
                    : 0.5 + Math.max(0, 0.3 - Math.abs(offset) * 0.1),
                  zIndex: reviews.length - Math.abs(offset),
                }}
              >
                <Card className='h-[400px] w-[320px] overflow-hidden border border-neutral-200 shadow-2xl md:w-[400px]'>
                  <CardContent className='flex h-full flex-col justify-between p-8'>
                    {/* Top: avatar + name + stars */}
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
                    <p className='text-sm leading-relaxed'>
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

      {/* Dot indicators */}
      <div className='mt-6 flex justify-center gap-2'>
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-8 bg-neutral-800'
                : 'w-1.5 bg-neutral-300 hover:bg-neutral-500'
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
