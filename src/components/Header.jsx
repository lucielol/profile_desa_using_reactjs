import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`bg-slate-900/90 text-slate-500 bg-opacity-60 p-4 md:px-10 flex justify-between items-center w-full top-0 z-50 fixed ${showMenu ? 'border-0' : 'border-b border-slate-700/70'}`}>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-2" />
        <div className="font-bold text-slate-400 text-2xl">DOMPYONG KULON</div>
      </div>
      <nav
        className={`absolute md:relative top-full md:top-0 left-0 px-5 w-full md:w-auto text-white ${
          showMenu ? "block" : "hidden"
        } md:block md:flex md:space-x-12 bg-slate-900/90 md:bg-transparent pb-5 md:pb-0 transition-opacity duration-300`}
        style={{ opacity: showMenu ? 1 : 0 }}
      >
        <ul className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12 md:w-auto">
          <li className="border-b-2 border-transparent hover:border-red-600">
            <NavLink to="#cok" className="text-white inline-block w-full">
              Beranda
            </NavLink>
          </li>
          <li className="border-b-2 border-transparent hover:border-red-600">
            <NavLink to="#" className="text-white inline-block w-full">
              Profile Desa
            </NavLink>
          </li>
          <li className="border-b-2 border-transparent hover:border-red-600">
            <NavLink to="#" className="text-white inline-block w-full">
              Infograsi
            </NavLink>
          </li>
          <li className="border-b-2 border-transparent hover:border-red-600">
            <NavLink to="#" className="text-white inline-block w-full">
              Gallery
            </NavLink>
          </li>
          <li className="border-b-2 border-transparent hover:border-red-600">
            <NavLink to="#" className="text-white inline-block w-full">
              Berita
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="text-white hover:text-gray-300 border-white md:hidden text-2xl"
        onClick={toggleMenu}
      >
        {showMenu ? <IoClose /> : <IoMenu />}
      </button>
    </header>
  );
};

export default Header;
