import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class AssetAdd extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.attributes = [
                           'name'
                           ];
    }
    
    handleSubmit(e) {
        e.preventDefault();
        var newAsset = {};
        attributes.forEach(attribute => {
            newAsset[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value = '';
        });
        this.props.onCreate(newAsset);
        
        attributes.forEach(attribute => {
            ReactDOM.findDOMNode(this.refs[attribute]).value = '';
        });
    }
    
    render() {
        return (
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref='name' />
                <form>
                    <button onClick={this.handleSubmit}>Create</button>
                </form>
            </div>
        )
    }
}

AssetAdd.propTypes = {
    onCreate: PropTypes.func
}

export default AssetAdd;