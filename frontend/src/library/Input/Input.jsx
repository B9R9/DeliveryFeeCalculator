import React from "react";


export const Input = ({ value, setValue}) => {
	return (
		<input
			type='text'
			value={value}
			onChange={event => setValue(event.target.value)}
		/>
	);
};