'use client';

import { MouseEvent, TouchEvent } from 'react';
import { useState, useRef } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import { HeroStoryblok } from '@/component-types-sb';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import CarRentalSection from './CarRentalSection';

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
      <section className='w-full border-b pt-12 md:pt-24 lg:pt-32'>
        <div className='container space-y-10 px-4 sm:px-6 md:px-10'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                Monting Plus d.o.o
              </div>
              <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                {blok.title}
              </h1>
              <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                {blok.subtitle}
              </p>
            </div>
          </div>
          <div
            className='container relative mx-auto aspect-[3/1] cursor-pointer overflow-hidden rounded-t-xl object-cover'
            ref={carouselRef}
            onClick={handleChangeSlide}
            onTouchEnd={handleChangeSlide}
          >
            <div className='flex min-h-[58vh] w-full md:min-h-[70vh]'>
              <motion.div />
              {blok.image.map((img, index: number) => (
                <motion.div key={index} className='absolute inset-0'>
                  <Image
                    priority
                    fill
                    src={`${img.filename}/m/1500x0/smart`}
                    alt={img.alt ?? 'Hero image'}
                    className={`object-cover transition-all duration-700 ease-out  ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            <Button
              onClick={prev}
              variant='primary'
              className={`absolute left-4 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border-[1px] p-1 hover:border-red-700 md:h-10 md:w-10 ${
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
              className={`absolute bottom-1/2 right-4 z-20 flex h-8 w-8 translate-y-1/2 transform items-center justify-center rounded-full border-[1px] p-1 hover:border-red-700 md:h-10 md:w-10 ${
                currentSlide === blok.image.length - 1
                  ? 'border-red-600 bg-red-600'
                  : 'border-white bg-transparent'
              } ${'hidden lg:flex'}`}
              type='button'
              aria-label='Next slide'
            >
              <ChevronRight />
            </Button>

            <div className='absolute bottom-4 left-0 right-0 z-20'>
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
      </section>
      <CarRentalSection />
      {/* <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-[1fr_600px] lg:gap-16'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Faster iteration. More innovation.
            </h2>
            <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              The platform for rapid progress. Let your team focus on shipping
              features instead of managing infrastructure with automated CI/CD,
              built-in testing, and integrated collaboration.
            </p>
          </div>
          <div className='max-w-550 mx-auto grid gap-4'>
            <form className='grid gap-4'>
              <input placeholder='Enter your email' type='email' />
              <Button type='submit'>Contact us</Button>
            </form>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Sign up to get notified when we launch.
              <Link className='underline underline-offset-2' href='#'>
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className='w-full border-t py-12 md:py-24 lg:py-32'>
        <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
          <div className='space-y-3'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Meet our Customers
            </h2>
            <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Trusted by the best teams in the world. We help teams of all
              sizes.
            </p>
          </div>
          <div className='divide-y rounded-lg border'>
            <div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3'>
              <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                <img
                  alt='Logo'
                  className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  height='70'
                  src='/placeholder.svg'
                  width='140'
                />
              </div>
              <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                <img
                  alt='Logo'
                  className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  height='70'
                  src='/placeholder.svg'
                  width='140'
                />
              </div>
              <div className='mx-auto flex w-full items-center justify-center p-8'>
                <img
                  alt='Logo'
                  className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  height='70'
                  src='/placeholder.svg'
                  width='140'
                />
              </div>
            </div>
            <div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3'>
              <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                <img
                  alt='Logo'
                  className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  height='70'
                  src='/placeholder.svg'
                  width='140'
                />
              </div>
              <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                <img
                  alt='Logo'
                  className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  height='70'
                  src='/placeholder.svg'
                  width='140'
                />
              </div>
              <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                <img
                  alt='Logo'
                  className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  height='70'
                  src='/placeholder.svg'
                  width='140'
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
