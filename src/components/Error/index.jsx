import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// styles
import { errorStyles } from "./styles";

const useStyles = makeStyles(errorStyles);

function Error() {
  const classes = useStyles();

  return <div className={classes.error}></div>;
}
export default Error;
