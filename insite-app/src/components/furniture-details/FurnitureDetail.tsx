import Head from 'next/head';
import { FC } from 'react';
import { IfurnitureDataSingle } from '../home/Home';
import Activities from '../layout/activities/Activities';
import ArticlesFront from '../layout/articles-front/ArticlesFront';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import Layout from '../layout/Layout';
import Meta from '../seo/Meta';

const FurnitureDetail: FC<IfurnitureDataSingle> = ({furniture}) => {
  return (
    <Meta title={furniture.name} description={furniture.description}>
      <Header/>
      <h1>{furniture.name}</h1>
      <h1>{furniture.description}</h1>
      <h1>{furniture.category}</h1>
      <h1>{furniture.made}</h1>
      <h1>{furniture.price}</h1>
      <h1>{furniture.facade}</h1>
      <Footer/>
      </Meta>
  );
};

export default FurnitureDetail