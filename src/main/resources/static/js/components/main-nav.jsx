import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainNav extends Component {

    constructor(props) {
        super(props);
    }

    handleNavClick = (clickedLink) => {
        this.props.setView(clickedLink);
    }

    render() {
        return ( 
            <div className='martes-main-nav'>
            
            </div>
        )
    }

}

MainNav.propTypes = {
    selectedView: PropTypes.string,
    setView: PropTypes.func
}

export default MainNav;