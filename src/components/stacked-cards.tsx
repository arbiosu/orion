'use client';

import Image from 'next/image';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Heading from './heading';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconName, iconMap } from '@/lib/icons';

interface Content {
  id: number;
  title: string;
  subtitle: string;
  icon: IconName;
  bgImage?: string;
}

interface StackedCardsProps {
  cards: Content[];
  overline: string;
  heading: string;
}

export default function StackedCards({
  cards,
  overline,
  heading,
}: StackedCardsProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

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

    setActiveIndex((prev) => (prev !== closest ? closest : prev));
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.children[index] as HTMLElement;
    if (!card) return;

    const containerCenter = el.clientWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;

    const scrollLeft = cardCenter - containerCenter;

    el.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  };

  return (
    <div className='font-main w-full px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10 flex items-end justify-between'>
          <Heading overline={overline} headingText={heading} />
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
                scrollTo(Math.min(cards.length - 1, activeIndex + 1))
              }
              disabled={activeIndex === cards.length - 1}
              className='bg-background text-foreground rounded-full border-neutral-800 hover:bg-neutral-800 hover:text-white'
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollerRef}
          className='scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, i) => {
            const offset = i - activeIndex;
            const isActive = i === activeIndex;
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.id}
                className='shrink-0 snap-center transition-all duration-500 ease-out'
                style={{
                  transform: isActive
                    ? 'scale(1) translateY(0)'
                    : `scale(${0.92 - Math.min(Math.abs(offset) * 0.001, 0.16)}) translateY(${Math.min(Math.abs(offset) * 12, 32)}px)`,
                  opacity: isActive
                    ? 1
                    : 0.5 + Math.max(0, 0.3 - Math.abs(offset) * 0.1),
                  zIndex: cards.length - Math.abs(offset),
                }}
              >
                <Card className='h-[480px] w-[320px] overflow-hidden rounded-3xl border-0 p-0 shadow-2xl md:w-[400px]'>
                  <Image
                    src={card.bgImage ?? '/placeholder.svg'}
                    alt={card.title}
                    fill
                    className='rounded-3xl object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    unoptimized
                  />
                  <div className='absolute inset-0 rounded-3xl bg-black/40' />

                  <div className={`relative h-full w-full`}>
                    <CardContent className='relative flex h-full flex-col justify-between p-8 text-white'>
                      <div className='flex items-start justify-between'>
                        <span className='font-mono text-sm opacity-0'>
                          {card.id}
                        </span>
                      </div>
                      <div>
                        <h3 className='mb-2 text-5xl tracking-tight md:text-6xl'>
                          {card.title}
                        </h3>
                        <p className='text-lg opacity-90'>{card.subtitle}</p>
                        <Icon className='mt-4 h-10 w-10 text-white' />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <div className='mt-6 flex justify-center gap-2'>
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-8 bg-white'
                : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
            }`}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
