import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let titleMap = {
            assetList: "Asset list",
            assetAdd: "Add a new asset",
            assetTypeList: "Asset type list",
            assetTypeAdd: "Add a new asset type"
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