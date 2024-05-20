import React from "react";

import { Input } from '../Input/Input';

export const MyForm = ({ onSubmit }) => {
	const [value, setValue] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				value={value}
				setValue={setValue}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};