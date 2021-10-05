import React from "react";
import { connect } from "react-redux";
import { getBreedNames } from "../../redux/breeds-reducer/breeds-selector";

import "./hero.styles.css";
import Logo from "../logo/logo.component";
import Input from "../input/input.component";
import SearchDropDown from "../search-dropdown/search-dropdown.component";
import { setSearchTxt } from "../../redux/search-reducer/search-actions";

const Hero = ({ breedNames, searchTxt, setSearchTxt }) => {
  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  };

  const filteredBreedsName = breedNames.filter((name) =>
    name.toLowerCase().startsWith(searchTxt.toLowerCase())
  );

  return (
    <header className="section section-hero">
      <div className="hero-content">
        <Logo variant="hero-logo" />
        <p className="about-site">Get to know more about your cat breed</p>
        <div className="search">
          <Input
            type="text"
            className="input-search"
            placeholder="Enter your breed"
            onChange={handleChange}
            value={searchTxt}
          />
          {searchTxt.length > 0 ? (
            <SearchDropDown options={filteredBreedsName} active />
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    breedNames: getBreedNames(state),
    searchTxt: state.searchTxt,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTxt: (state) => dispatch(setSearchTxt(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
