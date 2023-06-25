import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
import { FurnitureType } from '@/app/types/furnitureTypes';

const Furniture: FC<FurnitureType> = (furniture: FurnitureType) => {
  const image = furniture.Device_Images.map((el) => el.path);

  return (
      <main>
        <div className='container'>
          <Link href={`/furniture/${furniture.id}`}>
            <Image src={`http://localhost:4000/${image[0]}`} alt="" width={400} height={400}/>
          </Link>
          <h1>{`${furniture.price} руб`}</h1>
          <h2>{furniture.description}</h2>
        </div>
      </main>
  );
};

export default Furniture;