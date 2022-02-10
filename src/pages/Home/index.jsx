import React from "react";
// material-ui
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { makeStyles } from "@material-ui/core/styles";
// components
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import GamesGrid from "../../components/GamesGrid";
import SortPanel from "../../components/SortPanel";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function Games() {
  const classes = useStyles();
  
  function toTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <Layout>
      <Slider />
      <SortPanel />
      <GamesGrid />
      <div className={classes.toTop} onClick={() => toTop()}>
        <ExpandLessIcon />
      </div>
    </Layout>
  );
}

export default Games;
