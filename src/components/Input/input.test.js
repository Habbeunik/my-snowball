import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
	it('Displays value passed via props', () => {
		const { getByLabelText } = render(
			<Input value='08' name='test' label='Input' onChange={() => {}} />
		);
		const inputNode = getByLabelText('Input');

		expect(inputNode.value).toBe('08');
	});

	it('It calls onChange props on text change', () => {
		const handleChange = jest.fn();
		const { getByLabelText } = render(
			<Input value='08' name='test' label='Input' onChange={handleChange} />
		);
		const inputNode = getByLabelText('Input');

		fireEvent.change(inputNode, { target: { value: 12 } });

		expect(handleChange).toBeCalledTimes(1);
		expect(handleChange).toBeCalledWith('12');
	});
});
