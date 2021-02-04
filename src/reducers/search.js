import { combineReducers } from "redux";
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../actions";

const initialState = {
  isFetching: false,
  results: [],
  error: null,
  noResults: false,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        results: [],
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: action.items,
        noResults: action.noResults,
      };
    case SEARCH_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export const getSearchStatus = (state) => state.isFetching;
export const getVisibleSearch = (state) => state.results;
export const getErrorMessage = (state) => state.error;
export const getNoResults = (state) => state.noResults;

export default search;
