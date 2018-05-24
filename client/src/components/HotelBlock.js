import React from 'react';
import Icon from './Icon';

const HotelBlock = (props) => {
    const image = require(`../assets/images/hotels/${props.hotel.image}`);

    return (
        <div className="hotel-block shadow-sm">

            <div className="row">
                <div className="col-lg-3 col-sm-3">
                    <img src={image} className="hotel-img" alt="hotel-img" />
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="row hotel-title">{props.hotel.name}</div>
                    <div className="row">
                        <Icon name="star" size="20" repeat={props.hotel.stars} />
                    </div>
                    <div className="row mt-2">
                        {
                            props.hotel.amenities.map((a, i) => {
                                return (
                                    <Icon key={i} name={a} size="25" />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 price-box">
                    <p>
                        <div>Precio por noche por habitación</div>
                        <div className="price">
                            <label>ARS</label> <span>{props.hotel.price}</span>
                        </div>
                        <button className="btn-lg btn-primary btn-block">Ver hotel</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HotelBlock;