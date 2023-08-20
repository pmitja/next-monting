import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }: any) => {
  console.log(blok);
  return <div {...storyblokEditable(blok)}>{blok.title}</div>;
};

export default Hero;
