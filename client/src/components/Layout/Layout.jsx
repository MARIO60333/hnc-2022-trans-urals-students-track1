import React from 'react';
import {Outlet} from "react-router";
import Footer from "../Footer/Footer";
import s from './Layout.module.css'
const Layout = () => {
    return (
        <>
            <Outlet/>
            <div className={s.wp}></div>
            <Footer/>
        </>
    );
};

export default Layout;