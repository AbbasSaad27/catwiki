import React from "react";

import { withRouter } from "react-router-dom";

import "./search-dropdown.styles.css";
import DropDownOption from "../dropdown-options/dropdown-option.component";
import { makeUrlParam } from "../../utils/functions/makeUrlParam";

const SearchDropDown = ({ options, history, active }) => {
  const gotoCatDetails = (e) => {
    if (e.target.classList.contains("option-label")) {
      const urlParam = makeUrlParam(e.target.innerText);
      history.push(`/breeds/${urlParam}`);
    }
  };

  return (
    <div className={`dropdown-container ${active ? "dropdown-active" : ""}`}>
      <div className="dropdown" onClick={gotoCatDetails}>
        {options.map((option) => (
          <DropDownOption option={option} key={option} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(SearchDropDown);
