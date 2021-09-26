import React from "react";
import "./section-breeds-ov.styles.css";

const SectionBreedsOv = () => {
  return (
    <section className="section section-breeds_ov">
      <p className="breeds-ov_title">
        <span>Most Searched Breeds </span>
      </p>
      <div className="breeds-ov_header">
        <p className="breeds-ov_header-text">66+ Breeds for you to discover</p>
        <p className="see-more-link">See more →</p>
      </div>
      <div className="popular-breeds_ov">
        <div className="bar"></div>
      </div>
    </section>
  );
};

export default SectionBreedsOv;
