import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavDropdown extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        let menuItems = this.props.menuItems.map((item, index) => {
            return (
                <li key={index}>
                    <a 
                        href="#"
                        onClick={() => item.clickHandler(item.target)}
                    >
                        {item.itemName}
                    </a>
                </li>
            );
        });

        let headerAttributes = {};
        if(this.props.clickHandler) {
            headerAttributes.onClick = () => this.props.clickHandler(this.props.menuTarget);
        }

        return (
            <li id="menu">
                <a 
                    href='#'
                    {...headerAttributes}
                >
                    {this.props.menuHeader} {this.props.menuItems.length > 0 && <i className="fa fa-caret-down"></i>}
                </a>
                <div>
                    {this.props.menuItems.length > 0 && 
                    <ul>
                        {menuItems}
                    </ul>
                    }
                </div>
            </li>
        )
    }
    
}

NavDropdown.propTypes = {
    menuHeader: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
    menuTarget: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        itemName: PropTypes.string,
        clickHandler: PropTypes.func,
        target: PropTypes.string
    }))
}

export default NavDropdown;