import { configureStore, combineReducers } from "@reduxjs/toolkit";

import globalReducer from "./globalReducer";

const reducers = combineReducers({
  global: globalReducer
});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
