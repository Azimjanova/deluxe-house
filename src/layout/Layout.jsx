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