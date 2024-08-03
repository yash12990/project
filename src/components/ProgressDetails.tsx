import { Dropdown, DropdownButton } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";

function ProgressDetails() {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        
        <h4 className="text-xl font-semibold ">Today's Progress</h4>

        <DropdownButton variant="secondary" title={""}>
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>

      </div>

      <div
        className={`bg-gray-100 h-48 w-[100%] mx-auto my-auto flex gap-x-4 px-2 pt-4`}
      >
        <div className="w-1/5 h-40 bg-white p-3 flex flex-col items-center rounded-lg">
          <h5 className="text-lg font-semibold">Calls Made</h5>
          <p className="text-8xl">54</p>
        </div>
        <div className="w-1/5 h-40 bg-white p-3 flex flex-col items-center rounded-lg">
          <h5 className="text-lg font-semibold">Sales Made</h5>
          <p className="text-8xl">49</p>
        </div>
        <div className="w-1/5 h-40 bg-white p-3 flex flex-col items-center rounded-lg">
          <h5 className="text-lg font-semibold">In Progress</h5>
          <p className="text-8xl">09</p>
        </div>
        <div className="w-1/5 h-40 bg-white p-3 flex flex-col items-center rounded-lg">
          <h5 className="text-lg font-semibold">Total Customers</h5>
          <p className="text-8xl">103</p>
        </div>
        <div className="w-1/5 h-40 bg-white p-3 flex flex-col items-center rounded-lg">
          <h5 className="text-lg font-semibold">Returns</h5>
          <p className="text-8xl">76</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressDetails;
