import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const TransitionMenu = ({ children, ...props }) => (
        <CSSTransition
            {...props}
            classNames='menu'
            timeout={1000}                    
        >
            {children}
        </CSSTransition>
);

class NavDropdown extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu() {
        this.setState({
            menuaActive: !this.state.menuActive
        });
    }

    render() {
        let menu;
        if(this.state.menuActive) {
            menu = (
                    <div>
                       <ul>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                       </ul>
                   </div>
                            )
        } else {
            menu = <div></div>;
        }
        return (
            <li id="menu">
                <a href='#' onClick={this.toggleMenu}>
                    {this.props.menuHeader} <span className='caret'></span>
                </a>
                <TransitionMenu>
                    {menu}
                </TransitionMenu>
            </li>
        )
    }
    
}

NavDropdown.propTypes = {
    menuHeader: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        itemName: PropTypes.string,
        clickHandler: PropTypes.func
    }))
}

export default NavDropdown;