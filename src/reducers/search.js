import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_RESET,
} from "../actions";

const initialState = {
  isFetching: false,
  results: [],
  noResults: false,
};

// Updates search query results
const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        results: [],
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: action.items,
        noResults: action.noResults,
      };
    case SEARCH_FAILURE:
      return { ...state, isFetching: false };
    case SEARCH_RESET:
      return { ...initialState };
    default:
      return state;
  }
};

export const getSearchStatus = (state) => state.isFetching;
export const getSearch = (state) => state.results;
export const getNoResults = (state) => state.noResults;
export const getResult = (state, id) =>
  state.results.find(({ _id }) => _id === id);

export default search;
