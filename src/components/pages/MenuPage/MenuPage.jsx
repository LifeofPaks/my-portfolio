import React, { useContext } from "react";
import "./MenuPage.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../../helpers/ContextApi/AppContext";


const MenuPage = () => {
const {menuOpen} = useContext(AppContext)
  return (
    <div className={`menuPage ${menuOpen ? 'show' : ''}`}>
      <div className="navLinks">
        <div className="linksWrapper">
        <Link to="/">
          <h1 className="link">
            01. <span>Home</span>
          </h1>
        </Link>
        <Link to="/about">
          <h1 className="link">
            02. <span>About</span>
          </h1>
        </Link>
        <Link to="/portfolio">
          <h1 className="link">
            03. <span>Portfolio</span>
          </h1>
        </Link>
        <Link to="/contact">
          <h1 className="link">
            04. <span>Contact</span>
          </h1>
        </Link>
        <Link to="/resume">
          <h1 className="link">
            05. <span>Resume</span>
          </h1>
        </Link>
        </div>
     
      </div>

      <ul className="contactInfo">
        <li>
          <p>
            PHONE:
            <a href="tel:+2348136023093">
              <span>+234 8136023093</span>
            </a>
          </p>
        </li>
        <li>
          <p>
            LOCATION: <span>Abuja, Nigeria</span>
          </p>
        </li>
        <li>
          <p>
            EMAIL:
            <a href="mailto:promisechukwudi.pc@gmail.com">
              <span>promisechukwudi.pc@gmail.com</span>
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;
