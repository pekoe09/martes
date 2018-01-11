import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../button.jsx';
import FormField from '../form-field.jsx';

class AssetAdd extends Component {

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
        var newAsset = {
            name: this.state.name
        };        
        this.props.onCreate(newAsset);        
        this.clearForm();
    }

    clearForm() {

    }
    
    render() {
        return (
            <div>
                <form>                   
                    <FormField
                        id={'name'}
                        label={'Name'}
                        inputType={'text'}
                        content={this.state.name}
                        changeHandler={this.handleNameChange}
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
    onCreate: PropTypes.func
}

export default AssetAdd;