import { AboutStoryblok } from '@/component-types-sb';
import Image from 'next/image';

const About = ({ blok }: { blok: AboutStoryblok }) => {
  console.log(blok);
  return (
    <div className='md:px-18 flex flex-row gap-8 px-12 py-32 text-left lg:px-24'>
      <div className='flex flex-col place-content-center gap-4 sm:gap-5 md:gap-6 lg:gap-8'>
        <div className='relative flex items-center'>
          <div className='w-10 border-t border-gray-400'></div>
          <span className='mx-2 flex-shrink text-lg'>About us</span>
        </div>
        <h2 className='text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
          {blok.title}
        </h2>
        <p className='text-xs sm:text-base md:text-lg lg:text-lg'>
          {blok.text}
        </p>
      </div>
      <div className='relative w-full justify-center'>
        <span className='absolute left-[-7%] top-[-5%] flex flex-col rounded-xl bg-white text-2xl font-bold text-red-600 sm:text-3xl md:text-4xl lg:text-5xl'>
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
          className='rounded-xl'
        />
        <div className='absolute bottom-[-5%] right-[-5%] -z-10 h-28 w-28 rounded-xl bg-red-600'></div>
      </div>
    </div>
  );
};

export default About;
