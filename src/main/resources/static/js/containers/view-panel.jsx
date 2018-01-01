import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ViewList from '../components/view-list.jsx';
import ViewBar from '../components/view-bar.jsx';

class ViewPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    render() {
        return (
            <div className='martes-view-panel'>
                <h3>ViewPanel</h3>
                <ViewBar
                    
                />
                <ViewList
                    data={this.state.data}
                />
            </div>
        )
    }
}

ViewPanel.propTypes = {
    selectedView: PropTypes.string,
}

export default ViewPanel;