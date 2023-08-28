'use client';

import { CompaniesBannerStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';

const CompaniesBanner = ({ blok }: { blok: CompaniesBannerStoryblok }) => {
  return (
    <div
      className='flex min-h-[4rem] flex-row flex-wrap justify-between gap-4 bg-gray-300 p-7'
      {...storyblokEditable(blok)}
    >
      {blok.companiesLogo.map((company) => (
        <Image
          key={company.id}
          src={company.filename}
          alt={company.alt ?? 'Company logo'}
          width={140}
          height={230}
          className='h-auto w-auto object-contain'
        />
      ))}
    </div>
  );
};

export default CompaniesBanner;
