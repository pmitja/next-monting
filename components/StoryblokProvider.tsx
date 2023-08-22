/** 1. Tag it as a client component */
'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import Teaser from './Teaser';
import Page from './Page';
import Grid from './Grid';
import Feature from './Feature';
import Hero from './Hero';
import CompaniesBanner from './CompaniesBanner';
import About from './About';

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
    hero: Hero,
    companiesBanner: CompaniesBanner,
    about: About,
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
