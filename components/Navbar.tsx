import React from "react";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed flex items-center h-full">
      <ul className="bg-zinc-50 border-2 border-zinc-200 w-14 hover:w-28 py-2 m-4 rounded-xl flex flex-col justify-center items-center transition-all group text-xs">
        {children}
      </ul>
    </div>
  );
};

export default Navbar;
