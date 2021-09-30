import React from "react";
import LevelBlock from "../level-blocks/level-block.component";

import "./breed-info-tags.styles.css";

const BreedInfoTags = ({ name, val }) => {
  const typeOfVal = typeof val;
  return (
    <div className={`info-tags ${typeOfVal === "number" ? "just-sb" : ""}`}>
      <p className="tag-name">{`${name}:`}</p>&nbsp;
      {typeOfVal === "number" ? (
        <div className="level-val">
          {Array.from(Array(5), (_, i) =>
            i < val ? <LevelBlock active key={i} /> : <LevelBlock key={i} />
          )}
        </div>
      ) : (
        <p className="tag-val">
          {val} {name === "Life Span" && "years"}{" "}
        </p>
      )}
    </div>
  );
};

export default BreedInfoTags;
