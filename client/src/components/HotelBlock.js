import React from 'react';
import Icon from './Icon';

const HotelBlock = ({ hotel, isMobile }) => {
    const image = require(`../assets/images/hotels/${hotel.image}`);
    return (
        <div className="shadow-sm" id="hotelBox">

            <div className="row">
                <div className="col-lg-3 col-sm-3">
                    <img src={image} className="hotel-img" alt="hotel-img" />
                </div>
                <div className={`col-lg-6 col-sm-6 desc-${(isMobile) ? 'mobile' : 'desktop'}`}>
                    <h5>{hotel.name}</h5>
                    <div><Icon name="star" size="20" repeat={hotel.stars} /></div>
                    <div className={`${(isMobile) ? 'mb-4' : ''}`}>
                        {
                            hotel.amenities.map((a, i) => {
                                return (
                                    <Icon key={i} name={a} size="25" />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 align-self-center">
                    <div className="text-center mr-5 ml-5">
                        <span>Precio por noche por habitación</span>
                        <h3>ARS {hotel.price}</h3>
                        <button className="btn-lg btn-primary btn-block">Ver hotel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelBlock;