'use client';

import { MouseEvent } from 'react';
import { useEffect, useState, useCallback, useRef } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import { HeroStoryblok } from '@/component-types-sb';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Hero = ({ blok }: { blok: HeroStoryblok }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const changeSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % blok.image.length);
  }, [blok.image.length]);

  useEffect(() => {
    const interval = setInterval(changeSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [changeSlide]);

  const prev = () => {
    setCurrentSlide(
      currentSlide === 0 ? blok.image.length - 1 : currentSlide - 1
    );
  };

  const next = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % blok.image.length);
  };

  const handleChangeSlide = (e: MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;

    const carouselWidth = carouselRef.current.getBoundingClientRect().width;
    const halfWidth = carouselWidth / 2;
    const mouseXPos = e.nativeEvent.offsetX;

    if (mouseXPos <= halfWidth) {
      prev();
    } else {
      next();
    }
  };

  return (
    <div {...storyblokEditable(blok)}>
      <div
        className='relative cursor-pointer overflow-hidden'
        ref={carouselRef}
        onClick={handleChangeSlide}
      >
        <div className='flex h-[45vh] w-full sm:h-[65vh] lg:h-[75vh]'>
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
          <h2 className='font-inter text-3xl font-bold uppercase text-white md:text-4xl lg:text-5xl'>
            {blok.title}
          </h2>
          <p className='text-lg text-white md:text-xl lg:text-2xl'>
            {blok.subtitle}
          </p>
          <div className='flex gap-2 md:gap-4'>
            <Button variant='primary' type='button'>
              {blok.primaryButton[0].text}
              <ChevronRight className='ml-2 inline h-6 w-6' />
            </Button>
            <Button type='button' variant='secondary'>
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
        >
          <ChevronRight />
        </Button>

        <div className='absolute bottom-4 left-0 right-0'>
          <div className='flex items-start justify-center gap-2'>
            {blok.image.map((_: unknown, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full shadow ${
                  index === currentSlide ? 'bg-red-600' : 'bg-white'
                }`}
                type='button'
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
