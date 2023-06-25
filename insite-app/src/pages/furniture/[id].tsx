import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { API_URL, furnitureService } from '../../entities/api/furnitureApi';
import FurnitureDetail from '@/components/furniture-details/FurnitureDetail';
import { FurnitureType } from '@/app/types/furnitureTypes';
import { wrapper } from '@/app/store/store';
import { addOneaddFurniture } from '@/app/store/furnitureSlice/furnitureSlice';

interface Params extends ParsedUrlQuery {
  id: string;
}

const FurnitureDetailPage: NextPage = () => {
  return (
    <FurnitureDetail/>
  )
}

export default FurnitureDetailPage;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const furnitures = await furnitureService.getAllfurniture();

  return {
    paths: furnitures.map((furniture: { id: string; }) => ({
      params: {
        id: String(furniture.id),
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps((store) => async ({params}) => {
  try {
    const response = await fetch(`${API_URL}/furniture/${params?.id}`);
    const furniture = await response.json();
    store.dispatch(addOneaddFurniture(furniture));
    return {
      props: {},
      revalidate: 60
    }
  } catch (error) {
    console.log(error)
    return {
      props: {}
    }
  }
})