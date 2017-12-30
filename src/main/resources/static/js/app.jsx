import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MainBar from './components/main-bar.jsx';
import MainLogo from './components/main-logo.jsx';
import MainNav from './components/main-nav.jsx';
import UserPanel from './components/user-panel.jsx';

class App extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
		        <h2>Testing react component</h2>
			</div>
		)
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)