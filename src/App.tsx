import { useState } from "react";
import "./App.css";
import ProgressDetails from "./components/ProgressDetails";
import RootLayout from "./layout/RootLayout";

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <RootLayout showSidebar={showSidebar} toggleSidebar={toggleSidebar}>
      <div className="p-3">
        <h3 className="text-2xl font-semibold">Hello Username,</h3>
        <ProgressDetails showSidebar={showSidebar} />
      </div>
    </RootLayout>
  );
}

export default App;
