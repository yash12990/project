import { useState } from "react";

function UrgentActionsItem() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetailsDropdown = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="px-3 my-2 w-full">
      <div
        onClick={toggleShowDetailsDropdown}
        className="border p-3 space-y-2 bg-white hover:bg-slate-50 rounded-lg"
      >
        <section className="flex gap-x-2">
          <p className="font-semibold">Context:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>

        <section className="flex justify-between items-center">
          <div className="flex gap-x-2">
            <p className="font-semibold">Preferred Action: </p>
            <p>Accept</p>
          </div>
          <div className="space-x-3">
            <button className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-lg text-white font-semibold">
              Accept
            </button>
            <button className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded-lg text-white font-semibold">
              Reject
            </button>
          </div>
        </section>
      </div>
      {showDetails && (
        <div className="mx-4 mt-[-1px]">
          <div className="border p-3 space-y-2 bg-slate-50 rounded-b-xl border-none">
            <p className="font-semibold">Additional Details:</p>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </div>
        </div>
      )}
    </div>
  );
}

export default UrgentActionsItem;
