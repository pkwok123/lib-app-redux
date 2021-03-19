import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_RESET,
  RESET_ERROR_MESSAGE,
} from "../actions";

const initialState = {
  isFetching: false,
  results: [],
  noResults: false,
};

// Updates search query results
export const search = (state = initialState, action) => {
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

// Updates error message to notify about the failed fetches.
export const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

export const getSearchStatus = (state) => state.isFetching;
export const getVisibleSearch = (state) => state.results;
export const getResult = (state, id) =>
  state.results.find(({ _id }) => _id === id);
export const getErrorMessage = (state) => state.errorMessage;
export const getNoResults = (state) => state.noResults;
