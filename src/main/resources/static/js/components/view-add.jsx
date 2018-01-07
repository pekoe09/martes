import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AssetAdd from './assets/asset-add.jsx';

class ViewAdd extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <AssetAdd
                onCreate={this.props.onCreate}
            />
        )
    }
}

ViewAdd.propTypes = {
    selectedView: PropTypes.string,
    onCreate: PropTypes.func
}

export default ViewAdd;