import { combineReducers } from "redux";
import { search } from "./search";
import { errorMessage } from "./search";

export default combineReducers({
  search,
  errorMessage,
});
