import {StoryblokStory} from 'storyblok-generate-ts'

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
  component: "about";
  [k: string]: any;
}

export interface ButtonStoryblok {
  text?: string;
  link?: string;
  _uid: string;
  component: "button";
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
  component: "companiesBanner";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeroStoryblok {
  title: string;
  subtitle: string;
  image: MultiassetStoryblok;
  primaryButton: ButtonStoryblok[];
  secondaryButton: ButtonStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
