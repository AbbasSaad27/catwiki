import React from "react";

import BigCattoImage from "../big-catto-image/big-catto-image.component";
import BreedFullDetails from "../breed-full-details/breed-full-details.component";
import "./section-breed-details.styles.css";

const SectionBreedDetails = ({ curBreed }) => {
  return (
    <section className="section-breeds-details">
      <BigCattoImage url={curBreed.image.url} />
      <BreedFullDetails curBreed={curBreed} />
    </section>
  );
};

export default SectionBreedDetails;
