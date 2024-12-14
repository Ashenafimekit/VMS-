import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Body from "../components/Body";

const Dashboard = () => {
  return (
    <div className="flex flex-row bg-[#F7F8FC] w-full h-full">
      <div className="w-1/12 h-[100vh] ">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5 w-11/12">
        <Topbar/>
        <Body/>
      </div>
    </div>
  );
};

export default Dashboard;
