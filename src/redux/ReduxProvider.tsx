"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { type ReactNode } from "react";

export default function ReduxProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <Provider store={store}>{children}</Provider>;
}
