import Hero from '@/components/services/layout/hero';
import ServiceDetails from '@/components/services/layout/service-details';
import Closing from '@/components/services/layout/closing';
import BadgeList from '@/components/services/badges';
import ServiceArea from '@/components/service-area';

const badges = [
  {
    text: 'Fully Insured',
    className: 'bg-secondary text-primary',
  },
  {
    text: 'NJ HIC Licensed #13VH13063800',
    className: 'bg-orion',
  },
  {
    text: 'Serving Monmouth, Ocean, and Surrounding Counties',
    className: '',
  },
  {
    text: 'Free Estimates',
    className: 'bg-amber-600',
  },
];

const serviceDetailCards = [
  {
    title: 'Trim & Baseboards',
    detail:
      'Baseboard installation, door and window casing, and all interior trim work. Tight miters, properly nailed and filled.',
    className: 'border-black shadow-none',
  },
  {
    title: 'Crown Molding',
    className: 'border-black shadow-none',
    detail:
      'Crown molding installation in living rooms, bedrooms, and kitchens. Compound miter cuts done right, no gaps at corners.',
  },
  {
    title: 'Wainscoting & Paneling',
    className: 'border-black shadow-none',
    detail:
      'Board and batten, shiplap, raised panel wainscoting, and accent wall paneling for dining rooms, entryways, and hallways.',
  },
  {
    title: 'Staircase Work',
    className: 'border-black shadow-none',
    detail:
      'Tread replacement, railing installation, balusters, and skirt board installation. New builds and refinishing of existing stairs.',
  },
  {
    title: 'Built-Ins & Shelving',
    className: 'border-black shadow-none',
    detail:
      'Built-in bookshelves, mudroom cubbies, closet systems, and storage solutions custom fit to your space.',
  },
  {
    title: 'Door & Window Work',
    className: 'border-black shadow-none',
    detail:
      'nterior door installation, prehung door hanging, pocket door installs, and window trim from rough to finished.',
  },
];

const processCards = [
  {
    title: 'Site Visit',
    detail:
      'We walk the space, take measurements, and discuss the scope and material options with you.',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
  },
  {
    title: 'Material Sourcing',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      "We source the right profiles and species for the project, or work with what you've already purchased.",
  },
  {
    title: 'Installation',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      'Precise cuts, secure fastening, and proper coping at inside corners — no shortcuts.',
  },
  {
    title: 'Fill & Sand',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',

    detail:
      'All nail holes filled, joints caulked, and surfaces sanded smooth and ready for paint or stain.',
  },
];

export default function CarpentryPage() {
  const sub =
    'Trim, molding, wainscoting, built-ins, and staircase work — the details that make a renovation look complete. Installed by a licensed NJ contractor.';
  return (
    <main className='flex flex-col gap-16 py-20'>
      <Hero service='Finish' highlight='Carpentry' subtitle={sub} />
      <BadgeList badges={badges} />

      <ServiceDetails
        overline='what we do'
        headingText='The Details That Finish a Room'
        cards={serviceDetailCards}
      />
      <ServiceArea />
      <ServiceDetails
        overline='how it works'
        headingText='Measure Twice, Cut Once'
        cards={processCards}
      />
      <Closing heading='Ready to finish your renovation?' />
    </main>
  );
}
