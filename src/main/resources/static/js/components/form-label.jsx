import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormLabel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let attributes = {
            htmlFor: this.props.forName,
        };
        if(this.props.classNames) {
            attributes.className = this.props.classNames;
        }

        return (
            <p className='martes-form-label'>
                <label
                    {...attributes}
                >
                    {this.props.text}
                </label>
            </p>
        )
    }

}

FormLabel.propTypes = {
    text: PropTypes.string,
    forName: PropTypes.string,
    classNames: PropTypes.string,
}

export default FormLabel;