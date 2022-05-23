import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import './layout.css';
const Layout = () => {
    return (
            <div className="layoutContainer">
                <Navbar/>
                <div className="content">
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>

    );
};

export default Layout;
