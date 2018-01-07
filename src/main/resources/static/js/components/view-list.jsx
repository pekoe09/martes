import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var assets = this.props.data.map(asset =>
            <p key={asset._links.self.href}>{asset.name}</p>
        );
        return (
            <div className='martes-view-list'>
                <h3>{this.props.list}</h3>
                {assets}
            </div>
        )
    }
}

ViewList.propTypes = {
    list: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object)
}

export default ViewList;