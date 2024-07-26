import React from "react";
import { Button } from "flowbite-react";

const Navbar = ({ children }) => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 z-10">
      <div>
        <h1 className="text-xl font-bold">{children}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <a href="/logout">
          <Button color="failure">Logout</Button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
