import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let attributes = {            
            type: this.props.inputType,
            id: this.props.id,
            onChange: this.props.changeHandler,
            value: this.props.content
        };
        if(this.props.placeholder) {
            attributes.placeholder = this.props.placeholder;
        }
        if(this.props.classNames) {
            attributes.className = this.props.classNames;
        }

        return (
            <p className='martes-form-input'>
                <input 
                    {...attributes}
                />
            </p>
        )
    }
}

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    placeholder: PropTypes.string,
    inputType: PropTypes.oneOf([
        'text',
        'number'
    ]).isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    changeHandler: PropTypes.func.isRequired,    
}

export default FormInput;