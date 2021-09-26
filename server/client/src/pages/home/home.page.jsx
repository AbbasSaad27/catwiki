import React from "react";
import Footer from "../../components/footer/footer.component";
import Hero from "../../components/hero/hero.component";
import SectionBreedsOv from "../../components/section-breeds-ov/section-breeds-ov.component";
import WhyHaveACat from "../../components/section-whyHaveACat/section-whyHaveACat.component";
import "./home.styles.css";

const Home = () => {
  return (
    <main className="home-container">
      <Hero />
      <SectionBreedsOv />
      <WhyHaveACat />
      <Footer />
    </main>
  );
};

export default Home;
