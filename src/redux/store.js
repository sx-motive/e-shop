import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import inputReducer from "./inputSlice";
import filterReducer from "./filterSlice";
import bagReducer from "./bagSlice";
import toggleReducer from "./togglesSlice";
import productViewReducer from "./productViewSlice";

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
