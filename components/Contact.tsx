import { ContactStoryblok } from '@/component-types-sb';
import ContactForm from './ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Contact = ({ blok }: { blok: ContactStoryblok }) => {
  console.log(blok);
  return (
    <div className='container mx-auto py-12 md:py-16' id={'hire'}>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
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
            {blok.title}
          </h2>
          <p className='mb-4 text-lg'>{blok.text}</p>
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
            <CardTitle>{blok.formTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm formElements={blok} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
