import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ViewList from './view-list';
import ViewBar from './view-bar';

class ViewPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ViewBar
                    data={this.props.data}
                />
                <ViewList
                    data={this.props.data}
                />
            </div>
        )
    }
}

ViewPanel.propTypes = {
    data: PropTypes.object
}

export default ViewPanel;