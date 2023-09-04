'use client';

import { useRouter, usePathname } from 'next/navigation';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

export function LanguageSwitcher() {
  const router = useRouter();
  const params = usePathname();

  const currentLanguage = () => {
    const language = params.substring(1);
    if (language === 'sl') {
      return (
        <Image
          src={'/images/slovenia.png'}
          width={50}
          height={50}
          alt='Slovenian flag'
        />
      );
    } else if (language === 'sr') {
      return (
        <Image
          src={'/images/serbia.png'}
          width={50}
          height={50}
          alt='Serbian flag'
        />
      );
    } else if (language === 'de') {
      return (
        <Image
          src={'/images/de.png'}
          width={50}
          height={50}
          alt='German flag'
        />
      );
    } else {
      return (
        <Image
          src={'/images/greatBritain.png'}
          width={50}
          height={50}
          alt='British flag'
        />
      );
    }
  };

  return (
    <Select onValueChange={(e) => router.push(`/${e}`)}>
      <SelectTrigger className='w-[100px] border-none'>
        <SelectValue placeholder={currentLanguage()} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='sl'>
            <Image
              src={'/images/slovenia.png'}
              width={50}
              height={50}
              alt='Slovenian flag'
            />
          </SelectItem>
          <SelectItem value='sr'>
            <Image
              src={'/images/serbia.png'}
              width={50}
              height={50}
              alt='Slovenian flag'
            />
          </SelectItem>
          <SelectItem value='de'>
            <Image
              src={'/images/de.png'}
              width={50}
              height={50}
              alt='Slovenian flag'
            />
          </SelectItem>
          <SelectItem value=''>
            <Image
              src={'/images/greatBritain.png'}
              width={50}
              height={50}
              alt='Slovenian flag'
            />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
