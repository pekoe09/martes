import React, { Component } from 'react';

import MainHeader from '../components/main-header';
import ViewPanel from './view-panel';

class MainPanel extends Component {

    constructor() {
        this.state = {
            selectedView: 'assetList'
        }
    }

    setView = (viewName) => {
        this.setState({
            selectedView: viewName
        });
    }

    render() {
        return (
            <MainHeader 
                selectedView={this.state.selectedView}
                setView={this.setView}
            />
            <ViewPanel 
                selectedView={this.state.selectedView}
            />
        )
    }

}

export default MainPanel;