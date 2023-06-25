import { FurnitureType } from '@/app/types/furnitureTypes';
import { FC } from 'react';
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import Meta from '../seo/Meta';
import { useTypedSelector } from '../../shared/lib/useTypedSelector';

const FurnitureDetail: FC = () => {
  const furniture = useTypedSelector((state) => state.furnitures.furniture)
  return (
    <Meta title={furniture.name} description={furniture.description}>
      <Header/>
      <h1>{furniture?.name}</h1>
      <h1>{furniture?.description}</h1>
      <h1>{furniture?.category}</h1>
      <h1>{furniture?.made}</h1>
      <h1>{furniture?.price}</h1>
      <h1>{furniture?.facade}</h1>
      <Footer/>
      </Meta>
  );
};

export default FurnitureDetail