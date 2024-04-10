import { storyblokEditable } from '@storyblok/react/rsc';
import { ServicesStoryblok } from '@/component-types-sb';
import Image from 'next/image';

const Services = ({ blok }: { blok: ServicesStoryblok }) => {
  return (
    <section
      id='services'
      className='w-full py-12 md:py-24 lg:py-32'
      {...storyblokEditable(blok)}
    >
      <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
        <div className='space-y-3'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            {blok.title}
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3'>
          <div className='flex flex-col items-stretch gap-2'>
            <div className='flex aspect-[300/181] w-full place-content-center items-center overflow-hidden rounded-lg'>
              <Image
                alt={blok.icons[0].alt ?? 'Image'}
                className='object-contain object-center'
                height='181'
                src={blok.icons[0].filename}
                style={{
                  aspectRatio: '300/181',
                }}
                width='300'
              />
            </div>
            <h3 className='text-xl font-bold'>{blok.primaryTitle}</h3>
            <p className='text-sm text-gray-500/70 dark:text-gray-400/70'>
              {blok.primaryText}
            </p>
          </div>
          <div className='flex flex-col items-stretch gap-2'>
            <div className='flex aspect-[300/181] w-full place-content-center items-center overflow-hidden rounded-lg'>
              <Image
                alt={blok.icons[1].alt ?? 'Image'}
                className='object-contain object-center'
                height='181'
                src={blok.icons[1].filename}
                style={{
                  aspectRatio: '300/181',
                }}
                width='300'
              />
            </div>
            <h3 className='text-xl font-bold'>{blok.secondaryTitle}</h3>
            <p className='text-sm text-gray-500/70 dark:text-gray-400/70'>
              {blok.secondaryText}
            </p>
          </div>
          <div className='flex flex-col items-stretch gap-2'>
            <div className='flex aspect-[300/181] w-full place-content-center items-center overflow-hidden rounded-lg'>
              <Image
                alt={blok.icons[2].alt ?? 'Image'}
                className='object-contain object-center'
                height='181'
                src={blok.icons[2].filename}
                style={{
                  aspectRatio: '300/181',
                }}
                width='300'
              />
            </div>
            <h3 className='text-xl font-bold'>{blok.tertiaryTitle}</h3>
            <p className='text-sm text-gray-500/70 dark:text-gray-400/70'>
              {blok.tertiaryText}
            </p>
            {/* <Link
                className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                href='#'
              >
                Contact Sales
              </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
