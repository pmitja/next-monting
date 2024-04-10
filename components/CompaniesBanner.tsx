'use client';

import { CompaniesBannerStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';

const CompaniesBanner = ({ blok }: { blok: CompaniesBannerStoryblok }) => {
  return (
    <section className='bg-white dark:bg-gray-900' {...storyblokEditable(blok)}>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:py-16'>
        <h2 className='mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16'>
          You’ll be in good company
        </h2>
        <div className='grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-5'>
          {blok.companiesLogo.map((company) => (
            <Image
              key={company.id}
              src={`${company.filename}/m/200x0/smart`}
              alt={company.alt ?? 'Company logo'}
              width={120}
              height={210}
              className='flex h-auto w-24 items-center justify-center object-contain md:w-32 lg:w-40'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesBanner;
