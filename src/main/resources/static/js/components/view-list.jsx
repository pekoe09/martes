import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import AssetList from './assets/asset-list.jsx';
import AssetTypeList from './assettypes/assettype-list.jsx';
import CompanyList from './companies/company-list.jsx';
import OrganizationList from './organizations/organization-list.jsx';

class ViewList extends Component {

    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <div>
                {
                    this.props.selectedView === 'assetList' &&
                    <AssetList
                        data={this.props.data}
                        getData={this.props.getData}
                    />
                }   
                {
                    this.props.selectedView === 'assetTypeList' &&
                    <AssetTypeList
                        data={this.props.data}
                        getData={this.props.getData}
                    />
                }  
                {
                    this.props.selectedView === 'companyList' &&
                    <CompanyList
                        data={this.props.data}
                        getData={this.props.getData}
                    />
                }
                {
                    this.props.selectedView === 'organizationList' &&
                    <OrganizationList
                        data={this.props.data}
                        getData={this.props.getData}
                    />
                }           
            </div>
        )
    }
}

ViewList.propTypes = {
    selectedView: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    getData: PropTypes.func
}

export default ViewList;