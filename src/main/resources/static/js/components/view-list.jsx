import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='martes-view-list'>
                <h3>ViewList</h3>
            </div>
        )
    }
}

ViewList.propTypes = {
    data: PropTypes.object
}

export default ViewList;