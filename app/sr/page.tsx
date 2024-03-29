import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { StoryblokComponent } from '@storyblok/react/rsc';
import { fetchData } from '@/utils/fetchData';
import { fetchConfig } from '@/utils/fetchConfig';
import { NestedBlok } from '@/types';

export const metadata: Metadata = {
  title: 'MONTING Plus',
  description: 'MONTING Plus, your partner in heavy metal solutions.',
};

export default async function Domov() {
  const { data } = await fetchData('sr');
  const { data: config } = await fetchConfig();

  return (
    <>
      <Navbar data={config.story} />
      <main>
        <h1 className='absolute hidden'>Monting Plus d.o.o</h1>
        {data.story.content.body.map((nestedBlok: NestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </main>
      <Footer data={config.story} />
    </>
  );
}
