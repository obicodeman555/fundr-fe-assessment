import { type ReactNode } from "react";
import { SideNavigation, Header } from "./components";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>
        <SideNavigation />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
