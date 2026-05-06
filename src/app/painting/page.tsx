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
    title: 'Interior Coverage',
    detail:
      'Walls & ceilings — all rooms, trim, baseboards & crown molding, doors & windows, cabinets (brush + spray finish), accent walls & feature finishes, drywall patching before paint, and full furniture protection & cleanup.',
    className: 'border-black shadow-none',
  },
  {
    title: 'Exterior Coverage',
    className: 'border-black shadow-none',
    detail:
      'Siding — wood, vinyl, stucco, HardiePlank, trim, fascia & soffits, decks, fences & porches, garage doors, pressure wash & surface prep, caulking & minor repairs included, and premium exterior-grade materials.',
  },
];

const processCards = [
  {
    title: 'Free Estimate',
    detail:
      'We assess the surfaces, identify any repairs needed, and recommend the right products.',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
  },
  {
    title: 'Surface Prep',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      'Holes patched, surfaces sanded, caulking applied, tape and plastic protection set up properly.',
  },
  {
    title: 'Prime',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      'Primer applied where needed — new drywall, stains, color changes, and raw wood always get primed.',
  },
  {
    title: 'Paint',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',

    detail:
      "Two coats minimum. We use quality products and don't thin paint to make it go further.",
  },
  {
    title: 'Clean & Inspect',
    className:
      'border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 border-orion shadow-none',

    detail:
      'Tape pulled, drips touched up, floors cleaned, and a final walkthrough with you.',
  },
];

export default function PaintingPage() {
  const sub =
    'Professional painting for walls, ceilings, trim, and exteriors throughout Monmouth County, NJ. Full prep work included — no shortcuts, no skipped steps.';
  return (
    <main className='flex flex-col gap-16 py-20'>
      <Hero service='Interior & Exterior' highlight='Painting' subtitle={sub} />
      <BadgeList badges={badges} />

      <ServiceDetails
        overline='Our Painting Services'
        headingText='Interior & Exterior Coverage'
        cards={serviceDetailCards}
      />
      <ServiceArea />
      <ServiceDetails
        overline='Our Process'
        headingText='Prep First, Always'
        cards={processCards}
      />
      <Closing heading="Let's talk about your painting project" />
    </main>
  );
}
