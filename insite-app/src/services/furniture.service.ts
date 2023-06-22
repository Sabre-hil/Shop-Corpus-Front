export const API_URL = 'http://localhost:4000/api';

export type DeviceImages = {
  id: number,
  path: string,
  furniture_id: number,
  createdAt: string,
  updatedAt: string
}


export interface Ifurniture {
  id: number,
  category: string,
  name: string,
  description: string,
  made: string,
  facade: string,
  price: string,
  discount: boolean,
  price_discount: string,
  size: string,
  tabletop: string,
  createdAt: string,
  updatedAt: string,
  Device_Images: DeviceImages[]
}

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