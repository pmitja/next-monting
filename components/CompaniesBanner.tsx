'use client';

import { CompaniesBannerStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';

const CompaniesBanner = ({ blok }: { blok: CompaniesBannerStoryblok }) => {
  return (
    <div
      className='flex min-h-[4rem] flex-row flex-wrap justify-evenly gap-4 bg-gray-300 p-7'
      {...storyblokEditable(blok)}
    >
      {blok.companiesLogo.map((company) => (
        <Image
          key={company.id}
          src={company.filename}
          alt={company.alt ?? 'Company logo'}
          width={120}
          height={210}
          className='h-auto w-28 object-contain md:w-36 lg:w-44'
        />
      ))}
    </div>
  );
};

export default CompaniesBanner;
