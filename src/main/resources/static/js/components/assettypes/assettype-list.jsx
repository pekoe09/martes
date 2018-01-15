import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class AssetTypeList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData('assetTypeList');
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

AssetTypeList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    getData: PropTypes.func
}

export default AssetTypeList;