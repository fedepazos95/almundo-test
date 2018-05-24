import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Assets 
import loading from '../assets/images/loading.png';

// Components
import HotelBlock from '../components/HotelBlock';
import FiltersBox from '../components/FiltersBox';

class Hotels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            stars: "all",
            width: window.innerWidth
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidMount() {
        this.props.fetchHotels();
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }

    handleFilterChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.fetchHotels(this.state);
        });
    }

    render() {
        const { hotels } = this.props;
        const isMobile = this.state.width <= 500;

        return (
            <div className='row'>
                <div className='col-lg-3 col-sm-3'>
                    <FiltersBox state={this.state} handleFilterChange={this.handleFilterChange} />
                </div>
                <div className='col-lg-9 col-sm-9'>
                    {hotels.length === 0 &&
                        <img src={loading} alt="loading" className="loading" width={(isMobile) ? '15%' : '3%'} />
                    }
                    {hotels.length > 0 &&
                        hotels.map((hotel, key) => {
                            return <HotelBlock key={key} hotel={hotel} isMobile={isMobile} />;
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