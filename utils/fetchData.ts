import { getStoryblokApi } from '@storyblok/react/rsc';

export async function fetchData() {
  let sbParams: object = { version: 'draft' };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
