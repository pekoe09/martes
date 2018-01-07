import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class ViewList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let columns = [{
            Header: 'Name',
            accessor: 'name'
        }];
        
        return (
            <div className='martes-view-list'>
                <ReactTable
                    data={this.props.data}
                    columns={columns}
                />                
            </div>
        )
    }
}

ViewList.propTypes = {
    list: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object)
}

export default ViewList;