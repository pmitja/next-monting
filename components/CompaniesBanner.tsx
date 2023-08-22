import { CompaniesBannerStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';

const CompaniesBanner = ({ blok }: { blok: CompaniesBannerStoryblok }) => {
  return (
    <div
      className='flex h-[120] flex-row flex-wrap justify-between gap-[8px] bg-gray-300 p-7'
      {...storyblokEditable(blok)}
    >
      {blok.component}
      {blok.companiesLogo.map((company) => (
        <Image
          key={company.id}
          src={company.filename}
          alt={company.alt ?? 'Company logo'}
          width={120}
          height={60}
          className='h-auto w-auto'
        />
      ))}
    </div>
  );
};

export default CompaniesBanner;
