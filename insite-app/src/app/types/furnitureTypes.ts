import { DeviceImages } from "./deviceImageType";



export interface FurnitureType {
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