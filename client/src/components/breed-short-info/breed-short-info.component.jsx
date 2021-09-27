import React from "react";
import CattoImage from "../catto-images/catto-images.component";
import "./breed-short-info.styles.css";

const ShortInfo = ({
  breed: {
    name,
    image: { url },
  },
}) => {
  return (
    <article className="breed-short-info">
      <CattoImage link={url} />
    </article>
  );
};

export default ShortInfo;
