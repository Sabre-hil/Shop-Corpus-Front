import { FC } from 'react';
import { IfurnitureDataSingle } from '../home/Home';
import Layout from '../layout/Layout';

const FurnitureDetail: FC<IfurnitureDataSingle> = ({furniture}) => {
  return (
    <>
      <h1>{furniture.name}</h1>
      <h1>{furniture.description}</h1>
      <h1>{furniture.category}</h1>
      <h1>{furniture.made}</h1>
      <h1>{furniture.price}</h1>
      <h1>{furniture.facade}</h1>
      </>
  );
};

export default FurnitureDetail