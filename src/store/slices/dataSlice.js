import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
