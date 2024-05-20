import React from "react";

export const Form = ({ onSubmit }) => {
	const [value, setValue] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};