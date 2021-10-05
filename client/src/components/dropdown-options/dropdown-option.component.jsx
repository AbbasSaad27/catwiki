import React from "react";

import "./dropdown-option.styles.css";

const DropDownOption = ({ option }) => {
  return (
    <>
      <input
        type="radio"
        className="dropdown-option"
        name="dropdown-option"
        id={option}
      />
      <label htmlFor={option} className="option-label">
        {option}
      </label>
    </>
  );
};

export default DropDownOption;
