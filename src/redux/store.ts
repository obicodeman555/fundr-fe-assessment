import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer, { type AppState } from "./slices/appSlice";

export interface RootState {
  app: AppState;
}

const rootReducer = combineReducers({
  app: appReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
