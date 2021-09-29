import React from "react";
import BreedInfoTags from "../breed-info-tags/breed-info-tags.component";

import "./breed-info.styles.css";

const BreedInfo = (props) => {
  return (
    <div className="breed-info">
      {Object.keys(props).map((key) => {
        const val = props[key];
        let modifiedKey = key.includes("_")
          ? key
              .split("_")
              .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
              .join(" ")
          : `${key[0].toUpperCase()}${key.slice(1)}`;
        return <BreedInfoTags name={modifiedKey} val={val} />;
      })}
    </div>
  );
};

export default BreedInfo;
