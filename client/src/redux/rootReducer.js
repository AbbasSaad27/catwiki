import { combineReducers } from "redux";

import breedsReducer from "./breeds-reducer/breeds-reducer";
import topBreedsReducer from "./topBreeds-reducer/topBreeds-reducer";

export const rootReducer = combineReducers({
  breeds: breedsReducer,
  topBreeds: topBreedsReducer,
});
