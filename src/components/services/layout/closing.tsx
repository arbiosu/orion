import ServiceButtons from '../buttons';

interface ClosingProps {
  heading: string;
}

export default function Closing({ heading }: ClosingProps) {
  return (
    <section className='font-main mx-auto flex min-h-screen max-w-4xl flex-col justify-center'>
      <h6 className='text-center text-6xl font-bold uppercase sm:text-7xl lg:text-8xl'>
        {heading}
      </h6>
      <p className='mb-4 text-center text-xl sm:text-2xl lg:text-4xl'>
        Get a free, no-obligation estimate from a licensed NJ contractor
      </p>
      <p className='text-center text-xl font-bold sm:text-2xl lg:text-4xl'>
        Orion Remodeling & Handyman
      </p>
      <div className='flex justify-center py-6'>
        <ServiceButtons />
      </div>
    </section>
  );
}
