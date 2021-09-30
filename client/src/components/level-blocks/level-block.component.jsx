import React from "react";
import "./level-block.styles.css";

const LevelBlock = ({ active }) => {
  return <div className={`level-block ${active && "active"}`}></div>;
};

export default LevelBlock;
