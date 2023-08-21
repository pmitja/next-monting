import Image from 'next/image';
import Link from 'next/link';

import { Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='md:px-18 bg-neutral-950 px-12 text-white lg:px-24'>
      <div className='pt-10'>
        <div className='flex flex-wrap gap-4 md:flex-nowrap md:justify-between md:gap-8'>
          <div className='basis-100 mb-6 md:basis-2/4'>
            <Link href='/'>
              <Image
                src='/images/logo-white.svg'
                alt='Monting logo'
                width={55}
                height={55}
                className='mb-6'
              />
            </Link>
            <p className='mt-6 max-w-lg text-left text-neutral-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum blandit nisi leo, suscipit auctor ipsum luctus sed.
              Praesent placerat orci a sapien dignissim, a lacinia ex varius.
              Sed maximus vehicula purus vitae ornare.
            </p>
          </div>

          <div className='mb-6 basis-1/2 md:basis-1/4'>
            <h5 className='mb-4 text-xl font-bold md:text-2xl'>Quick Links</h5>

            <ul className='flex list-none flex-col gap-3'>
              <li>
                <Link
                  href='/about'
                  className='text-neutral-300 hover:text-white'
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-neutral-300 hover:text-white'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/testimonials'
                  className='text-neutral-300 hover:text-white'
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href='/projects'
                  className='text-neutral-300 hover:text-white'
                >
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/hiring'
                  className='text-neutral-300 hover:text-white'
                >
                  We are hiring
                </Link>
              </li>
              <li>
                <Link
                  href='/resources'
                  className='text-neutral-300 hover:text-white'
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className='mb-6 basis-1/2 md:basis-1/4'>
            <h5 className='mb-4 text-xl font-bold md:text-2xl'>Socials</h5>

            <ul className='flex list-none items-center gap-4'>
              <li>
                <Link href='https://facebook.com'>
                  <Facebook size={26} />
                </Link>
              </li>
              <li>
                <Link href='https://linkedin.com'>
                  <Linkedin size={26} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-2 h-px border-0 bg-white'></hr>
      <div className='md:text p-4 text-center text-sm md:text-base'>
        <p>@ Copyright 2023, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
