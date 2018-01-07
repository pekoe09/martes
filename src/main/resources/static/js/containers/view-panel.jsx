import React, { Component } from 'react';
import PropTypes from 'prop-types';

import client from '../utils/client';

import ViewList from '../components/view-list.jsx';
import ViewBar from '../components/view-bar.jsx';

class ViewPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    componentDidMount() {
        console.log("Loading asset data");
        client({method: 'GET', path: '/api/assets'}).then(response => {
           this.setState({data: response.entity._embedded.assets}); 
        });
    }

    render() {
        return (
            <div className='martes-view-panel'>
                <h3>ViewPanel</h3>
                <ViewBar
                    
                />
                <ViewList
                    list={this.props.selectedView}
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