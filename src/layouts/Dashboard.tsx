import { useState } from "react";
import { Outlet } from "react-router";
import { NavContext } from "src/context/NavContext";
import MobileHeader from "./components/MobileHeader";
import SideBar from "./components/Sidebar";

const Dashboard = () => {
  const [open, toggle] = useState(false);
  return (
    <NavContext.Provider value={{ open, toggle }}>
      <MobileHeader />
      <div className="flex relative">
        <SideBar />
        <main className="w-full ml-72 ">
          <div className="flex flex-col p-10 gap-y-8 bg-gray-50 main-container">
            <Outlet />
          </div>
        </main>
      </div>
    </NavContext.Provider>
  );
};
export default Dashboard;
