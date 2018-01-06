import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/martes.png';

class MainLogo extends Component {

    render() {
        return (
            <div className='martes-main-logo'>
                <img src={logo} />
            </div>
        )
    }

}

export default MainLogo;
