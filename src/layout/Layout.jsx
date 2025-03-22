import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
