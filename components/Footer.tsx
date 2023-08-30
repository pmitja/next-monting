import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin } from 'lucide-react';
import {
  ConfigStoryblok,
  FooterStoryblok,
  LinkStoryblok,
} from '@/component-types-sb';

const Footer = ({ data }: { data: ConfigStoryblok }) => {
  const { footer }: { footer: FooterStoryblok } = data.content;

  return (
    <footer className=' bg-neutral-950 text-white'>
      <div className='container pt-10'>
        <div className='flex flex-wrap gap-4 md:flex-nowrap md:justify-between md:gap-8'>
          <div className='basis-100 mb-6 md:basis-2/4'>
            <Link href='/'>
              <Image
                src={footer[0].logo.filename}
                alt={footer[0].logo.alt}
                width={55}
                height={55}
                className='mb-6'
              />
            </Link>
            <p className='mt-6 max-w-lg text-left text-base text-neutral-300 md:text-lg'>
              {footer[0].text}
            </p>
          </div>

          <div className='mb-6 basis-1/2 md:basis-1/4'>
            <h3 className='mb-4 text-lg font-bold md:text-xl lg:text-2xl'>
              {footer[0].linksTitle}
            </h3>

            <ul className='flex list-none flex-col gap-3'>
              {footer[0].links.map((link: LinkStoryblok) => (
                <li key={link._uid}>
                  <Link
                    href={link.link ?? ''}
                    className='text-neutral-300 hover:text-white'
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='mb-6 basis-1/2 md:basis-1/4'>
            <h3 className='mb-4 text-lg font-bold md:text-xl lg:text-2xl'>
              {footer[0].socialTitle}
            </h3>

            <ul className='flex list-none items-center gap-2'>
              <li>
                <Link href={footer[0].facebookUrl ?? null}>
                  <span className='sr-only'>Facebook</span>
                  <Facebook
                    className='text-neutral-300 transition-colors duration-300 hover:text-white'
                    size={26}
                  />
                </Link>
              </li>
              <li>
                <Link href={footer[0].linkedinUrl ?? null}>
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
