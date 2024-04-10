'use client';

import {
  ConfigStoryblok,
  HeaderStoryblok,
  LinkStoryblok,
} from '@/component-types-sb';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { scrollToElement } from '@/utils/scrollIntoView';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './LanguageSwitcher';

const Header = ({ data }: { data: ConfigStoryblok }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header }: { header: HeaderStoryblok } = data.content;

  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className='min-h-70px sticky top-0 z-50 w-full bg-white px-4 py-4 font-sans shadow-md sm:px-10'>
      <div className='relative flex flex-wrap items-center justify-between gap-5'>
        <Link href='/' aria-label='Monting Plus logo'>
          <Image
            src={data.content.logo.filename}
            alt={data.content.logo.alt}
            width={48}
            height={48}
          />
        </Link>
        <div className='flex ml-auto lg:order-1 lg:ml-0 gap-5'>
          <div className='hidden lg:block'><LanguageSwitcher /></div>
          <Button
            variant='primary'
            onClick={() => {
              scrollToElement('hire');
            }}
            className='rounded-full border-2 border-red-600 bg-red-600 px-4 py-2 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:text-red-600'
          >
            {header[0].buttonText}
          </Button>

          <button id='toggle' className='ml-7 lg:hidden' onClick={handleToggle}>
            <svg
              className='h-7 w-7'
              fill='#000'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <ul
          id='collapseMenu'
          className={
            (cn(
              'xl:hidden lg:w-fit lg:py-4 lg:!flex lg:gap-5 block w-full', isMenuOpen ? 'block max-w-full lg:max-w-fit' : 'hidden')
            )
          }
        >
          {header[0].links.map((link: LinkStoryblok) => (
            <li
              key={link._uid}
            >
              <button
                className='text-2xl block text-gray-600  lg:hover:text-red-600 border-b min-w-full lg:border-0 lg:max-w-fit text-left py-2 lg:text-lg lg:py-0'
                onClick={() => {
                  scrollToElement(link.link ?? '');
                  setIsMenuOpen(false);
                }}
              >
                {link.text}
              </button>
            </li>
          ))}
        </ul>
        {isMenuOpen && <LanguageSwitcher />}
      </div>
    </header>
  );
};

export default Header;
