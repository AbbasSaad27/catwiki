import { topBreedsTypes } from "./topBreeds-types";

const INIT_STATE = [];

const topBreedsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case topBreedsTypes.SET_TOP_BREEDS:
      return [...action.payload];
    default:
      return state;
  }
};

export default topBreedsReducer;
