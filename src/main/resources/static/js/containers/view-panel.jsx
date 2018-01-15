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

        this.viewCollectionMap = {
            assetAdd: 'assetOptions',
            assetList: 'assets',
            assetTypeList: 'assetTypes', 
        }

        this.optionData = {
            assetOptions: ['assetTypes']
        }

        this.createRedirectMap = {
            assets: 'assetList',
            assetTypes: 'assetTypeList',
        }

        this.isListView = this.isListView.bind(this);
        this.isAddView = this.isAddView.bind(this);
        this.isEditView = this.isEditView.bind(this); 
        this.getData = this.getData.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.isListView(nextProps.selectedView)) {
            this.setState({data: []});
        }
    }

    getData(viewName) {
        let collectionName = this.viewCollectionMap[viewName];
        client({method: 'GET', path: '/api/' + collectionName}).then(response => {
            if(this.optionData[collectionName]) {
                console.log("Option data: ");
                console.log(response);
                this.setState({data: response.entity});
            } else {
                this.setState({data: response.entity._embedded[collectionName]}); 
            }
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
        }).then(() => {this.setState({data: []});
        }).then(() => {this.props.setView(this.createRedirectMap[collectionName])});
    }

    render() {
        return (
            <div className='martes-view-panel'>
                <ViewBar
                    selectedView={this.props.selectedView}
                />
                {this.isListView(this.props.selectedView) &&
                <ViewList
                    selectedView={this.props.selectedView}
                    data={this.state.data}
                    getData={this.getData}
                />
                }
                {this.isAddView(this.props.selectedView) &&
                <ViewAdd
                    selectedView={this.props.selectedView}
                    data={this.state.data}
                    getData={this.getData}
                    onCreate={this.onCreate}
                />
                }
            </div>
        )
    }
}

ViewPanel.propTypes = {
    selectedView: PropTypes.string.isRequired,
    setView: PropTypes.func.isRequired
}

export default ViewPanel;