import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

function UserLogin() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex flex-row w-full">
        <Sidebar />
        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
