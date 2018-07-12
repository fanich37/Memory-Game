import React from 'react';
import './Counter.css';

const Counter = props => (
	<div className="counter">
		<p>
			<span>Ходов: </span>
			<span>{props.moves}</span>
		</p>
	</div>
);

export default Counter;
