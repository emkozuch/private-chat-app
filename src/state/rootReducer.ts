import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./services";
import { userReducer } from "./slices";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  user: userReducer,
});
