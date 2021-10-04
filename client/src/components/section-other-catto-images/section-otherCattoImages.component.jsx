import React from "react";

import CattoImage from "../catto-images/catto-images.component";
import "./section-otherCattoImages.styles.css";

const SectionOtherCattoImages = ({ images }) => {
  return (
    <section className="other-images-container">
      <h1 className="other-images-title">Other Images</h1>
      <div className="other-images">
        {images.map((img) => (
          <CattoImage link={img.url} key={img.id} variant="other-images-img" />
        ))}
      </div>
    </section>
  );
};

export default SectionOtherCattoImages;
