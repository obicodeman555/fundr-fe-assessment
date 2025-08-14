import { type JSX } from "react";

export interface IDashBoardMenu {
  id: number;
  name: string;
  linkIcon: () => JSX.Element;
  href: string;
}
