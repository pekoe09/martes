import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AssetAdd from './assets/asset-add.jsx';
import AssetTypeAdd from './assettypes/assettype-add.jsx';

class ViewAdd extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {
                    this.props.selectedView == 'assetAdd' &&
                    <AssetAdd
                        getData={this.props.getData}
                        onCreate={this.props.onCreate}                        
                    />
                }
                {
                    this.props.selectedView == 'assetTypeAdd' &&
                    <AssetTypeAdd
                        getData={this.props.getData}
                        onCreate={this.props.onCreate}
                    />
                }
            </div>
        )
    }
}

ViewAdd.propTypes = {
    selectedView: PropTypes.string.isRequired,
    data: PropTypes.any,
    getData: PropTypes.func,
    onCreate: PropTypes.func.isRequired
}

export default ViewAdd;