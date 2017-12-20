const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			companies: []
		};
	}
	
	componentDidMount() {
		client({
			method: 'GET',
			path: '/api/companies'
		}).done(response => {
			this.setState({companies: response.entity._embedded.companies});
		})
	}
	
	render() {
		return (
				<CompanyList companies={this.state.companies}/>
		)
	}
}