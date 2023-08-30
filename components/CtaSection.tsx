'use client';

import { Button } from './ui/button';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
import { CtaSectionStoryblok } from '@/component-types-sb';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const CtaSection = ({ blok }: { blok: CtaSectionStoryblok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className='relative inset-0 my-10 flex min-h-[300px] flex-col justify-center bg-gradient-to-r from-red-600 to-transparent lg:mb-16'
    >
      <Image
        src={blok.image.filename}
        alt={blok.image.alt ?? 'Cta image'}
        width={1920}
        height={200}
        className='absolute -z-20 h-full w-full object-cover'
      />
      <div className='container relative z-10 flex flex-col gap-5 place-self-start md:gap-10'>
        <h2 className='w-fit text-2xl font-bold text-white md:text-3xl lg:text-4xl'>
          {blok.title}
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant='secondary'
              className='w-fit px-6 py-3 text-sm md:px-6 md:py-4 md:text-base'
            >
              {blok.text}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact us</DialogTitle>
              <DialogDescription>
                We will get back to you in 24 hours.
              </DialogDescription>
            </DialogHeader>
            Form data will come here
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CtaSection;
