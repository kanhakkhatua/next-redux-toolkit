import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const singleUserSlice = createSlice({
  name: "singleuser",
  initialState,
  reducers: {
    singleUser: (state, action) => {
      //   console.log("action.payload >>> ", action.payload);
      state = action.payload;
      return state;
    },
  },
});

export const { singleUser } = singleUserSlice.actions;
export default singleUserSlice.reducer;
