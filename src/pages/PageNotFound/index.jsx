import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// components
import Layout from "../../components/Layout";
// styles
import { errorStyles } from "./styles";

const useStyles = makeStyles(errorStyles);

function NoPage() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.errorView}></div>
    </Layout>
  );
}

export default NoPage;
