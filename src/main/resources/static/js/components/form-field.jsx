import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormLabel from './form-label.jsx';
import FormInput from './form-input.jsx';
import FormSelect from './form-select.jsx';
import FormTextArea from './form-textarea.jsx';

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

        let selectAttributes = {
            id: this.props.id,
            options: this.props.options,
            selectedOption: this.props.selectedOption,
            changeHandler: this.props.changeHandler,
        };
        if(this.props.classNames) {
            selectAttributes.classNames = this.props.classNames;
        }
        if(this.props.placeholder) {
            selectAttributes.placeholder = this.props.placeholder;
        }

        let textAreaAttributes = {
            id: this.props.id,
            inputType: this.props.inputType,   
            content: this.props.content,
            changeHandler: this.props.changeHandler,         
        };
        if(this.props.classNames) {
            textAreaAttributes.classNames = this.props.classNames;            
        }
        if(this.props.placeholder) {
            textAreaAttributes.placeholder = this.props.placeholder;
        }
        if(this.props.resize) {
            textAreaAttributes.resize = this.props.resize;
        }
        if(this.props.rows) {
            textAreaAttributes.rows = this.props.rows;
        }

        return (
            <div>
                <FormLabel
                    {...labelAttributes}
                />
                {
                    this.props.fieldType === 'input' &&
                    <FormInput
                        {...inputAttributes}
                    />
                }
                {
                    this.props.fieldType === 'select' &&
                    <FormSelect
                        {...selectAttributes}
                    />
                }
                {
                    this.props.fieldType === 'textarea' &&
                    <FormTextArea
                        {...textAreaAttributes}
                    />
                }
            </div>
        )
    }
}

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    fieldType: PropTypes.oneOf([
        'input',
        'select',
        'textarea',
    ]).isRequired,
    inputType: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    rows: PropTypes.number,
    resize: PropTypes.bool,
    options: PropTypes.array,
    selectedOption: PropTypes.string,
    changeHandler: PropTypes.func.isRequired
}

export default FormField;