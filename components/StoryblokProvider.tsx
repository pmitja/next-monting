/** 1. Tag it as a client component */
'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import Page from './Page';
import Hero from './Hero';
import CompaniesBanner from './CompaniesBanner';
import Services from './Services';
import About from './About';
import CostumersSaying from './CostumersSaying';
import RecentProjectsSection from './RecentProjectsSection';
import CtaSection from './CtaSection';

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    companiesBanner: CompaniesBanner,
    services: Services,
    about: About,
    whatCostumersAreSaying: CostumersSaying,
    recentProjectSection: RecentProjectsSection,
    ctaSection: CtaSection,
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
