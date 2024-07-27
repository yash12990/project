import { DiCss3, DiBootstrap } from "react-icons/di";
import { primaryRoutes, routeList } from "../routes/routes";

type Prop = {
  showSidebar: boolean;
};
function SidebarMenu({ showSidebar }: Prop) {
  return (
    <>
      {!showSidebar ? (
        <div className="h-[90vh] w-20 bg-slate-100 flex flex-col justify-between">
          <div className="mx-auto flex flex-col gap-y-6">
            {primaryRoutes.map((route) => (
              <span className="text-4xl cursor-pointer">{route.icon}</span>
            ))}
          </div>

          <div className="p-4">
            <img
              className="rounded-full h-12 w-12 object-cover"
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="ProfileIcon"
            />
          </div>
        </div>
      ) : (
        <div className=" bg-zinc-100 w-[15vw] h-[90vh] overflow-hidden flex flex-col justify-between">
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
                  <span>{route.title}</span>
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
    </>
  );
}

export default SidebarMenu;
