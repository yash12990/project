import { useState } from "react";
import "./App.css";
import ProgressDetails from "./components/ProgressDetails";
import RootLayout from "./layout/RootLayout";
import UrgentActions from "./components/UrgentActions/UrgentActions";
import GrowthInsights from "./GrowthInsights/GrowthInsights";
import CalendarComponent from "./components/Calender";
import Billing from "./components/Billing";

function App() {
  const events = [
    {
      title: "Meeting with Client",
      start: new Date(2024, 6, 28, 10, 0), // July 28, 2024, 10:00 AM
      end: new Date(2024, 6, 28, 11, 0), // July 28, 2024, 11:00 AM
    },
    {
      title: "Lunch Break",
      start: new Date(2024, 6, 28, 13, 0), // July 28, 2024, 1:00 PM
      end: new Date(2024, 6, 28, 14, 0), // July 28, 2024, 2:00 PM
    },
  ];
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <RootLayout showSidebar={showSidebar} toggleSidebar={toggleSidebar}>
      <div className="flex flex-col gap-y-5">
        <h3 className="text-2xl font-semibold">Hello Username,</h3>

        <ProgressDetails />

        <div className="flex justify-between">
          <UrgentActions />
          <GrowthInsights />
        </div>

        <div className="flex gap-x-5 items-center">
          <CalendarComponent events={events} />
          <Billing />
        </div>
      </div>
    </RootLayout>
  );
}

export default App;
