interface HeadingProps {
  overline?: string;
  headingText?: string;
  className?: string;
}

export default function Heading({
  overline,
  headingText,
  className,
}: HeadingProps) {
  return (
    <div className={className}>
      <p className='text-xs tracking-tight text-neutral-500 uppercase'>
        {overline}
      </p>
      <h6 className='mb-4 text-4xl tracking-tighter md:text-6xl'>
        {headingText}
      </h6>
    </div>
  );
}
