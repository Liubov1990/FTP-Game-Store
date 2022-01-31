import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// components
import Layout from "../../components/Layout";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function NoPage() {
  return (
    <Layout>
        <div
          style={{
            backgroundImage: "url(/images/page_not_found.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "calc(100vh - 76px)"
          }}
        ></div>
    </Layout>
  );
}

export default NoPage;
