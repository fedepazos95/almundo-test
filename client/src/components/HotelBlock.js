import React from 'react';
import Icon from './Icon';

const HotelBlock = ({hotel, isMobile}) => {
    const image = require(`../assets/images/hotels/${hotel.image}`);
    return (
        <div className="hotel-block shadow-sm">

            <div className="row">
                <div className="col-lg-3 col-sm-3">
                    <img src={image} className="hotel-img" alt="hotel-img" />
                </div>
                <div className={`col-lg-6 col-sm-6 desc-box-${(isMobile) ? 'mobile' : 'desktop'}`}>
                    <label className="hotel-title">{hotel.name}</label>
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
                        <h3 className="price">ARS {hotel.price}</h3>
                        <button className="btn-lg btn-primary btn-block">Ver hotel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelBlock;