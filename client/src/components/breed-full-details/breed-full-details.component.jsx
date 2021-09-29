import React from "react";

import AboutBreed from "../about-breed/about-breed.component";
import "./breed-full-details.styles.css";

const BreedFullDetails = ({ curBreed: { name, description } }) => {
  return (
    <article className="breed-full-details">
      <AboutBreed
        name={name}
        description={description}
        variant={"for-full-details"}
      />
    </article>
  );
};

export default BreedFullDetails;
