import React from 'react';
import './BigCard.css';

const BigCard = props => {
	const photo = require(`../../img/large/l_${props.id}@2x.jpg`);

	return (
		<div className={`bigcard${props.isShown ? ' bigcard_shown' : ''}`}>
			<article className="bigcard__inner">
				<img src={photo} alt={props.name} className="bigcard__img" />
				<header className="bigcard__header">
					<h1 className="bigcard__title bigcard__h1">
						<span>{props.name}, </span>
						<span>{props.age}</span>
					</h1>
					<h2 className="bigcard__title bigcard__h2">{props.subtitle}</h2>
				</header>
				<section className="bigcard__desc">
					<p>{props.description}</p>
				</section>
				<footer className="bigcard__footer">
					<button type="button" onClick={() => props.closeFoundCard()}>
						Дальше
					</button>
				</footer>
			</article>
		</div>
	);
};

export default BigCard;
