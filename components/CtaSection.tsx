'use client';

import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
import { CtaSectionStoryblok } from '@/component-types-sb';

const CtaSection = ({ blok }: { blok: CtaSectionStoryblok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className='relative inset-0 my-10 flex h-[300px] flex-col justify-center bg-gradient-to-r from-red-600 to-transparent lg:mb-16'
    >
      <Image
        src={blok.image.filename}
        alt={blok.image.alt ?? 'Cta image'}
        objectFit='cover'
        width={1920}
        height={200}
        className='object-start absolute -z-20 h-full w-full object-cover'
      />
      <div className='container relative z-10 flex flex-col gap-5 place-self-start md:gap-10'>
        <h2 className='w-fit text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl'>
          {blok.title}
        </h2>
        <Button variant='cta' className='w-fit'>
          {blok.text}
        </Button>
      </div>
    </div>
  );
};

export default CtaSection;