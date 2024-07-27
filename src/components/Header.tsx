import { FaBars } from "react-icons/fa6";
import Search from "./Search/Search";

type Prop = {
  toggleSidebar: () => void;
};
function Header({ toggleSidebar }: Prop) {
  return (
    <header className="flex gap-x-5 py-3 px-6 h-[10vh] w-full bg-slate-100 items-center">
      <FaBars
        className="text-2xl cursor-pointer"
        onClick={toggleSidebar}
      />

      <div>
        <h1 className="text-2xl cursor-pointer hidden sm:block">Company Name</h1>
      </div>

      <div className="sm:ml-[30%]">
        <Search />
      </div>
    </header>
  );
}

export default Header;
