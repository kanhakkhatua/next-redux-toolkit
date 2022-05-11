import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import singleuser from "./singleDataSlice";
import users from "./userSlice";

const combinedReducer = combineReducers({
  users,
  singleuser,
});

export const makeStore = () => {
  return configureStore({
    reducer: combinedReducer,
  });
};

export const wrapper = createWrapper(makeStore);
