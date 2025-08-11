import { createSlice } from "@reduxjs/toolkit";

export type AppState = {
  theme: "light" | "dark";
};

const initialState: AppState = {
  theme: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export default appSlice.reducer;
