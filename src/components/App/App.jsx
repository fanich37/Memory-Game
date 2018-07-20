import React from 'react';
import style from './App.css';
import Counter from '../Counter/Counter';
import Card from '../Card/Card';
import BigCard from '../BigCard/BigCard';
import Button from '../Button/Button';
import Result from '../Result/Result';
import data from '../../../data.json';
import { getRandomCardsArray, copyState } from '../../helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'start',
      moves: 0,
      openCards: [],
      foundCards: [],
      showFoundCard: false
    };
    this.openCard = this.openCard.bind(this);
    this.closeFoundCard = this.closeFoundCard.bind(this);
    this.startGame = this.startGame.bind(this);
    this.startGameAgain = this.startGameAgain.bind(this);
    this.cards = getRandomCardsArray(data, data.length * 2);
  }

  openCard(cardIndex) {
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

    if (this.cards.length === newState.foundCards.length) {
      newState.stage = 'finished';
    }

    this.setState(newState);
  }

  startGame() {
    const newState = copyState(this.state);
    newState.stage = 'running';
    this.setState(newState);
  }

  startGameAgain() {
    const newState = copyState(this.state);
    newState.stage = 'running';
    newState.moves = 0;
    newState.openCards = [];
    newState.foundCards = [];
    newState.showFoundCard = false;
    this.cards = getRandomCardsArray(data, data.length * 2);
    this.setState(newState);
  }

  render() {
    const foundCardIndex = this.state.foundCards.length
      ? this.state.foundCards[this.state.foundCards.length - 1]
      : 0;

    let game;

    switch (this.state.stage) {
      case 'start':
        game = <Button title="Начать игру" clickHandler={this.startGame} modifier="button_big" />;
        break;
      case 'finished':
        game = (
          <div>
            <Result moves={this.state.moves} />
            <Button title="Играть снова" clickHandler={this.startGameAgain} modifier="button_big" />
          </div>
        );
        break;
      case 'running':
      default:
        game = (
          <div>
            <Counter moves={this.state.moves} />
            <div className={style.game__inner}>
              {this.cards.map((card, index) => (
                <Card
                  /* eslint-disable */
                  key={index}
                  /* eslint-enable */
                  index={index}
                  frontCard={card.id}
                  openCard={this.openCard}
                  isOpen={this.state.openCards.includes(index)}
                  isFound={this.state.foundCards.includes(index)}
                />
              ))}
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
            <div style={{ display: 'none' }}>
              {data.map(item => (
                <img key={item.id} src={require(`../../img/large/l_${item.id}@2x.jpg`)} alt="" />
              ))}
            </div>
          </div>
        );
        break;
    }

    return <div className={style.game}>{game}</div>;
  }
}

export default App;
