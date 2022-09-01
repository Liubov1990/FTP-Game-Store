import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
// styles
import { errorStyles } from "./styles";

const useStyles = makeStyles(errorStyles);

function Error(): ReactElement {
  const classes = useStyles();

  return <div className={classes.error}></div>;
}
export default Error;
