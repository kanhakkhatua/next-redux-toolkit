import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log("action.payload add user >>> ", action.payload);
      state = action.payload;
      return state;
    },
    deleteUser: (state, action) => {
      // console.log("action.payload >>> ", action.payload);
      let arr = state;
      arr.splice(action.payload, 1);
      state = arr;
      return state;
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
