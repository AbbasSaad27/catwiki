import React from "react";
import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";

import CattoImage from "../catto-images/catto-images.component";
import YellowBar from "../yellow-bar/yellow-bar.component";
import "./section-breeds-ov.styles.css";

const SectionBreedsOv = ({ topBreeds, history }) => {
  return (
    <section className="section section-breeds_ov">
      <p className="breeds-ov_title">
        <span>Most Searched Breeds </span>
      </p>
      <div className="breeds-ov_header">
        <p className="breeds-ov_header-text">66+ Breeds for you to discover</p>
        <Link className="see-more-link" to="/top-breeds">
          See more →
        </Link>
      </div>
      <div className="popular-breeds_ov">
        {topBreeds
          .slice(0, 4)
          .map((breed, i) =>
            i === 0 ? (
              <CattoImage
                link={breed.image.url}
                catName={breed.name}
                key={breed.name}
                variant="popular-breed-img"
                incYB
              />
            ) : (
              <CattoImage
                link={breed.image.url}
                catName={breed.name}
                key={breed.name}
                variant="popular-breed-img"
              />
            )
          )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    topBreeds: state.topBreeds,
  };
};

export default connect(mapStateToProps)(withRouter(SectionBreedsOv));
