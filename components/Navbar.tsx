"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        className="block fixed sm:hidden m-5 right-0 hover:cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </span>
      <div
        className={cn(
          "fixed sm:flex items-center h-full",
          open || "hidden",
          open && "flex"
        )}
      >
        <ul className="bg-zinc-50 border-2 border-zinc-200 w-14 hover:w-28 py-2 m-4 rounded-xl flex flex-col justify-center items-center transition-all group text-xs">
          {children}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
