import { topBreedsTypes } from "./topBreeds-types";

export const setTopBreeds = (state) => {
  return {
    type: topBreedsTypes.SET_TOP_BREEDS,
    payload: state,
  };
};
