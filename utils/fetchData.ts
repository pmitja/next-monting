import { getStoryblokApi } from '@storyblok/react/rsc';

export async function fetchData(lang?: string) {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, {
    version: 'draft',
    language: lang,
  });
}