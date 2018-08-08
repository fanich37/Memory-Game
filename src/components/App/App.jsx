import React from 'react';
import PropTypes from 'prop-types';
import style from './App.css';
import CardsContainer from '../../containers/CardsContainer';
import ButtonContainer from '../../containers/ButtonContainer';
import FinalContainer from '../../containers/FinalContainer';
import BigCardContainer from '../../containers/BigCardContainer';
import CounterContainer from '../../containers/CounterContainer';
import Pics from '../Pics/Pics';
import { closeOpenCards, addFoundCard } from '../../actionCreators';

class App extends React.Component {
  componentDidUpdate() {
    if (this.props.openCards.length === 2) {
      const firstCardIndex = this.props.openCards[0];
      const secondCardIndex = this.props.openCards[1];
      const firstCard = this.props.cards[firstCardIndex];
      const secondCard = this.props.cards[secondCardIndex];
      const timer = setTimeout(() => {
        if (firstCard.id === secondCard.id) {
          this.props.dispatch(addFoundCard([firstCardIndex, secondCardIndex]));
        } else {
          this.props.dispatch(closeOpenCards());
        }
        clearTimeout(timer);
      }, 1000);
    }
  }

  render() {
    const gameInnerClassNames = this.props.stage === 'running' || this.props.stage === 'paused'
      ? style.game__inner
      : [style.game__inner, style.game__inner_hidden].join(' ');

    const buttonWrapperClassNames = this.props.stage === 'start'
      ? style.game__btnWrapper
      : [style.game__btnWrapper, style.game__btnWrapper_hidden].join(' ');

    return (
      <div className={style.game}>
        <div className={buttonWrapperClassNames}>
          <ButtonContainer modifier="button_big" />
        </div>
        <div className={gameInnerClassNames}>
          <CounterContainer />
          <CardsContainer />
          <BigCardContainer />
          <Pics pics={this.props.sourceData} />
        </div>
        <FinalContainer />
      </div>
    );
  }
}

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  sourceData: PropTypes.arrayOf(PropTypes.object).isRequired,
  openCards: PropTypes.arrayOf(PropTypes.number).isRequired,
  stage: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default App;
