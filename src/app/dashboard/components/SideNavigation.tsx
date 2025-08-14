"use client";
import Link from "next/link";
import { dsbMenuData } from "@/app/utils";
import { usePathname } from "next/navigation";

export const SideNavigation = ({ className }: { className: string }) => {
  const pathname = usePathname();

  return (
    <nav className={`${className} sideBar__nav`}>
      <ul>
        {dsbMenuData.map((menuItem) => {
          const MenuIcon = menuItem.linkIcon;
          const isActive = pathname === menuItem.href;
          return (
            <li key={menuItem.id}>
              <Link
                href={menuItem.href}
                className={isActive ? "active-menu" : ""}
              >
                <MenuIcon />
                <span>{menuItem.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
