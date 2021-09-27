import React from "react";
import { connect } from "react-redux";
import ShortInfo from "../breed-short-info/breed-short-info.component";

import "./section-breeds-short-info.styles.css";

const BreedsShortInfo = ({ topBreeds }) => {
  return (
    <section className="section-breeds-short-info">
      {topBreeds.map((breed) => (
        <ShortInfo breed={breed} />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    topBreeds: state.topBreeds,
  };
};

export default connect(mapStateToProps)(BreedsShortInfo);
