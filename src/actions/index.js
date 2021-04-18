export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const SEARCH_RESET = "SEARCH_RESET";

const searchRequest = () => ({ type: SEARCH_REQUEST });
const searchSuccess = (json, noResults) => ({
  type: SEARCH_SUCCESS,
  items: json,
  noResults,
});
const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  error,
});
export const searchReset = () => ({ type: SEARCH_RESET });

// Fetches the search query from the app's backend
// Relies on Redux Thunk middleware.
export const fetchSearch = (query) => (dispatch) => {
  if (query) {
    dispatch(searchRequest());
    fetch(`/api/items/search?q=${query}`)
      .then((response) => response.json())
      .then(
        (json) => {
          json.length === 0
            ? dispatch(searchSuccess(json, true))
            : dispatch(searchSuccess(json, false));
        },
        (error) => dispatch(searchFailure(error.message))
      );
  }
  return null;
};

export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE,
});

export const RELEVANCE = "relevance";

export const SET_SORT_FILTER = "SET_SORT_FILTER";
export const SET_FORMAT_FILTER = "SET_FORMAT_FILTER";

export const setSortFilter = (filter) => ({ type: SET_SORT_FILTER, filter });
export const setFormatFilter = (filter) => ({
  type: SET_FORMAT_FILTER,
  filter,
});

// export const ADD_TO_CART = "ADD_TO_CART";
// export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// export const CHECKOUT_REQUEST = "CHECKOUT_REQUEST";
// export const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
// export const CHECKOUT_FAILURE = "CHECKOUT_FAILURE";

// export const addToCart = (isbn) => ({ type: ADD_TO_CART, isbn });
// export const removeFromCart = (isbn) => ({ type: REMOVE_FROM_CART, isbn });
