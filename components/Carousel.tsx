'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface CarouselProps {
  content: {
    title: string;
    subtitle: string;
    images: string[];
    primaryButton: { text: string; url: string };
    secondaryButton: { text: string; url: string };
  };
  autoSlide: boolean;
  autoSlideInterval: number;
}

const Carousel: React.FC<CarouselProps> = ({
  content,
  autoSlide,
  autoSlideInterval,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % content.images.length);
  };

  const prev = () => {
    setCurrentSlide(
      currentSlide === 0 ? content.images.length - 1 : currentSlide - 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className='relative overflow-hidden'>
      <div className='flex h-[35vh] w-full md:h-[50vh] lg:h-[80vh]'>
        {content.images.map((image, index) => (
          <div
            key={index}
            className='absolute inset-0 bg-gradient-to-r from-black to-transparent'
          >
            <Image
              src={image}
              alt={'asd'}
              fill
              className={`object-cover transition-all duration-700 ease-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        ))}
      </div>

      <div className='absolute inset-0 flex max-w-2xl flex-col items-start justify-center gap-8 px-4 text-left md:max-w-4xl md:px-8 lg:px-20'>
        <h2 className='font-inter text-2xl uppercase text-white md:text-4xl'>
          {content.title}
        </h2>
        <p className='text-base text-white md:text-lg'>{content.subtitle}</p>
        <div className='flex gap-2 md:gap-4'>
          <Button className='rounded-full bg-[#f70000] p-4 px-4 text-white'>
            <a href={content.primaryButton.url}>{content.primaryButton.text}</a>
            <ChevronRight className='ml-2 inline h-6 w-6' />
          </Button>
          <Button
            type='button'
            className='rounded-full border-[1px] border-white bg-transparent p-4 text-white hover:bg-white hover:text-black'
          >
            <a href={content.secondaryButton.url}>
              {content.secondaryButton.text}
            </a>
          </Button>
        </div>
      </div>

      <button
        onClick={prev}
        className={`absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border-[1px] p-1 text-white md:h-10 md:w-10 ${
          currentSlide === content.images.length - 1
            ? 'border-[#f70000] bg-[#f70000]'
            : 'border-white bg-transparent'
        } ${'hidden lg:flex'}`}
        type='button'
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className={`absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border-[1px] p-1 text-white md:h-10 md:w-10 ${
          currentSlide === 0
            ? 'border-[#f70000] bg-[#f70000]'
            : 'border-white bg-transparent'
        } ${'hidden lg:flex'}`}
        type='button'
      >
        <ChevronRight />
      </button>

      <div className='absolute bottom-4 left-0 right-0'>
        <div className='flex items-start justify-center gap-2'>
          {content.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full shadow ${
                index === currentSlide ? 'bg-[#f70000]' : 'bg-white'
              }`}
              type='button'
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
