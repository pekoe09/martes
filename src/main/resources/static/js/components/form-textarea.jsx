import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormTextArea extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let attributes = {
            id: this.props.id,
            onChange: this.props.changeHandler,
            value: this.props.content,
            rows: this.props.rows ? this.props.rows : 5,
        }
        if(this.props.placeHolder) {
            attributes.placeHolder = this.props.placeHolder;
        }
        if(this.props.resize) {
            attributes.resize = this.props.resize;
        }
        if(this.props.classNames) {
            attributes.className = this.props.classNames;
        }

        return (
            <p className='martes-form-input'>
                <textarea
                    {...attributes}
                />
            </p>
        )
    }
}

FormTextArea.propTypes = {
    id: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    placeholder: PropTypes.string,
    content: PropTypes.string.isRequired,
    rows: PropTypes.number,
    resize: PropTypes.bool,
    changeHandler: PropTypes.func.isRequired,
}

export default FormTextArea;