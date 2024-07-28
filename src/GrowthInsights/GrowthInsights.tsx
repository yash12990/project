import Chart1 from "./Chart1";
import { Dropdown, DropdownButton } from "react-bootstrap";

function GrowthInsights() {
  return (
    <div className="p-2 rounded-lg bg-gray-100 w-[35%]">
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold">Growth Insights</h4>
        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton> */}
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-2 py-2">
        <Chart1 />
        <Chart1 />
        <Chart1 />
        <Chart1 />
        <Chart1 />
        <Chart1 />
      </div>
    </div>
  );
}

export default GrowthInsights;
