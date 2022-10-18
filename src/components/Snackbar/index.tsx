import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

// actions
import { clearSnackbarFailure } from "../../redux/actions/snackbarActions";
import { RootState } from "../../redux/store";

export default function FailureSnackbar(): ReactElement {
  const dispatch = useDispatch();

  const { failureSnackbarOpen } = useSelector((state: RootState): RootState["snackbarReducer"] => state.snackbarReducer);

  function handleClose(): void {
    dispatch(clearSnackbarFailure());
  }

  return (
    <Snackbar open={failureSnackbarOpen} autoHideDuration={4000} onClose={handleClose}>
      <Alert variant="filled" severity="error" onClose={handleClose}>
        Results not found!
      </Alert>
    </Snackbar>
  );
}
