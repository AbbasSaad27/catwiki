import React from "react";
import { connect } from "react-redux";

import { getTopBreeds } from "../../redux/topBreeds-reducer/topBreeds-actions";
import CattoImage from "../catto-images/catto-images.component";
import "./section-breeds-ov.styles.css";

const SectionBreedsOv = ({ topBreeds }) => {
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
        {console.log(topBreeds)}
        {topBreeds.slice(0, 4).map((breed) => (
          <CattoImage link={breed.image.url} catName={breed.name} />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    topBreeds: state.topBreeds,
  };
};

export default connect(mapStateToProps)(SectionBreedsOv);
