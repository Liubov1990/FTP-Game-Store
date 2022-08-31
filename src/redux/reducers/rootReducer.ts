import { combineReducers } from "redux";
// reducers
import { snackbarReducer } from "./snackbarReducer";
import { imagesSearchReducer } from "./imageSearchReducer";
import { sortPanelReducer } from "./sortPanelReducer";
import { gamePageReducer } from "./gamePageReducer";

const rootReducer = combineReducers({
  snackbarReducer,
  imagesSearchReducer,
  sortPanelReducer,
  gamePageReducer
});

export default rootReducer;