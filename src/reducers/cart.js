import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
} from "../actions/index";

const initialState = {
  addedIsbns: [],
};

const addedIsbns = (state = initialState.addedIsbns, action) => {
  switch (action.types) {
    case ADD_TO_CART:
      return [...state, action.isbn];
    case REMOVE_FROM_CART:
      return state.filter((addedIsbn) => addedIsbn !== action.isbn);
    default:
      return state;
  }
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      return initialState;
    case CHECKOUT_FAILURE:
      return state; //action.cart?
    default:
      return { addedIsbns: addedIsbns(state.addedIsbns, action) };
  }
};

export const getAddedIsbns = (state) => state.addedIsbns;

export default cart;
