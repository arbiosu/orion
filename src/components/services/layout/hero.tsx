import ServiceButtons from '../buttons';

interface ServiceHeroProps {
  service: string;
  highlight: string;
  subtitle: string;
}

export default function Hero({
  service,
  highlight,
  subtitle,
}: ServiceHeroProps) {
  return (
    <section className='container mx-auto max-w-6xl p-4'>
      <h1 className='text-6xl font-bold tracking-tight uppercase font-stretch-ultra-condensed sm:text-7xl lg:text-8xl'>
        {service}
        <br />
        <span className='text-orion'>{highlight}</span>
        <br />
        Howell, NJ
      </h1>
      <p className='font-main mb-8 max-w-xl text-lg leading-relaxed'>
        {subtitle}
      </p>
      <ServiceButtons />
    </section>
  );
}
