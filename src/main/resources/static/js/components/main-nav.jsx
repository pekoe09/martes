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
                        clickHandler={this.props.setView}
                        menuTarget={"home"}
                        menuItems={[]}
                    />
                    <NavDropdown
                        menuHeader={"Assets"}
                        menuItems={[
                        {
                            itemName: "Asset list",
                            clickHandler: this.props.setView,
                            target: "assetList"
                        }, 
                        {
                            itemName: "New asset",
                            clickHandler: this.props.setView,
                            target: "assetAdd"
                        }]}
                    />
                    <NavDropdown 
                        menuHeader={"Admin"}
                        clickHandler={this.props.setView}
                        menuTarget={"admin"}
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