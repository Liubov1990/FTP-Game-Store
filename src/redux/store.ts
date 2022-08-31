// redux
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkMiddleware } from "redux-thunk";
// reducers
import rootReducer from "./reducers/rootReducer";
// actions
import { GamePageActionType } from "./actions/gamePageActions/types";
import { ImagesSearchActionType } from "./actions/imagesSearchActions/types";
import { SnackbarActionType } from "./actions/snackbarActions/types";
import { SortPanelActionType } from "./actions/sortPanelActions/types";

type AppActions = GamePageActionType | ImagesSearchActionType | SnackbarActionType | SortPanelActionType;

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, AppActions>))
);
const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;