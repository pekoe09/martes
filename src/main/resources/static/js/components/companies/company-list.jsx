import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class CompanyList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData('companyList');
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

CompanyList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    getData: PropTypes.func.isRequired
}

export default CompanyList;