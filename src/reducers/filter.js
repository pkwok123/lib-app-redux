import { combineReducers } from "redux";
import { SET_FORMAT_FILTER, SET_SORT_FILTER } from "../actions";
import { ALL, RELEVANCE } from "../constants/searchFilters";

const sortFilter = (state = RELEVANCE, action) => {
  switch (action.type) {
    case SET_SORT_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const formatFilter = (state = ALL, action) => {
  switch (action.type) {
    case SET_FORMAT_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const getSortFilter = (state) => state.sortFilter;
export const getFormatFilter = (state) => state.formatFilter;

export default combineReducers({
  sortFilter,
  formatFilter,
});
