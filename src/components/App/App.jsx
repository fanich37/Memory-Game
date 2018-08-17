import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './App.css';
import CardListContainer from '../../containers/CardListContainer';
import ButtonContainer from '../../containers/ButtonContainer';
import FinalContainer from '../../containers/FinalContainer';
import BigCardContainer from '../../containers/BigCardContainer';
import CounterContainer from '../../containers/CounterContainer';
import PicList from '../PicList/PicList';
import { STAGES } from '../../constants';

const App = ({ sourceData, stage }) => {
  const gameInnerClassNames = classNames({
    [style.game__inner]: stage === STAGES.RUNNING || stage === STAGES.PAUSED,
    [style.game__inner_hidden]: stage === STAGES.FINISHED || stage === STAGES.START
  });

  const buttonWrapperClassNames = classNames({
    [style.game__btnWrapper]: stage === STAGES.START,
    [style.game__btnWrapper_hidden]: stage !== STAGES.START
  });

  return (
    <div className={style.game}>
      <div className={buttonWrapperClassNames}>
        <ButtonContainer modifier="button_big" />
      </div>
      <div className={gameInnerClassNames}>
        <CounterContainer />
        <CardListContainer />
        <BigCardContainer />
        <PicList pics={sourceData} />
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
