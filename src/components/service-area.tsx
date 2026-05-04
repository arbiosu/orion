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
    <section className='font-main w-full px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
        <div>
          <p className='mb-2 text-xs tracking-tight text-neutral-500 uppercase'>
            Our Service Area
          </p>
          <h6 className='mb-4 text-4xl tracking-tighter md:text-6xl'>
            Our Service Area
          </h6>
          <p>Counties...</p>
        </div>
        <div className='flex justify-center'>
          <div className='aspect-4/3 w-full max-w-2xl'>
            <div className='relative h-full w-full'>
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
