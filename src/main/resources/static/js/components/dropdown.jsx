import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getListItems = () => {
        this.props.items.map((item, index) => {
            var selected = '';
            if(this.props.selectedId && this.props.selectedId.length > 0 && item.id === this.props.selectedId) {
                selected = 'selected';
            } else if(this.props.selectedIndex && this.props.selectedIndex === index) {
                selected = 'selected';
            }  
            return <li key={item.id} {selected}>{item.name}</li>          
        });
    }

    render() {
        return (
            <select>
                {getListItems}
            </select>
        )
    }

}

Dropdown.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string
    })),
    selectedIndex: PropTypes.number,
    selectedId: PropTypes.string
}

export default Dropdown;