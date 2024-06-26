import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { StoryblokComponent } from '@storyblok/react/rsc';
import { fetchData } from '@/utils/fetchData';
import { fetchConfig } from '@/utils/fetchConfig';
import { NestedBlok } from '@/types';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MONTING Plus',
  description: 'MONTING Plus, your partner in heavy metal solutions.',
};

export default async function Domov() {
  const { data } = await fetchData('rs');
  const { data: config } = await fetchConfig();

  return (
    <>
      <Header data={config.story} />
      <main>
        <Link href='/rs/another'>Link to another page</Link>
        <h1 className='absolute hidden'>Monting Plus d.o.o</h1>
        {data.story.content.body.map((nestedBlok: NestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        <Toaster />
      </main>
      <Footer data={config.story} />
    </>
  );
}
