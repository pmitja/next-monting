import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getStoryblokApi } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import Feedback from '@/components/Feedback';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <>
      <Navbar />
      <main>
        <StoryblokStory story={data.story} />
        <Feedback></Feedback>
      </main>
      <Footer />
    </>
  );
}

export async function fetchData() {
  let sbParams: object = { version: 'draft' };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
