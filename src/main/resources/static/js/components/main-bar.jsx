import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainLogo from './main-logo.jsx';
import MainNav from './main-nav.jsx';

class MainBar extends Component {

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div className='martes-main-bar'>
                <h3>MainBar</h3>
                <MainLogo />
                <MainNav
                    selectedView={this.props.selectedView}
                    setView={this.props.setView}
                />
            </div>
        )
    }

}

MainBar.propTypes = {
    selectedView: PropTypes.string,
    setView: PropTypes.func
}

export default MainBar;
