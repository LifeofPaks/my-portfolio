import React from "react";
import './Navbar.scss'
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return <nav>
    <Logo/>
    <Menu/>
  </nav>;
};

export default Navbar;
