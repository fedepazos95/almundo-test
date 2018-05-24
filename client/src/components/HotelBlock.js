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
                <div className="col-lg-6 col-sm-6 desc-box">
                    <label className="hotel-title">{props.hotel.name}</label>
                    <div><Icon name="star" size="20" repeat={props.hotel.stars} /></div>
                    <div>
                        {
                            props.hotel.amenities.map((a, i) => {
                                return (
                                    <Icon key={i} name={a} size="25" />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-3 align-self-center">
                    <div className="text-center ml-5 mr-5">
                        <span>Precio por noche por habitación</span>
                        <h3 className="price">ARS {props.hotel.price}</h3>
                        <button className="btn-lg btn-primary btn-block">Ver hotel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelBlock;