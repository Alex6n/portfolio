import { LucideIcon } from "lucide-react";
import React from "react";

const NavItem = ({
  Icon,
  children,
}: {
  Icon: LucideIcon;
  children: React.ReactNode;
}) => {
  return (
    <li className="hover:bg-zinc-300 hover:cursor-pointer w-full py-4 transition-colors text-zinc-800 inline-flex gap-1 justify-center items-center group-hover:justify-start group-hover:px-5">
      <Icon className="w-4 h-4" />
      <p className="hidden group-hover:block">{children}</p>
    </li>
  );
};

export default NavItem;
