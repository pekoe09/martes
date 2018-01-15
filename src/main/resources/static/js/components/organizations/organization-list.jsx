import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class OrganizationList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData('organizationList');
    }

    render() {
        let columns = [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Official name',
            accessor: 'officialName'
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

OrganizationList.protoTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    getData: PropTypes.func.isRequired
}

export default OrganizationList;