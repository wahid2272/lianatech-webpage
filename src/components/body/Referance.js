import React from 'react';
import BodyShop from '../../utility/images/Body-shop.jpg';
import Bosch from '../../utility/images/Bosch-Logo.jpg';
import Ikea from '../../utility/images/IKEA-Logo.svg';
import LaplandHotels from '../../utility/images/Lapland-Hotels.png';

const Referance = () => {
    return (
        <div id="referance">
            <div className="container">
            <h2>Referances</h2>
            <div className="company-boxes">
                <div className="box">
                    <div className="logo">
                        <img src={Bosch} alt="logo"/>
                    </div>
                    <div className="info">
                        <h3>Robert Bosch</h3>
                        <p>Bosch is a multinational engineering and electronics company.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="logo">
                        <img src={BodyShop} alt="logo" />
                    </div>
                    <div className="info">
                        <h3>The Body Shop</h3>
                        <p>The Body Shop is a global beauty brand and it has more than 3000 stores in more than 60 countries.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="logo">
                        <img src={LaplandHotels} alt="logo" />
                    </div>
                    <div className="info">
                        <h3>IKEA</h3>
                        <p>IKEA is a multinational furniture store.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="logo">
                        <img src={Ikea} alt="logo" />
                    </div>
                    <div className="info">
                        <h3>Lapland Hotels</h3>
                        <p>Lapland Hotels is the largest and the most diverse hotel chain in Lapland.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Referance;