import React from "react";
import { withRouter } from "react-router-dom";
import { makeUrlParam } from "../../utils/functions/makeUrlParam";

import "./about-breed.styles.css";

const AboutBreed = ({ index, name, description, history, link, variant }) => {
  const urlParam = link && makeUrlParam(name);

  const handleClick = () => {
    urlParam && history.push(`breeds/${urlParam}`);
  };

  return (
    <div className={`about-breed ${variant ? variant : ""}`}>
      <p
        className={`breed-name ${link ? "pointer" : ""}`}
        onClick={handleClick}
      >
        {index + 1 ? <span className="rank">{index + 1}.</span> : ""} {name}
      </p>
      <p className="breed-short-desc">{description}</p>
    </div>
  );
};

export default withRouter(AboutBreed);
