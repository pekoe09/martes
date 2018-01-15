import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let headerAttributes = {};
        let typeClass = "martes-btn-" + this.props.type;
        if(this.props.clickHandler) {
            headerAttributes.onClick = (e) => this.props.clickHandler(e);
        }

        return (
            <button
                {...headerAttributes}
            >
                {this.props.text}
            </button>
        )
    }

}

Button.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    clickHandler: PropTypes.func
}

export default Button;