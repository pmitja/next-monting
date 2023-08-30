import { storyblokEditable } from '@storyblok/react/rsc';
import { ServicesStoryblok } from '@/component-types-sb';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Services = ({ blok }: { blok: ServicesStoryblok }) => {
  return (
    <div
      className='lg:px-18 container mx-auto px-8 py-12 md:px-12 md:py-16'
      {...storyblokEditable(blok)}
    >
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold uppercase md:text-3xl lg:text-4xl'>
          {blok.title}
        </h2>
      </div>
      <div className='mt-10 flex flex-col md:flex-row md:items-center md:justify-center md:gap-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col items-center justify-center gap-6'>
            <Image
              src={blok.icons[0].filename}
              alt={blok.icons[0].alt ?? 'Building icon'}
              width={84}
              height={84}
              className='h-auto w-auto object-cover'
            />
            <h3 className='text-xl font-bold md:text-2xl'>
              {blok.primaryTitle}
            </h3>
            <p className='max-w-md text-base text-neutral-500 md:text-lg'>
              {blok.primaryText}
            </p>
            <Button
              variant='primary'
              className='px-4 py-3 text-sm uppercase md:px-5 md:py-4 md:text-base'
            >
              See Apartment projects
            </Button>
          </div>
          <div className='flex flex-col items-center justify-center gap-6'>
            <Image
              src={blok.icons[1].filename}
              alt={blok.icons[1].alt ?? 'Building icon'}
              width={84}
              height={84}
              className='h-auto w-auto object-cover'
            />
            <h3 className='text-xl font-bold md:text-2xl'>
              {blok.secondaryTitle}
            </h3>
            <p className='max-w-md text-base text-neutral-500 md:text-lg'>
              {blok.secondaryText}
            </p>
            <Button
              variant='primary'
              className='px-4 py-3 text-sm uppercase md:px-5 md:py-4 md:text-base'
            >
              See Housing Projects
            </Button>
          </div>
          <div className='flex flex-col items-center justify-center gap-6'>
            <Image
              src={blok.icons[2].filename}
              alt={blok.icons[2].alt ?? 'Building icon'}
              width={84}
              height={84}
              className='h-auto w-auto object-cover'
            />
            <h3 className='text-xl font-bold md:text-2xl'>
              {blok.tertiaryTitle}
            </h3>
            <p className='max-w-md text-base text-neutral-500 md:text-lg'>
              {blok.tertiaryText}
            </p>
            <Button
              variant='primary'
              className='px-4 py-3 text-sm uppercase md:px-5 md:py-4 md:text-base'
            >
              See Business Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
