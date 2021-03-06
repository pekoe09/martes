import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class AssetList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData('assetList');
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

AssetList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    getData: PropTypes.func
}

export default AssetList;