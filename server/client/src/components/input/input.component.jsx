import React from "react";

import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg";
import "./input.styles.css";

const Input = ({ className, ...props }) => {
  return (
    <div className="input">
      <input {...props} className={`${className}`} />
      <SearchIcon />
    </div>
  );
};
export default Input;
