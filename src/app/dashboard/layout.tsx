import { type ReactNode } from "react";
import { SideNavigation, Header } from "./components";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dsbLayout">
      <Header />
      <main className="dsbLayout__main">
        <SideNavigation className="dsbLayout__sideBar" />
        <div className="dsbLayout__content">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
