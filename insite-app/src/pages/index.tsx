import Home, { IfurnitureData } from "@/components/home/Home";
import { GetStaticProps, NextPage } from "next"
import { API_URL, furnitureService, Ifurniture } from '../services/furniture.service';

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
