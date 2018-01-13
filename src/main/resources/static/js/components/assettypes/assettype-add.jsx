import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../button.jsx';
import FormField from '../form-field.jsx';

class AssetTypeAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var newAssetType = {
            name: this.state.name
        };
        this.props.onCreate(newAssetType, 'assetTypes');
        this.clearForm();
    }

    clearForm() {
        this.setState({ name: "" });
    };

    render() {
        return (
            <div>
                <form className='martes-form'>
                    <FormField
                        id={'name'}
                        label={'Name of the asset type'}
                        inputType={'text'}
                        content={this.state.name}
                        changeHandler={this.handleNameChange}
                    />
                <p>
                    <Button
                        id={'assetTypeAdd'}
                        text={'Create'}
                        type={'primary'}
                        clickHandler={this.handleSubmit}
                    />
                </p>
            </form>
        </div>
        )
    }
}

AssetTypeAdd.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AssetTypeAdd;