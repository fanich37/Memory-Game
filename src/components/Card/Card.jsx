import React from 'react';
import './Card.css';
import backSrc from '../../img/card-back.png';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.frontSrc = require(`../../img/small/s_${this.props.frontCard}@2x.jpg`);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.props.openCard(Number(this.props.index));
	}

	render() {
		const isOpen = this.props.isOpen ? ' card_open' : '';
		const isFound = this.props.isFound ? ' card_found' : '';
		return (
			<div className={`card${isOpen}${isFound}`} onClick={this.clickHandler} data-id={this.props.dataId}>
				<div className="card__back" style={{ backgroundImage: `url(${backSrc})` }} />
				<div className="card__front" style={{ backgroundImage: `url(${this.frontSrc})` }} />
			</div>
		);
	}
}

export default Card;
