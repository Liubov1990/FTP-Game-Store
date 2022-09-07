import React, { ReactElement } from "react";
// components
import Layout from "../components/Layout";
import Error from "../components/Error";

function NoPage(): ReactElement {
  return (
    <Layout>
      <Error />
    </Layout>
  );
}
export default NoPage;
