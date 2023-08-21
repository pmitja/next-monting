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
      <div className='flex w-full'>
        {content.images.map((image, index) => (
          <div key={index}>
            <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent' />
            {image.includes('mp4') ? (
              <video src={image} autoPlay muted loop />
            ) : (
              <Image
                src={image}
                alt={'asd'}
                fill={true}
                priority={true}
                className={`object-cover transition-all duration-700 ease-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className='absolute inset-0 flex max-w-2xl flex-col items-start justify-center gap-8 px-20 text-left md:max-w-4xl md:px-24'>
        <h2 className='text-4xl uppercase text-white md:text-6xl'>
          {content.title}
        </h2>
        <p className='text-lg text-white md:text-xl'>{content.subtitle}</p>
        <div className='flex gap-4'>
          <Button className='text-wite rounded-full bg-[#f70000] p-4 px-4 text-white'>
            <a href={content.primaryButton.text}>
              {content.primaryButton.text}
            </a>
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
        className={`absolute left-4 top-[45%] flex h-8 w-8 items-center justify-center rounded-full border-[1px] p-1 text-white md:h-10 md:w-10 ${
          currentSlide === content.images.length - 1
            ? 'border-[#f70000] bg-[#f70000]'
            : 'border-white bg-transparent'
        }`}
        type='button'
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className={`absolute right-4 top-[45%] flex h-8 w-8 items-center justify-center rounded-full border-[1px] p-1 text-white md:h-10 md:w-10 ${
          currentSlide === 0
            ? 'border-[#f70000] bg-[#f70000]'
            : 'border-white bg-transparent'
        }`}
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
