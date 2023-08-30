import { getStoryblokApi } from '@storyblok/react/rsc';
import { ContactStoryblok, PageStoryblok } from '@/component-types-sb';

export async function fetchData(): Promise<PageStoryblok> {
  const sbParams: { version: string } = { version: 'draft' };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}

export async function getFormElements(): Promise<ContactStoryblok | null> {
  try {
    const res: PageStoryblok = await fetchData(); // Assuming fetchData returns StoryblokResult<ContactStoryblok>
    const formElements = res.data.story.content.body.find(
      (item: any) => item.component === 'contact'
    );
    return formElements || null;
  } catch (err) {
    console.log(err);
    return null;
  }
}
