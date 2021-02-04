//Search
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

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

export const fetchSearch = (query) => (dispatch) => {
  dispatch(searchRequest());
  fetch(`/api/items/search?q=${query}`)
    .then((response) => response.json())
    .then(
      (json) => {
        json.length == 0
          ? dispatch(searchSuccess(json, true))
          : dispatch(searchSuccess(json, false));
      },
      (error) => dispatch(searchFailure(error))
    );
};

//Cart
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHECKOUT_REQUEST = "CHECKOUT_REQUEST";
export const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
export const CHECKOUT_FAILURE = "CHECKOUT_FAILURE";

export const addToCart = (isbn) => ({ type: ADD_TO_CART, isbn });
export const removeFromCart = (isbn) => ({ type: REMOVE_FROM_CART, isbn });
