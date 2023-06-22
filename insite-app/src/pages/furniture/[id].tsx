import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { API_URL, furnitureService } from '../../services/furniture.service';
import { IfurnitureDataSingle } from '../../components/home/Home';
import FurnitureDetail from '@/components/furniture-details/FurnitureDetail';

interface Params extends ParsedUrlQuery {
  id: string;
}

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

export const getStaticProps: GetStaticProps = async ({params}) => {
  const response = await fetch(`${API_URL}/furniture/${params?.id}`);
  const furniture = await response.json()
  return {
    props: { furniture },
    revalidate: 60
  }
}


const FurnitureDetailPage: NextPage<IfurnitureDataSingle> = ({furniture}) => {
  return (
    <FurnitureDetail furniture={furniture}/>
  )
}

export default FurnitureDetailPage;