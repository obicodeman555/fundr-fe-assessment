import {
  DashboardIcon,
  Globe,
  RecordIcon,
  TransferIcon,
  WalletIcon,
  SettingsIcon,
} from "@/assets";
import { type IDashBoardMenu } from "@/helpers/types";

export const dsbMenuData: IDashBoardMenu[] = [
  {
    id: 1,
    name: "get started",
    linkIcon: Globe,
    href: "/dashboard/get-started",
  },
  {
    id: 2,
    name: "dashboard",
    linkIcon: DashboardIcon,
    href: "/dashboard",
  },
  {
    id: 3,
    name: "accounts",
    linkIcon: WalletIcon,
    href: "/dashboard/accounts",
  },
  {
    id: 4,
    name: "transfers",
    linkIcon: TransferIcon,
    href: "/dashboard/transfers",
  },
  {
    id: 5,
    name: "transactions",
    linkIcon: RecordIcon,
    href: "/dashboard/transactions",
  },
  {
    id: 6,
    name: "settings",
    linkIcon: SettingsIcon,
    href: "/dashboard/settings",
  },
];
