import { Bell, Caret, Logo } from "@/assets";

export const Header = () => {
  return (
    <header className="mainHeader">
      <div className="mainHeader__inner">
        <Logo />
        <div className="mainHeader__right">
          <Bell />
          <button className="mainHeader__profile">
            <span className="mainHeader__profileInitials">ob</span>
            <Caret />
          </button>
        </div>
      </div>
    </header>
  );
};
