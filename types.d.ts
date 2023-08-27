export interface NestedBlok {
  _uid: string;
  component:
    | 'about'
    | 'author'
    | 'button'
    | 'companiesBanner'
    | 'ctaSection'
    | 'feature'
    | 'grid'
    | 'hero'
    | 'page'
    | 'recentProjectSection'
    | 'services'
    | 'teaser'
    | 'testimonial'
    | 'whatCostumersAreSaying';
  [k: string]: any;
}
