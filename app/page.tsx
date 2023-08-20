import Navbar from "@/components/Navbar";
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();
  console.log(data.story.content);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Story: {data.story.name}</h1>
        <StoryblokComponent blok={data.story.content} />
      </main>
    </>
  );
}

export async function fetchData() {
  let sbParams: object = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
