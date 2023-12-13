import React, { useContext } from "react";
import "./Menu.scss";
import MenuIcon from "../../images/menu-icon.png";
import { AppContext } from "../../helpers/ContextApi/AppContext";

const Menu = () => {
  const { menuOpen, toggleMenu } = useContext(AppContext);
  return (
    <div onClick={toggleMenu}  className="menu">
      <img src={MenuIcon} alt="MenuIcon" />
      {!menuOpen ? (
        <div className="menuText">
          <span>M</span>
          <span>e</span>
          <span>n</span>
          <span>u</span>
        </div>
      ) : (
        <div className="menuText">
          <span>C</span>
          <span>l</span>
          <span>o</span>
          <span>s</span>
          <span>e</span>
        </div>
      )}
    </div>
  );
};

export default Menu;
