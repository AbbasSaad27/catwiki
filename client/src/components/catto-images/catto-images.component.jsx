import React from "react";
import { withRouter } from "react-router-dom";

import { makeUrlParam } from "../../utils/functions/makeUrlParam";
import YellowBar from "../yellow-bar/yellow-bar.component";
import "./catto-images.styles.css";

const CattoImage = ({ link, catName, variant, history, incYB }) => {
  const handleClick = () => {
    history.push(`breeds/${makeUrlParam(catName)}`);
  };
  return (
    <div className={`cat-image ${variant ? variant : ""}`}>
      {incYB ? <YellowBar /> : ""}
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
