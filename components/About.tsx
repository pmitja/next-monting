'use client';

import { AboutStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

const About = ({ blok }: { blok: AboutStoryblok }) => {
  return (
    <div
      className='relative flex flex-col justify-center gap-8 px-8 py-12 text-left md:px-16 md:py-16 lg:flex-row lg:px-24'
      {...storyblokEditable(blok)}
    >
      <div className='flex flex-col place-content-center gap-4 sm:gap-5 md:gap-6 lg:gap-8'>
        <div className='relative flex items-center'>
          <div className='w-10 border-t border-gray-400'></div>
          <span className='mx-2 flex-shrink text-lg'>About us</span>
        </div>
        <h2 className='text-3xl font-bold uppercase md:text-4xl lg:text-5xl'>
          {blok.title}
        </h2>
        <p>{blok.text}</p>
      </div>
      <div className='relative w-fit self-center lg:pt-2'>
        <span className='absolute left-[-7%] top-[-5%] flex flex-col rounded-xl bg-white px-2 text-2xl font-bold text-red-600 sm:text-3xl md:text-4xl lg:top-[-3%] lg:text-5xl'>
          {blok.years}+
          <span className=' text-lg font-bold text-black sm:text-xl md:text-2xl lg:text-3xl'>
            Years
          </span>
        </span>
        <Image
          src={blok.image.filename}
          alt={blok.image.alt ?? 'Image alt'}
          width={550}
          height={660}
          className='max-w-[250px] rounded-xl lg:max-w-sm'
        />
        <div className='absolute -bottom-5 -right-5 z-[-1] h-28 w-28 rounded-xl bg-red-600'></div>
      </div>
    </div>
  );
};

export default About;
