import { storyblokEditable } from '@storyblok/react/rsc';
import { ServicesStoryblok } from '@/component-types-sb';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Services = ({ blok }: { blok: ServicesStoryblok }) => {
  return (
    <div className='px-8 py-16 md:px-16 lg:px-24' {...storyblokEditable(blok)}>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl font-bold uppercase md:text-4xl lg:text-5xl'>
          {blok.title}
        </h2>
      </div>
      <div className='mt-10 flex flex-col md:flex-row md:items-center md:justify-center md:gap-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col items-center justify-center gap-6'>
            <Image
              src={blok.icons[0].filename}
              alt={blok.icons[0].alt ?? 'Building icon'}
              width={100}
              height={100}
              className='object-cover '
            />
            <h3 className='text-xl font-bold md:text-2xl'>
              {blok.primaryTitle}
            </h3>
            <p className='max-w-md text-base text-neutral-500 md:text-lg'>
              {blok.primaryText}
            </p>
            <Button className='rounded-full bg-red-600 p-6 text-base uppercase'>
              See Apartment projects
            </Button>
          </div>
          <div className='flex flex-col items-center justify-center gap-6'>
            <Image
              src={blok.icons[1].filename}
              alt={blok.icons[1].alt ?? 'Building icon'}
              width={100}
              height={100}
              className='object-cover'
            />
            <h3 className='text-xl font-bold md:text-2xl'>
              {blok.secondaryTitle}
            </h3>
            <p className='max-w-md text-base text-neutral-500 md:text-lg'>
              {blok.secondaryText}
            </p>
            <Button className='rounded-full bg-red-600 p-6 text-base uppercase'>
              See Housing Projects
            </Button>
          </div>
          <div className='flex flex-col items-center justify-center gap-6'>
            <Image
              src={blok.icons[2].filename}
              alt={blok.icons[2].alt ?? 'Building icon'}
              width={100}
              height={100}
              className='object-cover'
            />
            <h3 className='text-xl font-bold md:text-2xl'>
              {blok.tertiaryTitle}
            </h3>
            <p className='max-w-md text-base text-neutral-500 md:text-lg'>
              {blok.tertiaryText}
            </p>
            <Button className='rounded-full bg-red-600 p-6 text-base uppercase'>
              See Business Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
