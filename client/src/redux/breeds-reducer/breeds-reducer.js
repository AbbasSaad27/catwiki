import { breedsTypes } from "./breeds-types";

const INIT_STATE = [];

const breedsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case breedsTypes.SET_BREEDS:
      return [...action.payload];
    default:
      return state;
  }
};

export default breedsReducer;
