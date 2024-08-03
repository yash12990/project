import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";

type RootLayoutProps = {
  children: React.ReactNode;
  showSidebar: boolean;
  toggleSidebar: () => void;
};

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  showSidebar,
  toggleSidebar,
}) => {
  return (
    <>
      <div>
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex">
          <SidebarMenu
            showSidebar={showSidebar}
            toggleSidebar={toggleSidebar}
          />
          <main
            className={`transition-all duration-300 pr-4 pt-[11vh]
              ${showSidebar ? "pl-[16vw]" : "pl-20"}
              `}
          >
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
