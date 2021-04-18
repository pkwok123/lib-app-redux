import { combineReducers } from "redux";
import search, * as fromSearch from "./search";
import errorMessage from "./error";
import filter, * as fromFilter from "./filter";
import { ALL, RATING, RELEVANCE } from "../constants/searchFilters";

export default combineReducers({
  search,
  errorMessage,
  filter,
});

const getSearch = (state) => fromSearch.getSearch(state.search);
const getSortFilter = (state) => fromFilter.getSortFilter(state.filter);
const getFormatFilter = (state) => fromFilter.getFormatFilter(state.filter);

const sortItems = (items, sortValue, ALessB, AGreaterB) =>
  [...items].sort((a, b) => {
    let varA = a[sortValue];
    let varB = b[sortValue];
    if (varA < varB) {
      return ALessB;
    }
    if (varA > varB) {
      return AGreaterB;
    }
    return 0;
  });

//Fix? Use createSelectors from redux?
const getSortSearch = (state) => {
  if (getSortFilter(state) === RATING)
    return sortItems(getSearch(state), getSortFilter(state), 1, -1);
  if (getSortFilter(state) !== RELEVANCE)
    return sortItems(getSearch(state), getSortFilter(state), -1, 1);
  return getSearch(state);
};

const getFormatSearch = (state) => {
  if (getFormatFilter(state) !== ALL)
    return [...getSortSearch(state)].filter(
      (items) => items.type === getFormatFilter(state)
    );
  return getSortSearch(state);
};

export const getVisibleSearch = (state) => getFormatSearch(state);
