import React from "react";
import Sidebar from "./Sidebar";

import Content from "./Content";

function Header() {
  return (
    <div>
      <div className="w-full bg-black sticky t">
        <nav className="flex w-[1300px] items-center justify-between m-auto  ">
          <div className="flex items-center">
            <img
              className="w-20 rounded-full h-20 border-2 border-white"
              src="https://img.freepik.com/free-photo/man-cook-holds-pan-with-vegetables-flying-air_613910-10115.jpg?semt=ais_rp_50_assets&w=740&q=80"
              alt=""
            />
            <p className="text-white ">Dashbord</p>
          </div>
          <input
            type="text"
            placeholder="search by item name..."
            className="text-white border-blue-300 border-2 rounded-sm px-2"
          />
        </nav>
      </div>

      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default Header;
