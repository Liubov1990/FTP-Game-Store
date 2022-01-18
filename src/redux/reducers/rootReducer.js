import { combineReducers } from "redux";

import { appReducer } from "./appReducer";
import { imagesSearchReducer } from "./imagesSearchReducer";
import { sortPanelReducer } from "./sortPanelReducer";
import { gamePageReducer } from "./gamePageReducer";

const rootReducer = combineReducers({
  appReducer,
  imagesSearchReducer,
  sortPanelReducer,
  gamePageReducer
});

export default rootReducer;
