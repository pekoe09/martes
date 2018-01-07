import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MainPanel from './containers/main-panel.jsx';

class App extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
		        <h2>Testing react component</h2>
		        <MainPanel />
			</div>
		)
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)