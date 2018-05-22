import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Components
import HotelBlock from './HotelBlock';
import FiltersBox from './FiltersBox';

class Hotels extends Component {
    componentDidMount() {
        this.props.fetchHotels();
    }
    render() {
        const { hotels } = this.props;
        if (hotels === null) {
            return <p>Cargando...</p>;
        }

        return (
            <div className='row'>
                <div className='col-lg-3 col-sm-3'>
                    <FiltersBox />
                </div>
                <div className='col-lg-9 col-sm-9'>
                    {
                        hotels.map((hotel, key) => {
                            return <HotelBlock key={key} hotel={hotel} />;
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { hotels: state.hotels }
}

export default connect(mapStateToProps, actions)(Hotels);