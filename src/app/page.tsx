import Hero from '@/components/hero';
import SocialLinks from '@/components/social-links';
import Services from '@/components/services';
import ServiceArea from '@/components/service-area';
import About from '@/components/about';
import Reviews from '@/components/reviews-carousel';
import BentoGridGallery from '@/components/bento-image-grid';
import QuoteForm from '@/components/quote-form';

import { images } from '@/lib/constants';

export default function Home() {
  return (
    <main className='flex flex-col gap-12'>
      <Hero />
      <SocialLinks />
      <Services />
      <div className='flex-col items-center justify-center'>
        <About />
        <ServiceArea />
      </div>
      <Reviews />
      <QuoteForm />
      <BentoGridGallery images={images} />
    </main>
  );
}
