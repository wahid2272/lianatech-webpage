import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGrin } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

const CompanyInfo = () => {
    return (
        <div id="company">
            <div className="info">
                <div className="img">
                    <div className="company">
                        <h3>Company</h3>
                    </div>
                    <div className="employee">
                        <h3>Employee</h3>
                    </div>
                    <div className="contact-us">
                        <h3>Contact Us</h3>
                    </div>
                </div>
                <div className="company-info">
                    <div className="fa-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div>
                        <h1>3000</h1>
                        <p>Clients</p>
                    </div>
                </div>
                <div className="company-info">
                    <div className="fa-icon">
                        <FontAwesomeIcon icon={faGrin} />
                    </div>
                     <div>
                        <h1>1800</h1>
                        <p>Employees</p>
                    </div>
                </div>
                <div className="company-info">
                    <div className="fa-icon">
                        <FontAwesomeIcon icon={faGlobeAfrica} />
                    </div>
                    <div>
                        <h1>10000</h1>
                        <p>Daily Users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;