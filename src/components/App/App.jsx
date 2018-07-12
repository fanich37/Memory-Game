import React from 'react';
import './App.css';
import Counter from '../Counter/Counter';
import Card from '../Card/Card';
import BigCard from '../BigCard/BigCard';
import data from '../../../data.json';
import { getRandomCardsArray, copyState } from '../../helpers';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			moves: 0,
			openCards: [],
			foundCards: [],
			showFoundCard: false
		};
		this.openCard = this.openCard.bind(this);
		this.closeFoundCard = this.closeFoundCard.bind(this);
		this.cards = getRandomCardsArray(data, data.length / 2);
	}

	openCard(cardIndex) {
		console.log(this.state);
		if (this.state.openCards.length === 2 || this.state.openCards.includes(cardIndex)) {
			return;
		}
		const newState = copyState(this.state);
		newState.openCards.push(cardIndex);
		if (newState.openCards.length === 2) {
			const firstCard = newState.openCards[0];
			const secondCard = newState.openCards[1];
			const timer = setTimeout(() => {
				if (this.cards[firstCard].name === this.cards[secondCard].name) {
					newState.moves++;
					newState.openCards = [];
					newState.foundCards.push(firstCard, secondCard);
					newState.showFoundCard = true;
					this.setState(newState);
				} else {
					newState.moves++;
					newState.openCards = [];
					this.setState(newState);
				}
				clearTimeout(timer);
			}, 1000);
			this.setState(newState);
			return;
		}
		this.setState(newState);
	}

	closeFoundCard() {
		const newState = copyState(this.state);
		newState.showFoundCard = false;
		this.setState(newState);
	}

	render() {
		const foundCardIndex =
			this.state.showFoundCard && this.state.foundCards.length
				? this.state.foundCards[this.state.foundCards.length - 1]
				: 0;

		return (
			<div className="game">
				<Counter moves={this.state.moves} />
				<div className="game__inner">
					{this.cards.map((card, index) => {
						return (
							<Card
								key={index}
								index={index}
								frontCard={card.id}
								openCard={this.openCard}
								isOpen={this.state.openCards.includes(index)}
								isFound={this.state.foundCards.includes(index)}
							/>
						);
					})}
				</div>
				<BigCard
					name={this.cards[foundCardIndex].name}
					age={this.cards[foundCardIndex].birthday}
					subtitle={this.cards[foundCardIndex].subtitle}
					description={this.cards[foundCardIndex].description}
					id={this.cards[foundCardIndex].id}
					isShown={this.state.showFoundCard}
					closeFoundCard={this.closeFoundCard}
				/>
			</div>
		);
	}
}

export default App;
