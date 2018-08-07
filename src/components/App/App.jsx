import React from 'react';
import PropTypes from 'prop-types';
import style from './App.css';
import Counter from '../Counter/Counter';
import CardsContainer from '../../containers/CardsContainer';
import BigCard from '../BigCard/BigCard';
import ButtonContainer from '../../containers/ButtonContainer';
import Result from '../Result/Result';
import { getRandomCardsArray } from '../../helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cards = getRandomCardsArray(this.props.sourceData, this.props.sourceData.length * 2);
  }

  // componentDidUpdate() {
  //   if (this.props.openCards.length === 2) {
  //     const firstCard = this.props.openCards[0];
  //     const secondCard = this.props.openCards[1];
  //     const timer = setTimeout(() => {
  //       if (this.cards[firstCard].name === this.cards[secondCard].name) {
  //         this.props.dispatch({ type: 'ADD_FOUND_CARD', foundCards: [firstCard, secondCard] });
  //       } else {
  //         this.props.dispatch({ type: 'EMPTY_OPEN_CARDS' });
  //       }
  //       clearTimeout(timer);
  //     }, 1000);
  //   }
  // }

  buttonClickHandler() {
    if (this.props.stage !== 'finished') {
      if (this.props.foundCards.length === this.cards.length) {
        this.props.dispatch({ type: 'FINISH_GAME' });
      } else {
        this.props.dispatch({ type: 'CLOSE_FOUND_CARD' });
      }
    } else {
      this.cards = getRandomCardsArray(this.props.sourceData, this.props.sourceData.length * 2);
      this.props.dispatch({ type: 'START_NEW_GAME' });
    }
  }

  render() {
    const foundCardIndex = this.props.foundCards.length
      ? this.props.foundCards[this.props.foundCards.length - 1]
      : 0;

    return (
      <div className={style.game}>
        {(() => {
          switch (this.props.stage) {
            case 'start':
              return <ButtonContainer title="Начать игру" modifier="button_big" stage="running" />;
            case 'finished':
              return (
                <div>
                  <Result moves={this.props.moves} />
                  <Button
                    title="Играть снова"
                    clickHandler={() => this.buttonClickHandler()}
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
                  <Counter moves={this.props.moves} />
                  <div className={style.game__inner}>
                    <CardsContainer cards={this.cards} />
                  </div>
                  {this.props.stage === 'paused' ? (
                    <BigCard
                      card={this.cards[foundCardIndex]}
                      closeFoundCard={() => this.buttonClickHandler()}
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

App.propTypes = {
  sourceData: PropTypes.arrayOf(PropTypes.object).isRequired,
  moves: PropTypes.number.isRequired,
  openCards: PropTypes.arrayOf(PropTypes.number).isRequired,
  foundCards: PropTypes.arrayOf(PropTypes.number).isRequired,
  stage: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default App;
