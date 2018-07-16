import React from 'react';
import style from './Button.css';

const Button = props => {
	const buttonClasses = !props.modifier ? style.button : [style.button, style.button_big].join(' ');

	return (
		<button type="button" className={buttonClasses} onClick={props.clickHandler} title={props.title}>
			{props.title}
		</button>
	);
};

export default Button;
