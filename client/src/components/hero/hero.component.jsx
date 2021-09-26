import React from "react";

import "./hero.styles.css";
import Logo from "../logo/logo.component";
import Input from "../input/input.component";

const Hero = () => {
  return (
    <header className="section section-hero">
      <div className="hero-content">
        <Logo variant="hero-logo" />
        <p className="about-site">Get to know more about your cat breed</p>
        <Input
          type="text"
          className="input-search"
          placeholder="Enter your breed"
        />
      </div>
    </header>
  );
};

export default Hero;
