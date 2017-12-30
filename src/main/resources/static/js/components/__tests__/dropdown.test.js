import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Dropdown from '../dropdown.jsx';

describe('Dropdown tests', () => {
	
	it('should render', () => {
		const output = shallow(
			<Dropdown />
		);
		expect(shallowToJson(output)).toMatchSnapshot();
	});
	
});