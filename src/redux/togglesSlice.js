import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { isBagOpen: false, isMenuOpen: false },
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleBag: (state) => {
      state.value.isBagOpen = !state.value.isBagOpen;
    },
    toggleMenu: (state) => {
      state.value.isMenuOpen = !state.value.isMenuOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleBag, toggleMenu } = toggleSlice.actions;

export default toggleSlice.reducer;
