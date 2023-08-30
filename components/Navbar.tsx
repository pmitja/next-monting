'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/utils/scrollIntoView';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className='mx-auto flex max-w-[92%] items-center justify-between py-6'>
        <div>
          <Link href='/'>
            <Image
              src='/images/logo.png'
              alt='Monting logo'
              width={48}
              height={48}
            />
          </Link>
        </div>
        <div
          className={`absolute left-0 z-40 min-h-[18rem] bg-white md:static md:min-h-fit ${
            isMobileMenuOpen ? 'top-[5rem]' : 'top-[-100%]'
          } flex w-full items-center px-5 md:w-auto md:px-6`}
        >
          <ul className='flex flex-col gap-6 md:flex-row md:items-center md:gap-8'>
            <li>
              <Button
                variant='link'
                className='text-base font-medium text-black md:text-lg'
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                variant='link'
                className='text-base font-medium text-gray-500 hover:text-black md:text-lg'
              >
                About us
              </Button>
            </li>
            <li>
              <Button
                variant='link'
                className='text-base font-medium text-gray-500 hover:text-black md:text-lg'
              >
                Our Team
              </Button>
            </li>
            <li>
              <Button
                variant='link'
                className='text-base font-medium text-gray-500 hover:text-black md:text-lg'
              >
                Projects
              </Button>
            </li>
            <li>
              <Button variant='primary' onClick={() => scrollToElement('hire')}>
                Hire us
              </Button>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-6 md:hidden'>
          <Button
            variant='link'
            className='px-5 py-3 text-base md:px-6 md:py-4 md:text-lg'
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <div className='sr-only'>Mobile navigation button</div>
            {!isMobileMenuOpen ? <Menu size={32} /> : <X size={32} />}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
