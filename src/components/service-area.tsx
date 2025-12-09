export function ServiceAreaMap() {
  return (
    <iframe
      src='https://www.google.com/maps/d/embed?mid=1QiQ0s28Rvs8RXbotcjTVmr3ATUkQnkg&ehbc=2E312F'
      style={{ border: 0 }}
      allowFullScreen
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      className='h-full w-full rounded-2xl'
    ></iframe>
  );
}

export default function ServiceArea() {
  return (
    <section className='font-main flex flex-col items-center pt-8'>
      <div className='aspect-4/3 w-full max-w-2xl'>
        <ServiceAreaMap />
      </div>
    </section>
  );
}
