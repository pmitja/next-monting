import { storyblokEditable } from '@storyblok/react/rsc';
import Carousel from './Carousel';

const Hero = ({ blok }: any) => {
  const carouselContent = {
    title: blok.title,
    subtitle: blok.subtitle,
    images: blok.image.map((img) => img.filename),
    primaryButton: {
      text: blok.primaryButton.at(0).text,
      url: blok.primaryButton.at(0).link,
    },
    secondaryButton: {
      text: blok.secondaryButton.at(0).text,
      url: blok.secondaryButton.at(0).link,
    },
  };
  console.log(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <Carousel
        content={carouselContent}
        autoSlide={false}
        autoSlideInterval={3000}
      />
    </div>
  );
};

export default Hero;
