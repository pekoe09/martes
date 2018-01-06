import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='martes-view-bar'>
                <h3>ViewBar</h3>
            </div>
        )
    }
}

ViewBar.propTypes = {
    
}

export default ViewBar;