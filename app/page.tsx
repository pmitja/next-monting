import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoryblokStory from '@storyblok/react/story';
import { fetchData } from '@/utils/fetchData';

export const metadata: Metadata = {
  title: 'MONTING Plus',
  description: 'MONTING Plus, your partner in heavy metal solutions.',
};

export default async function Home() {
  const { data } = await fetchData();

  return (
    <>
      <Navbar />
      <main>
        <h1 className='absolute hidden'>Monting Plus d.o.o</h1>
        <StoryblokStory story={data.story} />
      </main>
      <Footer />
    </>
  );
}
