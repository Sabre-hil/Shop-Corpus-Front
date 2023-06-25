import { FurnitureType } from "@/app/types/furnitureTypes";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface FurnitureSliceState {
  furnitures: FurnitureType[];
  furniture: FurnitureType
}


const initialState: FurnitureSliceState = {
  furnitures: [],
  furniture: {}
};

export const furnitureSlice = createSlice({
  name: "MyFurniture",
  initialState,
  reducers: {
    addFurnitures: (state, action) => {
      state.furnitures = action.payload;
    },
    addOneaddFurniture: (state, action) => {
      state.furniture = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.furnitures,
        ...action.payload.furniture
      };
    },
  },
})

export const { addFurnitures, addOneaddFurniture } = furnitureSlice.actions;

export default furnitureSlice.reducer;