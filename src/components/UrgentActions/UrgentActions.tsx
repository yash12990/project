import UrgentActionsItem from "./UrgentActionsItem";

function UrgentActions() {
    
  return (
    <div className="mt-4 flex flex-col gap-y-3 w-[60%]">
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <h4 className="text-xl font-semibold">Urgent Actions</h4>
          <p className="text-xl font-">(12)</p>
        </div>

        <button className="text-blue-600 hover:text-blue-500 hover:underline">
          See all
        </button>
      </div>

      <div className="bg-gray-100">
        <UrgentActionsItem />
        <UrgentActionsItem />
      </div>
    </div>
  );
}

export default UrgentActions;
