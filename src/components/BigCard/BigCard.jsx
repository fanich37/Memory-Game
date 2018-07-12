import React from 'react';
import './BigCard.css';

class BigCard extends React.Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.props.closeFoundCard();
	}

	render() {
		const photo = require(`../../img/large/l_${this.props.id}@2x.jpg`);

		return (
			<div className={`bigcard${this.props.isShown ? ' bigcard_shown' : ''}`}>
				<article className="bigcard__inner">
					<img src={photo} alt={this.props.name} className="bigcard__img" />
					<header className="bigcard__header">
						<h1 className="bigcard__title bigcard__h1">
							<span>{this.props.name}, </span>
							<span>{this.props.age}</span>
						</h1>
						<h2 className="bigcard__title bigcard__h2">{this.props.subtitle}</h2>
					</header>
					<section className="bigcard__desc">
						<p>{this.props.description}</p>
					</section>
					<footer className="bigcard__footer">
						<button type="button" onClick={this.clickHandler}>
							Дальше
						</button>
					</footer>
				</article>
			</div>
		);
	}
}

export default BigCard;
