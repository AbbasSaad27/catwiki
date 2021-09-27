import { createSelector } from "reselect";

const getBreeds = (state) => state.breeds;

export const getBreedNames = createSelector([getBreeds], (breeds) =>
  breeds.map((breed) => breed.name)
);
