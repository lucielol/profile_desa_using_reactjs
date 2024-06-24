import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const App = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </>
  );
};

export default App;
