import React from "react";
import { withRouter } from "react-router-dom";

import "./about-breed.styles.css";

const AboutBreed = ({ index, name, description, history }) => {
  const urlParam = name && name.toLowerCase().replaceAll(" ", "-");
  console.log(urlParam);

  const handleClick = () => {
    urlParam && history.push(`breeds/${urlParam}`);
  };

  return (
    <div className="about-breed">
      <p className="breed-name" onClick={handleClick}>
        {index + 1 ? <span className="rank">{index + 1}.</span> : ""} {name}
      </p>
      <p className="breed-short-desc">{description}</p>
    </div>
  );
};

export default withRouter(AboutBreed);
