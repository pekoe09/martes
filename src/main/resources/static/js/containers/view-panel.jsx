import React, { Component } from 'react';
import PropTypes from 'prop-types';

import client from '../utils/client';
import follow from '../utils/follow';

import ViewList from '../components/view-list.jsx';
import ViewAdd from '../components/view-add.jsx';
import ViewBar from '../components/view-bar.jsx';

const root = '/api';

class ViewPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.isListView = this.isListView.bind(this);
        this.isAddView = this.isAddView.bind(this);
        this.isEditView = this.isEditView.bind(this); 
        this.onCreate = this.onCreate.bind(this);
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
    
    onCreate(newItem, collectionName) {
        console.log("onCreate called with");
        console.log(newItem);
        follow(client, root, [collectionName]).then(collection => {
           return client({
               method: 'POST',
               path: collection.entity._links.self.href,
               entity: newItem,
               headers: {'Content-Type': 'application/json'}
            });
        }).then(response => {
           return follow(client, root, [{rel: collectionName, params: {}}]); 
        });
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
                {this.isAddView(this.props.selectedView) &&
                <ViewAdd
                    selectedView={this.props.selectedView}
                    onCreate={this.onCreate}
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