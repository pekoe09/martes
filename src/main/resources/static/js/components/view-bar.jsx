import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='martes-view-bar'>
                <h3>{this.props.selectedView}</h3>
            </div>
        )
    }
}

ViewBar.propTypes = {
    selectedView: PropTypes.string
}

export default ViewBar;