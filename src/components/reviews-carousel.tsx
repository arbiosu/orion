import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';

interface ReviewProps {
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

const reviews: ReviewProps[] = [
  {
    name: 'Ashley Viera',
    text: 'This company has great attention to detail, the work ethic is amazing and so is the communication. Will definitely recommend trying this service if ur looking to renovate or remodel, great quality service for a fair price !',
    rating: 5,
    avatar: 'AV',
  },
  {
    name: 'Iryna Stupak',
    text: "It’s amazing how you can get many services done by this business. We had an excellent work done in our house! Years ago, my family had to call other people to get things done but now, we are gonna be calling these guys only!!! Won't stop recommending!",
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

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 animate-pulse fill-current ${
          i < rating ? 'text-amber-400' : 'text-gray-300'
        }`}
      />
    ));
  };
  return (
    <section
      id='testimonials'
      className='font-main flex flex-col items-center justify-center gap-4 px-10 tracking-tighter'
    >
      <h3 className='text-center text-4xl sm:text-6xl'>Client Testimonials</h3>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full max-w-4xl'
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card className='h-[400px]'>
                  <CardHeader className='flex items-center'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-lg font-semibold text-white'>
                      {review.avatar}
                    </div>
                    {review.name}
                    {renderStars(review.rating)}
                  </CardHeader>
                  <CardContent className='flex aspect-video items-center justify-center p-6'>
                    {review.text}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Link
        href='https://www.google.com/search?sca_esv=0cb097f5cf89beeb&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8u-LBA_WInLxqhva4gi2ZUyJAX2ulAe9qnDdU4dPrTlYmCjClsJBH69TKxrdZGPUA73-qqjYoiPFOeHCCQh0KWZBXtwWguo6tqjT6FCJ8hctPyvoQ%3D%3D&q=Orion+Remodeling+%26+Handyman+Reviews&sa=X&ved=2ahUKEwj5hMLz4duQAxXOKlkFHfNZMTcQ0bkNegQIHxAD&biw=1710&bih=894&dpr=2'
        target='_blank'
      >
        <div className='flex items-center justify-center'>
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
              <div className='h-4 w-px bg-gray-300'></div>
              <span className='text-xs text-gray-500'>Verified reviews</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
