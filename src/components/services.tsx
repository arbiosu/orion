import Image from 'next/image';
import { Card } from './ui/card';
import {
  Zap,
  Hammer,
  Wrench,
  Paintbrush,
  Shovel,
  HardHat,
  type LucideIcon,
} from 'lucide-react';

interface ServiceProps {
  type: string;
  img: string;
  Icon: LucideIcon;
}

const services: ServiceProps[] = [
  {
    type: 'Carpentry',
    img: '/carpentry.jpeg',
    Icon: Hammer,
  },
  {
    type: 'Plumbing',
    img: '/plumbing.jpeg',
    Icon: Wrench,
  },
  {
    type: 'Electrical',
    img: '/electrical.jpeg',
    Icon: Zap,
  },
  {
    type: 'Painting',
    img: '/painting.jpeg',
    Icon: Paintbrush,
  },
  {
    type: 'Maintenance',
    img: '/maintenance.jpeg',
    Icon: Shovel,
  },
  {
    type: 'And More!',
    img: '/construction.jpeg',
    Icon: HardHat,
  },
];

export default function Services() {
  return (
    <section className='flex flex-col gap-4 lg:px-20'>
      <h3 className='font-main text-center text-4xl tracking-tighter sm:text-6xl'>
        Our Services
      </h3>
      <div className='grid w-full snap-x snap-mandatory auto-cols-max grid-flow-col overflow-x-auto overflow-y-hidden p-0 lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:p-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='h-[400px] w-[80vw] max-w-[600px] snap-start pl-8 lg:h-auto lg:w-full lg:max-w-none lg:pl-0'
          >
            <ServiceCard
              type={service.type}
              img={service.img}
              Icon={service.Icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServiceCard({ type, img, Icon }: ServiceProps) {
  return (
    <Card className='relative flex h-[400px] w-full flex-col overflow-hidden rounded-4xl shadow-lg'>
      <Image
        src={img}
        alt={type}
        fill
        className='object-cover'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        unoptimized
      />

      <div className='absolute inset-0 bg-black/60' />

      <div className='relative flex flex-1 flex-col items-center justify-center p-6 text-center'>
        <h3 className='font-main text-4xl font-medium tracking-tighter text-white'>
          {type}
        </h3>
        <Icon className='mt-4 h-20 w-20 text-white' />
      </div>
    </Card>
  );
}
