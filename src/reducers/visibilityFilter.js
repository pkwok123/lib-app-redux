import { combineReducers } from "redux";
import { SET_VISIBILITY_FILTER } from "../constants/ActionTypes";

const initialState = {
  content: "relavence",
  // content: {
  //   relavence: true,
  //   rating: false,
  //   title: false,
  //   author: false,
  //   subject: false,
  // },
  format: ["book", "dvd", "cd", "misc"],
  // format: {
  //   book: false,
  //   dvd: false,
  //   cd: false,
  //   misc: false,
  // },
};

const contentFilter = (state = initialState[content], action) => {
  switch (action.type) {
    case SET_CONTENT_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const formatFilter = (state = initialState[format], action) => {
  switch (action.type) {
    case SET_FORMAT_VISIBILITY_FILTER:
      if (action.filter === "all") {
        return { ...initialState[format], all: true };
      } else
        return { ...state, all: false, [action.filter]: !state[action.filter] };
    default:
      return state;
  }
};

export default combineReducers({
  contentFilter,
  formatFilter,
});
