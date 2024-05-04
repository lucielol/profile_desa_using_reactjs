import React from "react";

const Header = () => {
  return (
    <header className="bg-white/20 text-slate-500 bg-opacity-60 p-4 px-10 flex justify-between items-center w-full top-0 z-50 fixed backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]">
      <div className="text-white font-bold text-xl">Logo</div>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
        <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
        <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
        <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;
