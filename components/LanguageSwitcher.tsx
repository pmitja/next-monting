'use client';

import { useRouter, usePathname } from 'next/navigation';
import * as React from 'react';

import { Button } from './ui/button';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function LanguageSwitcher() {
  const router = useRouter();
  const params = usePathname();

  const currentLanguage = () => {
    const language = params.substring(1);
    if (language === 'sl') {
      return <span className='fi fi-si'></span>;
    } else if (language === 'sr') {
      return <span className='fi fi-rs'></span>;
    } else if (language === 'de') {
      return <span className='fi fi-de'></span>;
    } else {
      return <span className='fi fi-gb'></span>;
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className='overflow'>
        <Button
          className='grid h-10 w-10 place-items-center rounded-full'
          variant='outline'
        >
          {currentLanguage()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mt-2'>
        <DropdownMenuLabel>Choose a language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className='grid gap-1.5 p-1.5'>
          <DropdownMenuRadioGroup onValueChange={(e) => router.push(`/${e}`)}>
            <DropdownMenuRadioItem
              value='sl'
              className='flex cursor-pointer gap-2 p-2'
            >
              <span className='fi fi-gb'></span> English
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value='sr'
              className='flex cursor-pointer gap-2 p-2'
            >
              <span className='fi fi-rs'></span> Srbščina
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value='de'
              className='flex cursor-pointer gap-2 p-2'
            >
              <span className='fi fi-de'></span> Deutsch
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value='gb'
              className='flex cursor-pointer gap-2 p-2'
            >
              <span className='fi fi-si'></span> Slovenščina
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
