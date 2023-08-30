'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/utils/scrollIntoView';
import {
  ConfigStoryblok,
  HeaderStoryblok,
  LinkStoryblok,
} from '@/component-types-sb';

const Navbar = ({ data }: { data: ConfigStoryblok }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { header }: { header: HeaderStoryblok } = data.content;

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header>
      <nav className='mx-auto flex max-w-[92%] items-center justify-between py-6'>
        <div>
          <Link href='/' aria-label='Monting Plus logo'>
            <Image
              src={data.content.logo.filename}
              alt={data.content.logo.alt}
              width={48}
              height={48}
            />
          </Link>
        </div>
        <div
          className={`absolute left-0 z-40 min-h-[18rem] bg-white md:static md:min-h-fit ${
            isMobileMenuOpen ? 'top-[5.5rem]' : 'top-[-100%]'
          } flex w-full items-center px-5 py-8 md:w-auto md:px-6 md:py-0`}
        >
          <ul className='flex flex-col gap-6 md:flex-row md:items-center md:gap-8'>
            {header[0].links.map((link: LinkStoryblok) => (
              <li key={link._uid}>
                <Button
                  variant='link'
                  className='text-lg font-medium text-gray-500 hover:text-black md:text-base'
                  onClick={() => {
                    closeMobileMenu();
                    scrollToElement(link.link ?? '');
                  }}
                >
                  {link.text}
                </Button>
              </li>
            ))}
            <li>
              <Button
                variant='primary'
                onClick={() => {
                  scrollToElement('hire');
                  closeMobileMenu();
                }}
              >
                {header[0].buttonText}
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
