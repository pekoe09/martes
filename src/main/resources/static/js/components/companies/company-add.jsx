import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../button.jsx';
import FormField from '../form-field.jsx';

class CompanyAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            officialName: '',
            description: '',
            organization: '',
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleOfficialNameChange = this.handleOfficialNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleOrganizationChange = this.handleOrganizationChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    componentDidMount() {
        this.props.getData('companyAdd');
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

    handleOrganizationChange(e) {
        this.setState({ organization: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let organizationHref = 'http://localhost:8080/api/organizations/' + this.state.organization;
        let newCompany = {
            name: this.state.name,
            officialName: this.state.officialName,
            description: this.state.description,
            organization: organizationHref,
        };
        this.props.onCreate(newCompany, 'companies');
        this.clearForm();
    }

    clearForm() {
        this.setState({
            name: '',
            officialName: '',
            description: '',
            organization: '',
        });
    }

    render() {
        return (
            <div>
                <form className='martes-form'>
                    <FormField
                        id='name'
                        label='Company name'
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
                        id={'organization'}
                        label={'Organization'}
                        fieldType={'select'}
                        options={this.props.data ? this.props.data.organizations : []}
                        changeHandler={this.handleOrganizationChange}
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
                            id={"companyAdd"}
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

CompanyAdd.propTypes = {
    data: PropTypes.any,
    getData: PropTypes.func,
    onCreate: PropTypes.func.isRequired,
}

export default CompanyAdd;