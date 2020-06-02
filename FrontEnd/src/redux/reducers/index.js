import { combineReducers } from "redux";

import boxes from "./boxReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  boxes,
  apiCallsInProgress,
});

export default rootReducer;
