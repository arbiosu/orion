export default function About() {
  return (
    <section
      id='about'
      className='font-main flex flex-col items-center justify-center gap-4 px-4 tracking-tighter'
    >
      <h3 className='text-center text-4xl sm:text-6xl'>About Us</h3>
      <div className='flex max-w-2xl flex-col gap-4'>
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
    </section>
  );
}
