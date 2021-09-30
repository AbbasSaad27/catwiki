import React from "react";

import AboutBreed from "../about-breed/about-breed.component";
import BreedInfo from "../breed-info/breed-info.component";
import "./breed-full-details.styles.css";

const BreedFullDetails = ({ curBreed }) => {
  const {
    name,
    description,
    temperament,
    origin,
    life_span,
    affection_level,
    energy_level,
    child_friendly,
    grooming,
    intelligence,
    indoor,
    health_issues,
    social_needs,
    stranger_friendly,
  } = curBreed;
  return (
    <article className="breed-full-details">
      <AboutBreed
        name={name}
        description={description}
        variant={"for-full-details"}
      />
      <BreedInfo
        temperament={temperament}
        origin={origin}
        life_span={life_span}
        affection_level={affection_level}
        energy_level={energy_level}
        child_friendly={child_friendly}
        grooming={grooming}
        intelligence={intelligence}
        indoor={indoor}
        health_issues={health_issues}
        social_needs={social_needs}
        stranger_friendly={stranger_friendly}
      />
    </article>
  );
};

export default BreedFullDetails;
