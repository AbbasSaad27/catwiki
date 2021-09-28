import React from "react";
import AboutBreed from "../about-breed/about-breed.component";
import CattoImage from "../catto-images/catto-images.component";
import "./breed-short-info.styles.css";

const ShortInfo = ({
  breed: {
    name,
    image: { url },
    description,
  },
  index,
}) => {
  return (
    <article className="breed-short-info">
      <CattoImage link={url} variant="popular-image" />
      <AboutBreed name={name} index={index} description={description} />
    </article>
  );
};

export default ShortInfo;
