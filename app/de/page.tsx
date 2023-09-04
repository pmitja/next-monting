import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoryblokStory from '@storyblok/react/story';
import { fetchData } from '@/utils/fetchData';
import { fetchConfig } from '@/utils/fetchConfig';

export const metadata: Metadata = {
  title: 'MONTING Plus',
  description: 'MONTING Plus, your partner in heavy metal solutions.',
};

export default async function Domov() {
  const { data } = await fetchData('de');
  const { data: config } = await fetchConfig();

  return (
    <>
      <Navbar data={config.story} />
      <main>
        <h1 className='absolute hidden'>Monting Plus d.o.o</h1>
        <StoryblokStory story={data.story} />
      </main>
      <Footer data={config.story} />
    </>
  );
}
