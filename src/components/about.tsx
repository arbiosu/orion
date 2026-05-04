export default function About() {
  return (
    <section className='font-main w-full px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
        <div>
          <p className='mb-2 text-xs tracking-tight text-neutral-500 uppercase'>
            about orion remodeling
          </p>
          <h6 className='mb-4 text-4xl tracking-tighter md:text-6xl'>
            About Us
          </h6>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-xl'>
            We transform homes into havens, specializing in both{' '}
            <strong>handyman services and remodeling projects.</strong>
          </p>
          <p className='text-xl'>
            <strong>A family owned and operated business,</strong> we take pride
            in our{' '}
            <span className='font-bold'>meticulous attention to detail,</span>{' '}
            ensuring your home reflects your unique style and functionality.
          </p>
          <p className='text-xl'>
            From minor repairs to complete renovations,{' '}
            <strong>our team of experienced and reliable professionals</strong>{' '}
            will work closely with you to bring your vision to life.
          </p>
          <p className='text-xl'>
            Let us help you create your <strong>dream home</strong>, one project
            at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
