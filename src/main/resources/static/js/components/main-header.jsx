import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainBar from './main-bar.jsx';
import UserPanel from './user-panel.jsx';

class MainHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='martes-main-header'>
                <h3>MainHeader</h3>
                <MainBar 
                    selectedView={this.props.selectedView}
                    setView={this.props.setView}
                />
                <UserPanel />
            </div>
        )
    }

}

MainHeader.propTypes = {
    selectedView: PropTypes.string,
    setView: PropTypes.func
}

export default MainHeader;
