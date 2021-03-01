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
                    <div className="numbers">
                        <div className="digit">3000</div>
                        <div>Clients</div>
                    </div>
                </div>
                <div className="company-info">
                    <div className="fa-icon">
                        <FontAwesomeIcon icon={faGrin} />
                    </div>
                     <div className="numbers">
                        <div className="digit">1800</div>
                        <div>Employees</div>
                    </div>
                </div>
                <div className="company-info">
                    <div className="fa-icon">
                        <FontAwesomeIcon icon={faGlobeAfrica} />
                    </div>
                    <div className="numbers">
                        <div className="digit">10000</div>
                        <div>Daily Users</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;