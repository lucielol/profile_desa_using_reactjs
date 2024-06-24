import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
      <div>
        <h1 className="text-xl font-bold">{children}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
