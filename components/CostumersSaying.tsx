import { storyblokEditable } from '@storyblok/react/rsc';
import { Quote } from 'lucide-react';
import Testimonial from './Testimonial';

const CostumersSaying = ({ blok }: any) => {
  console.log(blok);
  return (
    <div {...storyblokEditable(blok)} className=' bg-slate-200'>
      <div className='md:px-18 flex w-full flex-col place-items-center justify-center gap-5 px-12 pb-10 pt-10 lg:px-24'>
        <h2 className='relative flex w-fit flex-row gap-2 justify-self-center pl-9 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
          <div className='absolute left-0 h-8 w-8 rounded-full bg-red-600'></div>
          <Quote
            className='absolute left-[2%] top-[10%] z-10 text-white'
            size={20}
          />
          {blok.title}
        </h2>
        <div className='grid grid-cols-2 gap-3 divide-y-8'>
          {blok.testimonials.map((testimonial: any) => (
            <Testimonial blok={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostumersSaying;
