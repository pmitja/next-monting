import { storyblokEditable } from '@storyblok/react/rsc';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { motion } from 'framer-motion';
import { TestimonialStoryblok } from '@/component-types-sb';

const Testimonial = ({ blok }: { blok: TestimonialStoryblok }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className='flex flex-col gap-3'
      {...storyblokEditable(blok)}
    >
      <h3 className='text-start text-sm font-bold text-red-600 sm:text-base md:text-lg lg:text-xl'>
        {blok.title}
      </h3>
      <div className='text-start text-xs sm:text-base md:text-lg lg:text-lg'>
        {blok.text}
      </div>
      <div className='flex flex-row place-items-center gap-2'>
        <Avatar>
          <AvatarImage
            src={blok.author[0].image.filename}
            alt={blok.author[0].image.alt}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-start gap-1'>
          <p className='w-fit text-xs sm:text-base md:text-lg lg:text-lg'>
            {blok.author[0].name}
          </p>
          <span className='w-fit text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]'>
            {blok.author[0].position}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
