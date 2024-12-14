import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Topbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-white py-5 px-10 shadow-lg w-auto">
      <div className=""></div>
      <div className="text-lg font-bold">
        <span className="mr-2">
          <LocalShippingIcon sx={{ color: "#00CA80", fontSize: "30px" }} />
        </span>
        Vehicl Management System
      </div>
      <div className=" flex flex-row gap-5 ">
        <NotificationsNoneIcon className="cursor-pointer" />
        <AccountCircleIcon className="cursor-pointer" />
        <MoreVertIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;
