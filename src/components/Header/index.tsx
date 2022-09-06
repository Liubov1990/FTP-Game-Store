import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
// components
import ButtonComponent from "../ButtonComponent";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function Header(): ReactElement {
  const location = useLocation();
  const classes = useStyles();

  return (
    <Paper
      square
      classes={{
        root: classes.rootPaper
      }}
    >
      <div className={classes.paperContent}>
        <Link to={`/`}>
          <div className={classes.logo}>
            FTP Game <span className={classes.noBereak}>St
            <GpsFixedIcon classes={{ root: classes.playIcon }} />
            re</span>
          </div>
        </Link>
        {location.pathname !== "/" && (
          <Link to={`/`}>
            <ButtonComponent value="Back home"/>
          </Link>
        )}
      </div>
    </Paper>
  );
}
export default Header;