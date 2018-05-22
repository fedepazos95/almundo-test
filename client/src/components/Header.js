import React from 'react';

// Assets
import logo from '../assets/images/logo-almundo.svg';

const Header = () => {
    return (
        <nav className='navbar blue1'>
            <img src={logo} className='d-inline-block align-top' alt='' />
        </nav>
    )
}

export default Header;