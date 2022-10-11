import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { isOpen: false, data: {} },
};

export const productViewSlice = createSlice({
  name: "productView",
  initialState,
  reducers: {
    setProductView: (state, action) => {
      state.value.data = action.payload;
      state.value.isOpen = true;
    },
    clearProductView: (state) => {
      state.value.data = {};
      state.value.isOpen = false;
    },
  },
});

export const { setProductView, clearProductView } = productViewSlice.actions;
export default productViewSlice.reducer;
