import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-black/80 text-slate-500 bg-opacity-60 p-4 md:px-10 flex justify-between items-center w-full top-0 z-50  fixed">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-2" />
        <div className="font-bold text-red-600 text-2xl">DOMPYONG KULON</div>
      </div>
      <nav className={`absolute md:relative top-full md:top-0 left-0 px-5 w-full md:w-auto text-white ${showMenu ? "block" : "hidden"} md:block md:flex md:space-x-12 bg-transparent`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12 md:w-auto">
          <li className="border-b-2 border-transparent hover:border-red-600">
            <a href="#" className="text-white">
              Beranda
            </a>
          </li>
          <li className="border-b-2 border-transparent hover:border-red-600">
            <a href="#" className="text-white">
              Profile Desa
            </a>
          </li>
          <li className="border-b-2 border-transparent hover:border-red-600">
            <a href="#" className="text-white">
              Infograsi
            </a>
          </li>
          <li className="border-b-2 border-transparent hover:border-red-600">
            <a href="#" className="text-white">
              Gallery
            </a>
          </li>
          <li className="border-b-2 border-transparent hover:border-red-600">
            <a href="#" className="text-white hover:text-gray-300">
              Berita
            </a>
          </li>
        </ul>
      </nav>
      <button className="text-white hover:text-gray-300 border-white md:hidden text-2xl" onClick={toggleMenu}>
        {showMenu ? <IoClose /> : <IoMenu />}
      </button>
    </header>
  );
};

export default Header;
