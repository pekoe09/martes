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
        this.isListView = this.isListView.bind(this);
        this.isAddView = this.isAddView.bind(this);
        this.isEditView = this.isEditView.bind(this); 
    }
    
    componentDidMount() {
        console.log("Loading asset data");
        client({method: 'GET', path: '/api/assets'}).then(response => {
           this.setState({data: response.entity._embedded.assets}); 
        });
    }
    
    isListView(viewName) {
        if(viewName.toLowerCase().includes("list")) {
            return true;
        } else {
            return false;
        }
    }
    
    isAddView(viewName) {
        if(viewName.toLowerCase().includes("add")) {
            return true;
        } else {
            return false;
        }
    }
    
    isEditView(viewName) {
        if(viewName.toLowerCase().includes("edit")) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className='martes-view-panel'>
                <h3>ViewPanel</h3>
                <ViewBar
                    selectedView={this.props.selectedView}
                />
                {this.isListView(this.props.selectedView) &&
                <ViewList
                    list={this.props.selectedView}
                    data={this.state.data}
                />
                }
            </div>
        )
    }
}

ViewPanel.propTypes = {
    selectedView: PropTypes.string,
}

export default ViewPanel;