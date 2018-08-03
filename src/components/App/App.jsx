import React from 'react';
import PropTypes from 'prop-types';
import style from './App.css';
import Counter from '../Counter/Counter';
import Card from '../Card/Card';
import BigCard from '../BigCard/BigCard';
import Button from '../Button/Button';
import Result from '../Result/Result';
import { getRandomCardsArray, cloneObj } from '../../helpers';
import { NEW_GAME } from '../../constants/app';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.openCard = this.openCard.bind(this);
    this.closeFoundCard = this.closeFoundCard.bind(this);
    this.startGameAgain = this.startGameAgain.bind(this);
    this.cards = getRandomCardsArray(this.props.sourceData, this.props.sourceData.length * 2);
    this.moves = 0;
  }

  // openCard(cardIndex) {
  //   if (this.props.openCards.length === 2 || this.props.openCards.includes(cardIndex)) {
  //     return;
  //   }

  //   const newState = cloneObj(this.props);
  //   newState.openCards.push(cardIndex);

  //   if (newState.openCards.length === 2) {
  //     const firstCard = newState.openCards[0];
  //     const secondCard = newState.openCards[1];
  //     const timer = setTimeout(() => {
  //       if (this.cards[firstCard].name === this.cards[secondCard].name) {
  //         newState.moves++;
  //         newState.openCards = [];
  //         newState.foundCards.push(firstCard, secondCard);
  //         newState.showFoundCard = true;
  //         this.setState(newState);
  //       } else {
  //         newState.moves++;
  //         newState.openCards = [];
  //         this.setState(newState);
  //       }

  //       clearTimeout(timer);
  //     }, 1000);
  //     this.setState(newState);
  //     return;
  //   }

  //   this.setState(newState);
  // }
  componentDidUpdate() {
    if (this.props.openCards.length === 2) {
      this.moves++;
      const firstCard = this.props.openCards[0];
      const secondCard = this.props.openCards[1];
      const timer = setTimeout(() => {
        if (this.cards[firstCard].name === this.cards[secondCard].name) {
          this.props.dispatch({ type: 'EMPTY_OPEN_CARD' });
        } else {
          this.props.dispatch({ type: 'EMPTY_OPEN_CARD' });
        }
        clearTimeout(timer);
      }, 1000);
    }
  }

  closeFoundCard() {
    const newState = cloneObj(this.props);
    const isFinished = this.cards.length === newState.foundCards.length;

    this.setState({ showFoundCard: false, stage: isFinished ? 'finished' : undefined });
  }

  startGameAgain() {
    const newState = cloneObj(NEW_GAME);
    newState.stage = 'running';

    this.cards = getRandomCardsArray(this.props.data, this.props.data.length * 2);
    this.setState(newState);
  }

  render() {
    const foundCardIndex = this.props.foundCards.length
      ? this.props.foundCards[this.props.foundCards.length - 1]
      : 0;
    console.log('1');
    return (
      <div className={style.game}>
        {(() => {
          switch (this.props.stage) {
            case 'start':
              return (
                <Button title="Начать игру" modifier="button_big" stage="running">
                  Начать игру
                </Button>
              );
            case 'finished':
              return (
                <div>
                  <Result moves={this.moves} />
                  <Button
                    title="Играть снова"
                    clickHandler={this.startGameAgain}
                    modifier="button_big"
                  >
                    Играть снова
                  </Button>
                </div>
              );
            case 'running':
            default:
              return (
                <div>
                  <Counter moves={this.moves} />
                  <div className={style.game__inner}>
                    {this.cards.map((card, index) => (
                      <Card
                        /* eslint-disable */
                        key={index}
                        /* eslint-enable */
                        index={index}
                        frontCard={card.id}
                      />
                    ))}
                  </div>
                  {this.props.showFoundCard ? (
                    <BigCard
                      card={this.cards[foundCardIndex]}
                      closeFoundCard={this.closeFoundCard}
                    />
                  ) : (
                    ''
                  )}
                  <div style={{ display: 'none' }}>
                    {this.props.sourceData.map(item => (
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

// App.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object).isRequired
// };

export default App;
