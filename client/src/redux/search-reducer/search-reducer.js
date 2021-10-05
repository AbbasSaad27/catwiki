import { searchTypes } from "./search-types";

const INIT_STATE = "";

const searchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case searchTypes.SET_SEARCH_TXT:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
