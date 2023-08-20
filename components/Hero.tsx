import { storyblokEditable } from '@storyblok/react/rsc';
import Carousel from './Carousel';

const Hero = ({ blok }: any) => {
  const carouselContent = {
    title: blok.title,
    subtitle: blok.subtitle,
    images: [
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1691951171253-128bde131aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      'https://images.unsplash.com/photo-1691951171253-128bde131aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      'https://images.unsplash.com/photo-1691951171253-128bde131aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    ],
    primaryButtonText: blok.button[0].text,
    secondaryButtonText: blok.button[1].text,
  };
  return (
    console.log(blok),
    (
      <div {...storyblokEditable(blok)}>
        <Carousel
          content={carouselContent}
          autoSlide={false}
          autoSlideInterval={3000}
        />
      </div>
    )
  );
};

export default Hero;
