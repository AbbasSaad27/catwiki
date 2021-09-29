import React from "react";
import "./yellow-bar.styles.css";

const YellowBar = ({ variant }) => {
  return <div className={`bar ${variant && variant}`}></div>;
};

export default YellowBar;
