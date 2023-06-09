import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper';
import furnitureSlice from './furnitureSlice/furnitureSlice';


const makeStore = () => {
  return configureStore({
    reducer: {
      furnitures: furnitureSlice
    },
  })
}

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof makeStore>;
export type RooState = ReturnType<RootStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RooState, unknown, Action<string>>;

export const wrapper = createWrapper<RootStore>(makeStore, {debug: true});