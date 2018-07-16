import React from 'react';
import Button from '../Button/Button';
import './BigCard.css';
import { getAgeFromBirthday, getPhraseAccordingToNumber } from '../../helpers.js';

const BigCard = props => {
	if (!props.isShown) return '';

	const photo = require(`../../img/large/l_${props.id}@2x.jpg`);
	return (
		<div className={`bigcard${props.isShown ? ' bigcard_shown bigcard_scaled' : ''}`}>
			<article className="bigcard__inner">
				<img src={photo} alt={props.name} className="bigcard__img" />
				<header className="bigcard__header">
					<h1 className="bigcard__title bigcard__title_h1">
						<span>{props.name}, </span>
						<span>{getPhraseAccordingToNumber(getAgeFromBirthday(props.age), ['лет', 'год', 'года'])}</span>
					</h1>
					<h2 className="bigcard__title bigcard__title_h2">{props.subtitle}</h2>
				</header>
				<section className="bigcard__desc">
					<p>{props.description}</p>
				</section>
				<footer className="bigcard__footer">
					<Button title={'Дальше'} clickHandler={props.closeFoundCard} />
				</footer>
			</article>
		</div>
	);
};

export default BigCard;
