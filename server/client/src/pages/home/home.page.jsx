import React from "react";
import Hero from "../../components/hero/hero.component";
import SectionBreedsOv from "../../components/section-breeds-ov/section-breeds-ov.component";
import "./home.styles.css";

const Home = () => {
  return (
    <main className="home-container">
      <Hero />
      <SectionBreedsOv />
    </main>
  );
};

export default Home;
