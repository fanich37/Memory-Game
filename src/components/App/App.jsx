import React from 'react';
import PropTypes from 'prop-types';
import style from './App.css';
import Counter from '../Counter/Counter';
import Card from '../Card/Card';
import BigCard from '../BigCard/BigCard';
import Button from '../Button/Button';
import Result from '../Result/Result';
import { getRandomCardsArray, copyState } from '../../helpers';
import { NEW_GAME } from '../../constants/app';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = copyState(NEW_GAME);
    this.openCard = this.openCard.bind(this);
    this.closeFoundCard = this.closeFoundCard.bind(this);
    this.startGame = this.startGame.bind(this);
    this.startGameAgain = this.startGameAgain.bind(this);
    this.cards = getRandomCardsArray(this.props.data, this.props.data.length * 2);
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
    const isFinished = this.cards.length === newState.foundCards.length;

    this.setState({ showFoundCard: false, stage: isFinished ? 'finished' : undefined });
  }

  startGame() {
    this.setState({ stage: 'running' });
  }

  startGameAgain() {
    const newState = copyState(NEW_GAME);

    this.cards = getRandomCardsArray(this.props.data, this.props.data.length * 2);
    this.setState(newState);
  }

  render() {
    const foundCardIndex = this.state.foundCards.length
      ? this.state.foundCards[this.state.foundCards.length - 1]
      : 0;

    return (
      <div className={style.game}>
        {(() => {
          switch (this.state.stage) {
            case 'start':
              return (
                <Button title="Начать игру" clickHandler={this.startGame} modifier="button_big" />
              );
            case 'finished':
              return (
                <div>
                  <Result moves={this.state.moves} />
                  <Button
                    title="Играть снова"
                    clickHandler={this.startGameAgain}
                    modifier="button_big"
                  />
                </div>
              );
            case 'running':
            default:
              return (
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
                  {this.state.showFoundCard ? (
                    <BigCard
                      card={this.cards[foundCardIndex]}
                      closeFoundCard={this.closeFoundCard}
                    />
                  ) : (
                    ''
                  )}
                  <div style={{ display: 'none' }}>
                    {this.props.data.map(item => (
                      <img
                        key={item.id}
                        src={require(`../../img/large/l_${item.id}@2x.jpg`)}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              );
          }
        })()}
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
