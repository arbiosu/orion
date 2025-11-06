import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Reviews from '@/components/reviews-carousel';
import BentoGridGallery from '@/components/bento-image-grid';

import { images } from '@/lib/constants';

export default function Home() {
  return (
    <main className='flex flex-col gap-12'>
      <Hero />
      <Services />
      <About />
      <Reviews />
      <BentoGridGallery images={images} />
    </main>
  );
}
