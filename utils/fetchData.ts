import { getStoryblokApi } from '@storyblok/react/rsc';
import { ContactStoryblok } from '@/component-types-sb';

export async function fetchData(lang?: string) {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, {
    version: 'draft',
    language: lang,
  });
}

export async function getFormElements(): Promise<ContactStoryblok | null> {
  try {
    const res = await fetchData(); // Assuming fetchData returns StoryblokResult<ContactStoryblok>
    const formElements = res.data.story.content.body.find(
      (item: any) => item.component === 'contact'
    );
    return formElements as ContactStoryblok;
  } catch (err) {
    console.log(err);
    return null;
  }
}
