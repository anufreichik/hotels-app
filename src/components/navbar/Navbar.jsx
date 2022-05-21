import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css';
import logo from '../../images/logo.svg'

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="navbarWrapper">
                <div className="logo">
                    <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Link>
                </div>
                <div className="navbarMenuContainer">
                    <div >
                        <Link to="/" style={{color: "inherit", textDecoration: "none"}} className="menuItem">
                        Home
                        </Link>
                    </div>
                    <div>
                        <Link to="/hotels" style={{color: "inherit", textDecoration: "none"}} className="menuItem">
                            Hotels
                        </Link>
                    </div>
                    <div className="menuItem">Contacts</div>
                </div>
                <div className="navbarButtons">
                    <button className='navButton'>Login</button>
                    <button className='navButton'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
