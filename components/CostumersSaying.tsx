'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Testimonial from './Testimonial';
import { useState } from 'react';
import clsx from 'clsx';
import { Button } from './ui/button';
import {
  TestimonialStoryblok,
  WhatCostumersAreSayingStoryblok,
} from '@/component-types-sb';

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
      id='testimonials'
      {...storyblokEditable(blok)}
      className=' flex place-content-center bg-slate-200 sm:py-7 lg:py-16'
    >
      <div className='md:px-18 flex w-full max-w-[1534px] flex-col place-items-center justify-center gap-8 px-8 py-8 md:pb-3 md:pt-3 lg:gap-16 lg:px-24'>
        <div className='flex w-full flex-col place-items-center justify-between gap-5'>
          <h2 className='relative flex w-fit min-w-fit max-w-[40%] flex-row justify-between gap-2 justify-self-center pl-9 text-start text-2xl font-bold md:text-3xl lg:text-4xl'>
            <span className='absolute left-0 h-8 w-8 rounded-full bg-red-600'></span>
            <Quote
              className='absolute left-[2%] top-[10%] z-10 text-white'
              size={20}
            />
            {blok.title}
          </h2>
          <div className='flex w-full justify-between lg:gap-10'>
            <Button
              onClick={handleClick}
              disabled={!nextTwo}
              className='bg-transparent text-red-600 transition-colors duration-300 hover:bg-transparent disabled:text-gray-300'
              aria-label='Previous testimonial'
            >
              <ArrowLeft size={32} strokeWidth={3} />
            </Button>
            <Button
              onClick={handleClick}
              disabled={nextTwo}
              className=' bg-transparent text-red-600 transition-colors duration-300 hover:bg-transparent disabled:text-gray-300'
              aria-label='Next testimonial'
            >
              <ArrowRight size={32} strokeWidth={3} />
            </Button>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-3 transition-all md:grid-cols-2'>
          {nextTwo &&
            blok.testimonials.map(
              (testimonial: TestimonialStoryblok, index: number) => {
                if (index <= 1) {
                  return (
                    <div
                      key={testimonial.author[0].name}
                      className={clsx(
                        index === 0 || index % 2 === 0
                          ? 'border-b-2 border-gray-400 pb-5 transition-opacity md:border-b-0 md:border-r-2 md:pr-8'
                          : 'transition-opacity md:pl-8',
                        nextTwo && 'opacity-100',
                        !nextTwo && 'opacity-0'
                      )}
                    >
                      <Testimonial blok={testimonial} />
                    </div>
                  );
                }
              }
            )}
          {!nextTwo &&
            blok.testimonials.map(
              (testimonial: TestimonialStoryblok, index: number) => {
                if (!nextTwo && index > 1) {
                  return (
                    <div
                      key={testimonial.author[0].name}
                      className={clsx(
                        index === 0 || index % 2 === 0
                          ? 'border-b-2 border-gray-400 pb-5 transition-opacity md:border-b-0 md:border-r-2 md:pr-8'
                          : 'transition-opacity md:pl-8',
                        !nextTwo ? 'opacity-100' : 'opacity-0'
                      )}
                    >
                      {' '}
                      <Testimonial blok={testimonial} />
                    </div>
                  );
                }
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default CostumersSaying;
