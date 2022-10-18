import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import inputReducer from "./slices/inputSlice";
import filterReducer from "./slices/filterSlice";
import bagReducer from "./slices/bagSlice";
import toggleReducer from "./slices/togglesSlice";
import productViewReducer from "./slices/productViewSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    input: inputReducer,
    filter: filterReducer,
    bag: bagReducer,
    toggle: toggleReducer,
    productView: productViewReducer,
  },
});
