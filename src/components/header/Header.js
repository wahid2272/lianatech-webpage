import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div id="header">
            <div className="navbar">
            <div className="dropdown">
                <button>In English
                    <span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                </button>
                <div className="dropdown-content">
                <a href="#">auf Deutsch</a>
                <a href="#">På Svenska</a>
                <a href="#">Suomeksi</a>
                </div>
            </div>
            <a href="#home">Intranet</a>
            <a href="#news">News</a>
        </div> 
      </div>
    );
};

export default Header;
