import { combineReducers } from "redux";
import authReducer from "./auth";
import questionsReducer from "./questions";
import currentUserReducer from "./currentUser";
export default combineReducers({
    authReducer,
    currentUserReducer,
    questionsReducer,
  });