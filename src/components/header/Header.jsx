import React from 'react';
import './header.css'
import Search from "../search/Search";
const Header = () => {
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="title">
                    <span className="titleText">
                        The word's Most
                    </span>
                </div>
                <div className="titleBig">
                    <span className="titleBigText">
                        Extra Ordinary Hotels
                    </span>
                </div>
                <Search/>
            </div>
        </div>
    );
};

export default Header;
