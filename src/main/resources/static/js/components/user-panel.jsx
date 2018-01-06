import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserPanel extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Login requested");
    }

    render() {
        return (
            <div className='martes-user-panel'>
                <form id='loginForm'>       
                    <p>             
                        <label htmlFor='username'>Username</label>
                    </p>
                    <p>
                        <input name='username' id='username' type='text' />
                    </p>
                    <p>
                        <label htmlFor='password'>Password</label>
                    </p>
                    <p>
                        <input name='password' id='password' type='password' />
                    </p>
                    <p>
                        <button onClick={(e) => this.handleSubmit(e)}>Login</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default UserPanel;
