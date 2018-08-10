import React from 'react';
import PropTypes from 'prop-types';
import style from './App.css';
import CardsContainer from '../../containers/CardsContainer';
import ButtonContainer from '../../containers/ButtonContainer';
import FinalContainer from '../../containers/FinalContainer';
import BigCardContainer from '../../containers/BigCardContainer';
import CounterContainer from '../../containers/CounterContainer';
import Pics from '../Pics/Pics';

const App = ({ sourceData, stage }) => {
  const gameInnerClassNames = stage === 'running' || stage === 'paused'
    ? style.game__inner
    : [style.game__inner, style.game__inner_hidden].join(' ');

  const buttonWrapperClassNames = stage === 'start'
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
        <Pics pics={sourceData} />
      </div>
      <FinalContainer />
    </div>
  );
};

App.propTypes = {
  sourceData: PropTypes.arrayOf(PropTypes.object).isRequired,
  stage: PropTypes.string.isRequired
};

export default App;
