import React, { Component } from 'react';

import MainHeader from '../components/main-header.jsx';
import ViewPanel from './view-panel.jsx';

class MainPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedView: 'assetList'
        };
        this.setView = this.setView.bind(this);
    }

    setView(viewName) {
        console.log("SetView called with " + viewName);
        this.setState({
            selectedView: viewName
        });
    }

    render() {
        return (
            <div className='martes-main-panel'>
                <h3>MainPanel</h3>
                <MainHeader 
                    selectedView={this.state.selectedView}
                    setView={this.setView}
                />
                <ViewPanel 
                    selectedView={this.state.selectedView}
                />
            </div>
        )
    }

}

export default MainPanel;