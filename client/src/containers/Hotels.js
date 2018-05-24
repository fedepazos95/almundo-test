import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Components
import HotelBlock from '../components/HotelBlock';
import FiltersBox from './FiltersBox';

class Hotels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            stars: "all"
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchHotels();
    }

    handleFilterChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.fetchHotels(this.state);
        });
    }

    render() {
        console.log(this.state);
        const { hotels } = this.props;
        if (hotels === null) {
            return <p>Cargando...</p>;
        }

        return (
            <div className='row'>
                <div className='col-lg-3 col-sm-3'>
                    <FiltersBox state={this.state} handleFilterChange={this.handleFilterChange} />
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