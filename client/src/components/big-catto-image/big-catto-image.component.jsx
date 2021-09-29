import React from "react";

import YellowBar from "../yellow-bar/yellow-bar.component";
import CattoImage from "../catto-images/catto-images.component";
import "./big-catto-image.styles.css";

const BigCattoImage = ({ url }) => {
  return (
    <article className="big-catto-image">
      <YellowBar variant={"for-big-image"} />
      <CattoImage link={url} variant="details-image" />
    </article>
  );
};

export default BigCattoImage;
