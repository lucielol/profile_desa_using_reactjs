import React from "react";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
      <div>
        <h1 className="text-xl font-bold">{children}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <NavLink to="/logout">
          <Button color="failure">Logout</Button>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
