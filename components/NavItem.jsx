import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FilePlus } from "lucide-react";

const NavItem = ({ label, routPath, icon }) => {
  const pathname = usePathname();
  //   const isActive = pathname === routPath;
  //   console.log(isActive);
  return (
    <div
      key={1}
      className={`my-2 text-white font-normal flex space-x-3 items-center rounded-md p-2 hover:bg-blue-400 text-md ${
        pathname === routPath && "bg-blue-500 shadow-sm"
      }`}
    >
      {icon}
      <Link href={routPath}>
        <h1>{label}</h1>
      </Link>
    </div>
  );
};

export default NavItem;
