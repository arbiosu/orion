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
    title: 'Luxury Vinyl Plank (LVP)',
    detail:
      'Waterproof, durable, and ideal for kitchens and bathrooms. We carry and install major brands with full prep and acclimation.',
    className: 'border-black shadow-none',
  },
  {
    title: 'Hardwood Flooring',
    className: 'border-black shadow-none',
    detail:
      'Solid and engineered hardwood installation. Sand, stain, and finish services also available for existing floors.',
  },
  {
    title: 'Tile Flooring',
    className: 'border-black shadow-none',

    detail:
      'Ceramic and porcelain tile for bathrooms, kitchens, and entryways. Including floor leveling and waterproof membrane installation.',
  },
  {
    title: 'Subfloor Prep & Removal',
    className: 'border-black shadow-none',
    detail:
      'Old flooring removal, subfloor repair, and leveling before any new installation — done right so the finished floor lasts.',
  },
];

const processCards = [
  {
    title: 'Free Estimate',
    detail:
      'We measure your space and walk you through material options and pricing — no pressure.',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
  },
  {
    title: 'Material Selection',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      'We help you pick the right product for your space, lifestyle, and budget.',
  },
  {
    title: 'Prep & Removal',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',
    detail:
      'Existing flooring removed, subfloor inspected and leveled as needed.',
  },
  {
    title: 'Installation',
    className:
      'border-orion border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 shadow-none',

    detail:
      'Clean, precise install with proper expansion gaps, transitions, and trim.',
  },
  {
    title: 'Final Walkthrough',
    className:
      'border-l-0 border-t-0 border-b-0 rounded-none bg-background border-r-4 border-orion shadow-none',

    detail: 'We review the finished job with you before we pack up.',
  },
];

export default function FlooringPage() {
  const sub =
    'LVP, hardwood, and tile flooring installed by a licensed NJ Home Improvement Contractor. Clean work, tight seams, done right the first time.';
  return (
    <main className='flex flex-col gap-16 py-20'>
      <Hero service='Flooring' highlight='Installation' subtitle={sub} />
      <BadgeList badges={badges} />

      <ServiceDetails
        overline='what we install'
        headingText='Flooring For Every Room'
        cards={serviceDetailCards}
      />
      <ServiceArea />
      <ServiceDetails
        overline='how it works'
        headingText='From Estimate to Install'
        cards={processCards}
      />
      <Closing heading='Ready to upgrade your floors?' />
    </main>
  );
}
