import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div id="header">
            <div className="navbar">
            <div className="dropdown">
                <button className="dropbtn">In English
                <FontAwesomeIcon icon={faCaretDown} />
                </button>
                <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
            <a href="#home">Home</a>
            <a href="#news">News</a>
        </div> 
      </div>
    );
};

export default Header;
