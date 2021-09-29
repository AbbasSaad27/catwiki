import React from "react";

import "./breed-info-tags.styles.css";

const BreedInfoTags = ({ name, val }) => {
  return (
    <>
      <p className="tag-name">{name}</p>
      <p className="tag-val">{val}</p>
    </>
  );
};

export default BreedInfoTags;
