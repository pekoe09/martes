import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let titleMap = {
            assetAdd: "Add a new asset",
            assetList: "Asset list",
            assetTypeAdd: "Add a new asset type",
            assetTypeList: "Asset type list",
            organizationAdd: "Add a new organization",
            organizationList: "Organization list",
        }

        let viewTitle = titleMap[this.props.selectedView];
        if(!viewTitle) {
            viewTitle = "No view found";
        }

        return (
            <div className='martes-view-bar'>
                <h3 className='martes-view-title'>{viewTitle}</h3>
            </div>
        )
    }
}

ViewBar.propTypes = {
    selectedView: PropTypes.string
}

export default ViewBar;