import Link from "next/link";

export const SideNavigation = () => {
  return (
    <nav>
      <Link href={"/dashboard/get-started"}>Get Started</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/dashboard/accounts"}>Accounts</Link>
      <Link href={"/dashboard/transfers"}>Transfers</Link>
      <Link href={"/dashboard/transactions"}>Transactions</Link>
      <Link href={"/dashboard/settings"}>Transactions</Link>
    </nav>
  );
};
