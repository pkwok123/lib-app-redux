import { RESET_ERROR_MESSAGE } from "../actions";

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

export const getErrorMessage = (state) => state.errorMessage;

export default errorMessage;
