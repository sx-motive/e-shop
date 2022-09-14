import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addtobag: (state, action) => {
      // debugger;
      const index = state.value.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (index === -1) {
        const obj = { ...action.payload, qty: 1 };
        state.value.push(obj);
      } else {
        state.value[index].qty++;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtobag } = bagSlice.actions;

export default bagSlice.reducer;
