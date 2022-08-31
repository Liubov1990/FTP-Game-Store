import { ISnackbarState } from "./types";
import {
  SHOW_SNACKBAR_FAILURE,
  CLEAR_SNACKBAR_FAILURE,
  SnackbarActionType,
} from "../../actions/snackbarActions/types"

export const initialState: ISnackbarState = {
  failureSnackbarOpen: false,
};
export const snackbarReducer = (state = initialState, action: SnackbarActionType): ISnackbarState => {
  const { type } = action;
  switch (type) {
    case SHOW_SNACKBAR_FAILURE:
      return {
        ...state,
        failureSnackbarOpen: true,
      };
    case CLEAR_SNACKBAR_FAILURE:
      return {
        ...state,
        failureSnackbarOpen: false,
      };
    default:
      return state;
  }
};