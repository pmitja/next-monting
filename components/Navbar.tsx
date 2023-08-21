'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div
          className={`absolute left-0 z-40 min-h-[30vh] bg-white md:static md:min-h-fit ${
            isMobileMenuOpen ? 'top-[9%]' : 'top-[-100%]'
          } flex w-full items-center px-5 md:w-auto md:px-6`}
        >
          <ul className='flex flex-col gap-6 md:flex-row md:items-center md:gap-8'>
            <li>
              <Link className='font-medium text-black' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link
                className='font-medium text-gray-400 hover:text-black'
                href='/about'
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className='font-medium text-gray-400 hover:text-black'
                href='/team'
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                className='font-medium text-gray-400 hover:text-black'
                href='/projects'
              >
                Projects
              </Link>
            </li>
            <li>
              <Button className='rounded-full bg-[#f70000] px-7 uppercase'>
                Hire us
              </Button>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-6 md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            type='button'
          >
            {!isMobileMenuOpen ? <Menu size={32} /> : <X size={32} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
