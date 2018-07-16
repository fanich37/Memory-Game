import React from 'react';
import style from './Counter.css';

const Counter = props => (
	<div className={style.counter}>
		<p>
			<span>Ходов: </span>
			<span>{props.moves}</span>
		</p>
	</div>
);

export default Counter;
