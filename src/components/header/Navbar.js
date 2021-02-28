import React from 'react';
import './Header.css';

const Navbar = () => {
    return (
        <div id="nav">
            <div className="logo">
                <a href="/"><img src="https://www.lianatech.com/media/layout/img/logos/lianatech_logo.svg" alt="logo" /></a>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="/">Company</a>
                        <a href="/">Product</a>
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="search-bar">
                <form>
                    <input type="text" placeholder="Search" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Navbar;