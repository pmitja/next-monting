import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';

const CompaniesBanner = ({ blok }: any) => {
  console.log(blok);
  return (
    <div
      className='flex h-[120] flex-row flex-wrap justify-between gap-[8px] bg-gray-300 p-7'
      {...storyblokEditable(blok)}
    >
      {blok.companiesLogo.map((company: any) => (
        <Image
          src={company.filename}
          alt={company.alt}
          width={120}
          height={60}
          className=''
        />
      ))}
    </div>
  );
};

export default CompaniesBanner;
