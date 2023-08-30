import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=' bg-neutral-950 text-white'>
      <div className='container pt-10'>
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
            <p className='mt-6 max-w-lg text-left text-base text-neutral-300 md:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum blandit nisi leo, suscipit auctor ipsum luctus sed.
              Praesent placerat orci a sapien dignissim, a lacinia ex varius.
              Sed maximus vehicula purus vitae ornare.
            </p>
          </div>

          <div className='mb-6 basis-1/2 md:basis-1/4'>
            <h3 className='mb-4 text-lg font-bold md:text-xl lg:text-2xl'>
              Quick Links
            </h3>

            <ul className='flex list-none flex-col gap-3'>
              <li>
                <Link
                  href='/#about'
                  className='text-neutral-300 hover:text-white'
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href='/#services'
                  className='text-neutral-300 hover:text-white'
                >
                  Serices
                </Link>
              </li>
              <li>
                <Link
                  href='/#testimonials'
                  className='text-neutral-300 hover:text-white'
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href='/#projects'
                  className='text-neutral-300 hover:text-white'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/#services'
                  className='text-neutral-300 hover:text-white'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/#hire'
                  className='text-neutral-300 hover:text-white'
                >
                  Hiring
                </Link>
              </li>
            </ul>
          </div>

          <div className='mb-6 basis-1/2 md:basis-1/4'>
            <h3 className='mb-4 text-lg font-bold md:text-xl lg:text-2xl'>
              Socials
            </h3>

            <ul className='flex list-none items-center gap-2'>
              <li>
                <Link href='https://www.facebook.com/montingplus'>
                  <span className='sr-only'>Facebook</span>
                  <Facebook
                    className='text-neutral-300 transition-colors duration-300 hover:text-white'
                    size={26}
                  />
                </Link>
              </li>
              <li>
                <Link href='https://linkedin.com'>
                  <span className='sr-only'>Linkedin</span>
                  <Linkedin
                    className='text-neutral-300 transition-colors duration-300 hover:text-white'
                    size={26}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='container my-2 h-px border-0 bg-white'></hr>
      <div className='container py-6 text-center text-sm md:text-base'>
        <p>@ Copyright 2023, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
