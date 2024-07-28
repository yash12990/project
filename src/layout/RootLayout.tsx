import React, { useState } from "react";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";

interface RootLayoutProps {
  children: React.ReactNode;
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  showSidebar,
  toggleSidebar,
}) => {
  return (
    <div className="flex h-screen">
      <SidebarMenu showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1">
        <Header />
        <main
          className={`transition-all duration-300 pr-2 
            ${showSidebar ? "pl-[10vw]" : "ml-2"}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
