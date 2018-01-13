import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelect extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let attributes = {
            id: this.props.id,
            onChange: this.props.changeHandler,
        }

        let optionSet = options.map(option => {
            return (
                <option
                    value={option.value}
                >
                    {option.display}
                </option>
            );
        });

        return (
            <p className='martes-form-select'>
                <select {...attributes}>
                    {optionSet}
                </select>
            </p>
        )
    }

}

FormSelect.propTypes = {
    id: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string,
    changeHandler: PropTypes.func.isRequired
}

export default FormSelect;