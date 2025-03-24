<<<<<<< HEAD
import React from 'react';
import Footer from "./footer/Footer.jsx";
import HomeHeader from "./header/HomeHeader.jsx";
import {Outlet} from "react-router-dom"


const Layout = () => {
    return (
        <div>
            <HomeHeader/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Layout;
=======
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
>>>>>>> 95cc514a16e7a0a71775e6618c6fe6a9ca24a0f2
