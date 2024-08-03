import React from 'react';
import { FaBars } from "react-icons/fa6";
import Search from "./Search/Search";

type Prop = {
  toggleSidebar: () => void;

}

const Header:  React.FC<Prop> = ({ toggleSidebar }) => {
  return (
    <header className="fixed left-0 right-0 top-0 flex gap-x-5 py-3 px-6 h-[10vh] bg-slate-100 items-center">
      <FaBars
        className="text-2xl cursor-pointer"
        onClick={toggleSidebar}
      />
      <div className="pl-16">
        <h1 className="text-2xl cursor-pointer hidden sm:block">
          Company Name
        </h1>
      </div>
      <div className="sm:ml-auto">
        <Search />
      </div>
    </header>
  );
};

export default Header;
