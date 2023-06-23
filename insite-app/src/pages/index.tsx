import Home, { IfurnitureData } from "@/components/home/Home";
import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import { API_URL, furnitureService, Ifurniture } from '../services/furniture.service';
import wrapper from './_app';

const HomePage: NextPage<IfurnitureData> = ({furnitures}) => {
  return <Home furnitures={furnitures} />
}

export const getStaticProps: GetStaticProps = async () => {
  const responce = await fetch(`${API_URL}/furniture`);
  const furnitures = await responce.json();

  return {
    props: { furnitures },
    revalidate: 60
  }
}

export default HomePage;
