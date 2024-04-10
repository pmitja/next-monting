import Image from 'next/image';

type CarRentalCardProps = {
  name: string;
  type: string;
  doors: string;
  price: number;
  imageUrl: string;
};

const CarRentalCard = ({ name, type, doors, price, imageUrl }: CarRentalCardProps) => {
  return (
    <div className='flex flex-col overflow-hidden rounded-xl border border-gray-100 shadow-sm dark:border-gray-800'>
      <Image
        alt={name}
        className='aspect-[1.6] min-w-full object-cover'
        height='250'
        src={imageUrl ?? '/porsche.jpg'}
        width='400'
      />
      <div className='flex-1 p-4'>
        <div className='space-y-1.5'>
          <h3 className='text-xl font-bold tracking-tighter'>{name}</h3>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            {type} • {doors}
          </p>
          <p className='text-2xl font-bold'>${price.toLocaleString('en-US')}/day</p>
        </div>
      </div>
    </div>
  );
};

export default CarRentalCard;
