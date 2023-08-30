import { getStoryblokApi } from '@storyblok/react/rsc';

export async function fetchConfig() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/config`, { version: 'draft' });
}
