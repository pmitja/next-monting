import { storyblokEditable } from '@storyblok/react/rsc';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Testimonial = ({ blok }) => {
  console.log(blok);
  return (
    <div className='flex flex-col gap-3' {...storyblokEditable(blok)}>
      <h3 className='text-start text-sm font-bold text-red-600 sm:text-base md:text-lg lg:text-xl'>
        {blok.title}
      </h3>
      <div className='text-start text-xs sm:text-base md:text-lg lg:text-lg'>
        {blok.text}
      </div>
      <div className='flex flex-row place-items-center gap-2'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-start gap-1'>
          <h5 className='w-fit text-xs sm:text-base md:text-lg lg:text-lg'>
            {blok.author[0].name}
          </h5>
          <span className='w-fit text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]'>
            {blok.author[0].position}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
