import { breedsTypes } from "./breeds-types";

export const setBreeds = (state) => {
  return {
    type: breedsTypes.SET_BREEDS,
    payload: state,
  };
};
