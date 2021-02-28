import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => { 
    return (
        <div id="footer">
            <div className="footer">
             <div className="contact">
                <h3>Liana Technologies</h3>
                
                <div className="company-name">
                    <div className="contact-info">
                        <p><span>Sales and inquiries</span><br/> Email: sales@lianatech.com <br/>
                        Phone: +358 10 387 7053
                        </p>
                    </div>
                    <div className="button">
                        <button type="submit">Contact us</button>
                    </div>
                </div>
            </div>

            <div className="links">
                <div className="menu-links">
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Intranet</a></li>
                    </ul>
                </div>
            
                <div className="social-media">
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    </ul>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Footer;