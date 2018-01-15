import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../button.jsx';
import FormField from '../form-field.jsx';

class OrganizationAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            officialName: '',
            description: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleOfficialNameChange = this.handleOfficialNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleOfficialNameChange(e) {
        this.setState({ officialName: e.target.value});
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var newOrganization = {
            name: this.state.name,
            officialName: this.state.officialName,
            description: this.state.description,
        };
        this.props.onCreate(newOrganization, 'organizations');
        this.clearForm();
    }

    clearForm() {
        this.setState({
            name: '',
            officialName: '',
            description: '',
        });
    }

    render() {
        return (
            <div>
                <form className='martes-form'>
                    <FormField
                        id='name'
                        label='Organization name'
                        fieldType='input'
                        inputType='text'
                        content={this.state.name}
                        changeHandler={this.handleNameChange}
                    />
                    <FormField
                        id='officalname'
                        label='Official name'
                        fieldType='input'
                        inputType='text'
                        content={this.state.officialName}
                        changeHandler={this.handleOfficialNameChange}
                    />
                    <FormField
                        id='description'
                        label='Description'
                        fieldType='textarea'
                        content={this.state.description}
                        changeHandler={this.handleDescriptionChange}
                    />
                    <p>          
                        <Button 
                            id={"organizationAdd"}
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

OrganizationAdd.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default OrganizationAdd;