import { FC } from 'react';
import Layout from '../layout/Layout';
import { API_URL } from '../entities/api/furnitureApi';
import Furniture from '../components/furniture/Furniture';
import { GetStaticProps } from 'next';
import { useTypedSelector } from '../shared/lib/useTypedSelector';

const App: FC = () => {
  const data = useTypedSelector((state) => state.furnitures.furnitures)

  return (
      <Layout title='INSITE | Лучшая мебель'>
        {data?.length ? data.map(furniture => <Furniture key={furniture?.id} {...furniture}/>) : <div>Users not found</div>}
      </Layout>
  );
};

export default App;

export const getStaticProps: GetStaticProps = async () => {
  const responce = await fetch(`${API_URL}/furniture`);
  const furnitures = await responce.json();

  return {
    props: { furnitures },
    revalidate: 60
  }
}