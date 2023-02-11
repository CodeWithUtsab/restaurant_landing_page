import React from "react";
import Navbar from "../Navbar/Navbar";
import bannerbg from "../../assets/home-banner-background.png";
import bannerimg from "../../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={bannerbg} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={bannerimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
