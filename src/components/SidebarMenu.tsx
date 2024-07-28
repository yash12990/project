import { primaryRoutes, routeList } from "../routes/routes";
import { FaBars } from "react-icons/fa6";

type Prop = {
  showSidebar: boolean;
  toggleSidebar: () => void;
};
function SidebarMenu({ showSidebar, toggleSidebar }: Prop) {
  return (
    <div className="py-3 h-[100%] w-20 bg-slate-100">
      <FaBars
        className="text-2xl ml-7 mt-5 cursor-pointer"
        onClick={toggleSidebar}
      />
      {!showSidebar ? (
        <div className="flex h-[calc(100vh-48px)] w-full flex-col justify-between py-3">
          <div className="mx-auto flex flex-col gap-y-7 pt-8">
            {primaryRoutes.map((route) => (
              <span className="text-4xl cursor-pointer">{route.icon}</span>
            ))}
          </div>

          <img
            className="rounded-full h-12 w-12 object-fit mb-5 mx-auto"
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="ProfileIcon"
          />
        </div>
      ) : (
        <div className="bg-zinc-100 w-[15vw] h-[calc(100vh-10vh)] flex flex-col justify-between mt-[4vh] z-[9999]">
          <div>
            {routeList.map((route) => (
              <div>
                <a
                  href={route.url}
                  className={
                    "flex gap-x-4 px-7 py-3 border-b-[0.5px] border-b-black hover:bg-zinc-200 transition duration-200"
                  }
                >
                  <span className="text-2xl">{route.icon}</span>
                  <span className="hidden md:block">{route.title}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center px-3 gap-x-3 py-4 hover:bg-zinc-200 transition duration-300">
            <img
              className="rounded-full h-16 w-16 object-cover"
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="ProfileIcon"
            />
            <div>
              <p className="text-sm text-gray-700">Username</p>
              <p className="text-xs text-gray-500">Id: 023A</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarMenu;
