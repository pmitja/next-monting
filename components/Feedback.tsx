import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

const Feedback = () => {
  return (
    <div className='lg:px-18 bg-[#f3f3f3] px-8 py-12 md:px-12 md:py-16 lg:flex-row'>
      <div className='grid gap-8 md:gap-16'>
        <div className='flex flex-wrap justify-center gap-8 md:justify-between md:gap-0'>
          <h2 className='max-w-xl text-center text-3xl font-bold md:text-left md:text-4xl lg:text-5xl'>
            What our customers are saying
          </h2>
          <div className='flex gap-4'>
            <ArrowLeft className='text-neutral-400' size={36} />
            <ArrowRight className='text-red-600' size={36} />
          </div>
        </div>
        <div className='grid grid-cols-1 place-items-center gap-8 md:grid-cols-3 md:gap-0'>
          <div className='flex flex-col items-center gap-4 sm:items-start'>
            <h3 className='text-xl font-bold text-red-600 md:text-2xl lg:text-3xl'>
              Pellentesque eget velit fringilla, dignissim odio vel,
              pellentesque nisl.
            </h3>
            <p>
              Aliquam erat volutpat. Fusce dolor mauris, ornare a faucibus eu,
              fermentum a dui. Nullam hendrerit ullamcorper justo, a tincidunt
              lectus maximus at. Morbi auctor purus in ipsum consequat
              vestibulum.
            </p>
            <div className='flex items-center gap-4'>
              <Image
                src='/images/person1.png'
                alt='Picture of a woman'
                width={52}
                height={52}
                className='rounded-full'
              ></Image>
              <div className='flex flex-col gap-1'>
                <p className='font-bold text-red-600'>Pricillia Makalew</p>
                <p>EhyaScape Client</p>
              </div>
            </div>
          </div>
          <Separator
            className='hidden w-[2px] bg-neutral-400 md:block'
            orientation='vertical'
          />
          <Separator
            className='block h-[2px] bg-neutral-400 md:hidden'
            orientation='horizontal'
          />
          <div className='flex flex-col items-center gap-4 sm:items-start'>
            <h3 className='text-xl font-bold text-red-600 md:text-2xl lg:text-3xl'>
              Pellentesque eget velit fringilla, dignissim odio vel,
              pellentesque nisl.
            </h3>
            <p>
              Aliquam erat volutpat. Fusce dolor mauris, ornare a faucibus eu,
              fermentum a dui. Nullam hendrerit ullamcorper justo, a tincidunt
              lectus maximus at. Morbi auctor purus in ipsum consequat
              vestibulum.
            </p>
            <div className='flex items-center gap-4'>
              <Image
                src='/images/person2.png'
                alt='Picture of a woman'
                width={52}
                height={52}
                className='rounded-full'
              ></Image>
              <div className='flex flex-col gap-1'>
                <p className='font-bold text-red-600'>Pricillia Makalew</p>
                <p>EhyaScape Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
