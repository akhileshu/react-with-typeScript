import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from './reducer';   if use createReducer
import countReducer from "./reducer"; //if use createSlice

export const store = configureStore({
  // if only one reducer
  reducer: countReducer,

  //  if multiple reducers
  //  reducer: {
  //   myReducer: countReducer,

  // },
});
