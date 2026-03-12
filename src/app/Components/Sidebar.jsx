import React from "react";

function Sidebar() {
  return (
    <div className="bg-gray-600 w-70 h-screen ">
        <h3 className="text-white">MENU</h3>
      <div className="">
        <h3 className="border-2 w-[80%] rounded-sm bg-gray-800 px-1 py-2 m-auto text-white border-none">
          OverView
        </h3>
        <h3 className="border-2 w-[80%] rounded-sm bg-gray-800 px-1 py-2 m-auto mt-2 text-white border-none">
          Items
        </h3>
        <h3 className="border-2 w-[80%] rounded-sm bg-gray-800 px-1 py-2 m-auto mt-2 text-white border-none">
          Order
        </h3>
        <h3 className="border-2 w-[80%] rounded-sm bg-gray-800 px-1 py-2 m-auto mt-2 text-white border-none">
          Customer
        </h3>
        <h3 className="border-2 w-[80%] rounded-sm bg-gray-800 py-2 px-1 m-auto mt-2 text-white border-none">
          Setting
        </h3>
      </div>
    </div>
  );
}

export default Sidebar;
