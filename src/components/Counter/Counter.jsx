import React from 'react';
import './Counter.css';

class Counter extends React.Component {
	render() {
		return (
			<div className="counter">
				<p>
					<span>Ходов: </span>
					<span>{this.props.moves}</span>
				</p>
			</div>
		);
	}
}

export default Counter;
