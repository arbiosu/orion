import Image from 'next/image';

interface Image {
  src: string;
  alt: string;
  title: string;
  className: string;
}

interface BentoProps {
  images: Image[];
}

export default function BentoGridGallery({ images }: BentoProps) {
  return (
    <section className='font-main container mx-auto max-w-full px-4 tracking-tighter'>
      <h3 className='font-main mb-4 text-center text-4xl sm:text-6xl'>
        Our Projects
      </h3>
      <div className='grid grid-cols-1 items-center gap-6 md:grid-cols-3 lg:gap-8'>
        {images.map((image, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 shadow-lg transition-all duration-500 ease-out hover:shadow-2xl ${image.className}`}
          >
            <div className={`relative ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                unoptimized
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
            </div>
            <div className='absolute right-0 bottom-0 left-0 translate-y-6 transform p-6 transition-transform duration-300 ease-out group-hover:translate-y-0'>
              <h3 className='mb-2 text-lg font-bold text-white opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100'>
                {image.title}
              </h3>
            </div>
            <div className='absolute right-0 bottom-0 left-0 translate-y-6 transform p-6 transition-transform duration-300 ease-out group-hover:translate-y-0'>
              <h3 className='mb-2 text-lg font-bold text-white opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100'>
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
