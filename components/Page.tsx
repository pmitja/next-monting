'use client';

import { PageStoryblok } from '@/component-types-sb';
import { NestedBlok } from '@/types';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Page = ({ blok }: { blok: PageStoryblok }) => (
  <main {...storyblokEditable(blok)} className='text-center'>
    {blok.body.map((nestedBlok: NestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uuid} />
    ))}
  </main>
);

export default Page;
