import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Dashboard
        </h2>
      </div>
      <nav className="mt-8">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/header/edit"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Edit Header
            </NavLink>
          </li>
          <li>
            <a
              href="#settings"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
