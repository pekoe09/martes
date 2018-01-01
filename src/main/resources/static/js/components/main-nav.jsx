import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavDropdown from './nav-dropdown.jsx';

class MainNav extends Component {

    constructor(props) {
        super(props);
    }

    handleNavClick(clickedLink) {
        this.props.setView(clickedLink);
    }

    render() {
        return ( 
            <nav className='martes-main-nav'>
                <ul>
                    <NavDropdown 
                        menuHeader={"Home"}
                        menuItems={[]}
                    />
                    <NavDropdown
                        menuHeader={"Assets"}
                        menuItems={[]}
                    />
                    <NavDropdown 
                        menuHeader={"Admin"}
                        menuItems={[]}
                    />
                </ul>
            </nav>
        )
    }

}

MainNav.propTypes = {
    selectedView: PropTypes.string,
    setView: PropTypes.func
}

export default MainNav;