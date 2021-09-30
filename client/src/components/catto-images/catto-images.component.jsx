import React from "react";
import { withRouter } from "react-router-dom";

import { makeUrlParam } from "../../utils/functions/makeUrlParam";
import "./catto-images.styles.css";

const CattoImage = ({ link, catName, variant, history }) => {
  const handleClick = () => {
    history.push(`breeds/${makeUrlParam(catName)}`);
  };
  return (
    <div className={`cat-image ${variant ? variant : ""}`}>
      <img src={link} alt={catName} className="imageOfCat" />
      {catName ? (
        <p className="cat-name" onClick={handleClick}>
          {catName}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default withRouter(CattoImage);
