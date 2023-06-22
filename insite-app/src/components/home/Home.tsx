import { FC } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css';
import Layout from '../layout/Layout';
import { Ifurniture } from '../../services/furniture.service';
import Furniture from '../furniture/Furniture';

export interface IfurnitureData {
  furnitures: Ifurniture[]
}

export interface IfurnitureDataSingle {
  furniture: Ifurniture
}

const Home: FC<IfurnitureData> = ({furnitures}) => {

  return (
      <Layout title='INSITE | Лучшая мебель'>
        {furnitures.length ? furnitures.map(furniture => <Furniture key={furniture.id} furniture={furniture}/>) : <div>Users not found</div>}
      </Layout>
  );
};

export default Home