'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Testimonial from './Testimonial';
import { useState } from 'react';
import clsx from 'clsx';
import { WhatCostumersAreSayingStoryblok } from '@/component-types-sb';

const CostumersSaying = ({
  blok,
}: {
  blok: WhatCostumersAreSayingStoryblok;
}) => {
  const [nextTwo, setNextTwo] = useState(false);

  const handleClick = () => {
    nextTwo ? setNextTwo(false) : setNextTwo(true);
  };

  return (
    <div
      {...storyblokEditable(blok)}
      className=' flex place-content-center bg-slate-200 py-20'
    >
      <div className='md:px-18 flex w-full max-w-[1534px] flex-col place-items-center justify-center gap-16 px-12 pb-10 pt-10 lg:px-24'>
        <div className='flex w-full flex-row justify-between gap-2'>
          <h2 className='relative flex w-fit max-w-[40%] flex-row justify-between gap-2 justify-self-center pl-9 text-start text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
            <span className='absolute left-0 h-8 w-8 rounded-full bg-red-600'></span>
            <Quote
              className='absolute left-[2%] top-[10%] z-10 text-white'
              size={20}
            />
            {blok.title}
          </h2>
          <div className='flex gap-10'>
            <button
              onClick={handleClick}
              disabled={nextTwo}
              className='text-red-600 transition-colors duration-300 disabled:text-gray-300'
            >
              <ArrowLeft size={32} strokeWidth={3} />
            </button>
            <button
              onClick={handleClick}
              disabled={!nextTwo}
              className=' text-red-600 transition-colors duration-300 disabled:text-gray-300'
            >
              <ArrowRight size={32} strokeWidth={3} />
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3 transition-all'>
          {nextTwo &&
            blok.testimonials.map((testimonial: any, index: number) => {
              if (index <= 1) {
                return (
                  <div
                    key={testimonial.author[0].name}
                    className={clsx(
                      index === 0 || index % 2 === 0
                        ? 'border-r-2 border-gray-400 pr-8 transition-opacity'
                        : 'pl-8 transition-opacity',
                      nextTwo && 'opacity-100',
                      !nextTwo && 'opacity-0'
                    )}
                  >
                    <Testimonial blok={testimonial} />
                  </div>
                );
              }
            })}
          {!nextTwo &&
            blok.testimonials.map((testimonial: any, index: number) => {
              if (!nextTwo && index > 1) {
                return (
                  <div
                    key={testimonial.author[0].name}
                    className={clsx(
                      index === 0 || index % 2 === 0
                        ? 'border-r-2 border-gray-400 pr-8 transition-opacity'
                        : 'pl-8 transition-opacity',
                      !nextTwo ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    {' '}
                    <Testimonial blok={testimonial} />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default CostumersSaying;
