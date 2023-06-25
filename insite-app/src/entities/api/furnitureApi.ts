export const API_URL = 'http://localhost:4000/api';

  // const responce = await fetch(`${API_URL}/furniture`);
  // const furnitures = await responce.json();

export const furnitureService = {
  async getAllfurniture() {
    const responce = await fetch(`${API_URL}/furniture`);
    const data = await responce.json();
    return data;
  },
  
  // async getById(id:string) {
  //   const { data } = await  axios.get<IUser[]>('/users', {
  //     params: {
  //       id
  //     }
  //   });
  //   return data;
  // }
}