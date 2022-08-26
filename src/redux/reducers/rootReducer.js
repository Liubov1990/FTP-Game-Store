import { combineReducers } from "redux";

import { snackbarReducer } from "./snackbarReducer";
import { imagesSearchReducer } from "./imagesSearchReducer";
import { sortPanelReducer } from "./sortPanelReducer";
import { gamePageReducer } from "./gamePageReducer";

const rootReducer = combineReducers({
  snackbarReducer,
  imagesSearchReducer,
  sortPanelReducer,
  gamePageReducer
});

export default rootReducer;
