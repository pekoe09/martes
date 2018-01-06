import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import client from '../../utils/client';

class AssetList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            pages: -1,
            page: 1,
            pageSize: 20,
            sorted: true,
            filtered: true
        }
    }

    loadData() {
        client({ 
            method: 'GET',
            path: '/api/assets',
            page: this.state.page,
            pageSize: this.state.pageSize,
            sorted: this.state.sorted,
            filtered: this.state.filtered
        }).done(response => {
            this.setState({
                data: response.entity._embedded.assets,
                pages: response.page.totalPages,
                loading: false
            });
        });
    }

    const columns = [{

    }, {

    }, {

    }]

    render() {
        return (
            <ReactTable
                data={this.state.data}
                pages={this.state.pages}
                loading={this.state.loading}
                manual
                onFetchData={(state, instance) => {
                    this.setState({ loading: true })
                    // fetch data here!


                }}
                columns={this.columns}
            />
        )
    }

}

AssetList.propTypes = {

}

export default AssetList;