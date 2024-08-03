import React from "react";

function Billing() {
  return (
    <div className="bg-gray-100 w-[20%] max-h-80 p-3 text-center space-y-5 rounded-lg">

      <h4>Billing</h4>

      <div className="flex flex-wrap gap-x-4 gap-y-4">
        <div className="w-28 h-28 rounded-lg p-2 shadow-xl bg-white">
          <p className="font-semibold text-lg">Call</p>
          <p className="text-3xl text-green-500">$20</p>
        </div>
        <div className="w-28 h-28 rounded-lg p-2 shadow-xl bg-white">
          <p className="font-semibold text-lg">Call</p>
          <p className="text-3xl text-green-500">$20</p>
        </div>
        <div className="w-28 h-28 rounded-lg p-2 shadow-xl bg-white">
          <p className="font-semibold text-lg">Call</p>
          <p className="text-3xl text-green-500">$20</p>
        </div>
        <div className="w-28 h-28 rounded-lg p-2 shadow-xl bg-white">
          <p className="font-semibold text-lg">Call</p>
          <p className="text-3xl text-green-500">$20</p>
        </div>
        
      </div>

    </div>
  );
}

export default Billing;
