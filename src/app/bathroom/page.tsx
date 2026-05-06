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
    title: 'Demolition',
    detail:
      'Safe removal of existing tile, fixtures, vanities, and flooring — including disposal.',
    className: 'border-black shadow-none',
  },
  {
    title: 'Tile & Shower Work',
    className: 'border-black shadow-none',
    detail:
      'Wall tile, shower surrounds, tub decks, and floor tile. Waterproofing membrane installed on all wet areas.',
  },
  {
    title: 'Flooring',
    className: 'border-black shadow-none',
    detail:
      'Porcelain or ceramic tile floors, LVP, or heated floor systems for bathrooms of any size.',
  },
  {
    title: 'Vanity & Fixture Installation',
    className: 'border-black shadow-none',
    detail:
      'Vanity installation, mirror and medicine cabinet mounting, and all associated carpentry and finish work.',
  },
  {
    title: 'Painting & Trim',
    className: 'border-black shadow-none',
    detail:
      'Bathroom painting, baseboard and casing installation, and all finish carpentry to complete the space.',
  },
  {
    title: 'Full Gut Renovation',
    className: 'border-black shadow-none',
    detail:
      'Complete bathroom remodels from demo to finished product — coordinated and managed by Orion.',
  },
];

const processCards = [
  {
    title: 'Free Estimate',
    detail:
      'We walk your bathroom, discuss the scope, and provide a detailed written estimate.',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
  },
  {
    title: 'Demo & Prep',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      'Existing materials removed, subfloor and walls inspected and prepped for new work.',
  },
  {
    title: 'Waterproofing',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      'Wet areas properly waterproofed before any tile is set — never skipped.',
  },
  {
    title: 'Tile & Flooring',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',

    detail:
      'Tile set, grouted, and sealed. Flooring installed and transitioned properly.',
  },
  {
    title: 'Fixtures & Finish',
    className:
      'border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 border-orion shadow-none',

    detail:
      'Vanity, trim, paint, and all finish work completed. Final walkthrough with you before we leave.',
  },
];

export default function BathroomPage() {
  const sub =
    'Full bathroom remodels and targeted upgrades — tile, vanities, flooring, showers, and complete gut renovations. Licensed NJ contractor, fully insured.';
  return (
    <main className='flex flex-col gap-16 py-20'>
      <Hero service='Bathroom' highlight='Renovation' subtitle={sub} />
      <BadgeList badges={badges} />

      <ServiceDetails
        overline='Scope of work'
        headingText='Anything the job needs'
        cards={serviceDetailCards}
      />
      <ServiceArea />
      <ServiceDetails
        overline='how it works'
        headingText='Start to Finish'
        cards={processCards}
      />
      <Closing heading='Ready to renovate your dream bathroom?' />
    </main>
  );
}
