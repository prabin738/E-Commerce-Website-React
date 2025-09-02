import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/p8.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals ! Best Prices !</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} height="60px" alt="" />
        </div>
        <p>Collections</p>
        <p>for Everyone</p>{" "}
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow_icon} height="30px" alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={men} height="500px" alt="" />
      </div>
    </div>
  );
};

export default Hero;
