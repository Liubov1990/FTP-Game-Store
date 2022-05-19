import React from "react";
// material-ui
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function Pending() {
  const classes = useStyles();

  return (
    <div className={classes.loadingWrapper}>
      <CircularProgress className={`${classes.root} ${classes.colorPrimary}`} />
    </div>
  );
}
export default Pending;
