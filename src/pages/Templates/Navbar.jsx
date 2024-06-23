import React from "react";
import { Navbar as NavBar } from "flowbite-react";

const Navbar = () => {
  <NavBar fluid rounded>
    <NavBar.Brand href="https://flowbite-react.com">
      <img
        src="/favicon.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite React Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite React
      </span>
    </NavBar.Brand>
    <NavBar.Toggle />
    <NavBar.Collapse>
      <NavBar.Link href="#" active>
        Home
      </NavBar.Link>
      <NavBar.Link href="#">About</NavBar.Link>
      <NavBar.Link href="#">Services</NavBar.Link>
      <NavBar.Link href="#">Pricing</NavBar.Link>
      <NavBar.Link href="#">Contact</NavBar.Link>
    </NavBar.Collapse>
  </NavBar>;
};

export default Navbar;
