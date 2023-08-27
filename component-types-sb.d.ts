import { StoryblokStory } from 'storyblok-generate-ts';

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface AboutStoryblok {
  title: string;
  text: string;
  years: string;
  image: AssetStoryblok;
  _uid: string;
  component: 'about';
  [k: string]: any;
}

export interface AuthorStoryblok {
  name: string;
  position: string;
  image: AssetStoryblok;
  _uid: string;
  component: 'author';
  [k: string]: any;
}

export interface ButtonStoryblok {
  text?: string;
  link?: string;
  _uid: string;
  component: 'button';
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface CompaniesBannerStoryblok {
  companiesLogo: MultiassetStoryblok;
  _uid: string;
  component: 'companiesBanner';
  [k: string]: any;
}

export interface ContactStoryblok {
  _uid: string;
  component: 'contact';
  [k: string]: any;
}

export interface CtaSectionStoryblok {
  title: string;
  image: AssetStoryblok;
  text: string;
  _uid: string;
  component: 'ctaSection';
  [k: string]: any;
}

export interface HeroStoryblok {
  title: string;
  subtitle: string;
  image: MultiassetStoryblok;
  primaryButton: ButtonStoryblok[];
  secondaryButton: ButtonStoryblok[];
  _uid: string;
  component: 'hero';
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
}

export interface RecentProjectSectionStoryblok {
  title: string;
  images: MultiassetStoryblok;
  _uid: string;
  component: 'recentProjectSection';
  [k: string]: any;
}

export interface ServicesStoryblok {
  title?: string;
  primaryTitle: string;
  primaryText: string;
  secondaryTitle: string;
  secondaryText: string;
  tertiaryTitle: string;
  tertiaryText: string;
  icons: MultiassetStoryblok;
  items?: any;
  _uid: string;
  component: 'services';
  [k: string]: any;
}

export interface TestimonialStoryblok {
  title: string;
  text: string;
  author: AuthorStoryblok[];
  _uid: string;
  component: 'testimonial';
  [k: string]: any;
}

export interface WhatCostumersAreSayingStoryblok {
  title: string;
  testimonials: TestimonialStoryblok[];
  _uid: string;
  component: 'whatCostumersAreSaying';
  [k: string]: any;
}
