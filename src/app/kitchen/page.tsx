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
    title: 'Kitchen Flooring',
    detail:
      'LVP, hardwood, and tile installation. Removal of existing flooring and subfloor prep included.',
    className: 'border-black shadow-none',
  },
  {
    title: 'Cabinet Painting',
    className: 'border-black shadow-none',
    detail:
      'Refinish existing cabinets with a fresh painted finish — a cost-effective alternative to full replacement.',
  },
  {
    title: 'Backsplash Tile',
    className: 'border-black shadow-none',
    detail:
      'Full backsplash tile installation from layout to grouting and sealing. Subway, mosaic, large-format tile.',
  },
  {
    title: 'Trim & Carpentry',
    className: 'border-black shadow-none',
    detail:
      'Crown molding, toe kick installation, open shelving, and all finish carpentry to complete the space.',
  },
  {
    title: 'Painting',
    className: 'border-black shadow-none',
    detail:
      'Kitchen walls, ceilings, and trim — full prep, priming, and two-coat finish in any color.',
  },
  {
    title: 'Demolition',
    className: 'border-black shadow-none',
    detail:
      'Safe demo of existing kitchens — cabinets, flooring, soffits, and drywall — with full debris removal.',
  },
];

const processCards = [
  {
    title: 'Free Estimate',
    detail:
      'We walk the kitchen, assess the scope, and give you a clear written estimate — no surprises.',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
  },
  {
    title: 'Demo & Prep',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      'Existing materials removed cleanly. Subfloor, walls, and surfaces inspected and prepped.',
  },
  {
    title: 'Core Work',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      'Flooring, tile, and any structural finish work completed in sequence.',
  },
  {
    title: 'Paint & Trim',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',

    detail:
      'Painting, trim installation, and all finish carpentry completed last.',
  },
  {
    title: 'Final Walkthrough',
    className:
      'border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 border-orion shadow-none',

    detail:
      'We go through the finished kitchen with you before we pack up and leave the site clean.',
  },
];

export default function KitchenPage() {
  const sub =
    'From flooring and paint to full gut renovations — we handle the finish work that transforms a kitchen. Licensed NJ contractor, serving Monmouth County and beyond.';
  return (
    <main className='flex flex-col gap-16 py-20'>
      <Hero service='Kitchen' highlight='Renovation' subtitle={sub} />
      <BadgeList badges={badges} />

      <ServiceDetails
        overline='what we handle'
        headingText='Kitchen Work - Done Right'
        cards={serviceDetailCards}
      />
      <ServiceArea />
      <ServiceDetails
        overline='how it works'
        headingText='From Estimate to Done'
        cards={processCards}
      />
      <Closing heading='Ready to start your dream kitchen?' />
    </main>
  );
}
