import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// components
import Header from "./Header";

function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
export default Layout;
