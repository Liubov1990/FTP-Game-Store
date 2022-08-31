import React, { useEffect, ReactElement } from "react";
import { useLocation } from "react-router-dom";
// components
import Header from "./Header";

interface LayoutProps {
  children: ReactElement,
}

function Layout({children}: LayoutProps): ReactElement {
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
