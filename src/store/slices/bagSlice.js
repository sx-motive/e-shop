import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { total: 0, items: [] },
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addtobag: (state, action) => {
      // debugger;
      const index = state.value.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (index === -1) {
        const obj = { ...action.payload, qty: 1 };
        state.value.items.push(obj);
      } else {
        state.value.items[index].qty++;
      }

      let newBag = [];
      newBag = state.value.items.map((product) => {
        let price;
        price = product.price.replace(/\s+/g, "");
        return parseInt(price) * product.qty;
      });
      state.value.total = newBag.reduce((a, b) => a + b, 0);
    },
    lessbag: (state, action) => {
      const index = state.value.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (index === -1) {
        return;
      } else {
        if (state.value.items[index].qty >= 2) {
          state.value.items[index].qty--;
        } else {
          return;
        }
      }
      let newBag = [];
      newBag = state.value.items.map((product) => {
        let price;
        price = product.price.replace(/\s+/g, "");
        return parseInt(price) * product.qty;
      });
      state.value.total = newBag.reduce((a, b) => a + b, 0);
    },
    removebag: (state, action) => {
      const index = state.value.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (index === -1) {
        return;
      } else {
        state.value.items.splice(index, 1);
      }

      let newBag = [];
      newBag = state.value.items.map((product) => {
        let price;
        price = product.price.replace(/\s+/g, "");
        return parseInt(price) * product.qty;
      });
      state.value.total = newBag.reduce((a, b) => a + b, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtobag, lessbag, removebag } = bagSlice.actions;

export default bagSlice.reducer;
