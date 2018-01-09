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
                        }, 
                        {
                            itemName: "Asset transactions",
                            clickHandler: this.props.setView,
                            target: "assetTransactionList"
                        }, 
                        {
                            itemName: "New asset transaction",
                            clickHandler: this.props.setView,
                            target: "assetTransactionAdd"
                        },
                        {
                            itemName: "Asset types",
                            clickHandler: this.props.setView,
                            target: "assetTypeList"
                        }, 
                        {
                            itemName: "New asset type",
                            clickHandler: this.props.setView,
                            target: "assetTypeAdd"
                        }]}
                    />
                    <NavDropdown
                        menuHeader={"Depreciations"}
                        menuItems={[{
                            itemName: "Run depreciations",
                            clickHandler: this.props.setView,
                            target: "depreciationTask"
                        }, 
                        {
                            itemName: "View depreciation posts",
                            clickHandler: this.props.setView,
                            target: "depreciationPostsList"
                        },
                        {
                            itemName: "Depreciation rules",
                            clickHandler: this.props.setView,
                            target: "depreciationRuleList"
                        }, 
                        {
                            itemName: "New depreciation rule",
                            clickHandler: this.props.setView,
                            target: "depreciationRuleAdd"
                        }]}
                    />
                    <NavDropdown
                        menuHeader={"Organization"}
                        menuItems={[{
                            itemName: "Company list",
                            clickHandler: this.props.setView,
                            target: "companyList"
                        }, 
                        {
                            itemName: "New company",
                            clickHandler: this.props.setView,
                            target: "companyAdd"
                        },
                        {
                            itemName: "Organization info",
                            clickHandler: this.props.setView,
                            target: "organizationDetails"
                        }]}
                    />
                    <NavDropdown 
                        menuHeader={"Admin"}
                        clickHandler={this.props.setView}
                        menuTarget={"admin"}
                        menuItems={[{
                            itemName: "User list",
                            clickHandler: this.props.setView,
                            target: "userList"
                        },
                        {
                            itemName: "New user",
                            clickHandler: this.props.setView,
                            target: "userAdd"
                        }]}
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