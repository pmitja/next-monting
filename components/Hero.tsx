'use client';

import { MouseEvent, TouchEvent } from 'react';
import { useState, useRef } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import { HeroStoryblok } from '@/component-types-sb';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Hero = ({ blok }: { blok: HeroStoryblok }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    setCurrentSlide(
      currentSlide === 0 ? blok.image.length - 1 : currentSlide - 1
    );
  };

  const next = () => {
    setCurrentSlide(
      currentSlide === blok.image.length - 1 ? 0 : currentSlide + 1
    );
  };

  const handleChangeSlide = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    if (!carouselRef.current) return;

    const carouselWidth = carouselRef.current.getBoundingClientRect().width;
    const halfWidth = carouselWidth / 2;
    let targetPos: number = 0;

    if (e.type === 'touchend') {
      const touch = e as TouchEvent<HTMLDivElement>;
      targetPos = touch.changedTouches[0].clientX;
    } else if (e.type === 'click') {
      const mouse = e as MouseEvent<HTMLDivElement>;
      targetPos = mouse.clientX;
    } else {
      return;
    }

    if (targetPos >= halfWidth) {
      next();
    } else {
      prev();
    }
  };

  return (
    <div {...storyblokEditable(blok)}>
      <div
        className='relative cursor-pointer overflow-hidden'
        ref={carouselRef}
        onClick={handleChangeSlide}
        onTouchEnd={handleChangeSlide}
      >
        <div className='flex min-h-[58vh] w-full md:min-h-[70vh]'>
          {blok.image.map((img, index: number) => (
            <motion.div
              key={index}
              className='absolute inset-0 bg-gradient-to-r from-black to-transparent'
            >
              <Image
                priority
                src={img.filename}
                alt={img.alt ?? 'Hero image'}
                fill
                className={`object-cover transition-all duration-700 ease-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </motion.div>
          ))}
        </div>

        <div className='absolute inset-0 flex max-w-2xl flex-col items-start justify-center gap-8 px-4 text-left md:max-w-4xl md:px-8 lg:px-20'>
          <h2 className='font-inter text-2xl font-bold uppercase text-white md:text-3xl lg:text-4xl'>
            {blok.title}
          </h2>
          <p className='text-base text-white sm:text-lg md:text-2xl lg:text-xl'>
            {blok.subtitle}
          </p>
          <div className='flex gap-2 md:gap-4'>
            <Button
              variant='primary'
              type='button'
              className='px-4 py-3 text-xs sm:px-5 sm:py-3 sm:text-sm md:text-base'
            >
              {blok.primaryButton[0].text}
              <ChevronRight className='ml-2 inline h-4 w-4 md:h-6 md:w-6' />
            </Button>
            <Button
              type='button'
              variant='secondary'
              className='px-4 py-3 text-xs sm:px-5 sm:py-3 sm:text-sm md:text-base'
            >
              {blok.secondaryButton[0].text}
            </Button>
          </div>
        </div>

        <Button
          onClick={prev}
          variant='primary'
          className={`absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border-[1px] p-1 hover:border-red-700 md:h-10 md:w-10 ${
            currentSlide === 0
              ? 'border-red-600 bg-red-600'
              : 'border-white bg-transparent'
          } ${'hidden lg:flex'}`}
          type='button'
          aria-label='Previous slide'
        >
          <ChevronLeft />
        </Button>

        <Button
          onClick={next}
          variant='primary'
          className={`absolute bottom-1/2 right-4 flex h-8 w-8 translate-y-1/2 transform items-center justify-center rounded-full border-[1px] p-1 hover:border-red-700 md:h-10 md:w-10 ${
            currentSlide === blok.image.length - 1
              ? 'border-red-600 bg-red-600'
              : 'border-white bg-transparent'
          } ${'hidden lg:flex'}`}
          type='button'
          aria-label='Next slide'
        >
          <ChevronRight />
        </Button>

        <div className='absolute bottom-4 left-0 right-0'>
          <div className='flex items-start justify-center gap-2 lg:gap-3'>
            {blok.image.map((_: unknown, index: number) => (
              <Button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full shadow hover:bg-red-700 lg:h-4 lg:w-4 ${
                  index === currentSlide ? 'bg-red-600' : 'bg-white'
                }`}
                type='button'
                aria-label='Change slide'
              ></Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
