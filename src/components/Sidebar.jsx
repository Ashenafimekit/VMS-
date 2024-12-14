import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

const Sidebar = () => {
  return (
    <div
      className={` flex flex-col gap-20 h-[100vh] bg-customBlue text-white px-10 `}
    >
      <div className="">
        <button>
          <MenuIcon className="font-bold " fontSize="large" />
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <h1>
          <AirportShuttleIcon
            className=" p-2 rounded-md shadow-lg hover:bg-customGreen "
            sx={{ fontSize: "50px" }}
          />
        </h1>
        <h1>
          <CarCrashIcon
            className=" p-2 rounded-md shadow-lg hover:bg-customGreen "
            sx={{ fontSize: "50px" }}
          />
        </h1>
        <h1>
          <LocalCarWashIcon
            className=" p-2 rounded-md shadow-lg hover:bg-customGreen "
            sx={{ fontSize: "50px" }}
          />
        </h1>
        <h1>
          <ElectricCarIcon
            className=" p-2 rounded-md shadow-lg hover:bg-customGreen "
            sx={{ fontSize: "50px" }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
