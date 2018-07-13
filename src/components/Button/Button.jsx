import React from 'react';
import './Button.css';

const Button = props => {
	return (
		<button
			type="button"
			className={`button ${props.modifier ? props.modifier : ''}`}
			onClick={props.clickHandler}
			title={props.title}
		>
			{props.title}
		</button>
	);
};

export default Button;
