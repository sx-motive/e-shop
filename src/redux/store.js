import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import inputReducer from "./inputSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    input: inputReducer,
    filter: filterReducer,
  },
});
