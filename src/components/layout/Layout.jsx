import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import './layout.css';
const Layout = () => {
    return (
        <div className="layoutContainer">
            <div className="layoutWrapper">
                <Navbar/>
                <div className="content">
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
