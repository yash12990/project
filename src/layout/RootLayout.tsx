import React, { useState } from "react";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";

function RootLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <SidebarMenu showSidebar={showSidebar} />
    </>
  );
}

export default RootLayout;
