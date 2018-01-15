import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../button.jsx';
import FormField from '../form-field.jsx';

class AssetAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            assetType: "",
            extId1: "",
            extId2: "",
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAssetTypeChange = this.handleAssetTypeChange.bind(this);
        this.handleExtId1Change = this.handleExtId1Change.bind(this);
        this.handleExtId2Change = this.handleExtId2Change.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    componentDidMount() {
        this.props.getData('assetAdd');
    }
    
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleAssetTypeChange(e) {
        this.setState({ assetType: e.target.value });
    }

    handleExtId1Change(e) {
        this.setState({ extId1: e.target.value });
    }

    handleExtId2Change(e) {
        this.setState({ extId2: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let assetTypeHref = 'http://localhost:8080/api/assetTypes/' + this.state.assetType;
        var newAsset = {
            name: this.state.name,
            assetType: assetTypeHref,
            extId1: this.state.extId1,
            extId1: this.state.extId2,
        };        
        this.props.onCreate(newAsset, 'assets');        
        this.clearForm();
    }

    clearForm() {
        this.setState({
            name: "",
            assetType: "",
            extId1: "",
            extId2: "",
        });
    }
    
    render() {
        return (
            <div>
                <form className='martes-form'>                   
                    <FormField
                        id={'name'}
                        label={'Asset name'}
                        fieldType={'input'}
                        inputType={'text'}
                        content={this.state.name}
                        changeHandler={this.handleNameChange}
                    />
                    <FormField
                        id={'assetType'}
                        label={'Asset type'}
                        fieldType={'select'}
                        options={this.props.data ? this.props.data.assetTypes : []}
                        changeHandler={this.handleAssetTypeChange}
                    />
                    <FormField
                        id={'extid1'}
                        label={'External id 1'}
                        fieldType={'input'}
                        inputType={'text'}
                        content={this.state.extId1}
                        changeHandler={this.handleExtId1Change}
                    />
                    <FormField
                        id={'extid2'}
                        label={'External id 2'}
                        fieldType={'input'}
                        inputType={'text'}
                        content={this.state.extId2}
                        changeHandler={this.handleExtId2Change}
                    />
                    <p>          
                        <Button 
                            id={"assetAdd"}
                            text={"Create"}
                            type={"primary"}
                            clickHandler={this.handleSubmit}
                        />                        
                    </p>
                </form>
            </div>
        )
    }
}

AssetAdd.propTypes = {
    data: PropTypes.any,
    getData: PropTypes.func,
    onCreate: PropTypes.func.isRequired,
}

export default AssetAdd;