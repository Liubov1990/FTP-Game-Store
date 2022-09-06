import React, { ReactElement } from "react";
// material-ui
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function Pending(): ReactElement {
  const classes: ClassNameMap<string> = useStyles();

  return (
    <div className={classes.loadingWrapper}>
      <CircularProgress className={`${classes.root} ${classes.colorPrimary}`} />
    </div>
  );
}
export default Pending;
