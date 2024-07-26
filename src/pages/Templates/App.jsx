import React from "react";
import Sidebar from "./Sidebar";

const App = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64 mt-20">{children}</div>
      </div>
    </>
  );
};

export default App;
