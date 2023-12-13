import React, { useContext } from "react";
import "./Home.scss";
import Navbar from "../../Navbar/Navbar";
import { displayData } from "../../../helpers/data/data";
import { AppContext } from "../../../helpers/ContextApi/AppContext";
import PageSlider from "../../PageSlider/PageSlider";
import { Link } from "react-router-dom";
import MenuPage from "../MenuPage/MenuPage";

const Home = () => {
  const { value, setValue, nextSlide, prevSlide } = useContext(AppContext);
  const { id, img, title, desc, arrow, action } = displayData[value];

  return (
    <div className="home">
      <Navbar />
      <Link to={action} className="details">
        <img className="displayImg" src={img} alt="image" />
        <div className="imgLayer">
          <h1 className="title">{title}</h1>
          <div className="descWraps">
            <h2 className="desc"> <span>{arrow}</span>{desc}</h2>
          </div>
        </div>
      </Link>
      <PageSlider />
      <MenuPage/>
    </div>
  );
};

export default Home;
