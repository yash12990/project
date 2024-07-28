import { useState } from "react";
import "./App.css";
import ProgressDetails from "./components/ProgressDetails";
import RootLayout from "./layout/RootLayout";
import UrgentActions from "./components/UrgentActions/UrgentActions";
import GrowthInsights from "./GrowthInsights/GrowthInsights";

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <RootLayout showSidebar={showSidebar} toggleSidebar={toggleSidebar}>
      <div className="p-3 flex flex-col gap-y-5">
        <h3 className="text-2xl font-semibold">Hello Username,</h3>
        <ProgressDetails />
        <div className="flex justify-between">
          <UrgentActions />
          <GrowthInsights />
        </div>
      </div>
    </RootLayout>
  );
}

export default App;
