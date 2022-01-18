import React from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function Header() {
  const classes = useStyles();

  return (
    <Paper
      square
      classes={{
        root: classes.rootPaper
      }}
    >
      <div className={classes.paperContent}>
        <span className={classes.logo}>
          FTP Game St
          <GpsFixedIcon classes={{ root: classes.playIcon }} />
          re
        </span>
      </div>
    </Paper>
  );
}

export default Header;
