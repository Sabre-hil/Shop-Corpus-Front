import App from "@/app/App";
import { API_URL } from "@/entities/api/furnitureApi";
import { GetStaticProps, NextPage } from "next"
import { wrapper } from '../app/store/store';
import { addFurnitures } from '@/app/store/furnitureSlice/furnitureSlice';

const HomePage: NextPage = () => {
  return <App />
}

export default HomePage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
  const responce = await fetch(`${API_URL}/furniture`);
  const furnitures = await responce.json();
  // const furnitures = await furnitureService.getAllfurniture();
  store.dispatch(addFurnitures(furnitures))
  const a = store.getState()
  
  return {
    props: {},
    revalidate: 60
  }
  } catch (error) {
    console.log(error)
    return {
      props : {},
    }
  }
})