import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./search-dropdown.styles.css";
import DropDownOption from "../dropdown-options/dropdown-option.component";
import { makeUrlParam } from "../../utils/functions/makeUrlParam";
import { setSearchTxt } from "../../redux/search-reducer/search-actions";

const SearchDropDown = ({ options, history, active, setSearchTxt }) => {
  const gotoCatDetails = (e) => {
    if (e.target.classList.contains("option-label")) {
      const urlParam = makeUrlParam(e.target.innerText);
      history.push(`/breeds/${urlParam}`);
      setSearchTxt("");
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

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTxt: (state) => dispatch(setSearchTxt(state)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(SearchDropDown));
