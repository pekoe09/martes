import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainBar from './main-bar';
import UserPanel from './user-panel';

class MainHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='martes-main-header'>
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
