import Hero from '@/components/hero';
import SocialLinks from '@/components/social-links';
import ServiceArea from '@/components/service-area';
import About from '@/components/about';
import Reviews from '@/components/reviews';
import BentoGridGallery from '@/components/bento-image-grid';
import QuoteForm from '@/components/quote-form';
import StackedCards from '@/components/stacked-cards';

import { images, services } from '@/lib/constants';

export default function Home() {
  return (
    <main className='flex flex-col gap-12'>
      <Hero />
      <SocialLinks />
      <StackedCards
        cards={services}
        overline='services'
        heading='Our Services'
      />
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
