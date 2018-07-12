import React from 'react';
import './Card.css';
import backSrc from '../../img/card-back.png';

const Card = props => {
	const frontSrc = require(`../../img/small/s_${props.frontCard}@2x.jpg`);
	const isOpen = props.isOpen ? ' card_open' : '';
	const isFound = props.isFound ? ' card_found' : '';

	return (
		<div
			className={`card${isOpen}${isFound}`}
			onClick={() => props.openCard(Number(props.index))}
			data-id={props.dataId}
		>
			<div className="card__back" style={{ backgroundImage: `url(${backSrc})` }} />
			<div className="card__front" style={{ backgroundImage: `url(${frontSrc})` }} />
		</div>
	);
};

export default Card;
