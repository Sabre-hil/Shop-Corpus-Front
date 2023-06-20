import { FC } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css';
import Layout from '../layout/Layout';

const Home: FC = () => {
  return (
      <Layout>
        <h1>Hi guys</h1>
      </Layout>
  );
};

export default Home