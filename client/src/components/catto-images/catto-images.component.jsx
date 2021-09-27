import React from "react";
import "./catto-images.styles.css";

const CattoImage = ({ link, catName }) => {
  return (
    <div className="cat-image">
      <img src={link} alt={catName} className="imageOfCat" />
      {catName ? <p className="cat-name">{catName}</p> : ""}
    </div>
  );
};

export default CattoImage;
