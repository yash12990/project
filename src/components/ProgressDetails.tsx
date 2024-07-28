import { IoMdArrowDropdown } from "react-icons/io";

function ProgressDetails() {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold ">Today's Progress</h4>
        <button className="bg-gray-300 w-20 max-h-7 rounded-md pr-2 hover:bg-gray-400 hover:text-white">
          <IoMdArrowDropdown className="ml-auto text-2xl" />
        </button>
      </div>

      <div
        className={`bg-gray-100 h-48 w-[100%] mx-auto mt-3 flex gap-x-4 px-2 pt-4`}
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
