import { combineReducers } from "redux";

import breedsReducer from "./breeds-reducer/breeds-reducer";
import searchReducer from "./search-reducer/search-reducer";
import topBreedsReducer from "./topBreeds-reducer/topBreeds-reducer";

export const rootReducer = combineReducers({
  breeds: breedsReducer,
  topBreeds: topBreedsReducer,
  searchTxt: searchReducer,
});
