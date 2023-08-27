import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const RecentProjectsSection = ({ blok }) => {
  console.log(blok);
  return (
    <div className='container mx-auto my-8 flex flex-col place-content-center gap-5 sm:my-7 sm:gap-7 lg:my-16 lg:gap-10'>
      <h2 className='text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
        {blok.title}
      </h2>
      <div className='flex flex-col place-content-center justify-between gap-y-5 sm:flex-row sm:flex-wrap lg:flex-wrap'>
        {blok.images.map((image, index) => (
          <Image
            src={image.filename}
            alt={image.alt}
            width={555}
            height={639}
            key={index}
            className={clsx(
              'overflow-hidden rounded-lg shadow-lg sm:max-w-[49%]',
              index < 3 ? 'lg:max-w-[32%]' : 'w-full lg:max-w-[49%]'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProjectsSection;
