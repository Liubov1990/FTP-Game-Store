import React, { ReactElement, useEffect, useState } from "react";
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

function Games(): ReactElement {
  const [showButtonUp, setShowButtonUp] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    const handleButtonUp = () => setShowButtonUp(window.scrollY > 50);
    window.addEventListener("scroll", handleButtonUp);
    return function cleanup() {
      window.removeEventListener("scroll", handleButtonUp);
    };
  }, []);

  function toTop(): void {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <Layout>
      <Slider />
      <SortPanel />
      <GamesGrid />
      <div className={`${classes.buttonUp} ${showButtonUp ? classes.toShow : ""}`} onClick={() => toTop()}>
        <ExpandLessIcon />
      </div>
    </Layout>
  );
}
export default Games;