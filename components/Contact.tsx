import ContactForm from './ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='lg:px-18 px-8 py-12 md:px-12 md:py-16'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:justify-items-center md:gap-8'>
        <div className='w-full text-left md:w-2/3'>
          <div className='relative pb-24'>
            <Image
              src='/images/red-shape.svg'
              width={100}
              height={100}
              alt='Red shape'
              className='absolute left-[-1.06rem] top-0'
            ></Image>
            <Image
              src='/images/red-shape.svg'
              width={100}
              height={100}
              alt='Red shape'
              className='absolute left-[1.06rem] top-0'
            ></Image>
            <Image
              src='/images/red-shape.svg'
              width={100}
              height={100}
              alt='Red shape'
              className='absolute left-[3.18rem] top-0'
            ></Image>
            <Image
              src='/images/red-shape.svg'
              width={100}
              height={100}
              alt='Red shape'
              className='absolute left-[5.31rem] top-0'
            ></Image>
            <Image
              src='/images/red-shape.svg'
              width={100}
              height={100}
              alt='Red shape'
              className='absolute left-[7.43rem] top-0'
            ></Image>
          </div>
          <h2 className='mb-4 max-w-xl text-3xl font-bold text-red-600 md:text-left md:text-4xl lg:text-5xl'>
            Get in touch with us
          </h2>
          <p className='mb-4 text-lg'>
            Your project deserves nothing less than the best, and I'm here to
            ensure that happens. Let&apos;s create something extraordinary together 
            please don&apos;t hesitate to contact me at test@test.com
          </p>
          <div className='flex gap-4'>
            <Facebook
              className='cursor-pointer fill-black transition-all hover:fill-transparent'
              size={28}
            />
            <Linkedin
              className='cursor-pointer fill-black transition-all hover:fill-transparent'
              size={28}
            />
          </div>
        </div>
        <Card className='w-full shadow-lg'>
          <CardHeader>
            <CardTitle>Contact us</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
