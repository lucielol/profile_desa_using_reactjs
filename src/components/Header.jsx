import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { Button } from "flowbite-react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    }
  };

  return (
    <div>
      <header
        className={`${
          scrolled || showMenu ? "bg-slate-700/90" : "bg-transparent"
        } text-white p-2 md:px-10 flex justify-between items-center w-full top-0 z-50 fixed backdrop-blur-lg`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          <div className="font-bold text-red-600 text-2xl truncate">
            DOMPYONGKULON
          </div>
        </div>
        <nav
          ref={menuRef}
          className={`hidden md:block md:flex md:space-x-12 bg-gray-800/90 md:bg-transparent md:pb-0`}
        >
          <ul className="w-full flex flex-col text-white md:flex-row space-y-2 md:space-y-0 md:space-x-10 md:w-auto items-center">
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("home")}
              >
                Bernda
              </button>
            </li>
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("profile")}
              >
                Profile Desa
              </button>
            </li>
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("infografis")}
              >
                Infografis
              </button>
            </li>
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("gallery")}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("news")}
              >
                Berita
              </button>
            </li>
            <li>
              <NavLink to="/login">
                <Button color="blue" size="sm">
                  Login
                </Button>
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
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } fixed inset-0 top-[4.51rem] bg-slate-700/90 backdrop-blur-lg z-40`}
      >
        <div className="flex flex-col p-7 h-full overflow-hidden">
          <ul className="flex flex-col text-white space-y-2">
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("home")}
              >
                Bernda
              </button>
            </li>
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("profile")}
              >
                Profile Desa
              </button>
            </li>
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("infografis")}
              >
                Infografis
              </button>
            </li>
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("gallery")}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                className="w-full text-left border-b-2 border-transparent hover:border-red-600"
                onClick={() => scrollTo("news")}
              >
                Berita
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
