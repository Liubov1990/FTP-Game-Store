import React from "react";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// actions
import { clearSnackbar } from "./../redux/actions/appActions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function FailureSnackbar() {
  const dispatch = useDispatch();

  const { failureSnackbarOpen } = useSelector(state => state.appReducer);

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (
    <Snackbar open={failureSnackbarOpen} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        There are no results found according to the search parameters!
      </Alert>
    </Snackbar>
  );
}
