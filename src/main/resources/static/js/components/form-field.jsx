import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormLabel from './form-label.jsx';
import FormInput from './form-input.jsx';

class FormField extends Component {

    constructor(props) {
        super(props);
    }

    render() {        
        let labelAttributes = {
            text: this.props.label,
            forName: this.props.id,            
        };
        if(this.props.classNames) {
            labelAttributes.classNames = this.props.classNames;
        }

        let inputAttributes = {
            id: this.props.id,
            inputType: this.props.inputType,   
            content: this.props.content,
            changeHandler: this.props.changeHandler,         
        };
        if(this.props.classNames) {
            inputAttributes.classNames = this.props.classNames;            
        }
        if(this.props.placeholder) {
            inputAttributes.placeholder = this.props.placeholder;
        }

        return (
            <div>
                <FormLabel
                    {...labelAttributes}
                />
                <FormInput
                    {...inputAttributes}
                />
            </div>
        )
    }
}

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    inputType: PropTypes.oneOf([
        'text', 
        'number'
    ]).isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    changeHandler: PropTypes.func.isRequired
}

export default FormField;