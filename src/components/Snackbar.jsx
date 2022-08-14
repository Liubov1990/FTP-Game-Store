import React from "react";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

// actions
import { clearSnackbarFailure } from "./../redux/actions/appActions";

export default function FailureSnackbar() {
  const dispatch = useDispatch();

  const { failureSnackbarOpen } = useSelector(state => state.appReducer);

  function handleClose() {
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
