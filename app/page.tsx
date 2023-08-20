import Navbar from "@/components/Navbar";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <StoryblokStory story={data.story} />
      </main>
    </>
  );
}

export async function fetchData() {
  let sbParams: object = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
