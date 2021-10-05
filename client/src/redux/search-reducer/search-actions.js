import { searchTypes } from "./search-types";

export const setSearchTxt = (state) => {
  return {
    type: searchTypes.SET_SEARCH_TXT,
    payload: state,
  };
};
