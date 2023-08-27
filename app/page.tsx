import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoryblokStory from '@storyblok/react/story';
import { fetchData } from '@/utils/fetchData';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <>
      <Navbar />
      <main>
        <StoryblokStory story={data.story} />
      </main>
      <Footer />
    </>
  );
}
